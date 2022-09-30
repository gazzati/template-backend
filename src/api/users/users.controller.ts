import { Controller, Get } from "@nestjs/common"
import { UsersService } from "@api/users/users.service"

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.findUsers()
  }
}
