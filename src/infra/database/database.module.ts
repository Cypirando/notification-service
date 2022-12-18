import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/appication/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrimasNotificationRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrimasNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
