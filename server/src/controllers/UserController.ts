import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Authorized
} from "routing-controllers";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

@JsonController()
export class UserController {
  @Authorized()
  @Get("/users")
  index() {
    return getRepository(User).find({
      select: ["firstName", "lastName", "userName"]
    });
  }

  @Authorized()
  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return getRepository(User).findOneById(id, {
      select: ["firstName", "lastName", "userName", "messages"],
      relations: ["messages"]
    });
  }

  @Post("/users")
  post(@Body() user: User) {
    const { firstName, lastName, userName, password } = user;
    return getRepository(User).save(new User(firstName, lastName, userName, password));
  }

  @Authorized()
  @Put("/users/:id")
  async put(@Param("id") id: number, @Body() userData: any) {
    const userRepo = getRepository(User);
    const { firstName, lastName, userName, password } = userData
    const user = await userRepo.findOneById(id);
    Object.assign(user, { firstName, lastName, userName, password });

    return userRepo.save(user);
  }

  @Authorized()
  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
