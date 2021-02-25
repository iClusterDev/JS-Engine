import Buffer from './Buffer';

class Display extends Buffer {
  #aspectRatio;
  #onResize;
  #maxWidth;

  /**
   * On-Screen Canvas Buffer (Singleton).
   *
   * A default width = 800 and height = 600, will be assigned if these
   * are not passed in as constructor parameters.
   * The "id" will allow applying styles through the stylesheet.
   * Display is resizable. If configured, the onResize callback will
   * be called after each resize event.
   * @param {Object} config - config Object
   * @param {String} config.id - canvas id
   * @param {Number} config.width - canvas width
   * @param {Number} config.height - canvas height
   * @param {Function} config.onResize - resize callback
   */
  constructor(config = {}) {
    if (Display.instance) {
      return Display.instance;
    } else {
      const {
        id = 'display',
        width = 800,
        height = 600,
        onResize = () => {},
      } = config;

      super(id, width, height, true);
      this.#aspectRatio = height / width;
      this.#onResize = onResize;
      this.#maxWidth = width;

      this.#init();
      this.resize();

      Display.instance = this;
      return Display.instance;
    }
  }

  #init() {
    window.addEventListener('resize', (e) => {
      e.preventDefault();
      this.resize();
    });
  }

  resize() {
    const { innerWidth: width, innerHeight: height } = window;
    let newWidth,
      newHeight = 0;
    if (height / width >= this.#aspectRatio) {
      newWidth = width;
      newHeight = width * this.#aspectRatio;
    } else {
      newWidth = height / this.#aspectRatio;
      newHeight = height;
    }

    if (newWidth >= this.#maxWidth) {
      this.width = this.#maxWidth;
      this.height = this.#maxWidth * this.#aspectRatio;
    } else {
      this.width = newWidth;
      this.height = newHeight;
    }

    this.#onResize(this.width, this.height);
  }
}

export default Display;
