[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/p2HEpTkK)

# 🏠 Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)

Chào mừng bạn đến với dự án **Hệ thống Tìm kiếm và Cho thuê Phòng trọ (Rental Room System)**. Dự án được phát triển trong **10 tuần học** môn **ReactJS (FER202)** bởi nhóm 5 thành viên.

Mã SV | HỌ VÀ TÊN | 
--- | --- |
DE190510 | Huỳnh Nguyễn Thị Phương Dung |
DE190024 | Hoàng Nhật Kha |
DE190573 | Nguyễn Trọng Nguyên Khôi |
DE190098 | Bùi Hoàng Long |
DE200241 | Trần Nguyên Đức |

## 📖 Mô tả dự án
Hệ thống Tìm kiếm và Cho thuê Phòng trọ "RentWise" là một ứng dụng Web (Single Page Application) giúp người dùng tìm kiếm, xem chi tiết và đặt phòng trọ trực tuyến một cách dễ dàng. Giao diện được thiết kế theo phong cách Premium Dark Theme hiện đại, tập trung vào trải nghiệm người dùng (UX/UI) mượt mà và trực quan.

## ✨ Danh sách tính năng (Features)
- **Trang chủ (Home Page):** Trình bày banner chính, danh sách các danh mục phòng trọ (Studio, Căn hộ mini, v.v.), và lưới các phòng nổi bật được đánh giá cao.
- **Tìm kiếm và Lọc phòng (Room List & Search):** Cho phép người dùng tìm phòng bằng từ khóa, lọc theo loại phòng, mức giá, và tiện ích. Hiển thị kết quả dạng lưới với phân trang.
- **Chi tiết phòng (Room Detail):** Hiển thị đầy đủ thông tin phòng bao gồm thư viện ảnh (gallery), giá thuê, tiền cọc, diện tích, đánh giá, danh sách tiện ích, và nút hành động Đặt phòng.
- **Giỏ hàng / Đặt phòng (Booking Cart):** Quản lý danh sách các phòng người dùng đã chọn để đặt thuê, cho phép tuỳ chỉnh số tháng thuê, xóa phòng khỏi giỏ, và tính toán tổng số tiền cọc.
- **Thiết kế Responsive & Dark Theme:** Tối ưu hóa trải nghiệm trên nhiều thiết bị (Mobile/Tablet/Desktop) với giao diện Dark Theme sang trọng.

## 🛠️ Stack Công nghệ & Môi trường

- **Frontend:** React 19 + Vite + React-Bootstrap 5.x
- **HTTP Client:** Axios
- **Mock Database & REST API:** JSON-Server
- **Styling:** CSS Vanilla (Custom styling) & React-Bootstrap
- **Node.js:** Phiên bản khuyến nghị `>= 18.x`

---

## 📂 Cấu trúc dự án

```text
├── rental-room/                    # Thư mục chứa mã nguồn ứng dụng React (Vite)
│   ├── docs/                       # Tài liệu thiết kế, handoff, mockup của nhóm
│   │   ├── component-tree.md       # Sơ đồ Component Tree
│   │   ├── component-tree.png      # Ảnh Component Tree
│   │   └── mockup/                 # Mockup 4 màn hình, prompt log và file handoff
│   ├── public/                     # Tài nguyên tĩnh công cộng (Logo, icons, v.v.)
│   ├── src/                        # Thư mục code React chính
│   │   ├── components/             # Reusable Components (Header, Footer, RoomCard, v.v.)
│   │   ├── pages/                  # Page Components (HomePage, RoomListPage, v.v.)
│   │   ├── App.jsx                 # Component chính của ứng dụng
│   │   └── main.jsx                # Entry point
│   ├── db.json                     # Bản sao của Mock Database chạy trên cổng 3001
│   ├── package.json                # Cấu hình dependencies và npm scripts
│   └── vite.config.js              # Cấu hình bundler Vite
│
├── db.json                         # Mock Database chính tại root dự án
├── TODO.md                         # Checklist các nhiệm vụ cần thực hiện qua từng tuần
└── README.md                       # Tài liệu hướng dẫn sử dụng dự án (File này)
```

---

## 🚀 Hướng dẫn Cài đặt & Chạy ứng dụng

### 1. Khởi chạy Mock Database (JSON-Server)
Tại thư mục root của dự án, chạy lệnh sau để khởi chạy mock API:
```bash
npx json-server --watch db.json --port 3001
```
*Hoặc nếu đang ở trong thư mục `rental-room`, bạn có thể chạy:*
```bash
npm run server
```
Sau khi chạy, API sẽ hoạt động tại:
- Danh sách loại phòng: [http://localhost:3001/categories](http://localhost:3001/categories)
- Danh sách phòng thuê: [http://localhost:3001/rooms](http://localhost:3001/rooms)

### 2. Khởi chạy Frontend React (Vite)
Mở một terminal mới, di chuyển vào thư mục `rental-room` và cài đặt thư viện:
```bash
cd rental-room
npm install
npm run dev
```
Trang web sẽ được mở tại: [http://localhost:5173](http://localhost:5173)

---

## 📊 Thiết kế Cơ sở dữ liệu Mock (`db.json`)

Mock database bao gồm hai mảng dữ liệu chính được thiết kế đồng bộ với giao diện UI:

### 1. Mảng `categories` (Loại phòng / Khu vực)
Bao gồm **5 danh mục chính** chứa các trường: `id`, `name`, `icon` (Bootstrap Icons), và `roomCount`:
- **Studio** (`id: 1`): Căn hộ Studio khép kín.
- **Căn hộ mini** (`id: 2`): Căn hộ diện tích vừa.
- **Phòng trọ gác lửng** (`id: 3`): Phòng trọ truyền thống tối ưu diện tích.
- **Căn hộ dịch vụ** (`id: 4`): Căn hộ đầy đủ dịch vụ dọn dẹp.
- **Ở ghép / Homestay** (`id: 5`): Ký túc xá, phòng ghép.

### 2. Mảng `rooms` (Phòng thuê)
Bao gồm dữ liệu các phòng thuê chi tiết:
- `id`: Định danh phòng duy nhất.
- `title`, `address`: Tiêu đề và địa chỉ.
- `price`, `deposit`: Giá thuê và tiền đặt cọc (VND).
- `categoryId`: ID danh mục tương ứng.
- `cover`: Link ảnh đại diện (Unsplash).
- `area`: Diện tích phòng (m²).
- `rating`, `reviewCount`: Điểm đánh giá và số lượng bình luận.
- `available`: Trạng thái phòng trống (`true`/`false`).
- `featured`: Đánh dấu nổi bật ở trang chủ (`true`/`false`).
- `description`: Mô tả chi tiết tiện ích.
