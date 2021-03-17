/**
 * Returns the length of the tuple T, or {IfUnbound} (defaults to -1) if the
 * tuple is of infinite size.
 */
export type LengthOf< T extends readonly unknown[ ], IfUnbound = -1 > =
	number extends T[ 'length' ] ? IfUnbound : T[ 'length' ];
