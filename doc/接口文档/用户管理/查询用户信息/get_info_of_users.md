## 获取用户列表
- Path：/v1/users

- Method：GET

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|Search  |查询关键字, 支持用户名, 用户昵称进行模糊筛选 |
|Phone  |用户手机号 |
|Email  |用户邮箱 |
|DescendingOrder  |根据创建时间升序或降序, true: 降序, false: 升序 |
|PageSize  |查询分页大小 |
|PageIndex  |查询页码, 0开始 |

- 响应参考示例：

    ```
    {
        "count":0,    // 用户数量
        "list":[
                {
                "id":0, // 用户的id
                "userName":"this is a string", // 用户名称
                "displayName":"this is a string",    // 用户昵称
                "isDisable":boolean,  // 是否被禁用
                "email":"this is a string",  // 用户邮箱
                "phoneNumber":"this is a string",  // 用户手机号
                "lastLoginedAt":"2024-03-31T05:30:18.487Z"    // 上次登录时间
                "lastModifiedAt":"2024-03-31T05:30:18.487Z"    // 上次修改时间
                "createdAt":"2024-03-31T05:30:18.487Z"    // 创建时间
                }
            ]
    }    
    ``` 