# mariaDB-Mysql


## Getting started

<!-- {.-three-column} -->
### mariaDB-Mysql数据库相关
<!--more-->
<!-- {.-prime} -->
> SQL `必会`：
> ![SQL必会](/images/SQL.jpg "SQL必会")  


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
|     `添加主键`     |**Alter table tabname add primary key(col)**|
|     `删除主键`     |**Alter table tabname drop primary key**|
|     `创建索引`     |**create [unique] index idxname on tabname(col….)**|
|     `删除索引`     |**drop index idxname(注：索引是不可更改的，想更改必须删除重新建。)**|
|     `创建视图`     |**create view viewname as select statement;**|
|     `删除视图`     |**drop view viewname**|

### 问题点
> **[ERROR] /usr/bin/mariadbd: unknown option '--auto-rehash'**  
> **解决方案**  
> {{< style "color:red;" >}}nano /etc/my.cnf 注销auto-rehash{{< /style >}} 

### SQL面试常用的语句
|      使用       |            语句          |
| -------------- | -------------------------------- |
|     `创建数据库`     |**CREATE DATABASE database-name;**|
|     `删除数据库`     |**DROP DATABASE database-name;**|
|     `根据已有的表创建新表`     |**create table A like B (使用旧表B创建新表A，此种方式在将表B复制到A时候会将表B完整的字段结构和索引复制到表A中来)**|
|     `创建新表`     |**CREATE TABLE IF NOT EXISTS `runoob_tbl`(`runoob_id` INT UNSIGNED AUTO_INCREMENT,`runoob_title` VARCHAR(100) NOT NULL,`runoob_author` VARCHAR(40) NOT NULL,`submission_date` DATE,PRIMARY KEY ( `runoob_id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;(在 RUNOOB 数据库中创建数据表runoob_tbl)**|
|     `删除新表`     |**drop table tabname；**|
|     `增加一个列`     |**alter table tabname add column column_name type;**|
|     `查询内容`     |**select * from table1 where 范围**|
|     `插入(增)`     |**insert into table1(field1,field2) values(value1,value2)**|
|     `删除`     |**delete from table1 where 范围**|
|     `更新`     |**update table1 set field1=value1 where 范围**|
|     `查找值`     |**select * from table1 where field1 like ’%value1%’ —like的语法很精妙，查资料!**|
|     `排序`     |**select * from table1 order by field1,field2 [desc]（desc：降序，asc：升序）**|
|     `总数`     |**select count as totalcount from table1**|
|     `求和`     |**select sum(field1) as sumvalue from table1**|
|     `平均`     |**select avg(field1) as avgvalue from table1**|
|     `最大`     |**select max(field1) as maxvalue from table1**|
|     `最小`     |**select min(field1) as minvalue from table1**|
|     `删除新表`     |**drop table tabname；**|
|     `删除新表`     |**drop table tabname；**|


> 注意：`create table tab_new as select col1,col2… from tab_old definition only`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**备注：此种方式只会将表B的字段结构复制到表A中来，但不会复制表B中的索引到表A中来。这种方式比较灵活可以在复制原表表结构的同时指定要复制哪些字段，并且自身复制表也可以根据需要增加字段结构。**
> `create table as select`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**会将原表中的数据完整复制一份，但表结构中的索引会丢失。**
> `create table like`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**只会完整复制原表的建表语句，但不会复制数据。**

