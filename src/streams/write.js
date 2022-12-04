import * as fs from 'fs';

const write = async () => {   
    let wStream = new fs.WriteStream('./src/streams/files/fileToWrite.txt', {encodinf: 'utf-8'});
    process.stdin.on('data', data=>{
        wStream.write(data.toString(), ()=>{});
    })
};

await write();