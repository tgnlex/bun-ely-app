import type {ElysiaApp} from '../../../main';
import {file} from "bun";
import {json, log} from '../../../lib/atomic';
import posts from '../../../data/posts'

(app: ElysiaApp) => 
    app.get('blog/post/*', () => {
      const data = json(posts);
      log(data);
      return data;
  })