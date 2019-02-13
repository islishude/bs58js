"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const zero = 0n;
const base = 58n;
const encode = (buf) => {
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
        else {
            break;
        }
    }
    return res;
};
const decode = (raw) => {
    if (raw.length === 0) {
        return Buffer.from("");
    }
    let leader = "";
    let bn = 0n;
    let isBreak = false;
    for (let i = 0; i < raw.length; i++) {
        const curChar = raw.charAt(i);
        const weight = table.indexOf(curChar);
        if (weight === -1) {
            throw new Error("Invalid param");
        }
        bn = bn * base + BigInt(weight);
        if (!isBreak) {
            if (i - 1 > 0 && raw[i - 1] !== "1") {
                isBreak = true;
                continue;
            }
            if (curChar === "1") {
                leader += "00";
            }
        }
    }
    let res = leader + bn.toString(16);
    if (res.length % 2 !== 0 && bn > zero) {
        res = "0" + res;
    }
    return Buffer.from(res, "hex");
};
const bs58 = { decode, encode };
exports.default = bs58;
