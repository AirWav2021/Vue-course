<template>
<div id="id">
  <header class="header">
    <nav>
      <router-link
      class="router-link"
      :to="{ name: 'dashboard', params: { page: 1 } }">
      Dashboard
      </router-link>
      <router-link
      class="router-link"
      :to="{ name: 'about' }">
      About</router-link>
      <router-link
      class="router-link"
      :to="{ name: '404' }">
      NotFound
      </router-link>
    </nav>
  </header>
<main>
  <router-view></router-view>
</main>
</div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    page: '',
  }),
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {

  },

};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body {
  font-family: 'Roboto', sans-serif;
}
.header {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.router-link {
    margin: 0 5px;
    font-size: 30px;
  }

</style>
