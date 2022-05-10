let delay = 100;
let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\  ', '\r\|   ','\r\/   ', '\r\-   ', '\r\\   ','\r\|']
  for (let r of spinner) {
    setTimeout(() => {
      process.stdout.write(r);
    }, delay)   
    delay += 200;
}

setTimeout(() => {
  process.stdout.write("\n")
}, delay)
