import React, { PropTypes } from 'react'

const TextStyle = ({ className, children, weight }) => {
  return (
    <span className={className}
      style={{ fontWeight: `${weight}` }}>
      {children}
    </span>
  )
}

export default TextStyle
