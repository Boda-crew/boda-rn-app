import { PostDTO, UserDTO } from '@types';
import { formatDate } from './timeHelper';

export const renderAnonymousUserName = (user: UserDTO) => {
  if (user.type === '학생') return '익명 학생';
  else if (user.type === '학부모') return '익명 학부모';
  else if (user.type === '관리자') return '관리자';
  else return user.name;
};

export const renderAssignmentTitle = (assignment: PostDTO) => {
  return `${formatDate(assignment.createdDateTime)} 과제`;
};
