---
isDraft: true
title: How to add Google Analytics to Nuxt App
date: 2020-05-25T20:47:18
thumbnail: images/blog/thumbnails/how_to_add_google_analytics_to_nuxt_app.png
author:
  avatar: images/blog/avatars/me_avatar.png
  name: Sebastian
---

As I wrote in my first post, this site will never be fully finished because I still have some ideas and solutions to make it even better. One of these ideas is to add some tool to check what works and what doesn't when users visit my site. To do this, I needed to add some sort of tool to get a tool that analyzes site visits and, in my opinion, the quickest and most efficient process was to add Google Analytics.
<!--more-->
## Adding Google Analytics to Nuxt App

When I started working on adding Google Analytics to my site, I found two solutions:

- [@nuxtjs/google-analytics](https://google-analytics.nuxtjs.org/) is an official module from the Nuxt Community that uses [vue-analytics](https://matteogabriele.gitbooks.io/vue-analytics/content/) and the old Google Universal Analytics
- [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) is a Vue.js plugin that uses the new Google Analytics 4

Because Google Universal Analytics is old (for a site before October 14, 2020) and according to Google:
> The new Google Analytics is now the default experience for new properties and is where we are investing in future improvements.
I decided to use the vue-gtag solution as a plugin for my nuxt.js application.

### Add vue-gtag to Nuxt App as a plugin

Adding vue-gtag to Nuxt.js as a plugin is very simple. The first step is to install the npm package:

```
yarn add vue-gtag
```

or (if You use npm):

```
npm install vue-gtag
```


