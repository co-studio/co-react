import React, { Component } from 'react'

// Illustrations
import heroImage from '../../assets/images/heros/landing-hero.jpg'
import missionImages from '../../assets/images/mission-images.jpg'
import footerCTABackground from '../../assets/images/footer-cta-background.jpg'
import messengerIcon from '../../assets/icons/icon-messenger.svg'
// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
// Components
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import SubHeadline from '../../components/SubHeadline/SubHeadline'
import Button from '../../components/Button/Button'
import Divider from '../../components/Divider/Divider'
import Paragraph from '../../components/Paragraph/Paragraph'
import TextStyle from '../../components/TextStyle/TextStyle'
import FooterCTA from '../../components/FooterCTA/FooterCTA'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ContainerPage>
        <Hero image={heroImage}
          className="Hero-landing">

          <div className="Hero-headline-container">
            <div className="Hero-headline">
              <Header>
                <span className="Hero-highlight">safety</span>&<span className="Hero-highlight">unity</span>
                <br/>
                one walk at a time
              </Header>

              <Button className="Hero-button"
                destination="external"
                href="https://m.me/1763620363890366">
                <img className="Hero-button-icon"
                  src={messengerIcon}
                />
                Get Involved
              </Button>
            </div>
          </div>
        </Hero>

        <ContainerSection>
          <Divider text="mission" />

          <SubHeader>
            Safer, Stronger Communities
          </SubHeader>

          <Paragraph>
            We are a collection of over <TextStyle weight="300">3300</TextStyle> individuals determined to
            help make your community safer and stronger. If you are walking
            somewhere and feel uncomfortable or unsafe, we will be there to
            walk with you. <TextStyle weight="300">We Walk Together</TextStyle> to bolster safety and connectivity.
          </Paragraph>

          <SubHeadline>
            Get involved in your community
          </SubHeadline>

          <Paragraph>
            Here's how it works. Simply send a message
            to <a href="https://m.me/1763620363890366" target="_blank">We Walk Together</a> on
            Facebook Messenger and choose whether you would like to be walked
            for security, or if you would like to find someone to protect. Get
            matched, walk together, and strengthen the bonds of your community!

          </Paragraph>
        </ContainerSection>

        <ContainerSection>
          <img className="mission-images"
            src={missionImages} />
        </ContainerSection>


        <FooterCTA
          image={footerCTABackground}>
          <div>
            <Header>
              Ready to make a difference
              <br />
              in <span className="FooterCTA-highlight">your community?</span>
            </Header>

            <Button className="Hero-button"
              destination="external"
              href="https://m.me/1763620363890366">
              <img className="Hero-button-icon"
                src={messengerIcon}
              />
              Get Involved
            </Button>
          </div>
        </FooterCTA>
      </ContainerPage>
    )
  }
}

export default Landing
