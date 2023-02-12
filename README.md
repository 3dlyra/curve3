# Curve3
This library is a curves part of the 3DLyra's math library.
### Installation
```
npm i @3dlyra/curve3
```
### Example
```JavaScript
import * as Curve3 from "@3dlyra/curve3"
import * as Vector3 from "@3dlyra/vector3"

// Control points
const a = Vector3.create( - 5, 0, 0 )
const b = Vector3.create( 0, 5, 0 )
const c = Vector3.create( 5, 0, 0 )

// Divisions
const div = 4 // or a higher number for better smoothness

const vertices = Curve3.quadratic( a, b, c, div )

console.log( vertices )
/*
Float32Array[
  -5,   0,      0,
  -2.5, 1.875,  0,
  0,    2.5,    0,
  2.5,  1.875,  0,
  5,    0,      0
]
*/
```

### API
```TypeScript
// type vector3 = Float32Array( 3 ) [or use @3dlyra/vector3]

quadratic( a: vector3, b: vector3, c: vector3, div: number ): Float32Array;
cubic( a: vector3, b: vector3, c: vector3, d: vector3, div: number ): Float32Array;
```
