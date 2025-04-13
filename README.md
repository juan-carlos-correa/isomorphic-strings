# 🧠 Isomorphic Strings

_A function to determine if two strings are isomorphic._

## ✍️ Your Task

1. Read the problem and requirements carefully  
2. Write your implementation in `src/main.mjs`  
3. Test your solution with `npm run test`

## 📘 Description

Given two strings `s` and `t`, determine if they are **isomorphic**.

Two strings are isomorphic if the characters in `s` can be replaced to get `t`, with the rule that **each character must map to another character uniquely** and preserve the order.

The same character must always map to the same character, and no two characters may map to the same character.

### Examples

```js
isIsomorphic('egg', 'add') // true
isIsomorphic('foo', 'bar') // false
isIsomorphic('paper', 'title') // true
```

## 📥 Input

- `s`: string (1 ≤ s.length ≤ 10⁵)
- `t`: string (1 ≤ t.length ≤ 10⁵)
- Only lowercase letters
- `s` and `t` have the same length

## 📤 Output

- Return `true` if the strings are isomorphic, otherwise return `false`

## 🛠️ Instructions

1. Open `src/main.mjs` and implement the function `isIsomorphic(s, t)`
2. Run tests in `test/main.test.js` using:

```bash
npm run test
```

✅ Do not modify the test file unless you're adding extra test cases.

## 💡 Tips

- Check that one character doesn’t map to multiple others.
- Think about edge cases like repeated characters and mismatched patterns.
- Target **O(n)** time complexity.

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

✅ Make sure your implementation is in `src/main.mjs` and your tests in `src/main.test.js`.
