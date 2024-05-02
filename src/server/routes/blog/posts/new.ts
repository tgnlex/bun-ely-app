import type {ElysiaApp} from '../../../main';
import {file} from "bun";
import { getAllPosts, addPost } from '../../../lib/sql';
import {log} from '../../../lib/atomic';
import { request } from '@playwright/test';
const error = new Error;
error.message = `an error has occurred while attempting to create new post`;
(app: ElysiaApp) => app.post('blog/post/new', async ({body}) => {  
  if (error) {
    log(error.message)
    return error;
  } else {
    const name = request.body.name;
    const posts = [];
    const data = await getAllPosts()
    posts.push(data)
    let id = posts.length 
    addPost(id, title, body, )
    return {body}
    
  }
})
  