# math-hacker
Library to hack native Math

[![npm](https://nodei.co/npm/math-hacker.png?downloads=true)](https://www.npmjs.org/package/math-hacker)

[![version](https://img.shields.io/npm/v/math-hacker.svg)](https://www.npmjs.org/package/math-hacker)
[![status](https://travis-ci.org/zoubin/math-hacker.svg?branch=master)](https://travis-ci.org/zoubin/math-hacker)
[![devDependencies](https://david-dm.org/zoubin/math-hacker/dev-status.svg)](https://david-dm.org/zoubin/math-hacker#info=devDependencies)

# API

```javascript
var math = require('math-hacker')

```

## math.precision(num)

```javascript
math.precision(0) // 0
math.precision(0.1) // 1

```

## math.add(a, b)

```javascript
math.add(1, 2)
// 3

math.add(0.34, 0.01)
// 0.35
// In chrome 45.0.2454.99, 0.34 + 0.01 will output 0.35000000000000003

math.add(1.1111, -1.11)
// 0.0011
// In chrome 45.0.2454.99, 1.1111 - 1.11 will output 0.0010999999999998789

```

## math.toFixed(num, precision)

```javascript
math.toFixed(2.385, 2)
// "2.39"
// In chrome 45.0.2454.99, (2.385).toFixed(2) will output "2.38"

math.toFixed(2.384, 2)
// "2.38"

math.toFixed(2, 2)
// "2.00"

```

