<template>
  <div class="AboutMeContent flex flex-col items-center mt-6
              md:items-start
              lg:flex-row-reverse lg:mt-10
             "
  >
    <div class="flex-shrink-0
                lg:mt-0 lg:ml-auto lg:pl-20
               "
    >
      <SharedUiImage :src="require('~/assets/images/me.png')"
                     :mobile="require('~/assets/images/me--mobile.png')"
                     custom-class="inline object-cover w-20 h-20 mb-4 ring-1 ring-red-300 rounded-full
                                   md:w-24 md:h-24
                                   lg:w-60 lg:h-60 lg:relative lg:bottom-10
                                  "
                     title="Me"
                     alt="Me"
                     width="300px"
                     height="300px"
      />
    </div>
    <div class="space-y-3">
      <p class="animate-fade-in-down-5">
        I've been working as a <b>Software Developer</b> (specifically with
        <RoughNotation :is-show="shouldAnimateRoughNotation"
                       type="underline"
                       color="#FBBF24"
        >
          Javascript
        </RoughNotation>
        )
        for about 7 years, and turning my own or someone else's ideas into small applications
        or large commercial products. My passion is creating clean and
        <RoughNotation :is-show="shouldAnimateRoughNotation"
                       type="underline"
                       color="#2563EB"
        >
          readable code
        </RoughNotation>
        ,
        and using
        <RoughNotation :is-show="shouldAnimateRoughNotation"
                       type="underline"
                       color="#DC2626"
        >
          best practices
        </RoughNotation>
        whenever possible.
      </p>
      <p class="animate-fade-in-down-7">
        Over the past years, I've built from scratch and managed a development
        team of several people, with full infrastructure administration, CD/CD processes
        based on Gitlab and Docker, and a technology stack based on
        <RoughNotation :is-show="shouldAnimateRoughNotation"
                       type="box"
                       color="#41B883"
        >
          Vue.js
        </RoughNotation>
        ,
        Typescript and Postrgesql.
      </p>
      <p class="animate-fade-in-down-9">
        Now I am looking for new challenges and work with people for whom programming is a passion
      </p>
      <p class="animate-fade-in-down-11">
        Let's hang out on <a class="font-bold app-link"
                             :href="linkedin"
                             tagret="__blank"
        >LinkedIn</a> or <a class="font-bold app-link"
                            :href="twitter"
                            target="__blank"
        >Twitter</a>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { useSocialLink } from '@/composables/useSocialLinks';

export default defineComponent({
  name: 'AboutMeContent',
  setup() {
    const { linkedin, twitter } = useSocialLink();
    const shouldAnimateRoughNotation = ref<Boolean>(false);

    setTimeout(() => {
      shouldAnimateRoughNotation.value = true;
    }, 2200);

    return {
      linkedin,
      twitter,
      shouldAnimateRoughNotation,
    };
  },
});
</script>
