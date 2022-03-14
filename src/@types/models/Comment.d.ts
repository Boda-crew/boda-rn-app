declare module '@types' {
  interface CommentDTO {
    id: number;
    postId: number;
    author: UserDTO;
    content: string;
    createdDateTime: string;
    updatedDateTime: string;
  }

  interface CommentRequestDTO {
    author: number;
    content: string;
  }
}
