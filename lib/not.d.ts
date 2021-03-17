/**
 * Returns true if {T} is false, and false if {T} is true.
 *
 * If T is not true or false, the return is never.
 */
export type Not< T > = T extends false ? true : T extends true ? false : never;
