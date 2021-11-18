import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    return(
      <button className={classes.button}>
          <snap className={classes.icon}>
                <CartIcon/>
          </snap>
          <snap>Your Cart</snap>
          <snap className={classes.badge}>3</snap>
      </button>
    );
}

export default  HeaderCartButton;
