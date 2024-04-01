## 查询角色信息
- Path：/v1/roles
- Method：GET

- 请求路由参考示例：
    ```
    {
        "SearchKey":"this is a string",  //查询关键字
        "PageSize":"this is an integer", //每一页的记录数
        "PageNumber":"this is an integer", //当前的页码
    }
    ```
- 响应参考示例：

  ```
  {
      "count":"this is an integer",    // 角色数量
      "list":[                   //角色列表
          "id":"this is an integer",  //角色id
          "name":"this is a string", //角色名称
          "code":"this is a string",    // 角色编码
          "description":"this is a string",  //角色描述
          "status":0,  //角色状态，0:禁用，1:启用
          "isCustom":true,  //是否为自定义角色
          "companyId":"this is a guid string"    //公司id
          ]
  }    
  ```