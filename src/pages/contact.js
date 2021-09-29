import tw, { styled } from "twin.macro"
import React, { useState } from "react"
import Layout from "../layouts/Layout"
import { navigate, graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { MailIcon, PhoneIcon } from "@heroicons/react/outline"

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Contact = () => {

  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/thank-you/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "nebula-bg-opt.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 25
              webpOptions: { quality: 50 }
              width: 2000
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(placeholderImage)

  return (
    <StyledBgImage image={pluginImage}>
    <Layout>
      {/* Header */}
      
        <OuterHeaderWrap>
          <InnerHeaderWrap>
            <HeaderContentWrap>
              <HeaderH1>Get in touch</HeaderH1>
              <HeaderP>
                Thanks for reaching out. If you would prefer to schedule a
                30-minute phone or zoom call, please{" "}
                <Span href="https://calendly.com/sparker888/" target="_blank">
                  {" "}
                  book a time on my calendar
                </Span>
                . I look forward to chatting with you and will reply as soon as
                possible.
              </HeaderP>
            </HeaderContentWrap>
          </InnerHeaderWrap>
        </OuterHeaderWrap>

      {/* Contact section */}
      <ContactSection aria-labelledby="contact-heading">
        <MainContentOuterWrap>
          <MainContentInnerWrap>
            <MainContentGridWrap>
              {/* Contact information */}
              <ContactInfoWrap>
                {/* Decorative angle backgrounds */}
                <DecorativeWrap aria-hidden="true">
                  <Svg2
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </Svg2>
                </DecorativeWrap>
                <DecorativeWrap2 aria-hidden="true">
                  <Svg2
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </Svg2>
                </DecorativeWrap2>
                <DecorativeWrap3 aria-hidden="true">
                  <Svg2
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </Svg2>
                </DecorativeWrap3>
                <ContactHeader>My Contact Info</ContactHeader>
                <ContactP>
                  You can also reach me using one of the following:
                </ContactP>
                <ContactDl>
                  <dt>
                    <ScreenReader>Phone number</ScreenReader>
                  </dt>
                  <ContactPhoneDd>
                    <PhoneIcon className="phoneIcon" aria-hidden="true" />
                    <MarginSpan>+1 407-710-5497</MarginSpan>
                  </ContactPhoneDd>
                  <dt>
                    <ScreenReader>Email</ScreenReader>
                  </dt>
                  <ContactMailDd>
                    <MailIcon className="mailIcon" aria-hidden="true" />
                    <MarginSpan>sparker888 at google.com</MarginSpan>
                  </ContactMailDd>
                </ContactDl>
              </ContactInfoWrap>

              {/* Contact form */}
              <ContactFormWrap>
                <FormTitle>Send me a message</FormTitle>
                <Form
                  form
                  name="contact"
                  id="bss-netlify-form"
                  method="POST"
                  onSubmit={handleSubmit}
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <LabelFirstName htmlFor="first-name">
                      First name
                    </LabelFirstName>
                    <Mt1>
                      <InputTextFirstName
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        onChange={handleChange}
                      />
                    </Mt1>
                  </div>
                  <div>
                    <LabelLastName htmlFor="last-name">Last name</LabelLastName>
                    <Mt1>
                      <InputTextLastName
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        onChange={handleChange}
                      />
                    </Mt1>
                  </div>
                  <div>
                    <LabelEmail htmlFor="email">Email</LabelEmail>
                    <Mt1>
                      <InputEmail
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleChange}
                      />
                    </Mt1>
                  </div>
                  <div>
                    <FlexDiv>
                      <LabelPhone htmlFor="phone">Phone</LabelPhone>
                      <SpanPhoneOpt id="phone-optional">Optional</SpanPhoneOpt>
                    </FlexDiv>
                    <Mt1>
                      <InputPhone
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-optional"
                        onChange={handleChange}
                      />
                    </Mt1>
                  </div>
                  <ColSpan>
                    <LabelSubject htmlFor="subject">Subject</LabelSubject>
                    <Mt1>
                      <InputSubject type="text" name="subject" id="subject" onChange={handleChange} />
                    </Mt1>
                  </ColSpan>
                  <ColSpan>
                    <FlexDiv>
                      <LabelMessage htmlFor="message">Message</LabelMessage>
                      <MessageMax id="message-max">
                        Max. 500 characters
                      </MessageMax>
                    </FlexDiv>
                    <Mt1>
                      <TextArea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-max"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </Mt1>
                  </ColSpan>
                  <ButtonWrap>
                    <SubmitButton type="submit">Submit</SubmitButton>
                  </ButtonWrap>
                </Form>
              </ContactFormWrap>
            </MainContentGridWrap>
          </MainContentInnerWrap>
        </MainContentOuterWrap>
      </ContactSection>
    </Layout>
    </StyledBgImage>
  )
}

