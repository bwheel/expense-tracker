import AppBaseEntity from "./AppBaseEntity";
import { Column, Entity, JoinTable, OneToMany } from "typeorm";
import Account from "./Account";

@Entity("transactions")
export default class Transaction extends AppBaseEntity {

    @Column()
    amount!: number;

    @Column()
    creditAccountId!: number;

    @OneToMany(() => Account, (account) => account.creditTransactions)
    @JoinTable({ name: "creditAccountId" })
    creditAccount?: Account;

    @Column()
    debitAccountId!: number;

    @OneToMany(() => Account, (account) => account.debitTransactions)
    @JoinTable({ name: "debitAccountId" })
    debitAccount?: Account;
}