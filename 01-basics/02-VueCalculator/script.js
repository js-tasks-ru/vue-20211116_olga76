import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      numA: 0,
      numB: 0,
      checkedOperator: 'sum',
    }
  },
  computed: {
    calcResult() {
      if (this.numB == 0 && this.checkedOperator === 'divide') {
        return "На 0 делить нельзя"
      }

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
