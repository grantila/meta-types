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
	N extends N98
	? FillMap< T >[ N ]
	: never;

type FillMap< T > = {
	0 : [ ]
	1 : [ T ]
	2 : [ T, T ]
	3 : [ T, T, T ]
	4 : [ T, T, T, T ]
	5 : [ T, T, T, T, T ]
	6 : [ T, T, T, T, T, T ]
	7 : [ T, T, T, T, T, T, T ]
	8 : [ T, T, T, T, T, T, T, T ]
	9 : [ T, T, T, T, T, T, T, T, T ]
	10 : [ T, T, T, T, T, T, T, T, T, T ]
	11 : [ T, T, T, T, T, T, T, T, T, T, T ]
	12 : [ T, T, T, T, T, T, T, T, T, T, T, T ]
	13 : [ T, T, T, T, T, T, T, T, T, T, T, T, T ]
	14 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	15 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	16 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	17 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	18 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	19 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	20 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	21 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	22 : [ T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T ]
	23 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	24 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	25 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	26 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	27 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	28 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	29 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	30 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	31 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	32 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	33 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	34 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	35 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	36 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	37 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	38 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	39 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	40 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	41 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	42 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	43 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	44 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	45 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	46 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	47 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	48 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	49 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	50 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	51 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	52 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	53 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	54 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	55 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	56 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	57 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	58 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	59 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	60 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	61 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	62 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	63 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	64 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	65 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	66 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	67 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	68 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	69 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	70 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	71 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	72 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	73 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	74 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	75 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	76 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
	77 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T
	]
	78 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T
	]
	79 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T
	]
	80 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T
	]
	81 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T
	]
	82 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	83 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	84 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	85 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	86 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	87 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	88 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	89 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	90 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	91 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	92 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T
	]
	93 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T
	]
	94 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T
	]
	95 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T
	]
	96 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T
	]
	97 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T
	]
	98 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T
	]
	99 : [
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T,
		T, T, T, T, T, T, T
	]
};

type N98 = keyof FillMap< 0 >;
