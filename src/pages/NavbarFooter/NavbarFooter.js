import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

class NavbarFooter extends Component {
  render () {
    const { children, location } = this.props
    return (
      <div className="app-container">
        <Navbar location={location} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default NavbarFooter
