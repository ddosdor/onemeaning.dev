<template>
  <div class="flex flex-col divide-y">
    <div class="flex pb-2">
      <ul class="list-none flex space-x-3">
        <li>
          <a :href="recentProject.github"
             target="__blank"
          >
            <UiSocialLink github
                          as-link
            />
          </a>
        </li>
        <li>
          <a :href="recentProject.github.link"
             target="__blank"
          >
            <UiSocialLink npm
                          as-link
            />
          </a>
        </li>
      </ul>
      <div class="space-x-2 text-xs ml-auto">
        <GithubStars :username="recentProject.github.username"
                     :reponame="recentProject.github.reponame"
        />
        <span>Weekly downloads: <label class="font-bold">20</label></span>
      </div>
    </div>
    <nuxt-link class="RecentProjectsListItem pt-4"
               :to="recentProject.path"
    >
      <h2 class="RecentProjectsListItem__title text-xl font-semibold line-clamp-1">
        {{ recentProject.title }}
      </h2>
      <p class="mt-2 line-clamp-4">
        {{ recentProject.description }}
      </p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { ProjectPostType } from '@/utils/types';
import UiSocialLink from '@/components/Shared/Ui/UiSocialIcon.vue';
import GithubStars from '@/components/Shared/GithubStars.vue';

export default defineComponent({
  name: 'RecentProjectsListItem',
  components: {
    UiSocialLink,
    GithubStars,
  },
  props: {
    recentProject: {
      type: Object as PropType<ProjectPostType>,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
.RecentProjectsListItem
  cursor: pointer

  &:hover
    .RecentProjectsListItem__title
      color: $link-color

  @apply transition duration-200
</style>
