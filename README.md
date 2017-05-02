# demo-js-wildchat — Wilddog 开源实时聊天应用

Wildchat 是使用 [Wilddog](https://www.wilddog.com/) 一个开源的、实时的聊天应用。它提供完全多用户，多房间，用户搜索，站内短信，聊天邀请等等。

## 在线示例

访问 [wildchat.wilddogapp.com](http://wildchat.wilddogapp.com/)  查看 Wildchat 在线示例.

[![ 在 Wildchat 演示聊天截图](screenshot.png)](http://wildchat.wilddogapp.com/)

## 在线文档

[![ 在 Wildchat 在线文档](docs.png)](http://wildchat.wilddogapp.com/docs/)

## 本地运行
首先确认本机已经安装 [Node.js](http://nodejs.org/) 运行环境，然后执行下列指令：

```
git clone git@github.com:WildDogTeam/demo-js-wildchat.git
cd  demo-js-wildchat
```

安装依赖：

```
npm install bower -g
npm install
bower install
```

编译项目：

```
grunt
```

生成结果：

```
dist/
├── wildchat.css
├── wildchat.js
├── wildchat.min.css
└── wildchat.min.js
```

## 生成本地文档
**本地文档是用jekyll构建的，jekyll需要ruby环境的运行环境。如果没有ruby环境，可以查看上面的在线文档。**

```
cd website/
jekyll s
```
如果遇到
```
Dependency Error: Yikes! It looks like you don't have pygments or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- pygments' If you run into trouble, you can find helpful resources at http://jekyllrb.com/help/!
  Liquid Exception: pygments in docs/index.md
             ERROR: YOUR SITE COULD NOT BE BUILT:
                    ------------------------------------
                    pygments

```
请执行
```bash
gem install pygments.rb  --source http://rubygems.org
```

生成web部署文件：

```
jekyll build
```

生成结果：

```
_site/
├── css
│   ├── pygments-borland.css
│   └── styles.css
├── docs
...

12 directories, 32 file
```

## 下载

Wildchat 工作原理简单，前提是在你的应用程序正确的依赖它，并配置 Wilddog 帐户系统。
为了在你的项目使用 Wildchat， 需要包括 HTML 在内的以下文件：

```HTML
<!-- jQuery -->
<script src='http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js'></script>

<!-- Wilddog -->
<script src='https://cdn.wilddog.com/js/client/current/wilddog.js'></script>

<!-- Wildchat -->
<link rel='stylesheet' href='https://cdn.wilddog.com/app/wildchat/0.6.0/wildchat.min.css' />
<script src='https://cdn.wilddog.com/app/wildchat/0.6.0/wildchat.min.js'></script>
```

使用上面提到的URL可以从Wilddog的CDN上下载到Wildchat的精简版和非精简版。你也可以从Wilddog的Github中下载他们。当然啦，Wilddog可以在官网上下载。


你也可以通过npm 或者 bowr安装Wildchat, 他们会自动下载依赖。

```bash
$ npm install wildchat --save
```

```bash
$ bower install wildchat --save
```
## 示例代码

- 添加用户登录

```HTML
<script>
// Create a new Wilddog reference, and a new instance of the Login client
var config = {
  authDomain: "<appId>.wilddog.com",
  syncURL: "https://<appId>.wilddogio.com",
};
wilddog.initializeApp(config);

var chatRef = wilddog.sync();
var auth = wilddog.auth();
var weiboProvider = new wilddog.auth.WeiboAuthProvider();

function login() {
  wilddog.auth().signInWithPopup(weiboProvider).then(function (user) {
    //  一旦通过验证，Wildchat实例携带我们的用户ID和用户名
    initChat(user);
  }).catch(function (error) {
     console.log(error);
  });
}
</script>

<button onclick='login();'>登录微博</button>
```

- 初始化一个聊天。

```HTML
<script>
function initChat(authData) {
  var chat = new WildchatUI(chatRef, document.getElementById('wildchat-wrapper'));
  chat.setUser(authData.uid, authData.displayName);
}
</script>

<div id='wildchat-wrapper'></div>
```

## 注册Wilddog

Wildchat 需要 Wilddog 来同步和存储数据。您可以在这里[注册](https://www.wilddog.com/my-account/signup)一个免费帐户。

## 更多示例

这里分类汇总了 WildDog平台上的示例程序和开源应用，　链接地址：[https://github.com/WildDogTeam/wilddog-demos](https://github.com/WildDogTeam/wilddog-demos)

## 支持
如果在使用过程中有任何问题，请提 [issue](https://github.com/WildDogTeam/demo-js-wildchat/issues) ，我会在 Github 上给予帮助。

## 相关文档

* [demo-ios-wildchat](https://github.com/WildDogTeam/demo-ios-wildchat) Wildchat iOS 版本
* [Wilddog 概览](https://z.wilddog.com/overview/introduction)
* [JavaScript SDK快速入门](https://z.wilddog.com/web/quickstart)
* [JavaScript SDK API](https://z.wilddog.com/web/api)
* [下载页面](https://www.wilddog.com/download/)
* [Wilddog FAQ](https://z.wilddog.com/questions)
* [jekyll 中文](http://jekyll.bootcss.com/docs/home/) 开源软件，功能是将纯文本转化为静态网站和博客
* [jekyll 中文安装文档](http://jekyll.bootcss.com/docs/installation/)

## License
MIT
http://wilddog.mit-license.org/

## 感谢 Thanks

demo-js-wildchat is built on and with the aid of several  projects. We would like to thank the following projects for helping us achieve our goals:

Open Source:

* [firechat](https://github.com/firebase/firechat) Real-time Chat powered by Firebas
* [JQuery](http://jquery.com) The Write Less, Do More, JavaScript Library
