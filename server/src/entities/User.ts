import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import Account from "./Account";
import AppBaseEntity from "./AppBaseEntity";
import Expense from "./Expense";
import Password from "./Password"

@Entity({ name: "users" })
export default class User extends AppBaseEntity {

    @Column({ unique: true })
    email!: string

    @Column({ nullable: true })
    preferredName?: string;

    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column()
    currentPasswordId!: number;

    @OneToOne(() => Password, (password) => password.currentUser)
    @JoinColumn({ name: "currentPasswordId" })
    currentPassword!: Password;

    @OneToMany(() => Password, (password) => password.oldPasswordUser)
    previousPasswords: Password[] = [];

    @Column()
    accountId!: number;

    @OneToOne(() => Account, (account) => account.user)
    @JoinColumn({ name: "accountId" })
    account?: Account;

    @OneToMany(() => Expense, (expense) => expense.user)
    expenses?: Expense[];
}