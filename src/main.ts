// Libraries
import {file} from 'bun'
import { Elysia } from "elysia";
// JSON Imports
import posts from './data/json/posts';
import version from './data/json/version'
// Model Imports
import {auth, account} from './lib/models/models';
// Function Imports
import {banner, log, read} from './lib/functions/textOps';
import {logTimestamp} from './lib/functions/timestamp';
import {jsonRes, jsonLog} from './lib/functions/jsonOps'
import {error} from './lib/classes/serverError';
// Var Imports
import {slug, idx} from './lib/vars/indexSlug';
// Create Elysia Server
const app = new Elysia()
  .onError(({ code, error, set }) => {
    if (code === 'VALIDATION') {
      set.status = 418;
      log(error)
      read(error.message);
    } else {
      return;
    }
  })
  .get("/", () => file('./pages/index.html'))
  .get("/version", () => {
    jsonLog(version);
    jsonRes(version);
  })
.group('/user', (app) => app
    // Auth Forms //
  .get('/login', () => file('./pages/login.html')) 
  .get('/register', () => file('./pages/register.html'))
    // Auth Routes //
  .post('/auth/login', ({body}) => body, {
    body: auth,
    response: auth
  })
  .post('/auth/register', ({body}) => body, {
    body: account, 
    response: account
  })
  .post('/profile', () => file('./pages/profile.html'))
)
// Blog Routes
.group('/blog', (app) => app
  .get("/", () => file('./pages/blog.html'))
  .get('/post/:id', ({params}) => params, {
    params: slug,
    post: posts[idx]
  })
  .get('/post/*', () => {
    logTimestamp();
    jsonRes(posts);
  })
  .post('/new', ({body, set}) => {
    logTimestamp();
    if (error) {
      set.status = 418;
    } else {
      return {body}
    }
  })
).listen(3000)
console.log(
  `${banner(`Based!`)}
  [BUN]: Server running at ${app.server?.hostname}:${app.server?.port}`
);
