<template>
  <div :class="$style.editForm">
    <input :class="$style.input" type="text" v-model="date" />
    <select :class="$style.select" v-model="category">
      <option
        v-for="category of categoryList"
        :value="category"
        :key="category"
      >
        {{ category }}
      </option>
    </select>
    <input :class="$style.input" type="text" v-model="value" />
    <button :class="$style.content__btn" type="button" @click="editPayment">Редактировать</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'EditPayment',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      date: '',
      category: '',
      value: '',
    };
  },
  computed: {
    ...mapGetters(['categoryList']),
  },
  methods: {
    ...mapActions(['fetchCategoryListData']),
    ...mapMutations({ updatePayment: 'UPDATE_PAYMENT_DATA' }),
    editPayment() {
      this.updatePayment({
        id: this.item.id,
        date: this.date,
        category: this.category,
        value: this.value,
      });
      this.$emit('close-edit');
    },
  },
  created() {
    this.date = this.item.date;
    this.category = this.item.category;
    this.value = this.item.value;
    this.fetchCategoryListData();
  },
};
</script>

<style lang="scss" module>
.content {
&__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 600px;
  margin: 30px auto;
}
&__input {
  padding: 0.5em 1.3em;
  font-size: 1.3rem;
  color: #2c3e50;
  border: 1px solid #c2c2c2;
  border-radius: 0.3em;
}
&__btn {
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.8em 1em;
  border-radius: 0.3em;
  background: #2aa694;
  border: none;
  outline: 0.125em solid #2aa694;
  border: 0.125em solid #2aa694;
  border-radius: 0.5em;
  background-color: #2aa694;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.2);
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s, transform 0.2s;
  color: #fff;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: #2aa694;
    background-color: #fff;
  }
  &:active  {
    box-shadow: 0 0.075em 0.125em rgba(0, 0, 0, 0.2);
  }

}
}
.input {
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  height: 32px;
  padding: 0 8px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.btn {
  height: 38px;
  line-height: 38px;
  text-transform: uppercase;
  background: rgb(13, 109, 64);
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  display: block;
  text-decoration: none;
  margin-top: 10px;
}

.select {
  width: 100%;
  height: 38px;
  line-height: 38px;
  margin-bottom: 10px;
  font-size: 18px;
}

.editForm {
  padding: 10px;
  box-sizing: border-box;
}
</style>
