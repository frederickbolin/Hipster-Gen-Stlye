import React from "react";
import { Link } from "react-router-dom";
import { connect, connectAdvanced } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo} from "../../assets/crown.svg"
// Because this isnt a JSX file we dont actually set the import, Im just importing in this crown.svg as ReactComponent key word but setting that as LOGO key word for now.
// now by doing this. I can now place <Logo></Logo> anywhere on this file.

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
          Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
          Sign In
          </Link>
        )}
        <CartIcon />
    </div>
    {
      hidden ? null :
     <CartDropdown />
    }
  </div> 
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
});

       
// Have to now place <Header /> (like that) witch also has the <Logo /> emblem into App.js folder so <Header> will always render and be present to users.

export default connect(mapStateToProps) (Header);


