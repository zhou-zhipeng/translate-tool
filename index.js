const fs = require("fs");
const xlsx = require('node-xlsx')

const i18n = 'i18n' // 可修改成自己的文件名
const sheets = xlsx.parse(`./excel/${i18n}.xlsx`)


function selectData(data) {
    if(typeof data !== 'object' || data === null){
        throw new TypeError('传入参数不是对象')
    }
    const newData = {}, data1 = getExcel(), dataKeys = Object.keys(data);
    dataKeys.forEach(value => {
       const currentDataValue = data[value];
       if (typeof currentDataValue !== "object" || currentDataValue === null) {
           newData[value] = currentDataValue + '===缺失';
           data1.arrList.forEach(item => {
                if (currentDataValue === item.oldVal) {
                    newData[value] = item.newVal
                } else {
                    if (currentDataValue && item.oldVal) {
                        if (currentDataValue.toLowerCase() === (item.oldVal).toString().toLowerCase()) {
                            newData[value] = item.newVal
                        }
                    }
                }
            })
            data1.arrList1.forEach(item => {
                if (currentDataValue === item.oldVal) {
                    newData[value] = item.newVal
                } else {
                    if (currentDataValue && item.oldVal) {
                        if (currentDataValue.toLowerCase() === (item.oldVal).toString().toLowerCase()) {
                            newData[value] = item.newVal
                        }
                    }
                }
            })
        } else { 
           newData[value] = selectData(currentDataValue);
        } 
     }); 
    return newData;
}
function getExcel () {
    const arrList = [],sheetData = sheets[0]['data'], arrList1 = [],sheetData1 = sheets[1]['data'];
    for(var idx in sheetData){
        arrList.push({
            index: idx,
            oldVal: sheetData[idx][0],
            newVal: sheetData[idx][1]
        })
    }
    for(var idx in sheetData1){
        arrList1.push({
            index: idx,
            oldVal: sheetData1[idx][0],
            newVal: sheetData1[idx][1]
        })
    }
    return {
        arrList,
        arrList1
    }
}
function createJson (json) {
    const buffer = JSON.stringify(json)
    const filename = 'es-ES' // 可修改成需要生成json的文件名
    fs.writeFile(`./json/${filename}.json`, buffer, function(err) {
        if (err) {
            console.log("Write failed: " + err);
            return;
        }
        console.log("Write completed.");
    });
}
function getJson () {
    fs.readFile('./json/en-CA.json','utf8',function (err, data) {
        if (err) {
            console.log("read failed: " + err);
            return;
        }
        const json = JSON.parse(data);
        createJson(selectData(json))
    });
}
getJson()