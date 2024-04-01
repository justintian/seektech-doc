# 上传知识库关联文件


用户上传关联文件，首先将关联文件上传云平台

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles/upload

- Method： POST

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id
      "fileId": "this is a guid string",    // 文件id 
  } 
  ```

- 请求Body参考示例:

  ```
  {
    "name": "string"
  }
  ```

- 响应参考示例:

  ```
  {
    "savePath": "string",
    "fileLink": "string"
  }
  ```



