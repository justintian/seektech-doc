## 获取所有角色权限列表
- Path：/v1/roles/actions

- Method：GET

- 响应参考示例：
  ```
  [
    {
      "id":0, // 角色id
      "label"："this is a string"，// 返回菜单权限或接口权限
      "disabled":true, // 是否被禁用
      "tag":"this is a string", // 接口权限中权限的名称。菜单权限则为空
      "children"：["this is a string"]，// 返回权限的子权限，包含的内容与该权限相同
    }
  ] 