import figlet from 'figlet';
import {greeting} from '../vars/strings';
export const read = (text:string) => {
  return text;
}
export const log = (data: any) => {
  console.log(data);
}

export const greet = (custom?: string | undefined) => {
  if (typeof custom !== 'string') {
    log(greeting)
    read(greeting);
  } else {
    log(custom);
    read(custom);
  }
 
 
}
export const banner = (data: string) => {
  figlet(data, function (err, data) {
    if (err) {
      log("Something went wrong..");
      console.dir(err);
    }
    log(data)
    return data;
  })
}