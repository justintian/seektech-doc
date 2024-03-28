# 认证授权
认证接口请求目标服务器为SSO（单点登录）。

## 获取令牌
获取用户访问令牌，用于接口调用。

- Path： /connect/token
- Method： POST
- 请求注意点：
    1. Header中Content-Type应设置为application/x-www-form-urlencoded 
    clientid、granttype为固定值password，用户名及密码为对应账号密码。
    2. clientid说明：应用调用值为STClient。

- 响应参考示例：
    ```
    {
        access_token: "this is a string",    // 访问令牌
        expires_in: "this is a string",    // 令牌过期时间，单位秒
        token_type: "this is a string",    // 令牌类型
        refresh_token: "this is a string",    // 刷新令牌
        scope: "this is a string"    // 令牌作用域
    }
    ```

## 刷新令牌
由于访问令牌生命周期有限，当访问令牌过期时，可使用刷新令牌请求新的访问令牌。

`说明：刷新令牌仅能使用一次`

- Path： /connect/token
- Method： POST
- 请求注意点：
    Header中Content-Type应设置为application/x-www-form-urlencoded, clientid、granttype为固定值refresh_token。

- 响应参考示例：
    ```
    {
        access_token: "this is a string",    // 访问令牌
        expires_in: "this is a string",    // 令牌过期时间，单位秒
        token_type: "this is a string",    // 令牌类型
        refresh_token: "this is a string",    // 刷新令牌
        scope: "this is a string"    // 令牌作用域
    }
    ```