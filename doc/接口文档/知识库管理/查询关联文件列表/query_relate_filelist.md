# 查询关联文件列表
查询用户的知识库文件的关联文件列表

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles

- Method： GET

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id
      "fileId": "this is a guid string",    // 文件id 
  } 
  ```

- 响应参考示例:

  ```
  {
    "count": 0,
    "list": [
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  //关联文件id
        "knowledgeFileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", //知识库文件id
        "name": "string", //关联文件名称
        "size": 0, //关联文件大小（kb）
        "savePath": "string", //储存key
        "state": 0 //关联文件向量化状态
      }
    ]
  }
  ```

