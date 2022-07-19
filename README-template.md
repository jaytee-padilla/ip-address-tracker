# Table of contents

- [Overview](#overview)
  - [Skills](#skills)
  - [Links](#links)
  - [Author](#author)
  - [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
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

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Author

- Website - [Jaytee Padilla](https://jayteepadilla.dev/)

### The challenge

Users should be able to:

- IMPORTANT NOTE: The free tier of the IP Geolocation API is limited to 1000 credits (a.k.a requests). If the API is no longer loading content properly, it's more than likely because the free credits have run dry
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

## My process

### What I learned

- Basic usage of what module bundlers can do (specifically `Webpack` & `Parcel`). `required()` & `import` don't work in a vanilla JS client side app & module bundlers can enable that functionality. For the sake of simplicity, I chose Parcel JS because it's the easiest & fastest to setup despite Webpack being the most common bundler seen out in the wild
  - On top of enabling the ability to `import` modules, module bundlers also compile SASS/SCSS code without the need of having to write a script to do it (e.g. `"watch-sass": "sass --no-source-map -w styles/scss/main.scss styles/css/main.css"`)
  - [This video](https://youtu.be/R02ehdTzi3I) & [this article](https://codeburst.io/bundle-your-web-application-with-parceljs-b4eee99bdb55) helped me get started with implementing Parcel
- AdBlock extensions can sometimes block API requests 😅
- 

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
