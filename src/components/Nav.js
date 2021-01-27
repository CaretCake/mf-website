import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
    	<nav className="nav">
    		<div className="nav-container">
    			<a href="/">Home</a>
            	<a href="/about">About</a>
    		</div>
    	</nav>
    );
  }
}

export default Nav;