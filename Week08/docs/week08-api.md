# API Endpoints Documentation

| Method | URL | Request Body | Response | Mô tả |
| :--- | :--- | :--- | :--- | :--- |
| GET | `/rooms` | — | Array rooms | Lấy danh sách tất cả các phòng thuê |
| GET | `/rooms/:id` | — | Room object | Lấy thông tin chi tiết của 1 phòng |
| POST | `/rooms` | Room object | Created room object | Tạo mới bài đăng phòng thuê |
| PUT | `/rooms/:id` | Room object | Updated room object | Cập nhật toàn bộ thông tin phòng |
| DELETE | `/rooms/:id` | — | {} | Xóa bỏ bài đăng phòng thuê |
