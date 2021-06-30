import WebGLUtils from "./WebGLUtils.js";

function Initialize_Array_Buffer( Context, Attribute, Data_Array, Type, Size_of_Vertices) {

	let Buffer = Context. createBuffer ();

	if ( ! Buffer ) {

		console. log ( `Failed to create the Buffer Object: ${ Buffer }.` );
		return false;
	};

	Context. bindBuffer ( Context. ARRAY_BUFFER, Buffer );
	Context. bufferData ( Context. ARRAY_BUFFER, Data_Array, Context. STATIC_DRAW );

	let a_Attribute = Context. getAttribLocation ( Context. program, Attribute );

	if ( a_Attribute < 0 ) {

		console. log ( `Failed to get the storage location of ${ Attribute }.` );
		return false;
	};

	Context. vertexAttribPointer ( a_Attribute, Size_of_Vertices, Type, false, 0, 0);

	Context. enableVertexAttribArray ( a_Attribute );

	console.log(WebGLUtils);

	return true;
};

export default Initialize_Array_Buffer;
