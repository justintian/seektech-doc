# 获取共享应用列表

获取当前用户被分享的应用列表

- Path： /v1/applications/share-apps

- Method：GET

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|UserId  |用户id |
|State  |应用状态, 0:未发布 1:已发布 |
|PageSize  |查询分页大小 |
|PageNumber  |查询页码 |

- 响应参考示例：

    ```
    {
        "count": 0,
        "list": [
            {
                "state": 0, // 应用状态, 0:未发布 1:已发布
                "remark": "string", // 应用描述
                "prompt": "string", // 提示词
                "model": "string", // 模型
                "link": "string", // 对话链接
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", // 应用ID
                "name": "string",
                "knowledgeBases": [ // 知识库列表
                    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                ],
                "tempLinkExpired": "2024-03-29T07:35:34.957Z",    // 匿名链接终止时间
                "createdAt": "2024-03-29T07:35:34.957Z",    // 创建时间
                "lastUpdateAt": "2024-03-29T07:35:34.957Z",    // 最新更新时间
                "createdBy": 0,    // 创建用户ID
                "updatedBy": 0,    // 更新用户ID
                "isPublic": true // 是否公共应用
            }
        ]
    }
    ```