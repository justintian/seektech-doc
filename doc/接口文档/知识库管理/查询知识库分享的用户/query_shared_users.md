# 查询知识库分享的用户
根据知识库id查询知识库分享的用户列表

- Path： /v1/knowledgebases/{id}/shared-users

- Method： GET

- 响应参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id 
  }
  ```

- 请求路由参考示例:

  ```
  {
    "count": 0,
    "list": [
      {
        "userName": "string",
        "userId": 0,
        "displayName": "string"
      }
    ]
  }
  ```
