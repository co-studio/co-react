import React, { Component } from 'react'

class Hero extends Component {
  render() {
    const { children, image, className } = this.props

    return (
      <section className={`Hero ${className}`}
        style={{ backgroundImage: `url(${image})` }}>
        {children}
      </section>
    )
  }
}

export default Hero
