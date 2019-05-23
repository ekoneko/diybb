# DIYBB

A lite bbs on nodejs + react

## Environment

1. node 8+
2. redis
3. A `sequelize` database driver (We suggest `mysql2`)

## How to start dev server

```
# start backend-server
cd server
cp .env.example .env
# Confiure your custom .env
PORT=SERVERPORT npm start

# start frontend-server
cd ../www
cp .env.example .env
# Confiure your custom .env
PORT=WEBPORT npm start
```

Then you can find your site on `http://localhost:WEBPORT`.

The default `SERVERPORT` is `3000` and `WEBPORT` is `3001`. You may need to change the `PROXY_HOST` in `.env` file if you set a different server port.

### server/.env

Configure Database, Session and storage directory.

### www/.env

Configure your LOGO text, etc

## How to deploy on production server

You can start backend-server on your production server just like the way on dev server. We suggest to use `[pm2](https://github.com/Unitech/pm2)` to manager your node progress.

Then `cd www && npm run build`. It will make a `dist.tar.gz` file on `www` directory.

Unzip the tar.gz file on your server, and use `nginx` or anything you like to let the page can be visitted on internet.

The last step. You'll proxy requests like `/api/*` to your server. Here is a nginx conf example:

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
