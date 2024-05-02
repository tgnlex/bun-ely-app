import { Database} from "bun:sqlite";

const db = new Database('../db/bun.db', {create: true});

const query = (sql: string) => {
  db.query(`${sql}`)
}

export {db, query};