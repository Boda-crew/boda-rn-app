import { ReportRequestDTO } from '@types';
import { _axios } from '../AxiosService';


export const create_report = (data: ReportRequestDTO) => {
  return _axios<void>({
    url: `/report`,
    method: 'POST',
    data,
  });
};
