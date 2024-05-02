import type {ElysiaApp} from '../main';
import {file} from "bun";

(app: ElysiaApp) => app.get('/', file('./pages/index.html'))
