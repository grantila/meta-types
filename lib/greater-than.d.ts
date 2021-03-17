import { Fill } from './fill'
import { LargerThan } from './larger-than'

/**
 * Returns true if A is greater than B.
 *
 * If OrEqual is set to true, also returns true if A equals B.
 */
export type GreaterThan
	<
		A extends number,
		B extends number,
		OrEqual = false
	> =
		A extends B
		? OrEqual
		: LargerThan< Fill< A >, Fill< B > >;
