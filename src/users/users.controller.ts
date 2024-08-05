import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// 00:36:00
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() //Get /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }

  //   @Get('interns') //Get /users/interns
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') //Get /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findeOne(id);
  }

  @Post()
  create(
    @Body(ValidationPipe)
    user: CreateUserDto,
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') //Patch /users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto,
  ) {
    // return [id, userUpdate];
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id') //Get /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
