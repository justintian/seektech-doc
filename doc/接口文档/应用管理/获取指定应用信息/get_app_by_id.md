# 获取指定应用信息

获取指定应用ID的信息

- Path： /v1/applications/{id}
- Method：GET

- 路由路由参考示例：

    ```
    {
        "id": "string",    // 应用ID
    }
    ```

- 响应参考示例：

    ```
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "remark": "string",
        "embeddingMethod": "string",
        "tags": [
            "string"
        ],
        "appNum": 0,
        "fileNum": 0,
        "createdAt": "2024-03-29T08:12:38.890Z",
        "lastUpdateAt": "2024-03-29T08:12:38.890Z",
        "createdBy": 0,
        "updatedBy": 0,
        "isPublic": true,
        "allowCopy": true
    }
    ```
