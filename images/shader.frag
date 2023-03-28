precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform float customUniform;

void main(void)
{
   vec4 fg = texture2D(uSampler, vTextureCoord);

   float a = step(customUniform, vTextureCoord.y);
   if(a < 1.) {
      discard;
   }

   gl_FragColor = fg;
}
