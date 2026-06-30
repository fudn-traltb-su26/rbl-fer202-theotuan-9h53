# Bảng Ánh Xạ Handoff: Mockup ➔ Component

Tài liệu này ánh xạ các vùng thiết kế trên Mockup sang cấu trúc Component trong dự án React để chuẩn bị cho giai đoạn lập trình giao diện (từ Tuần 2 trở đi).

## 1. Trang chủ (Home Page)
- **Vùng Header (Logo, Nav, Cart Icon):** `src/components/Header.jsx`
- **Vùng Banner & Tìm kiếm nhanh:** `src/components/HeroBanner.jsx`
- **Vùng Danh mục (CategoryList):** `src/components/CategoryList.jsx`
  - **Item:** `src/components/CategoryCard.jsx`
- **Vùng Danh sách phòng nổi bật:** `src/components/RoomGrid.jsx` (tái sử dụng)
  - **Item:** `src/components/RoomCard.jsx`
- **Vùng Footer:** `src/components/Footer.jsx`
- **Toàn trang:** `src/pages/HomePage.jsx`

## 2. Danh sách phòng (Room List Page)
- **Vùng SearchBar & Filter:** `src/components/FilterBar.jsx`
- **Vùng Danh sách phòng:** `src/components/RoomGrid.jsx`
  - **Item:** `src/components/RoomCard.jsx`
- **Vùng Phân trang:** `src/components/Pagination.jsx`
- **Toàn trang:** `src/pages/RoomListPage.jsx`

## 3. Chi tiết phòng (Room Detail Page)
- **Vùng Ảnh (Gallery):** `src/components/RoomGallery.jsx`
- **Vùng Thông tin chung (Tiêu đề, Địa chỉ, Giá):** `src/components/RoomInfo.jsx`
- **Vùng Tiện ích:** `src/components/Amenities.jsx`
- **Vùng Đặt phòng/Liên hệ (Actions):** `src/components/BookingActions.jsx`
- **Toàn trang:** `src/pages/RoomDetailPage.jsx`

## 4. Danh sách đặt phòng (Booking Cart Page)
- **Vùng Bảng danh sách:** `src/components/CartTable.jsx`
  - **Item (Row):** `src/components/CartItem.jsx`
- **Vùng Tổng kết (Total Deposit):** `src/components/CartSummary.jsx`
- **Toàn trang:** `src/pages/BookingCartPage.jsx`

---
*Ghi chú: Layout tổng thể sẽ được bọc bởi `App.jsx` hoặc một `Layout` component (chứa Header và Footer chung).*
