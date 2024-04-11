import {log} from './textOps';

export const getTimestamp = () => {
  let stamp = Date.now();
  return stamp;
}

export const logTimestamp = async () => {
  let stamp = await getTimestamp();
  log(stamp);
}