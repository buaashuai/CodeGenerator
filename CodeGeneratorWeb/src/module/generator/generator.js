import App from './generator.vue'
import Vue from 'vue'
import utils from '@/common/utils'

// utils.loadResource(['common']);

var vm = new Vue({
  el: '#app',
  template: '<App ref="table"/>',
  components: {App},
  //  页面加载后
  mounted() {
    this.$refs.table.$emit('table_init_event');
  }
});


