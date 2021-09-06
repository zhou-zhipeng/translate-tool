## 操作说明


### 这是一个协助前端开发进行国际化多语言翻译包翻译工作的工具,可以减少大量的人工翻译时间

### step1: 准备需要替换翻译的excel数据,拷贝放在excel文件夹下的i18n文件的sheet1和sheeet2中

### step2: 准备需要替换的.json源文件,放在json文件夹下面,例如:en-CA.json

### step3: 安装读取excel依赖
```bash 
$ npm install node-xlsx --save
```

### step4: 执行脚本
```bash 
$ node index.js
```
### step5: 在json文件夹中生成新的json文件格式化,拷贝到项目需要的地方,能准确替换80%以上,找不到的会被标记 `===缺失`

