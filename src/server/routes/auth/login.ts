import type {ElysiaApp} from '../../main';
import {file} from "bun";
import {auth} from '../../models';

(app: ElysiaApp) => 
    app.post('/auth/login', ({body}) => 
      body, {
        body: auth,
        response: auth,
      }
    )