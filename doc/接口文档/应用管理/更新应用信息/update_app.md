# 更新应用信息

更新指定的应用信息

- Path： /v1/applications/{id}
- Method：PUT

- 请求路由参数示例：

    ```
    {
        "id": "string",    // 应用ID
    }
    ```
- 请求Body参考示例：

    ```
    {
        "name": "string",
        "state": 0,
        "remark": "string",
        "prompt": "string",
        "model": "string",
        "link": "string",
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isPublic": true,
        "knowledgeBases": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ]
    }
    ```
- 响应参考示例：

    ```
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
        "tempLinkExpired": "2024-03-29T08:00:54.038Z",
        "createdAt": "2024-03-29T08:00:54.038Z",
        "lastUpdateAt": "2024-03-29T08:00:54.038Z",
        "createdBy": 0,
        "updatedBy": 0,
        "isPublic": true
    }
    ```