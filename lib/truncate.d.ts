import type { ReverseRest } from "./reverse-rest"

//
// This is the generic solution - doesn't scale very well with TypeScript:
//
// type Truncate
// 	<
// 		T extends readonly unknown[ ],
// 		N extends number,
// 		Ret extends unknown[ ] = [ ]
// 	> =
// 		N extends Ret[ 'length' ]
// 		? Ret
// 		: Truncate< Rest< T >, N, [ ...Ret, First< T > ] >;


/**
 * Return the first N elements from array
 */
export type Truncate< T extends readonly unknown[ ], N extends number > =
	N extends 0
	? [ ]
	: T extends readonly [ ]
	? [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14, infer T15, infer T16, infer T17, infer T18, infer T19,
		infer T20, ...infer Tx
	]
		? N extends 20 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18, T19, T20
			]
		: N extends 19 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18, T19
			]
		: N extends 18 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18
			]
		: N extends 17 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 16 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 15 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: T // This is the above-max-limit fallback
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14, infer T15, infer T16, infer T17, infer T18, infer T19
	]
		? N extends 20 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18, T19
			]
		: N extends 19 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18, T19
			]
		: N extends 18 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18
			]
		: N extends 17 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 16 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 15 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14, infer T15, infer T16, infer T17, infer T18
	]
		? N extends 20 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18
			]
		: N extends 19 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18
			]
		: N extends 18 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17, T18
			]
		: N extends 17 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 16 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 15 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14, infer T15, infer T16, infer T17
	]
		? N extends 20 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 19 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 18 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 17 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16, T17
			]
		: N extends 16 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 15 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14, infer T15, infer T16
	]
		? N extends 20 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 19 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 18 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 17 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 16 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15, T16
			]
		: N extends 15 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14, infer T15
	]
		? N extends 20 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 19 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 18 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 17 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 16 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 15 ?
			[
				T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
				T15
			]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13,
		infer T14
	]
		? N extends 20 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 19 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 18 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 17 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 16 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 15 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12, infer T13
	]
		? N extends 20 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 19 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 18 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 17 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 16 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 15 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 14 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 13 ?
			[ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11, infer T12
	]
		? N extends 20 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9, infer T10, infer T11
	]
		? N extends 20 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8, infer T9
	]
		? N extends 20 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8, T9 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
		infer T8
	]
		? N extends 20 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7, T8 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6, infer T7,
	]
		? N extends 20 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6, T7 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [
		infer T1, infer T2, infer T3, infer T4, infer T5, infer T6
	]
		? N extends 20 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5, T6 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [ infer T1, infer T2, infer T3, infer T4, infer T5 ]
		? N extends 20 ? [ T1, T2, T3, T4, T5 ]
		: N extends 19 ? [ T1, T2, T3, T4, T5 ]
		: N extends 18 ? [ T1, T2, T3, T4, T5 ]
		: N extends 17 ? [ T1, T2, T3, T4, T5 ]
		: N extends 16 ? [ T1, T2, T3, T4, T5 ]
		: N extends 15 ? [ T1, T2, T3, T4, T5 ]
		: N extends 14 ? [ T1, T2, T3, T4, T5 ]
		: N extends 13 ? [ T1, T2, T3, T4, T5 ]
		: N extends 12 ? [ T1, T2, T3, T4, T5 ]
		: N extends 11 ? [ T1, T2, T3, T4, T5 ]
		: N extends 10 ? [ T1, T2, T3, T4, T5 ]
		: N extends 9 ? [ T1, T2, T3, T4, T5 ]
		: N extends 8 ? [ T1, T2, T3, T4, T5 ]
		: N extends 7 ? [ T1, T2, T3, T4, T5 ]
		: N extends 6 ? [ T1, T2, T3, T4, T5 ]
		: N extends 5 ? [ T1, T2, T3, T4, T5 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [ infer T1, infer T2, infer T3, infer T4 ]
		? N extends 20 ? [ T1, T2, T3, T4 ]
		: N extends 19 ? [ T1, T2, T3, T4 ]
		: N extends 18 ? [ T1, T2, T3, T4 ]
		: N extends 17 ? [ T1, T2, T3, T4 ]
		: N extends 16 ? [ T1, T2, T3, T4 ]
		: N extends 15 ? [ T1, T2, T3, T4 ]
		: N extends 14 ? [ T1, T2, T3, T4 ]
		: N extends 13 ? [ T1, T2, T3, T4 ]
		: N extends 12 ? [ T1, T2, T3, T4 ]
		: N extends 11 ? [ T1, T2, T3, T4 ]
		: N extends 10 ? [ T1, T2, T3, T4 ]
		: N extends 9 ? [ T1, T2, T3, T4 ]
		: N extends 8 ? [ T1, T2, T3, T4 ]
		: N extends 7 ? [ T1, T2, T3, T4 ]
		: N extends 6 ? [ T1, T2, T3, T4 ]
		: N extends 5 ? [ T1, T2, T3, T4 ]
		: N extends 4 ? [ T1, T2, T3, T4 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [ infer T1, infer T2, infer T3 ]
		? N extends 20 ? [ T1, T2, T3 ]
		: N extends 19 ? [ T1, T2, T3 ]
		: N extends 18 ? [ T1, T2, T3 ]
		: N extends 17 ? [ T1, T2, T3 ]
		: N extends 16 ? [ T1, T2, T3 ]
		: N extends 15 ? [ T1, T2, T3 ]
		: N extends 14 ? [ T1, T2, T3 ]
		: N extends 13 ? [ T1, T2, T3 ]
		: N extends 12 ? [ T1, T2, T3 ]
		: N extends 11 ? [ T1, T2, T3 ]
		: N extends 10 ? [ T1, T2, T3 ]
		: N extends 9 ? [ T1, T2, T3 ]
		: N extends 8 ? [ T1, T2, T3 ]
		: N extends 7 ? [ T1, T2, T3 ]
		: N extends 6 ? [ T1, T2, T3 ]
		: N extends 5 ? [ T1, T2, T3 ]
		: N extends 4 ? [ T1, T2, T3 ]
		: N extends 3 ? [ T1, T2, T3 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [ infer T1, infer T2 ]
		? N extends 20 ? [ T1, T2 ]
		: N extends 19 ? [ T1, T2 ]
		: N extends 18 ? [ T1, T2 ]
		: N extends 17 ? [ T1, T2 ]
		: N extends 16 ? [ T1, T2 ]
		: N extends 15 ? [ T1, T2 ]
		: N extends 14 ? [ T1, T2 ]
		: N extends 13 ? [ T1, T2 ]
		: N extends 12 ? [ T1, T2 ]
		: N extends 11 ? [ T1, T2 ]
		: N extends 10 ? [ T1, T2 ]
		: N extends 9 ? [ T1, T2 ]
		: N extends 8 ? [ T1, T2 ]
		: N extends 7 ? [ T1, T2 ]
		: N extends 6 ? [ T1, T2 ]
		: N extends 5 ? [ T1, T2 ]
		: N extends 4 ? [ T1, T2 ]
		: N extends 3 ? [ T1, T2 ]
		: N extends 2 ? [ T1, T2 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: T extends readonly [ infer T1 ]
		? N extends 20 ? [ T1 ]
		: N extends 19 ? [ T1 ]
		: N extends 18 ? [ T1 ]
		: N extends 17 ? [ T1 ]
		: N extends 16 ? [ T1 ]
		: N extends 15 ? [ T1 ]
		: N extends 14 ? [ T1 ]
		: N extends 13 ? [ T1 ]
		: N extends 12 ? [ T1 ]
		: N extends 11 ? [ T1 ]
		: N extends 10 ? [ T1 ]
		: N extends 9 ? [ T1 ]
		: N extends 8 ? [ T1 ]
		: N extends 7 ? [ T1 ]
		: N extends 6 ? [ T1 ]
		: N extends 5 ? [ T1 ]
		: N extends 4 ? [ T1 ]
		: N extends 3 ? [ T1 ]
		: N extends 2 ? [ T1 ]
		: N extends 1 ? [ T1 ]
		: N extends 0 ? [ ]
		: [ ]
	: [ ];

export type TruncateLastIfSameSize< T extends unknown[ ], N extends number > =
	T[ 'length' ] extends N ? ReverseRest< T > : T;
