import React from 'react'
import { Feature, OptForm } from '../components'
import { FooterContainer } from '../containers/footer';
import { FaqContainer } from '../containers/faq';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';

export default function Home() {
    return (
        <>
          <HeaderContainer>
            <Feature>
              <Feature.Title>
              Unlimited movies, TV shows and more.
              </Feature.Title>
              <Feature.SubTitle>
                Watch anywhere. Cancel at any time.
              </Feature.SubTitle>
            <OptForm>
              <OptForm.Input placeholder="Email address"/>
              <OptForm.Button>Try it now</OptForm.Button>
              <OptForm.Break />
              <OptForm.Text >Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
            </Feature>
          </HeaderContainer>
          <JumbotronContainer/>
          <FaqContainer/>
          <FooterContainer/>
        </>
    )
}
