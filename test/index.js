var test = require('tape')
var math = require('..')

test('precision', function(t) {
  t.equal(
    math.precision(0),
    0
  )
  t.equal(
    math.precision(0.1),
    1
  )
  t.equal(
    math.precision('0.1'),
    1
  )

  t.end()
})

test('toFixed', function(t) {
  t.equal(
    math.toFixed(2.385, 2),
    '2.39'
  )
  t.equal(
    math.toFixed(1.385, 2),
    '1.39'
  )
  t.equal(
    math.toFixed(2.384, 2),
    '2.38'
  )
  t.equal(
    math.toFixed(2.38),
    '2'
  )
  t.equal(
    math.toFixed(2, 2),
    '2.00'
  )

  t.end()
})

test('add', function(t) {
  t.equal(
    math.add(0.34, 0.01),
    0.35
  )
  t.equal(
    math.add(1.1111, -1.11),
    0.0011
  )
  t.equal(
    math.add(1, 2),
    3
  )

  t.end()
})

