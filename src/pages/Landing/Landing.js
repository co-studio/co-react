import React, { Component } from 'react'

// Illustrations
import heroImage from '../../assets/images/background.jpg'
import thumbnail from '../../assets/images/thumbnail.svg'
// Components
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import FormEmail from '../../components/FormEmail/FormEmail'
import SubHeader from '../../components/SubHeader/SubHeader'
import SubHeadline from '../../components/SubHeadline/SubHeadline'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import CardUseCase from '../../components/CardUseCase/CardUseCase'

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
    // const anchor = document.getElementById('landing-uses').scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <ContainerPage>
        <Hero image={heroImage}>
        </Hero>

        <Header>
          Here's a Header (an h1)
        </Header>
        
        <SubHeader>
          My SubHeader (h2)
        </SubHeader>

        <SubHeadline>
          My SubHeadline (h3)
        </SubHeadline>

        <FormEmail btnText="my btnText" />

        <Thumbnail image={thumbnail}
          href="none"
          title="Thumbnail Title"
          description="Thumbnail description"
        />

        <CardUseCase image={thumbnail}
          header="Card Header"
          listItems={[
            'Item Uno',
            'Item Dos',
          ]}
        />

      </ContainerPage>
    )
  }
}

export default Landing
