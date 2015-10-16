console.clear();

var clock = Rx.Observable
  .interval(1000)
  .take(10)
  .map(x => x+1)
  .publish().refCount();

setTimeout(() => {
  clock.subscribe(x => console.log(`     b: ${x}`))
}, 4500);

clock.subscribe(x => console.log(`a: ${x}`));
