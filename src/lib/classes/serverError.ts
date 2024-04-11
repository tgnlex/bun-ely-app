import {serverErrorMessage as message} from '../vars/strings';
export class ServerError extends Error {
  constructor(message: string, asserter=undefined) {
   super(message);
   Error.captureStackTrace?.(this, asserter || this.constructor); 
  }
}
export const error = new ServerError(message);