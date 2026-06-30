import { useCart } from '../context/CartContext';

const useBooking = () => {
  const { cartItems, totalItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  return {
    bookingItems: cartItems,
    totalItems,
    totalPrice,
    handleAddToBooking: addToCart,
    onRemove: removeFromCart,
    onUpdateMonths: updateQuantity,
    clearCart
  };
};

export default useBooking;
