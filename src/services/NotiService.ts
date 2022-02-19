import notifee, {
  EventType,
  Notification,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

export const backgroundListener = () =>
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    console.log('[noti background]', type, detail);

    const { notification, pressAction } = detail;
    if (!pressAction || !notification?.id) return;

    // 푸시알림을 터치했을 때
    if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
      await notifee.decrementBadgeCount();
      await notifee.cancelNotification(notification.id);
    }
  });

export const onDisplayNotification = async (noti: Notification) => {
  console.log('[noti message]', noti);

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    ...noti,
    android: {
      channelId,
    },
    ios: {
      foregroundPresentationOptions: {
        alert: true,
        badge: true,
        sound: true,
      },
    },
  });
};

/**
 * 알림을 예약한다.
 */
export const onCreateTriggerNotification = async (date: Date) => {
  // Create a time-based trigger
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
  };

  // Create a trigger notification
  await notifee.createTriggerNotification(
    {
      title: 'Meeting with Jane',
      body: 'Today at 11:20am',
      android: {
        channelId: 'your-channel-id',
      },
    },
    trigger,
  );
};

export const incrementBadgeCount = () => notifee.incrementBadgeCount();

export const clearBadgeCount = () => notifee.setBadgeCount(0);
