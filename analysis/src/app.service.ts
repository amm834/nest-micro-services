import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async handleUserCreated(data: CreateUserEvent) {
    console.log('User created analysis service - ', data);
  }
}
