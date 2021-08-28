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

```sh
yarn add vue-gtag
```

or (if you use npm):

```sh
npm install vue-gtag
```

Next, we create a folder named *plugins* and a file where we add the **`vue-gtag`** plugin. I always name the file after the plugin name, so in this case I created a file named `vue-gtag.js`

```js
import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: {
      id: process.env.GA_MEASUREMENT_ID,
    },
    bootstrap: true,
    appName: process.env.APP_NAME,
    enabled: true,
    pageTrackerScreenviewEnabled: true,
  }, app.router);
};
```

Since I want to use screenview to associate tracking information with the specific page the user is viewing, I enabled the *'pageTrackerScreenviewEnabled'* options and passed the **`vue-router`** instance to the **`vue-gtag`** plugin.

The last step is to add the created plugin to *nuxt-config.js* file. This plugin is only supposed to work on the client side, so since I'm using SSR fully, I had to mark it up.

```js
export default {
  ...
  plugins: [
    { src: '~/plugins/vue-gtag.js', mode: 'client' },
  ]
  ...
}
```

That's basically enough to add Google Analytics to your Nuxt.js app, but these days we can't just add analytics and forget about user privacy. So I had to do a little more work to comply with GDPR and other regulations.

## GDPR and EU cookie compliance

When you add Google Analytics to your site, Google places cookies in the browser to track users in a unique way. Accordingly, I had to do three things to make sure I was compliant with [PECR](https://seersco.com/articles/what-is-pecr-privacy/), [GDPR](https://gdpr-info.eu/) and other similar regulations, as well as Google's [terms](https://marketingplatform.google.com/about/analytics/terms/us/) and conditions.

### Privacy policy page

The first thing I need to do is create a new privacy policy page where I explain why I use Google Analytics, what cookies are, and how Google Analytics uses cookies to collect information. I also had to add information on how to delete cookies and a link to a [Google article](https://policies.google.com/technologies/partner-sites) on privacy and how to protect it. The page is available here.