import React from 'react';
import './App.css';
import { HomePage } from './layouts/homepage/HomePage';
import { Footer } from './layouts/navbar-and-footer/Footer';
import { Navbar } from './layouts/navbar-and-footer/Navbar';

export const App =  () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
