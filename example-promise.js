function addPromise (a,b) {
  return new Promise (function (resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
          resolve(a + b);
      } else {
        reject ("A and B need to be numbers");
    }
  });
}

addPromise('Sheri', 5).then(function(sum){
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});
