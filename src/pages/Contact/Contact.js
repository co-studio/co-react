import React, { Component, PropTypes } from 'react'

// Images

// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
// Components
import Hero from '../../components/Hero/Hero'
import Header2 from '../../components/Header2/Header2'
import FormContact from '../../components/FormContact/FormContact'
import Header3 from '../../components/Header3/Header3'
import Divider from '../../components/Divider/Divider'

class Contact extends Component {
  render() {
    const formIds = {
      name: '728759201',
      email: '544180993',
      message: '1326784560'
    }

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeE-_UKZblQhImKp-fSXSh1YH2KxMM_7b_QONOdiIijz3xyxw'

    return (
      <ContainerPage className="Contact-ContainerPage">
        <Hero className="Contact-Hero">
        </Hero>

        <ContainerSection className="Contact-ContainerSection">
          <FormContact
            formIds={formIds}
            formUrl={formUrl}
          />
        </ContainerSection>

      </ContainerPage>
    )
  }
}

export default Contact
