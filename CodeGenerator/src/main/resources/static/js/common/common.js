if (!window.PM) {
    window.PM = {};
}
window.PM.DEBUG = true;

/**
 * name资源名，product是部署时候的资源路径，develop是开发时候的资源路径
 * @type {*[]}
 */
var ResourceMap = [
    {name: 'router', product: 'dest/router.js', develop: 'js/common/router.js'}, //页面路由
    {name: 'common', product: 'dest/common.js', develop: 'js/common/common.js'}, //公共js
    {name: 'index', product: 'dest/index.js', develop: 'js/sys/index.js'}, //主页面的业务逻辑
    {name: 'generator', product: 'dest/generator.js', develop: 'js/sys/generator.js'}, //代码生成页面的业务逻辑
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
 * 加载指定的资源
 * @param resArr
 */
var loadResource = function (resArr) {
    var jsArr = [];
    _.each(resArr, function (name) {
        var res = findResource(name);
        if (window.PM.DEBUG) {
            jsArr.push(res.develop);
        } else {
            jsArr.push(res.product);
        }
    })
    window.PM.requireJS(jsArr);
}

window.PM.loadResource = loadResource;

//jqGrid的配置信息
$.jgrid.defaults.width = 1000;
$.jgrid.defaults.responsive = true;
$.jgrid.defaults.styleUI = 'Bootstrap';

//工具集合Tools
window.T = {};

// 获取请求参数
// 使用示例
// location.href = http://localhost:8080/index.html?id=123
// T.p('id') --> 123;
var url = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
T.p = url;

//全局配置
$.ajaxSetup({
    dataType: "json",
    contentType: "application/json",
    cache: false
});

function hasPermission(permission) {
    if (window.parent.permissions.indexOf(permission) > -1) {
        return true;
    } else {
        return false;
    }
}

//重写alert
window.alert = function (msg, callback) {
    parent.layer.alert(msg, function (index) {
        parent.layer.close(index);
        if (typeof(callback) === "function") {
            callback("ok");
        }
    });
}

//重写confirm式样框
window.confirm = function (msg, callback) {
    parent.layer.confirm(msg, {btn: ['确定', '取消']},
        function () {//确定事件
            if (typeof(callback) === "function") {
                callback("ok");
            }
        });
}

//选择一条记录
function getSelectedRow() {
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
function getSelectedRows() {
    var grid = $("#jqGrid");
    var rowKey = grid.getGridParam("selrow");
    if (!rowKey) {
        alert("请选择一条记录");
        return;
    }

    return grid.getGridParam("selarrrow");
}