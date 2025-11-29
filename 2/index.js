/*
REPL (read, eval, print, loop)/node command line in Terminal:

adriannandu@kingdeMacBook-Air ~ % node
Welcome to Node.js v20.18.0.
Type ".help" for more information.
> 1 + 1
2
> 1 == '1'
true
> 1 === '1'
false
> const name = 'Adrian'
undefined
> name
'Adrian'
> const age = 43
undefined
> age
43
> age++
Uncaught TypeError: Assignment to constant variable.
> age + 1
44
> age
43
> name
'Adrian'
> age
43
> const sayHello = (name, age) => {
... console.log(`Hi, my name is ${name}, I am aged ${age}.`);
... }
undefined
> sayHello(name, age);
Hi, my name is Adrian, I am aged 43.

*/

/*
To access in global var:

> global
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

/*
global.(press tab twice after .), you can use all the modules in the node:

> global.
global.__proto__                         global.hasOwnProperty                    global.isPrototypeOf
global.propertyIsEnumerable              global.toLocaleString                    global.toString
global.valueOf

global.constructor

global.AbortController                   global.AbortSignal                       global.AggregateError
global.Array                             global.ArrayBuffer                       global.Atomics
global.BigInt                            global.BigInt64Array                     global.BigUint64Array
global.Blob                              global.Boolean                           global.BroadcastChannel
global.Buffer                            global.ByteLengthQueuingStrategy         global.CompressionStream
global.CountQueuingStrategy              global.Crypto                            global.CryptoKey
global.CustomEvent                       global.DOMException                      global.DataView
global.Date                              global.DecompressionStream               global.Error
global.EvalError                         global.Event                             global.EventTarget
global.File                              global.FinalizationRegistry              global.Float32Array
global.Float64Array                      global.FormData                          global.Function
global.Headers                           global.Infinity                          global.Int16Array
global.Int32Array                        global.Int8Array                         global.Intl
global.JSON                              global.Map                               global.Math
global.MessageChannel                    global.MessageEvent                      global.MessagePort
global.NaN                               global.Number                            global.Object
global.Performance                       global.PerformanceEntry                  global.PerformanceMark
global.PerformanceMeasure                global.PerformanceObserver               global.PerformanceObserverEntryList
global.PerformanceResourceTiming         global.Promise                           global.Proxy
global.RangeError                        global.ReadableByteStreamController      global.ReadableStream
global.ReadableStreamBYOBReader          global.ReadableStreamBYOBRequest         global.ReadableStreamDefaultController
global.ReadableStreamDefaultReader       global.ReferenceError                    global.Reflect
global.RegExp                            global.Request                           global.Response
global.Set                               global.SharedArrayBuffer                 global.String
global.SubtleCrypto                      global.Symbol                            global.SyntaxError
global.TextDecoder                       global.TextDecoderStream                 global.TextEncoder
global.TextEncoderStream                 global.TransformStream                   global.TransformStreamDefaultController
global.TypeError                         global.URIError                          global.URL
global.URLSearchParams                   global.Uint16Array                       global.Uint32Array
global.Uint8Array                        global.Uint8ClampedArray                 global.WeakMap
global.WeakRef                           global.WeakSet                           global.WebAssembly
global.WritableStream                    global.WritableStreamDefaultController   global.WritableStreamDefaultWriter
global._                                 global._error                            global.assert
global.async_hooks                       global.atob                              global.btoa
global.buffer                            global.child_process                     global.clearImmediate
global.clearInterval                     global.clearTimeout                      global.cluster
global.console                           global.constants                         global.crypto
global.decodeURI                         global.decodeURIComponent                global.dgram
global.diagnostics_channel               global.dns                               global.domain
global.encodeURI                         global.encodeURIComponent                global.escape
global.eval                              global.events                            global.fetch
global.fs                                global.global                            global.globalThis
global.http                              global.http2                             global.https
global.inspector                         global.isFinite                          global.isNaN
global.module                            global.net                               global.os
global.parseFloat                        global.parseInt                          global.path
global.perf_hooks                        global.performance                       global.process
global.punycode                          global.querystring                       global.queueMicrotask
global.readline                          global.repl                              global.require
global.setImmediate                      global.setInterval                       global.setTimeout
global.stream                            global.string_decoder                    global.structuredClone
global.sys                               global.timers                            global.tls
global.trace_events                      global.tty                               global.undefined
global.unescape                          global.url                               global.util
global.v8                                global.vm                                global.wasi
global.worker_threads                    global.zlib

> global.
*/

/*
To know special keyword or command. There are 7 special commands:

> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> 
*/

/* 
short cut for exit the REPL:

press Ctrl+C twice
*/

/*
when you clear, all the session is erased from the memory. When you enter REPL once again, we will not have access to the name and age vars as well as the sayHello function.
*/
