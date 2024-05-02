import type {ElysiaApp} from '../../main';
import {file} from "bun";
(app: ElysiaApp) => 
  app.post('/profile', () => {
   new Response(file('./pages/profile.html'));
  }
)

