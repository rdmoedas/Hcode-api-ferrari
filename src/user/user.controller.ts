import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserWithId(@Param('id') id: number) {
    return this.userService.get(+id);
  }

  @Get('email/:email')
  async getUserWithEmail(@Param('email') email: string) {
    return this.userService.getByEmail(email);
  }
}
