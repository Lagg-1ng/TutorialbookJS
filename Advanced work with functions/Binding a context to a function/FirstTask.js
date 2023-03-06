function f() {
    console.log( this ); // null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();
f();
/*вывод
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 30.957922998815775,
      nodeStart: 1.3235969990491867,
      v8Start: 3.0064989998936653,
      bootstrapComplete: 25.378789000213146,
      environment: 14.444171998649836,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1678130774272.265
  },
  fetch: [AsyncFunction: fetch]
}
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 32.26020999997854,
      nodeStart: 1.3235969990491867,
      v8Start: 3.0064989998936653,
      bootstrapComplete: 25.378789000213146,
      environment: 14.444171998649836,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1678130774272.265
  },
  fetch: [AsyncFunction: fetch]
}
 */