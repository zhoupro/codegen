import Knex from 'knex';

import { SchemaInspector} from "knex-schema-inspector"


export const database = Knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'pass',
    database: 'auth',
    charset: 'utf8',
  },
});

const inspector = SchemaInspector(database);

export default inspector;