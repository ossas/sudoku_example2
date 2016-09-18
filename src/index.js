import style from '../style/index.less';
import sudokuMaker from 'sudokumaker';
import PIXI from 'pixi.js';

console.log(sudokuMaker);
console.log(PIXI);

//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);