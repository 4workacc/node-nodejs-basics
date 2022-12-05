import * as fs from 'fs';

const copy = async () => {
    getAllFiles('./src/fs/files', './src/fs/files_copy')    
};

// const GetFilelistRecursively2 = ((targetpath, depth = -1) => {
//     let result = [];
//     let dirs = fs.readdirSync(targetpath);
//     dirs.forEach(file => {
//         let filepath = targetpath + "/" + file;
//         let isDir = fs.lstatSync(filepath).isDirectory();
//         result.push({path:filepath, isDir:isDir });
//         if ( isDir ) {
//             if ( depth == 0 ) return result;
//             result = result.concat( GetFilelistRecursively2(filepath, depth - 1));
//         }
//     });
//     return result;
// });

// const CopyFilesRecursively = ((srcpath, destpath) => {
//     if ( !fs.existsSync(destpath) ) {
//         fs.mkdirSync(destpath,{ recursive: true } );
//     }
//     let targetList = GetFilelistRecursively2( srcpath );
//     targetList.forEach( node => {
//         let newpath = destpath + node.path.substring(srcpath.length);
//         if ( node.isDir) {
//             if ( !fs.existsSync(destpath) ) fs.mkdirSync(newpath);
//         } else {
//             fs.copyFile(node.path, newpath, err => {if (err) throw err});
//         }
//     });
// });

const getAllFiles = (filepath, fileCopyPath) => {
    let objs = fs.readdirSync(filepath);
    for ( let i =0; i<objs.length; i++) {
        if ( fs.lstatSync(`${filepath}/${objs[i]}`).isDirectory()) {
            fs.mkdir(`${fileCopyPath}/${objs[i]}`, ()=>{});
            getAllFiles(`${filepath}/${objs[i]}`, `${fileCopyPath}/${objs[i]}`);
        }
        else {
            fs.copyFile(`${filepath}/${objs[i]}`, `${fileCopyPath}/${objs[i]}`, ()=>{})
        }
    }
}
copy();