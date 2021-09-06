## 说明

```bash

#准备需要替换翻译的excel数据,拷贝放在excel文件夹下的i18n文件的sheet1和sheeet2中

#准备需要替换的.json源文件,放在json文件夹下面,例如:en-CA.json

# 安装读取excel依赖
$ npm install node-xlsx --save

# 执行脚本
$ node index.js

# 在json文件夹中生成新的json文件格式化,拷贝到项目需要的地方,能准确替换80%以上,找不到的会被标记 `===缺失`

```
