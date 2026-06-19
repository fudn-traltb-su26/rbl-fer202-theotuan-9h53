# Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)

Chào mừng bạn đến với **Rental Room System** — ứng dụng tìm kiếm và đặt cọc phòng trọ thông minh tích hợp công nghệ hỗ trợ tìm kiếm và đánh giá độ phù hợp (Match Score) bằng trí tuệ nhân tạo (AI). Dự án được phát triển bằng **React, Vite, Bootstrap (React-Bootstrap)** và sử dụng dữ liệu giả lập thông qua **JSON-Server**.

---

## 1. Thành viên Nhóm & Phân công Nhiệm vụ

| Vai trò | Thành viên chịu trách nhiệm | Nhiệm vụ chính |
| :---: | :--- | :--- |
| **[A]** | **@pdung4367** (Huỳnh Nguyễn Thị Phương Dung) | Tạo GitHub repo, cấu hình Vite project, tổ chức cấu trúc thư mục. |
| **[B]** | **@nhatkhaiphone-ux** (Hoàng Nhật Kha) | Thiết kế mockup Trang chủ + Danh sách phòng bằng Google Stitch. Thống nhất Style Guide. |
| **[C]** | **@nguyenkhoi190305-cell** (Nguyễn Trọng Nguyên Khôi) | Thiết kế mockup Chi tiết phòng + Giỏ hàng bằng Figma Make. Xuất PNG và viết Handoff. |
| **[D]** | **@Hoanglong91** (Bùi Hoàng Long) | Thiết kế cơ sở dữ liệu `db.json` (categories, rooms). |
| **[E]** | **@ductran281206-cell** (Trần Nguyên Đức) | Phác thảo & vẽ Component Tree, viết README.md, tổng hợp prompt log. |

---

## 2. Các Tính năng Chính của Hệ thống

1. **Trang Chủ (Home Page):**
   - Header điều hướng hiện đại, hỗ trợ Toggle Theme (Sáng/Tối) và biểu tượng giỏ hàng cập nhật số lượng phòng quan tâm theo thời gian thực.
   - Banner chào mừng với khẩu hiệu tìm phòng thông minh AI.
   - Danh sách 5 danh mục phòng trực quan (Phòng trọ, Chung cư mini, Căn hộ dịch vụ, Nhà nguyên căn, Ở ghép).
   - Lưới hiển thị 8 phòng nổi bật/giá tốt nhất.
2. **Danh Sách & Lọc Tìm Kiếm Phòng (Room List Page):**
   - Thanh tìm kiếm thông minh tích hợp tính năng lọc nâng cao (loại phòng, khoảng giá thuê, các tiện ích mong muốn).
   - Cơ chế tìm kiếm tối ưu (Debounced Search) giảm thiểu request thừa lên server.
   - Phân trang (Pagination) mượt mà cho danh sách phòng.
3. **Chi Tiết Phòng Trọ (Room Detail Page):**
   - Trưng bày bộ sưu tập ảnh thực tế phòng trọ chất lượng cao.
   - Chi tiết các thông số phòng: diện tích ($m^2$), giá thuê, giá đặt cọc, tình trạng còn trống và các tiện ích đi kèm (Wifi, máy lạnh, chỗ để xe, máy giặt, v.v.).
   - **AI Match Score & Summary:** Đưa ra tóm tắt thông tin phòng và tính điểm phần trăm độ phù hợp với nhu cầu người thuê từ AI.
4. **Giỏ Hàng & Quản lý Yêu Cầu Thuê (Cart Page):**
   - Bảng tổng hợp danh sách các phòng trọ đang quan tâm.
   - Cho phép tùy chỉnh số lượng tháng dự kiến thuê (tăng/giảm số tháng đặt cọc) và tự động tính tổng tiền cọc dự kiến.
   - Nút gửi yêu cầu đặt chỗ/thông tin liên hệ chủ phòng.
