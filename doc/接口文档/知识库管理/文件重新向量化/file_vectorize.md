# 文件重新向量化

将上传时向量化失败的文件重新向量化

- Path： /v1/knowledgebases/{fileId}/vectorize

- Method： POST

- 请求路由参考示例:

  ```
  {
      "fileId": "this is a guid string",    // 文件id 
  } 
  ```

- 响应参考示例:

  ```
  {
    "type": "string",
    "title": "string",
    "status": 0, 
    "detail": "string",
    "instance": "string",
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
  ```
