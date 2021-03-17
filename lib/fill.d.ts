//
// This is the generic version:
//
// type Fill< N extends number, T = null, Cur extends unknown[ ] = [ ] > =
// 	Cur[ 'length' ] extends N
// 	? Cur
// 	: Fill< N, [ ...Cur, T ] >;

/**
 * Make a tuple of size N filled with T
 */
export type Fill< N extends number, T = any > =
	N extends 0 ? [ ]
	: N extends 1 ? [ T ]
	: N extends 2 ? [ T, T ]
	: N extends 3 ? [ T, T, T ]
	: N extends 4 ? [ T, T, T, T ]
	: N extends 5 ? [ T, T, T, T, T ]
	: N extends 6 ? [ T, T, T, T, T, T ]
	: N extends 7 ? [ T, T, T, T, T, T, T ]
	: N extends 8 ? [ T, T, T, T, T, T, T, T ]
	: N extends 9 ? [ T, T, T, T, T, T, T, T, T ]
	: N extends 10 ? [ T, T, T, T, T, T, T, T, T, T ]
	: N extends 11 ? [ T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 12 ? [ T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 13 ? [ T, T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 14 ? [ T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 15 ? [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 16 ? [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 17 ? [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 18 ? [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	: N extends 19 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 20 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	: N extends 21 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	: N extends 22 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	: N extends 23 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	: N extends 24 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	: N extends 25 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	: N extends 26 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	: N extends 27 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	: N extends 28 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	: N extends 29 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 30 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 31 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 32 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 33 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 34 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 35 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 36 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 37 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	: N extends 38 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	: N extends 39 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	: N extends 40 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	: N extends 41 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	: N extends 42 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	: N extends 43 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	: N extends 44 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	: N extends 45 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	: N extends 46 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	: N extends 47 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 48 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 49 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 50 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 51 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 52 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 53 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 54 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 55 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	: N extends 56 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	: N extends 57 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	: N extends 58 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	: N extends 59 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	: N extends 60 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	: N extends 61 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	: N extends 62 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	: N extends 63 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	: N extends 64 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	: N extends 65 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 66 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 67 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 68 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 69 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 70 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 71 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 72 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 73 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	: N extends 74 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	: N extends 75 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	: N extends 76 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	: N extends 77 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	: N extends 78 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	: N extends 79 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	: N extends 80 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	: N extends 81 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	: N extends 82 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	: N extends 83 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 84 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 85 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 86 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 87 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 88 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 89 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 90 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	: N extends 91 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	: N extends 92 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	: N extends 93 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	: N extends 94 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	: N extends 95 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	: N extends 96 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	: N extends 97 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	: N extends 98 ? [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	: never
