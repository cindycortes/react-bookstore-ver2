import React, { Component } from 'react';

import TopNav from './components/TopNav';
import BookList from './components/BookList';
import Cart from './components/Cart'
import axios from 'axios'


class App extends Component {

  state = {
    books: []
  }

  
  async componentDidMount() {
    const response = await fetch(`http://localhost:8082/api/books`)
    const books = await response.json(); 
    this.setState({ books });
  } catch (error) {
    console.log(error);
  }
  
  addBookToCart = (id) => {
    axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
    .then(res => {
      let theOtherBooks = this.state.books.filter(book => book.id != id)
      let orderedBooks = [...theOtherBooks, res.data].sort((a, b) => a.id > b.id)
      this.setState({ books: orderedBooks })
    })
  }
  
  removeBookFromCart = (id) => {
    axios.patch(`http://localhost:8082/api/books/cart/remove/${id}`)
    .then(res => {
      let theOtherBooks = this.state.books.filter(book => book.id != id)
      let orderedBooks = [...theOtherBooks, res.data].sort((a, b) => a.id > b.id)
      this.setState({ books: orderedBooks })
    })
  }
  

  cartList = () => this.state.books.filter(book => book.inCart)

  render() {
    console.log('cartList', this.cartList())

    return (
      <div className="App">
        <TopNav />
        <div className="container-fluid">
          <div className="row">

            <div className="col"><BookList books={this.state.books}
              addBookToCart={this.addBookToCart} /></div>

            <div className="col"><Cart cartList={this.cartList()} removeBookFromCart={this.removeBookFromCart} /></div>
          </div>
        </div>


      </div>


    );
  }
}

export default App;
