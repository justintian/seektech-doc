## 获取某个角色下的用户信息
- Path：/v1/roles/{roleId}/users
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
      "roleId":"this is a integer", //角色id
      "userId":"this is a integer",//用户id
      "userName"："this is a string"，//用户名
      "userDisplayName"："this is a string"，//用户昵称
    }
  ] 