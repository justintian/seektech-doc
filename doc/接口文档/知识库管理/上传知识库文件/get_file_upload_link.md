---
sidebar_position: 7
sidebar_label: 获取知识库文件预签名上传链接
---
# 获取知识库文件预签名上传链接

根据使用的存储服务，获取上传链接和存储key。

- Path： /v1/knowledgebases/{id}/files/upload
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
    }    
    ```

- 响应参考示例：

    ```
    {
        "kbid":"this is a guid string",    // 知识库id
        "filelink"："this is a string" // 上传链接
        "savepath": "this is a string" // 存储key
        "createdAt": "2023-05-05T06:22:48.373Z",
        "lastUpdateAt": "2023-05-05T06:22:48.374Z"
    }    
    ```