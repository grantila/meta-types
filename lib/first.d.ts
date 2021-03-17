/**
 * Returns the first element of a tuple
 */
 export type First< T extends readonly unknown[ ], Fallback = never > =
	T[ 'length' ] extends 0 ? Fallback : T[ 0 ];
