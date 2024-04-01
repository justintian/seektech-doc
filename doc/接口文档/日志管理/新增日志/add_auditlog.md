# 新增用户日志

将用户的操作保存至数据库

- Path： /v1/auditlogs
- Method：POST

- 请求Body参考示例：

    ```
    {
        "displayUserName": "string",    // 用户昵称
        "operateModule": "string",    // 操作模块
        "message": "string"    // 操作信息
    }

    ```