import React, { Component } from 'react'

import logo from '../../assets/logo-white.svg'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

class NavbarFooter extends Component {
  render () {
    const { children, location } = this.props
    return (
      <div className="app-container">
        <Navbar location={location}
          logo={logo}
        />
        {children}
        <Footer />
      </div>
    )
  }
}

export default NavbarFooter
