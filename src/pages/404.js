import tw, { styled } from "twin.macro"
import React from "react"
import Layout from "../layouts/Layout"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout>
      <OuterWrapper>
        <InnerWrapper>
          <Main>
            <P>404</P>
            <Content>
              <ContentWrapper>
                <H1>Page not found</H1>
                <P2>Please check the URL in the address bar and try again.</P2>
              </ContentWrapper>
              <ButtonWrapper>
                <Button1Style to="/" alt="home">
                  Return home
                </Button1Style>
                {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact support
            </a> */}
              </ButtonWrapper>
            </Content>
          </Main>
        </InnerWrapper>
      </OuterWrapper>
    </Layout>
  )
}

export default NotFoundPage

const OuterWrapper = tw.div`
bg-almond min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8
`
const InnerWrapper = tw.div`
max-w-max mx-auto
`
const Main = tw.main`
sm:flex
`
const P = tw.p`
text-4xl font-extrabold text-kobe-light sm:text-5xl
`
const Content = tw.div`
sm:ml-6
`
const ContentWrapper = tw.div`
sm:border-l sm:border-ming sm:pl-6
`
const H1 = tw.h1`
text-4xl font-extrabold text-fogra tracking-tight sm:text-5xl
`
const P2 = tw.p`
mt-1 text-base text-fogra-lightest
`
const ButtonWrapper = tw.button`
mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6
`
const Button1Style = styled(Link)`
  ${tw`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-kobe hover:bg-amber focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-dark`}
`
