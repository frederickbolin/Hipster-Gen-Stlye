import React from 'react';
import { Switch, Route } from "react-router-dom"
  // COMPONENT Meaning: 
  // {Switch}= Is really IMPORTANT, to use Switch, we wrap our route components
  // within it. Once it matchs the first exact path
  // it wont render anything else useless its exactly the same /id/url.

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from "./components/header-component/header.component";
// Now all I had to do was to place <Header> outside of <switch> and <routes> that contains all of our page components. That means our <Header> will always be present/render despite what our <switch> and <route> components will render their selfs on the user page.
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null;
  

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      // This inner scope auth.onAuthStateChanged(user => {
      // this.setState({ currentUser: user }) is an open messaging system between the firebase app and the application Ive created .this scope saves users authentication if brower refresh, exit tab, ect.. on same device. this also means its an open subscription, then we have to write code to close subscription when unmounted to not have any memory leaks in jave app.
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  // this WillUnmount code closes the subscription when user is no longer auth. Leaving no memory leaks in Java app. This is how my app will handle any auth changes in firebase.

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* <Header/> was placed here, outside of switch and route to always show on any page. */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* Had to use a class component for {ShopPage} because I will need to store what the users inputs will be. */}
          <Route path="/signin" component={SignInAndSignUpPage} />
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
}


export default App;
