
export const getBoxShape = () => {
  return {
    position: [
      // front
      -0.5, -0.5, 0.5,
      0.5, -0.5, 0.5,
      -0.5, 0.5, 0.5,

      -0.5, 0.5, 0.5,
      0.5, -0.5, 0.5,
      0.5, 0.5, 0.5,

      // left
      -0.5, -0.5, -0.5,
      -0.5, -0.5, 0.5,
      -0.5, 0.5, -0.5,

      -0.5, 0.5, -0.5,
      -0.5, -0.5, 0.5,
      -0.5, 0.5, 0.5,

      // right
      0.5, -0.5, 0.5,
      0.5, -0.5, -0.5,
      0.5, 0.5, 0.5,

      0.5, -0.5, -0.5,
      0.5, 0.5, -0.5,
      0.5, 0.5, 0.5,

      // top
      -0.5, 0.5, 0.5,
      0.5, 0.5, 0.5,
      0.5, 0.5, -0.5,

      0.5, 0.5, -0.5,
      -0.5, 0.5, -0.5,
      -0.5, 0.5, 0.5,

      // bottm
      -0.5, -0.5, 0.5,
      0.5, -0.5, -0.5,
      0.5, -0.5, 0.5,

      -0.5, -0.5, 0.5,
      -0.5, -0.5, -0.5,
      0.5, -0.5, -0.5,

      // back
      -0.5, -0.5, -0.5,
      -0.5, 0.5, -0.5,
      0.5, -0.5, -0.5,

      -0.5, 0.5, -0.5,
      0.5, 0.5, -0.5,
      0.5, -0.5, -0.5,
    ],
    color: [
      // front red
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,

      1, 0, 0,
      1, 0, 0,
      1, 0, 0,

      // left green
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,

      0, 1, 0,
      0, 1, 0,
      0, 1, 0,

      // right blue
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,

      0, 0, 1,
      0, 0, 1,
      0, 0, 1,

      // top yellow
      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      1, 1, 0,
      1, 1, 0,
      1, 1, 0,

      // bottom white
      1, 1, 1,
      1, 1, 1,
      1, 1, 1,

      1, 1, 1,
      1, 1, 1,
      1, 1, 1,

      // back purple
      1, 0, 1,
      1, 0, 1,
      1, 0, 1,

      1, 0, 1,
      1, 0, 1,
      1, 0, 1,
    ],
    uv: [
      // front
      0, 0,
      1, 0,
      0, 1,

      0, 1,
      1, 0,
      1, 1,

      // left
      0, 0,
      0, 1,
      1, 0,

      1, 0,
      0, 1,
      1, 1,

      // right
      0, 1,
      0, 0,
      1, 1,

      0, 0,
      1, 0,
      1, 1,

      // top
      0, 1,
      1, 1,
      1, 0,

      1, 0,
      0, 0,
      0, 1,

      // bottm
      0, 1,
      1, 0,
      1, 1,

      0, 1,
      0, 0,
      1, 0,

      // back
      0, 0,
      0, 1,
      1, 0,

      0, 1,
      1, 1,
      1, 0,
    ]
  };
}