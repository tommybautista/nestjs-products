import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is "products" nestJs project. Tutorial at https://www.youtube.com/watch?v=F_oOtaxb0L8&list=PLyztbMAZ6ZWfvvXuimYGyFAMNSqlDPJhm&index=2';
  }
}
