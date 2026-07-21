# Bài Báo Cáo: Nền Tảng Cho Thuê Phòng Trọ (Rental Room Platform)
**Môn học:** Front-End Frameworks (FER202)
**Nhóm:** [Tên Nhóm/Tên Thành Viên]

---

## Slide 1: Giới thiệu chung
**Tiêu đề:** Nền Tảng Tìm Kiếm & Cho Thuê Phòng Trọ
**Nội dung:**
- Mục tiêu dự án: Xây dựng một nền tảng web hiện đại giúp kết nối người có nhu cầu thuê phòng và chủ nhà.
- Giải quyết vấn đề: Tìm phòng trọ khó khăn, thông tin không minh bạch, thiếu công cụ lọc hiệu quả.
- Điểm nổi bật: Giao diện trực quan, tính năng đầy đủ, trải nghiệm người dùng mượt mà trên mọi thiết bị.

---

## Slide 2: Các tính năng cốt lõi (Core Features)
**Nội dung:**
- **Người thuê:**
  - Tìm kiếm & Lọc phòng theo giá, vị trí, tiện ích.
  - Xem chi tiết phòng (hình ảnh, mô tả).
  - Thêm phòng vào danh sách yêu thích (Wishlist).
  - Đăng nhập / Đăng ký.
- **Chủ trọ / Admin:**
  - Quản lý danh sách phòng (CRUD: Thêm, Đọc, Sửa, Xóa).
  - Quản lý trạng thái phòng trống.

---

## Slide 3: Công nghệ sử dụng (Tech Stack)
**Nội dung:**
- **Core Framework:** React 19, Vite (cho tốc độ build và HMR nhanh chóng).
- **Styling:** TailwindCSS 4.0, Bootstrap 5 (Responsive & Utility-first CSS).
- **State Management:** Redux Toolkit, React Hooks (Custom hooks như `useLocalStorage`).
- **Routing:** React Router DOM (v7).
- **Backend Mocking:** JSON Server (RESTful API mô phỏng).
- **Authentication:** Google OAuth 2.0 (`@react-oauth/google`).

---

## Slide 4: Kiến trúc hệ thống & Component Tree
**Nội dung:**
- **Kiến trúc:** Component-based architecture.
- **Pages:** HomePage, RoomListPage, RoomDetail, Dashboard.
- **Components:** Header, Footer, RoomCard, RoomGrid, FilterBar.
- **Data Flow:** Dữ liệu từ API -> Redux Store / Local State -> UI Components.
- *Có thể chèn hình ảnh sơ đồ Component Tree vào đây*

---

## Slide 5: Quản lý Trạng Thái (State Management)
**Nội dung:**
- Sử dụng **Redux Toolkit** cho global state (Quản lý User, Authentication, Cart/Wishlist).
- Sử dụng **React Hooks** (`useState`, `useEffect`) cho component-level state (Form inputs, UI toggles).
- Tối ưu hóa render và hiệu suất với cấu trúc state rõ ràng, tránh prop drilling.

---

## Slide 6: Giao diện Responsive (UI/UX)
**Nội dung:**
- **Mobile First Approach:** Thiết kế tối ưu cho điện thoại trước.
- **Breakpoints:**
  - Mobile: `375px`
  - Tablet: `768px`
  - Desktop: `1280px`
- Sử dụng grid/flexbox của TailwindCSS để tự động điều chỉnh layout (ví dụ: lưới 1 cột trên mobile, 3-4 cột trên desktop).

---

## Slide 7: Kiểm thử E2E & Xử lý lỗi (Bug Fixes)
**Nội dung:**
- Kiểm thử luồng người dùng toàn diện (End-to-End).
- Đảm bảo tính năng CRUD hoạt động ổn định.
- Fix lỗi routing 404 trên production bằng cấu hình `vercel.json`.
- Kiểm tra tính hợp lệ của Form và hiển thị thông báo lỗi (Error Boundaries, Toast Notifications).

---

## Slide 8: Triển khai ứng dụng (Build & Deploy)
**Nội dung:**
- **Build Tool:** Chạy `npm run build` thông qua Vite để tạo bản build tối ưu.
- **Hosting Platform:** Vercel.
- **Quá trình Deploy:** 
  - CI/CD tự động qua GitHub.
  - Cấu hình file `vercel.json` để rewrite route về `index.html`, giải quyết triệt để lỗi 404 khi tải lại trang hoặc truy cập URL trực tiếp.
- Link truy cập thực tế (Live Demo Link).

---

## Slide 9: Tổng kết & Hướng phát triển tương lai
**Nội dung:**
- **Thành quả đạt được:** Hoàn thiện 100% các yêu cầu cơ bản và nâng cao của dự án.
- **Bài học kinh nghiệm:** Làm việc nhóm, quản lý state phức tạp, tối ưu hóa CSS.
- **Hướng phát triển:** Tích hợp thanh toán online (VNPay/Momo), tính năng chat realtime giữa chủ nhà và người thuê, bản đồ vệ tinh.

---

## Slide 10: Q&A (Hỏi Đáp)
**Nội dung:**
- Cảm ơn Thầy/Cô và các bạn đã theo dõi.
- Xin mời các câu hỏi.
