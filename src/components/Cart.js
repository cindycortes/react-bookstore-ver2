import React, { Component } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
    let listOfCartItems = props.booksInCart
        .map(item => <CartItem key={item.id} item={item}
            removeBookFromCart={props.removeBookFromCart}/ >)
    let theTotal = props.booksInCart.reduce((acc, item) => acc + item.price, 0)

    return(
        <div> Cart:
            {listOfCartItems}
            Total (w/ tax): {theTotal}
        </div>
    )
}
   
export default Cart