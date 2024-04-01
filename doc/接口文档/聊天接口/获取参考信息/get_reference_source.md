# 获取问题引用信息

获取问题的引用路径和页码信息

- Path： /v1/chat/{id}/reference
- Method：GET

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
- 响应参考示例：

    ```
    [
        {
         "source": "string",    // 参考路径
        "page": 0,    // 页码
        "type": "image"    // 引用类型
     }
    ]
    ```