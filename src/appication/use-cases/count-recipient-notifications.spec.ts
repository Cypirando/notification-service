import { Content } from '@appication/enttities/content';
import { Notification } from '@appication/enttities/notification';
import { makeNotfication } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications';
import { CountRecipientNotification } from './count-recipient-notification';

describe('Count recipint notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotfication({
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
        makeNotfication({
            recipientId: 'recipient-1',
          }),
    );

    await notificationsRepository.create(
        makeNotfication({
            recipientId: 'recipient-2',
          }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
