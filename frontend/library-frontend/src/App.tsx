import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import BookCheckoutPage from './layouts/book-checkout-page/BookCheckoutPage';
import { HomePage } from './layouts/homepage/HomePage';
import { Footer } from './layouts/navbar-and-footer/Footer';
import { Navbar } from './layouts/navbar-and-footer/Navbar';
import { SearchBooksPage } from './layouts/search-books-page/SearchBooksPage';

export const App =  () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchBooksPage />
          </Route>
          <Route path="/checkout/:bookId">
            <BookCheckoutPage />
          </Route>
        </Switch>
        </div>
      <Footer />
    </div>
  );
}
