## restaurant 点餐系统
后端使用Node.js, 使用Express路由获取餐桌和订单信息并能够对其进行修改、删除和增加，数据库使用Sqlite3
前端使用React History监听地址栏变化，并匹配路由实现页面转跳，socket.io进行实时通信：同一桌用户间同步点餐状态，商户端实时接收新的订单，使用Multer中间件实现菜品图片上传，使用immer.js对订单的状态变化进行优化
商户端支持菜品的删除、增加、修改。订单的实时更新和状态管理
顾客端支持购物车和下单结算功能，同一桌用户在一起点餐时进入同一订单，订单之间实时更新

餐厅管理员账号：a 密码：a

## Install dependencies:

```
npm install
```

## Running Backend server
```
nodemon restaurant.js
```

## Running frontend server
```
npm run start
```


