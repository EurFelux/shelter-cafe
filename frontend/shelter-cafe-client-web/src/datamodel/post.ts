import type { Comment } from './comment'

export enum PostStatus {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
}

export interface SimplePost {
  id: string
  title: string
  description?: string
  content: string

  created: Date
  updated: Date
  status: PostStatus
  views: number
  likes: number
  category: string
  banner?: string
}

export interface Post extends SimplePost {
  comments: Array<Comment>
}

export const mockPosts: SimplePost[] = [
  {
    id: 'post-001',
    title: 'Vue 3 新特性解析',
    description:
      '全面介绍 Vue 3 的 Composition API 和性能优化全面介绍 Vue 3 的 Composition API 和性能优化全面介绍 Vue 3 的 Composition API 和性能优化全面介绍 Vue 3 的 Composition API 和性能优化',
    content: '...详细内容...',
    created: new Date('2023-05-10'),
    updated: new Date('2023-05-15'),
    banner: '/images/vue3-banner.jpg',
    status: PostStatus.Published,
    views: 1250,
    likes: 89,
    category: '前端开发',
  },
  {
    id: 'post-002',
    title: 'TypeScript 高级技巧',
    description: '深入讲解 TS 类型编程和实用工具类型',
    content: '...详细内容...',
    created: new Date('2023-06-20'),
    updated: new Date('2023-06-20'),
    status: PostStatus.Draft,
    views: 0,
    likes: 0,
    category: '编程语言',
  },
  {
    id: 'post-003',
    title: 'Rust 入门指南',
    description: 'Rust 语言基础语法和所有权系统',
    content: '...详细内容...',
    created: new Date('2023-04-05'),
    updated: new Date('2023-04-07'),
    banner: '/images/rust-logo.png',
    status: PostStatus.Published,
    views: 842,
    likes: 45,
    category: '系统编程',
  },
  {
    id: 'post-004',
    title: '微服务架构设计',
    description: '如何设计高可用的微服务系统',
    content: '...详细内容...',
    created: new Date('2023-07-12'),
    updated: new Date('2023-07-18'),
    status: PostStatus.Archived,
    views: 2100,
    likes: 156,
    category: '架构设计',
  },
  {
    id: 'post-005',
    title: 'React 18 新特性',
    description: '并发渲染和自动批处理详解',
    content: '...详细内容...',
    created: new Date('2023-08-01'),
    updated: new Date('2023-08-05'),
    status: PostStatus.Published,
    views: 980,
    likes: 72,
    category: '前端开发',
  },
]

export const mockPost: Post = {
  id: 'post-mock-' + Math.random().toString(36).substring(2, 9),
  title: 'Vue3 组合式API实战指南',
  description: '全面解析Vue3组合式API的核心用法和最佳实践',
  content: `## 什么是组合式API？
组合式API是Vue3引入的全新编程范式，它允许开发者通过函数式的方式组织组件逻辑...

### 核心特性
1. **响应式系统**：基于Proxy实现更高效的响应式追踪
2. **生命周期钩子**：onMounted、onUpdated等新API
3. **逻辑复用**：通过composables实现跨组件逻辑复用

## 实战示例
\`\`\`javascript

import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    return { count, double }
  }
}
\`\`\`

## 性能优化
- 更小的打包体积
- 更好的Tree-shaking支持
- 更高效的渲染性能`,
  created: new Date('2023-09-15'),
  updated: new Date('2023-09-20'),
  status: PostStatus.Published,
  views: 1250,
  likes: 89,
  category: '前端框架',
  banner: '/images/vue-banner.jpg',
  comments: [
    {
      id: 'comment-001',
      content: '这篇文章对Vue3的组合式API讲解得很透彻！',
      replies: [
        {
          id: 'reply-001',
          commentId: 'comment-001',
          content: '确实，特别是逻辑复用部分写得很好',
        },
        {
          id: 'reply-002',
          commentId: 'comment-001',
          content: '感谢作者分享！',
        },
      ],
    },
    {
      id: 'comment-002',
      content: '请问性能优化部分能再详细些吗？',
      replies: [
        {
          id: 'reply-003',
          commentId: 'comment-002',
          content: '同问，期待后续更新',
        },
      ],
    },
  ],
}
