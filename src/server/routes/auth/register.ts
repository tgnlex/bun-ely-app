import type {ElysiaApp} from '../../main';
import {auth} from '../../models';
(app: ElysiaApp) => 
  app.post('/auth/register', (req: Request, res: Response, {body}: {body: any}) => {
    let username = body.username;
    let password = body.password;
    let confirmed = body.confirmed;
  }
)