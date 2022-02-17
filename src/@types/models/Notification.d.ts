declare module '@types' {
  interface NotificationDTO {
    id: number;
    /**
     * 댓글달림, 새로운 과제,
     */
    type: number;
    // label: string
    title: string;
    contnet: string;
    create_date: string;
  }
}
