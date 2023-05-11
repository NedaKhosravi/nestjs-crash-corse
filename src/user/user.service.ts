import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      id: id,
    };
  }

  create(createUserDto: CreateUserDto) {
    return `this user create ${createUserDto.email} ${createUserDto.name} ${createUserDto.phone}`;
  }
}
