# Lịch sử và Nhật ký Prompt tạo Mockup (Rental Room System)
**Dự án:** Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)
**Thành viên tổng hợp:** @ductran281206-cell (Trần Nguyên Đức)
**Nguồn prompt:** @nhatkhaiphone-ux và @nguyenkhoi190305-cell

Tài liệu này lưu lại toàn bộ các prompt (bao gồm cả các phiên bản thử nghiệm thất bại và phiên bản thành công cuối cùng) được sử dụng để thiết kế mockup cho hệ thống của nhóm dựa trên phong cách thiết kế đã thống nhất trong [style-guide.md](./style-guide.md).

---

## 1. Màn hình Trang chủ (Home Page)
**Người chịu trách nhiệm:** @nhatkhaiphone-ux  
**Công cụ sử dụng:** Google Stitch

### ❌ Lần 1: Thử nghiệm thất bại (Prompt cơ bản)
- **Prompt đã nhập:**
  ```text
  Design a homepage for a rental room web app with a header, banner, categories, and room list.
  ```
- **Kết quả đầu ra:** 
  Giao diện sinh ra rất đơn điệu và chung chung, sử dụng giao diện tối (dark theme) mặc định không đúng yêu cầu của nhóm. Số lượng danh mục phòng không đúng (chỉ có 3 danh mục thay vì 5), và danh sách phòng hiển thị dạng danh sách dọc thay vì dạng lưới card. Tên thương hiệu và phong cách "AI" hoàn toàn bị thiếu.
- **Bài học kinh nghiệm:** Cần chỉ định rõ màu sắc chủ đạo, font chữ, bố cục lưới, tên dự án, số lượng phần tử và phong cách thiết kế hiện đại (AI-powered).

### ✅ Lần 2: Phiên bản thành công (Đã tối ưu hóa)
- **Prompt đã nhập:**
  ```text
  High-fidelity UI mockup of a home page for a modern rental room finding website named "RentalRoom". Clean, modern web design, light mode background with a subtle pastel blue and purple gradient. Header contains logo "RentalRoom", navigation (Trang chủ, Phòng trọ, Danh mục, Liên hệ), and a cart/favorites icon with badge "0". A hero banner below header with title "Tìm Phòng Trọ Thông Minh Với AI" and CTA button "Khám phá ngay". A category section with 5 category cards (icon + category name + room count, categories: Phòng trọ, Chung cư mini, Căn hộ dịch vụ, Nhà nguyên căn, Ở ghép). A room grid showing 8 featured room cards with room photos, titles, monthly price in VND (e.g. 3.500.000đ/tháng), location tag, rating stars, and "Thêm vào giỏ" button. Accent colors: primary blue #2563EB and AI purple #7C3AED. UI elements are rounded with soft shadows. No device frame.
  ```
- **Kết quả đầu ra:** Đạt chuẩn. Giao diện sáng sủa với dải màu pastel chuyển từ xanh sang tím. Đầy đủ logo "RentalRoom", badge giỏ hàng bằng 0, 5 danh mục phòng khớp với thiết kế CSDL, và lưới 8 thẻ phòng trọ bo góc 16px đẹp mắt.

---

## 2. Màn hình Danh sách phòng (Room List Page)
**Người chịu trách nhiệm:** @nhatkhaiphone-ux  
**Công cụ sử dụng:** Google Stitch

### ❌ Lần 1: Thử nghiệm thất bại (Thiếu bộ lọc và thanh tìm kiếm AI)
- **Prompt đã nhập:**
  ```text
  A page listing rental rooms for RentalRoom website. Show a search bar, some filters, and room cards.
  ```
- **Kết quả đầu ra:**
  Thanh tìm kiếm sinh ra kiểu ô nhập văn bản chữ nhật đen trắng cơ bản, không mang phong cách công nghệ AI. Bộ lọc hiển thị dạng checkbox dọc chiếm quá nhiều không gian. Lưới phòng hiển thị kích thước không đồng đều với trang chủ, và thiếu phần phân trang ở cuối trang.
- **Bài học kinh nghiệm:** Cần đặc tả hình khối của thanh tìm kiếm (Pill-shape), các bộ lọc danh mục ngang, cấu trúc lưới phòng trọ và định vị rõ phần phân trang ở chân trang.

### ✅ Lần 2: Phiên bản thành công (Đã tối ưu hóa)
- **Prompt đã nhập:**
  ```text
  High-fidelity UI mockup of a room listing page for "RentalRoom" website. Clean modern interface, light background. Top contains an AI Search Bar (pill-shaped search bar with purple border, sparkly AI icon, and search button). Below search bar is a horizontal category filter list with "Tất cả", "Phòng trọ", "Chung cư mini", "Căn hộ dịch vụ", "Nhà nguyên căn". A room grid shows 8 room cards in 4 columns, each with room photo, title, monthly price, location, rating, and "Thêm vào giỏ" button. Bottom has simple pagination (Prev, 1, 2, 3, Next). Accent colors primary blue #2563EB and AI purple #7C3AED. No device frame.
  ```
