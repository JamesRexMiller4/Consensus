import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="left L1brand-logo">Consensus</a>
        <ul id="nav-mobile" className="right">
          <li><a href="">Login With Google</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Header;