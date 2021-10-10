import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert } from 'react-native';

interface Props {
  hasUnsavedChanges: boolean;
  title?: string;
  content?: string;
  sample?: boolean;
}

/**
 * @sample 기본 경고 메시지
 */
export const usePreventGoBack = (props: Props) => {
  const nav = useNavigation();

  useEffect(() => {
    if (!props.hasUnsavedChanges) nav.removeListener('beforeRemove', () => {});
    else
      nav.addListener('beforeRemove', e => {
        e.preventDefault();
        Alert.alert('', '입력된 정보를 모두 잃습니다.', [
          { text: '취소' },
          { text: '확인', onPress: () => nav.dispatch(e.data.action) },
        ]);
      });
  }, [props.hasUnsavedChanges]);
};
