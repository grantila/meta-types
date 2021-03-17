import type { ReverseRest } from './reverse-rest'
import type { Truncate } from './truncate'
import type { Shift } from './shift'

/**
 * Append an optional tuple to a required tuple.
 *
 * E.g:
 *  AppendOptional< [ 1, 2 ], [ 3, 4 ] > outputs:
 *   | [ 1, 2 ]
 *   | [ 1, 2, 3 ]
 *   | [ 1, 2, 3, 4 ]
 */
export type AppendOptional
	<
		R extends readonly unknown[ ],
		O extends readonly unknown[ ]
	> =
	O[ 'length' ] extends 0 ? R :
	| [ ...R, ...O ]
	| AppendOptional< R, ReverseRest< O > >;

/**
 * Turn the elements in T from index N into optional.
 */
export type OptionalFrom< T extends readonly unknown[ ], N extends number > =
	AppendOptional< Truncate< T, N >, Shift< T, N > >;
