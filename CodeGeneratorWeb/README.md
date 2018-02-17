# CodeGeneratorWeb

> 代码生成器的前端工程


**欢迎技术交流 909104292@qq.com**

## Build Setup

``` bash
# 安装依赖
npm install

# 开发环境项目访问地址 localhost:8080
npm run dev

# 生产环境资源打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 工程说明

``` bash
本web工程支持vue多页面自动化打包，以及静态资源按需打包
build: webpack资源打包相关文件
config: webpack的开发环境和生产环境配置文件
dist: 打包后的资源存放目录
src: 源代码目录
 -common: 工具相关的js文件
 -module: 页面目录，其中的每个文件夹都代表一个单独的页面，每个文件夹中包含的html文件表示该页面的入口文件，执行打包脚本的时候会自动扫描该文件夹中的每个目录
static: 静态资源目录
 -common: 全局静态文件，其中该目录下的文件在打包的时候如果需要被压缩，请在 build/webpack.prod.common.js中进行配置
 -css
 -fonts
 -img
 -lib: 项目依赖的js类库
 -plugins: 插件库
```


