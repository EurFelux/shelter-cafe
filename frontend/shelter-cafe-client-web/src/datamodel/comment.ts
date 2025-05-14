import type { Reply } from './reply'

export interface Comment {
  id: string
  content: string
  replies?: Array<Reply>
}
