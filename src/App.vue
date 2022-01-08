<template>
<div id="id">
  <header class="header">
    <nav @click="pushHistory($event)">
      <!-- <a class="header__router-link" href="#dashboard">#Dashboard</a>
      <a class="header__router-link" href="#about">#About</a>
      <a class="header__router-link" href="#notfound">#Not found</a> -->
      <a class="header__router-link" href="dashboard">Dashboard</a>
      <a class="header__router-link" href="about">About</a>
      <a class="header__router-link" href="notfound">Not found</a>
    </nav>
  </header>
<main>
  <Dashboard v-if="page === 'dashboard'"/>
  <About v-if="page === 'about'"/>
  <Not-Found v-if="page === 'notfound'"/>
</main>
</div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';

export default {
  name: 'App',
  components: { Dashboard, About, NotFound },
  data: () => ({
    page: '',
  }),
  methods: {
    setPage() {
      // this.page = window.location.hash.slice(1);
      this.page = window.location.pathname.slice(1);
    },
    pushHistory(event) {
      event.preventDefault();
      // Фильтрация клика по ссылкам!
      if (!event.target.classList.contains('router-link')) return;

      window.history.pushState({}, '', event.target.href);
      this.setPage();
    },
  },
  mounted() {
    this.setPage();
    window.addEventListener('hashchange', this.setPage);
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.setPage);
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
.header {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  &__router-link {
    margin: 0 5px;
    font-size: 30px;
  }
}

</style>
