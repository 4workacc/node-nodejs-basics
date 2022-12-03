import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    var gzip = zlib.createGzip();
    var r = fs.createReadStream('src/zip/files/fileToCompress.txt');
    var w = fs.createWriteStream('src/zip/files/archive.gz');
    r.pipe(gzip).pipe(w);
};

await compress();


