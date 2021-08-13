---
isDraft: false
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

As I described before, it's important for me to add new posts very fast, without additional and complicated tools.  So I had to find something not large scale, but something smaller like git-based headless CMS. 
There are many modules for Nuxt.js, so I had to find something that meets my requirements and I found one perfect like [nuxt-content](https://content.nuxtjs.org/). It allows you to create a blog or documentation page from Markdown, JSON, YAML, XML and CSV files and has some other powerful features like Vue components in markdown, syntax highlighting of code blocks in markdown files and full text search.

With this solution, for example, all you need to do is open a new pull request, write a new post in your IDE or even directly on Github and simply merge it into the main repository. This is magical! ;)

### Composition API and TypeScript

I've been working with Vue.js for many years now, and many of those projects have been large monoliths where unfortunately I couldn't afford to upgrade to a newer version of Vue to take advantage of all its new features. All my new projects I'm working on now are written using Vue 3.x, and I love working with the Composition API and TypeScript. Composition API, is a new way to write Vue components. This API allows features to be grouped together logically, rather than having to organize your single-file components by function. Sadly in this moment, when I write this post, Nuxt.js is in version 2.15.17 which use Vue 2.x so without all new Vue 3.x features.
But, thanks to Nuxt comunity, there is a module like [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/) that add Vue 3 Composition API feature to Nuxt.js.

TypeScript is a language built on top of JavaScript and essentially helps you validate your code is working in the editor before it runs. I used to think that using TypeScript on the frontend was an unnecessary abstraction. Today I can't imagine writing even a line of code without using TypeScript when I realized that it has seriously increased my speed and accuracy. I notice more bugs while editing and find that I no longer need to look at the documentation as often because I can tell a lot about the requirements of a function or component directly in the editor.

Nuxt.js has full TypeScript support and that's right out of the box.

### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is described as a CSS framework based primarily on usability. Instead of focusing on the functionality of a styled element, Tailwind focuses on how it should be displayed. It works at a lower level and provides a set of CSS helper classes. For me, it is very important that you can quickly and easily create your own design using these classes.

When I started using TailwindCSS I realized that I almost never write a single CSS or SASS style in my components (except for a few minor cases). Now when writing a component I can focus only on HTML (without getting a headache finding the right class names for the elements), and this I think can be very important, especially for single-file components.

TailwindCSS also has many other advantages, such as:
- **Great and easy to navigate [docs](https://tailwindcss.com/docs)**
- **Provides tree-shaking** that removes unused CSS from production compilations for maximum performance.
- **VS Code extensions**: [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for its excellent autocomplete, which reduced the number of times I referenced class names in the docs and with your custom classes that can be extended or added in the config file.
- **Full customization** using the `talwind.config.js file`

### Hosting and SSR

As I pointed out at the beginning, one of the main goals of this project is to save money. As such, I needed to find a hosting provider that is completely free.

My first choice was [Github Pages](https://pages.github.com/), because Nuxt.js allows you to build static pages thanks to `nuxt-generate`. However, it was too simple a solution, and after all, I wanted to enjoy the benefits of the tool I use. So I had to find some solution that would allow me to use SSR.

My second choice was [Heroku](https://www.heroku.com/) because it allows me to serve Node.js applications. Unfortunately, this solution has several downsides and because of them I couldn't choose it for this project. First, Heroku in the free version with an unverified account only allows you to serve a few apps (5 to be exact), and at this point I already had a few apps served on Heroku. It goes to sleep after 30 minutes of inactivity and does not yet support HTTP 2.

My third and best choice was [Vercel](https://vercel.com/), an open source serverless platform for static and hybrid applications. According to this, it can serve static sites but allows serverless functions. Again thanks to the Nuxt.js community, we can build an SSR application and serve it on Vercel using [vercel-builder](https://github.com/nuxt/vercel-builder). 

In my opinion, using Vercel is very simple. It integrates with your Github account and allows you to select one (or all) repositories. It deploys the project to production every time you push it to the `master` or `main` branch. The great thing about Vercel is that it creates a preview environment for each pull request.

## Summary

I had a lot of fun creating this project and learned new tools like nuxt-content and Vercel. The best part is that this project is not fully finished yet and always won't be because I will always find some solution to make it better. 
My goal now is to do my best to please Google Lighthouse and get the design ready for SEO.  I have some ideas for new blog posts and hope to write them regularly.

This project is available on my [github](https://github.com/ddosdor/onemeaning.dev) so you can check it out.

If you have any questions, feedback or suggestions about this site, feel free to reach out to me on [Twitter](https://twitter.com/ddosdor) or [LinkedIn](https://www.linkedin.com/in/sebastian-drzewicki-947459b0/).