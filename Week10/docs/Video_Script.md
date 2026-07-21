# Kịch Bản Quay Video Demo Dự Án (Thời lượng: 3 - 5 phút)

**Người Trình Bày:** [Tên người thuyết trình]
**Mục Đích:** Trình diễn các chức năng chính, luồng người dùng (E2E) và tính năng Responsive của ứng dụng Rental Room.

---

## 1. Giới thiệu (0:00 - 0:30)
- **Hành động:** Mở trang chủ (`/`) trên màn hình desktop (1280px).
- **Lời thoại (Gợi ý):** 
  "Xin chào Thầy/Cô và các bạn. Đây là dự án nền tảng tìm kiếm và cho thuê phòng trọ của nhóm chúng em. Giao diện trang chủ được thiết kế hiện đại, làm nổi bật các phòng đang hot. Chúng em áp dụng TailwindCSS để đảm bảo trải nghiệm tốt nhất."

## 2. Trình diễn tính năng Xem & Lọc Phòng (0:30 - 1:30)
- **Hành động:** 
  - Cuộn qua danh sách phòng tại trang chủ.
  - Chuyển sang trang danh sách phòng (`/rooms`).
  - Sử dụng thanh công cụ lọc (Filter): Lọc theo khoảng giá, loại phòng, hoặc thành phố.
  - Xóa bộ lọc.
  - Click vào một phòng cụ thể để vào trang Chi tiết (`/rooms/:id`).
- **Lời thoại (Gợi ý):** 
  "Người dùng có thể dễ dàng tìm kiếm phòng bằng công cụ lọc đa dạng theo giá hoặc khu vực. Dữ liệu được cập nhật tức thì. Khi click vào phòng, hệ thống sẽ hiển thị trang chi tiết gồm ảnh, mô tả và tiện ích của phòng đó."

## 3. Trình diễn tính năng Người Dùng (Wishlist / Giỏ hàng) (1:30 - 2:30)
- **Hành động:** 
  - Tại trang chi tiết phòng, nhấn nút thả tim (Add to Wishlist).
  - Mở trang Wishlist/Cart để hiển thị danh sách các phòng đã lưu.
  - Xóa 1 phòng khỏi Wishlist.
  - (Tùy chọn) Thử đăng nhập qua Google OAuth hoặc Form đăng nhập.
- **Lời thoại (Gợi ý):** 
  "Để tiện theo dõi, người thuê có thể thêm phòng vào danh sách yêu thích. Dữ liệu này được lưu trữ qua state management hoặc local storage để không bị mất khi tải lại trang."

## 4. Trình diễn CRUD & Phân Quyền Chủ Trọ (2:30 - 3:30)
- **Hành động:**
  - Truy cập vào trang Dashboard của Chủ nhà / Admin.
  - Thực hiện **Thêm (Create)** một phòng mới (điền form, submit).
  - Trở lại danh sách xem phòng vừa thêm đã xuất hiện.
  - Thực hiện **Sửa (Update)** giá hoặc tên của phòng đó.
  - Thực hiện **Xóa (Delete)** phòng đó và xác nhận trên UI.
- **Lời thoại (Gợi ý):** 
  "Dự án hỗ trợ đầy đủ luồng CRUD. Ở góc độ chủ nhà, ta có thể thêm một phòng mới vào hệ thống. Các thao tác thêm, sửa, xóa đều được validation kỹ càng và cập nhật state real-time mà không cần reload."

## 5. Trình diễn Responsive (Giao diện đa thiết bị) (3:30 - 4:15)
- **Hành động:** 
  - Mở DevTools (F12) trên trình duyệt, chuyển chế độ xem thiết bị.
  - Trình diễn ở kích thước Tablet (768px): Xem grid layout chuyển đổi.
  - Trình diễn ở kích thước Mobile (375px): Xem thanh điều hướng chuyển thành Hamburger menu, các danh sách phòng chuyển về dạng 1 cột.
- **Lời thoại (Gợi ý):** 
  "Nhóm áp dụng triết lý Mobile First nên ứng dụng hoạt động mượt mà trên mọi kích thước màn hình. Các bạn có thể thấy layout tự động thay đổi từ 4 cột trên Desktop xuống còn 1 cột trên Mobile để dễ đọc."

## 6. Tổng kết & Triển khai thực tế (Deploy) (4:15 - 5:00)
- **Hành động:** 
  - Mở URL đã deploy trên Vercel (ví dụ: `https://rental-room-project.vercel.app`).
  - Thử reload lại một trang con (ví dụ `/rooms`) để chứng minh lỗi 404 đã được fix nhờ file `vercel.json`.
- **Lời thoại (Gợi ý):** 
  "Dự án đã được deploy live lên Vercel. Chúng em cũng đã cấu hình `vercel.json` để xử lý lỗi rewrite của Single Page Application. Ứng dụng chạy rất nhanh và ổn định trên thiết bị thật. Phần trình bày của nhóm đến đây là kết thúc, xin cảm ơn mọi người đã theo dõi!"
