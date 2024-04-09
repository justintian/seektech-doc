# 上传知识库关联文件
用户上传关联文件，首先获取上传预签名链接

- Path： /v1/knowledgebases/{id}/files/{fileId}/relatefiles/upload

- Method： POST

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|id  |知识库id |
|fileId  |文件id |

- 请求Body参考示例:

  ```
  {
    "name": "string"
  }
  ```

- 响应参考示例:

  ```
  {
    "savePath": "string", // 存储key
    "fileLink": "string" // 上传链接
  }
  ```



