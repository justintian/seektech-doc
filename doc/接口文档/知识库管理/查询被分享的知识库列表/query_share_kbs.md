# 查询被分享的知识库
查询用户被分享的知识库

- Path： /v1/knowledgebases/share-kbs

- Method： GET


- 请求Query参数示例:

|参数名      |描述 |
|----------- |----------- |
|UserId  |用户id |
|SearchWord  |查询关键字, 支持知识库名称的模糊搜索 |
|Tag  |知识库标签 |
|PageSize  |查询分页大小 |
|PageNumber  |查询页码 |

- 响应参考示例:

  ```
  {
    "count": 0,
    "list": [
         {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  //知识库id
          "name": "string", //知识库名称
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
    ]
  }
  ```



