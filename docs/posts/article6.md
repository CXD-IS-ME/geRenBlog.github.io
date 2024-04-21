---
title: 规则验证器
date: 2024-04-10
category:
  - 验证器
tag:
  - api
---
```php
#创建验证器--在根目录下创建validate（在此目录下创建user类）
<?php
declare (strict_types = 1);

namespace app\validate;

use think\Validate;

class User extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名' =>  ['规则1','规则2'...]
     *
     * @var array
     */
    protected $rule = [
        'email'=>'require|unique:user',
        'login_pwd|密码'=>'require|min:6',
        'login_act|账号'=>'require|unique:user',
        'name|姓名'=>'require'
    ];

    /**
     * 定义错误信息
     * 格式：'字段名.规则名' =>  '错误信息'
     *
     * @var array
     */
    protected $message = [];
    protected $scene = [
        'edit'=>['email']
    ];
}

