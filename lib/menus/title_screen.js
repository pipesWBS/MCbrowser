const { openURL, displayScreen } = require('./components/common')
const { LitElement, html, css } = require('lit')

class TitleScreen extends LitElement {
  static get styles () {
    return css`
      :host {
        user-select: none;
        font-family: 'Mojangles', 'Minecraftia', sans-serif;
      }

      .minecraft {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 310px;
        height: 60px;
      }

      .minecraft .minec {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('textures/1.17.1/gui/title/minecraft.png');
        background-size: 256px;
        image-rendering: pixelated;
        width: 155px;
        height: 44px;
      }

      .minecraft .raft {
        display: block;
        position: absolute;
        top: 0;
        left: 155px;
        background-image: url('textures/1.17.1/gui/title/minecraft.png');
        background-size: 256px;
        image-rendering: pixelated;
        width: 155px;
        height: 44px;
        background-position-y: -45px;
      }

      .minecraft .edition {
        display: block;
        position: absolute;
        top: 37px;
        left: calc(50% - 44px);
        background-image: url('extra-textures/edition.png');
        background-size: 128px;
        image-rendering: pixelated;
        width: 88px;
        height: 14px;
      }

      .splash {
        position: absolute;
        top: 28px;
        right: -10px;
        color: #ffff55;
        transform: rotateZ(-20deg) scale(1);
        width: max-content;
        text-shadow: 2px 2px 0px #3f3f00;
        font-size: 11px;
        animation: splashAnim 400ms infinite alternate ease-in-out;
      }

      @keyframes splashAnim {
        to {
          transform: rotateZ(-20deg) scale(1.08);
        }
      }

      .menu {
        display: flex;
        flex-direction: column;
        gap: 6px 0;
        position: absolute;
        top: calc(45% + 10px);
        left: 50%;
        width: 200px;
        transform: translate(-50%);
      }

      .menu-row {
        display: flex;
        flex-direction: row;
        gap: 0 4px;
        width: 100%;
      }

      .bottom-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        bottom: 4px;
        left: 4px;
        width: calc(100% - 8px);
        color: #ffffff;
        text-shadow: 1px 1px 0px #000000;
        font-size: 10px;
      }
    `
  }

  render () {
