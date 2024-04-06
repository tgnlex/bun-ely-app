import {file} from 'bun'
import { Elysia } from "elysia";
import {banner, log} from './functions';
import posts from './json/posts';
import version from './json/version'
import {auth, account, slug} from './models';

const app = new Elysia()
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
    log(store['posts'])
    log(getDate())
    return new Response(JSON.stringify(store['posts']))
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
