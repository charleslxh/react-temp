import 'whatwg-fetch'

/*
 * A utils for RESTful API.
 * Params:
 * action:
 *   name (string) - operation name.
 *   url (string) - api route
 * options:
 *   method (String) - HTTP request method. Default: "GET"
 *   body (String, Blob, FormData) - HTTP request body
 *   headers (Object, Headers) - Default: {}
 *   credentials (String) - Authentication credentials mode. Default: "omit"
 *     "omit" - don't include authentication credentials (e.g. cookies) in the request
 *     "same-origin" - include credentials in requests to the same site
 *     "include" - include credentials in requests to all sites
 */

const errorMessages = {
    400: '请求参数错误',
    401: '未授权',
    403: '禁止访问',
    404: '请求未找到',
    405: '请求方式不允许',
    406: '请求内容不满足',
    408: '请求超时',
    410: '请求资源不可用',
    500: '服务器内部错误'
};

const checkStatus = function (response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const errorMessage = errorMessages[response.status] ? errorMessages[response.status] : '未知错误';
        let error = new Error(errorMessage);
        error.response = response;
        throw error
    }
};

const parse = function (response) {
    if (!response) return Promise.resolve();

    // TODO: this need to parse blob, arrayBuffer, and so on...
    const [contentType] = response.headers.get('Content-Type').split(/;\s/);

    let result = null;

    switch (contentType) {
        case 'text/html':
        case 'text/plain':
        case 'text/css':
        case 'text/javascript':
            result = response.text();
            break;
        case 'application/json':
            result = response.json();
            break;
        case 'multipart/form-data':
        case 'application/x-www-form-urlencoded':
            result = response.formData();
            break;
        default:
            try {
                result = response.blob()
            } catch (err) {
                throw new TypeError({ message: 'Unsupported content type' })
            }
    }

    return result;
};

class Service {
    constructor() {
        this.options = {
            method: 'GET',
            headers: {
                'Accept': '*',
                // For POST and PUT, Tell server which data type client will send.
                // For CORS request(include simple request or preflighted request),
                // please read https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
                'Content-Type': 'application/json'
            },
            // credentials(cookies):
            //   1. Fetch api will not send credentials by default.
            //   2. To automatically send cookies for the current domain, the credentials option must be same-origin.
            //   3. For CORS request, if you want to sent credentials to other domain, the credentials option must be include.
            credentials: 'same-origin'
        }
    }

    _request(url, options) {
        fetch(url, this._mergeOptions(options))
            .then(checkStatus)
            .then(parse);
    }

    get(url, options = {}) {
        options.method = 'GET';
        const { query = {} } = options;
        let queryPairs = [];

        for (let key in query) {
            queryPairs.push(`${ key }=${ query[key] }`)
        }

        if (url.indexOf('?') === -1) {
            url += '?'
        } else {
            url += '&'
        }

        url += queryPairs.join('&');
        delete options.query;
        return this._request(url, options)
    }

    post(url, options = {}) {
        options.method = 'POST';
        return this._request(url, options)
    }

    options(url, options = {}) {
        options.method = 'OPTIONS';
        return this._request(url, options)
    }

    put(url, options = {}) {
        options.method = 'PUT';
        return this._request(url, options)
    }

    patch(url, options = {}) {
        options.method = 'PATCH';
        return this._request(url, options)
    }

    del(url, options = {}) {
        options.method = 'DELETE';
        return this._request(url, options)
    }
}

export default Service
