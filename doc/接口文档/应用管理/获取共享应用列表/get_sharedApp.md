# 获取共享应用列表

获取所有共享应用的信息

- Path： /v1/applications/share-apps
- Method：GET

- 请求查询参数示例：

    ```
    {
        "UserId": "string",    // 用户ID
        "State": 1,    // 应用状态
        "PageSize": 20,    // 每页条数
        "PageNumber": 1,    // 页码
    }

- 响应参考示例：

    ```
    {
        "count": 0,
        "list": [
            {
            "state": 0,
            "remark": "string",
            "prompt": "string",
            "model": "string",
            "link": "string",
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string",
            "knowledgeBases": [
                "3fa85f64-5717-4562-b3fc-2c963f66afa6"
            ],
            "tempLinkExpired": "2024-03-29T08:07:21.926Z",
            "createdAt": "2024-03-29T08:07:21.926Z",
            "lastUpdateAt": "2024-03-29T08:07:21.926Z",
            "createdBy": 0,
            "updatedBy": 0,
            "isPublic": true
            }
        ]
    }
    ```