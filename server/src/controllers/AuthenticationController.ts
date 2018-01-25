import {
  JsonController,
  Post,
  Body,
  OnUndefined,
  Res
} from "routing-controllers";
import { Response } from "koa";
import { User } from "../entity/User";

@JsonController()
export class AuthenticationController {
  @Post("/auth")
  @Body({
    required: true
  })
  @OnUndefined(404)
  async auth(@Body() authBody: any, @Res() response: Response) {
    const user = await User.findByUsername(authBody.userName);
    if (user) {
      if (await user.authenticateUser(authBody.password)) {
        user.generateAuthToken();
        const { firstName, lastName, userName, token } = user;
        return { firstName, lastName, userName, token };
      } else {
        response.status = 401
      }
    }
  }
}
