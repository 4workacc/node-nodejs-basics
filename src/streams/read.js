import * as fs from 'fs';

const read = async () => {
    let rStream = new fs.ReadStream('./src/streams/files/fileToRead.txt', { encoding: 'utf-8'});

    rStream.on('readable', ()=>{
        let dat = rStream.read();
        if ( dat != null ) {
            process.stdout.write(dat);
        }
    })
};

await read();