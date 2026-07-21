const Banner = () => {
  return (
    <div 
      className="p-12 mb-12 text-white rounded-2xl shadow-lg text-center flex items-center justify-center min-h-[500px]" 
      style={{ 
        background: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.6)), url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80) center/cover no-repeat'
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Tìm Kiếm <span className="text-cyan-400">Phòng Trọ & Căn Hộ</span> Lý Tưởng
        </h1>
        <p className="text-lg md:text-xl mb-12 mx-auto text-gray-200 max-w-3xl">
          Khám phá hàng ngàn phòng trọ, căn hộ cho thuê chất lượng cao với giá cả hợp lý nhất. 
          Môi trường sống tiện nghi, ấm cúng và an toàn đang chờ đón bạn.
        </p>
        <button 
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-full font-semibold transition duration-200 transform hover:-translate-y-1 hover:shadow-xl shadow-md border-0"
        >
          Tìm phòng ngay
        </button>
      </div>
    </div>
  );
};

export default Banner;
