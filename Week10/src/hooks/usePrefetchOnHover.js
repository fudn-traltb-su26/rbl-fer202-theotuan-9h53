/**
 * ⚡ [PERF] usePrefetchOnHover Hook
 * 
 * Custom hook để prefetch (tải trước) các route chunk khi user di chuột (hover)
 * lên navigation link. Điều này giúp giảm thời gian chờ khi user thực sự click
 * vào link vì chunk đã được tải sẵn trong cache của trình duyệt.
 * 
 * Cơ chế hoạt động:
 * 1. Khi user hover lên link → gọi dynamic import() tương ứng
 * 2. Trình duyệt tải chunk JS về và cache lại
 * 3. Khi user click navigate → chunk đã sẵn sàng, render tức thì
 * 
 * @example
 * const prefetchHandlers = usePrefetchOnHover();
 * <Link to="/rooms" onMouseEnter={prefetchHandlers['/rooms']}>Phòng</Link>
 */
import { useCallback, useRef } from 'react';

// Map các route path đến dynamic import tương ứng
const routeImportMap = {
  '/': () => import('../pages/HomePage'),
  '/rooms': () => import('../pages/RoomListPage'),
  '/booking': () => import('../pages/BookingPage'),
  '/admin/rooms': () => import('../pages/admin/RoomManagePage'),
};

const usePrefetchOnHover = () => {
  // Dùng ref để theo dõi chunk nào đã prefetch rồi → tránh gọi import() lặp lại
  const prefetchedRef = useRef(new Set());

  /**
   * Hàm prefetch — gọi khi onMouseEnter
   * @param {string} routePath - đường dẫn route cần prefetch (ví dụ: '/rooms')
   */
  const prefetch = useCallback((routePath) => {
    // Nếu đã prefetch rồi → bỏ qua
    if (prefetchedRef.current.has(routePath)) return;

    const importFn = routeImportMap[routePath];
    if (importFn) {
      // Đánh dấu đã prefetch (dù chưa xong) để tránh gọi lại
      prefetchedRef.current.add(routePath);

      // Gọi dynamic import — trình duyệt sẽ fetch và cache chunk
      importFn()
        .then(() => {
          console.log(`⚡ [Prefetch] Đã tải trước chunk cho route: ${routePath}`);
        })
        .catch((err) => {
          // Nếu lỗi → xóa khỏi set để cho phép thử lại lần sau
          prefetchedRef.current.delete(routePath);
          console.warn(`⚠️ [Prefetch] Lỗi khi tải chunk cho ${routePath}:`, err);
        });
    }
  }, []);

  /**
   * Tạo object chứa các event handler cho từng route
   * Dùng: onMouseEnter={handlers['/rooms']}
   */
  const handlers = {};
  for (const path of Object.keys(routeImportMap)) {
    handlers[path] = () => prefetch(path);
  }

  return { prefetch, handlers };
};

export default usePrefetchOnHover;
