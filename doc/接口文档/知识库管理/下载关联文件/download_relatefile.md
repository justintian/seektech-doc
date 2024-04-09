# 下载知识库文件关联文件
获取文件下载的路径

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles/{relateFileId}/download

- Method： GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |知识库id |
|fileId  |文件id |
|relateFileId  |关联文件id |

- 响应参考示例:

  ```
  {
    "savePath": "string",  // 存储地址
    "fileLink": "string"   // 下载链接
  }
  ```

