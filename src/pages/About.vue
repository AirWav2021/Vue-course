<template>
  <div>
    About Page
    <button @click="openAuth">Open auth</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    openAuth() {
      this.$modal.show({ title: 'Authorization', content: 'auth' });
    },
  },

};
</script>

<style>

</style>
