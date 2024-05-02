import type {ElysiaApp} from '../../../main';
import {file} from "bun";
import {json, log, read} from '../../../lib/atomic';
(app: ElysiaApp) => 
  app.get('/blog/post/:id',  ({request,params}) => { 
  //  const post = posts[params];
    //const data = json(post);
    new Response('data');   
  })