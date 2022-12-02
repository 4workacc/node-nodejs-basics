import * as fs from 'fs';

const create = async () => {
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', {flag: 'wx'}, function(err) {
        if (err) {
            throw new Error('FS operation failed');
        }
    })
};

await create();