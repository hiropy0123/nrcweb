import React, { Component }  from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import logo from '../images/header_logo.png'
import 'hamburgers/dist/hamburgers.min.css'
import './header.css'


class Header extends Component {
  render() {
    // let navActive = false
    // let toggleNavi = isActive => {
    //   navActive = !isActive
    //   console.log(navActive)
    // }

    return(
      <div
        style={{
          background: '#20232a',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1260,
            padding: '0.45rem 1.0875rem',
          }}
        >
          <h1 style={{margin: 0}}>
            <Link to='/'>
              <img src={logo} alt="" width='220' style={{margin: 0}} />
            </Link>
          </h1>
        </div>
        <Navigation />

        <div id="navButton" >
          <div className="hamburger hamburger--squeeze">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
