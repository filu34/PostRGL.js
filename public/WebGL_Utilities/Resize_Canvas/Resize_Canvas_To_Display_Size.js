import Resize_Canvas_In_CSS from "./Resize_Canvas_In_CSS.js";

function Resize_Canvas_To_Display_Size( Canvas ) {

	console.log ( Canvas );

	const Display_Width = Canvas. clientWidth;
	
	const Display_Height = Canvas. clientHeight;

	const Check_For_Resize = Canvas. width 	!== Display_Width ||

				 Canvas. height !== Display_Height;

	if ( Check_For_Resize ) {

		Canvas. width  = Display_Width;

		Canvas. height = Display_Height;
	};

	return Check_For_Resize;
};

export default Resize_Canvas_To_Display_Size;
