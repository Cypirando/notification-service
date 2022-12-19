import { Content } from '@appication/enttities/content';
import { Notification } from '@appication/enttities/notification';
import { makeNotfication } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications';
import { CountRecipientNotification } from './count-recipient-notification';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get recipint notification', () => {
  it('should be able to get recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
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

    const { notification } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notification).toHaveLength(2);
    expect(notification).toEqual(expect.arrayContaining([
        expect.objectContaining({recipientId: 'recipient-1'}),
        expect.objectContaining({recipientId: 'recipient-1'}),
    ]));
  });
});
