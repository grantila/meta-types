import { GreaterThan } from 'meta-types'


// $ExpectType false
export type Test_0_GT_5 = GreaterThan< 0, 5 >;

// $ExpectType true
export type Test_5_GT_0 = GreaterThan< 5, 0 >;

// $ExpectType false
export type Test_1_GT_5 = GreaterThan< 1, 5 >;

// $ExpectType true
export type Test_5_GT_1 = GreaterThan< 5, 1 >;

// $ExpectType false
export type Test_4_GT_5 = GreaterThan< 4, 5 >;

// $ExpectType true
export type Test_5_GT_4 = GreaterThan< 5, 4 >;

// $ExpectType true
export type Test_98_GT_97 = GreaterThan< 98, 97 >;

// $ExpectType false
export type Test_97_GT_98 = GreaterThan< 97, 98 >;
