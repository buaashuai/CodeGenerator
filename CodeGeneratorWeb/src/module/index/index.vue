<template>
  <div class="wrapper" id="app" v-cloak>
    <header class="main-header">
      <a @click="changeNavTitle('about')" href="#/about" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>code</b></span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg">
          <img src="./assets/img/side-nev_head.jpg" style="width: 35px;">
          <b>代码生成器</b>
        </span>
      </a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <div style="float:left;color:#fff;padding:15px 10px;">代码的搬运工</div>
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!--<li><a href="javascript:;" @click="donate"><i class="fa fa-jpy"></i> &nbsp;捐赠作者</a></li>-->
            <!--<li><a href="http://www.renren.io" target="_blank"><i class="fa fa-home"></i> &nbsp;编程教程</a></li>-->
            <!--<li><a href="http://www.renren.io/open/" target="_blank"><i class="fa fa-lock"></i> &nbsp;项目文档</a></li>-->
          </ul>
        </div>
      </nav>
    </header>

    <!-- =============================================== -->

    <!-- Left side column. contains the sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">导航菜单</li>
          <li class="active">
            <a href="javascript:;"><i class="fa fa-cog"></i><span>代码生成器</span><i
              class="fa fa-angle-left pull-right"></i></a>
            <ul class="treeview-menu menu-open" style="display: block;">
              <li @click="changeNavTitle"><a href="#/generator"><i class="fa fa-rocket"></i> 控制台</a></li>
              <li id="default" class="active" @click="changeNavTitle"><a href="#/about"><i class="fa fa-rocket"></i> 关于</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
    <!-- =============================================== -->
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <ol class="breadcrumb" id="nav_title" style="position:static;float:none;">
          <li class="active"><i class="fa fa-home"
                                style="font-size:20px;position:relative;top:2px;left:-3px;"></i> &nbsp; 首页
          </li>
          <li class="active">{{navTitle}}</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content" style="background:#fff;">
        <!--<iframe scrolling="yes" frameborder="0"-->
        <!--style="width:100%;min-height:200px;overflow:visible;background:#fff;" :src="main"></iframe>-->
        <router-view></router-view>
      </section>

      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        Version 1.0.0
      </div>
      Copyright &copy; 2030 <a href="" target="_blank">wangshuai</a> All Rights Reserved
    </footer>

    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>


  </div>
</template>

<script>
  import utils from '@/common/utils'

  export default {
    name: 'app',
    data: function () {
      return {
        navTitle: "关于"
      }
    },
    //  页面加载之前
    created() {
    },
    //  页面加载后,只有页面加载之后才能获取到相应的DOM节点
    mounted() {
      var url = window.location.hash;
      $(".treeview-menu li").removeClass("active");
      var ele = $("a[href='" + url + "']");
      ele.parents("li").addClass("active");
      this.navTitle = ele.text();
    },
    methods: {
      changeNavTitle: function (event) {
        $(".treeview-menu li").removeClass("active");
        var ele;
        if (utils.isString(event)) {
          ele = $("#default");
        } else {
          ele = $(event.target).closest("li");
        }
        this.navTitle = ele.find('a').text();
        ele.addClass("active");
      }

    }

  }
</script>

<style>
  /*@import "../../../node_modules/materialize-css/dist/css/materialize.css";*/

  #app {
  }
</style>
