# Task 4

Suppose we have the following function:

```jsx
function quote(name, year, text) {
  console.log(`${text}\n-- ${name} (${year})`);
}
```

When working with `quote`, we realize many quotes share the same author name. Therefore, we decide to use closure and currying to make a function that can easily reuse the author's name. Complete the implementation of `curriedQuote`.

```jsx
function curriedQuote(name) {
  // TODO implement me!
}
```

Here is an example for using `curriedQuote`:

```jsx
const quoteCrockford = curriedQuote('Doug Crockford');

quoteCrockford(
  2008,
  "JavaScript is an astonishing language, in the very worst sense."
);
```

The above code snippet will print: 

```
JavaScript is an astonishing language, in the very worst sense.
-- Doug Crockford (2008)
```

Please complete this task in the `index.js` file inside this folder. Do **not** write the answer in this README file.