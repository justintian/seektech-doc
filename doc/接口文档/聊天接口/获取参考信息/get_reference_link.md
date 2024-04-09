# 获取问题引用链接

根据问题的引用路径和页码获取参考信息的链接用于展示

- Path： /v1/chat/reference-link
- Method：GET

- 请求Query参数示例:

`如果是授权访问，无需添加Code查询参数，如果是匿名访问，需添加Code参数（在匿名发布应用的访问链接里）`

|参数名      |描述 |
|----------- |----------- |
|Code  |匿名应用Code |
|Page  |页码 |
|Source  |参考路径, 存储key |

- 响应参考示例：

    ```
    {
        "url": "string",    // 引用链接
        "source": "string"    // 参考路径, 存储key
    }
    ```