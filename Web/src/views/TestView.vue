<template>
  <test-components />
</template>

<script lang="ts">
  import Vue from 'vue'
  import TestComponents from '../components/InquiryChat.vue'

  export default Vue.extend({
    name: 'TestView',

    components: {
      TestComponents,
    },
  })
</script>
