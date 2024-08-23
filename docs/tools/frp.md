# 内网穿透 frp

[GitHub - fatedier/frp: A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.](https://github.com/fatedier/frp)

SSH 连接到 VPS 之后运行如下命令查看处理器架构，根据架构下载不同版本的 frp  `arch`  
查看结果，如果是“X86_64“即可选择”amd64”，  
运行如下命令，根据架构不同，选择相应版本并进行下载

```
wget <https://github.com/fatedier/frp/releases/download/v0.39.0/frp_0.39.0_linux_amd64.tar.gz>
```

然后解压

```
tar -zxvf frp_0.39.0_linux_amd64.tar.gz
```

文件夹改个名，方便使用

```
`cp -r frp_0.39.0_linux_amd64 frp`
```

把解压出来的文件夹复制到你想要的目录下，为了方便我直接放在用户目录下了，进入该目录

```
cd frp
ls -a
```

我们只需要关注如下几个文件

```
-   frps
-   frps.ini
-   frpc
-   frpc.ini
```

前两个文件（s 结尾代表 server）分别是服务端程序和服务端配置文件，后两个文件（c 结尾代表 client）分别是客户端程序和客户端配置文件。  
因为我们正在配置服务端，可以删除客户端的两个文件  
`rm frpc`  
`rm frpc.ini`

然后修改 frps.ini 文件  
`vim frps.ini`  
这个文件应有如下格式

```
[common]
bind_port = 7000
dashboard_port = 7500
token = 12345678
dashboard_user = admin
dashboard_pwd = admin
vhost_http_port = 10080
vhost_https_port = 10443
```

- bind_port: 表示用于客户端和服务端连接的端口，这个端口号我们之后在配置客户端的时候要用到。
- dashboard_port: 是服务端仪表板的端口，若使用 7500 端口，在配置完成服务启动后可以通过浏览器访问 x.x.x.x:7500（其中 x.x.x.x 为 VPS 的 IP）查看 frp 服务运行信息。
- token: 是用于客户端和服务端连接的口令，请自行设置并记录，稍后会用到。
- “dashboard_user”和“dashboard_pwd”表示打开仪表板页面登录的用户名和密码，自行设置即可。
- “vhost_http_port”和“vhost_https_port”用于反向代理 HTTP 主机时使用，本文不涉及 HTTP 协议，因而照抄或者删除这两条均可。

编辑完成后保存（vim 保存如果不会请自行搜索）。之后我们就可以运行 frps 的服务端了

```
./frps -c frps.ini

# 输出
2019/01/12 15:22:39 [I] [service.go:130] frps tcp listen on 0.0.0.0:7000
2019/01/12 15:22:39 [I] [service.go:172] http service listen on 0.0.0.0:10080
2019/01/12 15:22:39 [I] [service.go:193] https service listen on 0.0.0.0:10443
2019/01/12 15:22:39 [I] [service.go:216] Dashboard listen on 0.0.0.0:7500
2019/01/12 15:22:39 [I] [root.go:210] Start frps success
```

此时访问 x.x.x.x:7500 并使用自己设置的用户名密码登录，即可看到仪表板界面

持续化运行

```
nohup ./frps -c frps.ini &

# 输出如下内容即表示正常运行
nohup: ignoring input and appending output to 'nohup.out'
```

使用 jobs 命令查看后台运行的程序  `jobs`  在结果中我们可以看到 frps 正在后台正常运行

---

同样地，根据客户端设备的情况选择相应的 frp 程序进行下载
[https://github.com/fatedier/frp/releases](https://github.com/fatedier/frp/releases)

假定你下载了“frp_0.22.0_windows_amd64.zip”，将其解压在了 C 盘根目录下，并且将文件夹重命名为“frp”，可以删除其中的 frps 和 frps.ini 文件。  
用文本编辑器打开 frpc.ini，与服务端类似，内容如下。

```
[common]
server_addr = x.x.x.x
server_port = 7000
token = won517574356
[rdp]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 7001
[smb]
type = tcp
local_ip = 127.0.0.1
local_port = 445
remote_port = 7002
```

其中 common 字段下的三项即为服务端的设置。

- “server_addr”为服务端 IP 地址，填入即可。
- “server_port”为服务器端口，填入你设置的端口号即可，如果未改变就是 7000
- “token”是你在服务器上设置的连接口令，原样填入即可。
- “[xxx]”表示一个规则名称，自己定义，便于查询即可。
- “type”表示转发的协议类型，有 TCP 和 UDP 等选项可以选择，如有需要请自行查询 frp 手册。
- “local_port”是本地应用的端口号，按照实际应用工作在本机的端口号填写即可。
- “remote_port”是该条规则在服务端开放的端口号，自己填写并记录即可。

> RDP，即 Remote Desktop 远程桌面，Windows 的 RDP 默认端口是 3389，协议为 TCP，建议使用 frp 远程连接前，在局域网中测试好，能够成功连接后再使用 frp 穿透连接。
 
SMB，即 Windows 文件共享所使用的协议，默认端口号 445，协议 TCP，本条规则可实现远程文件访问。
> 

配置完成 frpc.ini 后，就可以运行 frpc 了

> frpc 程序不能直接双击运行！
> 

使用命令提示符或 Powershell 进入该目录下  
`cd C:\\frp`  
并执行  
`./frpc -c frpc.ini`  
运行 frpc 程序，窗口中输出如下内容表示运行正常。

```
2019/01/12 16:14:56 [I] [service.go:205] login to server success, get run id [2b65b4e58a5917ac], server udp port [0]
2019/01/12 16:14:56 [I] [proxy_manager.go:136] [2b65b4e58a5917ac] proxy added: [rdp smb]
2019/01/12 16:14:56 [I] [control.go:143] [smb] start proxy success
2019/01/12 16:14:56 [I] [control.go:143] [rdp] start proxy success
```

不要关闭命令行窗口，此时可以在局域网外使用相应程序访问 x.x.x.x:xxxx（IP 为 VPS 的 IP，端口为自定义的 remote_port）即可访问到相应服务。

---

frpc 运行时始终有一个命令行窗口运行在前台，影响美观，我们可以使用一个批处理文件来将其运行在后台，而且可以双击执行，每次打开 frpc 不用再自己输命令了。  
在任何一个目录下新建一个文本文件并将其重命名为“frpc.bat”，编辑，粘贴如下内容并保存。

```
@echo off
if "%1" == "h" goto begin
mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
:begin
REM
cd C:\\frp
frpc -c frpc.ini
exit
```

> 将 cd 后的路径更改为你的 frpc 实际存放的目录。
> 

之后直接运行这个 .bat 文件即可启动 frpc 并隐藏窗口（可在任务管理器中退出）。  
至于开机启动，把这个 .bat 文件直接扔进 Windows 的开机启动文件夹就好了 :)  
至此，客户端配置完成，之后就是你自己根据需要在 frpc.ini 后追加规则即可。  
强烈建议你在使用 frp 直接测试内网穿透前，先在局域网内测试好相关功能的正常使用，并配置好可能会影响的 Windows 防火墙等内容，在内网调试通过后再使用 frp 进行内网穿透测试。