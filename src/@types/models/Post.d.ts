declare module '@types' {
  interface PostDTO {
    id: number;
    author: number;
    title: string;
    textbook: string;
    content: string;
    type: string;
    classrooms: ClassroomDTO[];
    createdDateTime: DateValue;
    updatedDateTime: DateValue;
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
