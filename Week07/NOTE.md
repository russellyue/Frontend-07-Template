# 第七周 重学 JavaScript 2

## 运算符优先级

依次从高往下

### Member

- a.b
- a[b]
- foo`string`
- super.b
- super['b']
- [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
- new Foo()

### New

- new foo

例子：
new a()()
会先执行千面的 new a()
new new a()
会先执行后面的 new a()




