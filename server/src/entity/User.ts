import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { Message } from "./Message";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('character varying')
    firstName: string;

    @Column('character varying')
    lastName: string;

    @Column('character varying')
    userName: string;

    @Column('character varying')
    idToken: string;

    @OneToMany(type => Message, message => message.user)
    messages: Message[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    constructor({ firstName, lastName, userName, idToken }: any) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.idToken = idToken;
    }

}
