<template>
  <ui-input :model-value="value" :type="type" @input="handleInput">
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
    value() {
      if (!this.modelValue) {
        return '';
      }

      const date = new Date(this.modelValue).toISOString();
      let year = date.split(/T|\./)[0];
      let time = date.split(/T|\./)[1];

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
        return '';
      }
    },
  },
  methods: {
    handleInput($event) {
      if ($event.target.value === '') {
        this.$emit('update:modelValue', null);
        return;
      }

      this.$emit('update:modelValue', $event.target.valueAsNumber);
    },
  },
};
</script>
