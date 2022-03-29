declare module '@types' {
  type NotificationType = '공지' | '과제' | '댓글' | '대댓글';

  interface NotificationDTO {
    target: NotificationType;
    /**
     * 공지/62/댓글/01/대댓글/78
     */
    targetString: string;
    title: string;
    content: string;
  }
}
