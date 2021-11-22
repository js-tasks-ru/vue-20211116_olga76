import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      numA: null,
      numB: null,
      checkedOperator: [],
    }
  },
  computed: {
    calcResult() {
      if (this.checkedOperator == 'sum') {
        return this.numA + this.numB
      } else if (this.checkedOperator == 'subtract') {
        return this.numA - this.numB

      } else if (this.checkedOperator == 'multiply') {
        return this.numA * this.numB

      } else if (this.checkedOperator == 'divide') {
        return this.numA / this.numB
      }
    }
  }
});

app.mount("#app");
