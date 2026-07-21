import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'db.json');
const screenshotsDir = path.join(__dirname, 'docs/screenshots/week08');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getDbData() {
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // ============================================
    // 1. Chụp ảnh 3 trạng thái bất đồng bộ
    // ============================================
    
    // a. Empty State
    console.log("-> Taking Empty State screenshot...");
    await page.setRequestInterception(true);
    let emptyHandler = request => {
      if (request.url().includes('localhost:3001/rooms') && request.method() === 'GET') {
        request.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify([])
        });
      } else {
        request.continue();
      }
    };
    page.on('request', emptyHandler);
    await page.goto('http://localhost:5173/admin/rooms', { waitUntil: 'networkidle2' });
    await sleep(1000);
    await page.screenshot({ path: path.join(screenshotsDir, 'empty-state.png') });
    page.off('request', emptyHandler);
    await page.setRequestInterception(false);

    // b. Error Alert
    console.log("-> Taking Error Alert screenshot...");
    await page.setRequestInterception(true);
    let errorHandler = request => {
      if (request.url().includes('localhost:3001/rooms') && request.method() === 'GET') {
        request.abort('failed');
      } else {
        request.continue();
      }
    };
    page.on('request', errorHandler);
    await page.goto('http://localhost:5173/admin/rooms', { waitUntil: 'networkidle2' });
    await page.waitForSelector('.alert-danger', { timeout: 5000 }).catch(() => {});
    await sleep(1000);
    await page.screenshot({ path: path.join(screenshotsDir, 'error-alert.png') });
    page.off('request', errorHandler);
    await page.setRequestInterception(false);

    // c. Loading Spinner
    console.log("-> Taking Loading Spinner screenshot...");
    await page.setRequestInterception(true);
    let loadingRequest;
    let loadingHandler = request => {
      if (request.url().includes('localhost:3001/rooms') && request.method() === 'GET') {
        loadingRequest = request;
      } else {
        request.continue();
      }
    };
    page.on('request', loadingHandler);
    await page.goto('http://localhost:5173/admin/rooms');
    await page.waitForSelector('.spinner-border', { timeout: 5000 }).catch(() => {});
    await page.screenshot({ path: path.join(screenshotsDir, 'loading-spinner.png') });
    if (loadingRequest) {
      await loadingRequest.continue();
    }
    page.off('request', loadingHandler);
    await page.setRequestInterception(false);

    // ============================================
    // 2. E2E Test: Thêm -> Sửa -> Xóa
    // ============================================
    console.log("\n=== Bắt đầu E2E Test ===");
    const initialData = getDbData();
    const initialRoomCount = initialData.rooms.length;

    await page.goto('http://localhost:5173/admin/rooms', { waitUntil: 'networkidle2' });
    await sleep(2000); // Đợi load xong data thực

    // THÊM PHÒNG
    console.log("1. Thêm phòng...");
    let addBtn = await page.evaluateHandle(() => {
      return Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('+ Thêm phòng mới'));
    });
    await addBtn.click();
    await page.waitForSelector('input[name="title"]', { visible: true });
    
    await page.type('input[name="title"]', 'Phòng Test E2E');
    await page.type('input[name="address"]', '123 Test E2E Address');
    await page.type('input[name="price"]', '5000000');
    await page.type('input[name="area"]', '30');
    
    let saveBtn = await page.evaluateHandle(() => {
      return Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Lưu phòng'));
    });
    await saveBtn.click();
    await sleep(2000); // Wait for API response and re-render

    const afterAddData = getDbData();
    console.log(`Số lượng phòng sau khi thêm: ${afterAddData.rooms.length} (Ban đầu: ${initialRoomCount})`);
    if (afterAddData.rooms.length === initialRoomCount + 1) {
      console.log("-> db.json ĐÃ thay đổi đồng bộ (Thêm phòng thành công)");
    } else {
      console.log("-> THẤT BẠI: db.json chưa thay đổi");
    }

    // SỬA PHÒNG
    console.log("2. Sửa phòng...");
    let editBtn = await page.evaluateHandle(() => {
      let rows = Array.from(document.querySelectorAll('tr'));
      let targetRow = rows.find(r => r.textContent.includes('Phòng Test E2E'));
      if (targetRow) {
        return Array.from(targetRow.querySelectorAll('button')).find(b => b.textContent.includes('Sửa'));
      }
      return null;
    });
    
    if (editBtn) {
      await editBtn.click();
      await page.waitForSelector('input[name="title"]', { visible: true });
      
      const titleInput = await page.$('input[name="title"]');
      await titleInput.click({ clickCount: 3 });
      await page.keyboard.press('Backspace');
      await page.type('input[name="title"]', 'Phòng Test E2E Updated');
      
      let updateBtn = await page.evaluateHandle(() => {
        return Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Cập nhật'));
      });
      await updateBtn.click();
      await sleep(2000);

      const afterEditData = getDbData();
      const updatedRoom = afterEditData.rooms.find(r => r.title.includes('Updated'));
      if (updatedRoom) {
        console.log("-> db.json ĐÃ thay đổi đồng bộ (Sửa phòng thành công)");
      } else {
        console.log("-> THẤT BẠI: db.json chưa thay đổi");
      }
    } else {
      console.log("-> THẤT BẠI: Không tìm thấy nút Sửa cho phòng vừa tạo.");
    }

    // XÓA PHÒNG
    console.log("3. Xóa phòng...");
    let deleteBtn = await page.evaluateHandle(() => {
      let rows = Array.from(document.querySelectorAll('tr'));
      let targetRow = rows.find(r => r.textContent.includes('Phòng Test E2E Updated'));
      if (targetRow) {
        return Array.from(targetRow.querySelectorAll('button')).find(b => b.textContent.includes('Xóa'));
      }
      return null;
    });

    if (deleteBtn) {
      page.on('dialog', async dialog => {
        await dialog.accept();
      });
      
      await deleteBtn.click();
      await sleep(2000);

      const afterDeleteData = getDbData();
      console.log(`Số lượng phòng sau khi xóa: ${afterDeleteData.rooms.length}`);
      if (afterDeleteData.rooms.length === initialRoomCount) {
        console.log("-> db.json ĐÃ thay đổi đồng bộ (Xóa phòng thành công)");
      } else {
        console.log("-> THẤT BẠI: db.json chưa thay đổi");
      }
    } else {
      console.log("-> THẤT BẠI: Không tìm thấy nút Xóa cho phòng vừa tạo.");
    }

    console.log("=== Kết thúc E2E Test ===");
  } catch(e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
