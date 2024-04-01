# 更新赞和踩

更新对于问题的进行评价（赞和踩）

- Path： /v1/chat/{id}
- Method：Put

- 请求路由参考示例：

    ```
    {
        "id": "questionID"    // 问题ID
    }
    ```
- 请求查询参考示例：

    - 如果是匿名访问，需添加Code参数

    ```
    {
        "Code": "this is code of anonymous app ",    // 应用Code
    }
    ```
- 请求Body参考示例：

    ```
    {
        "comment":"赞",    // 评价
    }
    ```
- 响应参考示例：

    ```
    {
        "appId": "08dc4f94-6c96-409b-8296-27bf7f8dae18",    // 应用ID
        "userId": 10,    // 用户ID
        "questionId": "00000000-0000-0000-0000-000000000000",    // 问题ID
        "question": "hi"    // 问题
    }
    ```