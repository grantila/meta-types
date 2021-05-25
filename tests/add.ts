import { Add } from 'meta-types'


// $ExpectType 5
export type Test_0_Add = Add< 0, 5 >;

// $ExpectType 5
export type Test_Add_0 = Add< 5, 0 >;

// $ExpectType 6
export type Test_1_Add = Add< 1, 5 >;

// $ExpectType 6
export type Test_Add_1 = Add< 5, 1 >;

// $ExpectType 9
export type Test_4_Add = Add< 4, 5 >;

// $ExpectType 9
export type Test_Add_4 = Add< 5, 4 >;
