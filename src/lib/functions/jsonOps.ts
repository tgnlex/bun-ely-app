import {res} from './http';
import {log} from './textOps';
export const json = (data: any) => {
  return JSON.stringify(data);
}
export const jsonRes = (data: any) => {
  return res(json(data));
}
export const jsonLog = (data: any) => {
  log(json(data));
}