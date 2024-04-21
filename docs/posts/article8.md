---
title: 创建公共类
date: 2024-04-10
category:
  - 基类（公共）
tag:
  - api
---
```php
#controller下创建Base基类
<?php

namespace app\controller;

use think\Response;

class Base
{
    protected function create($data, string $msg = '', int $code = 200, string $type = 'json'): Response
    {
        $request = [
            //状态码
            'code'=>$code,
            //消息
            'msg'=>$msg,
            //数据
            'data'=>$data
        ];
        //返回api接口
        return Response::create($request,$type);
    }
    public function __call(string $name, array $arguments)
    {
        return $this->create([],'msg',404);//方法错误
    }
}
```
