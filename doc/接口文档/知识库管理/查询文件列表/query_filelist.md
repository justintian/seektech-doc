# 查询知识库文件列表
查询用户的知识库文件列表

- Path： /v1/knowledgebases/{id}/files

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
    "count": 0,
    "list": [
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  //文件id
        "name": "string", //文件名
        "kbId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", //知识库id
        "size": 0, //文件大小（kb）
        "embeddingPath": "string", //向量化文件地址
        "savePath": "string", // 存储key
        "state": 0, // 文件状态，默认是0，表示未向量化; 1表示正在向量化; 2表示已向量化完成，3表示向量化失败
        "level": 0, //优先级
        "titlePrefix": true,  // 是否添加标签标题前缀
        "maxSegmentLength": 0,  //分割最大长度, 默认2000
        "meth": "string",  //文本分割规则
        "createdAt": "2024-03-29T02:27:40.472Z", //创建时间
        "lastUpdateAt": "2024-03-29T02:27:40.472Z", //更新时间
        "createdBy": 0, //创建用户
        "updatedBy": 0, //更新用户
        "startValidTime": "2024-03-29T02:27:40.472Z", // 知识库文件有效日期的开始时间
        "endValidTime": "2024-03-29T02:27:40.472Z" // 知识库文件有效日期的结束时间
      }
    ]
  }
  ```
