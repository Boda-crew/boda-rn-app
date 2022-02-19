import { Platform } from 'react-native';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import AuthService from './AuthService';
import * as NotiService from './NotiService';

/**
 * only work for iOS, Android는 권한이 필요없다.
 */
export const requestPushNotificationPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
};

export const onMessageReceived = async (
  message: FirebaseMessagingTypes.RemoteMessage,
) => {
  // notifee 푸시알림
  const { notifee } = message.data as typeof message.data & {
    notifee?: string;
  };
  if (notifee) {
    return NotiService.onDisplayNotification(JSON.parse(notifee));
  }

  console.log('[push message] ', message);
};

/*
 * 앱을 키고 있을 때 발생한 알림에 대한 처리
 * App.ts의 가장 바깥 훅에 넣어야 한다. cleanup 하는 것을 잊어선 안된다.
 */
export const foregroundListener = () => messaging().onMessage(onMessageReceived);

/**
 * 앱이 백그라운드에 때 발생한 알림에 대한 처리
 * index.js에, App 로직 외부에 호출해야한다.
 */
export const backgroundListener = () =>
  messaging().setBackgroundMessageHandler(async message => {
    await onMessageReceived(message);
    await NotiService.incrementBadgeCount();
  });

/*
 * 기기의 토큰 얻는다.
 */
export const getToken = async () => {
  return Platform.OS === 'ios'
    ? await messaging().getAPNSToken()
    : await messaging().getToken();
};

export const saveTokenToDB = async (token: string) => {
  const userId = AuthService.getUserId();
  if (!userId) return;

  //
};

export const registerDiviceToken = async () => {
  const token = await getToken();
  if (!token) return;

  saveTokenToDB(token);
};

/**
 *  token의 변화를 감지한다.
 */
export const refreshTokenListener = () =>
  messaging().onTokenRefresh(token => {
    saveTokenToDB(token);
  });

export const removeTokenDB = async () => {
  const userId = AuthService.getUserId();
  const token = await getToken();
  if (!userId || !token) return;

  // API
};
