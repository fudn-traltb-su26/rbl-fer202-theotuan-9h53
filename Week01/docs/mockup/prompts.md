# Prompts Log - Mockup Generation (Lịch sử B & C)

Tài liệu này tổng hợp toàn bộ lịch sử các prompt (bao gồm cả thất bại và thành công) của B và C trong quá trình thiết kế mockup cho 4 màn hình của ứng dụng RentWise, nhằm bám sát theo bộ nhận diện thương hiệu (Premium Dark Theme, màu chủ đạo #FF6B6B, điểm nhấn #4ECDC4, nền #121212 / #1E1E1E).

---

## 1. Trang chủ (Home Page)

### ❌ Lần 1 (Thất bại) - Tác giả: B
**Lý do thất bại:** Layout quá đơn điệu, không ra đúng chất "Premium Dark Theme" và thiếu các phần cần thiết (thường bị gen ra nền trắng hoặc xám nhạt).
**Prompt:**
> UI mockup for a rental room website homepage. Dark mode. Header with logo and cart. Banner with image and search form. 5 categories. Grid of 8 rooms. Book button. Clean modern web UI.

### ❌ Lần 2 (Thất bại) - Tác giả: C
**Lý do thất bại:** Có dark theme nhưng màu sắc lộn xộn, không đúng chuẩn bộ màu nhận diện của dự án (#FF6B6B và #4ECDC4).
**Prompt:**
> Premium dark theme UI mockup for rental website homepage 'RentWise'. Black background. Header with logo, cart. Hero image banner with search. 5 category cards. 8 room cards with title, price, and blue button. High aesthetics.

### ✅ Lần 3 (Thành công) - Tác giả: C
**Kết quả:** Đúng bộ màu, bóng đổ (shadows) trên nền #1E1E1E rất tốt. Layout phân chia rõ ràng.
**Prompt:**
> A premium dark theme UI mockup for a rental room website homepage 'RentWise'. Background color is very dark gray (#121212). The header has a logo, navigation links, and a booking cart icon with a notification badge. Below header is a banner with a large hero image of an elegant room, and a search form overlapping it. Below banner, a section with 5 category cards with teal accents (#4ECDC4). Below categories, a grid of 8 room cards. Each card has a thumbnail image, title, price, and a coral red (#FF6B6B) 'Book' button. Cards have subtle shadows on dark gray surfaces (#1E1E1E). Clean sans-serif typography, highly aesthetic, modern web UI.

---

## 2. Danh sách phòng (Room List Page)

### ❌ Lần 1 (Thất bại) - Tác giả: B
**Lý do thất bại:** Quên đưa filter vào layout, chỉ có mỗi danh sách phòng.
**Prompt:**
> Premium dark theme UI mockup for rental room search results 'RentWise'. Dark background #121212. Grid of room cards on #1E1E1E surface with coral red button #FF6B6B.

### ✅ Lần 2 (Thành công) - Tác giả: B
**Kết quả:** Có đầy đủ thanh search nổi bật, cụm filter (dropdown, slider, checkbox) và pagination đúng chuẩn.
**Prompt:**
> A premium dark theme UI mockup for a rental room website search results page 'RentWise'. Background color very dark gray (#121212). Top header with logo and cart icon. Below header, a prominent search bar and a filter section containing dropdowns for room type, price slider, and amenities checkboxes. Main content area contains a grid of room cards on dark gray surfaces (#1E1E1E) showing thumbnail images, titles, addresses, prices, and small teal (#4ECDC4) utility icons. Pagination numbers at the bottom. Primary actions in coral red (#FF6B6B). Modern, sleek interface, web design.

---

## 3. Chi tiết phòng (Room Detail Page)

### ❌ Lần 1 (Thất bại) - Tác giả: C
**Lý do thất bại:** Thiếu không gian hiển thị danh sách tiện ích và UI nút Booking bị chìm nghỉm, không có yếu tố "Interactive".
**Prompt:**
> Dark theme UI for room detail page. Big image of bedroom. Address, price, description. Book button #FF6B6B. Modern web design.

### ✅ Lần 2 (Thành công) - Tác giả: C
**Kết quả:** Cấu trúc gallery ảnh đẹp, thông tin rõ ràng. Hiệu ứng thêm vào giỏ hàng (badge number tăng) được thể hiện đúng ý đồ prototype. Nút Book Now và Contact phân cấp Primary/Secondary tốt.
**Prompt:**
> A premium dark theme UI mockup for a rental room details page 'RentWise'. Background is very dark gray (#121212). Top header with logo and a cart icon with an increased notification badge number (showing interaction). The page features a large, high-quality image gallery of a bedroom at the top. Below, detailed information: bold title, address, square meters, price, and star rating. A section listing amenities with small teal (#4ECDC4) icons. A prominent coral red (#FF6B6B) 'Book Now' primary button and a secondary 'Contact' button. High aesthetic, modern web design.

---

## 4. Danh sách đặt phòng (Booking Cart Page)

### ❌ Lần 1 (Thất bại) - Tác giả: B & C
**Lý do thất bại:** B & C thiết kế nhầm layout giống hệt trang e-commerce bán quần áo (có nút +/- số lượng vô lý thay vì điền "số tháng thuê").
**Prompt:**
> Dark theme UI for booking cart page. List of items. Item has image, name, price, quantity input, remove icon. Order summary with total price. Submit button.

### ✅ Lần 2 (Thành công) - Tác giả: B
**Kết quả:** Khắc phục được lỗi logic "số lượng". Input hiển thị rõ "số tháng thuê", phần Tổng tiền cọc (Deposit) hiển thị đúng nghiệp vụ thuê nhà.
**Prompt:**
> A premium dark theme UI mockup for a booking cart page 'RentWise'. Background very dark gray (#121212). Header with logo. The main area displays a list of selected rooms to book. Each list item has a small thumbnail image, room name, address, price, a number input field for 'number of months', and a trash bin icon. Below the list, a summary section showing the 'Total Deposit Estimated'. A large coral red (#FF6B6B) 'Submit Booking Request' button. Sleek, professional UI design.
