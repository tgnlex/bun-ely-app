import { t } from "elysia";

let str = t.String();
let int = t.Integer();
let num = t.Numeric();
const obj = (type: any) => t.Object(type);
const opt = (type: any) => t.Optional(type);

export {str, int, num, obj, opt};