import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port: number = 3000;
  console.log(`Esta escuchando el puerto http://localhost:${port}`)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
