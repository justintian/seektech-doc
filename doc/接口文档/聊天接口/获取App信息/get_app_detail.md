# 获取App信息

获取对应聊天应用的详细信息

- Path： /v1/chat
- Method：GET

- 请求查询参考示例：

    - 如果是授权访问，查询参数为Id，如果是匿名访问，查询参数为匿名应用对应的Code

    ```
    {
    "Id": "this is appID",    // 应用id 
    "Code": "this is code of anonymous app ",    // 匿名应用Code  
    }
    ```
- 响应参考示例：

    ```
    {
        "state": 1,    // 应用状态
        "remark": "汽车知识库",    // 应用描述
        "id": "appID",
        "name": "appName",    // 应用名称
        "tempLinkExpired": "2024-03-29T07:40:33.519Z"     // 临时链接有效期
    }   
    ```