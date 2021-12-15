<template>
  <button @click="updateCounter(count)">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: {
    'update:count': null,
  },

  data() {
    return {
      localCount: null,
    };
  },

  watch: {
    count: {
      immediate: true,
      handler() {
        this.localCount = this.count;
      },
    },
  },

  methods: {
    updateCounter() {
      this.localCount = this.localCount + 1;
      this.$emit('update:count', this.localCount);
    },
  },
};
</script>
