import {file} from 'bun'
import { Elysia } from "elysia";
import {banner, res, log, read, json} from './lib/functions';
import posts from './json/posts';
import version from './json/version'
import {auth, account, slug} from './models/models';

const app = new Elysia()
  .onError(({ code, error, set }) => {
    if (code === 'VALIDATION') {
      set.status = 418;
      log(error)
      read(error.message);
    } else {
      set.status = 418;
    }
  })
  .decorate('getDate', () => Date.now())
  .get("/", () => file('./pages/index.html'))
  .get("/version", () => {
    log(version);
    return version;
  })
.group('/user', (app) => app
  .get('/login', () => file('./pages/login.html')) 
  .get('/register', () => file('./pages/register.html'))
  .post('/auth/login', ({body}) => body, {
    body: auth,
    response: auth
  })
  .post('/auth/register', ({body}) => body, {
    body: account, 
    response: account
  })
  .post('/profile', () => "Profile Route")
)
// Blog Routes
.group('/blog', (app) => app
  .state(posts)
  .get("/", () => file('./pages/blog.html'))
  .get('/post/:id', ({params}) => params, {
    params: slug
  })
  .get('/post/*', ({store, getDate}) => {
    let posts = store['posts'];
    log(getDate());
    res(json(posts));
  })
  .post('/new', ({body, set, getDate}) => {
    log(getDate());
    set.status = 201;
    return {body}
  })
).listen(3000)
console.log(
  `${banner(`Based!`)}
  [BUN]: Server running at ${app.server?.hostname}:${app.server?.port}`
);
