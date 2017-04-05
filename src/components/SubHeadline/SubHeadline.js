import React, { Component } from 'react'

class SubHeadline extends Component {
  render () {
    const { children, className } = this.props
    return (
      <h3 className={`SubHeadline ${className}`}>
        {children}
      </h3>
    )
  }
}

export default SubHeadline
