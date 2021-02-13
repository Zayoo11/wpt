// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js

function testGLCanvas(gl, width, height, expected_pixel, assert_compares) {
  var colorData =
      new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
  gl.readPixels(
      0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA,
      gl.UNSIGNED_BYTE, colorData);

  const kMaxPixelToCheck = 128 * 96;
  let step = width * height / kMaxPixelToCheck;
  step = Math.round(step);
  step = (step < 1) ? 1 : step;
  for (let i = 0; i < 4 * width * height; i += (4 * step)) {
    assert_compares(colorData[i], expected_pixel[0]);
    assert_compares(colorData[i + 1], expected_pixel[1]);
    assert_compares(colorData[i + 2], expected_pixel[2]);
    assert_compares(colorData[i + 3], expected_pixel[3]);
  }
}
function testTexImage2DFromVideoFrame(width, height, expected_pixel) {
  let vfInit = {timestamp: 0, codedWidth: width, codedHeight: height};
  let u32Data = new Uint32Array(vfInit.codedWidth * vfInit.codedHeight);
  u32Data.fill(0xFF966432);  // 'rgb(50, 100, 150)';
  let argbPlaneData = new Uint8Array(u32Data.buffer);
  let argbPlane = {src: argbPlaneData, stride: width * 4, rows: height};
  let frame = new VideoFrame('ABGR', [argbPlane], vfInit);

  // let canvas = new OffscreenCanvas(width, height);
  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  let gl = canvas.getContext('webgl');

  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, frame);

  assert_equals(gl.getError(), gl.NO_ERROR);
  testGLCanvas(gl, width, height, expected_pixel, assert_equals);

  document.body.append(canvas);

  // gl.clearColor(0, 0, 0, 0);
  // gl.texSubImage2D(
  //     gl.TEXTURE_2D, 0, width / 2, height / 2, gl.RGBA, gl.RGBA,
  //     gl.UNSIGNED_BYTE, frame);
  // testGLCanvas(gl, width, height, expected_pixel, assert_equals);
  // frame.close();
}

test(() => {
  return testTexImage2DFromVideoFrame(48, 36, kSRGBPixel);
}, 'drawImage(VideoFrame) with canvas(48x36 srgb uint8).');

test(() => {
  return testTexImage2DFromVideoFrame(480, 360, kSRGBPixel);
}, 'drawImage(VideoFrame) with canvas(480x360 srgb uint8).');
