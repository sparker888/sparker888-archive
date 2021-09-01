import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';

const About = () => {

  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "palm-coast-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50, 
              webpOptions: {quality: 70}, 
              width: 2000
            )
          }
        }
      }
    `
  )
  
  const pluginImage = getImage(placeholderImage123);

  return (
    <BgImage image={pluginImage} className="bg-contain bg-bottom my-1">
      <section>
        <div className="container px-6 py-6 mx-auto">
          <div className="items-center lg:flex lg:justify-center">
            <div className="mt-8 lg:mt-0 mx-6">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full h-64 rounded-md shadow"
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1629628368/sparker-portrait_bv6dzq.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex-row items-center justify-start mx-6 my-2">
              <h2 className="text-3xl font-bold text-gray-800">
                Aloha! 🤙
              </h2>

              <p className="my-4 text-gray-800 lg:max-w-md">
                I'm Steve Parker, entrepreneur and front-end developer lead
                for{" "}
                <a
                  className="font-bold text-blue-400"
                  href="https://twitter.com/gogravital"
                >
                  @GoGravital
                </a>
                . This site is a work in progress. The goal is to create a viable
                Gatsby starter for Tailwindscss with support for CSS-in-JS using
                twin.macro and Greensock animations (GSAP).
              </p>
              <p className="my-4 text-gray-800 dark:text-gray-400 lg:max-w-md">
                When will it be completed? I'm targeting September 9, 2021. It can
                be used now but I have yet to implement project and post sections
                and MDX content. Please check back then. Thanks for your interest!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 pt-4 pb-28 mx-auto">
          <div className="items-center flex justify-center flex-col lg:flex-row mb-10">
            
            <div className="max-w-sm mx-4 mt-4 overflow-hidden bg-white rounded-lg shadow-md">
                <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1576124566721-6496f8c53365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDUwMjc1Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Article"></img>
                <div className="p-6">
                  <div>
                      <span className="text-xs font-medium text-blue-600 uppercase ">Product</span>
                      <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                  </div>
                  <div className="mt-4">
                      <div className="flex items-center">
                      <div>
                        <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar">
                        </img>
                      </div>
                          <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                      </div>
                  </div>
              </div>
            </div>

            <div className="max-w-sm mx-4 mt-4 overflow-hidden bg-white rounded-lg shadow-md">
            <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1539729112389-13d30728ae0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDUwMzAxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Article"></img>
                <div className="p-6">
                  <div>
                      <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                      <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                  </div>
                  <div className="mt-4">
                      <div className="flex items-center">
                      <div>
                        <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar">
                        </img>
                      </div>
                          <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BgImage>
  );
};

export default About;
