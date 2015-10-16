# The Mother of All Operators - `flatMap` #

In previous examples, we combined together sequences using `merge`, as well as `zip`, `combineLatest` and `withLatestFrom`.  But there is one more fundamental operator, which is `flatMap`.  Don't let the name scare you as it means simply that we are going to take the current value from the Observable, use `map` to project it to another Observable, and then we'll flatten it using `mergeAll`, which is a variant of the `merge` operator we've used before.  The `mergeAll` operator simply takes an Observable of Observables and then merges it into a single Observable based upon time.

As always, for more information about Observables, check out the [RxJS Documentation](https://github.com/Reactive-Extensions/RxJS/tree/master/doc/readme.md)

## Exercises

1. [Problem](problem1.js) - [Solution](solution1.js)
