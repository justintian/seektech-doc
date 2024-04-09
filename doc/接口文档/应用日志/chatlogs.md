# 获取应用聊天日志

根据筛选信息获取应用的聊天日志

- Path： /v1/chatlogs

- Method：GET

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|appId  |应用ID（必填） |
|startTime  |筛选起始时间 |
|endTime  |筛选结束时间 |
|UserName  |用户名 |
|ClientIp  |请求IP |
|ClientId  |客户端标识 |
|PageNumber  |查询页码 |
|PageSize  |查询分页大小 |

- 响应参考示例：

    ```
    {
    "count": 0,    // 总数
    "list": [
        {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",    // 问题ID
        "question": "string",    // 问题
        "answer": "string",    // 答案
        "clientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",    // 客户端标识
        "clientIp": "string",    // 请求IP
        "userId": 0,    // 用户ID
        "userName": "string",    // 用户名
        "chatTime": "2024-03-29T03:15:51.416Z",    // 聊天时间
        "comment": "string",    // 评价
        "tokens": 0    // 回答使用tokens
        }
    ]
    }
    ```