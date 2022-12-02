import * as fs from 'fs';

const copy = async () => {
    let files_exist = fs.existsSync('files');
    let copy_exits = fs.existsSync('files_copy');

    if ( !files_exist || copy_exits ) {
        throw new Error('FS operation failed')
    }
   
    fs.cp('./files/hello.txt', './files_copy/hello.txt', ()=>{})
};

copy();