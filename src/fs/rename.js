import * as fs from 'fs';

const rename = async () => {
    let file_exist = fs.existsSync('src/fs/files/wrongFilename.txt');
    let newFile_exits = fs.existsSync('src/fs/filesproperFilename.md');

    if ( !file_exist || newFile_exits ) {
        throw new Error('FS operation failed')
    }

    fs.rename('src/fs/files/wrongFilename.txt','src/fs/files/properFilename.md', ()=>{} )
};

await rename();