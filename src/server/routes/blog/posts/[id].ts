import type {ElysiaApp} from '../../../main';
import {file} from "bun";
import {json, log} from '../../../lib/atomic';
import {getPostByID} from '../../../lib/sql'
import {Post} from '../../../../types/post'
(app: ElysiaApp) => 
    app.get('blog/post/:id', async ({params} : {
      params: number 
    }) => {
      const posts = await getPostByID(params);
      const data = json(posts);
      log(posts);
      new Response(data);
})

