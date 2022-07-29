// Moving particles

// uniform float exampleUniform

uniform float speed;
uniform vec2 dir;
uniform float sinFactor;

out vec4 fragColor;
void main()
{
    // Position
	vec4 pos = texture(sTD2DInputs[0], vUV.st);

	vec4 factor = texture(sTD2DInputs[1], vUV.st);
	// Velocity
	vec2 vel = speed * normalize(dir) * factor.r;

    // Traslation
	vec2 vel2 = speed * normalize(pos.xy) * factor.r;
	// Rotation
	vec2 vel3 = speed * vec2(-pos.y, pos.x);
	// Distance between position and world origin
    float dist = distance(pos.xy, vec2(0));

	vec2 velTotal = mix(vel3, vel, sin(dist * sinFactor));

	pos.xy += velTotal;

	fragColor = TDOutputSwizzle(pos);
}

