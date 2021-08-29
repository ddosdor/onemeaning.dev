<template>
  <div class="BannerAfterPostReading text-center mt-20 mb-16 p-4 bg-gray-200 rounded-lg">
    <h4 class="text-lg font-bold">
      Thank you for reading this post.
    </h4>
    <p class="mt-2">
      If you have any questions, feedback or suggestions about this site,
      feel free to reach out to me on           <a :href="twitter"
                                                   target="_blank"
                                                   class="font-semibold app-link"
                                                   name="Go to Twitter account"
      >Twitter</a> or           <a :href="linkedin"
                                   target="_blank"
                                   class="font-semibold app-link"
                                   name="go to LinkedIn account"
      >LinkedIn</a>
    </p>
    <div class="w-full flex justify-center mt-6">
      <a :href="github"
         target="_blank"
         aria-label="Go to Github account"
      >
        <SharedUiSocialIcon github />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { useSocialLink } from '@/composables/useSocialLinks';

export default defineComponent({
  name: 'BannerAfterPostReading',
  setup() {
    const { github, linkedin, twitter } = useSocialLink();
    return {
      github, linkedin, twitter,
    };
  },
});
</script>
