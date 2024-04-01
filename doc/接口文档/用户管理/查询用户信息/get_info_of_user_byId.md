## 获取指定id用户的信息
- Path：/v1/users/{id}/info
- Method：GET
- 请求路由参考示例：
    ```
    {
        "id":"this is an integer",    // 用户id
    }
    ```
- 响应参考示例：

    ```
    {
        "id":"this is an integer",    // 用户的id
        "userName":"this is a string", //用户名称
        "displayName":"this is a string",    // 用户昵称
        "isDisable":"this is a string",  //是否被禁用
        "email":"this is a string",  //用户邮箱
        "phoneNumber":true,  //用户手机号
        "lastLoginedAt":"2024-03-31T05:30:18.487Z"    //上次登录时间
        "lastModifiedAt":"2024-03-31T05:30:18.487Z"    //上次修改时间
        "createdAt":"2024-03-31T05:30:18.487Z"    //创建时间
        "companyId": "this is a guid string", //公司id
        "roles": [                               //用户所属角色列表
                  {
                      "id": "this is an integer",      //角色id
                      "name": "this is a string",              //角色名
                      "code": "this is a string",              //角色编码
                      "description": "this is a string",       //角色描述
                      "status": 0 or 1                   //0:禁用，1:启用
                      "isCustom": true,              // 是否为自定义角色
                      "companyId": "this is a guid string"       //公司id
                  }
            ],
        "actions": [                               //用户权限列表
                    {
                        "id": "this is an integer",     //角色id
                        "name": "string",              //角色名
                        "type": 0,                     //0：接口功能，1:菜单功能
                        "description": "string"        //角色描述
                    }
                ]
    }    
    ``` 