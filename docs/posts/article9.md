---
title: 验证器
date: 2024-04-09
category:
  - 验证器
tag:
  - 扩展
---
```php
#注解验证器（下载）
composer require topthink/think-annotation
#然后可以直接在控制器类的方法注释中定义，例如：(可以利用IDE生成规范的注释。如果你使用PHPStorm的话，建议安装PHP Annotations插件：https://plugins.jetbrains.com/plugin/7320-php-annotations)
<?php
namespace app\controller;

use think\annotation\Route;
use think\annotation\route\Validate; 
use app\validate\IndexValidate; 

class Index
{
    /**
     * @Validate(IndexValidate::class,scene="create",batch="true")
     * @return mixed
     * @Route("hello")
     */
	public function hello()
    {
    	return 'helloworld';
    }
}

然后需要声明上面引用验证器类，例如：

<?php

namespace app\validate;

use think\Validate;

class IndexValidate extends Validate
{
    protected $rule = [
        'name' => 'require'
    ];

   protected $message = [
       'name.require' => '姓名不能为空',
   ];

    protected $scene = [
        'create' => ['name'],
    ];
}
