

import React,{useReducer} from 'react'
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount:0
}
const cartReducer = (state,action) => {
if(action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * state.totalAmount

    return{

        items: updatedItems,
        totalAmount: updatedTotalAmount

    }
}

return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState)

    const addItemsToCartHandler = (item) => {
        dispatchCart({type:'ADD_ITEM', item:item})


    }
    const removeItemsFromCartHandler = (id) => {
        dispatchCart({type:'REMOVE_ITEM', id:id})


    }
    const cartContext = {

        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemsToCartHandler,
        removeItem: removeItemsFromCartHandler

    }

    return (
        <>
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}


export default CartProvider;