import React, { Component } from 'react'
import { Card } from 'reactstrap'

const Book = (props) => {

    return (
        <div>
            <p>
                <Card>
                    <h5>{props.book.title}</h5>

                    <i>{props.book.subtitle} </i>

                    Author: {props.book.author}<br/>

                    Pages: {props.book.pages} <br/>

                    Price: ${props.book.price}<br/>
                </Card>

                <button type="button" className="btn btn-info"
                    onClick={() => props.addBookToCart(props.book.id)}>
                    Add To Cart
                </button>
            </p>
        </div>
    )
}



export default Book