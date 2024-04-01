# 查询知识库
根据名字、主题查看单个知识库的详情

- Path： /v1/knowledgebases/{id}

- Method： GET

- 请求路由参考示例:

  ```
  {
      "id": "this is a guid string",    // 知识库id 
  } 
  ```

- 响应参考示例:

  ```
  {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  //知识库id
      "name": "string", //知识库name
      "remark": "string",  //主题
      "embeddingMethod": "string", //嵌入方式
      "tags": [  //标签
          "string"
      ],
      "appNum": 0, //发布应用数量
      "fileNum": 0, //包含文件数量
      "createdAt": "2024-03-29T01:19:20.410Z",  //创建时间
      "lastUpdateAt": "2024-03-29T01:19:20.410Z", //更新时间 
      "createdBy": 0, //创建用户id
      "updatedBy": 0, //更新用户id
      "isPublic": true, //是否公开
      "allowCopy": true //是否允许复制
  }
  ```
