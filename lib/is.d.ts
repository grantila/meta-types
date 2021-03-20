import { And } from './logic'
import { Extends } from './extends'

/**
 * Returns true if {T} and {U} are the exact same type, otherwise false
 */
export type Is< T, U > = And< Extends< T, U >, Extends< U, T > >;
