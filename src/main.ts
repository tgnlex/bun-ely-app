import {file} from 'bun'
import { Elysia } from "elysia";
import {banner, res, log, read, json} from './functions';
import posts from './json/posts';
import version from './json/version'
import {auth, account, slug} from './models';

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
  .listen(3000);

app.group('/user', app => app
  .get('/login', () => { `<h1>Login Form</h1>` }) 
  .get('/register', () => { `<h1>Registration Form</h1>`})
  .post('/login', ({body}) => body, {
    body: auth,
    response: auth
  })
  .post('/register', ({body}) => body, {
    body: account, 
    response: account
  })
  .post('/profile', () => "Profile Route")
)
// Blog Routes
app.group('/blog', app => app
  .state(posts)
  .get("/", () => file('./pages/blog.html'))
  .get('/post/:id', ({params}) => params, {
    params: slug
  })
  .get('/post/*', ({store, getDate}) => {
    let posts = store['posts']
    log(getDate())
    log(posts)
    res(json(posts))
  })
  .post('/new', ({store, body, set, getDate}) => {
    log(getDate())
    set.status = 201;
    return {body}
  })
)

console.log(
  `${banner(`Based!`)}
  🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