- **Kết quả đầu ra:** Đạt chuẩn. Thanh tìm kiếm bo tròn viền tím lấp lánh AI rất nổi bật. Bộ lọc ngang nhỏ gọn nằm bên dưới giúp tiết kiệm diện tích. Lưới 8 card phòng hiển thị đều tăm tắp, tích hợp nút điều hướng trang tiện lợi.

---

## 3. Màn hình Chi tiết phòng (Room Detail Page)
**Người chịu trách nhiệm:** @nguyenkhoi190305-cell  
**Công cụ sử dụng:** Figma Make (Prototype)

### ❌ Lần 1: Thử nghiệm thất bại (Thiếu cấu phần thông tin và AI match)
- **Prompt đã nhập:**
  ```text
  Create a room detail page. Display image on the left and details on the right with a booking button.
  ```
- **Kết quả đầu ra:**
  Bố cục 2 cột được dựng lên nhưng cột thông tin bên phải rất thô sơ. Thiếu thông tin quan trọng như diện tích phòng ($m^2$), tiền cọc, và danh sách tiện ích đi kèm (AC, Wifi...). Bản tóm tắt nhận xét và điểm đánh giá sự phù hợp từ AI (Match Score) bị bỏ qua. Nút booking không mô tả tương tác click để cập nhật badge.
- **Bài học kinh nghiệm:** Phải cung cấp dữ liệu mẫu thực tế của phòng, liệt kê rõ các tiện ích cần hiển thị bằng biểu tượng, chỉ định rõ tính năng điểm số AI và hiệu ứng click nút.

### ✅ Lần 2: Phiên bản thành công (Đã tối ưu hóa)
- **Prompt đã nhập:**
  ```text
  High-fidelity UI mockup of a room detail page for "RentalRoom" website. Responsive web interface, light mode. Shows breadcrumbs "Trang chủ > Phòng trọ > Phòng trọ khép kín Cầu Giấy". Main section is split: left column shows a large room photo (high quality, bright interior, window), right column shows room title "Phòng trọ khép kín Cầu Giấy", location "Quận Cầu Giấy, Hà Nội", rating stars, price 3.500.000đ/tháng, deposit price 3.500.000đ, size 25m2, availability status "Còn trống", amenities list (WiFi, Điều hòa, Tủ lạnh), description text, and a prominent blue button "Thêm vào giỏ" with cart icon. Accent colors primary blue #2563EB and purple. UI elements have smooth rounded corners. Clicking the "Thêm vào giỏ" button updates the navbar cart badge counter from 0 to 1. No device frame.
  ```
- **Kết quả đầu ra:** Đạt chuẩn. Bố cục 2 cột rất cân đối: Cột trái trưng bày phòng trọ sáng sủa; cột phải đầy đủ thông tin chi tiết về diện tích, giá cọc, các chip icon tiện ích. Điểm AI Match Score (95%) được hiển thị dưới dạng badge công nghệ. Trình mô phỏng Figma cập nhật trực quan số lượng badge từ 0 lên 1 khi nhấn "Thêm vào giỏ".

---

## 4. Màn hình Giỏ hàng / Đặt cọc (Cart Page)
**Người chịu trách nhiệm:** @nguyenkhoi190305-cell  
**Công cụ sử dụng:** Figma Make (Prototype)

### ❌ Lần 1: Thử nghiệm thất bại (Thiếu dạng bảng và các nút điều chỉnh)
- **Prompt đã nhập:**
  ```text
  Create a cart page for saved rental rooms. Show total deposit price and submit request button.
  ```
- **Kết quả đầu ra:**
  AI chỉ sinh ra một danh sách các phòng xếp chồng lên nhau như ở màn danh sách tìm kiếm, thiếu cấu trúc bảng (table) rõ ràng. Không có các nút điều chỉnh số tháng dự kiến thuê [ - 1 + ], dẫn đến không thể thay đổi tổng số tiền đặt cọc cần thanh toán.
- **Bài học kinh nghiệm:** Chỉ định rõ cấu trúc bảng (cart table) với các cột dữ liệu cụ thể và các nút tăng giảm số tháng cọc để làm nổi bật nghiệp vụ cọc phòng trọ.

### ✅ Lần 2: Phiên bản thành công (Đã tối ưu hóa)
- **Prompt đã nhập:**
  ```text
  High-fidelity UI mockup of a shopping cart / saved rooms page for "RentalRoom" website. Header shows cart/saved icon badge updated to "1". Main area displays a cart table with columns: Room Image, Title, Monthly Price, Quantity/Month (with plus and minus buttons, e.g. [- 1 +]), Subtotal, and Delete button. Below the table, there is a total sum box showing "Tổng tiền đặt cọc: 3.500.000đ" and a primary CTA button "Thanh toán đặt cọc". Clean light background, modern design, primary colors #2563EB blue and #7C3AED purple. Rounded cards, soft shadow. No device frame.
  ```
- **Kết quả đầu ra:** Đạt chuẩn. Giao diện hiển thị dưới dạng bảng quản lý cực kỳ chuyên nghiệp. Người dùng có thể bấm nút [-] hoặc [+] để thay đổi số tháng thuê dự kiến, tổng số tiền đặt cọc tự động tính toán lại trực quan. Nút "Thanh toán đặt cọc" nổi bật với dải màu gradient công nghệ.
