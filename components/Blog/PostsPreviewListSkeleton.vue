<template>
  <ul class="PostsPreviewListSkeleton">
    <li v-for="index in [0, 1, 2, 3, 4]"
        :key="`blog-post-skeleton-${index}`"
        class="PostsPreviewListSkeleton__item flex flex-col mb-20"
        :class="{
          'lg:flex-row': index % 2 === 0,
          'lg:flex-row-reverse': index % 2 !== 0,
        }"
        :data-aos="index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'"
        :data-aos-delay="dataAosDelay[index]"
    >
      <div class="w-full h-auto
                  lg:w-2/5 lg:flex-none
                 "
           :class="{
             'lg:mr-8': index % 2 === 0,
             'lg:ml-8': index % 2 !== 0,
           }"
      >
        <SharedUiFakeImage alt="Loading image"
                           title="Loading image"
                           custom-class="object-fit max-w-full h-auto rounded-lg"
                           width="675px"
                           height="380px"
        />
      </div>
      <div class="mt-2 flex flex-col px-2 w-full
                  lg:px-0
                 "
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <SharedUiSkeletonBox class="rounded-full w-6 h-6" />
            <SharedUiSkeletonBox class="rounded-lg w-16 h-3" />
          </div>
          <SharedUiSkeletonBox class="rounded-lg w-16 h-3" />
        </div>
        <SharedUiSkeletonBox class="rounded-lg mt-4 w-52 h-6" />
        <SharedUiSkeletonTextContent class="mt-3"
                                     :lines="3"
        />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PostsPreviewListSkeleton',
  setup() {
    const dataAosDelay = [0, 150, 300, 450, 600];

    return {
      dataAosDelay,
    };
  },
});
</script>
