import { Controller, Get, Query, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/docs')
  @Redirect('/api/docs/v1', 302)
  getDocs() {}
}
