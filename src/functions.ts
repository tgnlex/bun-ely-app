import figlet from 'figlet';

export const read = (text:string) => {
  return text;
}

export const log = (data: any) => {
  return console.log(data);
}
export const json = (data: any) => {
  return JSON.stringify(data);
}


export const res = (data: any) => {
  return new Response(data);
}

export const greet = () => {
  let greeting = `Hello World`;
  log(greeting)
  read(greeting)
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