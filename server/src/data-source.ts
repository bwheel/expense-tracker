import { DataSource } from "typeorm";
import {
    Account,
    Category,
    Company,
    Expense,
    ExpenseTag,
    Password,
    Tag,
    Transaction,
    User
}
    from './entities'


const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    entities: [
        Account,
        Category,
        Company,
        Expense,
        ExpenseTag,
        Password,
        Tag,
        Transaction,
        User
    ],
})

PostgresDataSource.initialize().then(ds => {
    console.log(ds);
})