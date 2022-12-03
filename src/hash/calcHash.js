import * as crypto from 'crypto';
import * as fs from 'fs';

const calculateHash = async () => {
    let textData = fs.readFileSync('src/hash/files/fileToCalculateHashFor.txt').toString();
    let hash = crypto.createHash('sha256');
    let data = hash.update(textData, 'utf-8');
    let gen_hash = data.digest('hex');
    console.log( gen_hash )
};

await calculateHash();


