# 语言通识

## 语言的分类

- 非形式化语言
  没有固定的格式，方式灵活
  例子: 中文，英文

- 形式化语言 （乔姆斯基谱系）

0-型：无限制文法 —— 只要定义清楚了语言是什么样的
1-型：上下文相关文法 —— 同样的一个词、句的组合，它的上文、下文和内容相关的
2-型：上下文无关文法 —— 同样一个表达，不管放到哪里都是一样的意思
3-型：正则文法 —— 能够被正则表达式去描述的一种文法

## 什么是产生式？（BNF）

> 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
> 巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
> 终结符： 最终在代码中出现的字符

- 用尖括号（<, >）括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
- 基础结构称终结符
- 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- - 表示重复多次
- | 表示 “或”
- - 表示至少一次

## 现代语言的分类

### 根据用途来区分

- 数据描述语言

JSON, HTML, XAML, SQL, CSS

- 编程语言

C, C++, Java, C#, Python, Ruby, Perl, PHP, Go, Perl, Lisp, T-SQL, Clojure, Haskell, JavaScript, CoffeeScriptx

### 根据表达方式来区分

- 声明式语言（只需要告诉计算机结果）
  JSON, HTML, XAML, SQL, CSS, Lisp, Clojure, Haskell

- 命令型语言

C, C++, Java, C#, Python, Ruby, Perl, JavaScript

## 编程语言的性质

图灵完备性

### 命令式 —— 图灵机

goto
if 和 while

### 声明式 —— lambda

递归

> 图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
> 图灵机（Turing machine）：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。

## 动态与静态

### 动态

在用户的设备 / 在线服务器上运行
时机：产品实际运用时
术语：Runtime（运行时）

### 静态：

在程序员的设备上运行
时机：产品开发时
术语：Compiletime（编译时）

> JavaScript 这种解释执行的语言，它是没有 Compiletime 的。我们现在也会用到 Webpack 去 build 一下我们的代码，但是实际上还是没有 Compiletime 的。所以说，今天的 Runtime 和 Compiletime 的对应已经不准确了，但是我们依然会愿意沿用 Compiletime 的习惯，因为 JavaScript 它也是 “Compiletime（开发时）” 的一个时间，所以也会用 Compiletime 这个词来讲 JavaScript 里面的一些特性。

## 类型系统

### 动态类型系统

在用户机器上可以找到的类型时

JavaScript 就是动态类型系统

### 静态类型系统

只在程序员编写代码的时候可以找到的类型时

C++最终编译到目标的机器的代码的时候，所有的类型信息都被丢掉了

### 半动态半静态类型系统

比如 Java 一类的语言提供了反射机制

在编译时主要的类型检查和类型的操作，都已经在编译时被处理掉了
但是如果你想在运行时去获得类型信息，还是可以通过反射去获取的

### 强类型与弱类型

说明在编程语言里类型转换发生的形式

- 强类型： 无隐式转换（类型转化是不会默认发生的）
- 弱类型： 有隐式转换（JavaScript 就是典型的弱类型的语言，默认把 Number 转换成 String 类型然后相加后给你得到一个 String 类型，还有 String 和 Boolean 双等运算，会先把 Boolean 转成 Number 然后再跟 String 去做是否相同的对比）

### 复合类型

结构体
函数签名（包含参数类型和返回值类型两个部分）

子类型 —— 典型的语言就是 C++（在做类型转换的时候，会有一些默认的行为）
范型

协变与逆变：
协变例子：凡是能用范型数组 Array <Parent> 的地方都能用 Array <Child>
逆变例子：凡是能用 Function <Child> 的地方，都能用 Function <Parent>

## 一般命令式编程语言的设计方式

一般来说我们的命令式语言可能有一些细微的结构上的不一致，但是它总体上来讲会分成 5 个层级。

### 原子级（Atom）—— 一个语言的最小的组成单位

- 关键字（Identifier）
- 字符/数字的直接量（Literal）
- 变量名（Variables）

### 表达式（Expression）—— 原子级结构通过运算符相连接和辅助符号形成

- 原子单位（Atom）
- 操作符（Operator）—— 加减乘除，拼接符等等
- 语法符（Punctuator）

### 语句（Statement）—— 表达式加上特定的标识符、关键字、符号形成一定的结构

- 表达式（Expression）
- 关键字（Keyword）
- 语法符（Punctuator）

### 结构化（Structure）—— 帮助我们组织、分块、分成不同的复用结构

- 函数（Function）
- 类（Class）
- 过程（Process）—— PASCAL 语言就会有 Process 的概念
- 命名空间（Namespace）—— C++ / PHP 中就会有 Namespace 的概念

### 程序（Program）—— 管理语言模块和安装

- 程序（Program）—— 实际执行的代码
- 模块（Module）—— 准备好被复用的模块
- 包（Package）
- 库（Library）

# 重学 JavaScript

## Number

