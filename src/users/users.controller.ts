import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// 00:36:00
@Controller('users')
export class UsersController {
  @Get() //Get /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN'|'ADMIN'|'ENGINEER') {
    return [];
  }

  //   @Get('interns') //Get /users/interns
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') //Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //Patch /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //Get /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
