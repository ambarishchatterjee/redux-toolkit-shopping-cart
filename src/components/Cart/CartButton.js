import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import uiSlice from '../../store/ui-slice';

const CartButton = (props) => {
  const cartQuantity = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch()
  const cartToggleHandler = () => {
    dispatch(uiSlice.actions.toggle())
  }
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
