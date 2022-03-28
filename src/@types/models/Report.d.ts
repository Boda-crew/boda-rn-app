declare module '@types' {
  type ReportTargetType = '게시글' | '댓글' | '대댓글';

  interface ReportRequestDTO {
    reportedUserId: number;
    type: ReportTargetType;
    targetId: number;
    content: string;
  }
}
