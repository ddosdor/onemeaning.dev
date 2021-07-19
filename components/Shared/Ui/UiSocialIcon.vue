<template>
  <span class="UiSocialIcon">
    <GithubIcon v-if="github"
                :class="{ 'as-link': asLink }"
    />
    <LinkedinIcon v-if="linkedin"
                  :class="{ 'as-link': asLink }"
    />
    <TwitterIcon v-if="twitter"
                 :class="{ 'as-link': asLink }"
    />
    <NpmIcon v-if="npm"
             :class="{ 'as-link': asLink }"
    />
  </span>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { defineComponent } from '@nuxtjs/composition-api';
import GithubIcon from './icons/github.svg?inline';
import LinkedinIcon from './icons/linkedin.svg?inline';
import TwitterIcon from './icons/twitter.svg?inline';
import NpmIcon from './icons/npm.svg?inline';

export default defineComponent({
  name: 'UiSocialIcon',
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    NpmIcon,
  },
  props: {
    github: Boolean,
    twitter: Boolean,
    linkedin: Boolean,
    npm: Boolean,
    asLink: Boolean,
  },
});
</script>

<style lang="sass" scoped>
.UiSocialIcon
  .as-link
    &:hover
      .path
        fill: $link-color
    @apply cursor-pointer transition duration-150
</style>
