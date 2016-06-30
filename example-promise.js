function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Not a number');
        }
    });
}

addPromise(4, 50).then(function(res) {
    console.log('Success: ' + res);
}, function (err) {
    console.log('Error: ' + err);
});

addPromise(4, 'd').then(function(res) {
    console.log('Success: ', res);
}, function (err) {
    console.log('Error: ', err);
});
