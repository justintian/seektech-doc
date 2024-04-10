# 批量分配角色
批量分配角色

- Path：/v1/roles/{roleId}/assign

- Method：POST

- 请求路由参考示例：

|参数名      |描述 |
|----------- |----------- |
|roleId  |角色id |

- 请求Body参考示例：

  ```
  {
      "idList":[1,2,3],  //用户id列表
  }    
  ```