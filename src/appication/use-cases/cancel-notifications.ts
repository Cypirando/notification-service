import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notifications-not-found';

interface calcelNotificationRequest {
  notificationId: string;
}

type calcelNotificationResponse = void

@Injectable()
export class CanlcelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  
  async execute(
    request: calcelNotificationRequest,
  ): Promise<calcelNotificationResponse> {
    const { notificationId } = request;
     const notification = await this.notificationsRepository.findById(notificationId,)
    if (!notification) {
        throw new NotificationNotFound()
    }
    notification.cancel();
     
    await this.notificationsRepository.save(notification);
    };
  }

