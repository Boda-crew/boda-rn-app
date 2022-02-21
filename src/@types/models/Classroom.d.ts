declare module '@types' {
  interface ClassroomDTO {
    id: number;
    name: string;
    academy: AcademyDTO;
    teacher: UserDTO;
    createdDateTime: DateValue;
    updatedDateTime: DateValue;
  }

  interface ClassroomRequestDTO {
    name: string;
    teacherId: number;
  }

  interface BelongedClassroomRequestDTO {
    classroomId: number;
    studentId: number;
  }
}
