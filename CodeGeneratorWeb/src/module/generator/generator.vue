<template>
  <div id="app">
    <div class="grid-btn">
      <div class="form-group col-sm-2">
        <input type="text" class="form-control" v-model="q.tableName" @keyup.enter="query" placeholder="表名">
      </div>
      <a class="btn btn-default" @click="query">查询</a>
      <a class="btn btn-primary" @click="generator"><i class="fa fa-file-code-o"></i>&nbsp;生成代码</a>
    </div>
    <table id="jqGrid"></table>
    <div id="jqGridPager"></div>
  </div>
</template>
<style>
  #app {
  }
</style>
<script>
  import utils from '@/common/utils'
  import codeUrl from '@/common/code_url'

  export default {
    name: 'app',
    data: function () {
      return {
        q: {
          tableName: ""
        }
      }
    },
    methods: {
      query: function () {
        // console.log("查询");
        $("#jqGrid").jqGrid('setGridParam', {
          postData: {'tableName': this.q.tableName},
          page: 1
        }).trigger("reloadGrid");
      },
      generator: function () {
        // console.log("生成");
        var tableNames = utils.getSelectedRows();
        if (tableNames == null) {
          return;
        }
        location.href = codeUrl.getUrl(codeUrl.ResourceMap.code) + "?tables=" + JSON.stringify(tableNames);
      },
      initTable: function () {
        // console.log('!!!!!!!!');
        $("#jqGrid").jqGrid({
          url: codeUrl.getUrl(codeUrl.ResourceMap.generator),
          datatype: "json",
          colModel: [
            {label: '表名', name: 'tableName', width: 100, key: true},
            {label: 'Engine', name: 'engine', width: 70},
            {label: '表备注', name: 'tableComment', width: 100},
            {label: '创建时间', name: 'createTime', width: 100}
          ],
          viewrecords: true,
          height: 385,
          rowNum: 10,
          rowList: [10, 30, 50, 100, 200],
          rownumbers: true,
          rownumWidth: 25,
          autowidth: true,
          multiselect: true,
          pager: "#jqGridPager",
          jsonReader: {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
          },
          prmNames: {
            page: "page",
            rows: "limit",
            order: "order"
          },
          gridComplete: function () {
            //隐藏grid底部滚动条
            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({"overflow-x": "hidden"});
          }
        });
      }
    },
    //  页面加载之前
    created() {

    },
    //  页面加载后
    mounted() {
      this.initTable();
      this.$on('table_init_event', () => {
        console.log('收到广播');
      });
    }
  }
</script>
