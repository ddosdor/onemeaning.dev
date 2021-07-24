<template>
  <footer class="PageFooter bg-gray-800 mt-10">
    <div class="p-4
                flex flex-col items-center
                md:px-12 md:flex-row
                lg:px-20 lg:w-4/5 lg:mx-auto
                2xl:px-32
              "
    >
      <span class="text-gray-300 text-xs">Made with Nuxt.js and TailwindCSS
        <span class="text-red-600">&#9829;</span>
      </span>
      <ul class="list-none flex space-x-5 mt-8
                 md:mt-0 md:ml-auto
                "
      >
        <li>
          <a :href="twitter"
             target="__blank"
             class="text-gray-300 app-link"
             name="Go to Twitter account"
          >Twitter</a>
        </li>
        <li>
          <a :href="linkedin"
             target="__blank"
             class="text-gray-300 app-link"
             name="go to LinkedIn account"
          >LinkedIn</a>
        </li>
        <li>
          <a :href="github"
             target="__blank"
             class="text-gray-300 app-link"
             name="Go to Github account"
          >Github</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { useSocialLink } from '@/composables/useSocialLinks';

export default defineComponent({
  name: 'PageFooter',
  setup() {
    const { github, linkedin, twitter } = useSocialLink();
    return {
      github, linkedin, twitter,
    };
  },
});
</script>
