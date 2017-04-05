import React, { Component } from 'react'
import { Link } from 'react-router'

class Button extends Component {
  render() {
    const { href, className, children } = this.props
    return (
      <Link className={`Button ${className}`}
        to={href}>
        {children}
      </Link>
    )
  }
}

export default Button
