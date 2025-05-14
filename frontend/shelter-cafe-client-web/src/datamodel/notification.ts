export enum NotificationType {
  Mention = 'mention',
  Like = 'like',
  Comment = 'comment',
  System = 'system',
}

export interface Notification {
  id: string
  type: NotificationType
}
