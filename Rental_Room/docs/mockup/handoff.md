# Tài Liệu Bàn Giao Thiết Kế & Ánh Xạ Component (Handoff Document)
**Dự án:** Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)

Tài liệu này đóng vai trò là "hợp đồng giao diện" giữa thiết kế (Mockup) và mã nguồn (React Components). Mỗi vùng trên mockup được ánh xạ trực tiếp đến một component tương ứng sẽ được phát triển qua các tuần từ Tuần 2 đến Tuần 10.

---

## 1. Thành phần Dùng chung Toàn Hệ thống (Global Components)

| Vùng Mockup | Component tương ứng | Đường dẫn File | Tuần thực hiện | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **Top Navbar** (Logo, Nav Links, Cart Icon) | `Header.jsx` | `src/components/Header.jsx` | **Tuần 2, 4, 5, 7, 10** | Hiển thị logo RentalRoom, liên kết điều hướng và badge số lượng phòng quan tâm (tăng/giảm tự động). Cập nhật Dark/Light theme ở Tuần 7. |
| **Footer** (Copyright, Social Links) | `Footer.jsx` | `src/components/Footer.jsx` | **Tuần 2, 5** | Hiển thị thông tin chân trang và các liên kết mạng xã hội của hệ thống. |
| **Bọc các Section** (Tiêu đề, màu nền) | `SectionWrapper.jsx` | `src/components/SectionWrapper.jsx` | **Tuần 3** | Component bố cục chung (Layout wrapper) nhận `children` để tái sử dụng ở Trang chủ, Danh sách phòng, v.v. |

---

## 2. Màn hình 1: Trang chủ (Home Page)
*Mockup tham chiếu: `docs/mockup/homepage.png`*

| Vùng Mockup | Component tương ứng | Đường dẫn File | Tuần thực hiện | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **Giao diện trang chủ chung** | `HomePage.jsx` | `src/pages/HomePage.jsx` | **Tuần 6** | Page component tổng hợp chứa các section của trang chủ. |
| **Hero Banner** (Slogan, Nút CTA) | `Banner.jsx` | `src/components/Banner.jsx` | **Tuần 2, 5** | Banner chào mừng, khẩu hiệu tìm phòng thông minh AI và nút CTA "Khám phá ngay". |
| **Category List** (5 thẻ danh mục phòng) | `CategoryList.jsx` | `src/components/CategoryList.jsx` | **Tuần 2, 3, 5** | Hiển thị 5 danh mục phòng (Phòng trọ, Chung cư mini, Căn hộ dịch vụ, Nhà nguyên căn, Ở ghép). Nhận props mảng danh mục từ cha. |
| **Lưới 8 phòng nổi bật** (Room Grid) | `RoomGrid.jsx` | `src/components/RoomGrid.jsx` | **Tuần 2, 3, 5** | Nhận mảng phòng và render lưới các card phòng nổi bật, xử lý trường hợp danh sách trống. |
| **Thẻ phòng đơn lẻ** (Room Card) | `RoomCard.jsx` | `src/components/RoomCard.jsx` | **Tuần 2, 3, 5, 9** | Hiển thị ảnh phòng, tiêu đề, giá thuê, địa chỉ, rating sao và nút "Thêm vào giỏ" (Lưu quan tâm). |

---

## 3. Màn hình 2: Danh sách phòng (Room List Page)
*Mockup tham chiếu: `docs/mockup/booklist.png`*

| Vùng Mockup | Component tương ứng | Đường dẫn File | Tuần thực hiện | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **Màn danh sách phòng** | `RoomListPage.jsx` | `src/pages/RoomListPage.jsx` | **Tuần 6, 7, 8, 9** | Trang chính tìm kiếm phòng. Fetch dữ liệu phòng từ JSON-Server (Tuần 8), dùng custom hooks (Tuần 9). |
| **Thanh tìm kiếm AI** | `SearchBar.jsx` | `src/components/SearchBar.jsx` | **Tuần 4, 9** | Input tìm kiếm kiểm soát (controlled), tích hợp xử lý tìm kiếm debounce (Tuần 9). |
| **Bộ lọc Sidebar/Ngang** | `RoomFilter.jsx` | `src/components/RoomFilter.jsx` | **Tuần 4, 5** | Bộ lọc danh mục đang chọn (activeCategory) và bộ lọc tiện ích, mức giá. |
| **Phần phân trang** | `Pagination.jsx` | `src/components/Pagination.jsx` | **Tuần 5, 8** | Chuyển đổi trang dữ liệu hiển thị của lưới phòng trọ. |

