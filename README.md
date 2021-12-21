[![Stephen Parker builds fast websites.](https://res.cloudinary.com/gravital-digital/image/upload/v1629435211/lighthouse-performance_szftjp.png)](https://www.linkedin.com/in/sparker888/)

# I build top performing websites and marketing landing pages.

This is an example of a Lighthouse report that scores websites in key areas related to Google's new [Web Vitals](https://support.google.com/webmasters/answer/9205520?hl=en) that started rolling out in June 2021. This site with these stellar scores was created [for a special client](https://www.benevolentseniorservices.com).

Here's [why it's important](https://gravitaldigital.com/blog/googles-biggest-algorithm-change-goes-live-in-june/) to businesses, and [Forbes take](https://www.forbes.com/sites/forbesagencycouncil/2021/07/08/what-are-googles-new-core-web-vitals--why-should-your-business-care-about-them/?sh=5f8fc4f85989) on why you should care.

## Aloha 🤙 and thanks for stopping by.

I'm a 🚀 Space, 🐬 Sea and 🚗 Car Geek. I'm passionate about 📸 photography and 🖥️ website design and development.

*🚧 NOTE: As of December 2021 this site is under construction. I'm just putting the final polish on now, but I have to change out Simple React Lighthouse because the developer had a family issue and shut the pro version down for the forseeable future. Hit me up if you have a good lightbox solution for React/Gatsby. 🚧*

This is the README.md for my site that also serves as a Gatsby 3.x starter repository bringing together the magic of [Tailwindcss](https://tailwindcss.com/) with [twin](https://github.com/ben-rogerson/twin.macro) and the super animation powers of [GSAP](https://greensock.com/). The project uses a core set of modern [Gatsby plugins](https://www.gatsbyjs.com/plugins) as listed below. I'm also experimenting with [Simple React lightbox](https://simple-react-lightbox.dev/).

**✨ The development site can be viewed [here](https://zen-jennings-d17986.netlify.app/).**

## 💡 Why I'm Using Gatsby + Tailwind + Twin

**Why Gatsby?**

*Gatsby uses powerful pre-configuration to build a website that uses only static files for incredibly fast page loads, service workers, code splitting, server side rendering, smart image loading, asset optimization, and data prefetching. It's incredibly easy to work with. It's ideal for small websites, landing pages, and simple PWAs. Gatsby and supporting technologies enables me to achieve the Lighthouse scores that you see above.*

**Why Tailwind?**

*Max Stoiber, the inventor of styled components, tells the story better than I can in his article ["Why I Love Tailwind"](https://mxstbr.com/thoughts/tailwind/). Here's a rundown of some of the benefits I've seen using it:*

* Human readable
* Low specificity by default
* Handles variations
* Modular/Composable
* Performant
* Doesn’t make naming hard
* Allows safe refactoring
* Extensible
* Does not enforce bad markup patterns
* Positive impact on developer velocity/productivity
* Reasonable learning curve

**Why CSS-in-JS (Emotion and Styled Components)?**

*I'll assume you're on board the CSS-in-JS train by now, but if not, I encourage you to check out [CSS in JS, an Emotional Topic devMode.fm podcast episode](https://devmode.fm/episodes/css-in-js-an-emotional-topic). There are some really nice advantages to working with Styled Components (CSS-in-JS), including:*

* Local Scoping
* Encapsulation
* Portability
* Reusability
* Dynamic Functionality

For more details, see [this Tuts](https://webdesign.tutsplus.com/articles/an-introduction-to-css-in-js-examples-pros-and-cons--cms-33574) which also goes into more detail on the cons and some examples.

**Why twin?**

*Twin blends the magic of Tailwind with the flexibility of CSS-in-JS! It leverages Tailwind's marvelous system and developer experience without the downsides of atomic CSS. More importantly, it's the combination of Gatsby, Tailwind and twin that allows us to do some amazing stuff. Here is the [original article by Andrew Welch](https://nystudio107.com/blog/using-tailwind-css-with-gatsby-react-emotion-styled-components) that got me excited for this powerful combination of front-end React-based technologies.*

## Use this repository as a Gatsby + Tailwind + twin starter (more soon)

**Current Status as of October 4, 2021 - the site is still under construction, but I'm putting the final polish on now.** 

sparker888-tailwindcss-starter a work in progress that started 8-18-21 and it will be ready to clone around the first of the year.

This repo started with `gatsby init` and I added and configured the following plugins (if not already part of the initial install):

- [Tailwind CSS](https://tailwindcss.com/) with [twin](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-styled-components), [Styled Components](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-styled-components) and [gatsby-plugin-styled-components](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)
- [Green Sock Animation Platform (gsap)](https://greensock.com/blog/learning/react/)
- [Simple React lightbox](https://simple-react-lightbox.dev/)
- [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem)
- [gatsby-plugin-anchor-links](https://www.gatsbyjs.com/plugins/gatsby-plugin-anchor-links/)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
- [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp)
- [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-shar)
- [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx)
- [gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/)
- [gatsby-plugin-mdx-embed](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx-embed/)
- [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap)
- [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager)
- [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
- [React Helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [@heroicons](https://github.com/tailwindlabs/heroicons)
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

From there, I followed the [Tailwindcss Gatsby installation documentation](https://tailwindcss.com/docs/guides/gatsby) in tandem with the [twin.macro Gatsby Installation documentation](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-styled-components) to configure the setup. Additional configuration of PostCSS came from [Andrew's article](https://nystudio107.com/blog/using-tailwind-css-with-gatsby-react-emotion-styled-components), and finally, a few helpful bits were gleaned from [gatsby-tailwind-emotion-starter](https://github.com/pauloelias/gatsby-tailwind-emotion-starter) from [Paulo Elias](https://github.com/pauloelias).

**Important Notes**

*This site is a work in progress. If you're not familiar with these packages and how such a site works, I recommend finding another starter. I'll keep this site updated and announce when this starter is ready to go. Thanks.*

## 🚀 Quick start

1.  **Create the Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the `sparker888` starter.

    ```shell
    # create a new Gatsby site using the gatsby-tailwind-emotion-starter
    gatsby new my-gatsby-tailwind-twin-starter https://github.com/sparker888/sparker888
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-tailwind-twin-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `my-gatsby-tailwind-twin-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🎓 Learn More About Gatsby

To learn more about Gatsby, use the following resources:

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/) - learn about Gatsby's features and API.
- [Gatsby Tutorial](https://www.gatsbyjs.com/tutorial/) - a great Gatsby tutorial.

You can check out [the Gatsby GitHub repository](https://github.com/gatsbyjs/gatsby) - your feedback and contributions are welcome!

## Thanks for your interest! You can follow me on Twitter at [@sparker888](https://www.twitter.com/sparker888), and if you're into video games, join me and my friends playing [Eve Online](https://www.eveonline.com/signup?invc=bed0f5cf-ea4b-4c92-9128-b76165d69757).

### Fly safe!
