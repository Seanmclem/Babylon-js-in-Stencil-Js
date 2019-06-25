import { Component, h } from '@stencil/core';
import { Game } from '../../gameStuff/Game'
import * as BABYLON from 'babylonjs';


@Component({
  tag: 'app-babylon',
  styleUrl: 'app-babylon.css',
  shadow: true
})
export class AppBabylon {
  canvasElement!: HTMLCanvasElement;
  componentDidLoad() {
    if (this.canvasElement) {
      let game = new Game(this.canvasElement);
      // Create the scene.
      game.createScene();
      // Start render loop.
      game.doRender();
    }
  }


  render() {
    return (
      <div class="app-babylon">
        <h3>Babylon JS</h3>
        <canvas id="renderCanvas"
          ref={(el) => this.canvasElement = el as HTMLCanvasElement}></canvas>
      </div>
    );
  }
}
