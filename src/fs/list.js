import * as fs from 'fs';
const list = async () => {
    let folder_exist = fs.existsSync('src/fs/files');
    
    if ( !folder_exist ) {
        throw new Error('FS operation failed');
    }

    let files_list = fs.readdirSync('src/fs/files', ()=>{});

    console.log( files_list )
};

await list();