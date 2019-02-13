Package getbs58 creates base58 encoder/decoder functions by BigInt.

## Usage

```typescript
import bs58 from "getbs58";

const buf = Buffer.from(
  "00eb15231dfceb60925886b67d065299925915aeb172c06647",
  "hex"
);
const result = bs58.encode(buf);
console.log(result);
// => 1NS17iag9jJgTHD1VXjvLCEnZuQ3rJDE9L
const debuf = bs58.decode(result).toString("hex");
// => 00eb15231dfceb60925886b67d065299925915aeb172c06647
```
