const resolvedPromise = Promise.resolve(42);
const resolvedPromise2 = Promise.resolve(44);
// const resolvedPromise2 = resolvedPromise;


// resolvedPromise.then((data) => {
//   console.log('part 1', data);
//   resolvedPromise2.then((data) => {
//     console.log('part 1b', data);
//   });
// });
// resolvedPromise2.then((data) => {
//   console.log('part 2', data);
//   resolvedPromise.then((data) => {
//     console.log('part 2b', data);
//   });
// });

// async function main(prefix) {
//   console.log('starting', prefix)
//   console.log(prefix, await resolvedPromise);
// }
//
// let time = Date.now();
// setInterval(() => { const t = Date.now(); console.log('tick', t-time); time=t; }, 3);
//
// setTimeout(() => {
//   for (let i=0; i<=1000; i+=1) {
//     main('await ' + i);
//   }
// }, 100);
//
// setTimeout(() => process.exit(), 1000);



let resolve;
const laterPromise = new Promise(r => {resolve=r;});

async function main() {
  console.log('main');
  await resolvedPromise;
  console.log('main after resolvedPromise');
  await laterPromise;
  setImmediate(() => { console.log('main: immediate'); });
  console.log('main after laterPromise');
}

console.log('starting');
main();
console.log('set up resolution');
setTimeout(async () => {
  console.log('resolution');
  resolve();
  console.log('resolution: resolved');
  setImmediate(() => { console.log('resolution: immediate'); });
  await laterPromise;
  console.log('resolution: after await');
}, 100);

console.log('done with setup');
