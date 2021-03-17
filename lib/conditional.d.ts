/**
 * Returns {Then} if {If} is true, otherwise returns {Else}
 */
export type If< If, Then, Else > = If extends true ? Then : Else;
