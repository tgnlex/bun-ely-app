import figlet from 'figlet';
export const read = (text:string) => {
  return text;
}

export const banner = (str: string) => {
  return figlet.textSync(`${str}`)
}