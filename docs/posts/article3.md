---
title: 新增接口
date: 2024-04-10
category:
  - 接口
tag:
  - api
---
```php
#新增
public function add(Request $request)
    {
        //获取表单所填数据
        $data = $request->param();
        //验证返回
        try {
            //验证
            validate(UserValidate::class)->check($data);
        } catch (ValidateException $exception) {
            return $this->create([], $exception->getError(), 400);
        }
        //密码加密
        $data['login_pwd'] = sha1($data['login_pwd']);
        //写入数据并返回id
        $id = UserModel::create($data)->getData('id');
        if (empty($id)) {
            return $this->create([], '添加失败', 400);
        } else {
            return $this->create($id, '添加成功', 200);
        }
    }
```