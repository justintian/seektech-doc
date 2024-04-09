# 查询租户知识库标签列表
查询当前租户下的知识库标签列表

- Path： /v1/knowledgebases/tags
- Method： GET

- 响应参考示例：
    ```
    {
      "count": 0,
      "list": [
        {
          "id": 0, // 标签id
          "name": "string" // 标签名称
        }
      ]
    }
    ```