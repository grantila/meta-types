//
// This is the generic solution - doesn't scale very well with TypeScript:
//
// type Shift
// <
// 	T extends readonly unknown[ ],
// 	N extends number,
// 	Trash extends unknown[ ] = [ ]
// > =
// 	N extends Trash[ 'length' ]
// 	? T
// 	: Shift< Rest< T >, N, [ ...Trash, First< T > ] >;

/**
 * Remove N first elements from array
 */
export type Shift< T extends readonly unknown[ ], N extends number > =
	N extends 0
	? T
	: T extends readonly [ infer T1, infer T2, infer T3, infer T4, ...infer Tx ]
		? N extends 1 ? [ T2, T3, T4, ...Tx ]
		: N extends 2 ? [ T3, T4, ...Tx ]
		: N extends 3 ? [ T4, ...Tx ]
		: N extends 4 ? Tx
		: [ ] // This is the above-max-limit fallback
	: T extends readonly [ infer T1, infer T2, infer T3 ]
		? N extends 1 ? [ T2, T3 ]
		: N extends 2 ? [ T3 ]
		: [ ]
	: T extends readonly [ infer T1, infer T2 ]
		? N extends 1 ? [ T2 ]
		: [ ]
	: T extends readonly [ infer T1 ]
		? [ ]
	: [ ]
;
