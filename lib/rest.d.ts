/**
 * Returns the last types of an array, excluding the first
 */
export type Rest< T extends readonly unknown[ ] > =
	T extends readonly [ infer _, ...infer U ] ? U : [ ];
