import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
    	<nav className="nav">
    		<div className="nav-container">
    			<a href="/">Home</a>
            	<a href="/portfolio">Portfolio</a>
    		</div>
    	</nav>
    );
  }
}

export default NavBar;