---
title: 修改接口
date: 2024-04-10
category:
  - 接口
tag:
  - api
---
```php
#修改
  public function update(Request $request)
    {
        
        //获取数据
        $data = $request->param();
        //验证数据
        try {
        //验证
            validate(UserValidate::class)->scene('edit')->check($data);
        }catch (ValidateException $exception){
        return $this->create([],$exception->getError(),400);
        }
        //修改数据写入
        $editedObj = UserModel::update($data)->getData('id');
        echo $editedObj;
        if (empty($editedObj)){
            return $this->create([],'修改失败~~',400);
        }else{
            return $this->create($editedObj,'修改成功~~',200);
        }
    }
```
