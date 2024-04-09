# 查询可分享的用户

根据模糊搜索值搜索相应的用户信息

- Path： /v1/applications/{id}/available-share

- Method：GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |应用id |

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|SearchKey  |查询关键字, 支持用户名和用户昵称模糊搜索 |

- 响应参考示例：

    ```
    [
        {
            "userName": "string",    // 用户名
            "userId": 0,    // 用户ID
            "displayName": "string"    // 用户昵称
        }
    ]
    ```