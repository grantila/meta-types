import type { Rest } from './rest'
import type { First } from './first'


/**
 * Reverse the order of the elements in tuple T
 */
export type Reverse
	<
		T extends readonly unknown[ ],
		Ret extends unknown[ ] = [ ]
	> =
		T[ 'length' ] extends 0
		? Ret
		: Reverse< Rest< T >, [ First< T >, ...Ret ] >;
