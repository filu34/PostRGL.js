import WebGLUtils from "./WebGLUtils.js";

function Initialize_Array_Buffer_Shader( Context, Vertices, Size_of_Vertices ) {

	console. log ( WebGLUtils );
	
	let { VERTEX_SHADER_SOURCE, Initialize_Array_Buffer } = WebGLUtils;
	

	// Cut of "void main" function of the Shader that start from "void",
	// and leave only string with variables. 
	
	let Sanitized_Shader = VERTEX_SHADER_SOURCE. split ( "void" ). shift();


	// Delete enters, tabs other parts with unnecessary empty spaces too,
	// and split string into array with each element containing line with variables.

	let Splitted_Sanitized_Shader = Sanitized_Shader. replace ( /\s+/g, ' ' ). trim(). split ( ";" );


	// Create empty Array, then loop through Splitted and Sanitized elements,
	// to split each line into seperate words. Also delete any left empty spaces.

	let Atomized_Shader = [];
	
	for ( const Element of Splitted_Sanitized_Shader ) {

		Atomized_Shader. push( Element. trim() . split ( " " ) );
	};


	// Look for all variables ( Attributes, Uniforms, Varryings ) 
	// in Atomized Shader Array, and enable them. 

	for ( const Element of Atomized_Shader ) {
		
		if ( Element[0] === "attribute" ) {
			
			console. log ( `${ Element[0] } : ${ Element[2] }` );

			Initialize_Array_Buffer ( WebGLUtils.Context, Element[2], WebGLUtils.Vertices, WebGLUtils.Context.FLOAT, Size_of_Vertices );
		};
	};

	WebGLUtils. Atomized_Shader = Atomized_Shader;

	return Atomized_Shader; 
};

export default Initialize_Array_Buffer_Shader;
