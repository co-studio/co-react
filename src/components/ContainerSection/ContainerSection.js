import React, { PropTypes } from 'react'

const ContainerSection = ({ className, children }) => {
  return (
    <section className={`ContainerSection ${className}`}>
      {children}
    </section>
  )
}

export default ContainerSection
