<template>
  <header class="TheAppHeader fixed w-full z-30 py-4 bg-white bg-opacity-90">
    <div class="flex flex-col items-center
                 md:px-12 md:flex-row
                 lg:px-20 lg:w-4/5 lg:mx-auto
                 2xl:px-32
                "
    >
      <a class="text-xl mb-4
              md:mb-0
             "
         href="/"
         name="onemeaning.dev"
      >
        <span class="text-2xl
                   md:text-3xl
                   lg:text-4xl
                  "
        >
          <RoughNotation :is-show="true"
                         type="highlight"
                         color="#6EE7B7"
          >
            <span class="font-bold">onemeaning|</span><span class="font-light">dev</span>
          </RoughNotation>
        </span>
        <small class="hidden text-xs font-thin
                    md:block
                   "
        >
          some stuff about... lorem ipsum...
        </small>
      </a>
      <nav class="space-x-3 mb-4
                md:ml-auto md:mb-0
               "
      >
        <nuxt-link class="app-link"
                   to="/"
        >
          About
        </nuxt-link>
        <nuxt-link class="app-link"
                   to="/blog?page=1"
        >
          Blog
        </nuxt-link>
      </nav>
      <div class="flex space-x-2
                md:ml-6
               "
      >
        <a :href="twitter"
           target="__blank"
           name="Go to Twitter account"
        >
          <SharedUiSocialIcon twitter />
        </a>
        <a :href="linkedin"
           target="__blank"
           name="Go to LinkedIn account"
        >
          <SharedUiSocialIcon linkedin />
        </a>
        <a :href="github"
           target="__blank"
           name="Go to Github account"
        >
          <SharedUiSocialIcon github />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { useSocialLink } from '@/composables/useSocialLinks';

export default defineComponent({
  name: 'TheAppHeader',
  setup() {
    const { github, linkedin, twitter } = useSocialLink();
    return {
      github,
      linkedin,
      twitter,
    };
  },
});
</script>
