import * as fs from 'fs';

const remove = async () => {
    let file_exist = fs.existsSync('./files/fileToRemove.txt');

    if ( !file_exist ) {
        throw new Error('FS operation failed')
    }

    fs.unlink('./files/fileToRemove.txt', ()=>{})
};

await remove();