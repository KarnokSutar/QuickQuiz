
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const DummyItem =[{name: "Shushi",price: 22.32,amount: 3}, {name: "Burger",price:2.32,amount:2}]


function Cart (props){
  const cartCtx= useContext(CartContext)
    const cartItem = cartCtx.items.map((item)=>(  
           <CartItem name ={item.name}
                amount={item.amount}
                price={item.price}
             />
          
    ));

console.log(cartCtx.items)
    return (
        <Modal onClose = {props.onClose}> 
            {cartItem} 
            <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>   
            </Modal>
    )
}
export default Cart;