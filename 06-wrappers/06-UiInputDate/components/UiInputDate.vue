<template>
  <ui-input ref="uiInput" v-model="customModel" :type="type">
    <template v-for="slot in Object.keys($slots)" #[slot]>
      <slot :name="slot" />
    </template>
  </ui-input>
</template>

<script>
import UiInput from './UiInput';

export default {
  name: 'UiInputDate',
  components: { UiInput },

  props: {
    type: {
      type: String,
      default: 'date',
    },

    modelValue: {
      type: Number,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    customModel: {
      get() {
        if (!this.modelValue) {
          return null;
        }

        let year = new Date(this.modelValue).toISOString().split(/T|\./)[0];
        let time = new Date(this.modelValue).toISOString().split(/T|\./)[1];

        if (this.type === 'date') {
          return year;
        } else if (this.type === 'time') {
          if (this.$attrs.step && this.$attrs.step % 60 !== 0) {
            return time;
          } else {
            return time.substr(0, 5);
          }
        } else if (this.type === 'datetime-local') {
          return `${year}T${time}`;
        } else {
          return this.modelValue;
        }
      },

      set() {
        this.$emit('update:modelValue', this.$refs.uiInput.$refs.input.valueAsNumber);
      },
    },
  },
};
</script>
