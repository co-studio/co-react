import React, { Component } from 'react'

import ContainerPage from '../../components/ContainerPage/ContainerPage'
import SubHeader from '../../components/SubHeader/SubHeader'
import FormContact from '../../components/FormContact/FormContact'
import SubHeadline from '../../components/SubHeadline/SubHeadline'

class Contact extends Component {
  render() {
    return (
      <ContainerPage>
        <SubHeadline>
          We are always happy to talk and will respond within a day's time.
        </SubHeadline>

        <section className="contact-form-container">
          <SubHeader className="contact-header">
            Contact Us
          </SubHeader>

          <FormContact />
        </section>

      </ContainerPage>
    )
  }
}

export default Contact
