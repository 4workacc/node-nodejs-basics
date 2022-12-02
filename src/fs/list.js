import * as fs from 'fs';
const list = async () => {
    let folder_exist = fs.existsSync('files');
    
    if ( !folder_exist ) {
        throw new Error('FS operation failed');
    }

    let files_list = fs.readdirSync('files', ()=>{});

    console.log( files_list )
};

await list();