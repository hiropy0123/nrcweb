import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import './navigation.css'

class Navigation extends Component {
  items = [
    { path: '/info/', name: '教会案内' },
    { path: '/worship/', name: '礼拝・集会案内' },
    { path: '/access/', name: 'アクセス' },
    { path: '/contact/', name: 'お問い合わせ' },
  ]

  styles = {
    ul: {
      listStyle: 'none',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
    },
    li: {
      margin: '0 .4rem',
      fontSize: '0.9rem'
    },
    a: {
      textDecoration: 'none',
      color: '#fff',
      padding: '26px 1rem'
    }
  }

  render() {
    return (
      <nav id="gnav" className="gnav">
        <ul style={this.styles.ul}>
        { 
          this.items.map((data, index) => {
            return (
              <li key={index} style={this.styles.li}>
                <Link to={data.path} style={this.styles.a}>{data.name}</Link>
              </li>
            )
          })
        }
        </ul>
      </nav>
    )
  }
}

export default Navigation
