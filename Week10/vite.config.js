import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚡ [PERF] Conditional import: chỉ load visualizer khi build
// Plugin này tạo file stats.html để phân tích kích thước bundle
const isAnalyze = process.env.ANALYZE === 'true';

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [react()];

  // ⚡ [PERF] rollup-plugin-visualizer — Bundle Analysis
  // Chạy: ANALYZE=true npm run build (hoặc npm run build:analyze)
  // Output: stats.html — mở bằng trình duyệt để xem biểu đồ treemap
  if (isAnalyze) {
    const { visualizer } = await import('rollup-plugin-visualizer');
    plugins.push(
      visualizer({
        open: true,              // Tự động mở stats.html sau khi build
        filename: 'stats.html',  // Tên file output
        gzipSize: true,          // Hiển thị kích thước sau gzip
        brotliSize: true,        // Hiển thị kích thước sau brotli
        template: 'treemap',     // Kiểu biểu đồ: treemap / sunburst / network
      })
    );
  }

  return {
    plugins,
    build: {
      // ⚡ [PERF] Manual chunk splitting — tách vendor thành chunk riêng
      // Giúp trình duyệt cache vendor chunk lâu hơn (ít thay đổi)
      // Vite 8 (Rolldown) yêu cầu manualChunks dạng function
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
              return 'vendor-react';  // React core — cache lâu dài
            }
            if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router/')) {
              return 'vendor-router';  // Routing lib
            }
            if (id.includes('node_modules/@reduxjs/toolkit') || id.includes('node_modules/react-redux')) {
              return 'vendor-redux';  // State management
            }
            if (id.includes('node_modules/react-bootstrap') || id.includes('node_modules/bootstrap')) {
              return 'vendor-bootstrap';  // UI framework — dependency lớn nhất
            }
          },
        },
      },
    },
  };
});
