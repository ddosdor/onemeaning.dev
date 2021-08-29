<template>
  <SharedUiPageSection>
    <SharedUiPageHeader main
                        title="Privacy Policy"
    />
    <h2 class="mt-12 mb-6 text-lg font-semibold">
      Cookies
    </h2>
    <p class="mb-2">
      Cookies are text files with small pieces of data
      that are used to identify your computer as you use a computer network.
      Specific cookies known as HTTP cookies are used to identify specific
      users and improve your web browsing experience.
    </p>
    <p class="mb-2">
      Data stored in a cookie is created by the server upon your connection. This data is labeled with an ID unique to you and your computer.
    </p>
    <p>
      When the cookie is exchanged between your computer and the network server,
      the server reads the ID and knows what information to specifically serve to you.
    </p>
    <h2 class="mt-12 mb-6 text-lg font-semibold">
      Google Analytics
    </h2>
    <p class="mb-2">
      If you agree to the use of cookies, I will use the following Google Analytics cookies to collect information
      about how you use my site:
      <ul class="list-disc list-inside">
        <li>_ga</li>
        <li>_gd</li>
      </ul>
    </p>
    <p class="mb-2">
      The information collected by these cookies will allow me to see which blog posts
      resonate with my readers and allow me to improve my site and write better and more useful content.
    </p>
    <p class="mb-2 mt-6">
      You can read about <a target="_blank"
                            href="https://policies.google.com/technologies/partner-sites"
                            class="app-link underline"
      >Google's privacy and security review here.</a>
    </p>
    <p class="mb-2">
      If you want to delete all cookies and clear your browsing data,
      you can read about it <a target="_blank"
                               href="https://www.privacypolicies.com/blog/how-to-delete-cookies/"
                               class="app-linke underline"
      >in this article.</a>
    </p>
  </SharedUiPageSection>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PrivacyPolicy',
});
</script>
