<template>
  <div class="{{CONTAINER}}">
    <div>Name: {{ NAME }}</div>
    <div>Type: {{ TYPEWEB }}</div>
    <div>Tools build: {{ TOOLSBUILD }}</div>
    <div>Framework: {{ FRAMEWORK }}</div>
    <div>Language: {{ LANGUAGE }}</div>
    <div>CSS: {{ CSS }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({});
</script>
