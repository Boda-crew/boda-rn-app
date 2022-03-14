declare module '@types' {
  interface PostDTO {
    id: number;
    author: UserDTO;
    title: string;
    textbook: string;
    content: string;
    type: string;
    classrooms: ClassroomDTO[];
    createdDateTime: string;
    updatedDateTime: string;
  }

  interface PostCreateDTO {
    author: number;
    content: string;
    textbook: string;
    title: string;
    type: string;
  }

  interface PostUpdateDTO extends PostCreateDTO {
    id: number;
  }
}
