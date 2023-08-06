import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import BookCheckoutPage from './layouts/book-checkout-page/BookCheckoutPage';
import { HomePage } from './layouts/homepage/HomePage';
import { Footer } from './layouts/navbar-and-footer/Footer';
import { Navbar } from './layouts/navbar-and-footer/Navbar';
import { SearchBooksPage } from './layouts/search-books-page/SearchBooksPage';

export const App =  () => {

  const history = useHistory();

  const customAuthHandler  = () => {
    history.push('/login');
  }

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
          <Route path='/login' render={() => <Login /> }  />
        </Switch>
        </div>
      <Footer />
    </div>
  );
}
