# Hot and Cold Observables #

One most common issue people have with RxJS and Observables is to deal with [Hot and Cold Observables](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables), that is to say Cold Observables only start when subscribed to, for example, `from`, `of`, and even `interval` will not start until you call `subscribe`.  And once you unsubscribe and subscribe again, it will once again start from the beginning.  Hot Observables on the other hand will start emitting values immediately regardless of whether you are watching or not.  For example, stock tickers, mouse movements and such will continue regardless of whether you are subscribed or not.  In this exercise, we'll look at how we can take Cold Observables and make them Hot, and vice versa.

As always, for more information about Observables, check out the [RxJS Documentation](https://github.com/Reactive-Extensions/RxJS/tree/master/doc/readme.md)

## Exercises

1. [Problem](problem1.js) - [Solution](solution1.js)
