<template>
  <div>
      <table :class="$style.content__table">
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.value }}</td>
            <span
            :class="$style.content__context_icon"
            @click="showMenu($event.currentTarget, item)"
            ><i class="fas fa-ellipsis-v"></i>
          </span>
          </tr>
        </tbody>
      </table>
      <transition name="fade">
      <context-menu v-if="showContext" :settings="settings"></context-menu>
    </transition>
    </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';

export default {
  components: { ContextMenu },
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showContext: false,
      settings: null,
    };
  },
  methods: {
    showMenu(element, item) {
      if (this.showContext === true) {
        this.$contextMenu.hide();
      } else {
        this.$contextMenu.show({ item, element });
      }
    },
    contextOpen(settings) {
      this.settings = settings;
      this.showContext = true;
    },
    contextClose() {
      this.showContext = false;
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on('show', this.contextOpen);
    this.$contextMenu.EventBus.$on('hide', this.contextClose);
  },
};
</script>

<style lang="scss" module>

.content {
  &__context_icon {
    cursor: pointer;
    display: flex;
    position: relative;
    width: auto;
    align-items: center;
}
  &__table {
    width: 100%;
    margin: 30px auto;
    & tr {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #c2c2c2;
      justify-content: space-between;
      margin: auto;
      & th, td {
      display: flex;
      margin: 15px auto;
      width: 100%;
      font-weight: 600;
      }
    }
  }

.fade {
  &:global(-enter-active) {
    transition: opacity 0.5s;
  }
  &:global(-leave-active) {
    transition: opacity 0.5s;
  }
  &:global(-enter) {
    opacity: 0;
  }
  &:global(-leave-to) {
    opacity: 0;
  }
}
}
</style>
