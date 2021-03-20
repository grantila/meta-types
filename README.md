[![npm version][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]

<img src="https://raw.githubusercontent.com/grantila/meta-types/master/assets/logo.svg" width="100%" />

# API

## Contents

 - [Arithmetics](#arithmetics)
   - [`Add<N1, N2>` adding numbers](#add)
   - [`Sub<N1, N2>` subtracting numbers](#sub)
   - [`Mul<N1, N2>` multiplying numbers](#mul)
 - [Conditionals and comparisons](#conditionals-and-comparisons)
   - [`If<If, Then, Else>` Conditionals](#conditional)
   - [`Extends<T, E>` Type extends](#extends)
   - [`GreaterThan<N1, N2>` greater-than comparison](#greaterthan)
   - [`Is< T, U >` compare equal types](#is)
   - [`IsFalsy< T >` is type falsy](#isfalsy)
 - [Logics](#logics)
   - [`And<B1, B2>`, `Or<B1, B2>`, `Xor<B1, B2>` Logic (and, or, xor)](#logic-and-or-xor)
   - [`Not<B>` logic invert](#not)
 - [Tuples](#tuples)
   - [`Fill<N, T?>` construct a tuple of size N](#fill)
   - [`First<...T>`, `Last<...T>` first and last tuple element](#first-last)
   - [`Rest<...R>`, `ReverseRest<...R>` all but the first / last](#rest-reverserest)
   - [`LargerThan<...T1, ...T2>`, `SameLength<...T1, ...T2>` tuple size comparison](#largerthan-samelength)
   - [`LengthOf<...T>` length of tuple](#lengthof)
   - [`Optional<...T1, ...T2>`, `OptionalFrom<...T, N>` make optional tuple elements](#optional)
   - [`Overwrite<...T1, ...T2>` overwrite one tuple with another](#overwrite)
   - [`Reverse<...T>` reverse the types in a tuple](#reverse)
   - [`Shift<...T, N>` remove the first N elements in a tuple](#shift)
   - [`Slice<...T, Start?, End?>` slice a tuple](#slice)
   - [`Truncate<...T, N>` truncate a tuple](#truncate)
   - [`UnionAll<...T1, T2>` union all tuple element types with a type](#union)


## Arithmetics

The arithmetics in this library handles positive integers up to ~98, sometimes more.

### Add

Add two positive numbers:

```ts
import type { Add } from 'meta-types'
type T = Add< 13, 11 >; // T is 24
```


### Sub

Subtract the second number from the first number:

```ts
import type { Sub } from 'meta-types'
type T = Sub< 13, 11 >; // T is 2
```


### Mul

Multiply two numbers:

```ts
import type { Mul } from 'meta-types'
type T = Mul< 13, 11 >; // T is 143
```


## Conditionals and comparisons

### Conditional

Return Then if If otherwise Else, or; if `If` then `Then` else `Else`.

```ts
import type { If, Extends } from 'meta-types'
type T1 = If< true, "yes", "no" >;  // T1 is "yes"
type T2 = If< false, "yes", "no" >; // T2 is "no"
type T3 = If< Extends< "42", number >, "yes", "no" >; // T3 is "no", "42" doesn't extend number
```


### Extends

Returns true if `T` extends `E`, otherwise false. This is a trivial operation, but practical in meta functional statements, e.g. `If`.

```ts
import type { Extends } from 'meta-types'
type T1 = Extends< true, boolean >; // T1 is true; true extends boolean
type T1 = Extends< "42", number >;  // T2 is false; "42" doesn't extend number
```


### GreaterThan

`GreaterThan` returns true if the first number is greater than the second.

A third argument can be set to `true`, to turn this into greater-than-or-equal.

```ts
import type { GreaterThan } from 'meta-types'
type T1 = GreaterThan< 42, 40 >;       // T1 is true; 42 > 40
type T2 = GreaterThan< 40, 40, true >; // T2 is true; 40 >= 40
type T3 = GreaterThan< 40, 42 >;       // T3 is false; 40 < 42
```


### Is

`Is` returns true for equal types.

```ts
import type { Is } from 'meta-types'
type T1 = Is< 42, number >;      // T1 is false
type T2 = Is< null, undefined >; // T2 is false
type T3 = Is< "foo", "foo" >;    // T3 is true
```


### IsFalsy

`IsFalsy` returns true for any falsy type (`false`, `""`, `0`, `null` and `undefined`).

```ts
import type { IsFalsy } from 'meta-types'
type T1 = IsFalsy< 0 >; // T1 is true
type T2 = IsFalsy< 3 >; // T2 is false
```


## Logics

### Logic (and, or, xor)

`And`, `Or` and `Xor` can be used to perform logical operations on booleans.

```ts
import type { And, Or, Xor } from 'meta-types'
type T1 = And< true, false >; // T1 is false, {true && false} -> false
type T2 = Or<  true, false >; // T2 is true, {true || false} -> true
type T2 = Xor< true, false >; // T3 is true, {true ^ false} -> true
```


### Not

Invert `true` or `false` using `Not`.

```ts
import type { Not } from 'meta-types'
type F = Not< true >;  // F is false, !true
type T = Not< false >; // T is true, !false
```

A second argument `Strict` can be provided, which defaults to `true`. If this is set to `false`, and [falsy](#isfalsy) type will return `true` instead of `never`.

```ts
import type { Not } from 'meta-types'
type F = Not< 0 >;        // F is never, not exactly false
type T = Not< 0, false >; // T is true, 0 is falsy
```


## Tuples


### Fill

Create a tuple of size `N`, filled with `any` (or type `T` if provided).

```ts
import type { Fill } from 'meta-types'
type T1 = Fill< 3 >; // T1 is [ any, any, any ]
type T2 = Fill< 4, null >; // T2 is [ null, null, null, null ]
```


### First, Last

`First` and `Last` can be used to extract the first and last elements in a tuple.

```ts
import type { First, Last } from 'meta-types'
type T = [ "hello", 42, "world", true ];
type T1 = First< T >; // T1 is "hello"
type T2 = Last< T >;  // T2 is true
```


### Rest, ReverseRest

`Rest` and `ReverseRest` can be used to extract all-but-the-first or all-but-the-last elements in a tuple.

```ts
import type { Rest, ReverseRest } from 'meta-types'
type T = [ "hello", 42, "world", true ];
type T1 = Rest< T >;         // T1 is [ 42, "world", true ]
type T2 = ReverseRest< T >;  // T2 is [ "hello", 42, "world" ]
```


### LargerThan, SameLength

`LargerThan` and `SameLength` can be used to extract and compare the length of tuples. A second argument can be provided to `LargerThan` to turn it into larger-than-or-same-length.

```ts
import type { LargerThan, SameLength } from 'meta-types'
type T1 = LargerThan< [ 0, 0 ], [ 0, 0, 0 ] >;    // T1 is false, first length 2 < second length 3
type T2 = SameLength< [ 0, 0 ], [ 0, 0 ] >;       // T2 is true, length 2 === length 2
type T3 = LargerThan< [ 0, 0 ], [ 0, 0 ], true >; // T3 is true, 2 >= 2
```


### LengthOf

`LengthOf` returns the length of a tuple, or a fallback type (defaults to `-1`) if the tuple is unbounded, i.e. it's rest-spread like `[ "foo", 42, ...null[] ]`.

```ts
import type { LengthOf } from 'meta-types'
type T1 = LengthOf< [ 0, 0 ] >;                 // T1 is 2
type T2 = LengthOf< [ 0, 0, ...any ] >;         // T2 is -1
type T3 = LengthOf< [ 0, 0, ...any ], "ouch" >; // T3 is "ouch"
```


### Optional

Append an optional tuple to a *required* tuple.

```ts
import type { Optional } from 'meta-types'
type T = Optional< [ string, number ], [ boolean, any ] >;
// T is:
//   | [ string, number ]
//   | [ string, number, boolean ]
//   | [ string, number, boolean, any ]
```

Turn all types after index N into optional.

```ts
import type { OptionalFrom } from 'meta-types'
type T = OptionalFrom< [ string, number, boolean, any ], 2 >;
// T is:
//   | [ string, number ]
//   | [ string, number, boolean ]
//   | [ string, number, boolean, any ]
```


### Overwrite

Overwrite the first elements in a tuple, with elements from another tuple. The first tuple will be overwritten with types in the second tuple.

```ts
import type { Overwrite } from 'meta-types'
type T1 = Overwrite< [ 1, 2, 3 ], [ "a", "b" ] >; // T1 is [ "a", "b", 3 ]
type T2 = Overwrite< [ 1, 2 ], [ "a", "b", "c" ] >; // T2 is [ "a", "b", "c" ]
```


### Reverse

Reverse a tuple.

```ts
import type { Reverse } from 'meta-types'
type T = Reverse< [ string, boolean, 42 ] >; // T is [ 42, boolean, string ]
```


### Shift

Shift (remove the first) N elements from a tuple.

```ts
import type { Shift } from 'meta-types'
type T = Shift< [ string, boolean, number, 42, "foo" ], 2 >;
// T is [ number, 42, "foo" ]
```


### Slice

Slice a tuple with a start and end offset.

```ts
import type { Slice } from 'meta-types'
type T = Slice< [ string, boolean, number, 42, "foo" ], 2, 4 >;
// T is [ number, 42 ]
```


### Truncate

Truncate a tuple to a max length.

```ts
import type { Truncate } from 'meta-types'
type T = Truncate< [ string, boolean, number, 42, "foo" ], 2 >;
// T is [ string, boolean ]
```


### Union

Union all the types in a tuple, with a type.

```ts
import type { UnionAll } from 'meta-types'
type T = UnionAll< [ string, boolean, number ], U >;
// T is [ string | U, boolean | U, number | U ]
```



[npm-image]: https://img.shields.io/npm/v/meta-types.svg
[npm-url]: https://npmjs.org/package/meta-types
[downloads-image]: https://img.shields.io/npm/dm/meta-types.svg
