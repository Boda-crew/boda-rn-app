import { FetchProps } from '@types';
import { API_ENDPOINT } from '@env';
import { getConfig } from './config';

/**
 * @auth `Bearer ...`
 * @timeout default 8000ms
 * @SyntaxError발생시 `JSON Parse error: Unrecognized token '<'`
 * html형식의 응답을 받아서 에러가 발생한다. `await res.text()`로 응답메시지를 받으면 된다. 보통은 url 오류이다.
 */
const onFetch = async <T>({
  url,
  method,
  body,
  isFormData,
  timeout,
  onSuccess,
  onError,
}: FetchProps<T>) => {
  // eslint-disable-next-line no-undef
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(`${API_ENDPOINT}${url}`, {
      method,
      ...getConfig(body, isFormData),
      signal: controller.signal,
    });
    const data = await res.json();
    console.log(`[fetch ${res.status}] ${method} ${url}`);

    if (!res.ok) onError && onError(data);
    else onSuccess && onSuccess(data);
  } catch (e) {
    onError && onError('통신 에러');
  } finally {
    clearTimeout(timeoutId);
  }
};

onFetch.defaultProps = {
  method: 'GET',
  isFormData: false,
  timeout: 8000,
};

export default onFetch;
