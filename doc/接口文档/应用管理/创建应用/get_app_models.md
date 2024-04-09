# 获取应用模型列表

获取应用可选择的模型列表

- Path： /v1/companys/{id}/models

- Method：GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |公司id |

- 响应参考示例：

    ```
    [
        {
            "name": "string",  // 模型名称
            "version": "string", // 模型版本
            "description": "string" // 模型描述
        }
    ]
    ```