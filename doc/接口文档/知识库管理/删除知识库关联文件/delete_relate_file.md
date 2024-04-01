# 删除关联文件
根据知识库id、文件id、关联文件id删除知识库下的文件的关联文件

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles/{relateFileId}
- Method： DELETE

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id
      "fileId": "this is a guid string",    // 文件id 
      "relateFileId": "this is a guid string",    // 关联文件id 
  } 
  ```