# 添加关联文件
用户上传关联文件，首先将关联文件上传云平台，然后在知识库中添加关联文件信息

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles

- Method： POST

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id 
  }
  ```

- 请求Body参考示例:

  ```
  {
    "name": "string",//文件名称
    "size": 0,//文件大小
    "savePath": "string"//文件地址
  }
  ```

- 响应参考示例:

  ```
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "knowledgeFileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "size": 0,
    "savePath": "string",
    "state": 0
  }
  ```