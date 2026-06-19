# Lịch sử và Nhật ký Prompt tạo Mockup (Rental Room System)

Tài liệu này lưu lại toàn bộ các prompt được sử dụng để thiết kế mockup cho hệ thống của nhóm dựa trên phong cách thiết kế đã thống nhất trong [style-guide.md](./style-guide.md).

---

## 1. Trang chủ (Home Page)

### Yêu cầu thiết kế:
*   **Header:** Logo "RentalRoom", thanh điều hướng (Trang chủ, Phòng trọ, Danh mục, Liên hệ), biểu tượng giỏ hàng/quan tâm kèm số lượng badge bằng 0.
*   **Banner:** Khẩu hiệu "Tìm Phòng Trọ Thông Minh Với AI" và nút CTA "Khám phá ngay".
*   **Danh mục (CategoryList):** Gồm 5 thẻ danh mục phòng trọ (Phòng trọ, Chung cư mini, Căn hộ dịch vụ, Nhà nguyên căn, Ở ghép) với icon, tên danh mục và số lượng phòng.
*   **Danh sách phòng nổi bật (RoomGrid):** 8 thẻ phòng trọ nổi bật. Mỗi thẻ hiển thị ảnh phòng, tiêu đề, giá thuê hàng tháng (VND/tháng), nhãn vị trí (Quận), đánh giá sao và nút "Thêm vào giỏ" (Lưu quan tâm).

### Prompt Google Stitch:
```text
High-fidelity UI mockup of a home page for a modern rental room finding website named "RentalRoom". Clean, modern web design, light mode background with a subtle pastel blue and purple gradient. Header contains logo "RentalRoom", navigation (Trang chủ, Phòng trọ, Danh mục, Liên hệ), and a cart/favorites icon with badge "0". A hero banner below header with title "Tìm Phòng Trọ Thông Minh Với AI" and CTA button "Khám phá ngay". A category section with 5 category cards (icon + category name + room count, categories: Phòng trọ, Chung cư mini, Căn hộ dịch vụ, Nhà nguyên căn, Ở ghép). A room grid showing 8 featured room cards with room photos, titles, monthly price in VND (e.g. 3.500.000đ/tháng), location tag, rating stars, and "Thêm vào giỏ" button. Accent colors: primary blue #2563EB and AI purple #7C3AED. UI elements are rounded with soft shadows. No device frame.
```

---

## 2. Danh sách phòng (Room List Page)

### Yêu cầu thiết kế:
*   **SearchBar:** Thanh tìm kiếm thông minh phong cách bo tròn, có viền tím, icon lấp lánh AI và nút Tìm kiếm màu tím.
*   **Filter danh mục:** Danh sách bộ lọc ngang (Tất cả, Phòng trọ, Chung cư mini, Căn hộ dịch vụ, Nhà nguyên căn).
*   **RoomGrid:** Lưới 8 phòng trọ hiển thị tương tự trang chủ.
*   **Phân trang (Pagination):** Các nút Prev, 1, 2, 3, Next để chuyển trang.

### Prompt Google Stitch:
```text
High-fidelity UI mockup of a room listing page for "RentalRoom" website. Clean modern interface, light background. Top contains an AI Search Bar (pill-shaped search bar with purple border, sparkly AI icon, and search button). Below search bar is a horizontal category filter list with "Tất cả", "Phòng trọ", "Chung cư mini", "Căn hộ dịch vụ", "Nhà nguyên căn". A room grid shows 8 room cards in 4 columns, each with room photo, title, monthly price, location, rating, and "Thêm vào giỏ" button. Bottom has simple pagination (Prev, 1, 2, 3, Next). Accent colors primary blue #2563EB and AI purple #7C3AED. No device frame.
```

---

## 3. Chi tiết phòng (Room Detail Page)

### Yêu cầu thiết kế:
*   **Breadcrumb:** Trang chủ > Phòng trọ > Phòng trọ khép kín Cầu Giấy.
*   **Ảnh phòng:** Ảnh chụp thực tế phòng lớn, sáng sủa ở cột bên trái.
*   **Thông tin chi tiết:** Tiêu đề phòng, Địa chỉ, Đánh giá, Giá thuê & Giá cọc, Diện tích (m2), Trạng thái (Còn trống), Danh sách tiện ích (WiFi, Điều hòa, Nóng lạnh, Tủ lạnh), Mô tả chi tiết phòng.
*   **Nút tương tác:** Nút "Thêm vào giỏ" (Quan tâm) nổi bật màu xanh dương.

### Prompt Figma Make (Prototype):
```text
High-fidelity UI mockup of a room detail page for "RentalRoom" website. Responsive web interface, light mode. Shows breadcrumbs "Trang chủ > Phòng trọ > Phòng trọ khép kín Cầu Giấy". Main section is split: left column shows a large room photo (high quality, bright interior, window), right column shows room title "Phòng trọ khép kín Cầu Giấy", location "Quận Cầu Giấy, Hà Nội", rating stars, price 3.500.000đ/tháng, deposit price 3.500.000đ, size 25m2, availability status "Còn trống", amenities list (WiFi, Điều hòa, Tủ lạnh), description text, and a prominent blue button "Thêm vào giỏ" with cart icon. Accent colors primary blue #2563EB and purple. UI elements have smooth rounded corners. Clicking the "Thêm vào giỏ" button updates the navbar cart badge counter from 0 to 1. No device frame.
```

---

## 4. Giỏ hàng / Danh sách quan tâm (Cart Page)

### Yêu cầu thiết kế:
*   **Bảng sản phẩm:** Hiển thị ảnh phòng, tiêu đề phòng, đơn giá thuê hàng tháng, số lượng tháng thuê dự kiến (±), thành tiền tạm tính và nút xóa.
*   **Tổng tiền cọc:** Tổng tiền đặt cọc cần thanh toán trước.
*   **Nút Thanh toán:** Nút hành động "Thanh toán đặt cọc" nổi bật màu xanh dương.

### Prompt Figma Make (Prototype):
```text
High-fidelity UI mockup of a shopping cart / saved rooms page for "RentalRoom" website. Header shows cart/saved icon badge updated to "1". Main area displays a cart table with columns: Room Image, Title, Monthly Price, Quantity/Month (with plus and minus buttons, e.g. [- 1 +]), Subtotal, and Delete button. Below the table, there is a total sum box showing "Tổng tiền đặt cọc: 3.500.000đ" and a primary CTA button "Thanh toán đặt cọc". Clean light background, modern design, primary colors #2563EB blue and #7C3AED purple. Rounded cards, soft shadow. No device frame.
```