---

## 4. Màn hình 3: Chi tiết phòng (Room Detail Page)
*Mockup tham chiếu: `docs/mockup/bookdetail.png`*

| Vùng Mockup | Component tương ứng | Đường dẫn File | Tuần thực hiện | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **Màn chi tiết phòng** | `RoomDetailPage.jsx` | `src/pages/RoomDetailPage.jsx` | **Tuần 6, 7, 8** | Page component hiển thị chi tiết một phòng trọ dựa vào `:id` từ URL dùng `useParams()`. |
| **Thư viện ảnh phòng** | `RoomGallery.jsx` | `src/components/RoomGallery.jsx` | **Tuần 5** | Hiển thị bộ sưu tập ảnh thực tế của phòng trọ dạng Grid hoặc Carousel. |
| **Thông tin phòng** (Giá, Diện tích, Tiện ích) | `RoomInfo.jsx` | `src/components/RoomInfo.jsx` | **Tuần 3, 5** | Hiển thị địa chỉ, giá thuê/cọc, diện tích, danh sách tiện ích (AC, Wifi, tủ lạnh) và trạng thái còn trống. |
| **AI Recommendation/Summary** | `AISummary.jsx` | `src/components/AISummary.jsx` | **Tuần 5** | Hiển thị đánh giá tóm tắt từ AI và Match Score (ví dụ: 95% phù hợp nhu cầu). |
| **Nút Đặt cọc / Booking** | `BookingButton.jsx` | `src/components/BookingButton.jsx` | **Tuần 4, 7, 10** | Nút bấm "Thêm vào giỏ" (hoặc Booking) để tăng số lượng badge giỏ hàng tại Navbar. |

---

## 5. Màn hình 4: Giỏ hàng / Yêu cầu đặt cọc (Cart / Booking Page)
*Mockup tham chiếu: `docs/mockup/cart.png`*

| Vùng Mockup | Component tương ứng | Đường dẫn File | Tuần thực hiện | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **Giao diện trang giỏ phòng** | `CartPage.jsx` | `src/pages/CartPage.jsx` | **Tuần 6, 7, 10** | Trang tóm tắt các phòng đang quan tâm, chuẩn bị đặt cọc hoặc liên hệ chủ trọ. |
| **Bảng danh sách phòng đã chọn** | `CartTable.jsx` | `src/components/CartTable.jsx` | **Tuần 6, 7, 10** | Bảng hiển thị: ảnh phòng, tiêu đề, giá thuê tháng, số lượng tháng thuê dự kiến (±), thành tiền và nút xóa. |
| **Khối Tóm tắt & Thanh toán** | `CartSummary.jsx` | `src/components/CartSummary.jsx` | **Tuần 6, 7** | Hiển thị tổng tiền đặt cọc cần thanh toán và nút hành động chính "Thanh toán đặt cọc". |

---

## 6. Màn hình bổ sung: Quản lý Phòng trọ (Admin - BookManagePage)
*Mockup tham chiếu: Quy trình CRUD tại Tuần 8*

| Vùng Mockup | Component tương ứng | Đường dẫn File | Tuần thực hiện | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **Bảng quản lý (Admin)** | `RoomManagePage.jsx` | `src/pages/admin/RoomManagePage.jsx` | **Tuần 8** | Trang quản lý dành cho admin/chủ trọ hiển thị bảng danh sách các phòng trọ để thêm, sửa, xóa phòng trọ. |
| **Modal Thêm/Sửa phòng** | `RoomModal.jsx` | `src/components/admin/RoomModal.jsx` | **Tuần 8** | Hộp thoại chứa form điền thông tin phòng để POST (thêm mới) hoặc PUT (cập nhật) lên json-server. |
