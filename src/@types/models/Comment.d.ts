declare module '@types' {
  interface CommentDTO {
    id: number;
    postId: number;
    author: UserDTO;
    content: string;
    createdDateTime: string;
    updatedDateTime: string;
    goodUserIdList: number[];
    reComments: ReCommentDTO[];
  }

  interface CommentRequestDTO {
    author: number;
    content: string;
  }

  interface LikeCommentDTO {
    commentId: number;
    userId: number;
  }
}
