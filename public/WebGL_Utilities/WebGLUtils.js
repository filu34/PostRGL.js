import Create_Canvas			from "./Create_Canvas.js";
import Create_3D_Context		from "./Create_3D_Context.js";
import Create_Program			from "./Create_Program.js";
import Compile_Shader			from "./Compile_Shader.js";
import VERTEX_SHADER_SOURCE		from "./VERTEX_SHADER_SOURCE.js";
import FRAGMENT_SHADER_SOURCE		from "./FRAGMENT_SHADER_SOURCE.js";
import Initialize_Array_Buffer		from "./Initialize_Array_Buffer.js";
import Initialize_Array_Buffer_Shader	from "./Initialize_Array_Buffer_From_Shader.js";

const WebGLUtils = {
	Create_Canvas,
	Create_3D_Context,
	Create_Program,
	Compile_Shader,
	VERTEX_SHADER_SOURCE,
	FRAGMENT_SHADER_SOURCE,
	Initialize_Array_Buffer,
	Initialize_Array_Buffer_Shader,
};

export default WebGLUtils;