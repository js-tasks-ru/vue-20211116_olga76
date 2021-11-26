import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './components/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      selectedMeetup: null,
      loader: true,
      errorText: '',
    };
  },

  watch: {
    meetupId: {
      deep: true,
      immediate: true,
      handler() {
        this.updateMeetup();
      },
    },
  },

  methods: {
    updateMeetup() {
      this.loader = true;
      this.errorText = '';
      this.selectedMeetup = null;
      fetchMeetupById(this.meetupId).then(
        (meetup) => (this.selectedMeetup = meetup) && (this.loader = false),
        (error) => (this.errorText = error.message) && (this.loader = false),
      );
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="selectedMeetup" :meetup="selectedMeetup"/>
      <ui-container v-if="loader === true">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="errorText">
        <ui-alert>{{ errorText }}</ui-alert>
      </ui-container>
    </div>`,
});
