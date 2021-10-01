import classes from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

import React, {useContext} from 'react'

import CartContext from '../../store/cart-context';
const HeaderCartBtn = (props) => {
    const CartCtx = useContext(CartContext)

    const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)
return(

    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>

)
}

export default HeaderCartBtn;