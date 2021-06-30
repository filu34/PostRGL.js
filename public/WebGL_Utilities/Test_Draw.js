import WebGLUtils from "./WebGLUtils.js";

function Test_Draw ( Vertices, Dimensions ) {
		
		let Context = WebGLUtils. Context; 

		if ( !Vertices ) {
			Vertices = WebGLUtils.Vertices;
		};

		Dimensions = ( Dimensions === "2D" ) ? 2 : 3;
	        let Number_of_Vertices = Vertices. length / Dimensions;

                Context. clearColor ( 0.0, 0.0, 0.0, 1.0 );
                Context. enable ( Context.DEPTH_TEST );

                Context. clear ( Context. COLOR_BUFFER_BIT );
                Context. drawArrays ( Context. TRIANGLES, 0, Number_of_Vertices );
};

export default Test_Draw;
