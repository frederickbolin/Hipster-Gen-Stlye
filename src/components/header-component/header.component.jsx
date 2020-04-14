import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo} from "../../assets/crown.svg"
// Because this isnt a JSX file we dont actually set the import, Im just importing in this crown.svg as ReactComponent key word but setting that as LOGO key word for now.
// now by doing this. I can now place <Logo></Logo> anywhere on this file.

import "./header.styles.scss";

const Header = () => (
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
    </div>
  </div>
);

// Have to now place <Header /> (like that) witch also has the <Logo /> emblem into App.js folder so <Header> will always render and be present to users.

export default Header;


