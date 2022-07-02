function logTimeStamp(msg: string) {
  const timestamp = new Date(Date.now()).toLocaleTimeString();
  return `\x1b[33m[${timestamp}]\x1b[0m ` + msg;
}

export = logTimeStamp;
