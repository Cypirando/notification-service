import { Content } from '@appication/enttities/content';
import { Notification } from '@appication/enttities/notification';
import { makeNotfication } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications';
import { CanlcelNotification } from './cancel-notifications';
import { NotificationNotFound } from './errors/notifications-not-found';

describe('Calcel notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const calcelNotification = new CanlcelNotification(notificationsRepository);

    const notification = makeNotfication();

    await notificationsRepository.create(notification);
    await calcelNotification.execute({
      notificationId: notification.id,
    });
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const calcelNotification = new CanlcelNotification(notificationsRepository);

    expect(() => {
      return calcelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
