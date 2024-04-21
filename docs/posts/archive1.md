---
title: 异常处理 
date: 2024-04-10
category:
  - 处理
tag:
  - 处理
archive: true
---
```php
如果你想更改异常页面的样式、布局之类的，可以修改这个页面：
vendor/topthink/framework/src/tpl/think_exception.tpl
3. 如果你想要直接替换掉异常页面，换成别的，可以在 app.php 中进行设置：
// 异常页面的模板文件
'exception_tmpl' => app()->getThinkPath() . 'tpl/think_exception.tpl', 4. 系统的异常抛出是自动进行的，并不需要你手动抛出，但也支持手动；
throw new Exception('异常消息', 10086);
5. 我们可以使用 try...catch 对可能发生的异常进行手动捕获或抛出；
try {
echo 0/0;
} catch (ErrorException $e)
{
echo '发生错误：'.$e->getMessage();
}
6. 我们可以抛出 HTTP 异常，所谓 HTTP 异常比如 404 错误，500 错误之类；
throw new HttpException(404, '页面不存在');
7. 系统提供了一个助手函数 abort()方法简化 HTTP 异常抛出；
abort(404, '页面不存在');
8. 如果系统关闭了调试模式，进入部署环境下，可以设置 HTTP 错误页面，比如 404；
'http_exception_template' => [
// 定义 404 错误的模板文件地址
404 => \think\facade\App::getAppPath() . '404.html',
]
```