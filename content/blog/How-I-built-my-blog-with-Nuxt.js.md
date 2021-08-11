---
isDraft: true
title: How and why I built my blog with Nuxt.js
date: 2020-05-25T20:47:18
thumbnail: images/blog/thumbnails/how_i_build_my_blog.png
author:
  avatar: images/blog/avatars/me_avatar.png
  name: Sebastian
---

I've always believed that the best way to learn and deepen your knowledge is to pass it on. So, early in my development career, I decided to start my own blog where I could share what I enjoyed, experiment with new tools (everything was new to me then), and keep notes on what I had already learned.
<!--more-->
At the time, I thought Wordpress would be the best choice for a blog. Since I had no experience with the tool, I didn't realize how much time, money, and hassle it would cost me. Nevertheless, the site existed for a while.

Eventually, I decided to go back to blogging because after working as a developer for a few years, I noticed that I love sharing knowledge.

## Assumptions and tech stack

This time, learned from experience, I decided to take a few things into consideration before starting the blog.

- **Fun and experience** - I wanted to use tools that I personally enjoy working with, because I believe that this project should be fun
- **Learning new things** - I wanted to experiment with new things and use this project to gain new experience 
- **Saving time and money** - I wanted to publish new posts or other things quickly, without having to use complicated tools, and also save on maintenance costs
  
According to the list above, I had to decide - which framework and tools to use and where to host my site. I finally decided on Nuxt.js with SSR and Composition API, Typescript and TailwindCSS.

### Nuxt.js

My main technology stack that I work on every day includes [Vue.js](https://vuejs.org/) as a frontend framework and over the past few years of my work, I've come to greatly appreciate Vue. js for its user and developer friendliness, many useful libraries, robust community, and great toolset. It's easy to learn, has great documentation, and is inherently flexible. It takes care of performance and scales well.

Among other things, Vue.js is designed to build Single Page Applications (SPAs) and SPA have many advantages over static pages. For example, you can build very fast user interfaces that update quickly. But SPAs also have negative sides, such as long load times, and Google has trouble indexing for SEO because the page has no initial content. Everything is generated from Javascript after the fact.

For this project, I really wanted it to be SEO friendly. This problem is very well solved by [Nuxt.js](https://nuxtjs.org/). It allows us to build universal apps, so we still have an SPA app, but instead of a blank `index.html` page, we preload the app on the web server and send the rendered HTML as a response to the browser request for each route to speed up load time and improve SEO by making it easier for Google to index the page.

Since Nuxt.js is a framework that uses Vue.js and takes advantage of all its features, but adds a few more, its choice for this project seemed the best.

### nuxt-content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum massa. Phasellus efficitur, justo a hendrerit elementum, eros justo scelerisque enim, in gravida ligula dui at elit. Aenean eleifend tellus sit amet turpis consequat lacinia. Donec consectetur nulla vitae nulla pretium, rhoncus egestas nisl elementum

### Composition API

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum massa. Phasellus efficitur, justo a hendrerit elementum, eros justo scelerisque enim, in gravida ligula dui at elit. Aenean eleifend tellus sit amet turpis consequat lacinia. Donec consectetur nulla vitae nulla pretium, rhoncus egestas nisl elementum

### TailwindCSS

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum massa. Phasellus efficitur, justo a hendrerit elementum, eros justo scelerisque enim, in gravida ligula dui at elit. Aenean eleifend tellus sit amet turpis consequat lacinia. Donec consectetur nulla vitae nulla pretium, rhoncus egestas nisl elementum

### Typescript

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum massa. Phasellus efficitur, justo a hendrerit elementum, eros justo scelerisque enim, in gravida ligula dui at elit. Aenean eleifend tellus sit amet turpis consequat lacinia. Donec consectetur nulla vitae nulla pretium, rhoncus egestas nisl elementum

### Hosting and SSR

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum massa. Phasellus efficitur, justo a hendrerit elementum, eros justo scelerisque enim, in gravida ligula dui at elit. Aenean eleifend tellus sit amet turpis consequat lacinia. Donec consectetur nulla vitae nulla pretium, rhoncus egestas nisl elementum

## The Future

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at condimentum massa. Phasellus efficitur, justo a hendrerit elementum, eros justo scelerisque enim, in gravida ligula dui at elit. Aenean eleifend tellus sit amet turpis consequat lacinia. Donec consectetur nulla vitae nulla pretium, rhoncus egestas nisl elementum