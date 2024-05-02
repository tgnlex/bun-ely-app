import type {ElysiaApp} from '../../../main';
import {file} from "bun";
import {json, log} from '../../../lib/atomic';
import {getAllPosts} from '../../../lib/sql'
import {Post} from '../../../../types/post'
(app: ElysiaApp) => 
    app.get('blog/post/*', async () => {
      const posts = await getAllPosts();
      const data = json(posts);
      log(data);
      new Response(data);
      
})