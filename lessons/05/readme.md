# Observables and DOM Events

Events are an every day reality in JavaScript whether we are dealing with events from the DOM, Node.js or any other source.  Observables are a perfect fit for modeling events as it makes event-based programming compostable.  What we mean by composable, we mean is that we combine events together into a single stream very easily, for example we can calculate the deltas between mouse movements like so:

```js
let source = Rx.DOM.mousemove(document);
let deltas = source.zip(source.skip(1));

let subscription = deltas.subscribe(
  mousemoves => {
    let [first, second] = mousemoves;
    // Calculate the delta
  }
)
```

For more information about Observables, check out the [RxJS Documentation](https://github.com/Reactive-Extensions/RxJS/tree/master/doc/readme.md)

## Exercises

In these exercises, this will require the [problem1.html](problem1.html) file to used to run these examples.

1. [Problem](problem1.js) - [Solution](solution1.js)
