import {db} from '../db/db';
const query = (sql: string) => {
  const q = db.query(`${sql}`)
  return q;
}

const getAllAccounts = () => {
  query(`SELECT * FROM accounts`)
}
const getAccountByID = (id: number) => {
  const q = query(`
  SELECT * FROM accounts 
  WHERE account.id = ${id},
  `)
  return q;
}
const getAllPosts = () => {
  query(`SELECT * FROM posts`)
  
}
const getPostByID = (id: number) => {
  query(`
  SELECT * FROM post 
  WHERE post.id = ${id},
  `)
}
const addPost = (id: number, title: string, body: string, author_id: number) => {
query(`
  INSERT INTO Posts (id, title, body, author_id) 
  VALUES ('${id}, ${title}, ${body}, ${author_id}')
`)
}

const getAllComments = () => {
  query(`SELECT * FROM comments;`);
}
const getCommentByID = (id: string) => {
  query(`
  SELECT * FROM comment 
  WHERE comment.id = ${id},
  `)
}

export {
  getAllAccounts, 
  getAccountByID, 
  getAllPosts,
  getPostByID, 
  getAllComments, 
  getCommentByID, 
  addPost
}