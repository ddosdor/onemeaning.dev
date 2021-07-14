<template>
  <div class="AboutMeContent flex flex-col items-center mt-6
              md:items-start
              lg:flex-row-reverse
             "
  >
    <div class="flex-shrink-0
                lg:mt-0 lg:ml-auto lg:pl-10
               "
    >
      <figure>
        <img class="inline object-cover w-20 h-20 mb-4 ring-1 ring-red-300 rounded-full
                    md:w-28 md:h-28
                    lg:w-56 lg:h-56 lg:relative lg:bottom-10
                   "
             src="~/assets/images/me.png"
        >
      </figure>
    </div>
    <div class="space-y-3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur finibus porta blandit. In a fringilla augue, in
        <RoughNotation :is-show="true"
                       type="underline"
                       color="#2563EB"
        >
          consectetur tortor.
        </RoughNotation>
      </p>
      <p>
        Fusce nunc tellus, rhoncus in
        <RoughNotation :is-show="true"
                       type="underline"
                       color="#FBBF24"
        >
          metus eget
        </RoughNotation>, aliquet molestie tellus.
        Nulla vulputate metus in dolor pulvinar, quis suscipit ante blandit.
        <RoughNotation :is-show="true"
                       type="underline"
                       color="#DC2626"
        >
          Duis tincidunt
        </RoughNotation>
        faucibus dictum.
      </p>
      <p>
        Donec sollicitudin vulputate <span class="font-medium">bibendum</span>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'AboutMeContent',
});
</script>

<style lang="sass" scoped>
.AboutMeContent
  // component style
</style>
