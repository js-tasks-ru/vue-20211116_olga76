<template>
  <div v-if="toastList.length" class="toasts">
    <ui-toast v-for="toast in toastList" :key="toast.date" :toast="toast"></ui-toast>
  </div>
</template>

<script>
// import UiIcon from './UiIcon';
import UiToast from './UiToast';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      toastList: [],
      lastId: 0,
    };
  },

  methods: {
    success(toastText) {
      this.addElem('success', toastText);
    },

    error(toastText) {
      this.addElem('error', toastText);
    },

    addElem(toastType, toastText) {
      let toastId = this.lastId;
      let toast = { type: toastType, text: toastText, id: toastId };
      this.toastList.push(toast);
      this.lastId++;
      this.removeElem(toastId);
    },

    removeElem(toastId) {
      setTimeout(() => {
        const index = this.toastList.findIndex((toast) => toast.id === toastId);
        this.toastList.splice(index, 1);
      }, 5000);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}
</style>
