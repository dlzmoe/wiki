# wewe-rss 部署

Github 仓库：[https://github.com/cooderl/wewe-rss/](https://github.com/cooderl/wewe-rss/) ，部署问题也可以提 issues。

下面是我个人部署的一些流程，仅供参考。

在服务器 /data/ 目录下新建 rss 文件夹，新建 docker-compose.yml 文件。

xx.xx.xx.xx 是你服务器的 ip。

```yaml
# /data/rss/docker-compose.yml
version: '3.9'

services:
  server:
    image: cooderl/wewe-rss-server:latest
    ports:
      - 4000:4000
    depends_on:
      db:
        condition: service_healthy
    environment:
      # 数据库连接地址
      - DATABASE_URL=mysql://root:123456@db:3306/wewe-rss?schema=public&connect_timeout=30&pool_timeout=30&socket_timeout=30
      # 服务接口请求授权码
      - AUTH_CODE=123567
      # 自动提取全文内容
      - FEED_MODE=fulltext
      # 服务接口请求限制，每分钟请求次数
      - MAX_REQUEST_PER_MINUTE=60
      # 外网访问时，需设置为服务器的公网 IP 或者域名地址
      - SERVER_ORIGIN_URL=http://xx.xx.xx.xx:4000/

  web:
    image: cooderl/wewe-rss-web:latest
    ports:
      - 3000:3000
    environment:
      # 同 SERVER_ORIGIN_URL
      - NEXT_PUBLIC_SERVER_ORIGIN_URL=http://xx.xx.xx.xx:4000/

networks:
  wewe-rss:
```

运行 docker 指令

```yaml
docker-compose up -d
```

在服务器运营商处给服务器防火墙放行端口 3000, 3307, 4000。
