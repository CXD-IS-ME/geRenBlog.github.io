---
title: 删除接口
date: 2024-04-10
category:
  - 接口
tag:
  - api
---
```php
#删除
public function delete($id)
    {
        //判断id是否是整型（合不合法）
        if (!Validate::isInteger($id)){
            return $this->create([],'id参数不合法',400);
        }
        //删除数据
        try {
            UserModel::find($id)->delete();
            return $this->create($id,'删除成功~',200);
        }catch (\Error $e){
            return $this->create([],'删除失败~',400);
        }
    }
```
