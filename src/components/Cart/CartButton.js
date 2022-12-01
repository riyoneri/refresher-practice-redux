import { useDispatch, useSelector } from 'react-redux'

import { cartToggleActions } from '../../store/cart-toggle';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const allCartItems = useSelector(state => state.cart.allItems)

  const cartToggleHandler = () => {
    dispatch(cartToggleActions.toggle())
  }

  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{allCartItems}</span>
    </button>
  );
};

export default CartButton;
