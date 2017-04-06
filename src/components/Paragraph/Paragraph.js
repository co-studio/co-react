import React from 'react'

const Paragraph = ({ className, children }) => {
  return (
    <p className={`Paragraph ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph
