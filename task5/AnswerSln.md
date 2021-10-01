# Question 5

For optimal viewing in GradeScope, we ask you to keep the lines to 70
characters long. This paragraph is an example showcasing this
practice.
It is not required that each line is exactly 70 characters long. In
particular, do not break words to meet this specification. It is
sufficient to use this paragraph as a reference. When you reach
roughly 70 characters, hit enter to go to the next line and continue
writing.

Please write your answer under each heading.

## Part 1

In `myMethod1`, we return a function with its own execution context, 
separate from that of `myMethod1`. Therefore, the "this" keyword is 
not bound to `MyClass`. On the other hand, we return an arrow function 
in `myMethod2`. An arrow function does not have its own bindings 
to "this." Instead, it inherits the execution context of `myMethod2`. 
Therefore, the "this" therein refers to MyClass.


## Part 2


API is often used to connect two separate software systems. 
However, it can also be used internally to connect different parts of 
a software application. This latter approach is typically manifested 
in the client-server software architecture. The API sits between the 
client and the server, allowing them to exchange data. 