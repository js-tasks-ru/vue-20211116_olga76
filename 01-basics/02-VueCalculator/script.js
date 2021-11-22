import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      numA: 0,
      numB: 0,
      checkedOperator: 'sum',
    };
  },
  computed: {
    calcResult() {
      let result;
      if (this.checkedOperator == 'sum') {
        result = this.numA + this.numB;
      } else if (this.checkedOperator == 'subtract') {
        result = this.numA - this.numB;
      } else if (this.checkedOperator == 'multiply') {
        result = this.numA * this.numB;
      } else if (this.checkedOperator == 'divide') {
        if (this.numB == 0 && this.checkedOperator === 'divide') {
          result = 'На 0 делить нельзя';
        } else {
          result = this.numA / this.numB;
        }
      }

      return result;
    },
  },
});

app.mount('#app');
