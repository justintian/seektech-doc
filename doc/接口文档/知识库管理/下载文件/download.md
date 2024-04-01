# 下载文件
获取文件下载的路径

- Path： /v1/knowledgebases/{id}/files/{fileId}/download

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
    "kbId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", //知识库id
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  //文件id
    "savePath": "string", //储存key
    "fileLink": "string" //下载链接
  }
  ```

