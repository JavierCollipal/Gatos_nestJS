/** NestFactory es el core de nest.js */
/** NestFactory cuenta con algunos metodos estaticos que nos permiten crear la instancia */
import { NestFactory } from '@nestjs/core';
/** AppModule hace referencia a la class AppModule */
/**AppModule tiene la definición principal de los controladores a usar*/
import { AppModule } from './app.module';
/**functión asincrona para correr la app, con await esta bloqueando esa parte del codigo hasta que se resuelve */
async function bootstrap() {
  /** el metodo create se encarga de devolver un application object
   *  el cual cumple con la interface de InestApplication
  */
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
