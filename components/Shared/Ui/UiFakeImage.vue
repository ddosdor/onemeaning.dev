<template>
  <figure>
    <picture>
      <source :srcset="`${fakeImage}`"
              v-bind="$attrs"
              type="image/webp"
      >
      <img :class="customClass"
           :src="fakeImage"
           :srcset="srcSet"
           v-bind="$attrs"
      >
    </picture>
  </figure>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiFakeImage',
  props: {
    customClass: {
      type: String,
      default: null,
    },
  },
  setup() {
    // eslint-disable-next-line max-len
    const fakeImage = ref<String>('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqMAAAF8AQMAAADB0SBMAAAAA1BMVEXk5+svdht9AAAANklEQVR42u3BAQ0AAADCIPunNsc3YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQcn+oAAFQAGKzAAAAAElFTkSuQmCC');
    const srcSet = ref<String>('');
    srcSet.value = `${fakeImage.value}, ${fakeImage.value} 2x`;

    return {
      fakeImage,
      srcSet,
    };
  },
});
</script>
