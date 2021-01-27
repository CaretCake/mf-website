import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return(
    	<nav className="nav">
    		<div className="nav-container">
    			<Link to="/">Home</Link>
            	<Link to="/portfolio">Portfolio</Link>
    		</div>
    	</nav>
    );
  }
}

export default NavBar;