function promiseTimeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, delay);
    });
}

promiseTimeout(10000)
    .then(function() {
        console.log(promise);
        console.log('done');
    });