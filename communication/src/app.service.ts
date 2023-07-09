import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserEvent: CreateUserEvent) {
    console.log('Communication service received event: ', createUserEvent);
    // TODO: send welcome email
  }
}
