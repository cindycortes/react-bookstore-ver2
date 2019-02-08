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
  } catch(error) {
    console.log(error);
  }

  addBookToCart = (id) => {
    axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
      .then(res => {
        this.setState(prevState => {
          // let theOtherBooks = prevState.books.filter(book => book.id != id)

          // let newBooks = []
          // for (let i = 0; i < prevState.books.length; i++) {
          //   const currentBook = prevState.books[i]
          //   // if the id of current book === id, then change its inCart to true and return the rest of the obj

          //   if (currentBook.id == id) {
          //     currentBook.inCart = true

          //   }
          //   newBooks.push(currentBook)

          // }
          return {
            books: prevState.books.reduce((acc, currentBook) => {
              if (currentBook.id == id) {
                return [...acc, {
                  ...currentBook,
                  inCart: true
                }]
              }
              return [...acc, currentBook]
            }, [])
          }
        })
      })
  }

  removeBookFromCart = (id) => {
    axios.patch(`http://localhost:8082/api/books/cart/remove/${id}`)
      .then(res => {
        let theOtherBooks = this.state.books.filter(book => book.id != id)
        this.setState({ books: [...theOtherBooks, res.data] })
      })
  }


  cartList = () => this.state.books.filter(book => book.inCart)


  render() {
    console.log('cartList', this.cartList())

    return (
      <div className="App" >
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
