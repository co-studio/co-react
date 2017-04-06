import React, { PropTypes } from 'react'

const ContainerRows = ({ className, children }) => {
  return (
    <div className={`ContainerRows ${className}`}>
      {children}
    </div>
  )
}

export default ContainerRows
