import figlet from 'figlet';

export const log = (data: any) => {
  return console.log(data);
}

export const read = (text:string) => {
  return text;
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