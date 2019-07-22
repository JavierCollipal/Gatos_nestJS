import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';
/** Es posible definir distintos modulos en nuestra aplicación.
 * Un modulo es una clase decorada y sirve para estructurar la aplicación,
 * En este caso estamos especificando el controlador y provider en sus parametros
 * y la repetición de Gatosservice en export hace refencia a que podra ser usado en todo el contexto
 * de clase.
 *  
*/
@Module({
 controllers: [GatosController],
 providers: [GatosService],
 exports: [GatosService]
})
export class GatosModule { }
