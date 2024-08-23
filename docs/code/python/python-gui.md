# 使用 python 写一个 gui 桌面应用

使用 python 写一个 gui 桌面应用。

先安装 pyinstaller 

```shell
pip install pyinstaller
```

执行指令，可以生成 dist 和 build 文件，可执行的 exe 就在 dist 目录下。

```shell
pyinstaller --onefile 脚本文件名.py
```

生成 gui 面板。

```shell
pyinstaller --onefile --noconsole 脚本文件名.py
```

给 exe 文件设置 ico 图标，必须是 ico 格式。

```shell
pyinstaller --onefile --noconsole --icon=同目录图标.ico 脚本文件名.py
```