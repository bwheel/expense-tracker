import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AppBaseEntity from "./AppBaseEntity";
import Expense from "./Expense";
import Tag from "./Tag";

@Entity("expenses_to_tags")
export default class ExpenseTag extends AppBaseEntity {

    @Column()
    expenseId!: number;

    @ManyToOne(() => Expense, (expense) => expense.expensetoTags)
    @JoinColumn({name: "expenseId"})
    expenses?: Expense[];

    
    @Column()
    tagId!: number;

    @ManyToOne(() => Tag, (expense) => expense.tagToExpenses)
    @JoinColumn({name: "tagId"})
    tags?: Expense[];
}