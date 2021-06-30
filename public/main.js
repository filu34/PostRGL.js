import WebGLUtils from "./WebGL_Utilities/WebGLUtils.js";
import Test_Draw from "./WebGL_Utilities/Test_Draw.js";

function main () {

	const { Initialization, Canvas_Size, Resize_Canvas_To_Display_Size } = WebGLUtils;

	Canvas_Size ( "100%", "100%" );

	let Vertices = [
		// x, y
                -0.9, 0.9,
                -0.9, 0.7,
                -0.1, 0.7,
		 
		0.1, -0.1,
		0.1, -0.3,
		0.9, -0.3 
        ];

	const { Canvas, Context, Program } = Initialization ( Vertices, "2D", true ); 


	Resize_Canvas_To_Display_Size( Context. canvas );
	Context. viewport ( 0, 0, Context.canvas.width, Context.canvas.height );

	Test_Draw ( Vertices, "2D" );
	console.log ( Context. canvas);


	console.log ( WebGLUtils.Atomized_Shader );
};

main();
