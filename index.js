"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const bs58 = (buf) => {
    const hex = buf.toString("hex");
    let x = buf.length === 0 ? 0n : BigInt("0x" + hex);
    let res = "";
    while (x > 0n) {
        res = table[Number(x % 58n)] + res;
        x = x / 58n;
    }
    for (let i = 0; i < hex.length; i += 2) {
        if (hex[i] == "0" && hex[i + 1] == "0") {
            res = "1" + res;
        }
    }
    return res;
};
exports.default = bs58;
