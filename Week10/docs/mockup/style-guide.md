# Mockup Requirements & Style Guide

Tài liệu này định nghĩa các yêu cầu cho 4 màn hình cốt lõi của ứng dụng **RentWise** và bộ nhận diện thương hiệu (Style Guide) để sử dụng làm cơ sở thiết kế Mockup UI.

---

## 1. Requirements 4 Màn Hình Cốt Lõi

### 1.1 Trang chủ
- **Header:** 
  - Logo "RentWise" (hoặc "AI RentalWise").
  - Navigation links: Trang chủ, Phòng cho thuê, Về chúng tôi, Liên hệ.
  - Booking Icon: Biểu tượng giỏ hàng/lưu phòng hiển thị số lượng phòng đã lưu/đặt (có huy hiệu số).
- **Banner:** 
  - Hình ảnh hero section nổi bật (hoặc slider).
  - Tiêu đề thông điệp chính.
  - Form "Tìm kiếm nhanh" ngay trên banner: Nhập từ khóa, Chọn Thành phố, Quận/Huyện, Mức giá -> Nút "Tìm kiếm".
- **CategoryList:** 
  - Danh sách 5 loại phòng/khu vực phổ biến trình bày dạng card (ví dụ: Phòng trọ, Chung cư mini, Nhà nguyên căn, KTX, Homestay) kèm theo icon hoặc ảnh minh họa.
- **RoomGrid:** 
  - Danh sách 8 phòng nổi bật hoặc có giá tốt nhất hiện tại.
  - Hiển thị dạng lưới (Grid), mỗi phòng là một Card.
- **Footer:** 
  - Thông tin liên hệ, Links hữu ích, Mạng xã hội, Bản quyền.

### 1.2 Danh sách phòng
- **SearchBar:** Thanh tìm kiếm từ khóa nổi bật phía trên.
- **Filter (Bộ lọc):** 
  - Loại phòng (Dropdown/Checkbox).
  - Khoảng giá (Slider hoặc Min-Max Input).
  - Diện tích.
  - Tiện ích.
- **RoomGrid:** 
  - Danh sách các phòng hiển thị dưới dạng card (ảnh thumbnail, tiêu đề, giá, địa chỉ, icon tiện ích như Wifi, máy lạnh).
- **Pagination:** Chuyển trang ở cuối danh sách (1, 2, 3, ... Next).

### 1.3 Chi tiết phòng
- **Hình ảnh:** Ảnh thực tế của phòng, hiển thị lớn ở đầu trang (có thể là gallery/slider để xem nhiều ảnh).
- **Thông tin chi tiết:**
  - Tiêu đề bài đăng rõ ràng.
  - Địa chỉ cụ thể.
  - Diện tích (m2).
  - Giá thuê (VND/tháng).
  - Giá cọc (VND).
  - Đánh giá (Star rating từ người dùng trước).
- **Tiện ích:** Danh sách các tiện ích có sẵn (Wifi, máy lạnh, bãi đỗ xe, an ninh 24/7...) thể hiện bằng icon kết hợp với text.
- **Hành động:** 
  - Nút **"Đặt giữ chỗ"** (Primary Button, nổi bật).
  - Nút **"Liên hệ"** (Secondary Button).

### 1.4 Danh sách đặt phòng (Booking Cart)
- **Bảng quản lý:** Danh sách các phòng đã người dùng chọn lưu hoặc muốn đặt chỗ. Các trường hiển thị:
  - Ảnh phòng (thumbnail nhỏ).
  - Tên phòng.
  - Địa chỉ.
  - Đơn giá thuê.
  - Số tháng dự kiến thuê (Input type number cho phép tăng giảm).
  - Hành động: Nút Xóa (Icon thùng rác).
- **Tổng kết:** Hiển thị *Tổng tiền cọc dự kiến* dựa trên số phòng và số tháng.
- **Hành động:** Nút **"Gửi yêu cầu thuê"** (Primary Button, kích thước lớn, đặt phía dưới bảng tổng kết).

