import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/** toda referencia a @ en typescript hace referencia a decorators */
/** un class decorators en este caso, puede añadir/modificar parametros en
 * la clase antes de declararla.
 * Tambien puede modificar su comportamiento.
  */

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
