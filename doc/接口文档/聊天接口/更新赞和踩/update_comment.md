# 聊天记录赞和踩

更新对于问题的进行评价（赞和踩）

- Path： /v1/chat/{id}

- Method：Put

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |问题ID |

- 请求Query参数示例:

`如果是授权访问，无需添加Code查询参数，如果是匿名访问，需添加Code参数（在匿名发布应用的访问链接里）`

|参数名      |描述 |
|----------- |----------- |
|Code  |匿名应用Code |

- 请求Body参考示例：

    ```
    {
        "comment":"赞",    // 评价: 赞, 踩
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