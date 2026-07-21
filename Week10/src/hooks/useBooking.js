import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart, selectTotalItems, selectTotalPrice } from '../store/cartSlice';

const useBooking = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return {
    bookingItems: cartItems,
    totalItems,
    totalPrice,
    handleAddToBooking: (item) => {
        // You might need to check if existing room here if needed, but Redux slice does it.
        // Wait, the slice in cartSlice.js does not alert on existing. Let's just dispatch.
        dispatch(addToCart(item))
    },
    onRemove: (id) => dispatch(removeFromCart(id)),
    onUpdateMonths: (id, quantity) => dispatch(updateQuantity({ id, quantity })),
    clearCart: () => dispatch(clearCart())
  };
};

export default useBooking;
