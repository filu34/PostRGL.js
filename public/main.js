import WebGLUtils from "./WebGL_Utilities/WebGLUtils.js";

function main () {

	let { Initialization } = WebGLUtils;

	let Vertices = [
                -0.5, 0.5,
                -0.5, -0.2,
                0.5, -0.2
        ];

	const { Canvas, Context, Program } = Initialization ( Vertices, "2D" ); 

	console.log ( WebGLUtils.Atomized_Shader );
};

main();
