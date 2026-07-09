import { useState } from 'react';

const useBooking = () => {
  const [totalItems, setTotalItems] = useState(0);

  const handleAddToBooking = (room) => {
    console.log("Bạn vừa nhấn đặt phòng:", room);
    setTotalItems(prev => prev + 1);
  };

  return { totalItems, handleAddToBooking };
};

export default useBooking;
