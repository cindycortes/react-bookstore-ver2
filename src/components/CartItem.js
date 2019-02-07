import React from 'react'
import { Card } from 'reactstrap'

const CartItem = (props) => {
    return (
        <div>
            <Card>
                Title: {props.item.title} <br />
                Price: ${props.item.price} <br />
            </Card >
           
            <button type="button" className="btn btn-danger" onClick={() => props.removeBookFromCart(props.item.id)}>Remove from Cart</button>
            
        </div >
    )
}

export default CartItem