# 认证授权
认证接口请求目标服务器为SSO（单点登录）。

## 获取令牌
获取用户访问令牌，用于接口调用。

- Path： /connect/token
- Method： POST

### 请求消息头

公共请求消息头是所有API请求都必需的参数。为减少内容重复，公共请求将不在各API详情中列出。
|名称	|描述	|示例|
| ----------- | ----------- | ----------- | 
Content-Type	|指定请求消息体中的MIME类型	|固定为application/x-www-form-urlencoded|

### 请求消息体

|名称	|描述	|
| ----------- | ----------- |
|client_id	|固定值STClient	|
|grant_type	|固定值password	|
|scope	|固定值openid profile api1 offline_access|
|username	|用户名	|
|password	|密码	|


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

### 请求消息头

公共请求消息头是所有API请求都必需的参数。为减少内容重复，公共请求将不在各API详情中列出。
|名称	|描述	|示例|
| ----------- | ----------- | ----------- | 
Content-Type	|指定请求消息体中的MIME类型	|固定为application/x-www-form-urlencoded|

### 请求消息体

|名称	|描述	|
| ----------- | ----------- |
client_id	|固定值STClient	|
grant_type	|固定值refresh_token	|
refresh_token	|获取令牌接口返回的refresh_token	|


- 响应参考示例：
    ```
    {
        id_token: "this is a string",    // (不使用)访问令牌
        access_token: "this is a string",    // 访问令牌
        expires_in: "this is a string",    // 令牌过期时间，单位秒
        token_type: "this is a string",    // 令牌类型
        refresh_token: "this is a string",    // 刷新令牌
        scope: "this is a string"    // 令牌作用域
    }
    ```