export default class Uri {
  /**
   * Returns a new URI instance with an http:// prefix
   * @param {string} baseUrl Base url for the request
   * @param {string[]?} paths Array of paths of the htp request
   * @param {{[key: string]: string}} params query parameters
   */
  static http(baseUrl, paths = [], params = {}) {
    // Creates the object
    return new Uri(baseUrl, 'http', paths, params);
  }

  /**
   * Creates a instance of Uri class
   * @param {string} base Base url for the request
   * @param {String} protocol Protocol of the request
   * @param {string[]?} paths Array of paths of the htp request
   * @param {{[key: string]: string}} params query parameters
   */
  constructor(base, protocol, paths = [], params = {}) {
    this.protocol = protocol;
    this.base = base;
    this.paths = paths;
    this.params = params;
  }

  /**
   * Appends new paths to the current url and return a new instance
   * @param {string[]} paths Array of new paths
   * @param {{[key: string]: string}} params query parameters
   */
  resolve(paths, params) {
    const {base, protocol, paths: lastPaths, params: lastParams} = this;

    return new Uri(base, protocol, [...lastPaths, ...paths], {
      ...lastParams,
      ...params,
    });
  }

  /**
   * Returns formatted url
   * @return {string}
   */
  toString() {
    let url = `${this.protocol}://${this.base}/`;

    // Convert path arrays into a single string
    const completePath = this.paths
      .map(path => encodeURI(path.trim()))
      .join('/');

    // Convert object into a valid string
    const queryParamsString = Object.entries(this.params)
      .reduce((last, [key, value]) => `${last}&${key}=${value}`, '')
      .substr(1);

    url += `${completePath}?${queryParamsString}`;

    console.log(url);
    return url;
  }
}
