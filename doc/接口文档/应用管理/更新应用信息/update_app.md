# 更新应用信息

更新指定的应用信息

- Path： /v1/applications/{id}

- Method：PUT

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |应用ID |

- 请求Body参考示例：

    ```
    {
        "name": "string", // 应用名称
        "state": 0, // 应用状态, 0:未发布 1:已发布
        "remark": "string", // 应用描述
        "prompt": "string", // 提示词
        "model": "string", // 模型
        "isPublic": true, // 是否公共应用
        "knowledgeBases": [ // 知识库列表
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ]
    }
    ```

- 响应参考示例：

    ```
    {
        "state": 0, // 应用状态, 0:未发布 1:已发布
        "remark": "string", // 应用描述
        "prompt": "string", // 提示词
        "model": "string", // 模型
        "link": "string", // 对话链接
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", // 应用id
        "name": "string", // 应用名称
        "knowledgeBases": [ // 知识库列表
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ],
        "tempLinkExpired": "2024-03-29T08:00:54.038Z", // 匿名链接终止时间
        "createdAt": "2024-03-29T08:00:54.038Z",
        "lastUpdateAt": "2024-03-29T08:00:54.038Z",
        "createdBy": 0,
        "updatedBy": 0,
        "isPublic": true // 是否公共应用
    }
    ```