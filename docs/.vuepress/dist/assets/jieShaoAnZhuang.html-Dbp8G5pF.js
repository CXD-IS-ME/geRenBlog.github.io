import{_ as n,o as e,c as i,a as s}from"./app-DMZOAs2V.js";const a={},t=s(`<p><strong>01. ThinkPHP6.x</strong> <strong>入门开启</strong></p><p><strong>一．框架简介</strong></p><div class="language-TEXT line-numbers-mode" data-ext="TEXT" data-title="TEXT"><pre class="language-TEXT"><code>ThinkPHP6.0 发布于 2019 年 10 月 24 日；
TP 框架是免费开源的、轻量级的、简单快速且敏捷的 PHP 框架；
你可以免费使用 TP 框架，甚至可以将你的项目商用；
ThinkPHP6.0 要求 PHP 版本是 7.1+以上，官方推荐 7.3；
如果你的生产环境是 5.6 ~ 7.0 之间，推荐 TP5.1；
如果你是自己的 vps 服务器，可以安装较高的 PHP 版本 7.1+，推荐 TP6.x；
集成环境这里采用 windows 结合 wamp，其它系统或环境满足版本要求即可;
除了 PHP7.1+，还需要开启 PDO 数据库引擎和 MBstring 字符串扩展；
我在以往的 wamp 版本上添加了一个 PHP7.3.11；（PHP7.4 是 RC）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>二．安装步骤</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>官网不提供软件包下载，采用 Composer 下载和更新；
这里只演示 windows 安装，Mac 和 Linux 方法参考一下手册；
在 Windows 中，你需要下载并运行 Composer-Setup.exe；
打开 windows 下的运行：cmd，然后运行如下代码（或 Mac 和 Linux 控制台）：
composer config -g repo.packagist composer https://packagist.phpcomposer.com 
如果上述地址产生阻碍，可以使用国内的：
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
现在，先启用服务器环境，测试本地 Web 环境是否正常；
如果你是首次安装 ThinkPHP6.0，那么先从 cmd 中切换到你要加载的目录；
composer create-project topthink/think tp6
如果要更新你的项目版本，直接进入项目根目录，然后直接如下代码：
composer update topthink/framework
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>三．测试运行</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在 cmd 命令行的项目目录中，输入运行命令；
php think run
在浏览器输入：http://127.0.0.1:8000 或 http://localhost:8000
如果 80 端口没有被占用的情况下，使用如下命令直接访问 http://localhost；
php think run -p 80
如此，ThinkPHP6.0 已经帮我们将域名自动部署到 public 里了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[t];function l(r,o){return e(),i("div",null,d)}const v=n(a,[["render",l],["__file","jieShaoAnZhuang.html.vue"]]),p=JSON.parse('{"path":"/posts/jieShaoAnZhuang.html","title":"介绍及安装","lang":"en-US","frontmatter":{"title":"介绍及安装","date":"2024-03-28T00:00:00.000Z"},"headers":[],"git":{},"filePathRelative":"posts/jieShaoAnZhuang.md","excerpt":"<p><strong>01. ThinkPHP6.x</strong> <strong>入门开启</strong></p>\\n<p><strong>一．框架简介</strong></p>\\n<div class=\\"language-TEXT\\" data-ext=\\"TEXT\\" data-title=\\"TEXT\\"><pre class=\\"language-TEXT\\"><code>ThinkPHP6.0 发布于 2019 年 10 月 24 日；\\nTP 框架是免费开源的、轻量级的、简单快速且敏捷的 PHP 框架；\\n你可以免费使用 TP 框架，甚至可以将你的项目商用；\\nThinkPHP6.0 要求 PHP 版本是 7.1+以上，官方推荐 7.3；\\n如果你的生产环境是 5.6 ~ 7.0 之间，推荐 TP5.1；\\n如果你是自己的 vps 服务器，可以安装较高的 PHP 版本 7.1+，推荐 TP6.x；\\n集成环境这里采用 windows 结合 wamp，其它系统或环境满足版本要求即可;\\n除了 PHP7.1+，还需要开启 PDO 数据库引擎和 MBstring 字符串扩展；\\n我在以往的 wamp 版本上添加了一个 PHP7.3.11；（PHP7.4 是 RC）\\n</code></pre></div>"}');export{v as comp,p as data};
