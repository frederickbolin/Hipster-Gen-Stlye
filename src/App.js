import React from 'react';
import { Switch, Route } from "react-router-dom"
  // COMPONENT Meaning: 
  // {Switch}= Is really IMPORTANT, to use Switch, we wrap our route components
  // within it. Once it matchs the first exact path
  // it wont render anything else useless its exactly the same /id/url.

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header-component/header.component.jsx";
// Now all I had to do was to place <Header> outside of <switch> and <routes> that contains all of our page components. That means our <Header> will always be present/render despite what our <switch> and <route> components will render their selfs on the user page.

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/*FUNCTIONS/COMPONENT Meaning: 
        (exact)= needs only a boolean true or false,
        if nothing is writen its automatically true. 
        (path)= will be a string "/hats" thats equal to the path 
        itself/current place url.
        (componet)= will be the component we want 
        to render {HatsPage} */}
      </Switch>
    </div>
  );
}

export default App;
