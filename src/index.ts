
import { Parser } from 'node-sql-parser';
import * as ejs from 'ejs';
import * as path from 'path';
import { getWhereInputNode } from './utils/tree';

const parser = new Parser();
const ast:any = parser.astify('SELECT * FROM t where a = "#aa" and b = "#bb" or c  > 3 and d in (1,2,3,4)'); // mysql sql grammer parsed by default
getWhereInputNode(ast?.where)

let people = ['geddy', 'neil', 'alex']
ejs.renderFile(path.join(__dirname, 'templates/nextjs/test.ejs'), {people:people}, {}, function(err, str){
    if (err){
        console.log(err)
    }else{
        console.log(str)
    }
});