import { LargerThan } from './larger-than'
import { Shift } from './shift'

/**
 * Overwrite the elements in tuple T1 with those in tuple T2.
 *
 * If T2 is larger than or same size as T1, T2 as is is returned.
 * If T2 is smaller, the returned tuple is T2 followed by the rest of the
 * elements in T1.
 */
export type Overwrite
	<
		T1 extends readonly unknown[ ],
		T2 extends readonly unknown[ ]
	>=
		LargerThan< T2, T1, true > extends true
		? T2
		: [ ...T2, ...Shift< T1, T2[ 'length' ] > ];
