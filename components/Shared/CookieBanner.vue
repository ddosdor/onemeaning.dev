<template>
  <div v-if="isVisible"
       class="CookieBanner fixed left-0 bottom-0 mx-4 my-4 bg-gray-500 rounded-lg p-2 text-sm
              flex items-center space-x-2 text-white shadow-md
             "
       data-aos="fade-up"
  >
    <SharedUiHeroIcon badge-check
                      class="w-10 h-10"
    />
    <div class="flex flex-col
                md:flex-row md:items-center
               "
    >
      <p class="flex flex-col">
        <span>Can I use <b>cookies</b> to analyze my site?</span>
        <span>Read <nuxt-link to="/privacy-policy"
                              class="underline app-link"
        >the privacy policy</nuxt-link> for more information.</span>
      </p>
      <div class="flex space-x-2 mt-2
                  md:mt-0 md:ml-4
                 "
      >
        <button class="border border-gray-400 rounded-md px-2 py-1
                       transition-colors duration-150 cursor-pointer
                       hover:border-gray-600 hover:bg-gray-600
                      "
                @click="denyGPDR"
        >
          <SharedUiHeroIcon x
                            class="w-4 h-4"
          />
        </button>
        <button class="border border-green-300 bg-green-500 font-semibold rounded-md px-2 py-1
                       transition-colors duration-150 cursor-pointer
                       hover:border-green-500 hover:bg-green-600
                      "
                @click="acceptGPDR"
        >
          Yes, sure!
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { bootstrap } from 'vue-gtag';
import { defineComponent, ref } from '@nuxtjs/composition-api';

import { BROWSER_STORAGE_KEYS } from '@/utils/consts';

export default defineComponent({
  name: 'CookieBanner',
  setup() {
    const isVisible = ref<Boolean>(
      !localStorage.getItem(BROWSER_STORAGE_KEYS.GPDRisAccepted),
    );

    function hideCookieBanner(isAccepted: string) {
      isVisible.value = false;
      localStorage.setItem(BROWSER_STORAGE_KEYS.GPDRisAccepted, isAccepted);
    }

    async function acceptGPDR() {
      await bootstrap();
      hideCookieBanner('true');
    }

    function denyGPDR() {
      hideCookieBanner('false');
    }

    return {
      isVisible,
      acceptGPDR,
      denyGPDR,
    };
  },
});
</script>
