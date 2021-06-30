import WebGLUtils from "./WebGLUtils.js";

// Initialization function that suppose to generate and create <canvas>
// tag element in HTML <body>. Also create, compile and load provided
// Shaders to WebGL Program.

function Initialization( Vertices, Dimensions = "3D", Test ) {

	// Unpack necessary objects from Imports.

	const {
        	Create_Canvas,
        	Create_3D_Context,
        	Create_Program,
        	VERTEX_SHADER_SOURCE,
        	FRAGMENT_SHADER_SOURCE,
        	Initialize_Array_Buffer,
        	Initialize_Array_Buffer_Shader
    	} = WebGLUtils;


	const Canvas = Create_Canvas();

	WebGLUtils.Canvas = Canvas;


	const Context = Create_3D_Context( Canvas );

	WebGLUtils.Context = Context;

	
	const Program = Create_Program ( Context, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE );


	// Place holder for Attribution and Uniform setter functions.

        Vertices = new Float32Array ( Vertices );

	WebGLUtils.Vertices = Vertices;


	Dimensions = ( Dimensions === "2D" ) ? 2 : 3;


	Initialize_Array_Buffer_Shader( Context, Vertices, Dimensions );

	return { Canvas, Context, Program };
};

export default Initialization;
