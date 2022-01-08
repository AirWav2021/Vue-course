<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <div>{{ settings.title }}</div>
      <!-- <add-payment-form v-if="settings.content === 'addPaymentForm'"></add-payment-form> -->
      <!-- <auth v-if="settings.content === 'auth'"></auth> -->
      <component :is="settings.name" :id="settings.id"/>
      <button @click="onCloseClick">Close</button>
    </div>
    <div class="wrapper__footer">
    </div>
  </div>

</template>

<script>
// import AddPaymentForm from './AddPaymentForm.vue';
import Auth from './Auth.vue';

export default {
  name: 'ModalWindowAddPaymentForm',
  components: { Auth },
  props: {
    settings: {
      type: Object,
      default: () => ({

      }),
    },
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  &__content {
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 8px;
  }
}

</style>
