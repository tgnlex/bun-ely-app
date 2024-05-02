import type {ElysiaApp} from '../../main';
import {auth} from '../../models';
(app: ElysiaApp) => 
  app.post('/auth/register', ({body}) => 
    body, {
      body: auth, 
      response: auth
  })