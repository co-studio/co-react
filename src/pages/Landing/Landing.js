import React, { Component } from 'react'

// Illustrations
import downArrow from '../../assets/icons/icon-down-arrow.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import SubHeadline from '../../components/SubHeadline/SubHeadline'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.scrollTo = this.scrollTo.bind(this)

    this.state = {
      windowWidth: null
    }
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  scrollTo() {
    const anchor = document.getElementById('landing-uses').scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className="app-container">
        
      </div>
    )
  }
}

export default Landing
