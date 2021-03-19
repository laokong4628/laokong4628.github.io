# mariaDB-Mysql


## Getting started

<!-- {.-three-column} -->
### mariaDB-Mysql数据库相关
<!--more-->
<!-- {.-prime} -->
#### 常用指令
|      方法       |            具体使用(实例)          |
| -------------- | -------------------------------- |
|     `本地登录MySQL`     |**mysql -u root -p   //root是用户名，输入这条命令按回车键后系统会提示你输入密码**|
|     `指定端口号登录MySQL数据库`     |**mysql -u root -p  -P 3306，注意指定端口的字母P为大写，而标识密码的p为小写。MySQL默认端口号为3306**|
|     `指定IP地址和端口号登录MySQL数据库`     |**mysql -h ip -u root -p -P 3306例如：mysql -h 127.0.0.1 -u root -p -P 3306**|
|     `查看多少个数据库`     |**show databases;**|
|     `使用该数据库`     |**use database;**|
|     `查看当前库下有哪些表`     |**show tables;**|
|     `查看表下面那些列`     |**show columns from city;**|
|     `查看表下面对应列的数据`     |**SELECT NAME FROM AV_PICTURE;**|


### 问题点
> **[ERROR] /usr/bin/mariadbd: unknown option '--auto-rehash'**  
> **解决方案**  
> {{< style "color:red;" >}}nano /etc/my.cnf 注销auto-rehash{{< /style >}} 

