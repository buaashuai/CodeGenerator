**项目说明** 
- CodeGenerator可在线生成entity、xml、dao、service、html、js、sql代码
<br> 

 **开发环境部署**
- 通过git下载源码
- 修改application.yml，更新MySQL账号和密码、数据库名称
- Eclipse、IDEA运行CodeApplication.java，则可启动项目
- 项目访问路径：http://localhost

 **生产环境部署**

执行 Build Artifacts, 即可生产jar文件，直接放在一个安装了Linux的机器上，执行如下命令即可：
``` bash

nohup java -jar renren-fast.jar --spring.profiles.active=pro > re nren.log &

```