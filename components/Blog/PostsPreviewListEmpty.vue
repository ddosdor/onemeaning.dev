<template>
  <div class="PostsPreviewListEmpty flex flex-col items-center w-full">
    <div class="w-4/5 flex justify-center"
         data-aos="zoom-y-out"
    >
      <SharedUiImage :src="require('~/assets/images/empty-list.png')"
                     title="Empty blog posts list"
                     alt="Empty blog posts list"
                     custom-class="object-fit max-w-full h-auto"
                     width="400px"
                     height="290px"
      />
    </div>
    <h3 class="text-2xl font-bold tracking-tight text-center my-4
               md:text-4xl
               lg:text-5xl
              "
        data-aos="zoom-y-out"
        data-aos-delay="150"
    >
      Whoops! <br>It looks like there are no more posts :(
    </h3>
    <nuxt-link class="app-link mt-4
                      md:text-lg
               "
               to="/blog?page=1"
               data-aos="zoom-y-in"
               data-aos-delay="300"
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
