import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: ['update:count'],

  methods: {
    updateCounter(count) {
      this.$emit('update:count', count + 1);
    },
  },

  template: `<button type="button" @click="updateCounter(count)">{{ count }}</button>`,
});
