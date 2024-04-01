# 获取问题引用链接

根据问题的引用路径和页码获取参考信息的链接用于展示

- Path： /v1/chat/reference-link
- Method：GET

- 请求查询参考示例：

    - 如果是匿名访问，需添加Code参数

    ```
    {
        "Code": "this is code of anonymous app ",    // 应用Code
    }
    ```
- 响应参考示例：

    ```
    {
        "url": "string",    // 引用链接
        "source": "string"    // 引用路径
    }
    ```