'use strict'

const globalThis = require('./globalthis')

module.exports = {
  supportsFileReader: typeof self !== 'undefined' && 'FileReader' in self,
  supportsWebRTC: 'RTCPeerConnection' in globalThis &&
  (typeof navigator !== 'undefined' && 'getUserMedia' in navigator)
}
