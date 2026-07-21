import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import useLocalStorage from '../hooks/useLocalStorage';

const CATEGORY_MAP = {
  1: 'Căn hộ dịch vụ',
  2: 'Phòng trọ gác lửng',
  3: 'Studio',
  4: 'Ở ghép',
  5: 'Nhà nguyên căn'
};

const RoomCard = ({ room }) => {
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useLocalStorage('readmore_wishlist', []);
  
  // Safe check because room is checked below, but we need it for hooks rules (called at top)
  const isWishlisted = room ? wishlist.some(item => item.id === room.id) : false;

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      setWishlist(wishlist.filter(item => item.id !== room.id));
    } else {
      setWishlist([...wishlist, room]);
    }
  };

  if (!room) return null;

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      {/* Ảnh phòng */}
      <div className="relative overflow-hidden group">
        <img
          src={`https://picsum.photos/seed/room${room.id}/300/200`}
          alt="Room image"
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
        {/* Badge "Còn trống" góc phải */}
        {room.isAvailable && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            Còn trống
          </span>
        )}
        {/* Badge giảm giá góc trái */}
        {room.originalPrice > room.price && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            -{Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
          </span>
        )}
      </div>

      <div className="flex flex-col flex-grow p-4">
        {/* Badge danh mục */}
        <div className="mb-2">
          <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-medium px-2 py-0.5 rounded">
            {CATEGORY_MAP[room.categoryId] || 'Phòng cho thuê'}
          </span>
        </div>

        {/* Tiêu đề — clamp 2 dòng */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug line-clamp-2 min-h-[2.5rem]" title={room.title}>
            {room.title}
          </h3>
          <button
            onClick={toggleWishlist}
            className="border-0 bg-transparent p-0 ml-2 text-xl leading-none cursor-pointer focus:outline-none hover:scale-110 transition-transform"
            title={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
          >
            {isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Địa chỉ — clamp 2 dòng */}
        <p className="text-gray-500 text-xs mt-2 mb-3 line-clamp-2 min-h-[2.4rem]">
          📍 {room.address}
        </p>

        {/* Diện tích + Giá thuê */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-center">
          <div className="col-span-1 p-2 bg-gray-50 rounded-lg flex flex-col justify-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Diện tích</div>
            <div className="font-bold text-xs md:text-sm text-gray-700">{room.area} m²</div>
          </div>
          <div className="col-span-2 p-2 bg-gray-50 rounded-lg flex flex-col justify-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Giá thuê/Tháng</div>
            <div className="font-bold text-xs md:text-sm text-indigo-600 truncate">
              {room.price.toLocaleString('vi-VN')}đ/th
            </div>
          </div>
        </div>

        {/* Tiền cọc */}
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-gray-500 text-xs">Tiền đặt cọc:</span>
          <span className="font-semibold text-gray-700 text-xs">{room.deposit} VNĐ</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link 
            to={`/rooms/${room.id}`} 
            className="flex-grow text-center bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 hover:border-indigo-700 rounded-full font-medium py-2 text-xs transition duration-150 no-underline shadow-sm"
          >
            Xem chi tiết
          </Link>
          <button
            onClick={() => dispatch(addToCart(room))}
            disabled={!room.isAvailable}
            className="flex-grow bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white rounded-full font-medium py-2 text-xs transition duration-150 shadow-sm"
          >
            Đặt giữ chỗ
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
