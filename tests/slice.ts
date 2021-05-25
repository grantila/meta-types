import { Slice } from 'meta-types'


// $ExpectType []
export type Test_Empty = Slice< [ ], 0, 0 >;

// $ExpectType []
export type Test_Empty_Default = Slice< [ ] >;

// $ExpectType []
export type Test_Empty_OOR = Slice< [ ], 5, 7 >;

// $ExpectType []
export type Test_1_Nothing = Slice< [ 5 ], 0, 0 >;

// $ExpectType []
export type Test_1_OOR = Slice< [ 5 ], 3, 5 >;

// $ExpectType [5]
export type Test_1_Default = Slice< [ 5 ] >;

// $ExpectType [5]
export type Test_1_1 = Slice< [ 5 ], 0, 1 >;

// $ExpectType []
export type Test_Many_None = Slice< [ 5, 6, 7, 8 ], 3, 3 >;

// $ExpectType []
export type Test_Many_OOR = Slice< [ 5, 6, 7, 8 ], 5, 7 >;

// $ExpectType [5, 6, 7, 8]
export type Test_Many_Default = Slice< [ 5, 6, 7, 8 ] >;

// $ExpectType [7, 8]
export type Test_Many_Start = Slice< [ 5, 6, 7, 8 ], 2 >;

// $ExpectType [6, 7]
export type Test_Many_Slice = Slice< [ 5, 6, 7, 8 ], 1, 3 >;
