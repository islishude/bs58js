const table = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const zero = 0n;
const base = 58n;

const encode = (buf: Buffer) => {
  const hex = buf.toString("hex");
  let x = hex.length === 0 ? zero : BigInt("0x" + hex);
  let res = "";

  while (x > zero) {
    res = table[Number(x % base)] + res;
    x = x / base;
  }

  for (let i = 0; i < hex.length; i += 2) {
    if (hex[i] === "0" && hex[i + 1] === "0") {
      res = "1" + res;
    }
  }
  return res;
};

export const decode = (raw: string): Buffer => {
  const res = 0n;
  for (let i = raw.length - 1; i >= 0; --i) {
    const index = table.indexOf(raw[i]);
    if (index === -1) {
      throw new Error("Invalid param");
    }
    // @ts-ignore
    res = res + index * base ** i;
  }
  // TODO: implenment BigInt to Buffer
  return Buffer.from("");
};

export default encode;
