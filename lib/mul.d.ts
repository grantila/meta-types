import type { Fill } from './fill'
import type { Sub } from './sub'

/**
 * Add two numbers (each between 0 and 98)
 */
export type Mul< A extends number, B extends number > =
	[ ...MulArray< A, B > ][ 'length' ];

type MulArray< A extends number, B extends number > =
	A extends 0 ? [ ]
	: B extends 0 ? [ ]
	: { T: MulInner< A, B >; }[ 'T' ];

type MulInner
	<
		A extends number,
		B extends number,
		R extends readonly unknown[ ] = Fill< A >
	> =
		{
			1: R;
			2: [ ...R, ...Fill< A > ];
			R: MulInner< A, Sub< B, 1 >, [ ...R, ...Fill< A > ] >;
		}[
			B extends 1 ? 1 : B extends 2 ? 2 : 'R'
		];
