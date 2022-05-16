import { NestFactory } from '@nestjs/core';
import { NotificationConsumerModule } from './notification-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationConsumerModule);
  await app.listen(3000);
}
bootstrap();
