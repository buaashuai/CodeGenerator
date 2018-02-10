<template>
  <iframe v-bind:src="getPagePath" style="width:100%;min-height:200px;overflow:visible;background:#fff;" scrolling="yes"
          frameborder="0" id="external-frame"></iframe>
</template>

<script>
  export default {
    name: 'RouterDispatch',
    data() {
      return {
        //缓存页面路径
        page_path: 'about.html',
        //页面容器,用于存放需要跳转页面的路径
        page_list: {
          'index': 'index.html',
          'about': 'about.html',
          'generator': 'generator.html',
        }
      }
    },
    computed: {
      //获取页面路径
      getPagePath() {
        if (this.page_list[this.$route.params.page_path]) {
          this.page_path = this.page_list[this.$route.params.page_path]
        }
        else if (this.$route.params.page_path == '!') {
          return this.page_path
        }
        else {
          this.page_path = this.page_list['about']
        }
        return this.page_path
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
    padding: 3px;
  }
</style>
