<template>
  <div class="wrapper content container" >
    <h1 class="content__title">My personal costs</h1>
<main class="content__main">
    <custom-button class="showbtn" @click="show=!show"> Add new costs  + </custom-button>
    <add-payment-form
    v-if="show"
    :categoryList="categoryList"
    :url-data="url"
    @add-payment="addNewPayment"
    />
    <payments-display :items="showPayments"/>
    <pagination :default-page="currentPage" @select-page="changePage" />
  </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaymentsDisplay from '../components/PaymentsDisplay.vue';
import AddPaymentForm from '../components/AddPaymentForm.vue';
import CustomButton from '../components/CustomButton.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    CustomButton,
    Pagination,
  },
  data() {
    return {
      show: false,
      currentPage: 1,
      url: {
        category: null,
        value: null,
      },
    };
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategoryListData',
      'fetchPages',
    ]),
    onPageChange(page) {
      this.currentPage = page;
    },
    changePage(newPage) {
      // eslint-disable-next-line no-unused-expressions
      ((this.currentPage = newPage), this.fetchData(this.currentPage));
    },
    ...mapMutations({ addPayment: 'ADD_PAYMENT_DATA' }),
    // ...mapMutations([
    //   'ADD_PAYMENT_DATA',
    //   'SET_CATEGORY_LIST',
    // ]),
    addNewPayment(payment) {
      // eslint-disable-next-line eqeqeq
      if (payment.category != '' && payment.value != '') {
        this.addPayment(payment);
        this.fetchPages();
      }
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
    showPayments() {
      return this.paymentsList[`page${this.currentPage}`];
    },
    getRoute() {
      return this.$route.params;
    },
  },
  created() {
    // this.paymentsList = this.fetchData()
    // console.log(this.fetchData())
    if (this.getRoute?.page) {
      this.currentPage = +this.getRoute?.page;
    }
    if (this.getRoute?.category) {
      this.url.category = this.getRoute.category;
      this.url.value = this.$route.query.value ? this.$route.query.value : 0;
      this.show = true;
    }
    console.log('роутинг', this.$route);
    this.fetchPages();
    this.fetchData(this.currentPage);
    this.fetchCategoryListData();
  },

};
</script>

<style lang="scss">
.container {
  max-width: 1140px;
  margin: auto;
}
.content {
  &__main {
    max-width: 600px;
    margin: 0 auto;
  }
  &__title {
      margin: 30px auto;
      text-align: center;
    }
}
</style>
