// Moving particles

// uniform float exampleUniform

uniform float speed;
uniform vec2 dir;

out vec4 fragColor;
void main()
{
	vec4 pos = texture(sTD2DInputs[0], vUV.st);

	vec4 factor = texture(sTD2DInputs[1], vUV.st);
	vec2 vel = speed * normalize(dir) * factor.r;
	pos.xy += vel;

	fragColor = TDOutputSwizzle(pos);
}

