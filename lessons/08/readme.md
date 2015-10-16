# Observables with Correlational Operators

Previously, we were able to combine together two sequences, both height1 and height2 using `merge`.  Now, we're going to take this a step further by create an Observable `messages` which emits the string "System failed because of ${failure} after the user ${action}" with ${failure} and ${action} appropriately replaced, based on `connectionFailures`, `renderFailures`, and `userActions`.  Which operator might work best here?  We've covered `zip` and `combineLatest`, but are there other operators that can do this? A quick hint is for `withLatestFrom`...

As always, for more information about Observables, check out the [RxJS Documentation](https://github.com/Reactive-Extensions/RxJS/tree/master/doc/readme.md)

## Exercises

1. [Problem](problem1.js) - [Solution](solution1.js)
