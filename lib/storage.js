let storage = localStorage || sessionStorage;

import {getLodash} from './functions'

export default function Storage() {

}

Storage.prototype.put = function (key, value) {
  let string = value;
  if (getLodash().isObject(value)) {
    string = JSON.stringify(value);
  }
  storage.setItem(key, string);
};
Storage.prototype.get = function (key, $default) {
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

Storage.prototype.remove = function (key) {
  storage.removeItem(key);
};
Storage.install = function (Vue, options = {}) {
  Vue.prototype.$storage = new Storage();
};
