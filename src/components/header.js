import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import logo from '../images/header_logo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#20232a',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.45rem 1.0875rem',
      }}
    >
      <h1 style={{margin: 0}}>
        <Link to='/'>
          <img src={logo} alt='ニューレベレーションチャーチ' width='240' style={{margin: 0}} />
        </Link>
      </h1>
    </div>
    <Navigation />
  </div>
)

export default Header
