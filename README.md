# practice-html-minify-loader
实现一个简单的html-minify-loader

### 打包

npm run build

### 起服务

如果运行脚本`npm run dev`报错，那么就安装一下http-server

执行命令 `npm install http-server -g`安装全局的http-server http-server 可以帮助我们在某一个目录下起一个http的服务

安装好http-server之后在项目根目录下运行`http-server`

命令行中会提示你所起服务的地址，在浏览器中访问该地址可以查看到我们项目下的所有文件/目录

进入dist目录 代开控制台就可以看到我们压缩后的html代码了 🎉🎁

### 注意：

❗️如果发现修改了一些loader配置 但是重新打包后控制台的输出没有变，那么可能是因为浏览器缓存 可以清空缓存试试
