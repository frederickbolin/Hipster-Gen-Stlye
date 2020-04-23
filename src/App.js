import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
  // COMPONENT Meaning: 
  // {Switch}= Is really IMPORTANT, to use Switch, we wrap our route components
  // within it. Once it matchs the first exact path
  // it wont render anything else useless its exactly the same /id/url.
import { connect } from "react-redux";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from "./components/header-component/header.component";
// Now all I had to do was to place <Header> outside of <switch> and <routes> that contains all of our page components. That means our <Header> will always be present/render despite what our <switch> and <route> components will render their selfs on the user page.
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubsribeFromAuth = null;
  

  componentDidMount() {

    const {setCurrentUser} = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            // This in snapshot means whenever the user snapshop updates it sets the user value with new object.
          });
        });
        // This whole scope is related to the firebase library. And also a mix and matched the firebase.auth library and firebase.store library together to create new objects from my data base and bring em back in then store em.
      }
      setCurrentUser(userAuth);
      
      //this.setState({ currentUser: user });
      // This inner scope auth.onAuthStateChanged(user => {
      // this.setState({ currentUser: user }) is an open messaging system between the firebase app and the application Ive created .this scope saves users authentication if brower refresh, exit tab, ect.. on same device. this also means its an open subscription, then we have to write code to close subscription when unmounted to not have any memory leaks in jave app.
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  // this WillUnmount code closes the subscription when user is no longer auth. Leaving no memory leaks in Java app. This is how my app will handle any auth changes in firebase.

  render() {
    return (
      <div>
        <Header />
        {/* <Header/> was placed here, outside of switch and route to always show on any page. */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* Had to use a class component for {ShopPage} because I will need to store what the users inputs will be. */}
          <Route 
            exact 
            path="/signin" 
            render={() => 
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
            <SignInAndSignUpPage />
            )
          }
        />
          {/* FUNCTIONS/COMPONENT Meaning: 
          (exact)= needs only a boolean true or false,
          if nothing is writen its automatically true. 
          (path)= will be a string like "/shop" that will be equal to the path in the current place url.
          (componet)= will be the page we want 
          to render to the users like {HatsPage} or {ShopPage} in our jsx files.  */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
