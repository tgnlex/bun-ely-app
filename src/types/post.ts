export interface Post {
  id: number;
  title: string;
  content: string;
}
export interface Posts {
  [index: number]:string,  
  posts: Post[]
}