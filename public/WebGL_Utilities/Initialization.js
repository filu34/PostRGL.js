import Imports from "./Imports.js";

// Unpack necessary objects from Imports.

let { 
	Create_Canvas,
	Create_3D_Context,
	Create_Program,
	VERTEX_SHADER_SOURCE,
	FRAGMENT_SHADER_SOURCE, 
	Initialize_Array_Buffer
    } = Imports; 


// Initialization function that suppose to generate and create <canvas>
// tag element in HTML <body>. Also create, compile and load provided
// Shaders to WebGL Program.

function Initialization() {

	const Canvas = Create_Canvas();

	const Context = Create_3D_Context( Canvas );

	const Program = Create_Program ( Context, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE );


	 let Vertices = [
                -0.5, 0.5,
                -0.5, -0.2,
                0.5, -0.2
        ];

        let Triangle = new Float32Array ( Vertices );

        if ( ! Initialize_Array_Buffer ( Context, 'a_Position', Triangle, Context.FLOAT, 2) ) {

                console. log ( `Couldn't initialize Array_Buffer for 'a_Position'.` );
                return -1;
        };

        Context. clearColor ( 0, 0, 0, 1 );
        Context. clear ( Context. COLOR_BUFFER_BIT );
        Context. drawArrays ( Context. TRIANGLES, 0, 3 );

	return { Canvas, Context, Program };
};

export default Initialization;
