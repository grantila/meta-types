/**
 * Return true if A *and* B is true, otherwise returns false
 */
export type And< A, B > =
	A extends true
	? B extends true
	? true
	: false
	: false;

/**
 * Return true if A *or* B is true, otherwise returns false
 */
 export type Or< A, B > =
	A extends true
	? true
	: B extends true
	? true
	: false;

/**
 * Return true if A is not B, otherwise returns false
 */
export type Xor< A, B > =
	A extends true
	? B extends false
		? true
		: false
	: B extends true
		? true
		: false;
