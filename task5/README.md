# Task 5

## Part I

Consider the following code snippet

```js
class MyClass {
  constructor() {
    this.value = 10;
  }

  myMethod1() {
    return function () {
      console.log(this);
    };
  }

  myMethod2() {
    return () => {
      console.log(this);
    };
  }
}

const obj = new MyClass();
obj.myMethod1()();  // undefined
obj.myMethod2()();  // {"value":10}
```

The `console.log` statement in `myMethod1` prints `undefined` whereas the same statement in `myMethod2` prints out `{"value":10}`. Briefly explain why.

Write your answer in the `Answer.md` file in this folder.



## Part II

Briefly describe how API relates to the Client-Service architecture.

Write your answer in the `Answer.md` file in this folder.