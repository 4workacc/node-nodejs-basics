import os from 'os';
import { parentPort, Worker } from 'worker_threads';

const performCalculations = async () => {
   let cpus = os.cpus().length;
   let answers = [];
   let readyAnswers = 0;
   for ( let i =0; i<cpus; i++) {
      const wor = new Worker('./src/wt/worker.js', { workerData : { num: 10 + i} });
      wor.on('message', msg=>{
        let num = msg.worker.split('_')[1]/1-10;        
        answers[num] = {
            status: 'resolved',
            data: msg.data
        };
        readyAnswers += 1;
        if ( readyAnswers === 7) {
            console.log(answers)
        }
      })
    }        
};

await performCalculations();