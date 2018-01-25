import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity()
export class Message {
  @PrimaryGeneratedColumn() id: number;

  @Column("character varying") content: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(type => User, user => user.messages, {
    eager: true
  })
  user: User;
}
