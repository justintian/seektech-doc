# 查询知识库分享的用户
查询知识库被分享的用户列表

- Path： /v1/knowledgebases/{id}/shared-users

- Method： GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |知识库id |

- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|PageSize  |查询分页大小 |
|PageNumber  |查询页码 |

- 响应参考示例:

  ```
  {
    "count": 0,
    "list": [
      {
        "userName": "string", // 用户名
        "userId": 0, // 用户id
        "displayName": "string" // 用户昵称
      }
    ]
  }
  ```
