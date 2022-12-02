import * as fs from 'fs';

const read = async () => {
    let file_exist = fs.existsSync('./files/fileToRead.txt');

    if ( !file_exist ) {
        throw new Error('FS operation failed')
    }

    console.log( fs.readFileSync('./files/fileToRead.txt').toString())
};

await read();