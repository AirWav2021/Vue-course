export default {
  install(Vue) {
    if (this.installed) return;
    this.installed = true;

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$modal = {
      EventBus: new Vue(),
      show(settings) {
        console.log('show-EventBus');
        this.EventBus.$emit('show', settings);
      },
      hide() {
        console.log('hide-EventBus');
        this.EventBus.$emit('hide');
      },
    };
  },
};
