import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosController } from './gatos/gatos.controller';
import { GatosService } from './gatos/gatos.service';
import { GatosModule } from './gatos/gatos.module';

/** toda referencia a @ en typescript hace referencia a decorators */
/** un class decorators en este caso, puede añadir/modificar parametros en
 * la clase antes de declararla.
 * Tambien puede modificar su comportamiento.
  */

@Module({
  imports: [GatosModule],
  controllers: [AppController, GatosController],
  providers: [AppService, GatosService],
})

export class AppModule {}
