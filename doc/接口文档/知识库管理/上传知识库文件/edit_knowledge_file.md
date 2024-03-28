---
sidebar_position: 8
sidebar_label: 更新知识库文件
---
# 更新知识库文件步骤

根据对应的存储服务，使用获取的上传链接和存储key上传文件。

- Path： /v1/knowledgebases/{id}/files
- Method：POST

- 请求路由参考示例：

    ```
    {
        "id": "this is a guid string",    // 知识库id 
    }
    ```

- 请求Body参考示例：

    ```
    {
        "name":"",  //上传文件名
        "size":"",  //上传文件大小
        "savepath":"",  //存储key
        "level":"",  //优先级
        "titlePrefix":"", // （可选）是否添加标签标题前缀
        "maxSegmentLength":"",  //（可选）分割最大长度, 默认2000
        "meth":"",  //文本分割规则
        "startValidTime":"2023-05-05T06:22:48.373Z",  // （可选）知识库文件有效日期的开始时间
        "endValidTime":"2023-05-05T06:22:48.373Z",  //（可选）知识库文件有效日期的结束时间
    }    
    ```

- 响应参考示例：

    ```
    {
        "id":"this is a guid string",    // 文件id
        "name":"文件名", // 文件名
        "kbid":"this is a guid string",    // 知识库id
        "size":100, // 文件大小（KB）
        "savepath": "this is a string" // 存储key
        "state": 0 // 文件状态，默认是0，表示未向量化; 1表示正在向量化; 2表示已向量化完成，3表示向量化失败
        "level":"",  //优先级
        "titlePrefix":"", // 是否添加标签标题前缀
        "maxSegmentLength":"",  //分割最大长度, 默认2000
        "meth":"",  //文本分割规则
        "createdAt": "2023-05-05T06:22:48.373Z",
        "lastUpdateAt": "2023-05-05T06:22:48.374Z",
        "startValidTime":"2023-05-05T06:22:48.373Z",  // 知识库文件有效日期的开始时间
        "endValidTime":"2023-05-05T06:22:48.373Z",  // 知识库文件有效日期的结束时间
    }    
    ```