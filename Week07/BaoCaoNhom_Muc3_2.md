# Báo cáo Mục 3.2: Bảng phân tích ứng dụng thực tế của Hooks

Bảng dưới đây tổng hợp và so sánh đặc điểm cũng như các trường hợp ứng dụng thực tế của 3 loại Hooks quan trọng (`useEffect`, `useContext`, `useRef`) trong dự án Rental Room.

| Hook | Đặc điểm & Vai trò chính | Ứng dụng thực tế trong dự án |
| :--- | :--- | :--- |
| **`useEffect`** | Thực thi các side-effects (tác vụ phụ) ngoài luồng render chính. Giúp đồng bộ hóa Component với các hệ thống bên ngoài hoặc theo dõi sự thay đổi của Dependencies (state/props). | - **Cập nhật tiêu đề trang (Document Title):** Theo dõi biến `totalItems`, mỗi khi số lượng đổi thì tự động đổi title trình duyệt (ví dụ: `CozySpace - 2 phòng đã lưu`).<br>- **Giả lập API Call / Loading:** Tạo một độ trễ `setTimeout` lúc mount Component ở trang `RoomListPage` để hiển thị spinner, sau đó tắt loading.<br>- **Kích hoạt tự động (Auto-focus):** Gọi lệnh `focus()` cho thẻ input ngay khi trạng thái loading kết thúc. |
| **`useContext`** | Truyền tải và chia sẻ dữ liệu (Global State) xuyên suốt cây Component một cách dễ dàng. Giải quyết triệt để vấn đề **Props Drilling** (truyền props bắc cầu qua nhiều cấp trung gian vô nghĩa). | - **Xử lý Đặt phòng (Booking/Cart):** `Header` lấy tổng số lượng phòng, `RoomCard` gọi hàm thêm phòng trực tiếp từ Global Context mà không cần các Component trung gian như `App`, `HomePage`, hay `RoomGrid` phải truyền prop.<br>- **Quản lý Xác thực (Auth):** Chia sẻ thông tin user đăng nhập cho thanh điều hướng và các trang.<br>- **Chế độ Giao diện (Theme):** Lưu trữ và cung cấp toggle chuyển đổi giữa chế độ Sáng/Tối. |
| **`useRef`** | Tạo ra một biến tham chiếu giữ nguyên giá trị qua mỗi lần re-render, không kích hoạt re-render khi bị thay đổi. Thường được dùng để can thiệp trực tiếp vào các DOM element. | - **Tham chiếu DOM Input:** Tạo biến `searchInputRef` gắn vào thanh SearchBar, từ đó gọi lệnh `searchInputRef.current?.focus()` tự động đưa con trỏ chuột vào ô tìm kiếm mà không cần thao tác thủ công. |

---
**Kết luận:** 
Việc phân bổ và sử dụng chính xác các Hook giúp mã nguồn React trở nên gọn gàng, giảm thiểu re-render không cần thiết và loại bỏ hoàn toàn mã "rác" (như Props Drilling).
