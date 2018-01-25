import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
  getManager,
  getRepository,
  BeforeUpdate
} from "typeorm";
import * as jwt from "jsonwebtoken";
import * as argon2 from "argon2";
import { Message } from "./Message";

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column("character varying") firstName: string;
  @Column("character varying") lastName: string;
  @Column("character varying") userName: string;
  @Column("character varying", { nullable: true }) token: string;
  @Column("character varying") passwordHash: string;
  password: string;

  @OneToMany(type => Message, message => message.user)
  messages: Message[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    firstName: string,
    lastName: string,
    userName: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
  }

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    const options = {
      timeCost: 8,
      memoryCost: 15,
      parallelism: 2,
      type: argon2.argon2d
    };

    if (this.password) {
      this.passwordHash = await argon2.hash(this.password, options);
      this.password = null;
    }
  }

  authenticateUser(password: string) {
    return argon2.verify(this.passwordHash, password);
  }

  static findByToken(token: string) {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.userId) {
      return getRepository(User).findOneById(decoded.userId);
    } else {
      return Promise.reject("User not found");
    }
  }

  static findByUsername(userName: string) {
    return getRepository(User).findOne({ where: { userName } });
  }

  generateAuthToken() {
    this.token = jwt.sign(
      {
        userId: this.id
      },
      process.env.JWT_SECRET,
      { expiresIn: "1 day" }
    );

    return getRepository(User).save(this);
  }
}
