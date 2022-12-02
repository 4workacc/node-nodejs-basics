const parseEnv = () => {    
    let envs = process.env;      
    for ( let i in envs)
    {
        if ( i.split('_')[0] === 'RSS') {
            console.log ( `${i} = ${envs[i]};`)
        }
    }
};

parseEnv();