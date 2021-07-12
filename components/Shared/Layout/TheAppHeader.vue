<template>
  <header class="TheAppHeader
                 sticky container p-4 flex flex-col items-center
                 md:px-12 md:flex-row
                 lg:px-20 lg:w-4/5 lg:mx-auto
                 2xl:px-32
                "
  >
    <a class="font-bold text-xl mb-4
              md:mb-0
             "
    >
      <span class="font-bold text-xl
                   md:text-2xl
                  "
      >
        onemeaning|<span class="font-light">dev</span>
      </span>
      <small class="hidden text-xs font-thin
                    md:block
                   "
      >
        some stuff about... lorem ipsum...
      </small>
    </a>
    <nav class="space-x-3
                md:ml-auto
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
      <a href="https://twitter.com/ddosdor"
         target="__blank"
      >
        <UiSocialIcon twitter
                      as-link
        />
      </a>
      <a href="https://www.linkedin.com/in/sebastian-drzewicki-947459b0/"
         target="__blank"
      >
        <UiSocialIcon linkedin
                      as-link
        />
      </a>
      <a href="https://github.com/ddosdor"
         target="__blank"
      >
        <UiSocialIcon github
                      as-link
        />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import UiSocialIcon from '@/components/Shared/Ui/UiSocialIcon.vue';

export default defineComponent({
  name: 'TheAppHeader',
  components: {
    UiSocialIcon,
  },
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.PageHeader
  // component style
</style>
