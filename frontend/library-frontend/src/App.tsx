import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import BookCheckoutPage from './layouts/book-checkout-page/BookCheckoutPage';
import { HomePage } from './layouts/homepage/HomePage';
import { Footer } from './layouts/navbar-and-footer/Footer';
import { Navbar } from './layouts/navbar-and-footer/Navbar';
import { SearchBooksPage } from './layouts/search-books-page/SearchBooksPage';

import TestComponent from './layouts/homepage/components/TestComponent';

import {isAuthenticated, logout} from "./auth/AuthService";
import LoginFormComponent from './auth/LoginFormComponent';
import Logout from './auth/Logout';

export const App =  () => {

  // const { initialized } = useKeycloak()

  // if (!initialized) {
  //   return <SpinnerLoading />
  // }


  // console.log(keycloak)

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
          {
            isAuthenticated() && (
            <Route path="/test">
              <TestComponent />
            </Route>
          )
          }
          <Route path="/checkout/:bookId">
            <BookCheckoutPage />
          </Route>
          {/* <Route path='/login' render={() => <LoginKeycloak /> }  /> */}
          <Route path="/login">
            <LoginFormComponent />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
        </div>
      <Footer />
    </div>
  );
}
