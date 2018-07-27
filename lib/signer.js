import {rand, fastRandom} from './functions'

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

Signer.prototype.interceptor = function (config) {
  let [s, t] = this.signature()
  config.headers['X-Signature'] = s;
  config.headers['X-Timestamp'] = t;
  return config
}

export default Signer
