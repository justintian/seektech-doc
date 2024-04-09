## 修改角色
- Path：/v1/roles/{roleId}

- Method：PUT

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|roleId  |角色id |

- 请求Body参考示例：

  ```
  {
      "name":"this is a string",  //角色名称
      "description":"this is a string",  //角色描述
      "actionlist":[],  //角色权限列表
      "status":0,  //角色状态，0:禁用，1:启用
  }    
  ```
  
- 响应参考示例：

    ```
    {
        "id":0,    // 角色的id
        "name":"this is a string", //角色名称
        "code":"this is a string",    // 角色编码
        "description":"this is a string",  //角色的描述
        "status":0,  //角色状态，0:禁用，1:启用
        "isCustom":true,  //是否为自定义角色
        "companyId":"this is a guid string"    //公司id
    }    
    ```