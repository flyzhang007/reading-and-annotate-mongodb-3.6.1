# reading-and-annotate-mongodb-3.6.1
mongodb-3.6.1源码注释分析，持续更新

说明:  
===================================     
MongoDB是一个基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。  
是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。  


阅读过程  
===================================  
截止18.3.29:  
	.提交mongo官方代码    
	.主要类结构,宏定义代码梳理注释  
	.主流程简单分析  
	
18.4.15
    .mongodb存储引擎wiredtiger代码架构梳理    
	.wiredtiger源码分析    
	.mongodb高性能存储引擎wiredtiger源码分析:https://github.com/y123456yz/reading-and-annotate-wiredtiger-3.0.0   

18.8.31  
    .添加mongodb压测工具，sysbench-mongodb  
	