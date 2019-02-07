import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
    state = { // need state to track the value
        filterPhrase: '',
        type: 'title'
    }

    handleChange = event => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        let listOfBooks = this.props.books
            .filter(book => book[this.state.type].includes(this.state.filterPhrase))
            .map(book => <Book key={book.id} book={book} addBookToCart={this.props.addBookToCart} />)

        return (
            <div>
           

                    <input type="text" name="filterPhrase" onChange={this.handleChange} value={this.state.filterPhrase} />
                        <select name="type" onChange={this.handlechange} value={this.state.type}>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                        </select>

                    {listOfBooks}
                </div>
           
        )
    }
}

export default BookList