export default Contact

const StyledBgImage = tw(BgImage)`
w-full bg-center bg-cover
`
const OuterHeaderWrap = tw.div`
relative bg-transparent -z-10
`
const InnerHeaderWrap = tw.div`
py-24 lg:py-32
`
const HeaderContentWrap = tw.div`
relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8
`
const HeaderH1 = tw.h1`
text-4xl font-extrabold tracking-tight text-almond sm:text-5xl lg:text-6xl
`
const HeaderP = tw.p`
mt-6 text-xl text-amber-dark max-w-3xl
`
const Span = tw.a`
text-kobe hover:text-amber
`
const ContactSection = tw.section`
relative bg-transparent
`
const MainContentOuterWrap = tw.div`
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent
`
const MainContentInnerWrap = tw.div`
relative bg-transparent shadow-xl
`
const MainContentGridWrap = tw.div`
grid grid-cols-1 lg:grid-cols-3
`
const ContactInfoWrap = tw.div`
relative overflow-hidden py-10 px-6 bg-gradient-to-b from-amber-dark to-kobe sm:px-10 xl:p-12
`
const DecorativeWrap = tw.div`
absolute inset-0 pointer-events-none sm:hidden
`
const Svg2 = tw.div`
absolute inset-0 w-full h-full
`
const DecorativeWrap2 = tw.div`
hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden
`
const DecorativeWrap3 = tw.div`
hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block
`
const ContactHeader = tw.h2`
text-lg font-medium text-amber-darkest
`
const ContactP = tw.p`
mt-6 text-base text-fogra-light max-w-3xl
`
const ContactDl = tw.dl`
mt-8 space-y-6
`
const ContactPhoneDd = styled.dl`
  ${tw`flex text-base text-fogra-light`}
  .phoneIcon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgba(169, 229, 239, var(--tw-text-opacity));
  }
`
const MarginSpan = tw.div`
ml-3
`
const ContactMailDd = styled.dl`
  ${tw`flex text-base text-fogra-light`}
  .mailIcon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgba(169, 229, 239, var(--tw-text-opacity));
  }
`
const ScreenReader = tw.span`
sr-only
`
const ContactFormWrap = tw.div`
py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-transparent
`
const FormTitle = tw.h3`
text-lg font-medium text-kobe
`
const Form = tw.form`
mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8
`
const Mt1 = tw.div`
mt-1
`
const InputTextFirstName = tw.input`
py-3 px-4 block w-full shadow-sm text-fogra-light focus:ring-fogra focus:border-fogra border-fogra rounded-md
`
const LabelFirstName = tw.label`
block text-sm font-medium text-fogra-light
`
const InputTextLastName = tw.input`
py-3 px-4 block w-full shadow-sm text-fogra-light focus:ring-fogra focus:border-fogra border-fogra rounded-md
`
const LabelLastName = tw.label`
block text-sm font-medium text-fogra-light
`
const LabelEmail = tw.label`
block text-sm font-medium text-fogra-light
`
const InputEmail = tw.input`
py-3 px-4 block w-full shadow-sm text-fogra-light focus:ring-fogra focus:border-fogra border-fogra rounded-md
`
const FlexDiv = tw.div`
flex justify-between
`
const LabelPhone = tw.label`
block text-sm font-medium text-fogra-light
`
const SpanPhoneOpt = tw.span`
text-sm text-kobe
`
const InputPhone = tw.input`
py-3 px-4 block w-full shadow-sm text-fogra-light focus:ring-fogra focus:border-fogra border-fogra rounded-md
`
const ColSpan = tw.div`
sm:col-span-2
`
const InputSubject = tw.input`
py-3 px-4 block w-full shadow-sm text-fogra-light focus:ring-fogra focus:border-fogra border-fogra rounded-md
`
const LabelSubject = tw.label`
block text-sm font-medium text-fogra-light
`
const LabelMessage = tw.label`
block text-sm font-medium text-fogra-light
`
const MessageMax = tw.span`
text-sm text-kobe
`
const TextArea = tw.textarea`
py-3 px-4 block w-full shadow-sm text-fogra-light focus:ring-fogra focus:border-fogra border-fogra rounded-md
`
const ButtonWrap = tw.div`
sm:col-span-2 sm:flex sm:justify-end
`
const SubmitButton = tw.button`
mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-kobe hover:bg-kobe-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kobe sm:w-auto
`
