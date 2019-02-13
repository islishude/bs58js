/// <reference types="node" />
declare const bs58: {
    decode: (raw: string) => Buffer;
    encode: (buf: Buffer) => string;
};
export default bs58;
