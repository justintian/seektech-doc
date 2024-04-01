## 授予用户指定角色
- Path：/v1/roles/{roleId}/assign
- Method：POST
- 请求路由参考示例：
    ```
    {
        "roleid":"this is a integer",  //角色id
    }
    ```
- 请求Body参考示例：

  ```
  {
      "idList":[],  //用户id列表
  }    
  ```