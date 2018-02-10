import requireJS from '@/common/require_js';
import requireCSS from '@/common/require_css';
import requireIMG from '@/common/require_img';

import _ from 'underscore';

function utils() {
}

if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (prefix) {
    return this.slice(0, prefix.length) === prefix;
  };
}

//判断对象是否是字符串
utils.isString = function (obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

// 当前 url 相关变量
var
  webName = '/CodeGeneratorWeb/',// 网站名
  loc = location,
  protocol = loc.protocol,//http:
  host = loc.host,//localhost:8080
  hostname = loc.hostname,//localhost
  port = loc.port,//8080
  path = webName, // 网站的名称
  search = loc.search,
  hash = loc.hash, //  "#/"
  baseUrl = [protocol, '//', host, path].join('');

// console.error(baseUrl);

var ResourceMap = [
  {name: 'bootstrap_css', path: 'static/css/bootstrap.min.css'},
  {name: 'font_awesome', path: 'static/css/font-awesome.min.css'},
  {name: 'AdminLTE_css', path: 'static/css/AdminLTE.min.css'},
  {name: 'AdminLTE_all_skins', path: 'static/css/all-skins.min.css'},
  {name: 'layer_css', path: 'static/plugins/layer/skin/default/layer.css'},
  {name: 'jqgrid_css', path: 'static/plugins/jqgrid/ui.jqgrid-bootstrap.css'},
  {name: 'main_css', path: 'static/css/main.css'},

  {name: 'jquery', path: 'static/libs/jquery.min.js'},
  {name: 'vue', path: 'static/libs/vue.min.js'},
  {name: 'bootstrap_js', path: 'static/libs/bootstrap.min.js'},
  {name: 'fastclick', path: 'static/libs/fastclick.min.js'},
  {name: 'AdminLTE_js', path: 'static/libs/AdminLTE.min.js'},
  {name: 'layer_js', path: 'static/plugins/layer/layer.js'},
  {name: 'underscore', path: 'static/libs/underscore-min.js'},
  {name: 'common', path: 'static/common/common.js'},
  {name: 'jqgrid_locale', path: 'static/plugins/jqgrid/grid.locale-cn.js'},
  {name: 'jqgrid_jquery', path: 'static/plugins/jqgrid/jquery.jqGrid.min.js'},
];

/**
 * 寻找资源
 * @param name
 */
function findResource(name) {
  var re = {};
  _.each(ResourceMap, function (item) {
    if (item.name === name) {
      re = item;
    }
  })
  return re;
}


/**
 * 异步加载指定的资源
 * @param resArr
 */
utils.loadResource = function (resArr, callback, errorCallback, loadFinishCallback) {
  var jsArr = [];
  var cssArr = [];
  var imgArr = [];
  _.each(resArr, function (name) {
    var res = findResource(name);
    // console.log('find:');
    // console.log(res);
    if (String(res.path).endsWith("js")) {
      jsArr.push([baseUrl, res.path].join(''));
    } else if (String(res.path).endsWith("css")) {
      cssArr.push([baseUrl, res.path].join(''));
    } else {
      imgArr.push([baseUrl, res.path].join(''));
    }

  })
  // console.log(jsArr);
  // console.log(cssArr);
  // console.log(imgArr);
  requireJS(jsArr, callback, errorCallback, loadFinishCallback);
  requireCSS(cssArr, callback, errorCallback);
  requireIMG(imgArr, callback, errorCallback);

}

//选择一条记录
utils.getSelectedRow = function () {
  var grid = $("#jqGrid");
  var rowKey = grid.getGridParam("selrow");
  if (!rowKey) {
    alert("请选择一条记录");
    return;
  }

  var selectedIDs = grid.getGridParam("selarrrow");
  if (selectedIDs.length > 1) {
    alert("只能选择一条记录");
    return;
  }

  return selectedIDs[0];
}

//选择多条记录
utils.getSelectedRows = function () {
  var grid = $("#jqGrid");
  var rowKey = grid.getGridParam("selrow");
  if (!rowKey) {
    alert("请选择一条记录");
    return;
  }

  return grid.getGridParam("selarrrow");
}
export default utils;

