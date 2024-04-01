# 获取共享应用的用户列表

获取指定共享应用的所有用户列表

- Path： /v1/applications/{id}/shared-users
- Method：GET

- 请求路由参数示例：

    ```
    {
        "id": "string",    // 应用ID
    }
- 请求查询参数示例：

    ```
    {
        "PageSize": 20,    // 每页条数
        "PageNumber": 1,    // 页码
    }

- 响应参考示例：

    ```
    {
        "count": 0,
        "list": [
            {
            "userName": "string",
            "userId": 0,
            "displayName": "string"
            }
        ]
    }
    ```