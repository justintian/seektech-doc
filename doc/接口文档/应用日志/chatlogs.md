# 应用日志

根据筛选信息获取应用的聊天日志

- Path： /v1/chatlogs
- Method：GET

- 请求查询参考示例：

    ```
    {
        "appId": "08dc4f94-3c2b-45f5-848f-2e0cb2372745",    // 应用ID（必填）
        "pageNumber": 1,    // 页码数
        "pageSize": 20,    // 每页条数
        "startTime": 2024-03-22T03:30:30.348Z,    // 筛选起始时间
        "endTime": 2024-03-29T03:30:30.348Z,    // 筛选结束时间
        "UserName": "User",    // 用户名
        "ClientIp": "String",    // 请求IP
        "ClientId": "String",    // 客户标识
    }
    ```
- 响应参考示例：

    ```
    {
    "count": 0,    // 总数
    "list": [
        {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",    // 问题ID
        "question": "string",    // 问题
        "answer": "string",    // 答案
        "clientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",    // 客户标识
        "clientIp": "string",    // 请求IP
        "userId": 0,    // 用户ID
        "userName": "string",    // 用户名
        "chatTime": "2024-03-29T03:15:51.416Z",    // 聊天时间
        "comment": "string",    // 评价
        "tokens": 0    // 回答tokens
        }
    ]
    }
    ```