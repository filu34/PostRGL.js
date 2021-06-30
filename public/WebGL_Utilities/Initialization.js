import WebGLUtils from "./WebGLUtils.js";

// Initialization function that suppose to generate and create <canvas>
// tag element in HTML <body>. Also create, compile and load provided
// Shaders to WebGL Program.

function Initialization( Vertices, Dimensions = "3D" ) {

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
	let Number_of_Vertices = Vertices. length / Dimensions;

        // if ( ! Initialize_Array_Buffer ( Context, 'a_Position', Vertices, Context.FLOAT, 2) ) {

        //        console. log ( `Couldn't initialize Array_Buffer for 'a_Position'.` );
        //        return -1;
        //};

	Initialize_Array_Buffer_Shader( Context, Vertices );


        Context. clearColor ( 0.0, 0.0, 0.0, 1.0 );
	Context. enable ( Context.DEPTH_TEST );

        Context. clear ( Context. COLOR_BUFFER_BIT );
        Context. drawArrays ( Context. TRIANGLES, 0, Number_of_Vertices );

	return { Canvas, Context, Program };
};

export default Initialization;
