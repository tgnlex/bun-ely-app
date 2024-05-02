import type {ElysiaApp} from '../../../main';
import {file} from "bun";
import {log} from '../../../lib/atomic';
const error = new Error;
error.message = `an error has occurred while attempting to create new post`;
(app: ElysiaApp) => app.post('blog/post/new', ({body, set}) => {  
  if (error) {
    log(error.message)
    return error;
  } else {
    return {body}
  }
})
  