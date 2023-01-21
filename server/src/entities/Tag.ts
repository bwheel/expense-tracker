import AppBaseEntity from './AppBaseEntity';
import { Column, Entity, OneToMany, } from 'typeorm';
import ExpenseTag from './ExpenseTag';

@Entity({ name: "tags" })
export default class Tag extends AppBaseEntity {

    @Column()
    name!: string;

    @OneToMany(() => ExpenseTag, (expenseTag) => expenseTag.tags)
    tagToExpenses?: ExpenseTag[];
}