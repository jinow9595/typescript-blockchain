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
Block.validateStructure = (block) => typeof block.index === "number" && typeof block.hash === "string" && typeof block.previousHash === "string" && typeof block.timestamp === "number" && typeof block.data === "string";
const genesisBlock = new Block(0, "g32wegwawsdfagsdfbaewgassahadefsad", "f123tfeaw3eg23wfewsasgsw3efsdasdf", "0000000000", 1849735750);
const blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calcBlockHash(newIndex, previousBlock.hash, data, newTimeStamp);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (block) => Block.calcBlockHash(block.index, block.previousHash, block.data, block.timestamp);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
// console.log(Block.calcBlockHash(1, "1000001", "1110001", 202203281622));
// console.log();
// console.log(createNewBlock("hello"));
// console.log();
// console.log(createNewBlock("jinow"));
createNewBlock("1111111111");
createNewBlock("2222222222");
createNewBlock("3333333333");
console.log(getBlockchain());
// yarn start
// 
//# sourceMappingURL=index.js.map