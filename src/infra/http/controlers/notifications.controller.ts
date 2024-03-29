import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotification } from '@appication/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notifications-body';
import { NotificationVielModel } from '../view-models/notification-view-models';
import { CanlcelNotification } from '@appication/use-cases/cancel-notifications';
import { ReadNotification } from '@appication/use-cases/read-notifications';
import { UnreadNotification } from '@appication/use-cases/unread-notification';
import { CountRecipientNotification } from '@appication/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@appication/use-cases/get-recipient-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CanlcelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotification,
    private getRecipientNotifications: GetRecipientNotification,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });
    return {
      count,
    };
  }

  @Get('from/:recipientId')
  async getFormRecipient(@Param('recipientId') recipientId: string) {
    const { notification } = await this.getRecipientNotifications.execute({
      recipientId,
    });
    return {
      notification: notification.map(NotificationVielModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return {
      notification: NotificationVielModel.toHTTP(notification),
    };
  }
}
