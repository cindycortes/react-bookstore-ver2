import React, { Component } from 'react'
import Book from './Book'
import { Input } from 'reactstrap'


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
            .filter(book => book[this.state.type].toLowerCase().includes(this.state.filterPhrase.toLowerCase()))
            .map(book => <Book key={book.id} book={book} addBookToCart={this.props.addBookToCart} />)
        
        return (
            <div>

                <Input type="text" className="searchBar" name="filterPhrase" onChange={this.handleChange} value={this.state.filterPhrase} bsSize="lg" placeholder="Search by Title or Author" />
                
                
                <Input type="select" name="type" onChange={this.handleChange} id="select">
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </Input>

                {listOfBooks}
            </div>

        )
    }
}

export default BookList