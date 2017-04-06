import React, { Component } from 'react'

// Images
import aboutHero from '../../assets/images/heros/about-hero.jpg'
import aboutHeadline from '../../assets/images/about-headline.svg'
import rachelFustini from '../../assets/images/about/rachel-fustini.jpg'
import avaMandeville from '../../assets/images/about/ava-mandeville.jpg'
import sponsorSpain from '../../assets/images/about/sponsor-spain.png'
// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
import ContainerRows from '../../components/ContainerRows/ContainerRows'
// Components
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import Button from '../../components/Button/Button'
import Divider from '../../components/Divider/Divider'
import Paragraph from '../../components/Paragraph/Paragraph'
import CardAbout from '../../components/CardAbout/CardAbout'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

class About extends Component {
  render () {
    return (
      <ContainerPage>
        <Hero image={aboutHero}
          className="About-landing">
          <Header>
            <img className="About-Hero-img"
              src={aboutHeadline} />
          </Header>
        </Hero>

        <ContainerSection>
          <Divider text="About us" />

          <SubHeader>
            Safer, Stronger Communities
          </SubHeader>

          <Paragraph>
            We are a collection of over 3300 individuals determined to
            help make your community safer and stronger. If you are walking
            somewhere and feel uncomfortable or unsafe, we will be there to
            walk with you. We Walk Together to bolster safety and connectivity.
          </Paragraph>

          <ContainerRows>
            <CardAbout
              header="Rachel Fustini"
              subheader="PR & Marketing Director"
              description="Our media outreach and marketing guru, Rachel has
              connected with Fortune 500 companies, non-profits and Universities
              who want to see WWT realized."
              image={rachelFustini}
            />

            <CardAbout
              header="Ava Mandeville"
              subheader="Volunteer"
              description="Passionate about people and building bridges,
              Ava leads all of our volunteer efforts. She directs individual and
              corporate allies who have reached out to WWT."
              image={avaMandeville}
            />

            <CardAbout
              header="Ava Mandeville"
              subheader="Volunteer"
              description="Passionate about people and building bridges,
              Ava leads all of our volunteer efforts. She directs individual and
              corporate allies who have reached out to WWT."
              image={avaMandeville}
            />
          </ContainerRows>
        </ContainerSection>

        <ContainerSection>
          <Divider text="Sponsors" />

          <Thumbnail
            image={sponsorSpain}
            href="http://www.spainri.com/"
          />
          </ContainerSection>

      </ContainerPage>
    )
  }
}

export default About
