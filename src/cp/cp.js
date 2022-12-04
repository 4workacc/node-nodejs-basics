import { exec, fork, spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const ch = fork('./src/cp/files/script.js');
    ch.on('message', (ms)=>{
        process.stdout.write(args)   
    })
    ch.send(process.stdin)
};

spawnChildProcess();