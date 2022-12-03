import * as fs from 'fs';

const read = async () => {
    let file_exist = fs.existsSync('src/fs/files/fileToRead.txt');

    if ( !file_exist ) {
        throw new Error('FS operation failed')
    }

    console.log( fs.readFileSync('src/fs/files/fileToRead.txt').toString())
};

await read();