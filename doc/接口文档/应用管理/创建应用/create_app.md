# 创建应用

创建新的应用

- Path： /v1/applications
- Method：POST

- 请求Body参考示例：

    ```
    {
        "name": "string",    // 应用名称
        "state": 0,    // 应用状态
        "remark": "string",    // 应用描述
        "prompt": "string",    // 提示词
        "model": "string",    // 模型
        "link": "string",    // 对话链接
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",    // 应用ID
        "isPublic": true,    // 是否公共应用
        "knowledgeBases": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ]    // 知识库
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
        "tempLinkExpired": "2024-03-29T07:35:34.957Z",    // 临时链接终止时间
        "createdAt": "2024-03-29T07:35:34.957Z",    // 创建时间
        "lastUpdateAt": "2024-03-29T07:35:34.957Z",    // 最新更新时间
        "createdBy": 0,    // 创建用户ID
        "updatedBy": 0,    // 更新用户ID
        "isPublic": true
    }
    ```