# 查询用户日志

查询用户操作的日志列表

- Path： /v1/auditlogs
- Method：GET

- 请求查询参考示例：

    ```
    {
        "SearchKey": "string",    // 筛选条件
        "StartTime": "string",    // 筛选起始时间
        "EndTime": "string",    // 筛选结束时间
        "PageSize": 20,    // 单页条数
        "PageNumber": 1,    // 页码数
    }

    ```
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