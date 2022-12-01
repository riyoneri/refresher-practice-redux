import { useSelector } from 'react-redux'

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)

  let cartContent
  if (cartItems.length > 0) {
    cartContent = cartItems.map(cartItem => <CartItem key={cartItem.id} item={{...cartItem}} />)
  } else {
    cartContent = <p>No Items in cart</p>
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartContent}
      </ul>
    </Card>
  );
};

export default Cart;
