import figlet from 'figlet';
const date = new Date;


export const read = (text:string) => {
  return text;
}
export const log = (data: any) => {
  console.log(data);
}

export const getTimestamp = () => {
  let stamp = date.toLocaleString();
  return stamp;
}

export const logTimestamp = async () => {
  let stamp = await getTimestamp();
  log(stamp);
}

export const greet = (greeting?: string | undefined) => {
  if (typeof greeting === 'string') {
    log(greeting);
    return greeting;
  } else {
    const message = 'No greeting specified'
    log(message);
    return message;
  }
}
const res = (data: any) => {
  return new Response(data);
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
export const json = (data: any) => {
  return JSON.stringify(data);
}
export const jsonRes = (data: any) => {
  return res(json(data));
}
export const jsonLog = (data: any) => {
  log(json(data));
}