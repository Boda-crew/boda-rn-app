declare module '@types' {
  type PostTargetType = '학생' | '학부모' | '모두';
  type PostType = '과제' | '공지';

  interface PostDTO {
    id: number;
    author: UserDTO;
    title: string;
    textbook: string;
    content: string;
    target: PostTargetType;
    type: PostDTO;
    classrooms: ClassroomDTO[];
    createdDateTime: string;
    updatedDateTime: string;
  }

  interface PostCreateDTO {
    author: number;
    content: string;
    textbook: string;
    title: string;
    type: PostDTO;
  }

  interface PostUpdateDTO extends PostCreateDTO {
    id: number;
  }
}
