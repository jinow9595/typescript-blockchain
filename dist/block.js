class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "010101010101101001", "111101010101108811", "i'm data", 202203291612);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=block.js.map