# 分享应用
将应用分享给指定用户

- Path： /v1/applications/{id}/share

- Method：POST

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |应用id |

- 请求Body参考示例：

    ```
    {
          "userIds": [
                0,1,2
            ]    // 分享用户ID列表
    }
    ```
