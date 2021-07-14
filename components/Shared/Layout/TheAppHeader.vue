<template>
  <header class="TheAppHeader
                 sticky top-0 z-10 p-4 flex flex-col items-center bg-white
                 md:px-12 md:flex-row
                 lg:px-20 lg:w-4/5 lg:mx-auto
                 2xl:px-32
                "
  >
    <a class="text-xl mb-4
              md:mb-0
             "
    >
      <span class="text-xl
                   md:text-2xl
                   lg:text-3xl
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
      >
        <UiSocialIcon twitter
                      as-link
        />
      </a>
      <a :href="linkedin"
         target="__blank"
      >
        <UiSocialIcon linkedin
                      as-link
        />
      </a>
      <a :href="github"
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
import { useSocialLink } from '@/composables';
import UiSocialIcon from '@/components/Shared/Ui/UiSocialIcon.vue';

export default defineComponent({
  name: 'TheAppHeader',
  components: {
    UiSocialIcon,
  },
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

<style lang="sass" scoped>
.PageHeader
  // component style
</style>
