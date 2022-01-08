<template>
  <div id="app">
    <div class="wrapper">
      <div class="content container">
        <h1 class="content__title">My personal costs</h1>
        <main class="content__main">
          <CustomButton @click="showForm=!showForm" add/>
          <AddPaymentForm @add-payment="addNewPayment" v-if="showForm"/>
          <PaymentDisplay :items="paymentsListPage"/>
          <Pagination :length="pageLength" @select-page="selectPage" />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from '@/components/CustomButton.vue';
import AddPaymentForm from '@/components/AddPaymentForm.vue';
import PaymentDisplay from '@/components/PaymentDisplay.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    CustomButton,
    Pagination,
  },
  data() {
    return {
      showForm: false,
      paymentsList: [],
      paymentsListPage: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          description: 'Food',
          amount: 169,
        },
        {
          date: '24.03.2020',
          description: 'Auto',
          amount: 360,
        },
        {
          date: '24.03.2020',
          description: 'Auto',
          amount: 1000,
        },
        {
          date: '24.03.2020',
          description: 'Auto',
          amount: 2000,
        },
        {
          date: '24.03.2020',
          description: 'Food',
          amount: 532,
        },

      ];
    },
    addNewPayment(data) {
      const payment = { id: this.paymentsList.length + 1, ...data };
      if (data) {
        this.paymentsList.push(payment);
      }
    },
    selectPage(page) {
      const start = (page - 1) * 5;
      this.paymentsListPage = this.paymentsList.slice(start, start + 5);
    },
  },
  computed: {
    pageLength() {
      return this.paymentsList.length;
    },
  },
  created() {
    this.paymentsList = this.fetchData();
    this.paymentsListPage = this.paymentsList.slice(0, 5);
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
.container {
  max-width: 1140px;
  margin: auto;
}
.content {
  &__main {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
