import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Leanne Graham', email: 'leane@email.com', role: 'INTERN' },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'ervin@email.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Mary Queen',
      email: 'mary@email.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Collins Todor',
      email: 'collins@email.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);

      if (!rolesArray.length)
        throw new NotFoundException('User role Not found');

      return rolesArray;
    }
    return this.users;
  }
  findeOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  create(user: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  // 46:00
  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findeOne(id);
  }

  delete(id: number) {
    const removedUser = this.findeOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
