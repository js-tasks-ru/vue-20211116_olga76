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
        return parseFloat(this.numA) + parseFloat(this.numB)
      } else if (this.checkedOperator == 'subtract') {
        return parseFloat(this.numA) - parseFloat(this.numB)

      } else if (this.checkedOperator == 'multiply') {
        return parseFloat(this.numA) * parseFloat(this.numB)

      } else if (this.checkedOperator == 'divide') {
        return parseFloat(this.numA) / parseFloat(this.numB)
      }
    }
  }
});

app.mount("#app");
