import { Module } from '@nestjs/common';
import { SendNotification } from '@appication/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controlers/notifications.controller';
import { CanlcelNotification } from '@appication/use-cases/cancel-notifications';
import { CountRecipientNotification } from '@appication/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@appication/use-cases/get-recipient-notifications';
import { ReadNotification } from '@appication/use-cases/read-notifications';
import { UnreadNotification } from '@appication/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers:[
    SendNotification,
    CanlcelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
    
  ]
})
export class HttpModule {}
