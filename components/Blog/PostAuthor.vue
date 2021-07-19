<template>
  <figure class="PostAuthor flex items-center space-x-2">
    <img class="object-cover w-6 h-6 rounded-full ring-1 ring-gray-300"
         :src="avatar"
    >
    <span class="text-sm text-gray-500">{{ name }}</span>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PostAuthor',
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
