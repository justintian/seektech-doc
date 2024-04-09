# 查询可分享的用户
根据当前知识库可以分享的用户名, 当前租户下未被分享的用户为可分享的用户

- Path： /v1/knowledgebases/{id}/available-share
- Method： GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |知识库id |

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|SearchKey  |查询关键字, 支持用户名和用户昵称模糊搜索 |

- 响应参考示例:

  ```
  [
    {
      "userName": "string", // 用户名
      "userId": 0, // 用户id
      "displayName": "string" // 用户昵称
    }
  ]
  ```

