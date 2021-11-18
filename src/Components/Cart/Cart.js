import classes from './Cart.module.css';
import Modal from "../../UI/Modal";

const Cart = (props) => {
    const cartItmes = (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'Sushi', amount: 2, price: 13.99}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal>
            <div>
                {cartItmes}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button-alt']}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    )
};

export default Cart;
