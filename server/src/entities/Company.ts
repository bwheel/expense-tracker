import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import Account from "./Account";
import AppBaseEntity from "./AppBaseEntity";
import Expense from "./Expense";

@Entity({name:"companies"})
export default class Company extends AppBaseEntity {

    @Column()
    name!: string;

    @Column()
    creditAccountId!: number;

    @OneToOne(() => Account, (account) => account.user)
    @JoinColumn({ name: "creditAccountId" })
    account?: Account;

    @OneToMany(() => Expense, (expense) => expense.user)
    expenses?: Expense[];
}