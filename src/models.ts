import { t } from "elysia";

let str = t.String();
let int = t.Integer();
let num = t.Numeric();
const obj = (type: any) => t.Object(type);
const opt = (type: any) => t.Optional(type);

const auth = obj({
  username: str, 
  password: str
})

const account = obj({  
  age: int,
  firstname: str,
  lastname: str,
  email: str,
  username: str, 
  password: str, 
})
const query = obj({
  name: str, 
  alias: opt(str),

})
const slug = obj({
  id: num,
})
export { auth, account, slug, query};