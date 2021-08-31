import React from "react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-8 mx-auto">
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
          <div className="flex-row items-center justify-start mx-6 my-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Aloha! 🤙
            </h2>

            <p className="my-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              I'm Steve Parker, entrepreneur and front-end developer lead
              for{" "}
              <a
                className="font-bold text-indigo-600 dark:text-indigo-400"
                href="https://twitter.com/gogravital"
              >
                @GoGravital
              </a>
              . This site is a work in progress. The goal is to create a viable
              Gatsby starter for Tailwindscss with support for CSS-in-JS using
              twin.macro. In addition, I'll be adding GSAP code to the
              components.
            </p>
            <p className="my-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              When will it be completed? I'm targeting September 9, 2021. It can
              be used now but I have yet to implement project and post sections
              and MDX content. Please check back then. Thanks for your interest!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
