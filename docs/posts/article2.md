---
title: 模糊查询接口
date: 2024-04-10
category:
  - 接口
tag:
  - api
---
```php
#模糊查询
  public function read($id)
    {
        //获取单一数据
        $data = UserModel::find($id);
        //判断id是否是整型（合不合法）
        if (!Validate::isInteger($id)){
            return $this->create([],'id参数不合法',400);
        }
        if (empty($id)){
            return $this->create([],'查询失败~',200);
        }else{
            return $this->create($data,'查询成功~',200);
        }
    }
```