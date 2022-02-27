declare module '@types' {
  interface CommentDTO {
    id: number;
    postId: number;
    author: number;
    content: string;
    createdDateTime: string;
    updatedDateTime: string;
  }

  interface CommentRequestDTO {
    author: number;
    content: string;
  }
}
