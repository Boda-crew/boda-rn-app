declare module '@types' {
  interface ReCommentDTO {
    id: number;
    author: UserDTO;
    commentId: number;
    content: string;
    createdDateTime: string;
    updatedDateTime: string;
  }
}
