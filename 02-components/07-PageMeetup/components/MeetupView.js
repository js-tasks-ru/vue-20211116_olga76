import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from '../UiAlert.js';
import UiContainer from '../UiContainer.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupInfo,
    MeetupDescription,
    MeetupCover,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <meetup-cover :image="meetup.image" :title="meetup.title" />

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description" />

            <h3>Программа</h3>
            <meetup-agenda v-if="meetup.agenda && meetup.agenda.length" :agenda="meetup.agenda" />
            <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />
          </div>
        </div>
      </ui-container>
    </div>`,
});
