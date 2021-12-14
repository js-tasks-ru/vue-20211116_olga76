<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': currentState.type === 'loading' }"
      :style="bgImage"
    >
      <span class="image-uploader__text">{{ currentState.text }}</span>
      <input
        ref="input"
        v-bind="$attrs"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        @[inputEvent].prevent="inputEventHandler"
      />
    </label>
  </div>
</template>

<script>
const state = {
  empty: {
    type: 'empty',
    text: 'Загрузить изображение',
  },
  loading: {
    type: 'loading',
    text: 'Загрузка...',
  },
  preview: {
    type: 'preview',
    text: 'Удалить изображение',
  },
};

export default {
  name: 'UiImageUploader',
  inheritAttrs: false,

  props: {
    preview: {
      type: String,
    },
    uploader: {
      type: Function,
    },
  },

  emits: ['select', 'remove', 'upload', 'error'],

  data() {
    return {
      status: this.preview ? 'preview' : 'empty',
    };
  },

  computed: {
    bgImage() {
      return this.preview ? `--bg-url: url('${this.preview}')` : undefined;
    },
    currentState() {
      return state[this.status];
    },
    inputEvent() {
      return this.status === 'preview' ? 'click' : 'change';
    },
  },

  methods: {
    inputEventHandler() {
      if (this.status === 'loading') {
        return;
      } else if (this.status === 'preview') {
        this.$emit('remove');
        this.status = 'empty';
        this.$refs.input.value = null;
      } else {
        this.$emit('select', this.$refs['input'].files[0]);
        if (this.uploader) {
          this.status = 'loading';
          this.uploader(this.$refs['input'].files[0])
            .then((res) => {
              this.$emit('upload', res);
              this.status = 'preview';
            })
            .catch((err) => {
              this.$emit('error', err);
              this.status = this.preview ? 'preview' : 'empty';
              this.$refs.input.value = null;
            });
        } else {
          this.status = 'preview';
        }
      }
    },
  },
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
