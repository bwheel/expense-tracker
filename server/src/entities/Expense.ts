import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import AppBaseEntity from "./AppBaseEntity";
import Category from "./Category";
import Company from "./Company";
import ExpenseTag from "./ExpenseTag";
import User from "./User";


@Entity({name: "expenses"})
export default class Expense extends AppBaseEntity {
    @Column()
    userId!: number;

    @ManyToOne(() => User, (user) => user.expenses)
    @JoinColumn({name: "userId"})
    user?: User;

    @Column()
    companyId!: number;

    @ManyToOne(() => Company, (company) => company.expenses)
    @JoinColumn({name: "companyId"})
    company?: Company;

    @Column()
    categoryId!: number;

    @ManyToOne(() => Category, (category) => category.expenses)
    @JoinColumn({name: "categoryId"})
    category?: Category;

    @OneToMany(() => ExpenseTag, (expenseTag) => expenseTag.expenses)
    expensetoTags?: ExpenseTag[];

}