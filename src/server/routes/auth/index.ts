import type {ElysiaApp} from '../../main';
import {file} from "bun";
(app: ElysiaApp) => 
  app.get('/register', () => 
        new Response(file('./pages/register.html'))
  )
     .get('/login', () => {
      new Response(file('src/pages/login.html'))
  });