使用双精度浮点数 - [IEEE 754 Double float](https://zh.wikipedia.org/wiki/%E9%9B%99%E7%B2%BE%E5%BA%A6%E6%B5%AE%E9%BB%9E%E6%95%B8)

Sign(1) 表示正负号
0 代表數值為正，1 代表數值為負。

Exponent(11) - 指数
用來表示次方數

Mantissa（尾數）：用來表示精確度

使用二補數表示法，範圍為-1024（0x400）到+1023（0x3ff），但有四個例外：

指數為+1023（0x3ff），尾數的每個位數都是 1，符號為 0，表示正無窮大
指數為+1023（0x3ff），尾數的每個位數都是 1，符號為 1，表示負無窮大
指數為-1024（0x400），尾數的每個位數都是 0，符號為 0，表示 0
指數為-1024（0x400），尾數的每個位數都是 0，符號為 1，表示 NaN

### 语法

Decimail

- 0
- 0.
- .2
- 1e3

> 0.toString()会出错；要使用 0 .toString()

- Binary

0b111

- Octal

0o10

- Hex

0xAB

## String

### 编码方式

- ASCII
- UNICODE
- UCS
- GB
  - GB2312
  - GBK(GB13000)
  - GB18030
- ISO-8859
- BIG5

### [UTF8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

unicode 的一种编码方式

UTF8 是一种可变长编码方式，所以需要解决如何通过不同的长度来显示不同的编码的问题。

使用 1~4 个字节表示一个符号

UTF-8 的编码规则很简单，只有二条：

1. 对于单字节的符号，字节的第一位设为 0，后面 7 位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的。

2. 对于 n 字节的符号（n > 1），第一个字节的前 n 位都设为 1，第 n + 1 位设为 0，后面字节的前两位一律设为 10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。

Unicode 符号范围 | UTF-8 编码方式
```
(十六进制) | （二进制）
----------------------+---------------------------------------------
0000 0000-0000 007F | 0xxxxxxx
0000 0080-0000 07FF | 110xxxxx 10xxxxxx
0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

UTF-8使用一至六個位元組為每個字符編碼（儘管如此，2003年11月UTF-8被RFC 3629重新規範，只能使用原来Unicode定義的區域，U+0000到U+10FFFF，也就是說最多四個字節）：

128個US-ASCII字符只需一個位元組編碼（Unicode範圍由U+0000至U+007F）。
帶有附加符号的拉丁文、希臘文、西里爾字母、亞美尼亞語、希伯來文、阿拉伯文、敘利亞文及它拿字母則需要兩個位元組編碼（Unicode範圍由U+0080至U+07FF）。
其他基本多文種平面（BMP）中的字元（這包含了大部分常用字，如大部分的漢字）使用三個位元組編碼（Unicode範圍由U+0800至U+FFFF）。
其他極少使用的Unicode 輔助平面的字元使用四至六位元組編碼（Unicode範圍由U+10000至U+1FFFFF使用四字節，Unicode範圍由U+200000至U+3FFFFFF使用五字節，Unicode範圍由U+4000000至U+7FFFFFFF使用六字節）

## 对象

对象是拿来描述世间万物

任何一个对象都是唯一的，跟它本身的状态无关
即使状态完全一致的两个对象，也并不相等

在js中，每个对象都拥有唯一的标识符，也就是唯一的内存地址

###　对象由三个元素组成

- identifier 
- state
- behavior


##　归类和分类

对于归类，多继承是很自然的事情，如 C++

而采用分类思想的计算机语言，则是单继承结构，并且会有一个基类 Object

JavaScript用的是一种更加 接近人类原始认知的描述对象的方法。也就是利用相似性去描述对象，提取共性为原型，而对象仅仅需要描述它自己与原型的区别就可以了。

原型有个最终版的原型，叫 Object Prototype。在它上面一般没有原型，在一些语言里会允许这种叫做Nihilo的原型，Nihilo的意思是虚无，对应着 js中的 null。

##　面向对象的设计原则

最高原则是　“行为改变状态”

##　js中的对象

状态和行为用 Property统一

###　属性

kv对

Symbol、String
-> 
Data
Accessor

#### 数据属性 Data Property
> 一般attributes也被指代属性，但是在js中使用 property，而 attribute就被拿来指代特征值
数据属性的特征值
[[value]]
writeable
enumerable
configurable

configurable 设为false，其它3项都不可修改

writeable 设为 false，点运算不可修改value, 但是依然可以通过 defineProperty 去修改

####　访问器属性

get 
set
enumerable
configurable

###　grammar

- {} [] Object.defineProperty
提供了基本的对象机制
- Object.create / Object.setPrototypeOf / Object.getPrototypeOf
基于原型的面向对象
- new / class / extends
基于类的面向对象
- new / function / prototype
不伦不类，历史包袱


### 特殊行为的对象

- Function： typeof function  === 'function';拥有[[call]]这个内置行为，无法通过外界访问
- Array：Array 的 length 属性根据最大的下标自动发生变化。
- Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
- String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
- Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
- 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
- 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
- bind 后的 function：跟原来的函数相关联。
- Map: 引用地址为 key 的对象。
- Set: 自动去重的 Array 对象集合。
