import React from 'react'

const CartItem = (props) => {
    return (
        <div>
            <ul>
                <li>Title: {props.item.title}</li>
                <li>Price: {props.item.price} </li>
                <button type="button" className="btn btn-danger"
                    onClick={() => props.removeBookFromCart(props.item.id)}>
                    
                    Remove from Cart</button>
            </ul>
        </div>
    )
}

export default CartItem