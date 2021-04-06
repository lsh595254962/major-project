# major-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
# 江苏联合职业技术学院

一、vue  data是对象还是函数  
对象是复杂数据类型  作用域  会影响调用组件的地方
函数的return 新的对象 互不影响 

二、跨域问题 （协议  域名  端口号）三端不一致 浏览器的行为 自己做的安全策略
1、jsonp  --- 使用script的src发送  只能是get请求
2、cors后台配置允许跨域 
3、服务器代理 （服务器到服务器之间不会产生跨域问题）devServer(开发的时候有效)
三、watch vs computed
四、keep-alive  meta $route.meta.isAlive