5. **Trang Quản lý Admin (Room Manage Page):**
   - Giao diện dạng bảng (table) hiển thị đầy đủ thông tin phòng trọ dành cho Admin/Chủ trọ.
   - Hỗ trợ thao tác CRUD đầy đủ: Thêm mới, Sửa thông tin, Xóa phòng trọ thông qua modal nhập liệu và tương tác trực tiếp với API `json-server`.

---

## 3. Cấu trúc Thư mục Dự án

Mã nguồn dự án được tổ chức khoa học theo mô hình chia nhỏ component để dễ bảo trì:

```text
rental-room-app/
├── db.json                 # Cơ sở dữ liệu giả lập (Rooms & Categories)
├── package.json            # Quản lý script và thư viện phụ thuộc
├── docs/                   # Tài liệu thiết kế và phân tích
│   ├── component-tree.png  # Sơ đồ Component Tree dạng hình ảnh
│   └── mockup/
│       ├── homepage.png, booklist.png, bookdetail.png, cart.png (Mockups)
│       ├── style-guide.md  # Bộ nhận diện & Quy tắc UI/UX
│       ├── handoff.md      # Ánh xạ từ Thiết kế sang Components
│       ├── prompts.md      # Nhật ký Prompt AI sinh mockup
│       └── evaluation.md   # Đánh giá chất lượng Mockup
├── src/
│   ├── assets/             # Hình ảnh tĩnh và logo dự án
│   ├── components/         # Các Reusable Components (Header, Footer, RoomCard...)
│   │   └── admin/          # Các components dành riêng cho trang Admin (RoomModal...)
│   ├── pages/              # Các Container/Page Components (HomePage, CartPage...)
│   │   └── admin/          # Trang admin quản lý (RoomManagePage...)
│   ├── context/            # Context API quản lý State dùng chung (CartContext, ThemeContext)
│   ├── hooks/              # Custom hooks hỗ trợ fetching hoặc debounce logic
│   ├── services/           # Axios config và các API service gọi đến JSON-Server
│   ├── App.jsx             # Component gốc cấu hình Routes và Providers
│   ├── App.css             # Style cục bộ của ứng dụng
│   ├── index.css           # CSS toàn cục chứa các biến thiết kế (tokens)
│   └── main.jsx            # Điểm khởi chạy của ứng dụng React
```

*Để biết chi tiết hơn về các thành phần và sơ đồ cây components, vui lòng đọc [Tài liệu Component Tree](./docs/component-tree.md).*

---

## 4. Hướng dẫn Cài đặt Môi trường

### Bước 1: Cài đặt Node.js
- Đảm bảo máy tính đã cài đặt **Node.js phiên bản 18 trở lên**.
- Kiểm tra phiên bản bằng lệnh:
  ```bash
  node -v
  ```

### Bước 2: Cài đặt VS Code Extensions Khuyên Dùng
- **ES7+ React/Redux/React-Native snippets**: Hỗ trợ gõ nhanh cú pháp React.
- **Prettier - Code formatter**: Tự động định dạng mã nguồn chuẩn hóa.
- **ESLint**: Phát hiện lỗi cú pháp và cảnh báo code chất lượng kém.
- **GitLens**: Theo dõi lịch sử thay đổi code trên Git.

---

## 5. Hướng dẫn Chạy Dự án

Để chạy toàn bộ hệ thống (gồm giao diện Front-end và dữ liệu giả lập Back-end), thực hiện các bước sau:

### Bước 1: Cài đặt các thư viện phụ thuộc (Dependencies)
Mở terminal tại thư mục gốc của dự án (`Rental_Room`) và chạy lệnh:
```bash
npm install
```

### Bước 2: Khởi động Mock API Server (JSON-Server)
Mock API chạy trên cổng **3001** để cung cấp dữ liệu phòng và danh mục. Chạy lệnh sau:
```bash
npm run server
```
*Endpoint chính sẽ hoạt động tại: http://localhost:3001/rooms và http://localhost:3001/categories*

### Bước 3: Khởi động Web App (Vite Development Server)
Mở một terminal mới (hoặc tab mới) tại thư mục gốc và chạy lệnh:
```bash
npm run dev
```
*Giao diện trang web sẽ khả dụng tại: http://localhost:5173*
