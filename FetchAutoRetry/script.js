// console.log('hello');

// const p1 = new Promise((res, rej) => setTimeout(() => res('test-1'), 1000));

// async function test() {
//   const res = await p1;
//   return res;
// }

// test().then((val) => console.log(val));

/*
Auto Retry Promises
*/

function fetch() {
  return new Promise((res, rej) => {
    const success = Math.random() > 0.5;
    console.log('success', success);
    if (success) {
      res('resolve passed');
    } else {
      rej('reject failed');
    }
  });
}

const autoRetry = (fn, retry) => {
  return new Promise((res, rej) => {
    const attempt = (retry) => {
      fn()
        .then(res)
        .catch((error) => {
          if (retry === 0) {
            rej(error);
          } else {
            attempt(retry - 1);
          }
        });
    };
    attempt(retry);
  });
};

autoRetry(fetch, 2).then(console.log).catch(console.log);
