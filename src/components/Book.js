import React, { Component } from 'react'

const Book = (props) => {

    return (
        <div>
            <p>
               <h5>Title: {props.book.title}</h5>

                <button type="button" className="btn btn-info"
                    onClick={() => props.addBookToCart(props.book.id)}>
                    Add To Cart
                </button>
            </p>
        </div>
    )
}



export default Book