import {rand, fastRandom, md5} from './functions'

function Signer(key, nonceLength) {
  this.nonceLength = nonceLength || 16
  this.key = key
}

Signer.prototype.signature = function() {
  let nonce = fastRandom(this.nonceLength)
  let l = rand(1, 9)
  let timestamp = Math.floor(new Date().getTime() / 1000)
  let string = this.key + timestamp + nonce.substr(0, l)
  return [nonce + l + md5(string).toUpperCase(), timestamp]
}

Signer.prototype.interceptor = function () {
  let _this = this

  return function (config) {
    let [_signature, _timestamp] = _this.signature()
    config.headers['X-Signature'] = _signature;
    config.headers['X-Timestamp'] = _timestamp;
    return config
  }
}

export default Signer
