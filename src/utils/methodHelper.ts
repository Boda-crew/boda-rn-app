import { CommentDTO } from '@types';
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

export const onHaptic = (type: HapticFeedbackTypes = 'impactLight') => {
  ReactNativeHapticFeedback.trigger(type, {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  });
};

export const extract = <T>(
  target: T,
  properties: Partial<Record<keyof T, boolean>>,
) => {
  const result: Partial<T> = {};

  for (const key of Object.keys(target) as Array<keyof T>) {
    const value = properties[key];
    if (!value) {
      result[key] = target[key];
    }
  }

  return result;
};

export const getDummyComment = ({
  commentId,
  postId,
}: {
  commentId: number;
  postId: number;
}): CommentDTO => ({
  id: commentId,
  postId,
  author: {
    id: 0,
    certified: false,
    createdDateTime: '',
    updatedDateTime: '',
    name: '',
    phone: '',
    type: '관리자',
  },
  content: '로딩중...',
  createdDateTime: '',
  updatedDateTime: '',
  goodUserIdList: [],
  reComments: [],
});
