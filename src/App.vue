<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">
    <Calculator3 />
  </div>
</template>

<script>
import Calculator3 from './components/Calculator3.vue';

export default {
  name: 'App',
  components: {
    Calculator3,
  },
  data() {
    return {
      show: true,

    };
  },
  methods: {
  },
  computed: {
    filteredArr() {
      return this.arr.filter(({ show }) => show);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
