function helloworld(callback) {
    return new Promise(
        (resolve) => {
            setInterval(() => {
                resolve(console.log("Hello World "));
            }, 2000);
        });
}

function display() {
    console.log("Hello World ");
}

helloworld(display)
