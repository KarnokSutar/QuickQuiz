import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

   const addToCartHandler = amount => {
     cartCtx.addItem({
      id: props.id,
       name: props.name,
       amount: amount,
       price: props.price
     });
     console.log(props.price)
     console.log(amount)
   };

  return (
    <li  className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
<MealItemForm id={props.id}  onAddToCart = {addToCartHandler} /> 
    </li>
  );
};

export default MealItem;
