import React from 'react'

const ContainerPage = (props) => {
  return (
    <section className={`ContainerPage ${props.className}`}>
      {props.children}
    </section>
  )
}

export default ContainerPage
