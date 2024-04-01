# 分享应用

将应用分享给指定用户

- Path： /v1/applications/{id}/share
- Method：POST

- 请求路由参数示例：

    ```
    {
        "id": "string",    // 应用ID
    }
    ```
- 请求Body参考示例：

    ```
    {
          "userIds": [
                0
            ]    // 分享用户ID列表
    }
    ```
