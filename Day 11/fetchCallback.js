function fetchData(callback) {
    console.log('All arguments:', process.argv);
    let a = process.argv[3];
    for (let i = 1; i < 11; i++) {
        console.log(i * a);
    }
}


fetchData();



// process.argv[0] → Path to the Node.js executable (e.g., /usr/local/bin/node)
// process.argv[1] → Path to your script file (e.g., Args.js)
// process.argv[2]; read the command line arg
// node Args.js 12 15 18 16
// args!= numbers 