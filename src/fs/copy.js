import * as fs from 'fs';

const copy = async () => {
    let files_exist = fs.existsSync('src/fs/files');
    let copy_exits = fs.existsSync('src/fs/files_copy');

    if ( !files_exist || copy_exits ) {
        throw new Error('FS operation failed')
    }
   
    fs.cp('src/fs/files/hello.txt', 'src/fs/files_copy/hello.txt', ()=>{})
};

copy();