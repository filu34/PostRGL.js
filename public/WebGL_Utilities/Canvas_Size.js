function Canvas_Size ( Width, Height ) {

	const Style = document. createElement ( "style" );

	Style. innerHTML = `
		#WebGLCanvas {	
			width: ${ Width };
			height: ${ Height };
			display: block;
		}
	`;

	document. head. appendChild ( Style );
};

export default Canvas_Size;
