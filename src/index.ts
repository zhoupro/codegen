import  node_sql_parser  from "node-sql-parser";
import * as ejs from 'ejs';
import { getWhereInputNode } from './utils/tree';
import inspector, { database } from './utils/inspector';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const {Parser} = node_sql_parser

async function logTables() {
    const tables = await inspector.tables();
    console.log("here",tables);
}
await logTables()

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

database.destroy()
