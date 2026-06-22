[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/p2HEpTkK)

# 🏠 Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)

Chào mừng bạn đến với dự án **Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)**. Dự án được phát triển trong **10 tuần học** môn **ReactJS (FER202)** bởi nhóm 5 thành viên.

Mã SV | HỌ VÀ TÊN | 
DE190510 | Huỳnh Nguyễn Thị Phương Dung
DE190024 | Hoàng Nhật Kha
DE190573 | Nguyễn Trọng Nguyên Khôi 
DE190098 | Bùi Hoàng Long
DE200241 | Trần Nguyên Đức


## 🛠️ Stack Công nghệ & Môi trường

- **Frontend:** React 19 + Vite + React-Bootstrap 5.x
- **HTTP Client:** Axios
- **Mock Database & REST API:** JSON-Server
- **Styling:** CSS Vanilla (Custom styling) & React-Bootstrap
- **Node.js:** Phiên bản khuyến nghị `>= 18.x`

---

## 📂 Cấu trúc dự án

```text
├── Rental_Room/                    # Thư mục chứa mã nguồn ứng dụng React (Vite)
│   ├── docs/                       # Tài liệu thiết kế, handoff, mockup của nhóm
│   │   └── mockup/                 # Mockup 4 màn hình, prompt log và file handoff
│   ├── public/                     # Tài nguyên tĩnh công cộng (Logo, icons, v.v.)
│   ├── src/                        # Thư mục code React chính
│   │   ├── assets/                 # Hình ảnh tĩnh và tài nguyên
│   │   ├── components/             # Reusable Components (Header, Footer, RoomCard, v.v.)
│   │   ├── pages/                  # Page Components (HomePage, RoomListPage, v.v.)
│   │   ├── context/                # Quản lý State toàn cục (CartContext, ThemeContext)
│   │   ├── hooks/                  # Custom Hooks tự định nghĩa (useFetch, useDebounce, v.v.)
│   │   ├── services/               # Services gọi API (bookService.js/roomService.js)
│   │   ├── App.jsx                 # Component chính của ứng dụng
│   │   └── main.jsx                # Entry point
│   ├── db.json                     # Bản sao của Mock Database chạy trên cổng 3001
│   ├── package.json                # Cấu hình dependencies và npm scripts
│   └── vite.config.js              # Cấu hình bundler Vite
│
├── db.json                         # Mock Database chính tại root dự án
├── TODO.md                         # Checklist các nhiệm vụ cần thực hiện qua từng tuần
├── Week01/ ... Week10/             # Các thư mục lưu báo cáo nhóm theo từng tuần
└── README.md                       # Tài liệu hướng dẫn sử dụng dự án (File này)
```

---

## 🚀 Hướng dẫn Cài đặt & Chạy ứng dụng

### 1. Khởi chạy Mock Database (JSON-Server)
Tại thư mục root của dự án, chạy lệnh sau để khởi chạy mock API:
```bash
npx json-server --watch db.json --port 3001
```
*Hoặc nếu đang ở trong thư mục `Rental_Room`, bạn có thể chạy:*
```bash
npm run server
```
Sau khi chạy, API sẽ hoạt động tại:
- Danh sách loại phòng: [http://localhost:3001/categories](http://localhost:3001/categories)
- Danh sách phòng thuê: [http://localhost:3001/rooms](http://localhost:3001/rooms)

### 2. Khởi chạy Frontend React (Vite)
Mở một terminal mới, di chuyển vào thư mục `Rental_Room` và cài đặt thư viện:
```bash
cd Rental_Room
npm install
npm run dev
```
Trang web sẽ được mở tại: [http://localhost:5173](http://localhost:5173)

---

## 📊 Thiết kế Cơ sở dữ liệu Mock (`db.json`)

Mock database bao gồm hai mảng dữ liệu chính được thiết kế đồng bộ với giao diện UI:

### 1. Mảng `categories` (Loại phòng / Khu vực)
Bao gồm **5 danh mục chính** chứa các trường: `id`, `name`, `icon` (Bootstrap Icons), và `roomCount` (Số lượng phòng thuộc nhóm đó):
- **Studio** (`id: 1`): Căn hộ Studio khép kín, tiện lợi.
- **Căn hộ mini** (`id: 2`): Căn hộ diện tích vừa, có phân chia không gian.
- **Phòng trọ gác lửng** (`id: 3`): Phòng trọ truyền thống tối ưu diện tích sử dụng.
- **Căn hộ dịch vụ** (`id: 4`): Căn hộ đầy đủ dịch vụ dọn dẹp, giặt là cao cấp.
- **Ở ghép / Homestay** (`id: 5`): Ký túc xá giường tầng, phòng ghép chia sẻ chi phí.

### 2. Mảng `rooms` (Phòng thuê)
Bao gồm **11 phòng thuê** chi tiết (tối thiểu là 8), đảm bảo khớp toàn bộ các trường thông tin hiển thị trên UI:
- `id`: Định danh phòng duy nhất.
- `title`: Tiêu đề hiển thị ngắn gọn, thu hút.
- `address`: Địa chỉ chi tiết phòng trọ.
- `price`: Giá thuê một tháng (VND).
- `deposit`: Tiền đặt cọc phòng (VND).
- `category` & `categoryId`: Tên và ID danh mục tương ứng.
- `cover`: Link ảnh đại diện chất lượng cao (Unsplash).
- `area`: Diện tích phòng (m²).
- `rating` & `reviewCount`: Điểm đánh giá (sao) và số lượng bình luận.
- `available`: Trạng thái phòng còn trống hay đã thuê (`true`/`false`).
- `featured`: Đánh dấu phòng nổi bật hiển thị ở trang chủ (`true`/`false`).
- `description`: Mô tả chi tiết các tiện ích đi kèm (AC, tủ lạnh, bếp, máy giặt, an ninh...).

