import type { Rest } from './rest'

/**
 * Return the tuple {T} where all element types are unioned with {Union}
 */
export type UnionAll< T extends readonly unknown[ ], Union > =
	{
		R: [ T[ 0 ] | Union, ...UnionAll< Rest< T >, Union > ];
		1: [ T[ 0 ] | Union ];
		0: [ ];
	}[
		T[ 'length' ] extends 0 ? 0 : T[ 'length' ] extends 1 ? 1 : 'R'
	];
