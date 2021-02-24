// import {initialize} from "./src/initialize.js";
// import {addCube} from "./src/shapes.js";
//
// const cameraLocation = {z: 5}
// const rendererParameters = {antialias: true} // see WebGLRendererParameters
// const lightProperties = {
//     x: 5,
//     y: 5,
//     z: 7.5,
//     color: 0xffffff,
//     integrity: 1.0
// }
//
// const sceneObj = initialize(cameraLocation, rendererParameters, lightProperties);
// const cube = addCube(sceneObj, 0xff0080);
//
// sceneObj.light.target = cube;
//
// const animate = () => {
//     requestAnimationFrame(animate);
//
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     sceneObj.renderer.render(sceneObj.scene, sceneObj.camera);
// }
//
// animate();
import {WebGLRenderer} from "/node_modules/three/src/renderers/WebGLRenderer.js";
import {PerspectiveCamera} from "/node_modules/three/src/cameras/PerspectiveCamera.js";
import {Scene} from "/node_modules/three/src/scenes/Scene.js";
import {BoxGeometry} from "/node_modules/three/src/geometries/BoxGeometry.js";
import {Mesh} from "/node_modules/three/src/objects/mesh.js"
import {MeshBasicMaterial} from "/node_modules/three/src/materials/MeshBasicMaterial.js";

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const renderer = new WebGLRenderer({canvas});

const fov = 75;     // field of view
const aspect = 2;   // display aspect of the canvas
const near = 0.1;   // represents the space infront of the camera that will be rendered
const far = 5;      // represents the space infront of the camera that will be rendered
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new Scene();

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new MeshBasicMaterial({color: 0x44aa88});

const cube = new Mesh(geometry, material);

scene.add(cube);

renderer.render(scene, camera);