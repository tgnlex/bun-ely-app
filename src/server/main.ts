import { Elysia } from "elysia";
import {file} from 'bun'
import {autoroutes} from 'elysia-autoroutes'
import {log} from './lib/atomic';
const app = new Elysia()
  .use(
    autoroutes({
      routesDir: "./routes",
      generateTags: false,
    })
  )
  .onError(({ code, error, set }) => {
    if (code === 'VALIDATION') {
      set.status = 418;
      log(error)
      return error.message;
    } else {
      return;
    }
  }).listen(3000);

export type ElysiaApp = typeof app;


