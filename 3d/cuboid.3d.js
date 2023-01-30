class Cuboid extends ObjectBase {
  constructor(x, y, z, xlength, ylength, zlength) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
    this.xlength = xlength;
    this.ylength = ylength;
    this.zlength = zlength;
  }

  // prettier-ignore
  markup() {
    const styleFront = utils.objectAsStyleString({
        width: this.xlength,
        height: this.ylength
    });

    const styleTop = ""

    const styleSide = ""

    return `
    <div class="3d-cuboid-base">
        <div class="3d-cuboid-face-front 3d-face" style="${styleFront}"></div>
        <div class="3d-cuboid-face-back 3d-face" style="${styleFront}"></div>
        <div class="3d-cuboid-face-left 3d-face" style="${styleSide}"></div>
        <div class="3d-cuboid-face-right 3d-face" style=${styleSide}></div>
        <div class="3d-cuboid-face-top 3d-face" style${styleTop}></div>
        <div class="3d-cuboid-face-bottom 3d-face" style${styleTop}></div>
    </div>`;
  }

  render() {
    return super.render();
  }
}
