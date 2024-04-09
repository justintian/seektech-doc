## 创建角色
- Path：/v1/roles

- Method：POST

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
        "description":"this is a string",  //角色描述
        "status":0,  //角色状态，0:禁用，1:启用
        "isCustom":true(boolean),  //是否为自定义角色
        "companyId":"this is a guid string"    //公司id
    }    
    ```