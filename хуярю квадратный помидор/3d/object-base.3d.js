class ObjectBase {
  constructor() {
    this.node = null;
  }

  render() {
    if (this.node) {
      return this.node;
    }
    if (!this.markup) {
      throw new Error("`markup` method is not implemented");
    }
    const node = document.createElement("div");
    node.innerHTML = this.markup();
    this.node = node.children[0];
    return this.node;
  }
}
