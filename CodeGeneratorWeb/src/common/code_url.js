function codeUrl() {
}

var url = 'http://127.0.0.1:8081';// 线上地址
var debugUrl = 'http://localhost:8081';//测试地址
// 获取服务器地址
codeUrl.getUrl = function (res) {
  var debug = process.env.NODE_ENV === 'development';
  // console.log('process.env.NODE_ENV=' + process.env.NODE_ENV)
  var resource = res ? '/' + res : '';
  var re = '';
  if (debug) {
    re = debugUrl + resource;
  } else {
    re = url + resource;
  }
  return re;
}
//资源列表
codeUrl.ResourceMap = {
  generator: 'sys/generator/list',
  code: 'sys/generator/code',
};
export default codeUrl;

