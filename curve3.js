export function quadratic( a, b, c, div ) {

	const out = new Float32Array( ( div + 1 ) * 3 )

	for ( let i = 0; i <= div; i++ ) {

		out[ i * 3 ] = ( ( 1 - i / div ) * ( 1 - i / div ) * a[ 0 ] ) + ( 2 * ( 1 - i / div ) * ( i / div ) * b[ 0 ] ) + ( ( i / div ) * ( i / div ) * c[ 0 ] )
		out[ i * 3 + 1 ] = ( ( 1 - i / div ) * ( 1 - i / div ) * a[ 1 ] ) + ( 2 * ( 1 - i / div ) * ( i / div ) * b[ 1 ] ) + ( ( i / div ) * ( i / div ) * c[ 1 ] )
		out[ i * 3 + 2 ] = ( ( 1 - i / div ) * ( 1 - i / div ) * a[ 2 ] ) + ( 2 * ( 1 - i / div ) * ( i / div ) * b[ 2 ] ) + ( ( i / div ) * ( i / div ) * c[ 2 ] )
	}

	return out
}

export function cubic( a, b, c, d, div ) {

	const out = new Float32Array( ( div + 1 ) * 3 )

	for ( let i = 0; i <= div; i++ ) {

		out[ i * 3 ] = ( ( 1 - i / div ) * ( 1 - i / div ) * ( 1 - i / div ) * a[ 0 ] ) + ( 3 * ( 1 - i / div ) * ( 1 - i / div ) * i / div * b[ 0 ] ) + ( 3 * ( 1 - i / div ) * i / div * i / div * c[ 0 ] ) + ( i / div * i / div * i / div * d[ 0 ] )
		out[ i * 3 + 1 ] = ( ( 1 - i / div ) * ( 1 - i / div ) * ( 1 - i / div ) * a[ 1 ] ) + ( 3 * ( 1 - i / div ) * ( 1 - i / div ) * i / div * b[ 1 ] ) + ( 3 * ( 1 - i / div ) * i / div * i / div * c[ 1 ] ) + ( i / div * i / div * i / div * d[ 1 ] )
		out[ i * 3 + 2 ] = ( ( 1 - i / div ) * ( 1 - i / div ) * ( 1 - i / div ) * a[ 2 ] ) + ( 3 * ( 1 - i / div ) * ( 1 - i / div ) * i / div * b[ 2 ] ) + ( 3 * ( 1 - i / div ) * i / div * i / div * c[ 2 ] ) + ( i / div * i / div * i / div * d[ 2 ] )
	}

	return out
}
