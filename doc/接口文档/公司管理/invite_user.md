# 邀请用户进入公司
- Path：/v1/companys/{id}/invite
- 请求路由参考示例：
    ```
    {
        "ID":"this is a string",  // 公司id
    }
    ```
  
- 请求Body参考示例：

    ```
    {
        "email":"this is a string",  //用户邮箱
    }    
    ```
  

- 响应参考示例：

    ```
    {
        "email":"this is a string",  //用户邮箱
        "companyId":"this is a guid string",//公司id
        "inviteUrl":"this is a string",//邀请链接
    }    
    ```