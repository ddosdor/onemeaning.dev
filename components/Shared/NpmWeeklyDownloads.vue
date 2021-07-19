<template>
  <span>Weekly downloads: <label class="font-bold">{{ weeklyDownloads }}</label></span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useNpmWeeklyDownloads } from '@/composables';

export default defineComponent({
  name: 'NpmWeeklyDownloads',
  props: {
    package: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { weeklyDownloads } = useNpmWeeklyDownloads({
      package: props.package,
    });

    return {
      weeklyDownloads,
    };
  },
});
</script>
