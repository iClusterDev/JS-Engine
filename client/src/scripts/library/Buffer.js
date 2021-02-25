import Utils from './Utils';

class Buffer {
  #buffer;

  /**
   * General purpose off/on screen canvas.
   *
   * @param {Number} width - canvas width
   * @param {Number} height - canvas height
   * @param {Boolean} onscreen - visible on screen
   */
  constructor(id = '', width = null, height = null, onscreen = false) {
    this.#buffer = Utils.createContext(id, width, height, onscreen);
  }

  get buffer() {
    return {
      data: this.#buffer.canvas,
      width: this.#buffer.canvas.width,
      height: this.#buffer.canvas.height,
    };
  }

  get width() {
    return this.#buffer.canvas.width;
  }

  get height() {
    return this.#buffer.canvas.height;
  }

  set width(width) {
    this.#buffer.canvas.width = width;
  }

  set height(height) {
    this.#buffer.canvas.height = height;
  }

  render(buffer, positionX = 0, positionY = 0) {
    this.#buffer.drawImage(
      buffer.data,
      positionX,
      positionY,
      buffer.width,
      buffer.height
    );
  }
}

export default Buffer;
