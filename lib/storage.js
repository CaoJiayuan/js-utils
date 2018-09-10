let storage = localStorage || sessionStorage;

import {getLodash} from './functions'

export default function BrowserStorage() {

}

/**
 * @param key
 * @param value
 */
BrowserStorage.prototype.put = function (key, value) {
  let string = value;
  if (getLodash().isObject(value)) {
    string = JSON.stringify(value);
  }
  storage.setItem(key, string);
};
/**
 *
 * @param key
 * @param [$default]
 * @returns {*}
 */
BrowserStorage.prototype.get = function (key, $default) {
  let result = storage.getItem(key);
  try {
    result = JSON.parse(result);
  } catch (error) {
  }

  if (!result) {
    return $default;
  }

  return result;
};

BrowserStorage.prototype.remove = function (key) {
  storage.removeItem(key);
};
BrowserStorage.install = function (Vue, options = {}) {
  Vue.prototype.$storage = new BrowserStorage();
};
