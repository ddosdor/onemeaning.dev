---
isDraft: false
title: How to add Google Analytics to Nuxt App
date: 2021-08-29T10:37:18
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

export default ({ app, $config: { APP_NAME, GA_MEASUREMENT_ID } }) => {
  Vue.use(VueGtag, {
    config: {
      id: GA_MEASUREMENT_ID,
    },
    bootstrap: true,
    appName: APP_NAME,
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

That's basically enough to add Google Analytics to my Nuxt.js app, but these days we can't just add analytics and forget about user privacy. So I had to do a little more work to comply with GDPR and other regulations.

## GDPR and EU cookie compliance

When you add Google Analytics to your site, Google places cookies in the browser to track users in a unique way. Accordingly, I had to do three things to make sure I was compliant with [PECR](https://seersco.com/articles/what-is-pecr-privacy/), [GDPR](https://gdpr-info.eu/) and other similar regulations, as well as Google's [terms](https://marketingplatform.google.com/about/analytics/terms/us/) and conditions.

### Privacy policy page

The first thing I need to do is create a new privacy policy page where I explain why I use Google Analytics, what cookies are, and how Google Analytics uses cookies to collect information. I also had to add information on how to delete cookies and a link to a [Google article](https://policies.google.com/technologies/partner-sites) on privacy and how to protect it. The page is available [here](/privacy-policy).

### Cookie Banner

The next thing is to add a banner asking if my site can store cookies on the user's device. The banner needs to appear immediately when the user first accesses the site.

![alt text](/images/blog/posts_images/cookie_banner_component.png)

So for this purpose I created a CookieBanner component. As I mentioned in my [first post](/blog/How-I-built-my-blog-with-Nuxt), I am using [TailwindCSS](https://tailwindcss.com/).

```html
<template>
  <div v-if="isVisible"
       class="CookieBanner fixed left-0 bottom-0 mx-4 my-4 bg-gray-500 rounded-lg p-2 text-sm
              flex items-center space-x-2 text-white shadow-md
             "
       data-aos="fade-up"
  >
    <SharedUiHeroIcon badge-check
                      class="w-10 h-10"
    />
    <div class="flex flex-col
                md:flex-row md:items-center
               "
    >
      <p class="flex flex-col">
        <span>Can I use <b>cookies</b> to analyze my site?</span>
        <span>Read <nuxt-link to="/privacy-policy"
                              class="underline app-link"
        >the privacy policy</nuxt-link> for more information.</span>
      </p>
      <div class="flex space-x-2 mt-2
                  md:mt-0 md:ml-4
                 "
      >
        <button class="border border-gray-400 rounded-md px-2 py-1
                       transition-colors duration-150 cursor-pointer
                       hover:border-gray-600 hover:bg-gray-600
                      "
                @click="denyGPDR"
        >
          <SharedUiHeroIcon x
                            class="w-4 h-4"
          />
        </button>
        <button class="border border-green-300 bg-green-500 font-semibold rounded-md px-2 py-1
                       transition-colors duration-150 cursor-pointer
                       hover:border-green-500 hover:bg-green-600
                      "
                @click="acceptGPDR"
        >
          Yes, sure!
        </button>
      </div>
    </div>
  </div>
</template>
```

**`SharedUiHeroIcon`** is my component wrapper to [HeroIcons](https://heroicons.com/).

### Getting user consent before placing cookies.

The banner should remain visible until the user decides if I can use cookies. If the user agrees to the use of cookies, then I may load a Google Analytics plugin that will place its cookies on the user's device. Otherwise, I will not load the analytics plugin. In either case, the cookie banner should be hidden and invisible if the user visits my site again. I used the browser's local storage for this purpose.

```typescript
import { bootstrap } from 'vue-gtag';
import { defineComponent, ref } from '@nuxtjs/composition-api';

import { BROWSER_STORAGE_KEYS } from '@/utils/consts';

export default defineComponent({
  name: 'CookieBanner',
  setup() {
    const isVisible = ref<Boolean>(
      !localStorage.getItem(BROWSER_STORAGE_KEYS.GPDRisAccepted),
    );

    function hideCookieBanner(isAccepted: string) {
      isVisible.value = false;
      localStorage.setItem(BROWSER_STORAGE_KEYS.GPDRisAccepted, isAccepted);
    }

    async function acceptGPDR() {
      await bootstrap();
      hideCookieBanner('true');
    }

    function denyGPDR() {
      hideCookieBanner('false');
    }

    return {
      isVisible,
      acceptGPDR,
      denyGPDR,
    };
  },
});
```

**`BROWSER_STORAGE_KEYS`** is constant variable that storage key name for (in this case) localStorage key. I do this as a constant because I use this value also in **`vue-gtag`** plugin file. This prevents a possible key name change without causing an unwanted error.

After creating the CookieBanner component, I had to go back to the **`vue-gtag`** plugin file and modify the code so that the plugin only loads if the user accepts the use of cookies for analytics

```js
import Vue from 'vue';
import VueGtag from 'vue-gtag';

import { BROWSER_STORAGE_KEYS } from '@/utils/consts';

export default ({ app, $config: { APP_NAME, GA_MEASUREMENT_ID } }) => {
  const canBootstrapPlugin = localStorage.getItem(BROWSER_STORAGE_KEYS.GPDRisAccepted) === 'true';

  Vue.use(VueGtag, {
    config: {
      id: GA_MEASUREMENT_ID,
    },
    bootstrap: canBootstrapPlugin,
    appName: APP_NAME,
    enabled: canBootstrapPlugin,
    pageTrackerScreenviewEnabled: true,
  }, app.router);
};
```

The last thing I had to do was add the CookieBanner component to the default nuxt layout. Since this component uses localStorage, which is only available in the browser environment, I had to render it only on the client side.

```html
<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    ...
    <client-only>
      <SharedCookieBanner />
    </client-only>
  </div>
</template>
```

That's it :) Now I can use Google Analytics to see what's working well on the site and what's not.