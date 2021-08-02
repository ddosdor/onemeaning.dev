<template>
  <div class="ErrorInfo flex flex-col items-center w-full h-full pt-6">
    <div class="w-4/5 flex justify-center animate-fade-in-up"
         data-aos="zoom-y-out"
    >
      <SharedUiImage :src="image"
                     :title="title"
                     :alt="title"
                     custom-class="object-fit max-w-full h-auto"
                     width="450px"
                     height="290px"
      />
    </div>
    <h3 class="text-2xl font-bold tracking-tight text-center my-4
               md:text-4xl
               lg:text-6xl
              "
        data-aos="zoom-y-out"
        data-aos-delay="150"
        v-html="title"
    />
    <nuxt-link class="app-link mt-4
                      md:text-lg
                     "
               to="/"
               data-aos="zoom-y-in"
               data-aos-delay="300"
    >
      Come back home...
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ErrorInfo',
  props: {
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: 'Ok... some error',
    },
  },
});
</script>
