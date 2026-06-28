# Báo cáo Nhóm - Tuần 04

## Mục 3.2: Lý giải nguyên tắc Immutable trong React State

Trong React, khi chúng ta quản lý state với kiểu dữ liệu tham chiếu (Reference Type) như Array hoặc Object, việc cập nhật state phải luôn tuân thủ nguyên tắc bất biến (Immutable).

**Tại sao không được dùng các hàm đột biến (mutation) như `push()`, `pop()`, `splice()`, hay gán trực tiếp thuộc tính?**
- Cơ chế hoạt động của React dựa trên việc so sánh tham chiếu (Reference Equality Check) thông qua thuật toán `Object.is()` để xác định xem state có thực sự thay đổi hay không.
- Khi ta dùng `push()` để thêm một phần tử vào mảng `booking`, phần tử đó được thêm vào mảng gốc nhưng **địa chỉ tham chiếu bộ nhớ (memory reference) của mảng hoàn toàn không thay đổi**.
- Do tham chiếu cũ và mới giống hệt nhau, React sẽ lầm tưởng rằng state không có sự thay đổi nào, từ đó **từ chối việc kích hoạt quá trình re-render (cập nhật lại giao diện)**. Dù dữ liệu bên dưới đã bị thay đổi nhưng giao diện người dùng (UI) vẫn giữ nguyên trạng thái cũ.

**Cách giải quyết đúng đắn:**
- Chúng ta phải tạo ra một bản sao (bản clone) của mảng gốc, sau đó cập nhật dữ liệu trên bản sao này và dùng bản sao đó làm state mới. Lúc này, mảng mới sẽ có một địa chỉ bộ nhớ mới.
- Trong thực hành ở file `App.jsx`, chúng ta đã sử dụng hàm `map()` để cập nhật số lượng: `prev.map(...)` nhằm vừa duyệt qua các phần tử vừa trả về một mảng mới hoàn toàn; hoặc dùng toán tử Spread (`...`) để sao chép mảng khi thêm mới: `[...prev, newRoom]`.
- Khi ta gọi `setBooking(mảng_mới)`, React sẽ so sánh tham chiếu của mảng hiện tại với mảng mới, nhận thấy chúng khác nhau và tiến hành re-render lại UI để phản ánh sự thay đổi của dữ liệu một cách chính xác.
