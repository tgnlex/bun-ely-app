import {str, int, num, obj, opt} from './modelAliases';

const auth = obj({
  username: str, 
  password: str
})

const account = obj({  
  email: str,
  username: str, 
  password: str, 
})
const query = obj({
  name: str, 
  alias: opt(str),

})
const headers = obj({
  authorization: str,
})
const slug = obj({
  id: num,
})

export { auth, account, slug, query, headers};