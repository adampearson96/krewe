import React from "react"
import { Link } from "gatsby"

import "../scss/navbar.scss"

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      navbarActiveClass: ""
    }
  
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({ navbarActiveClass: "active" })
          : this.setState({ navbarActiveClass: "" })
      }
    )
  }

  render() {
    return (
      <header>
        <div className="outer-container">
          <div className="header-title">
            <p><Link to="/">Home</Link> / <span>{this.props.pageTitle}</span></p>
          </div>
          <nav className={`main-navigation ${this.state.navbarActiveClass}`}>
            <button className="mobile-toggle" onClick={() => this.toggleHamburger()}>
              <p>
                Take me to… 
              </p>
              <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="navigation-container">
              <div className="inner-container">
                <Link to="/" activeClassName="active">Home</Link>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/work" activeClassName="active">Work</Link>
                <Link to="/process" activeClassName="active">Process</Link>
                <Link to="/contact" activeClassName="active">Contact</Link>
              </div>
            </div>
          </nav> 
        </div>
      </header>
    )
  }
}

export default Navbar