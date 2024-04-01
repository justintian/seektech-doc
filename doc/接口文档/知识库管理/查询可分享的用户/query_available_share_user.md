# 查询可分享的用户
根据当前知识库可以分享的用户名

- Path： /v1/knowledgebases/{id}/available-share
- Method： GET

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id 
  } 
  ```

- 响应参考示例:

  ```
  [
    {
      "userName": "string",
      "userId": 0,
      "displayName": "string"
    }
  ]
  ```

