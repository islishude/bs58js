import { strictEqual } from "assert";
import bs58 from ".";

const testData = [
  {
    buf: Buffer.from("", "hex"),
    res: "",
  },
  {
    buf: Buffer.from("61", "hex"),
    res: "2g",
  },
  {
    buf: Buffer.from("626262", "hex"),
    res: "a3gV",
  },
  {
    buf: Buffer.from("636363", "hex"),
    res: "aPEr",
  },
  {
    buf: Buffer.from("73696d706c792061206c6f6e6720737472696e67", "hex"),
    res: "2cFupjhnEsSn59qHXstmK2ffpLv2",
  },
  {
    buf: Buffer.from(
      "00eb15231dfceb60925886b67d065299925915aeb172c06647",
      "hex",
    ),
    res: "1NS17iag9jJgTHD1VXjvLCEnZuQ3rJDE9L",
  },
  {
    buf: Buffer.from("516b6fcd0f", "hex"),
    res: "ABnLTmg",
  },
  {
    buf: Buffer.from("572e4794", "hex"),
    res: "3EFU7m",
  },
  {
    buf: Buffer.from("ecac89cad93923c02321", "hex"),
    res: "EJDM8drfXA6uyA",
  },
  {
    buf: Buffer.from("10c8511e", "hex"),
    res: "Rt5zm",
  },
  {
    buf: Buffer.from("00000000000000000000", "hex"),
    res: "1111111111",
  },
  {
    buf: Buffer.from(
      "801184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd206ec97e",
      "hex",
    ),
    res: "5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD",
  },
  {
    buf: Buffer.from(
      "003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187",
      "hex",
    ),
    res: "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS",
  },
];

for (const { buf, res } of testData) {
  strictEqual(bs58.encode(buf), res);
  strictEqual(bs58.decode(res).toString("hex"), buf.toString("hex"));
}

console.log("Test successful!");
