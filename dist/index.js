"use strict";
// // only working at ts not js
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class Human implements Human {
//     public name: string;
//     public age: number;
//     public gender: string;
//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// const test_people = new Human("jinow", 28, "female");
// // ? => optional
// const hello = (name: string, age?: number, gender?: string): string => {
//     return `hello ${name}`;
// };
// console.log(hello(test_people.name));
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calcBlockHash = (index, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
console.log(Block.calcBlockHash(1, "1000001", "1110001", 202203281622));
const genesisBlock = new Block(0, "010101010101101001", "111101010101108811", "i'm data", 202203291612);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map