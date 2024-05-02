import type {ElysiaApp} from '../../main';
import {file} from "bun";
import {json, log} from '../../lib/atomic';

(app: ElysiaApp) => 
    app.get("/blog", () => 
        file('src/pages/blog.html')
    )
