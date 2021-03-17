/**
 * Returns the last element of a tuple
 */
export type Last< T extends readonly unknown[ ], Fallback = never > =
	T[ 'length' ] extends 0 ? Fallback : ( [ 42, ...T ] )[ T[ 'length' ] ];
