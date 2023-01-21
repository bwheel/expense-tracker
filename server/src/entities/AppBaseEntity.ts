import { Entity, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class AppBaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    /**
     * Created Date

     * Special column which is automatically set
     * to the record's insertion time.
     */
    @CreateDateColumn()
    createdDate!: Date;

    /**
     * Updated Date
     *
     * Special column which is automatically set
     * to the record's updated time.
     */
    @UpdateDateColumn()
    udpatedDate!: Date;

    /**
     * Deleted Date
     *
     * Special column which is automatically set
     * to the record's deleted time.
     */
    @DeleteDateColumn()
    deletedDate?: Date;
}