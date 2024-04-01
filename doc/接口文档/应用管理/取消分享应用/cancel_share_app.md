# 取消分享应用

取消分享指定应用

- Path： /v1/applications/{id}/cancel-share
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
            ]    // 取消分享用户ID列表
    }
    ```
