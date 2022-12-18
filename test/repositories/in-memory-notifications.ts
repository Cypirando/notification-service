import { Notification } from '../../src/appication/enttities/notification';
import { NotificationsRepository } from '../../src/appication/repositories/notifications-repository';

// camada de persistencia
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];
  
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
