import React from 'react'
import { Link } from 'react-router'

const Button = ({ href, className, children, destination }) => {
  if (destination === 'external') {
    return (
      <a className={`Button ${className}`}
        href={href}
        target="_blank">
        {children}
      </a>
    )
  }
  else {
    return (
      <Link className={`Button ${className}`}
        to={href}>
        {children}
      </Link>
    )
  }
}

export default Button
