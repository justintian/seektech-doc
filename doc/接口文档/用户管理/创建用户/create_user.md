## 创建用户
- Path：/v1/users
- Method：POST
- 请求Body参考示例：

    ```
    {
        "userName":"this is a string",  //用户名
        "password":"this is a string",  //密码
        "displayName":"this is a string",  //用户昵称
        "email":"this is a string",  //用户邮箱地址
        "clientId":"this is a string",  //         ****
        "companyId":"this is a guid string" ,  //公司id
    }    
    ```
- 响应参考示例：

    ```
    {
        "id":"this is a integer",    // 用户的id
        "userName":"this is a string", //用户名称
        "displayName":"this is a string",    // 用户昵称
        "isDisable":boolean,  //是否被禁用
        "email":"this is a string",  //用户邮箱
        "phoneNumber":"this is a string",  //用户手机号
        "lastLoginedAt":"2024-03-31T05:30:18.487Z"    //上次登录时间
        "lastModifiedAt":"2024-03-31T05:30:18.487Z"    //上次修改时间
        "createdAt":"2024-03-31T05:30:18.487Z"    //创建时间
        "companyId": "this is a guid string", //公司id
    }    
    ```