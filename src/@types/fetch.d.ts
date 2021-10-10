declare module '@types' {
  interface FetchProps<T> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    timeout?: number;
    isFormData?: boolean;
    onSuccess?: (data: T) => void;
    onError?: (err: string) => void;
  }
}
