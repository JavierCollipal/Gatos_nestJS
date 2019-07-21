import { Controller, Get, Req,Res } from '@nestjs/common';
/**el string 'gatos' declarado en el class decorator Controller hace referencia 
 * a un route path, en este caso 'gatos' esta definiendo que la ruta /gatos 
 * va hacer referencia a este controlador
 */
@Controller('gatos')
export class GatosController {
    /** En este caso si dejamos el decorator de get sin añadir un prefijo
     * cada petición get a /gatos va retornar la funcion Todos Los gatos
    */

    /**de todas formas podemos añadir un prefijo 'todosMisGatos' a get para que la
     * ruta quede de esta forma /gatos/todosMisGatos
     */
    @Get()
    TodosLosGatos(@Res() response: Response): string {
        return 'esta accion retorna todos los gatos de la db'
    }
}
/** un controlador es el encargado de manejar las  HTTP Request y dejarle las tareas complejas
 * providers
 */