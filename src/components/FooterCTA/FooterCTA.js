import React, { PropTypes } from 'react'

const FooterCTA = ({className, children, image}) => {
  return (
    <section className={`FooterCTA ${className}`}
      style={{ backgroundImage: `url(${image})` }}>
      {children}
    </section>
  )
}

export default FooterCTA
