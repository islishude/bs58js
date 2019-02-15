import { strictEqual } from "assert";
import bs58 from ".";

const testData = [
  {
    raw: "",
    res: "",
  },
  {
    raw: "61",
    res: "2g",
  },
  {
    raw: "626262",
    res: "a3gV",
  },
  {
    raw: "636363",
    res: "aPEr",
  },
  {
    raw: "73696d706c792061206c6f6e6720737472696e67",
    res: "2cFupjhnEsSn59qHXstmK2ffpLv2",
  },
  {
    raw: "00eb15231dfceb60925886b67d065299925915aeb172c06647",
    res: "1NS17iag9jJgTHD1VXjvLCEnZuQ3rJDE9L",
  },
  {
    raw: "516b6fcd0f",
    res: "ABnLTmg",
  },
  {
    raw: "572e4794",
    res: "3EFU7m",
  },
  {
    raw: "ecac89cad93923c02321",
    res: "EJDM8drfXA6uyA",
  },
  {
    raw: "10c8511e",
    res: "Rt5zm",
  },
  {
    raw: "00000000000000000000",
    res: "1111111111",
  },
  {
    raw:
      "801184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd206ec97e",
    res: "5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD",
  },
  {
    raw: "003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187",

    res: "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS",
  },
];

for (const { raw, res } of testData) {
  strictEqual(bs58.encode(raw), res);
  strictEqual(bs58.decode(res), raw);
}

console.log("Test successful!");
