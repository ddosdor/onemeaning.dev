<template>
  <div class="PostsPreviewListEmpty flex flex-col items-center w-full">
    <div class="w-4/5 flex justify-center animate-fade-in-up">
      <SharedUiImage :src="require('~/assets/images/empty-list.png')"
                     title="Empty blog posts list"
                     alt="Empty blog posts list"
                     custom-class="object-fit max-w-full h-auto"
                     width="400px"
                     height="290px"
      />
    </div>
    <h3 class="text-lg font-bold tracking-tight animate-fade-in-up
               lg:text-3xl
              "
    >
      Ups! No more posts :(
    </h3>
    <nuxt-link class="app-link mt-4 animate-fade-in-up"
               to="/blog?page=1"
    >
      Go back to first page
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PostsPreviewListEmpty',
});
</script>
