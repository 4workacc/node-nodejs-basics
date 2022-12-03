import * as path from 'path';
import * as url from 'url';
import { release, type, version } from 'os';
import { createServer } from 'http';
// import * as c from './files/c';
import * as a from './files/a.json' assert {type: 'json'};
import * as b from './files/b.json ' assert {type: 'json'};

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const random = Math.random();

let unknownObject;

random > 0.5 ? unknownObject = a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});


const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer }