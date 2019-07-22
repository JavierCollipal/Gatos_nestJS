import { Controller, Get, Req, Res } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { Gato } from './interfaces/gatos.interface';
/**el string 'gatos' declarado en el class decorator Controller hace referencia 
 * a un route path, en este caso 'gatos' esta definiendo que la ruta /gatos 
 * va hacer referencia a este controlador
 */
@Controller('gatos')
export class GatosController {
    /**Inyeccion de depedencias mediante controlador */
    /**En este caso en vez de importar a GatosService y crear un nuevo objeto con new,
     * lo pasamos directamente en el constructor y eventualmente estara disponible para su uso como objeto
     * en toda la clase GatosControllerz
    */
    constructor(private readonly GatosService: GatosService) { }
    /** En este caso si dejamos el decorator de get sin añadir un prefijo
     * cada petición get a /gatos va retornar la funcion Todos Los gatos
    */

    /**de todas formas podemos añadir un prefijo 'todosMisGatos' a get para que la
     * ruta quede de esta forma /gatos/todosMisGatos
     */
    @Get()
    async TodosLosGatos(): Promise<Gato[]> {
        return this.GatosService.buscarTodos();
    }
}
/** un controlador es el encargado de manejar las  HTTP Request y dejarle las tareas complejas
 * providers
 */