---

## 2. Style Guide (Bộ Nhận Diện Thương Hiệu)

### 2.1 Màu sắc chủ đạo (Color Palette)
Bộ màu được thiết kế theo hướng **Premium Dark Theme** kết hợp với **Warm Sunset**, mang lại cảm giác sang trọng, công nghệ (AI) nhưng vẫn ấm cúng (đúng tính chất tìm phòng/nhà ở).

- **Primary Color (Hành động chính):** `#FF6B6B` (Đỏ San Hô / Warm Sunset) - Sử dụng cho các nút Đặt phòng, Tìm kiếm, các điểm nhấn quan trọng.
- **Secondary Color (Tương tác phụ):** `#4ECDC4` (Xanh Teal Sáng) - Sử dụng cho các icon tiện ích, tag loại phòng, badge thông báo.
- **Background:**
  - **Base Background:** `#121212` (Đen nhám - Nền tổng thể của toàn bộ trang).
  - **Surface/Card Background:** `#1E1E1E` (Xám đậm - Nền của các khối card phòng, header, dropdown).
- **Text Color:**
  - **Primary Text:** `#FFFFFF` (Trắng - Tiêu đề, nội dung văn bản chính).
  - **Secondary Text:** `#B3B3B3` (Xám nhạt - Mô tả phụ, placeholder form, địa chỉ).
- **Border/Divider:** `#2C2C2C` (Xám tối - Đường viền card, đường kẻ phân cách section).

### 2.2 Typography
Sử dụng bộ font hiện đại, rõ ràng, phù hợp cho hiển thị trên nhiều thiết bị.

- **Font Family:** `Inter` hoặc `Roboto`, sans-serif.
- **Kích thước chữ (Font Sizes):**
  - `H1` (Tiêu đề lớn/Banner): `32px` (Desktop) / `28px` (Mobile) - *Bold (700)*.
  - `H2` (Tiêu đề Section): `24px` (Desktop) / `22px` (Mobile) - *SemiBold (600)*.
  - `H3` (Tiêu đề Card phòng): `18px` (Desktop) / `16px` (Mobile) - *Medium (500)*.
  - `Body` (Nội dung thường): `16px` - *Regular (400)*.
  - `Small/Tag` (Chi tiết phụ): `14px` - *Regular (400)*.

### 2.3 Component Styling & Micro-interactions
- **Bo góc (Border Radius):**
  - **Nút bấm (Buttons) & Input fields:** `8px` (Bo góc nhẹ, tạo cảm giác tinh tế, hiện đại).
  - **Card (Room item) & Modal:** `12px` (Bo góc lớn hơn một chút để phân tách khối nội dung rõ ràng).
- **Đổ bóng (Shadows trên nền tối):**
  - **Card Default:** `0 4px 6px rgba(0, 0, 0, 0.3)`.
  - **Card Hover:** `0 8px 16px rgba(0, 0, 0, 0.6)` (Tăng chiều sâu khi người dùng di chuột vào).
  - **Dropdown/Popup:** `0 12px 24px rgba(0, 0, 0, 0.8)`.
- **Hiệu ứng tương tác (Interactive Effects):**
  - **Nút bấm:** Khi hover, đổi màu nền sáng hơn `10%` hoặc thêm hiệu ứng scale up nhẹ (`transform: scale(1.02)`).
  - **Card phòng:** Khi hover, dịch chuyển nhẹ lên trên (`transform: translateY(-4px)`) kết hợp với hiệu ứng shadow thay đổi mượt mà (`transition: all 0.3s ease`).
  - **Booking Icon Badge:** Khi bấm "Thêm vào giỏ/Lưu phòng", huy hiệu số lượng trên header sẽ có animation nảy nhẹ (bounce) để thu hút sự chú ý.
