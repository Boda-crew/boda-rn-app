declare module '@types' {
  interface FamilyDTO {
    parent: UserDTO;
    student: UserDTO;
  }

  interface FamilyRequestDTO {
    parentId: number;
    studentId: number;
  }
}
