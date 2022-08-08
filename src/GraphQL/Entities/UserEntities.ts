import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
        id!: number;

    @Column()
        firstname!: string;

    @Column()
        lastname!: string;

    @Column()
        adress!: string;

    @Column()
        city!: string;

    @Column()
        country!: string;

    @Column()
        email!: string;

    @Column()
        password!: string;

    @CreateDateColumn()
        createdat!: Date;
}