## 获取角色的权限信息

- Path：/v1/roles/{roleId}/actions

- Method：GET

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|roleId  |角色id |

- 响应参考示例：
  ```
  [
    {
      "id":0, // 权限id
      "name"："this is a string"，// 权限名称
      "type":0, // 权限类型 0：接口功能，1:菜单功能
      "description"："this is a string"，// 权限描述
    }
  ] 