import type { Rest } from './rest'
import type { SameLength } from './same-length'

/**
 * Return true if tuple A is of greater length than tuple B.
 *
 * If OrEqual is set to true, the comparison is LargerThan-or-equal.
 */
export type LargerThan
	<
		A extends readonly unknown[ ],
		B extends readonly unknown[ ],
		OrEqual = false
	> =
		A extends never ? never : // These cover "too large" tuples
		B extends never ? never : // e.g. created by Fill
		SameLength< A, B > extends true
		? OrEqual
		: LargerAsSubset< A, B >;

type LargerAsSubset
	<
		A extends readonly unknown[ ],
		B extends readonly unknown[ ],
	> =
	A extends [ ...B, ...unknown[ ] ]
	? true
	: B extends [ ...A, ...unknown[ ] ]
	? false
	: LargerByLength< A, B >;

type LargerByLength
	<
		A extends readonly unknown[ ],
		B extends readonly unknown[ ],
	> =
		A[ 'length' ] extends 0
		? false
		: B[ 'length' ] extends 0
		? true
		: LargerByLength< Rest< A >, Rest< B > > ;
