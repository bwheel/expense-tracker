import AppBaseEntity from "./AppBaseEntity";
import { Entity, Column, ManyToOne, OneToOne } from "typeorm";
import User from "./User";
import Company from "./Company";
import Transaction from "./Transaction";


export const AllAccountTypes = ["Credit", "Debit"] as const;
export type AccountTypes = (typeof AllAccountTypes)[number];

@Entity({ name: "accounts" })
export default class Account extends AppBaseEntity {

    @Column({
        type: "enum",
        enum: AllAccountTypes,
        default: "credit"
    })
    accountType!: AccountTypes;

    @OneToOne(() => Company, (company) => company.account)
    company?: Company;


    @OneToOne(() => User, (user) => user.account)
    user?: User;


    @ManyToOne(() => Transaction, (transaction) => transaction.creditAccount)
    creditTransactions: Transaction[] = [];
    
    @ManyToOne(() => Transaction, (transaction) => transaction.debitAccount)
    debitTransactions: Transaction[] = [];
}