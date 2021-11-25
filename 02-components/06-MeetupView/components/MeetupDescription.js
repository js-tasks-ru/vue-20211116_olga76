import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',
  props: {
    description: {
      type: String,
      default: 'Скоро здесь будет описание',
    },
  },
  template: `<p class="meetup-description">{{ description }}</p>`,
});
