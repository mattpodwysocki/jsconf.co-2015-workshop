# Observables versus Promises

In these exercises, you will learn the differences between Promises and Observables.  Promises have been around for a while, implemented in such libraries as jQuery, Dojo, AngularJS as well as dedicated libraries such as Q, Bluebird, lie and others.  Recently, this type has been standardized as part of the ES2015 specification.  Similarly, Observables are also undergoing standardization and will hopefully be available in ES2016.

You will learn the subtle differences between Promises and Observables as Promises wrap asynchronous single values, whereas Observables wrap synchronous and asynchronous collections which may yield zero to an infinite amount of values.  Observables also by default support a notion of cancelation.  When you call `subscribe` on an `Observable`, you get back a subscription which you can dispose at any time to cancel an operation if it has not completed, but also to clean up any resources such as event handlers.

For more information about Observables, check out the [RxJS Documentation](https://github.com/Reactive-Extensions/RxJS/tree/master/doc/readme.md)

## Exercises

1. [Problem](problem1.js) - [Solution](solution1.js)
2. [Problem](problem2.js) - [Solution](solution2.js)
