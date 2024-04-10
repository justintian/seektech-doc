# 获取角色分配的用户信息
获取角色分配的用户信息

- Path：/v1/roles/{roleId}/users

- Method：GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|roleId  |角色id |

- 响应参考示例：
  ```
  [
    {
      "roleId":0, // 角色id
      "userId":0,// 用户id
      "userName"："this is a string"，// 用户名
      "userDisplayName"："this is a string"，// 用户昵称
    }
  ] 