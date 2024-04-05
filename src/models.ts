import {str, int, num, obj, opt} from './modelAlias';

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