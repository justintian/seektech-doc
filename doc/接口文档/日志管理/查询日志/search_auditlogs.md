# 查询用户日志
查询用户操作的日志列表

- Path： /v1/auditlogs

- Method：GET

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|SearchKey  |查询关键字, 支持用户昵称, 操作信息, 操作模块进行模糊筛选 |
|StartTime  |筛选起始时间 |
|EndTime  |筛选结束时间 |
|PageNumber  |查询页码 |
|PageSize  |查询分页大小 |

- 响应参考示例：

    ```
    {
        "count": 0,    // 总数
        "list": [
            {
            "id": 0,    // 编号
            "displayUserName": "string",    // 用户名
            "operateModule": "string",    // 操作模块
            "message": "string",    // 操作信息
            "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",    // 公司ID
            "createdAt": "2024-03-29T05:38:07.508Z",    // 创建时间
            "createdBy": 0,    
            "lastUpdateAt": "2024-03-29T05:38:07.508Z",    // 最后一次更新时间
            "lastUpdateBy": 0
            }
        ]
    }
    ```