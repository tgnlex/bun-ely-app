import type {ElysiaApp} from '../../main';
import {file} from "bun";

(app: ElysiaApp) => app.get('/login', () => {
    new Response(file('src/pages/login.html'))
});