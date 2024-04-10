# 修改密码
修改密码

- Path：/v1/users/{id}/updatepassword

- Method：POST

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |用户id |
  
- 请求Body参考示例：

    ```
    {
    "originalPassword":"this is a string",  // 原密码
    "newPassword":"this is a string",  // 新密码
    "confirmPassword":"this is a string",  // 确认新密码
    }    
    ```
  
- 响应参考示例：

    ```
    {
        "id":0,    // 用户的id
        "userName":"this is a string", // 用户名称
        "displayName":"this is a string",    // 用户昵称
        "isDisable":boolean,  // 是否被禁用
        "email":"this is a string",  // 用户邮箱
        "phoneNumber":"this is a string",  // 用户手机号
        "lastLoginedAt":"2024-03-31T05:30:18.487Z"    // 上次登录时间
        "lastModifiedAt":"2024-03-31T05:30:18.487Z"    // 上次修改时间
        "createdAt":"2024-03-31T05:30:18.487Z"    // 创建时间
    }    
    ```