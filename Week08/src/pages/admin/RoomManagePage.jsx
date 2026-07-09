
import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Spinner, Alert, Badge, Image } from 'react-bootstrap';
import { getRooms, createRoom, updateRoom, deleteRoom } from '../../services/roomService';

const defaultRoomData = {
  title: '',
  address: '',
  price: '',
  area: '',
  cover: '',
  available: true,
};

const RoomManagePage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [currentRoom, setCurrentRoom] = useState(defaultRoomData);
  
  // Feedback states
  const [feedback, setFeedback] = useState({ show: false, message: '', variant: 'success' });

  const fetchRooms = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRooms();
      setRooms(response.data);
    } catch (err) {
      setError(err.message || 'Có lỗi xảy ra khi tải danh sách phòng.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const showFeedback = (message, variant = 'success') => {
    setFeedback({ show: true, message, variant });
    setTimeout(() => setFeedback({ show: false, message: '', variant: 'success' }), 3000);
  };

  const handleShowAdd = () => {
    setModalMode('add');
    setCurrentRoom(defaultRoomData);
    setShowModal(true);
  };

  const handleShowEdit = (room) => {
    setModalMode('edit');
    setCurrentRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRoom(defaultRoomData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentRoom(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!currentRoom.title || !currentRoom.price || !currentRoom.address) {
      alert("Vui lòng nhập đầy đủ Tên phòng, Giá và Khu vực!");
      return;
    }

    const payload = {
      ...currentRoom,
      price: Number(currentRoom.price),
      area: Number(currentRoom.area),
    };

    try {
      if (modalMode === 'add') {
        const res = await createRoom(payload);
        setRooms([...rooms, res.data]);
        showFeedback('Thêm phòng mới thành công!');
      } else {
        const res = await updateRoom(currentRoom.id, payload);
        setRooms(rooms.map(r => r.id === currentRoom.id ? res.data : r));
        showFeedback('Cập nhật thông tin phòng thành công!');
      }
      handleCloseModal();
    } catch (err) {
      showFeedback(`Lỗi: ${err.message}`, 'danger');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài đăng phòng thuê này không?")) {
      try {
        await deleteRoom(id);
        setRooms(rooms.filter(r => r.id !== id));
        showFeedback('Xóa phòng thành công!');
      } catch (err) {
        showFeedback(`Lỗi khi xóa: ${err.message}`, 'danger');
      }
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Quản lý phòng thuê</h2>
        <Button variant="primary" onClick={handleShowAdd}>+ Thêm phòng mới</Button>
      </div>

      {feedback.show && (
        <Alert variant={feedback.variant} onClose={() => setFeedback({ ...feedback, show: false })} dismissible>
          {feedback.message}
        </Alert>
      )}

      {loading ? (
        <div className="text-center my-5 py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 text-muted">Đang tải dữ liệu...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">
          <strong>Lỗi:</strong> {error}
          <div className="mt-2">
            <Button variant="outline-danger" size="sm" onClick={fetchRooms}>Thử lại</Button>
          </div>
        </Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>Tên phòng thuê</th>
              <th>Khu vực</th>
              <th>Giá thuê/Tháng</th>
              <th>Diện tích</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">Chưa có dữ liệu phòng nào.</td>
              </tr>
            ) : (
              rooms.map(room => (
                <tr key={room.id} className="align-middle">
                  <td>
                    {room.cover ? (
                      <Image src={room.cover} alt={room.title} style={{ width: '80px', height: '60px', objectFit: 'cover' }} rounded />
                    ) : (
                      <div className="bg-secondary text-white text-center rounded d-flex align-items-center justify-content-center" style={{ width: '80px', height: '60px', fontSize: '12px' }}>
                        No Image
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {room.title}
                    </div>
                  </td>
                  <td>
                    <div style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {room.address}
                    </div>
                  </td>
                  <td>
                    <strong className="text-danger">
                      {Number(room.price).toLocaleString('vi-VN')} đ
                    </strong>
                  </td>
                  <td>{room.area} m²</td>
                  <td>
                    {room.available ? (
                      <Badge bg="success">Còn trống</Badge>
                    ) : (
                      <Badge bg="danger">Đã thuê</Badge>
                    )}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button variant="outline-primary" size="sm" onClick={() => handleShowEdit(room)}>
                        Sửa
                      </Button>
                      <Button variant="outline-danger" size="sm" onClick={() => handleDelete(room.id)}>
                        Xóa
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}

      {/* Modal Thêm/Sửa */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === 'add' ? 'Thêm phòng mới' : 'Chỉnh sửa phòng'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Tên phòng thuê <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text" 
                name="title" 
                value={currentRoom.title} 
                onChange={handleInputChange} 
                placeholder="Nhập tên phòng" 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Khu vực (Địa chỉ) <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text" 
                name="address" 
                value={currentRoom.address} 
                onChange={handleInputChange} 
                placeholder="Nhập địa chỉ" 
                required 
              />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Giá thuê (VNĐ) <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="number" 
                    name="price" 
                    value={currentRoom.price} 
                    onChange={handleInputChange} 
                    placeholder="VD: 3000000" 
                    required 
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Diện tích (m²)</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="area" 
                    value={currentRoom.area} 
                    onChange={handleInputChange} 
                    placeholder="VD: 25" 
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Đường dẫn ảnh (URL Cover)</Form.Label>
              <Form.Control 
                type="text" 
                name="cover" 
                value={currentRoom.cover} 
                onChange={handleInputChange} 
                placeholder="https://..." 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check 
                type="switch" 
                id="available-switch" 
                name="available"
                label="Trạng thái: Còn trống" 
                checked={currentRoom.available}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Hủy
            </Button>
            <Button variant="primary" type="submit">
              {modalMode === 'add' ? 'Lưu phòng' : 'Cập nhật'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default RoomManagePage;
