import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
// import { useKeycloak } from '@react-keycloak/web'
import {isAuthenticated, login, logout} from "../../auth/AuthService";


export const Navbar = () => {

  // const { keycloak, initialized } = useKeycloak()


  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>

      <div className='container-fluid'>

        <span className='navbar-brand'>Library</span>

        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/home'> Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/search'> Search Books</NavLink>
              </li>
            { // if user is not authenticates dos not show this in navbar
            isAuthenticated() && (
            <li className='nav-item'>
              <NavLink className='nav-link' to='/test'> Test private</NavLink>
            </li>)
            }
          </ul>
          <ul className='navbar-nav ms-auto'>
            
              <li className='nav-item m-1'>
              { !isAuthenticated() ?  (
                //  <button type='button' className='btn btn-outline-light' onClick={() => login()}>
                //   Sign in
                // </button> 
                <NavLink to='/login' className='btn btn-outline-light'>Sign in </NavLink>
              ) :  
              
              <NavLink to='/logout' className='btn btn-outline-light'>Logout </NavLink>
              
              }
    
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}