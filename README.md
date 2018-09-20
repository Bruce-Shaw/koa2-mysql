# koa2-mysql

开发工具为vsCode，数据库为mysql8.0.12，使用koa2+mysql-pro开发模式，使用nodemon热启动

## 配置

### 总体目录结构
* `config` 数据库配置文件
* `dao` 数据层，对数据库进行操作，并返回结果
* `public` 目录存放初始化页面及相关静态文件
* `routes` 路由器控制当前hash对应接口
* `service` 业务层，调用相应数据层
* `app.js` 该文件为整个app的入口文件，引入路由器

### 规范
* 所有依赖均使用截止到2018/09/19的最新版本

## 命令

```
$ npm install 安装其他模块
$ npm start 开发环境启动项目，已开启热更新，通过nodemone启动项目，注释了app.js最后一行
$ npm start2 开发环境启动项目，已开启热更新，若需关闭修改webpack.dev.js中相应的注释处即可
$ npm run build 构建项目

```
访问 http://localhost:3000