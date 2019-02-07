import React, { Component } from 'react'

const Book = (props) => {

    return (
        <div>
            <p>
                Title: {props.book.title}
                <button onClick={
                    () => props.addBookToCart(props.book.id)
                }>  Add To Cart </button>
            </p>
        </div>
    )
}



export default Book