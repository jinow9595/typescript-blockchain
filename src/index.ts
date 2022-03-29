// // only working at ts not js
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

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

import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }

    static calcBlockHash = (index: number, previousHash: string, data:string, timestamp: number): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
}

console.log(Block.calcBlockHash(1, "1000001", "1110001", 202203281622));

const genesisBlock: Block = new Block(0, "010101010101101001", "111101010101108811", "i'm data", 202203291612);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

// 0.9 4분부터

export {};
