import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <div className="navbar">
        <Link to ="/">
          <p>Home</p>
        </Link>
        <p>About</p>
      </div>
    );
}

export default Navbar;