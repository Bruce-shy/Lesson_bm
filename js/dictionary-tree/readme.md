# 字典树(Trie树, 单词查找树)

## 正则表达式
- exec是RegExp类的方法
- match是String类的方法

- 区别：
    1. exec 只会匹配第一个符合的字符串（意味着g对其不起作用），跟所有分组的反向引用
    2. match 是否返回所有匹配的数组 跟正则表达式里是否带着g有关系

### 匹配位置
^:首
$:尾
(?=p): 正向先行断言
(?!p): 负向先行断言

<!-- es6 往后看 -->
(?<=p)
(?<!p)
myname is {name}, age is {age}
background-color
backgroundColor