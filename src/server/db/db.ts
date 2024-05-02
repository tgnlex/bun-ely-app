import { Database} from "bun:sqlite";

const db = new Database('../db/bun.db');
/**
 * uncomment and use this space to create tables, views etc when needed. 
db.query(`
  CREATE TABLE comments (
  )
`)
**/
export {db};