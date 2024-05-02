import {str, int, num, obj, opt} from './lib/aliases';

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

export { auth, account, query, headers};