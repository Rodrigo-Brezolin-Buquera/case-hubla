import { knex } from "knex"


export class BaseDatabase {
    protected static db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/data/database.db",
    },
    useNullAsDefault: true, 
    pool: {
        min: 0,
        max: 1
    } 
})
}