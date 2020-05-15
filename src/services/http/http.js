const HTTP_DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
};

export default class Http {
  /**
   * Creates a new Http class
   * @param {import('./uri').default} uri iniial url configuration
   */
  constructor(uri) {
    this.uri = uri;
  }

  /**
   * Make a http request
   * @param {string[]} path path to make the request
   * @param {'GET' | 'POST' | 'PUT' | 'PATCH'} method Http call method
   * @param {{body: string; params: string; headers: string;}} config Request configuration
   * @return {Promise<any>}
   */
  makeRequest(path, method = HTTP_METHODS.GET, config = {}) {
    const requestUrl = this.uri.resolve(path, config.params || {}).toString();

    return fetch(requestUrl, {
      method,
      body: config.body,
      headers: {
        ...HTTP_DEFAULT_HEADERS,
        ...(config.headers || {}),
      },
    }).then(response => {
      if (response.status !== 200) {
        throw response.text();
      }

      return response.json();
    });
  }

  /**
   * Make a get http request
   * @param {string[]} path path to make the request
   * @param {{params: string; headers: string;}} config Request configuration
   * @return {Promise<any>}
   */
  get(path, config = {}) {
    return this.makeRequest(path, HTTP_METHODS.GET, config);
  }

  /**
   * Make a http request
   * @param {string[]} path path to make the request
   * @param {{body: string; params: string; headers: string;}} config Request configuration
   * @return {Promise<any>}
   */
  post(path, config = {}) {
    return this.makeRequest(path, HTTP_METHODS.POST, config);
  }

  resolvePaths(paths) {
    return new Http(this.uri.resolve(paths));
  }
}
