import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-grow-1" style={{ minHeight: '80vh' }}>
      <Container className="text-center py-5 px-4" style={{ 
        maxWidth: '600px', 
        backgroundColor: 'var(--bg-surface)', 
        borderRadius: '16px',
        boxShadow: 'var(--shadow-default)',
        border: '1px solid var(--border)'
      }}>
        <div className="mb-4">
          <span className="fw-bold" style={{
            fontSize: '8rem',
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1'
          }}>404</span>
        </div>
        <h2 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Trang không tồn tại</h2>
        <p className="mb-4 fs-5" style={{ color: 'var(--text-secondary)' }}>
          Xin lỗi, trang web bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc đường dẫn không chính xác.
        </p>
        <Link to="/">
          <Button size="lg" className="rounded-pill px-5 py-3 border-0" style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #FF8E8E 100%)',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Về Trang Chủ
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
