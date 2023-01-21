
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import AppBaseEntity from "./AppBaseEntity";
import User from "./User";

@Entity({ name: "passwords" })
export default class Password extends AppBaseEntity {

    @Column()
    password!: string;

    @Column()
    salt!: string;

    @Column()
    workCost!: number;

    @Column({
        comment: "This field is only set when the password is updated."
    })
    oldPasswordUserId?: number;

    @ManyToOne(() => User, (user) => user.previousPasswords)
    @JoinColumn({ name: "oldPasswordUserId" })
    oldPasswordUser?: User;

    @OneToOne(()=> User, (user)=>user.currentPassword)
    currentUser?: User;
}