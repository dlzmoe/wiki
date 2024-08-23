# docker 指令

[https://www.runoob.com/docker/docker-container-usage.html](https://www.runoob.com/docker/docker-container-usage.html)

一些 Docker Compose 常用命令

```
# 运行 docker-compose 文件
docker-compose up -d
```

```
docker-compose restart  # 重启容器
docker-compose stop     # 暂停容器
docker-compose down     # 删除容器
docker-compose pull     # 更新镜像
docker-compose exec artalk bash # 进入容器
```

```
# 查看所有容器
docker ps
docker images
```

```
# 删除置顶容器
docker rm -f <containerid>
docker rm -f 8370df6822d9
```

```
# 重启容器
docker-compose restart
```