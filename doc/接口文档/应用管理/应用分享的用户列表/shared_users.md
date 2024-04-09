# 获取应用被分享的用户列表

获取指定应用的所有被分享的用户列表

- Path： /v1/applications/{id}/shared-users

- Method：GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |应用ID |

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|PageNumber  |查询页码 |
|PageSize  |查询分页大小 |

- 响应参考示例：

    ```
    {
        "count": 0,
        "list": [
            {
                "userName": "string", // 用户名
                "userId": 0, // 用户id
                "displayName": "string" // 用户昵称
            }
        ]
    }
    ```