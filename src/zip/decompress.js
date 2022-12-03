import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    var gzip = zlib.createUnzip();
    var r = fs.createReadStream('src/zip/files/archive.gz');
    var w = fs.createWriteStream('src/zip/files/fileToCompress.txt');
    r.pipe(gzip).pipe(w); 
};

await decompress();