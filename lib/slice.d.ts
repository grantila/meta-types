import type { Shift } from './shift'
import type { Truncate, TruncateLastIfSameSize } from './truncate'


/**
 * Slice a tuple from Start to (and not including) End
 *
 * Set Inclusive to true, to have End be inclusive
 */
export type Slice
	<
		T extends readonly unknown[ ],
		Start extends number,
		End extends number = -1,
		Inclusive = false,
	> =
		End extends -1
		? Shift< T, Start >
		: Inclusive extends true
		? Shift< Truncate< T, End >, Start >
		: Shift< TruncateLastIfSameSize< Truncate< T, End >, End >, Start >;
