import AppBaseEntity from './AppBaseEntity';
import {Entity, Column, OneToMany} from 'typeorm';
import Expense from './Expense';

@Entity("categories")
export default class Category extends AppBaseEntity{

    @Column()
    name!: string;

    @OneToMany(() => Expense, (expense) => expense.user)
    expenses?: Expense[];
}