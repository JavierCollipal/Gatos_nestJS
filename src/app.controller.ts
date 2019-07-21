import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/**class decorator de controller entregado por nestjs*/


@Controller()
export class AppController {
  /**constructor de app controller, en este caso esta
   * definiendo a Appservice como un readonly
   */
  constructor(private readonly appService: AppService) {}
/** method decorator de get entregado por nestjs*/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
