import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@appication/enttities/notification';
import { Content } from '@appication/enttities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceleAt,
        createAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
