import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  async handleUserCreated(data: CreateUserEvent) {
    console.log('User created analysis service - ', data);
    this.analytics.push({
      ...data,
      createdAt: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
