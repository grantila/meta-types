import { IsFalsy } from './falsy'

/**
 * Returns true if {T} is false, and false if {T} is true.
 *
 * The second optional argument is Strict and defaults to true. If this is set
 * to false, the return will be true for any non-truthy type, i.e.:
 *   false, 0, "", null, undefined
 *
 * If T is not true or false, the return is never.
 */
export type Not< T, Strict extends boolean = true > =
	T extends false
	? true
	: T extends true
	? false
	: Strict extends false
	? IsFalsy< T >
	: never;
