---
title: 查询接口
date: 2024-04-10
category:
  - 接口
tag:
  - api
---
```php
#查询
  public function index()
    {
        
        //获取数据
        $data = UserModel::select();
        if ($data->isEmpty()) {
            return $this->create([], '数据不存在！', 204);
        } else {
            return $this->create($data, '请求数据成功！', 200);
        }
    }
```

