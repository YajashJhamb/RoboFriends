import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1 className="f1">RoboFriends</h1>
      <Link className="btn-primary" to="/add-robot">
        {" "}
        ADD ROBOT
      </Link>
    </div>
  );
};

export default Header;
