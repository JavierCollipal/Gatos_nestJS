import { Module } from '@nestjs/common';
import { GatosModule } from './gatos/gatos.module';

/** toda referencia a @ en typescript hace referencia a decorators */
/** un class decorators en este caso, puede añadir/modificar parametros en
 * la clase antes de declararla.
 * Tambien puede modificar su comportamiento.
  */

@Module({
  imports: [GatosModule],
})

export class AppModule {}
