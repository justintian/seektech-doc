# 接口文档
## 范围
详细描述了API接口文档，包括接口用途、请求格式、返回格式和请求实例等。

## 定义、术语和缩略图
| 名词/术语      | 英文全称 | 描述 |
| ----------- | ----------- | ----------- |
| SSO      |  Single Sign on   | 单点登录
| API      |  Application Programming Interface   | 应用程序接口

# 调用方式
## 构造请求
### 服务端点

本文档主要涉及SSO和API两个服务端点。API为后台接口提供统一的调用入口，SSO负责提供统一的认证鉴权服务。对于需要认证的接口，均需要在Authorization请求头中带上SSO签发的token信息，格式为Authorization: Bearer \<token\>。
说明： Bearer和\<token\>之间需留一个空格。
SSO 服务端点：******
API 服务端点：******

### 请求URI

请求URI由如下部分组成。 {URI-scheme}://{Endpoint}/{resource-path}?{query-string} 尽管请求URI包含在请求消息头中，但大多数语言或框架都要求您从请求消息中单独传递它，所以在此单独强调。

| 参数      | 描述 | 
| ----------- | ----------- | 
| URI-scheme      | 表示用于传输请求的协议，当前API接口采用HTTPS协议或HTTP协议。  | 
| Endpoint      | 指定承载API服务的服务器域名或IP地址加端口号，即调用API服务的接入地址。  | 
| resource-path     | 资源路径，也即API的请求路径。从具体API的URI模块获取。  | 
| query-string     | 公共请求参数，请求参数前面需要携带“?”，形式为“参数名=参数取值”，例如“AccessKey=d0742694e5784074af7b2c5ecff21455”，参数之间由“&”连接。  | 


### 请求方法

| 方法      | 说明 | 
| ----------- | ----------- | 
| GET     | 请求服务器返回指定资源。  | 
| PUT      | 请求服务器更新指定资源。  | 
| POST     | 请求服务器新增资源或执行特殊操作。| 
| DELETE     | 请求服务器删除指定资源，如删除对象等。 | 
| HEAD     | 请求服务器资源头部。| 
| PATCH     | 请求服务器更新资源的部分内容。| 


### 请求消息头

公共请求消息头是所有API请求都必需的参数。为减少内容重复，公共请求将不在各API详情中列出。
|名称	|描述	|示例|
| ----------- | ----------- | ----------- | 
Content-type	|指定请求消息体中的MIME类型	|application/json。本系中若未特殊说明通常为application/json, 上传文件时通常为application/octet-stream|
Authorization	|指定用户的认证令牌token	|Bearer eyJhbGciOiJSUzI1Ni…(后略) 即Bearer 拼接通过端口获取到的2.2.1获取到的令牌|

### 请求消息体

该部分可选。请求消息体通常以结构化格式（如JSON）发出，与请求消息头中Content-Type对应，传递除请求消息头之外的内容。 若请求消息体中的参数支持中文，则中文字符必须为UTF-8编码。

## 返回结果
### 响应消息头

响应消息头包含如下两部分：
- 一个HTTP状态代码，从2xx成功代码到4xx或5xx错误代码，或者可以返回服务定义的状态码。
- 附加响应头字段，如Content-Type响应消息头。 详细的公共响应消息头字段请参考下表

|名称	|描述	|示例|
| ----------- | ----------- | ----------- | 
|Content-Length	|服务端返回的消息实体的传输长度，以字节为单位	|3456|
|Content-type	|消息体的MIME类型	|application/json|

### 响应消息体

该部分可选。响应消息体通常以结构化格式（如JSON或XML）返回，与响应消息头中Content-Type对应，传递除响应消息头之外的内容。 以下是通用HTTP状态码说明：

|HTTP状态码	|状态描述	|语义|
| ------------- | ----------- | ----------- | 
|200	|OK	|请求成功|
|204	|NoContent	|没有返回信息|
|400	|BadRequest	|1．请求参数错误 2．因资源被引用而无法删除|
|404	|NotFound	|资源未找到|
|415	|Unsupported Media Type	|服务端未实现此请求方法，或要传递一个空的Json作为Body，即，”{}”|
|500	|InternalServerError	|服务器内部异常|