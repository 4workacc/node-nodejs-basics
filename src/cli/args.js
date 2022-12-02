const parseArgs = () => {
    let args = process.argv;
    if ( args.length > 2 ) {
        for ( let i=2; i<args.length; i++) {
            if ( args[i][0] === '-') {
                console.log( `${args[i].substring(2, args[i].length)} is ${args[i+1]}`);
                i += 1;
            }            
        }
    }
};

parseArgs();