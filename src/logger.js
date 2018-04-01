const shelljs = require('shelljs');
const chalk = require('chalk');
const moment = require('moment');
const _ = require('lodash');
let path = require('path')


module.exports = {
    base(color,logType,...arg) {
        let time = chalk[color](moment().format())
        let type = chalk[color](logType)
        let paths = chalk[color](__filename)
        let args = [time,type];
        for (const iterator of arg) {
            // 数组对象直接字符串输出
            let reslut = iterator;
            if(_.isObject(iterator)||_.isArray(iterator)){
                reslut = JSON.stringify(iterator)
            }
            args.push(chalk[color](reslut))
        }
        console.log.apply(null, args);
      },
      info(){
           this.base('green','info',...arguments)
      },
      warn(){
           this.base('red','warn',...arguments)
      }
    }