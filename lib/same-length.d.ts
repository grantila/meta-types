/**
 * Return true if tuple A has the same length as tuple B
 */
export type SameLength
	<
		A extends readonly unknown[ ],
		B extends readonly unknown[ ]
	> =
		A[ 'length' ] extends B[ 'length' ] ? true : false;
