<template>
  <div class="flex flex-col divide-y"
       data-aos="fade-in-down"
  >
    <div class="flex pb-2">
      <ul class="list-none flex space-x-3">
        <li>
          <a :href="recentProject.github.link"
             target="_blank"
             aria-label="Go to github repository"
          >
            <SharedUiSocialIcon github />
          </a>
        </li>
        <li>
          <a :href="recentProject.npm.link"
             target="_blank"
             aria-label="Go to node package"
          >
            <SharedUiSocialIcon npm />
          </a>
        </li>
      </ul>
      <div class="space-x-2 text-xs ml-auto">
        <SharedGithubStars :username="recentProject.github.username"
                           :reponame="recentProject.github.reponame"
        />
        <SharedNpmWeeklyDownloads :package="recentProject.npm.package" />
      </div>
    </div>
    <a v-if="recentProject"
       class="RecentProjectsListItem pt-4 min-w-full min-h-full"
       :href="recentProject.github.link"
       target="_blank"
    >
      <h2 class="RecentProjectsListItem__title text-xl font-semibold line-clamp-1">
        {{ recentProject.title }}
      </h2>
      <p class="mt-2 line-clamp-4">
        {{ recentProject.description }}
      </p>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { ProjectPostType } from '@/utils/types';

export default defineComponent({
  name: 'RecentProjectsListItem',
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
