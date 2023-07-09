import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { Services } from './constants';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject(Services.COMMUNICATION)
    private readonly communicationServiceClient: ClientProxy,
    @Inject(Services.ANALYTICS)
    private readonly analyticsServiceClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    this.communicationServiceClient.emit(
      'user_created',
      new CreateUserEvent(createUserDto.email),
    );
    this.analyticsServiceClient.emit(
      'user_created',
      new CreateUserEvent(createUserDto.email),
    );
  }

  getAnalytics() {
    return this.analyticsServiceClient.send(
      {
        cmd: 'get_analytics',
      },
      {},
    );
  }
}
