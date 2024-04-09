# 取消分享应用

取消分享指定应用

- Path： /v1/applications/{id}/cancel-share

- Method：POST

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |应用id |

- 请求Body参考示例：

    ```
    {
          "userIds": [
                1,2,3
            ]    // 取消分享用户ID列表
    }
    ```
