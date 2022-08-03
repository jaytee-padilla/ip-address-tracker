# Table of contents

- [Overview](#overview)
  - [Skills](#skills)
  - [The Challenge](#the-challenge)
  - [Note](#note)
  - [Links](#links)
  - [Author](#author)
- [Screenshot](#screenshot)
- [What I learned](#what-i-learned)

## Overview

### Skills

- Semantic HTML5 markup
- Sass Preprocessor
- Flexbox
- Mobile-first workflow
- JS Fetch() API
- DotEnv
- Parcel JS Module Bundler
- RESTful API usage
  - [IP Geolocation API by IPify](https://geo.ipify.org/)
  - [LeafletJS](https://leafletjs.com/)
- Netlify for deployment

### The Challenge

Users should be able to:

- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page

### Note
- IMPORTANT NOTE 1: The free tier of the IP Geolocation API is limited to 1000 credits (a.k.a requests). If the API is no longer loading content properly, it's more than likely because the free credits have run dry
- IMPORTANT NOTE 2: Make sure adblock is turned off when using the site. It will prevent the API from working

### Links

- Solution URL: [https://github.com/jaytee-padilla/ip-address-tracker](https://github.com/jaytee-padilla/ip-address-tracker)
- Live Site URL: [https://jaytee-ip-address-tracker.netlify.app/](https://jaytee-ip-address-tracker.netlify.app/)

### Author

- Website - [Jaytee Padilla](https://jayteepadilla.dev/)

### Screenshot

<p align='center'>
  <img src='./images/final-mobile.gif' height='550px' />
</p>

<p align='center'>
  <img src='./images/final-desktop.gif' height='550px' />
</p>

## What I Learned

- Basics of what module bundlers can do (specifically `Webpack` & `Parcel`). `required()` & `import` don't work in a vanilla JS client side app & module bundlers can enable that functionality. For the sake of simplicity, I chose Parcel JS because it's the easiest & fastest to setup despite Webpack being the most common bundler seen out in the wild
  - On top of enabling the ability to `import` modules, module bundlers also compile SASS/SCSS code without the need of having to write a script to do it (e.g. `"watch-sass": "sass --no-source-map -w styles/scss/main.scss styles/css/main.css"`)
  - [This video](https://youtu.be/R02ehdTzi3I) & [this article](https://codeburst.io/bundle-your-web-application-with-parceljs-b4eee99bdb55) helped me get started with implementing Parcel
- AdBlock extensions can sometimes block API requests 😅
- When trying to apply the top background image to the UI, I originally tried something like this in the `body` CSS, but it made the image height inconsistent when shrinking/enlarging the viewport size
```scss
body {
  font-family: 'Rubik', sans-serif;
  background-image: url('/images/pattern-bg.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
}
```
<p align='center'>
  <img src='./images/incorrect-bg-image-technique.png' height='350px' />
</p>

- Adding a `div` around the main content of the page and applying a `background-image` property to that helped ensure a consistent size that's also responsive
```scss
body {
  font-family: 'Rubik', sans-serif;

  .container {
    .bg-banner {
      background-image: url('/images/pattern-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 35vh;
    }
  }
}
```
<p align='center'>
  <img src='./images/correct-bg-image-technique.gif' height='350px' />
</p>

- Combining multiple javascript files into one file (with the help of a bundler) is more efficient than using multiple `<script>` tags. The server is pinged each time per script tag, so less script tags = less calls to server 👍

- A `placeholder` attribute should not be used as an alternative to a label. The placeholder is a short hint intended to aid the user with data entry so it should not be identical to the label element. The placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible name or description -- it acts similar to fallback content

- How to get the main content of the app to hover above the background banner image and map. [This article](https://css-tricks.com/forums/topic/horizontal-centering-of-an-absolute-element/) gave a few solutions as well as explanations on the differences between each solution.
  - The key was giving `.container` a position of relative to make the `z-index` properties work & `main` a `position: absolute` property to remove it from the block-level flow of page elements
```scss
.container {
    position: relative;

    .bg-banner {
      background-image: url('/images/pattern-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 291px; // height of <main> content - height of search-results-container
    }

    main {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      z-index: 100;

      header {
        margin: 20px 0 20px 0;

        h2 {
          color: white;
          font-weight: 500;
        }
      }
    }
  }
```
- Making use of `@use` in my SCSS. `@import` will slowly be phased out by the team behind SASS. 
e.g.
```scss
@use '../base';

@media screen and (min-width: base.$desktop-breakpoint) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 85%;
      height: 175px;
    }
```

- How to implement environment variables on Netlify's platform
<p align='center'>
  <img src='./images/netlify-envs.png' width="1000px" />
</p>