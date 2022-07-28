
// uniform float exampleUniform;

out vec4 fragColor;
void main()
{
	vec4 disp = texture(sTD2DInputs[1], vUV.st);
	
	vec2 uv = sin(vUV.st * 2 + .5) / disp.xy * 0.1 / disp.z * 0.5;
	//vec4 color = texture(sTD2DInputs[0], vUV.st + disp.xy);
	vec4 color = texture(sTD2DInputs[0], uv);
	fragColor = TDOutputSwizzle(color);
}
