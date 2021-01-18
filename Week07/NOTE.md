# 第七周 重学 JavaScript 2

- [第七周 重学 JavaScript 2](#第七周-重学-javascript-2)
  - [表达式的运算符优先级](#表达式的运算符优先级)
    - [Member](#member)
    - [New](#new)
    - [Call](#call)
    - [Update](#update)
    - [Unary(单目运算符)](#unary单目运算符)
    - [Exponental](#exponental)
    - [Multiplicative](#multiplicative)
    - [Additive](#additive)
    - [Shift](#shift)
    - [Relationship](#relationship)
    - [Equality](#equality)
    - [Bitwise 位运算](#bitwise-位运算)
    - [Logical](#logical)
    - [Conditional](#conditional)
  - [类型转换](#类型转换)
    - [Unboxing 拆箱转化](#unboxing-拆箱转化)
    - [Boxing 装箱](#boxing-装箱)
  - [Statement（语句）](#statement语句)
    - [Completion record](#completion-record)
    - [简单语句](#简单语句)
    - [复合语句](#复合语句)
      - [BlockStatement](#blockstatement)
      - [IterationStatement](#iterationstatement)
      - [标签、循环、break和continue](#标签循环break和continue)
      - [try](#try)
    - [](#)
  - [声明](#声明)
    - [预处理机制](#预处理机制)
    - [作用域](#作用域)
  - [JS执行粒度(运行时)](#js执行粒度运行时)
  - [宏任务和微任务](#宏任务和微任务)
  - [事件循环](#事件循环)
  - [函数调用](#函数调用)
    - [Execution Context](#execution-context)
      - [LexicalEnvironment](#lexicalenvironment)
      - [VariableEnvironment](#variableenvironment)
    - [Environment Records](#environment-records)
    - [Closure（闭包）](#closure闭包)
    - [Realm](#realm)

<a name="213fadc5"></a>
## 表达式的运算符优先级

<br />依次从高往下<br />

<a name="Member"></a>
### Member


- a.b
- a[b]
- foo`string`
- super.b
- super['b']
- [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
- new Foo()



<a name="New"></a>
### New


- new foo


<br />例子：<br />new a()()<br />会先执行千面的 new a()<br />new new a()<br />会先执行后面的 new a()<br />
<br />**Reference**<br />
<br />引用类型不属于7种基本类型之一，但也确实存在于运行时的类型之一（被称作标准中的类型，而不是语言中的类型）<br />
<br />一个引用类型包括一个Object和一个key，完整地展示了一个Member运算。<br />
<br />delete、assign（=，+=，-=） 运算会用到引用类型，而如果做加法、减法等运算，就会把引用类型解引用<br />

<a name="Call"></a>
### Call


- foo()
- super()
- foo()['b']
- foo().b
- foo()`abc`


<br />例子：<br />new a()['b']<br />语法结构所能表达地内容要多余运算符优先级能表达的内容<br />
<br />**left hand side & right hand side**<br />
<br />a.b = c<br />a+b = c<br />
<br />只有left-hand side expression 可以放到等号的左边<br />在js中，并不会去定义right-hand side expression<br />因为所有的expression，只要不是left-hand side expression，就默认是right-hand side  expression<br />

<a name="Update"></a>
### Update


- a++
- a--
- --a
- ++a


<br />从Update这一级开始往下就是 right-hand side expression<br />
<br />left-hand side expression 几乎一定都可以当 right-hand side expression, js中没有例外<br />

<a name="62ee3b17"></a>
### Unary(单目运算符)


- delete a.b
- void foo() void 会将后面任何的结果转化为undefined
- typeof a
- +a
- - a
- ~ a
- !a
- await a



<a name="Exponental"></a>
### Exponental

<br />唯一一个右结合的运算符<br />

- `**`


<br />**Example**<br />
<br />`3**2**3 === 3**`<br />

<a name="Multiplicative"></a>
### Multiplicative


- `* / %`



<a name="Additive"></a>
### Additive


- `+ -`
<a name="Shift"></a>
### Shift


- `<<`
- `>>` 有符号右移
- `>>>` 无符号右移



<a name="Relationship"></a>
### Relationship


- `< > <= >=` instanceof in



<a name="Equality"></a>
### Equality


- ==
- !=
- ===
- !==



<a name="13db7c69"></a>
### Bitwise 位运算


- & 按位与
- ^ 按位异或
- | 按位或



<a name="Logical"></a>
### Logical

<br />逻辑运算有短路原则<br />

- &&
- ||



<a name="Conditional"></a>
### Conditional

<br />唯一一个三目运算符<br />

- ?：



<a name="f3c723ec"></a>
## 类型转换



|           | Number                                                                    | String                                                                   | Boolean                                                | Null | Undefined | Object | Symbol |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ | ---- | --------- | ------ | ------ |
| Number    | /                                                                         | String(0x10) === '16'<br />String(10)=== '10'<br />String(NaN) === 'NaN' | Boolean(0) === false<br />Boolean(1 or other) === true | x    | x         | Boxing | x      |
| String    | Number('NaN') === NaN<br />Number('0x10') === 16<br />Number('10') === 10 | /                                                                        | '' false<br />'anything' true                          | x    | x         | Boxing | x      |
| Boolean   | true 1<br />false 0                                                       | true 'true'<br />false 'false'                                           | /                                                      | x    | x         | Boxing | x      |
| Null      | 0                                                                         | 'null'                                                                   | false                                                  | /    | x         | x      | x      |
| Undefined | NaN                                                                       | 'undefined'                                                              | false                                                  | x    | /         | x      | x      |
| Object    | valueOf<br />                                                             | toString<br />valueOf                                                    | true                                                   | x    | x         | /      | x      |
| Symbol    | x                                                                         | x                                                                        | x                                                      | x    | x         | Boxing | /      |



<a name="8tDc5"></a>
### Unboxing 拆箱转化


- ToPremitive
- toString vs valueOf
- Symbol.toPremitive


<br />如果对象有  Symbol.toPremitive 方法，则会在拆箱时忽略 valueOf 和 toString;<br />否则，如果是默认数字参与的地方，会优先调用 valueOf, 默认是字符串参与的地方，会优先调用 toString

我发现一个有意思的现象
```javascript
o1 = {
    valueOf(){return 1},
}

o2 = {
    toString(){return 2}
}

String(o1)
"[object Object]"

String(o2)
"2"

Number(o1)
1

Number(o2)
2

神奇地，o2.valueOf() 会返回一个 包含 stringOf 的对象

o2.valueOf()
{toString: ƒ}

而o1.toString() 就是调用对象的默认 toString 方法

o1.toString()
"[object Object]"
```


<a name="G5Df9"></a>
### Boxing 装箱



| 类型    | 对象                    | 值          |
| ------- | ----------------------- | ----------- |
| Number  | new Number(1)           | 1           |
| String  | new String('a')         | 'a'         |
| Boolean | new Boolean(true)       | true        |
| Symbol  | new Object(Symbol('a')) | Symbol('a') |


<br />类型和类是不一样的东西<br />
<br />类型是指基本类型，类则是相对应的构造函数，可以生成默认的对象，方便操作。当调用member运算的时候，会将基本值转化为相对应的对象，并调用对象的方法。当点运算结束之后，创建的对象会被销毁。<br />
<br />

<a name="VefPp"></a>
## Statement（语句）

<br />在js标准中， 语句和声明是分开的，在这里被归到一起。<br />

<a name="vKOxY"></a>
### Completion record

<br />JS 引擎需要在语句完成之后知道语句是怎么完成的，那么就需要一个数据结构来做这个事<br />

- [[type]]：normal break continue return throw
- [[value]]：基本类型
- [[target]]: label



<a name="jAU7Y"></a>
### 简单语句


- ExpressionStatement
- EmptyStatement - ;
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement


<br />在简单语句中，核心是ExpressionStatement，是真正驱动Js引擎去计算的语句，其余的全是流程控制。<br />

<a name="0q5Ub"></a>
### 复合语句


- BlockStatement
- IfStatement
- SwitchStatement
   - 在js中不建议使用
      - 每个case后面要加break
      - 性能跟if else差不多（其它语言中，会优于if else）
- IterationStatement
- WithStatement
   - 不建议使用，带来的不确定高
   - 通过with打开一个对象，将这个对象的属性直接放进作用域里去
- LabelledStatement
   - 给大部分语句配label其实没有意义
   - 一般搭配 IterationStatement 使用 
- TryStatement
   - try的花括号不是 BlockStatement，是try自带的，所以不可省略花括号


<br />

<a name="Ifs2m"></a>
#### BlockStatement
```javascript
{

}
```
[[type]]: normal<br />[[value]]: -- (不明)<br />[[target]]: --<br />

<a name="yFQiI"></a>
#### IterationStatement


- while ()
- do {} while()
- for (;;){}
- for ( in ) {}
- for ( of ) {}
- for  await ( of )


<br />for 语句会为 let 声明的变量单独生成一个作用域，跟花括号里面是不一样的作用域， 循环结束，为let单独生成的作用域也销毁<br />
<br />

<a name="Hc70L"></a>
#### 标签、循环、break和continue


- LabelledStatement
- IterationStatement
- ContinueStatment
- BreakStatement
- SwitchStatement


<br />[[type]]: break continue<br />[[value]]: -- <br />[[target]]: label<br />
<br />break continue 配合 label 使用，可以方便地跳出多层循环<br />

<a name="3hRnE"></a>
#### try


```javascript
try {
} catch(err) {
} finally {
}
```
[[type]]: return<br />[[value]]: --<br />[[target]]: label<br />
<br />try 语句后面不是一个 BlockStatement， 所以必须要用花括号括起来，但是try语句的花括号里面也是一个单独的作用域。<br />
<br />即使在 try 里面return了，finally 中的代码一定会继续执行。
<a name="prLvr"></a>
### 
<a name="ce9y6"></a>
## 声明


- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement 
   - 以 var 开始的，一般会被归类到语句里去
- ClassDeclaration
- LexicalDeclaration
   - const, let


<br />一种归类方法是，凡是对后续语句有发生作用的语句都可以叫声明<br />


| <br />- function<br />- function *<br />- async function<br />- async function *<br />- var<br />                                                                                   | <br />- class<br />- const<br />- let<br />                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <br />- 作用域只认 function body<br />- 没有先后关系，永远被被提到函数的最开始去执行<br />- var 的声明会被提到函数头部，但是后面的表达式语句 会在js引擎执行到这一行时再被执行<br /> | <br />- 声明之前去使用被报错<br />- 也有预处理的能力<br /> |


<br />

<a name="gOK7L"></a>
### 预处理机制


```javascript
var a = 2;
void function (){
  a = 1;
  return;
 	var a;
}()
console.log(a)
2
```


```javascript
var a = 2;
void function (){
  a = 1;
  return;
 	const a;
}()
console.log(a)
Uncaught SyntaxError: Missing initializer in const declaration
```


<a name="Fdgxw"></a>
### 作用域


```javascript
var a = 2;
void function (){
  a = 1;
  {
  	var a;
  }
}();
console.log(a)
2

var a = 2;
void function (){
  a = 1;
  {
  	const a = 3;
  }
}();

console.log(a)
1

```


<a name="tHeoE"></a>
## JS执行粒度(运行时)


- 宏任务
   - 传给JavaScript引擎的任务
- 微任务(Promise)
   - 在JavaScript引擎内部的任务
   - 只有 Promise会产生微任务
- 函数调用
- 语句/声明 (completion record)
- 表达式 (reference)
- 直接量/变量/this ...



<a name="q961P"></a>
## 宏任务和微任务

<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/594491/1610611436264-bb9e7169-0dec-465f-949a-f98819e296c0.png#align=left&display=inline&height=152&margin=%5Bobject%20Object%5D&name=image.png&originHeight=304&originWidth=569&size=54153&status=done&style=none&width=284.5)<br />
<br />在使用JavaScript 引擎的时候，会把一段代码传给它<br />
<br />上面这段代码会生成两个微任务(MicroTask), 微任务也被叫做 Job<br />分别是
```javascript
MicroTask 1
x = 1
p = ...
x = 2

MicroTask 2
x = 3
```
把这段代码塞给js引擎，并且进行执行的整个过程被叫做宏任务（MacroTask）<br />
<br />

<a name="xtfPA"></a>
## 事件循环

<br />

<a name="LPBAo"></a>
## 函数调用

<br />

- Execution Context - 执行上下文
- Execution Context Stack - 执行上下文栈
- Running Exexcution Context
   - 栈顶元素
   - 代码里所需要的一切信息都会从这里取出来



<a name="b5RGK"></a>
### Execution Context 

<br />有七大件，但是没有任何一个Execution Context是七大件都有的<br />

- Code Evaluation State
   - 用于 async 函数和 generator，用于记录代码执行到哪
- Function
- Script or Module
   - 二选一
- Generator
   - 只有generator会有
- Realm
   - 保存所有内置对象的王国
- LexicalEnvironment
- VariableEnvironment


<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/594491/1610680299974-18dc2ac5-f21b-439f-99b0-e48655bbc62f.png#align=left&display=inline&height=348&margin=%5Bobject%20Object%5D&name=image.png&originHeight=696&originWidth=1030&size=227280&status=done&style=none&width=515)<br />

<a name="rIwKz"></a>
#### LexicalEnvironment


老版本中只存变量，es2018之后所有执行时候存的时候几乎都保存在了这里<br />

- this
- new.target
- super
- 变量


<br />

<a name="6JOS7"></a>
#### VariableEnvironment


历史包袱，仅仅用来处理 var 声明<br />
<br />

<a name="fvOcf"></a>
### Environment Records

<br />Environment 并不是一个单纯的结构，不是一个池子，而是会形成一个链式结构，链式结构里的每一个节点被叫做Environment Record<br />

- 有继承关系，是一个家族


<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/594491/1610681087467-5275a6f9-6067-49fd-a6ea-08447c0c6c84.png#align=left&display=inline&height=354&margin=%5Bobject%20Object%5D&name=image.png&originHeight=708&originWidth=1461&size=399409&status=done&style=none&width=730.5)<br />
<br />

<a name="i4l1S"></a>
### Closure（闭包）

<br />js中，每一个函数都会生成闭包。<br />
<br />闭包分成两个部分<br />

- Environment Record(环境)
   - 一个object和一个变量的序列来组成
- Code(代码)


<br />js中，每一个函数都会带一个它定义时所在的environment record，变成一个函数的属性<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/594491/1610690850946-7d79dbb0-0994-4081-8d7a-9d9f41d359df.png#align=left&display=inline&height=233&margin=%5Bobject%20Object%5D&name=image.png&originHeight=467&originWidth=1830&size=356348&status=done&style=none&width=915)<br />
<br />更早的版本，environment record的链式结构被叫做 scope chain（作用域链），es2018之后的版本已经没有这个叫法了。<br />

<a name="hAO8U"></a>
### Realm

<br />在2018之前都没有被很好地标准化，2018以后纳入标准。<br />
<br />在一个JS引擎的实例里面，所有的内置对象都会被放进 Realm里面，不同的realm实例之间，它们是互相独立的。<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/594491/1610691248780-ea403921-9f5f-4281-9185-2e4484f9fe27.png#align=left&display=inline&height=135&margin=%5Bobject%20Object%5D&name=image.png&originHeight=270&originWidth=640&size=43975&status=done&style=none&width=320)<br />上面这些都用到了 realm<br />
<br />realm会根据一些外部的条件去创建不同的realm，不同的realm实例之间可以传递对象，但是传递过来之后，它们的prototype是不一致的。<br />
<br />

