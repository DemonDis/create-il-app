<script>
export default {
  data() {
    return {

    }
  },
  props: {
    action: Function,
    nameBtn: String,
    count: Number
  }
}
</script>

<template>
  <button @click="action">
    VUE {{nameBtn}} - {{count}}!!!
  </button>
</template>
