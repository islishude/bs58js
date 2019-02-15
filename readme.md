Package getbs58 creates base58 encoder/decoder functions by BigInt.

## Usage

```typescript
import bs58 from "getbs58";

const raw = "00eb15231dfceb60925886b67d065299925915aeb172c06647";
const result = bs58.encode(raw);
console.log(result);
// => 1NS17iag9jJgTHD1VXjvLCEnZuQ3rJDE9L
console.log(bs58.decode(result) === raw);
// => true
```
