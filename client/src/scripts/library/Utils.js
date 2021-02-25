class Utils {
  /**
   * Creates an off/on screen canvas element
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  static createCanvas(
    id = null,
    width = null,
    height = null,
    onscreen = false
  ) {
    if (!width || !height)
      throw new Error('createCanvas: width and height are required params');

    if (onscreen) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      if (id) canvas.id = id;
      if (onscreen) document.body.appendChild(canvas);
      return canvas;
    } else {
      return new OffscreenCanvas(width, height);
    }
  }

  /**
   * Creates an off/on screen rendering context
   * @param {Number} width width in px
   * @param {Number} height height in px
   * @param {Boolean} onscreen off/on screen canvas type
   */
  static createContext(
    id = null,
    width = null,
    height = null,
    onscreen = false
  ) {
    return this.createCanvas(id, width, height, onscreen).getContext('2d');
  }
}

export default Utils;
