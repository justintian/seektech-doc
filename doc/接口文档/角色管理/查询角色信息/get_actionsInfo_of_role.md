## 获取某个角色下的权限列表
- Path：/v1/roles/{roleId}/actions
- Method：GET
- 请求路由参考示例：
    ```
    {
        "roleId":"this is a integer",  //角色id
    }
    ```
- 响应参考示例：
  ```
  [
    {
      "id":"this is a integer", //角色id
      "name"："this is a string"，//角色名
      "type":0, //权限类型 0：接口功能，1:菜单功能
      "description"："this is a string"，//角色描述
    }
  ] 