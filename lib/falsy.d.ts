/**
 * Returns true if {T} is falsy, i.e. it is any of:
 *   false, 0, "", null, undefined
 *
 * Otherwise, returns false
 */
 export type IsFalsy< T > =
	T extends false
	? true
	: T extends 0
	? true
	: T extends ""
	? true
	: T extends null
	? true
	: T extends undefined
	? true
	: false;
