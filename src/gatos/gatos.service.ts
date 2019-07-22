import { Injectable } from '@nestjs/common';

interface Gato {
    nombre: string,
    edad: number,
    raza: string
}
/**Un decorator Injectable */
@Injectable()
export class GatosService {
    private readonly gatos: Gato[] = [];

    crearGato(gato: Gato) {
        this.gatos.push(gato);
    }

    buscarTodos(): Gato[] {
        let resultados = [{nombre: 'lanita',edad: 8, raza:'angora'},{nombre: 'serafina',edad: 8, raza:'angora'}];
        return resultados;
    }
    
}
