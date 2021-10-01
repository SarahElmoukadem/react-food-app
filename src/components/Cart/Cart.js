import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}> {[{
        id: 'm4',
        name: 'Green Bowl',
        amount: 2,
        price: 18.99,
    }].map((item) => {
        return(

        <li>
            {item.name}
        </li>
        )
    })}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            cartItems

            <div >
                {cartItems}
                <div className={classes.total}>
                    <span> Total Amount</span>
                    <span> 3546 </span>

                </div>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>

                <button className={classes.button}>
                    Order
                </button>
            </div>

        </Modal>


    )



}

export default Cart