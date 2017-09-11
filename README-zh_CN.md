# DIYBB

一个轻量级的 nodejs + react 论坛

## Environment

1. node 8+
2. redis
3. 一个 `Sequelize` 支持的数据库(推荐 MySQL)
4. Redis

## 如何启动一个开发环境

```
# 启动后台服务
cd server
cp .env.example .env
# 配置 .env
PORT=SERVERPORT npm start

# 启动前台服务
cd ../www
cp .env.example .env
# 配置 .env
PORT=WEBPORT SERVERPORT=SERVERPORT npm start
```

然后, 访问 `http://localhost:WEBPORT` 浏览你的网站吧.

`SERVERPORT` 默认值是 `3000`, `WEBPORT` 默认值是 `3001`.

### server/.env

配置数据库, Session, 上传文件存储路径等.

### www/.env

配置 LOGO 等前端变量

## 如何在生产环境部署

后端服务的启动与开发环境类似. 推荐使用 `[pm2](https://github.com/Unitech/pm2)` 管理你的 node 进程.

切换到 `www` 目录, 执行 `npm run build`, 会在该目录下生成一个 `dist.tar.gz` 压缩包.

在服务器上解压这个文件, 配置 `nginx` 或者其他 web-server, 使其中的页面能被互联网访问

最后一步. 让 web-server 代理 `/api/*`的请求, 通过之前启动的 node 服务区解析它们.

下面是一个可供参考的 nginx 配置文件:

```
server {
  listen     80;
  server_name  www.example.com example.com;

  charset utf-8;

  location / {
    root  /var/www/diybb;
    index  index.html;
    expires      24h;
  }

  location /api/ {
    proxy_pass http://localhost:3000/;
  }
}
```