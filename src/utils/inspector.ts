import Knex from 'knex';

import { default as schemaInspectorImport } from "knex-schema-inspector";
const schemaInspector = schemaInspectorImport?.default;


const database = Knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'pass',
    database: 'auth',
    charset: 'utf8',
  },
});

const inspector = schemaInspector(database);

export default inspector;