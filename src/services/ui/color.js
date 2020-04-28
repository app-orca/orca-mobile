export default class Color {
  static RGBA(r, g, b, a = 1) {
    return new Color(r, g, b, a);
  }

  constructor(r, g, b, a) {
    this.color = {r, g, b, a};
  }

  withAlpha(alpha) {
    const {r, g, b} = this.color;

    return new Color(r, g, b, alpha);
  }

  darker(amount) {
    const {r, g, b, a} = this.color;

    const darkerColors = [...[r, g, b].map(color => color * amount), a];

    return new Color(...darkerColors);
  }

  toString() {
    const {r, g, b, a} = this.color;

    return `rgba(${r},${g},${b},${a})`;
  }
}
