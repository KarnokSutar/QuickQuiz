import { Fragment } from "react/cjs/react.production.min";
import mealphoto from '../../assets/meals.jpg'
import classes from './Header.module.css'
function Header(props){
return(
    <Fragment>
        <header className={classes.header}>
            <h1> React Meals</h1>
            <div onClick={props.onOpen}><h1>Cart</h1> </div>
        </header>
        <div className= {classes["main-image"]}>
            <img src= {mealphoto} alt ="food" />
            </div>
    </Fragment>
)
}
export default Header;