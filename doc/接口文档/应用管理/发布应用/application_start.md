# 发布应用

发布新的应用

- Path： /v1/applications/{id}/start
- Method：POST

- 请求路由参数示例：

    ```
    {
        "id": "string",    // 应用ID
    }
- 请求Body参考示例：

    ```
    {
        "tempLinkExpired": "string",    // 临时链接终止时间
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
        "tempLinkExpired": "2024-03-29T07:40:33.519Z",
        "createdAt": "2024-03-29T07:40:33.519Z",
        "lastUpdateAt": "2024-03-29T07:40:33.519Z",
        "createdBy": 0,
        "updatedBy": 0,
        "isPublic": true
    }
    ```