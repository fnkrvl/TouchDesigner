
// Example Pixel Shader

uniform vec2 uInputRes, uRedPos, uGreenPos, uBluePos;
uniform float uRedScale, uGreenScale, uBlueScale;

out vec4 fragColor;
void main()
{
	vec2 redPos = uRedPos / uInputRes;
	vec2 greenPos = uGreenPos / uInputRes;
	vec2 bluePos = uBluePos / uInputRes;

	vec4 color = vec4(1.0);
	color.r = texture(sTD2DInputs[0], vUV.st / uRedScale - redPos).r;
	color.g = texture(sTD2DInputs[0], vUV.st / uGreenScale - greenPos).g;
	color.b = texture(sTD2DInputs[0], vUV.st / uBlueScale - bluePos).b;

	fragColor = TDOutputSwizzle(color);
}
