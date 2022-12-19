import { Content } from "@appication/enttities/content";
import { Notification, NotificationProps } from "@appication/enttities/notification";

type Override = Partial<NotificationProps>

export function makeNotfication(override:Override = {}) {
    return  new Notification({
        category: 'socila',
        content: new Content('Nova solicitação de amizade '),
        recipientId: 'recipient-2',
        ...override,
      });
}