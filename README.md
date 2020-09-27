# react-node-template
react和node的模板工程


### 目录
#### 1.server
服务器代码，由[express-generator](https://www.expressjs.com.cn/starter/generator.html)生成

#### 2.views
前端代码，由[create-react-app](https://create-react-app.dev/)生成


### 开发
1.启动前端：执行views目录下的`start`命令，默认监听3000端口
2.启动服务端：执行server目录下的`start`命令，默认监听3001端口，可通过启动命令配置端口
3.前端可以直接调用3001端口的以`/api`开头的接口，已做了[代理配置](https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually)，可以在views/src/setupProxy.js文件中扩充


### 部署
第一步：执行views目录下的`build`命令

第二步：将当前工程重新部署到node环境

第三步：启动server目录下的`start`命令

