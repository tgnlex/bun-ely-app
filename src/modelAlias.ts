import { t } from "elysia";

const str = t.String();
const int = t.Integer();
const num = t.Numeric();
const obj = (type: any) => t.Object(type);
const opt = (type: any) => t.Optional(type);

export {str, int, num, obj, opt};