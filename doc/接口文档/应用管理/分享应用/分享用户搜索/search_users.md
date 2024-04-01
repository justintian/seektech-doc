# 发布用户搜索

根据模糊搜索值搜索相应的用户信息

- Path： /v1/applications/{id}/available-share
- Method：GET

- 请求路由参数示例：

    ```
    {
        "id": "string",    // 应用ID
    }
- 请求查询参考示例：

    ```
    {
        "SearchKey": "string",    // 搜索内容
    }


    ```
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