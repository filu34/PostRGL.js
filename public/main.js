import Initialization from "./WebGL_Utilities/Initialization.js";
import Initialize_Array_Buffer from "./WebGL_Utilities/Initialize_Array_Buffer.js";

function main () {

	const { Canvas, Context, Program } = Initialization(); 

	let Triangle = [
		-0.5, 0.5,
		-0.5, -0.2,
		0.5, -0.2
	];

	if ( ! Initialize_Array_Buffer ( Context, 'a_Position', Triangle, Context.FLOAT, 3) ) {
		
		console. log ( `Couldn't initialize Array_Buffer for 'a_Position'.` );
		return -1;
	};
};

main();
