# 下载关联文件
获取文件下载的路径

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles/{relateFileId}/download

- Method： GET

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id
      "fileId": "this is a guid string",    // 文件id 
      "relateFileId": "this is a guid string",    // 关联文件id 
  } 
  ```

- 响应参考示例:

  ```
  {
    "savePath": "string",  //储存地址
    "fileLink": "string"   //下载链接
  }
  ```

