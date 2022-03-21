declare module '@types' {
  type AccountType = '관리자' | '선생' | '학생' | '학부모';

  interface UserDTO {
    id: number;
    name: string;
    phone: string;
    certified: boolean;
    type: AccountType;
    createdDateTime: DateValue;
    updatedDateTime: DateValue;
  }

  interface UserRequestDTO {
    name: string;
    phone: string;
    type: AccountType;
  }

  interface UserLoginDTO {
    phone: string;
    token?: string;
  }

  interface StudentDTO extends UserDTO {
    teacher: UserDTO;
    classrooms: ClassroomDTO[];
    grade: number;
    parents: UserDTO;
  }

  interface StudentRequestDTO {
    grade: number;
    id: number;
    teacherId: number;
  }

  interface TeacherDTO extends UserDTO {
    classrooms: ClassroomDTO[];
  }
}
