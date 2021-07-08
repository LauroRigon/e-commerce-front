<template>
<div>
  <label
      v-if="label"
      :for="id"
      class="form-label"
  >
    {{ label }}
  </label>
  <input
      :id="id"
      class="form-control"
      v-bind="$attrs"
      :value="value"
      @input="onInput"
  >
  <template v-if="errors.length">
    <div
        v-for="(error, index) in errors"
        :key="index"
        class="form-text text-danger"
    >{{ error }}</div>
  </template>
</div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      default: () => Math.ceil(Math.random() * 10000)
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: false,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value)
    }
  },
}
</script>

<style scoped>
label {
  font-width: bold;
}
</style>