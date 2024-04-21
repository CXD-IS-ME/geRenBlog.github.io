---
title: 日志处理 
date: 2024-04-10
category:
  - 处理
tag:
  - 处理
archive: true
---
```php
在 config 目录下的 log.php 配置文件，用于设置日志信息；
系统提供了不同日志级别，默认 info 级别，从低到高排列如下：
debug/info/notice/warning/error/critical/alert/emergency/sql；
使用 record()方法，记录一条测试日志；
Log::record('测试日志！');
record()方法不是实时记录，需要等待程序完毕后决定是否写入日志；
如果在写入方法后添加 close()关闭写入，那么 record()方法则不写入；
Log::close();
系统还提供了一个 write()方法，进行时时写入，不理会其它限制；
Log::write('测试日志信息', 'error');
 系统发生异常后，会自动写入 error 日志，如果你想手动也可以；
try {
echo 0/0;
} catch (ErrorException $e)
{
echo '发生错误：'.$e->getMessage();
Log::record('被除数不得为零', 'error');
}
```


