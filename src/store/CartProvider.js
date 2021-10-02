

import React,{useReducer} from 'react'
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount:0
}
const cartReducer = (state,action) => {
if(action.type === 'ADD_ITEM') {

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const cartItemIndex = state.items.findIndex(
        item => item.id === action.item.id
    );

    const cartItemExist = state.items[cartItemIndex];
   
    let updatedItems;
   
    if (cartItemExist) {
       const upadateditem = {
            ...cartItemExist,
            amount: cartItemExist.amount + action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[cartItemExist] = upadateditem
    } else {
     
         updatedItems = state.items.concat(action.item)
    }

   if (action.type === 'REMOVE_ITEM'){

       const cartItemExist = state.items.findIndex(
        item => item.id === action.id
    );

    const existingItem = state.items[cartItemExist]
   
    const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        if(updatedItems.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else {
            const updatedItem = {...existingItem, amount:existingItem.amount - 1}
            updatedItems = {...state.items}
            updatedItems[existingItem] = updatedItem
        }
        
}
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