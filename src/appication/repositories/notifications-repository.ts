import { Notification } from '../enttities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
