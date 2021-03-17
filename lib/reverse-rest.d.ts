/**
 * Returns the first types of an array, excluding the last
 */
export type ReverseRest< T extends readonly unknown[ ] > =
	T extends readonly [ ...infer U, infer _ ] ? U : [ ];
