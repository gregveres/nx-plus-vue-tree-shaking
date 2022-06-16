<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script>
import Vue from 'vue';
import {HelloWorld} from '@tree/shared';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
