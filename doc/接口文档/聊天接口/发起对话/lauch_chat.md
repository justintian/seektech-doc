# 发起对话

将问题发送至服务器并获取流失输出的答案

- Path： /v1/chat
- Method：Post

- 请求查询参考示例：

    - 如果是授权访问，无需添加查询参数，如果是匿名访问，需添加Code参数

    ```
    {
        "Code": "this is code of anonymous app ",    // 匿名应用Code  
    }
    ```
- 请求Body参考示例：

    ```
    {
        "appId":"appID",    // 应用id 
        "question":"hi",    // 问题
        "history":[],    // 历史聊天问答
        "online":1,    // 是否联网
        "userId":"10",    // 用户ID
        "userName":"测试账号"    // 用户名称
    }
    ```
- 响应参考示例：

    ```
    {
        "id": "5769cbf3-aa0f-4159-8c4e-ecf7b53cfb1d",
        "answer": "你好"
    },
    {
        "id": "5769cbf3-aa0f-4159-8c4e-ecf7b53cfb1d",
        "answer": "！有什么我"
    },
    {
        "id": "5769cbf3-aa0f-4159-8c4e-ecf7b53cfb1d",
        "answer": "可以帮助您的吗？"
    },
    ```