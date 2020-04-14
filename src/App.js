import React from 'react';
import { Switch, Route } from "react-router-dom"
  // COMPONENT Meaning: 
  // {Switch}= Is really IMPORTANT, to use Switch, we wrap our route components
  // within it. Once it matchs the first exact path
  // it wont render anything else useless its exactly the same /id/url.

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
// Now all I had to do was to place <Header> outside of <switch> and <routes> that contains all of our page components. That means our <Header> will always be present/render despite what our <switch> and <route> components will render their selfs on the user page.

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* Had to use a class component for {ShopPage} because I will need to store what the users inputs will be. */}
        <Route path="/signinandsignup" component={SignInAndSignUpPage} />
        {/* FUNCTIONS/COMPONENT Meaning: 
        (exact)= needs only a boolean true or false,
        if nothing is writen its automatically true. 
        (path)= will be a string like "/shop" that will be equal to the path in the current place url.
        (componet)= will be the page we want 
        to render to the users like {HatsPage} or {ShopPage} in our jsx files. */}
      </Switch>
    </div>
  );
}

export default App;
