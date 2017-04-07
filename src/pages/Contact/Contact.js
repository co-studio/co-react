import React, { Component } from 'react'

// Images
import contactHeadline from '../../assets/images/contact-headline.svg'
// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
// Components
import Hero from '../../components/Hero/Hero'
import SubHeader from '../../components/SubHeader/SubHeader'
import FormContact from '../../components/FormContact/FormContact'
import SubHeadline from '../../components/SubHeadline/SubHeadline'
import Divider from '../../components/Divider/Divider'

class Contact extends Component {
  render() {
    return (
      <ContainerPage className="Contact-ContainerPage">
        <Hero className="Contact-Hero">
          <img className="Contact-Hero-img"
            src={contactHeadline} />
        </Hero>
        <ContainerSection className="Contact-ContainerSection">
          <FormContact />
        </ContainerSection>

      </ContainerPage>
    )
  }
}

export default Contact
