import axios from 'axios'
import { BASE_URL } from './base'
import { PostSchema, type Post } from '@/datamodel/post'

const api = axios.create({
  baseURL: BASE_URL + '/post',
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
})

async function getPost(id: string): Promise<Post> {
  const response = await api.post('/' + id)
  const result = PostSchema.safeParse(response.data)
  if (result.success) {
    return response.data as Post
  } else {
    throw Error()
  }
}
