import { Injectable } from '@nestjs/common';

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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findeOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  // 43:00
  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  );
}
