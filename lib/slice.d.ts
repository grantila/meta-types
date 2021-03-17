import type { Shift } from './shift'
import type { Add } from './add'
import type { Truncate } from './truncate'


/**
 * Slice a tuple from Start to (and not including) End
 *
 * Set Inclusive to true, to have End be inclusive
 */
export type Slice
	<
		T extends readonly unknown[ ],
		Start extends number = 0,
		End extends number = -1,
		Inclusive = false,
	> =
		End extends -1
		? Shift< T, Start >
		: Inclusive extends true
		? Shift< Truncate< T, Add< End, 1 > >, Start >
		: Shift< Truncate< T, End >, Start >;
