<template>
  <span>Stars: <label class="font-bold">{{ stars }}</label></span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useGithubInfo } from '@/composables';

export default defineComponent({
  name: 'GithubStars',
  props: {
    username: {
      type: String,
      required: true,
    },
    reponame: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { stars } = useGithubInfo({
      username: props.username,
      reponame: props.reponame,
    });

    return {
      stars,
    };
  },
});
</script>
