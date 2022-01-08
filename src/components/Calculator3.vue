<template>
  <div class="wrapper">
    <div class="display">
      <input class="display__input" type="message" :value="+operand1" @input="aa" />
      <input class="display__input" type="text" :value="+operand2"  @input="aa" />
      <div class="display__result" v-show="!error">
        Результат: {{ result }} <br />
      </div>
      <div class="display__error" v-show="error">Ошибка! {{ error }}</div>
      <div class="display__messages">
        <template v-if="result === null"></template>
        <template v-else-if="result < 0"> Получилось отрицательное число. </template>
        <template v-else-if="result < 100">Результат в первой сотне.</template>
        <template v-else>Получилось слишком большое число.</template>
      </div>
    </div>
    <div class="keyboard">
      <button
        class="keyboard__button"
        v-for="operation in operations"
        :key="operation.id"
        :title="operation.title"
        @click="calculate(operation.oper)"
      >
        {{ operation.oper }}
      </button>
    </div>
    <div class="screen-keyboard-control">
      <input
        class="screen-keyboard-control__input"
        id="control"
        type="checkbox"
        v-model="showScreenKeyboard"
      />
      <label class="screen-keyboard-control__label" for="control"
        >Отобразить экранную клавиатуру</label
      >
    </div>
    <div class="screen-keyboard" v-show="showScreenKeyboard">
      <div class="screen-keyboard__button-block">
        <button
          class="screen-keyboard__button"
          type="button"
          v-for="button in screenKeyboard"
          :key="button.id"
          :title="button.title"
          @click="inputScreenKeyboard(button.btn)"
        >
          {{ button.btn }}
        </button>
        <button
          class="screen-keyboard__button screen-keyboard__button-delete"
          type="button"
          title="Удалитьd"
          @click="deleteScreenKeyboard"
        >
          &#8592;
        </button>
      </div>
      <input
        id="operand1"
        type="radio"
        name="fieldSelection"
        value="operand1"
        v-model="selectedOperand"
        checked
      />
      <label for="operand1">Операнд 1</label>
      <input
        id="operand2"
        type="radio"
        name="fieldSelection"
        value="operand2"
        v-model="selectedOperand"
      />
      <label for="operand2">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operations: [
        { oper: '+', title: 'Сложение' },
        { oper: '-', title: 'Вычитаение' },
        { oper: '*', title: 'Умножение' },
        { oper: '/', title: 'Деление' },
        { oper: '//', title: 'Целочисленное деление' },
        { oper: '^', title: 'Возведение в степернь' },
      ],
      res: null,
      operand1: 0,
      operand2: '0',
      result: '0',
      fibResult: null,
      error: '',
      showScreenKeyboard: false,
      selectedOperand: 'operand1',
      screenKeyboard: [
        { btn: '1', title: '1' },
        { btn: '2', title: '2' },
        { btn: '3', title: '3' },
        { btn: '4', title: '4' },
        { btn: '5', title: '5' },
        { btn: '6', title: '6' },
        { btn: '7', title: '7' },
        { btn: '8', title: '8' },
        { btn: '9', title: '9' },
      ],
    };
  },
  computed: {
    fibonacci1() {
      return this.clakFibonacci(this.operand1);
    },
    fibonacci2() {
      return this.clakFibonacci(this.operand2);
    },
  },
  methods: {
    aa(event) {
      this.operand1 = event.target.value;
      this.operand2 = event.target.value;
    },
    sum() {
      const { operand1, operand2 } = this;
      this.result = +operand1 + +operand2;
      this.fibResult = +this.fib1 + +this.fib2;
    },
    sub() {
      const { operand1, operand2 } = this;
      this.result = operand1 - operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = 'На ноль делить нельзя';
      } else {
        this.result = operand1 / operand2;
      }
    },
    mult() {
      const { operand1, operand2 } = this;
      this.result = operand1 * operand2;
    },
    pow() {
      const { operand1, operand2 } = this;
      this.result = operand1 ** operand2;
    },
    numberDel() {
      const { operand1, operand2 } = this;
      // eslint-disable-next-line no-restricted-globals
      if (operand1 <= 0) {
        this.result = 'Будет ноль';
      }
      if (operand2 <= 0) {
        this.result = 'Будет ноль';
      } else {
        this.result = Math.floor(operand1 / operand2);
      }
    },
    calculate(operation) {
      this.error = '';
      switch (operation) {
        case '+':
          this.sum();
          break;
        case '-':
          this.sub();
          break;
        case '*':
          this.mult();
          break;
        case '/':
          this.div();
          break;
        case '//':
          this.numberDel();
          break;
        case '^':
          this.pow();
          break;
        default:
          break;
      }
    },
    inputScreenKeyboard(char) {
      const operand = this.selectedOperand;
      const value = this[operand];
      this[operand] = +(value + char);
    },
    deleteScreenKeyboard() {
      if (this.selectedOperand === 'operand1') {
        this.operand1 = +(String(this.operand1).slice(0, -1));
      } else if (this.selectedOperand === 'operand2') {
        this.operand2 = +(String(this.operand2).slice(0, -1));
      }
    },
  },
};
</script>

<style scoped lang="scss">
button {
  box-sizing: border-box;
  font-size: 16px;
  &:hover {
    background-color: darken(rgb(230, 230, 230), 10%);
  }
  &:active {
    border: 2px inset rgb(230, 230, 230);
  }
}
input {
  padding: 8px 20px;
  font-size: 20px;
}
.wrapper {
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.keyboard {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 20px;
  &__button {
    width: 40px;
    height: 40px;
  }
}
.display {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  &__result {
    text-align: center;
    padding: 5px 20px;
    color: black;
  }
  &__error {
    text-align: left;
    padding: 5px 20px;
    color: red;
  }
  &__messages {
    min-height: 24px;
    padding: 5px 20px;
  }
}
.screen-keyboard-control {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &__input {
    margin: 0 10px 0 0;
  }
}
.screen-keyboard {
  &__button-block {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  &__button {
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
    &-delete {
      width: 50px;
    }
  }
}
</style>
