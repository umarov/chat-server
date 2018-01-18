import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import { getRepository } from 'typeorm';
import { User} from '../entity/User';

@Controller()
export class UserController {
    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return "This action returns user #" + id;
    }

    @Post("/users")
    post(@Body() user: any) {
        return getRepository(User).save(new User(user));
    }

    @Put("/users/:id")
    async put(@Param("id") id: number, @Body() userData: any) {
        const userRepo = getRepository(User);
        const user = await userRepo.findOneById(id);
        Object.assign(user, userData);

        return userRepo.save(user);
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }
}
