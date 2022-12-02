import * as fs from 'fs';

const rename = async () => {
    let file_exist = fs.existsSync('./files/wrongFilename.txt');
    let newFile_exits = fs.existsSync('./filesproperFilename.md');

    if ( !file_exist || newFile_exits ) {
        throw new Error('FS operation failed')
    }

    fs.rename('./files/wrongFilename.txt','./files/properFilename.md', ()=>{} )
};

await rename();