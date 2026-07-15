var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .wrangler/tmp/bundle-qjirnv/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init2) {
  const request = new Request(input, init2);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
var init_strip_cf_connecting_ip_header = __esm({
  ".wrangler/tmp/bundle-qjirnv/strip-cf-connecting-ip-header.js"() {
    "use strict";
    __name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        return Reflect.apply(target, thisArg, [
          stripCfConnectingIPHeader.apply(null, argArray)
        ]);
      }
    });
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(PerformanceEntry, "PerformanceEntry");
    PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    }, "PerformanceMark");
    PerformanceMeasure = class extends PerformanceEntry {
      entryType = "measure";
    };
    __name(PerformanceMeasure, "PerformanceMeasure");
    PerformanceResourceTiming = class extends PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(PerformanceResourceTiming, "PerformanceResourceTiming");
    PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
    Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    __name(Performance, "Performance");
    PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    __name(PerformanceObserver, "PerformanceObserver");
    __publicField(PerformanceObserver, "supportedEntryTypes", []);
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.14/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class extends EventEmitter {
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: () => 0 });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    __name(Process, "Process");
  }
});

// ../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/ua-parser-js@1.0.41/node_modules/ua-parser-js/src/ua-parser.js
var require_ua_parser = __commonJS({
  "../../node_modules/.pnpm/ua-parser-js@1.0.41/node_modules/ua-parser-js/src/ua-parser.js"(exports, module2) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    (function(window2, undefined2) {
      "use strict";
      var LIBVERSION = "1.0.41", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION2 = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HONOR = "Honor", HUAWEI = "Huawei", LENOVO = "Lenovo", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", NVIDIA = "Nvidia", ONEPLUS = "OnePlus", OPERA = "Opera", OPPO = "OPPO", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
      var extend = /* @__PURE__ */ __name(function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, "extend"), enumerize = /* @__PURE__ */ __name(function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, "enumerize"), has = /* @__PURE__ */ __name(function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, "has"), lowerize = /* @__PURE__ */ __name(function(str) {
        return str.toLowerCase();
      }, "lowerize"), majorize = /* @__PURE__ */ __name(function(version2) {
        return typeof version2 === STR_TYPE ? version2.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
      }, "majorize"), trim = /* @__PURE__ */ __name(function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      }, "trim");
      var rgxMapper = /* @__PURE__ */ __name(function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                  }
                } else {
                  this[q] = match ? match : undefined2;
                }
              }
            }
          }
          i += 2;
        }
      }, "rgxMapper"), strMapper = /* @__PURE__ */ __name(function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined2 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined2 : i;
          }
        }
        return map.hasOwnProperty("*") ? map["*"] : str;
      }, "strMapper");
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION2, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION2, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION2],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION2, [NAME, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION2, [NAME, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION2, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION2, [NAME, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [VERSION2, [NAME, "Maxthon"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
            /(heytap|ovi|115)browser\/([\d\.]+)/i,
            // HeyTap/Ovi/115
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION2],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [VERSION2, [NAME, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION2, [NAME, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION2, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION2, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION2, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION2, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION2, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION2, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION2],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION2, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION2, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION2, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION2, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION2, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION2, [NAME, "MIUI" + SUFFIX_BROWSER]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [VERSION2, [NAME, FIREFOX]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [VERSION2, [NAME, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[NAME, /(.+)/, "$1Browser"], VERSION2],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION2],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION2, [NAME, SAMSUNG + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION2, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION2],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [NAME, VERSION2],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [VERSION2, NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION2],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /(daum)apps[\/ ]([\w\.]+)/i,
            // Daum App
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION2],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION2, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION2, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION2, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION2],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION2, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION2],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION2, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION2, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION2, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION2],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION2],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [NAME, VERSION2],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION2, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
            /\b(links) \(([\w\.]+)/i
            // Links
          ],
          [NAME, [VERSION2, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION2, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /\b((amd|x|x86[-_]?|wow|win)64)\b/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i,
            // IA32 (quicktime)
            /\b((i[346]|x)86)(pc)?\b/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((ppc|powerpc)(64)?)( mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            / sun4\w[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Honor
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
          ],
          [MODEL, [VENDOR, HONOR], [TYPE, TABLET]],
          [
            /honor([-\w ]+)[;\)]/i
          ],
          [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
            // Xiaomi Mi
            / ([\w ]+) miui\/v?\d/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]],
          [
            /\b(opd2(\d{3}a?))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, strMapper, { "OnePlus": ["304", "403", "203"], "*": OPPO }], [TYPE, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
          ],
          [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]],
          [
            // Nokia
            /(nokia) (t[12][01])/i
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*))/i
          ],
          [[MODEL, /_/g, " "], [TYPE, MOBILE], [VENDOR, "Nokia"]],
          [
            // Google
            /(pixel (c|tablet))\b/i
            // Google Pixel C/Tablet
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
          [
            // Archos
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
          ],
          [MODEL, [VENDOR, "Archos"], [TYPE, TABLET]],
          [
            /archos ([\w ]+)( b|\))/i,
            /; (ac[3-6]\d\w{2,8})( b|\))/i
          ],
          [MODEL, [VENDOR, "Archos"], [TYPE, MOBILE]],
          [
            // MIXED
            /(imo) (tab \w+)/i,
            // IMO
            /(infinix) (x1101b?)/i
            // Infinix XPad
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
            /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
            // HMD/IMO
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
            // Lenovo
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
            // Nvidia Tablets
          ],
          [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /(shield \w+ tv)/i
            // Nvidia Shield TV
          ],
          [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mi(tv|box)-?\w+) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
          [
            // SmartTV from Unidentified Vendors
            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
          ],
          [MODEL, [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield)( bui|\))/i
            // Nvidia Portable
          ],
          [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]],
          [
            /(playstation \w+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
            // Samsung Galaxy Watch
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
          [
            /((pebble))app/i,
            // Pebble
            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
            // Asus ZenWatch / LG Watch / Pixel Watch
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(ow(?:19|20)?we?[1-3]{1,3})/i
            // Oppo Watch
          ],
          [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /(opwwe\d{3})/i
            // OnePlus Watch
          ],
          [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]],
          [
            /(moto 360)/i
            // Motorola 360
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]],
          [
            /(smartwatch 3)/i
            // Sony SmartWatch
          ],
          [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]],
          [
            /(g watch r)/i
            // LG G Watch R
          ],
          [MODEL, [VENDOR, LG], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            /(homepod).+mac os/i
            // Apple HomePod
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]],
          [
            /windows iot/i
          ],
          [[TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /droid .+?; ([\w\. -]+)( bui|\))/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION2, [NAME, EDGE + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [NAME, VERSION2],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION2, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
            // LibWeb
          ],
          [NAME, VERSION2],
          [
            /ladybird\//i
          ],
          [[NAME, "LibWeb"]],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION2, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION2],
          [
            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION2, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION2, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION2, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION2, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION2, NAME],
          [
            /(ubuntu) ([\w\.]+) like android/i
            // Ubuntu Touch
          ],
          [[NAME, /(.+)/, "$1 Touch"], VERSION2],
          [
            // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
          ],
          [NAME, VERSION2],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION2, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION2, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION2, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION2, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION2, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION2, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION2],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION2],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION2],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION2]
        ]
      };
      var UAParser2 = /* @__PURE__ */ __name(function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined2;
        }
        if (!(this instanceof UAParser2)) {
          return new UAParser2(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined2;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined2;
          _browser[VERSION2] = undefined2;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION2]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined2;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined2;
          _device[MODEL] = undefined2;
          _device[TYPE] = undefined2;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined2;
          _engine[VERSION2] = undefined2;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined2;
          _os[VERSION2] = undefined2;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      }, "UAParser");
      UAParser2.VERSION = LIBVERSION;
      UAParser2.BROWSER = enumerize([NAME, VERSION2, MAJOR]);
      UAParser2.CPU = enumerize([ARCHITECTURE]);
      UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION2]);
      if (typeof exports !== UNDEF_TYPE) {
        if (typeof module2 !== UNDEF_TYPE && module2.exports) {
          exports = module2.exports = UAParser2;
        }
        exports.UAParser = UAParser2;
      } else {
        if (typeof define === FUNC_TYPE && define.amd) {
          define(function() {
            return UAParser2;
          });
        } else if (typeof window2 !== UNDEF_TYPE) {
          window2.UAParser = UAParser2;
        }
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser2();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : exports);
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/version.js
var require_version = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/version.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VERSION = void 0;
    exports.VERSION = "1.9.1";
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/internal/semver.js
var require_semver = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/internal/semver.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCompatible = exports._makeCompatibilityCheck = void 0;
    var version_1 = require_version();
    var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function _makeCompatibilityCheck(ownVersion) {
      const acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
      const rejectedVersions = /* @__PURE__ */ new Set();
      const myVersionMatch = ownVersion.match(re);
      if (!myVersionMatch) {
        return () => false;
      }
      const ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
      };
      if (ownVersionParsed.prerelease != null) {
        return /* @__PURE__ */ __name(function isExactmatch(globalVersion) {
          return globalVersion === ownVersion;
        }, "isExactmatch");
      }
      function _reject(v) {
        rejectedVersions.add(v);
        return false;
      }
      __name(_reject, "_reject");
      function _accept(v) {
        acceptedVersions.add(v);
        return true;
      }
      __name(_accept, "_accept");
      return /* @__PURE__ */ __name(function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
          return true;
        }
        if (rejectedVersions.has(globalVersion)) {
          return false;
        }
        const globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
          return _reject(globalVersion);
        }
        const globalVersionParsed = {
          major: +globalVersionMatch[1],
          minor: +globalVersionMatch[2],
          patch: +globalVersionMatch[3],
          prerelease: globalVersionMatch[4]
        };
        if (globalVersionParsed.prerelease != null) {
          return _reject(globalVersion);
        }
        if (ownVersionParsed.major !== globalVersionParsed.major) {
          return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
          if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
            return _accept(globalVersion);
          }
          return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
          return _accept(globalVersion);
        }
        return _reject(globalVersion);
      }, "isCompatible");
    }
    __name(_makeCompatibilityCheck, "_makeCompatibilityCheck");
    exports._makeCompatibilityCheck = _makeCompatibilityCheck;
    exports.isCompatible = _makeCompatibilityCheck(version_1.VERSION);
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/internal/global-utils.js
var require_global_utils = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/internal/global-utils.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unregisterGlobal = exports.getGlobal = exports.registerGlobal = void 0;
    var version_1 = require_version();
    var semver_1 = require_semver();
    var major = version_1.VERSION.split(".")[0];
    var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
    var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
    function registerGlobal(type, instance, diag, allowOverride = false) {
      var _a;
      const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: version_1.VERSION
      };
      if (!allowOverride && api[type]) {
        const err = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
        diag.error(err.stack || err.message);
        return false;
      }
      if (api.version !== version_1.VERSION) {
        const err = new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${version_1.VERSION}`);
        diag.error(err.stack || err.message);
        return false;
      }
      api[type] = instance;
      diag.debug(`@opentelemetry/api: Registered a global for ${type} v${version_1.VERSION}.`);
      return true;
    }
    __name(registerGlobal, "registerGlobal");
    exports.registerGlobal = registerGlobal;
    function getGlobal(type) {
      var _a, _b;
      const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
      if (!globalVersion || !(0, semver_1.isCompatible)(globalVersion)) {
        return;
      }
      return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
    }
    __name(getGlobal, "getGlobal");
    exports.getGlobal = getGlobal;
    function unregisterGlobal(type, diag) {
      diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${version_1.VERSION}.`);
      const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
      if (api) {
        delete api[type];
      }
    }
    __name(unregisterGlobal, "unregisterGlobal");
    exports.unregisterGlobal = unregisterGlobal;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/ComponentLogger.js
var require_ComponentLogger = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/ComponentLogger.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagComponentLogger = void 0;
    var global_utils_1 = require_global_utils();
    var DiagComponentLogger = class {
      constructor(props) {
        this._namespace = props.namespace || "DiagComponentLogger";
      }
      debug(...args) {
        return logProxy("debug", this._namespace, args);
      }
      error(...args) {
        return logProxy("error", this._namespace, args);
      }
      info(...args) {
        return logProxy("info", this._namespace, args);
      }
      warn(...args) {
        return logProxy("warn", this._namespace, args);
      }
      verbose(...args) {
        return logProxy("verbose", this._namespace, args);
      }
    };
    __name(DiagComponentLogger, "DiagComponentLogger");
    exports.DiagComponentLogger = DiagComponentLogger;
    function logProxy(funcName, namespace, args) {
      const logger = (0, global_utils_1.getGlobal)("diag");
      if (!logger) {
        return;
      }
      return logger[funcName](namespace, ...args);
    }
    __name(logProxy, "logProxy");
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/types.js
var require_types = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/types.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagLogLevel = void 0;
    var DiagLogLevel;
    (function(DiagLogLevel2) {
      DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
      DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
      DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
      DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
      DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
      DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
      DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
    })(DiagLogLevel = exports.DiagLogLevel || (exports.DiagLogLevel = {}));
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/internal/logLevelLogger.js
var require_logLevelLogger = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/internal/logLevelLogger.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createLogLevelDiagLogger = void 0;
    var types_1 = require_types();
    function createLogLevelDiagLogger(maxLevel, logger) {
      if (maxLevel < types_1.DiagLogLevel.NONE) {
        maxLevel = types_1.DiagLogLevel.NONE;
      } else if (maxLevel > types_1.DiagLogLevel.ALL) {
        maxLevel = types_1.DiagLogLevel.ALL;
      }
      logger = logger || {};
      function _filterFunc(funcName, theLevel) {
        const theFunc = logger[funcName];
        if (typeof theFunc === "function" && maxLevel >= theLevel) {
          return theFunc.bind(logger);
        }
        return function() {
        };
      }
      __name(_filterFunc, "_filterFunc");
      return {
        error: _filterFunc("error", types_1.DiagLogLevel.ERROR),
        warn: _filterFunc("warn", types_1.DiagLogLevel.WARN),
        info: _filterFunc("info", types_1.DiagLogLevel.INFO),
        debug: _filterFunc("debug", types_1.DiagLogLevel.DEBUG),
        verbose: _filterFunc("verbose", types_1.DiagLogLevel.VERBOSE)
      };
    }
    __name(createLogLevelDiagLogger, "createLogLevelDiagLogger");
    exports.createLogLevelDiagLogger = createLogLevelDiagLogger;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/diag.js
var require_diag = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/diag.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagAPI = void 0;
    var ComponentLogger_1 = require_ComponentLogger();
    var logLevelLogger_1 = require_logLevelLogger();
    var types_1 = require_types();
    var global_utils_1 = require_global_utils();
    var API_NAME = "diag";
    var DiagAPI = class {
      /** Get the singleton instance of the DiagAPI API */
      static instance() {
        if (!this._instance) {
          this._instance = new DiagAPI();
        }
        return this._instance;
      }
      /**
       * Private internal constructor
       * @private
       */
      constructor() {
        function _logProxy(funcName) {
          return function(...args) {
            const logger = (0, global_utils_1.getGlobal)("diag");
            if (!logger)
              return;
            return logger[funcName](...args);
          };
        }
        __name(_logProxy, "_logProxy");
        const self2 = this;
        const setLogger = /* @__PURE__ */ __name((logger, optionsOrLogLevel = { logLevel: types_1.DiagLogLevel.INFO }) => {
          var _a, _b, _c;
          if (logger === self2) {
            const err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            self2.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
            return false;
          }
          if (typeof optionsOrLogLevel === "number") {
            optionsOrLogLevel = {
              logLevel: optionsOrLogLevel
            };
          }
          const oldLogger = (0, global_utils_1.getGlobal)("diag");
          const newLogger = (0, logLevelLogger_1.createLogLevelDiagLogger)((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : types_1.DiagLogLevel.INFO, logger);
          if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
            const stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
            oldLogger.warn(`Current logger will be overwritten from ${stack}`);
            newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
          }
          return (0, global_utils_1.registerGlobal)("diag", newLogger, self2, true);
        }, "setLogger");
        self2.setLogger = setLogger;
        self2.disable = () => {
          (0, global_utils_1.unregisterGlobal)(API_NAME, self2);
        };
        self2.createComponentLogger = (options) => {
          return new ComponentLogger_1.DiagComponentLogger(options);
        };
        self2.verbose = _logProxy("verbose");
        self2.debug = _logProxy("debug");
        self2.info = _logProxy("info");
        self2.warn = _logProxy("warn");
        self2.error = _logProxy("error");
      }
    };
    __name(DiagAPI, "DiagAPI");
    exports.DiagAPI = DiagAPI;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/internal/baggage-impl.js
var require_baggage_impl = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/internal/baggage-impl.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaggageImpl = void 0;
    var BaggageImpl = class {
      constructor(entries) {
        this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
      }
      getEntry(key) {
        const entry = this._entries.get(key);
        if (!entry) {
          return void 0;
        }
        return Object.assign({}, entry);
      }
      getAllEntries() {
        return Array.from(this._entries.entries());
      }
      setEntry(key, entry) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
      }
      removeEntry(key) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
      }
      removeEntries(...keys) {
        const newBaggage = new BaggageImpl(this._entries);
        for (const key of keys) {
          newBaggage._entries.delete(key);
        }
        return newBaggage;
      }
      clear() {
        return new BaggageImpl();
      }
    };
    __name(BaggageImpl, "BaggageImpl");
    exports.BaggageImpl = BaggageImpl;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/internal/symbol.js
var require_symbol = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/internal/symbol.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.baggageEntryMetadataSymbol = void 0;
    exports.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/utils.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.baggageEntryMetadataFromString = exports.createBaggage = void 0;
    var diag_1 = require_diag();
    var baggage_impl_1 = require_baggage_impl();
    var symbol_1 = require_symbol();
    var diag = diag_1.DiagAPI.instance();
    function createBaggage(entries = {}) {
      return new baggage_impl_1.BaggageImpl(new Map(Object.entries(entries)));
    }
    __name(createBaggage, "createBaggage");
    exports.createBaggage = createBaggage;
    function baggageEntryMetadataFromString(str) {
      if (typeof str !== "string") {
        diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
        str = "";
      }
      return {
        __TYPE__: symbol_1.baggageEntryMetadataSymbol,
        toString() {
          return str;
        }
      };
    }
    __name(baggageEntryMetadataFromString, "baggageEntryMetadataFromString");
    exports.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/context/context.js
var require_context = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/context/context.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ROOT_CONTEXT = exports.createContextKey = void 0;
    function createContextKey(description) {
      return Symbol.for(description);
    }
    __name(createContextKey, "createContextKey");
    exports.createContextKey = createContextKey;
    var BaseContext = class {
      /**
       * Construct a new context which inherits values from an optional parent context.
       *
       * @param parentContext a context from which to inherit values
       */
      constructor(parentContext) {
        const self2 = this;
        self2._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
        self2.getValue = (key) => self2._currentContext.get(key);
        self2.setValue = (key, value) => {
          const context2 = new BaseContext(self2._currentContext);
          context2._currentContext.set(key, value);
          return context2;
        };
        self2.deleteValue = (key) => {
          const context2 = new BaseContext(self2._currentContext);
          context2._currentContext.delete(key);
          return context2;
        };
      }
    };
    __name(BaseContext, "BaseContext");
    exports.ROOT_CONTEXT = new BaseContext();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/consoleLogger.js
var require_consoleLogger = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag/consoleLogger.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagConsoleLogger = exports._originalConsoleMethods = void 0;
    var consoleMap = [
      { n: "error", c: "error" },
      { n: "warn", c: "warn" },
      { n: "info", c: "info" },
      { n: "debug", c: "debug" },
      { n: "verbose", c: "trace" }
    ];
    exports._originalConsoleMethods = {};
    if (typeof console !== "undefined") {
      const keys = [
        "error",
        "warn",
        "info",
        "debug",
        "trace",
        "log"
      ];
      for (const key of keys) {
        if (typeof console[key] === "function") {
          exports._originalConsoleMethods[key] = console[key];
        }
      }
    }
    var DiagConsoleLogger = class {
      constructor() {
        function _consoleFunc(funcName) {
          return function(...args) {
            let theFunc = exports._originalConsoleMethods[funcName];
            if (typeof theFunc !== "function") {
              theFunc = exports._originalConsoleMethods["log"];
            }
            if (typeof theFunc !== "function" && console) {
              theFunc = console[funcName];
              if (typeof theFunc !== "function") {
                theFunc = console.log;
              }
            }
            if (typeof theFunc === "function") {
              return theFunc.apply(console, args);
            }
          };
        }
        __name(_consoleFunc, "_consoleFunc");
        for (let i = 0; i < consoleMap.length; i++) {
          this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
      }
    };
    __name(DiagConsoleLogger, "DiagConsoleLogger");
    exports.DiagConsoleLogger = DiagConsoleLogger;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics/NoopMeter.js
var require_NoopMeter = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics/NoopMeter.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createNoopMeter = exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = exports.NOOP_OBSERVABLE_GAUGE_METRIC = exports.NOOP_OBSERVABLE_COUNTER_METRIC = exports.NOOP_UP_DOWN_COUNTER_METRIC = exports.NOOP_HISTOGRAM_METRIC = exports.NOOP_GAUGE_METRIC = exports.NOOP_COUNTER_METRIC = exports.NOOP_METER = exports.NoopObservableUpDownCounterMetric = exports.NoopObservableGaugeMetric = exports.NoopObservableCounterMetric = exports.NoopObservableMetric = exports.NoopHistogramMetric = exports.NoopGaugeMetric = exports.NoopUpDownCounterMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
    var NoopMeter = class {
      constructor() {
      }
      /**
       * @see {@link Meter.createGauge}
       */
      createGauge(_name, _options) {
        return exports.NOOP_GAUGE_METRIC;
      }
      /**
       * @see {@link Meter.createHistogram}
       */
      createHistogram(_name, _options) {
        return exports.NOOP_HISTOGRAM_METRIC;
      }
      /**
       * @see {@link Meter.createCounter}
       */
      createCounter(_name, _options) {
        return exports.NOOP_COUNTER_METRIC;
      }
      /**
       * @see {@link Meter.createUpDownCounter}
       */
      createUpDownCounter(_name, _options) {
        return exports.NOOP_UP_DOWN_COUNTER_METRIC;
      }
      /**
       * @see {@link Meter.createObservableGauge}
       */
      createObservableGauge(_name, _options) {
        return exports.NOOP_OBSERVABLE_GAUGE_METRIC;
      }
      /**
       * @see {@link Meter.createObservableCounter}
       */
      createObservableCounter(_name, _options) {
        return exports.NOOP_OBSERVABLE_COUNTER_METRIC;
      }
      /**
       * @see {@link Meter.createObservableUpDownCounter}
       */
      createObservableUpDownCounter(_name, _options) {
        return exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
      }
      /**
       * @see {@link Meter.addBatchObservableCallback}
       */
      addBatchObservableCallback(_callback, _observables) {
      }
      /**
       * @see {@link Meter.removeBatchObservableCallback}
       */
      removeBatchObservableCallback(_callback) {
      }
    };
    __name(NoopMeter, "NoopMeter");
    exports.NoopMeter = NoopMeter;
    var NoopMetric = class {
    };
    __name(NoopMetric, "NoopMetric");
    exports.NoopMetric = NoopMetric;
    var NoopCounterMetric = class extends NoopMetric {
      add(_value, _attributes) {
      }
    };
    __name(NoopCounterMetric, "NoopCounterMetric");
    exports.NoopCounterMetric = NoopCounterMetric;
    var NoopUpDownCounterMetric = class extends NoopMetric {
      add(_value, _attributes) {
      }
    };
    __name(NoopUpDownCounterMetric, "NoopUpDownCounterMetric");
    exports.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
    var NoopGaugeMetric = class extends NoopMetric {
      record(_value, _attributes) {
      }
    };
    __name(NoopGaugeMetric, "NoopGaugeMetric");
    exports.NoopGaugeMetric = NoopGaugeMetric;
    var NoopHistogramMetric = class extends NoopMetric {
      record(_value, _attributes) {
      }
    };
    __name(NoopHistogramMetric, "NoopHistogramMetric");
    exports.NoopHistogramMetric = NoopHistogramMetric;
    var NoopObservableMetric = class {
      addCallback(_callback) {
      }
      removeCallback(_callback) {
      }
    };
    __name(NoopObservableMetric, "NoopObservableMetric");
    exports.NoopObservableMetric = NoopObservableMetric;
    var NoopObservableCounterMetric = class extends NoopObservableMetric {
    };
    __name(NoopObservableCounterMetric, "NoopObservableCounterMetric");
    exports.NoopObservableCounterMetric = NoopObservableCounterMetric;
    var NoopObservableGaugeMetric = class extends NoopObservableMetric {
    };
    __name(NoopObservableGaugeMetric, "NoopObservableGaugeMetric");
    exports.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
    var NoopObservableUpDownCounterMetric = class extends NoopObservableMetric {
    };
    __name(NoopObservableUpDownCounterMetric, "NoopObservableUpDownCounterMetric");
    exports.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
    exports.NOOP_METER = new NoopMeter();
    exports.NOOP_COUNTER_METRIC = new NoopCounterMetric();
    exports.NOOP_GAUGE_METRIC = new NoopGaugeMetric();
    exports.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
    exports.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
    exports.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
    exports.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
    exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
    function createNoopMeter() {
      return exports.NOOP_METER;
    }
    __name(createNoopMeter, "createNoopMeter");
    exports.createNoopMeter = createNoopMeter;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics/Metric.js
var require_Metric = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics/Metric.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueType = void 0;
    var ValueType;
    (function(ValueType2) {
      ValueType2[ValueType2["INT"] = 0] = "INT";
      ValueType2[ValueType2["DOUBLE"] = 1] = "DOUBLE";
    })(ValueType = exports.ValueType || (exports.ValueType = {}));
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/propagation/TextMapPropagator.js
var require_TextMapPropagator = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/propagation/TextMapPropagator.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultTextMapSetter = exports.defaultTextMapGetter = void 0;
    exports.defaultTextMapGetter = {
      get(carrier, key) {
        if (carrier == null) {
          return void 0;
        }
        return carrier[key];
      },
      keys(carrier) {
        if (carrier == null) {
          return [];
        }
        return Object.keys(carrier);
      }
    };
    exports.defaultTextMapSetter = {
      set(carrier, key, value) {
        if (carrier == null) {
          return;
        }
        carrier[key] = value;
      }
    };
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js
var require_NoopContextManager = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopContextManager = void 0;
    var context_1 = require_context();
    var NoopContextManager = class {
      active() {
        return context_1.ROOT_CONTEXT;
      }
      with(_context, fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      bind(_context, target) {
        return target;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
    __name(NoopContextManager, "NoopContextManager");
    exports.NoopContextManager = NoopContextManager;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/context.js
var require_context2 = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/context.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextAPI = void 0;
    var NoopContextManager_1 = require_NoopContextManager();
    var global_utils_1 = require_global_utils();
    var diag_1 = require_diag();
    var API_NAME = "context";
    var NOOP_CONTEXT_MANAGER = new NoopContextManager_1.NoopContextManager();
    var ContextAPI = class {
      /** Empty private constructor prevents end users from constructing a new instance of the API */
      constructor() {
      }
      /** Get the singleton instance of the Context API */
      static getInstance() {
        if (!this._instance) {
          this._instance = new ContextAPI();
        }
        return this._instance;
      }
      /**
       * Set the current context manager.
       *
       * @returns true if the context manager was successfully registered, else false
       */
      setGlobalContextManager(contextManager) {
        return (0, global_utils_1.registerGlobal)(API_NAME, contextManager, diag_1.DiagAPI.instance());
      }
      /**
       * Get the currently active context
       */
      active() {
        return this._getContextManager().active();
      }
      /**
       * Execute a function with an active context
       *
       * @param context context to be active during function execution
       * @param fn function to execute in a context
       * @param thisArg optional receiver to be used for calling fn
       * @param args optional arguments forwarded to fn
       */
      with(context2, fn, thisArg, ...args) {
        return this._getContextManager().with(context2, fn, thisArg, ...args);
      }
      /**
       * Bind a context to a target function or event emitter
       *
       * @param context context to bind to the event emitter or function. Defaults to the currently active context
       * @param target function or event emitter to bind
       */
      bind(context2, target) {
        return this._getContextManager().bind(context2, target);
      }
      _getContextManager() {
        return (0, global_utils_1.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
      }
      /** Disable and remove the global context manager */
      disable() {
        this._getContextManager().disable();
        (0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
      }
    };
    __name(ContextAPI, "ContextAPI");
    exports.ContextAPI = ContextAPI;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/trace_flags.js
var require_trace_flags = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/trace_flags.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceFlags = void 0;
    var TraceFlags;
    (function(TraceFlags2) {
      TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
      TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
    })(TraceFlags = exports.TraceFlags || (exports.TraceFlags = {}));
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/invalid-span-constants.js
var require_invalid_span_constants = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/invalid-span-constants.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
    var trace_flags_1 = require_trace_flags();
    exports.INVALID_SPANID = "0000000000000000";
    exports.INVALID_TRACEID = "00000000000000000000000000000000";
    exports.INVALID_SPAN_CONTEXT = {
      traceId: exports.INVALID_TRACEID,
      spanId: exports.INVALID_SPANID,
      traceFlags: trace_flags_1.TraceFlags.NONE
    };
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/NonRecordingSpan.js
var require_NonRecordingSpan = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/NonRecordingSpan.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonRecordingSpan = void 0;
    var invalid_span_constants_1 = require_invalid_span_constants();
    var NonRecordingSpan = class {
      constructor(spanContext = invalid_span_constants_1.INVALID_SPAN_CONTEXT) {
        this._spanContext = spanContext;
      }
      // Returns a SpanContext.
      spanContext() {
        return this._spanContext;
      }
      // By default does nothing
      setAttribute(_key, _value) {
        return this;
      }
      // By default does nothing
      setAttributes(_attributes) {
        return this;
      }
      // By default does nothing
      addEvent(_name, _attributes) {
        return this;
      }
      addLink(_link) {
        return this;
      }
      addLinks(_links) {
        return this;
      }
      // By default does nothing
      setStatus(_status) {
        return this;
      }
      // By default does nothing
      updateName(_name) {
        return this;
      }
      // By default does nothing
      end(_endTime) {
      }
      // isRecording always returns false for NonRecordingSpan.
      isRecording() {
        return false;
      }
      // By default does nothing
      recordException(_exception, _time) {
      }
    };
    __name(NonRecordingSpan, "NonRecordingSpan");
    exports.NonRecordingSpan = NonRecordingSpan;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/context-utils.js
var require_context_utils = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/context-utils.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSpanContext = exports.setSpanContext = exports.deleteSpan = exports.setSpan = exports.getActiveSpan = exports.getSpan = void 0;
    var context_1 = require_context();
    var NonRecordingSpan_1 = require_NonRecordingSpan();
    var context_2 = require_context2();
    var SPAN_KEY = (0, context_1.createContextKey)("OpenTelemetry Context Key SPAN");
    function getSpan(context2) {
      return context2.getValue(SPAN_KEY) || void 0;
    }
    __name(getSpan, "getSpan");
    exports.getSpan = getSpan;
    function getActiveSpan2() {
      return getSpan(context_2.ContextAPI.getInstance().active());
    }
    __name(getActiveSpan2, "getActiveSpan");
    exports.getActiveSpan = getActiveSpan2;
    function setSpan(context2, span) {
      return context2.setValue(SPAN_KEY, span);
    }
    __name(setSpan, "setSpan");
    exports.setSpan = setSpan;
    function deleteSpan(context2) {
      return context2.deleteValue(SPAN_KEY);
    }
    __name(deleteSpan, "deleteSpan");
    exports.deleteSpan = deleteSpan;
    function setSpanContext(context2, spanContext) {
      return setSpan(context2, new NonRecordingSpan_1.NonRecordingSpan(spanContext));
    }
    __name(setSpanContext, "setSpanContext");
    exports.setSpanContext = setSpanContext;
    function getSpanContext(context2) {
      var _a;
      return (_a = getSpan(context2)) === null || _a === void 0 ? void 0 : _a.spanContext();
    }
    __name(getSpanContext, "getSpanContext");
    exports.getSpanContext = getSpanContext;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/spancontext-utils.js
var require_spancontext_utils = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/spancontext-utils.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapSpanContext = exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = void 0;
    var invalid_span_constants_1 = require_invalid_span_constants();
    var NonRecordingSpan_1 = require_NonRecordingSpan();
    var isHex = new Uint8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ]);
    function isValidHex(id, length) {
      if (typeof id !== "string" || id.length !== length)
        return false;
      let r = 0;
      for (let i = 0; i < id.length; i += 4) {
        r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
      }
      return r === length;
    }
    __name(isValidHex, "isValidHex");
    function isValidTraceId(traceId) {
      return isValidHex(traceId, 32) && traceId !== invalid_span_constants_1.INVALID_TRACEID;
    }
    __name(isValidTraceId, "isValidTraceId");
    exports.isValidTraceId = isValidTraceId;
    function isValidSpanId(spanId) {
      return isValidHex(spanId, 16) && spanId !== invalid_span_constants_1.INVALID_SPANID;
    }
    __name(isValidSpanId, "isValidSpanId");
    exports.isValidSpanId = isValidSpanId;
    function isSpanContextValid(spanContext) {
      return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
    }
    __name(isSpanContextValid, "isSpanContextValid");
    exports.isSpanContextValid = isSpanContextValid;
    function wrapSpanContext(spanContext) {
      return new NonRecordingSpan_1.NonRecordingSpan(spanContext);
    }
    __name(wrapSpanContext, "wrapSpanContext");
    exports.wrapSpanContext = wrapSpanContext;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js
var require_NoopTracer = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopTracer = void 0;
    var context_1 = require_context2();
    var context_utils_1 = require_context_utils();
    var NonRecordingSpan_1 = require_NonRecordingSpan();
    var spancontext_utils_1 = require_spancontext_utils();
    var contextApi = context_1.ContextAPI.getInstance();
    var NoopTracer = class {
      // startSpan starts a noop span.
      startSpan(name, options, context2 = contextApi.active()) {
        const root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
          return new NonRecordingSpan_1.NonRecordingSpan();
        }
        const parentFromContext = context2 && (0, context_utils_1.getSpanContext)(context2);
        if (isSpanContext(parentFromContext) && (0, spancontext_utils_1.isSpanContextValid)(parentFromContext)) {
          return new NonRecordingSpan_1.NonRecordingSpan(parentFromContext);
        } else {
          return new NonRecordingSpan_1.NonRecordingSpan();
        }
      }
      startActiveSpan(name, arg2, arg3, arg4) {
        let opts;
        let ctx;
        let fn;
        if (arguments.length < 2) {
          return;
        } else if (arguments.length === 2) {
          fn = arg2;
        } else if (arguments.length === 3) {
          opts = arg2;
          fn = arg3;
        } else {
          opts = arg2;
          ctx = arg3;
          fn = arg4;
        }
        const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = (0, context_utils_1.setSpan)(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, void 0, span);
      }
    };
    __name(NoopTracer, "NoopTracer");
    exports.NoopTracer = NoopTracer;
    function isSpanContext(spanContext) {
      return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
    }
    __name(isSpanContext, "isSpanContext");
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js
var require_ProxyTracer = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProxyTracer = void 0;
    var NoopTracer_1 = require_NoopTracer();
    var NOOP_TRACER = new NoopTracer_1.NoopTracer();
    var ProxyTracer = class {
      constructor(provider, name, version2, options) {
        this._provider = provider;
        this.name = name;
        this.version = version2;
        this.options = options;
      }
      startSpan(name, options, context2) {
        return this._getTracer().startSpan(name, options, context2);
      }
      startActiveSpan(_name, _options, _context, _fn) {
        const tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
      }
      /**
       * Try to get a tracer from the proxy tracer provider.
       * If the proxy tracer provider has no delegate, return a noop tracer.
       */
      _getTracer() {
        if (this._delegate) {
          return this._delegate;
        }
        const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
          return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
      }
    };
    __name(ProxyTracer, "ProxyTracer");
    exports.ProxyTracer = ProxyTracer;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/NoopTracerProvider.js
var require_NoopTracerProvider = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/NoopTracerProvider.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopTracerProvider = void 0;
    var NoopTracer_1 = require_NoopTracer();
    var NoopTracerProvider = class {
      getTracer(_name, _version, _options) {
        return new NoopTracer_1.NoopTracer();
      }
    };
    __name(NoopTracerProvider, "NoopTracerProvider");
    exports.NoopTracerProvider = NoopTracerProvider;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/ProxyTracerProvider.js
var require_ProxyTracerProvider = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/ProxyTracerProvider.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProxyTracerProvider = void 0;
    var ProxyTracer_1 = require_ProxyTracer();
    var NoopTracerProvider_1 = require_NoopTracerProvider();
    var NOOP_TRACER_PROVIDER = new NoopTracerProvider_1.NoopTracerProvider();
    var ProxyTracerProvider = class {
      /**
       * Get a {@link ProxyTracer}
       */
      getTracer(name, version2, options) {
        var _a;
        return (_a = this.getDelegateTracer(name, version2, options)) !== null && _a !== void 0 ? _a : new ProxyTracer_1.ProxyTracer(this, name, version2, options);
      }
      getDelegate() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
      }
      /**
       * Set the delegate tracer provider
       */
      setDelegate(delegate) {
        this._delegate = delegate;
      }
      getDelegateTracer(name, version2, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version2, options);
      }
    };
    __name(ProxyTracerProvider, "ProxyTracerProvider");
    exports.ProxyTracerProvider = ProxyTracerProvider;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/SamplingResult.js
var require_SamplingResult = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/SamplingResult.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SamplingDecision = void 0;
    var SamplingDecision;
    (function(SamplingDecision2) {
      SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
      SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
      SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
    })(SamplingDecision = exports.SamplingDecision || (exports.SamplingDecision = {}));
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/span_kind.js
var require_span_kind = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/span_kind.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpanKind = void 0;
    var SpanKind;
    (function(SpanKind2) {
      SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
      SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
      SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
      SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
      SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
    })(SpanKind = exports.SpanKind || (exports.SpanKind = {}));
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/status.js
var require_status = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/status.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpanStatusCode = void 0;
    var SpanStatusCode;
    (function(SpanStatusCode2) {
      SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
      SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
      SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
    })(SpanStatusCode = exports.SpanStatusCode || (exports.SpanStatusCode = {}));
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-validators.js
var require_tracestate_validators = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-validators.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateValue = exports.validateKey = void 0;
    var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
    var VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
    var VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
    var VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
    var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
    var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
    function validateKey(key) {
      return VALID_KEY_REGEX.test(key);
    }
    __name(validateKey, "validateKey");
    exports.validateKey = validateKey;
    function validateValue(value) {
      return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
    }
    __name(validateValue, "validateValue");
    exports.validateValue = validateValue;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-impl.js
var require_tracestate_impl = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/internal/tracestate-impl.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceStateImpl = void 0;
    var tracestate_validators_1 = require_tracestate_validators();
    var MAX_TRACE_STATE_ITEMS = 32;
    var MAX_TRACE_STATE_LEN = 512;
    var LIST_MEMBERS_SEPARATOR = ",";
    var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
    var TraceStateImpl = class {
      constructor(rawTraceState) {
        this._internalState = /* @__PURE__ */ new Map();
        if (rawTraceState)
          this._parse(rawTraceState);
      }
      set(key, value) {
        const traceState = this._clone();
        if (traceState._internalState.has(key)) {
          traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
      }
      unset(key) {
        const traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
      }
      get(key) {
        return this._internalState.get(key);
      }
      serialize() {
        return Array.from(this._internalState.keys()).reduceRight((agg, key) => {
          agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
          return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
      }
      _parse(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
          return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reduceRight((agg, part) => {
          const listMember = part.trim();
          const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
          if (i !== -1) {
            const key = listMember.slice(0, i);
            const value = listMember.slice(i + 1, part.length);
            if ((0, tracestate_validators_1.validateKey)(key) && (0, tracestate_validators_1.validateValue)(value)) {
              agg.set(key, value);
            } else {
            }
          }
          return agg;
        }, /* @__PURE__ */ new Map());
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
          this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
        }
      }
      // @ts-expect-error TS6133 Accessed in tests only.
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        const traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
      }
    };
    __name(TraceStateImpl, "TraceStateImpl");
    exports.TraceStateImpl = TraceStateImpl;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/internal/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace/internal/utils.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTraceState = void 0;
    var tracestate_impl_1 = require_tracestate_impl();
    function createTraceState(rawTraceState) {
      return new tracestate_impl_1.TraceStateImpl(rawTraceState);
    }
    __name(createTraceState, "createTraceState");
    exports.createTraceState = createTraceState;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/context-api.js
var require_context_api = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/context-api.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.context = void 0;
    var context_1 = require_context2();
    exports.context = context_1.ContextAPI.getInstance();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag-api.js
var require_diag_api = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/diag-api.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.diag = void 0;
    var diag_1 = require_diag();
    exports.diag = diag_1.DiagAPI.instance();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics/NoopMeterProvider.js
var require_NoopMeterProvider = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics/NoopMeterProvider.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
    var NoopMeter_1 = require_NoopMeter();
    var NoopMeterProvider = class {
      getMeter(_name, _version, _options) {
        return NoopMeter_1.NOOP_METER;
      }
    };
    __name(NoopMeterProvider, "NoopMeterProvider");
    exports.NoopMeterProvider = NoopMeterProvider;
    exports.NOOP_METER_PROVIDER = new NoopMeterProvider();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/metrics.js
var require_metrics = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/metrics.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetricsAPI = void 0;
    var NoopMeterProvider_1 = require_NoopMeterProvider();
    var global_utils_1 = require_global_utils();
    var diag_1 = require_diag();
    var API_NAME = "metrics";
    var MetricsAPI = class {
      /** Empty private constructor prevents end users from constructing a new instance of the API */
      constructor() {
      }
      /** Get the singleton instance of the Metrics API */
      static getInstance() {
        if (!this._instance) {
          this._instance = new MetricsAPI();
        }
        return this._instance;
      }
      /**
       * Set the current global meter provider.
       * Returns true if the meter provider was successfully registered, else false.
       */
      setGlobalMeterProvider(provider) {
        return (0, global_utils_1.registerGlobal)(API_NAME, provider, diag_1.DiagAPI.instance());
      }
      /**
       * Returns the global meter provider.
       */
      getMeterProvider() {
        return (0, global_utils_1.getGlobal)(API_NAME) || NoopMeterProvider_1.NOOP_METER_PROVIDER;
      }
      /**
       * Returns a meter from the global meter provider.
       */
      getMeter(name, version2, options) {
        return this.getMeterProvider().getMeter(name, version2, options);
      }
      /** Remove the global meter provider */
      disable() {
        (0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
      }
    };
    __name(MetricsAPI, "MetricsAPI");
    exports.MetricsAPI = MetricsAPI;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics-api.js
var require_metrics_api = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/metrics-api.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.metrics = void 0;
    var metrics_1 = require_metrics();
    exports.metrics = metrics_1.MetricsAPI.getInstance();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/propagation/NoopTextMapPropagator.js
var require_NoopTextMapPropagator = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/propagation/NoopTextMapPropagator.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopTextMapPropagator = void 0;
    var NoopTextMapPropagator = class {
      /** Noop inject function does nothing */
      inject(_context, _carrier) {
      }
      /** Noop extract function does nothing and returns the input context */
      extract(context2, _carrier) {
        return context2;
      }
      fields() {
        return [];
      }
    };
    __name(NoopTextMapPropagator, "NoopTextMapPropagator");
    exports.NoopTextMapPropagator = NoopTextMapPropagator;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/context-helpers.js
var require_context_helpers = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/baggage/context-helpers.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deleteBaggage = exports.setBaggage = exports.getActiveBaggage = exports.getBaggage = void 0;
    var context_1 = require_context2();
    var context_2 = require_context();
    var BAGGAGE_KEY = (0, context_2.createContextKey)("OpenTelemetry Baggage Key");
    function getBaggage(context2) {
      return context2.getValue(BAGGAGE_KEY) || void 0;
    }
    __name(getBaggage, "getBaggage");
    exports.getBaggage = getBaggage;
    function getActiveBaggage() {
      return getBaggage(context_1.ContextAPI.getInstance().active());
    }
    __name(getActiveBaggage, "getActiveBaggage");
    exports.getActiveBaggage = getActiveBaggage;
    function setBaggage(context2, baggage) {
      return context2.setValue(BAGGAGE_KEY, baggage);
    }
    __name(setBaggage, "setBaggage");
    exports.setBaggage = setBaggage;
    function deleteBaggage(context2) {
      return context2.deleteValue(BAGGAGE_KEY);
    }
    __name(deleteBaggage, "deleteBaggage");
    exports.deleteBaggage = deleteBaggage;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/propagation.js
var require_propagation = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/propagation.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PropagationAPI = void 0;
    var global_utils_1 = require_global_utils();
    var NoopTextMapPropagator_1 = require_NoopTextMapPropagator();
    var TextMapPropagator_1 = require_TextMapPropagator();
    var context_helpers_1 = require_context_helpers();
    var utils_1 = require_utils();
    var diag_1 = require_diag();
    var API_NAME = "propagation";
    var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator_1.NoopTextMapPropagator();
    var PropagationAPI = class {
      /** Empty private constructor prevents end users from constructing a new instance of the API */
      constructor() {
        this.createBaggage = utils_1.createBaggage;
        this.getBaggage = context_helpers_1.getBaggage;
        this.getActiveBaggage = context_helpers_1.getActiveBaggage;
        this.setBaggage = context_helpers_1.setBaggage;
        this.deleteBaggage = context_helpers_1.deleteBaggage;
      }
      /** Get the singleton instance of the Propagator API */
      static getInstance() {
        if (!this._instance) {
          this._instance = new PropagationAPI();
        }
        return this._instance;
      }
      /**
       * Set the current propagator.
       *
       * @returns true if the propagator was successfully registered, else false
       */
      setGlobalPropagator(propagator) {
        return (0, global_utils_1.registerGlobal)(API_NAME, propagator, diag_1.DiagAPI.instance());
      }
      /**
       * Inject context into a carrier to be propagated inter-process
       *
       * @param context Context carrying tracing data to inject
       * @param carrier carrier to inject context into
       * @param setter Function used to set values on the carrier
       */
      inject(context2, carrier, setter = TextMapPropagator_1.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(context2, carrier, setter);
      }
      /**
       * Extract context from a carrier
       *
       * @param context Context which the newly created context will inherit from
       * @param carrier Carrier to extract context from
       * @param getter Function used to extract keys from a carrier
       */
      extract(context2, carrier, getter = TextMapPropagator_1.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(context2, carrier, getter);
      }
      /**
       * Return a list of all fields which may be used by the propagator.
       */
      fields() {
        return this._getGlobalPropagator().fields();
      }
      /** Remove the global propagator */
      disable() {
        (0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
      }
      _getGlobalPropagator() {
        return (0, global_utils_1.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
      }
    };
    __name(PropagationAPI, "PropagationAPI");
    exports.PropagationAPI = PropagationAPI;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/propagation-api.js
var require_propagation_api = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/propagation-api.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.propagation = void 0;
    var propagation_1 = require_propagation();
    exports.propagation = propagation_1.PropagationAPI.getInstance();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/trace.js
var require_trace = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/api/trace.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceAPI = void 0;
    var global_utils_1 = require_global_utils();
    var ProxyTracerProvider_1 = require_ProxyTracerProvider();
    var spancontext_utils_1 = require_spancontext_utils();
    var context_utils_1 = require_context_utils();
    var diag_1 = require_diag();
    var API_NAME = "trace";
    var TraceAPI = class {
      /** Empty private constructor prevents end users from constructing a new instance of the API */
      constructor() {
        this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
        this.wrapSpanContext = spancontext_utils_1.wrapSpanContext;
        this.isSpanContextValid = spancontext_utils_1.isSpanContextValid;
        this.deleteSpan = context_utils_1.deleteSpan;
        this.getSpan = context_utils_1.getSpan;
        this.getActiveSpan = context_utils_1.getActiveSpan;
        this.getSpanContext = context_utils_1.getSpanContext;
        this.setSpan = context_utils_1.setSpan;
        this.setSpanContext = context_utils_1.setSpanContext;
      }
      /** Get the singleton instance of the Trace API */
      static getInstance() {
        if (!this._instance) {
          this._instance = new TraceAPI();
        }
        return this._instance;
      }
      /**
       * Set the current global tracer.
       *
       * @returns true if the tracer provider was successfully registered, else false
       */
      setGlobalTracerProvider(provider) {
        const success = (0, global_utils_1.registerGlobal)(API_NAME, this._proxyTracerProvider, diag_1.DiagAPI.instance());
        if (success) {
          this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
      }
      /**
       * Returns the global tracer provider.
       */
      getTracerProvider() {
        return (0, global_utils_1.getGlobal)(API_NAME) || this._proxyTracerProvider;
      }
      /**
       * Returns a tracer from the global tracer provider.
       */
      getTracer(name, version2) {
        return this.getTracerProvider().getTracer(name, version2);
      }
      /** Remove the global tracer provider */
      disable() {
        (0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
        this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
      }
    };
    __name(TraceAPI, "TraceAPI");
    exports.TraceAPI = TraceAPI;
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace-api.js
var require_trace_api = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/trace-api.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.trace = void 0;
    var trace_1 = require_trace();
    exports.trace = trace_1.TraceAPI.getInstance();
  }
});

// ../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/src/index.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.trace = exports.propagation = exports.metrics = exports.diag = exports.context = exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = exports.isValidSpanId = exports.isValidTraceId = exports.isSpanContextValid = exports.createTraceState = exports.TraceFlags = exports.SpanStatusCode = exports.SpanKind = exports.SamplingDecision = exports.ProxyTracerProvider = exports.ProxyTracer = exports.defaultTextMapSetter = exports.defaultTextMapGetter = exports.ValueType = exports.createNoopMeter = exports.DiagLogLevel = exports.DiagConsoleLogger = exports.ROOT_CONTEXT = exports.createContextKey = exports.baggageEntryMetadataFromString = void 0;
    var utils_1 = require_utils();
    Object.defineProperty(exports, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
      return utils_1.baggageEntryMetadataFromString;
    } });
    var context_1 = require_context();
    Object.defineProperty(exports, "createContextKey", { enumerable: true, get: function() {
      return context_1.createContextKey;
    } });
    Object.defineProperty(exports, "ROOT_CONTEXT", { enumerable: true, get: function() {
      return context_1.ROOT_CONTEXT;
    } });
    var consoleLogger_1 = require_consoleLogger();
    Object.defineProperty(exports, "DiagConsoleLogger", { enumerable: true, get: function() {
      return consoleLogger_1.DiagConsoleLogger;
    } });
    var types_1 = require_types();
    Object.defineProperty(exports, "DiagLogLevel", { enumerable: true, get: function() {
      return types_1.DiagLogLevel;
    } });
    var NoopMeter_1 = require_NoopMeter();
    Object.defineProperty(exports, "createNoopMeter", { enumerable: true, get: function() {
      return NoopMeter_1.createNoopMeter;
    } });
    var Metric_1 = require_Metric();
    Object.defineProperty(exports, "ValueType", { enumerable: true, get: function() {
      return Metric_1.ValueType;
    } });
    var TextMapPropagator_1 = require_TextMapPropagator();
    Object.defineProperty(exports, "defaultTextMapGetter", { enumerable: true, get: function() {
      return TextMapPropagator_1.defaultTextMapGetter;
    } });
    Object.defineProperty(exports, "defaultTextMapSetter", { enumerable: true, get: function() {
      return TextMapPropagator_1.defaultTextMapSetter;
    } });
    var ProxyTracer_1 = require_ProxyTracer();
    Object.defineProperty(exports, "ProxyTracer", { enumerable: true, get: function() {
      return ProxyTracer_1.ProxyTracer;
    } });
    var ProxyTracerProvider_1 = require_ProxyTracerProvider();
    Object.defineProperty(exports, "ProxyTracerProvider", { enumerable: true, get: function() {
      return ProxyTracerProvider_1.ProxyTracerProvider;
    } });
    var SamplingResult_1 = require_SamplingResult();
    Object.defineProperty(exports, "SamplingDecision", { enumerable: true, get: function() {
      return SamplingResult_1.SamplingDecision;
    } });
    var span_kind_1 = require_span_kind();
    Object.defineProperty(exports, "SpanKind", { enumerable: true, get: function() {
      return span_kind_1.SpanKind;
    } });
    var status_1 = require_status();
    Object.defineProperty(exports, "SpanStatusCode", { enumerable: true, get: function() {
      return status_1.SpanStatusCode;
    } });
    var trace_flags_1 = require_trace_flags();
    Object.defineProperty(exports, "TraceFlags", { enumerable: true, get: function() {
      return trace_flags_1.TraceFlags;
    } });
    var utils_2 = require_utils2();
    Object.defineProperty(exports, "createTraceState", { enumerable: true, get: function() {
      return utils_2.createTraceState;
    } });
    var spancontext_utils_1 = require_spancontext_utils();
    Object.defineProperty(exports, "isSpanContextValid", { enumerable: true, get: function() {
      return spancontext_utils_1.isSpanContextValid;
    } });
    Object.defineProperty(exports, "isValidTraceId", { enumerable: true, get: function() {
      return spancontext_utils_1.isValidTraceId;
    } });
    Object.defineProperty(exports, "isValidSpanId", { enumerable: true, get: function() {
      return spancontext_utils_1.isValidSpanId;
    } });
    var invalid_span_constants_1 = require_invalid_span_constants();
    Object.defineProperty(exports, "INVALID_SPANID", { enumerable: true, get: function() {
      return invalid_span_constants_1.INVALID_SPANID;
    } });
    Object.defineProperty(exports, "INVALID_TRACEID", { enumerable: true, get: function() {
      return invalid_span_constants_1.INVALID_TRACEID;
    } });
    Object.defineProperty(exports, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
      return invalid_span_constants_1.INVALID_SPAN_CONTEXT;
    } });
    var context_api_1 = require_context_api();
    Object.defineProperty(exports, "context", { enumerable: true, get: function() {
      return context_api_1.context;
    } });
    var diag_api_1 = require_diag_api();
    Object.defineProperty(exports, "diag", { enumerable: true, get: function() {
      return diag_api_1.diag;
    } });
    var metrics_api_1 = require_metrics_api();
    Object.defineProperty(exports, "metrics", { enumerable: true, get: function() {
      return metrics_api_1.metrics;
    } });
    var propagation_api_1 = require_propagation_api();
    Object.defineProperty(exports, "propagation", { enumerable: true, get: function() {
      return propagation_api_1.propagation;
    } });
    var trace_api_1 = require_trace_api();
    Object.defineProperty(exports, "trace", { enumerable: true, get: function() {
      return trace_api_1.trace;
    } });
    exports.default = {
      context: context_api_1.context,
      diag: diag_api_1.diag,
      metrics: metrics_api_1.metrics,
      propagation: propagation_api_1.propagation,
      trace: trace_api_1.trace
    };
  }
});

// .wrangler/tmp/bundle-qjirnv/middleware-loader.entry.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-qjirnv/middleware-insertion-facade.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@upstash+redis@1.38.0/node_modules/@upstash/redis/cloudflare.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@upstash+redis@1.38.0/node_modules/@upstash/redis/chunk-2X4SLXT7.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.web.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var webCrypto = globalThis.crypto;
var subtle = webCrypto.subtle;

// ../../node_modules/.pnpm/@upstash+redis@1.38.0/node_modules/@upstash/redis/chunk-2X4SLXT7.mjs
var __defProp2 = Object.defineProperty;
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
var error_exports = {};
__export(error_exports, {
  UpstashError: () => UpstashError,
  UpstashJSONParseError: () => UpstashJSONParseError,
  UrlError: () => UrlError
});
var UpstashError = /* @__PURE__ */ __name(class extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "UpstashError";
  }
}, "UpstashError");
var UrlError = /* @__PURE__ */ __name(class extends Error {
  constructor(url) {
    super(
      `Upstash Redis client was passed an invalid URL. You should pass a URL starting with https. Received: "${url}". `
    );
    this.name = "UrlError";
  }
}, "UrlError");
var UpstashJSONParseError = /* @__PURE__ */ __name(class extends UpstashError {
  constructor(body, options) {
    const truncatedBody = body.length > 200 ? body.slice(0, 200) + "..." : body;
    super(`Unable to parse response body: ${truncatedBody}`, options);
    this.name = "UpstashJSONParseError";
  }
}, "UpstashJSONParseError");
function parseRecursive(obj) {
  const parsed = Array.isArray(obj) ? obj.map((o) => {
    try {
      return parseRecursive(o);
    } catch {
      return o;
    }
  }) : JSON.parse(obj);
  if (typeof parsed === "number" && parsed.toString() !== obj) {
    return obj;
  }
  return parsed;
}
__name(parseRecursive, "parseRecursive");
function parseResponse(result) {
  try {
    return parseRecursive(result);
  } catch {
    return result;
  }
}
__name(parseResponse, "parseResponse");
function deserializeScanResponse(result) {
  return [result[0], ...parseResponse(result.slice(1))];
}
__name(deserializeScanResponse, "deserializeScanResponse");
function deserializeScanWithTypesResponse(result) {
  const [cursor, keys] = result;
  const parsedKeys = [];
  for (let i = 0; i < keys.length; i += 2) {
    parsedKeys.push({ key: keys[i], type: keys[i + 1] });
  }
  return [cursor, parsedKeys];
}
__name(deserializeScanWithTypesResponse, "deserializeScanWithTypesResponse");
function mergeHeaders(...headers) {
  const merged = {};
  for (const header of headers) {
    if (!header)
      continue;
    for (const [key, value] of Object.entries(header)) {
      if (value !== void 0 && value !== null) {
        merged[key] = value;
      }
    }
  }
  return merged;
}
__name(mergeHeaders, "mergeHeaders");
function kvArrayToObject(v) {
  if (typeof v === "object" && v !== null && !Array.isArray(v))
    return v;
  if (!Array.isArray(v))
    return {};
  const obj = {};
  for (let i = 0; i < v.length; i += 2) {
    if (typeof v[i] === "string")
      obj[v[i]] = v[i + 1];
  }
  return obj;
}
__name(kvArrayToObject, "kvArrayToObject");
var MAX_BUFFER_SIZE = 1024 * 1024;
var HttpClient = /* @__PURE__ */ __name(class {
  baseUrl;
  headers;
  options;
  readYourWrites;
  upstashSyncToken = "";
  hasCredentials;
  retry;
  constructor(config2) {
    this.options = {
      backend: config2.options?.backend,
      agent: config2.agent,
      responseEncoding: config2.responseEncoding ?? "base64",
      // default to base64
      cache: config2.cache,
      signal: config2.signal,
      keepAlive: config2.keepAlive ?? true
    };
    this.upstashSyncToken = "";
    this.readYourWrites = config2.readYourWrites ?? true;
    this.baseUrl = (config2.baseUrl || "").replace(/\/$/, "");
    const urlRegex = /^https?:\/\/[^\s#$./?].\S*$/;
    if (this.baseUrl && !urlRegex.test(this.baseUrl)) {
      throw new UrlError(this.baseUrl);
    }
    this.headers = {
      "Content-Type": "application/json",
      ...config2.headers
    };
    this.hasCredentials = Boolean(this.baseUrl && this.headers.authorization.split(" ")[1]);
    if (this.options.responseEncoding === "base64") {
      this.headers["Upstash-Encoding"] = "base64";
    }
    this.retry = typeof config2.retry === "boolean" && !config2.retry ? {
      attempts: 1,
      backoff: () => 0
    } : {
      attempts: config2.retry?.retries ?? 5,
      backoff: config2.retry?.backoff ?? ((retryCount) => Math.exp(retryCount) * 50)
    };
  }
  mergeTelemetry(telemetry) {
    this.headers = merge(this.headers, "Upstash-Telemetry-Runtime", telemetry.runtime);
    this.headers = merge(this.headers, "Upstash-Telemetry-Platform", telemetry.platform);
    this.headers = merge(this.headers, "Upstash-Telemetry-Sdk", telemetry.sdk);
  }
  async request(req) {
    const requestHeaders = mergeHeaders(this.headers, req.headers ?? {});
    const requestUrl = [this.baseUrl, ...req.path ?? []].join("/");
    const isEventStream = requestHeaders.Accept === "text/event-stream";
    const signal = req.signal ?? this.options.signal;
    const isSignalFunction = typeof signal === "function";
    const requestOptions = {
      cache: this.options.cache,
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(req.body),
      keepalive: this.options.keepAlive,
      agent: this.options.agent,
      signal: isSignalFunction ? signal() : signal,
      /**
       * Fastly specific
       */
      backend: this.options.backend
    };
    if (!this.hasCredentials) {
      console.warn(
        "[Upstash Redis] Redis client was initialized without url or token. Failed to execute command."
      );
    }
    if (this.readYourWrites) {
      const newHeader = this.upstashSyncToken;
      this.headers["upstash-sync-token"] = newHeader;
    }
    let res = null;
    let error4 = null;
    for (let i = 0; i <= this.retry.attempts; i++) {
      try {
        res = await fetch(requestUrl, requestOptions);
        break;
      } catch (error_) {
        if (requestOptions.signal?.aborted && isSignalFunction) {
          throw error_;
        } else if (requestOptions.signal?.aborted) {
          const myBlob = new Blob([
            JSON.stringify({ result: requestOptions.signal.reason ?? "Aborted" })
          ]);
          const myOptions = {
            status: 200,
            statusText: requestOptions.signal.reason ?? "Aborted"
          };
          res = new Response(myBlob, myOptions);
          break;
        }
        error4 = error_;
        if (i < this.retry.attempts) {
          await new Promise((r) => setTimeout(r, this.retry.backoff(i)));
        }
      }
    }
    if (!res) {
      throw error4 ?? new Error("Exhausted all retries");
    }
    if (!res.ok) {
      let body2;
      const rawBody2 = await res.text();
      try {
        body2 = JSON.parse(rawBody2);
      } catch (error22) {
        throw new UpstashJSONParseError(rawBody2, { cause: error22 });
      }
      throw new UpstashError(`${body2.error}, command was: ${JSON.stringify(req.body)}`);
    }
    if (this.readYourWrites) {
      const headers = res.headers;
      this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
    }
    if (isEventStream && req && req.onMessage && res.body) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      (async () => {
        try {
          let buffer = "";
          while (true) {
            const { value, done } = await reader.read();
            if (done)
              break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            if (buffer.length > MAX_BUFFER_SIZE) {
              throw new Error("Buffer size exceeded (1MB)");
            }
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                req.onMessage?.(data);
              }
            }
          }
        } catch (error22) {
          if (error22 instanceof Error && error22.name === "AbortError") {
          } else {
            console.error("Stream reading error:", error22);
          }
        } finally {
          try {
            await reader.cancel();
          } catch {
          }
        }
      })();
      return { result: 1 };
    }
    let body;
    const rawBody = await res.text();
    try {
      body = JSON.parse(rawBody);
    } catch (error22) {
      throw new UpstashJSONParseError(rawBody, { cause: error22 });
    }
    if (this.readYourWrites) {
      const headers = res.headers;
      this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
    }
    if (this.options.responseEncoding === "base64") {
      if (Array.isArray(body)) {
        return body.map(({ result: result2, error: error22 }) => ({
          result: decode(result2),
          error: error22
        }));
      }
      const result = decode(body.result);
      return { result, error: body.error };
    }
    return body;
  }
}, "HttpClient");
function base64decode(b64) {
  let dec = "";
  try {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      bytes[i] = binString.charCodeAt(i);
    }
    dec = new TextDecoder().decode(bytes);
  } catch {
    dec = b64;
  }
  return dec;
}
__name(base64decode, "base64decode");
function decode(raw) {
  let result = void 0;
  switch (typeof raw) {
    case "undefined": {
      return raw;
    }
    case "number": {
      result = raw;
      break;
    }
    case "object": {
      if (Array.isArray(raw)) {
        result = raw.map(
          (v) => typeof v === "string" ? base64decode(v) : Array.isArray(v) ? v.map((element) => decode(element)) : v
        );
      } else {
        result = null;
      }
      break;
    }
    case "string": {
      result = raw === "OK" ? "OK" : base64decode(raw);
      break;
    }
    default: {
      break;
    }
  }
  return result;
}
__name(decode, "decode");
function merge(obj, key, value) {
  if (!value) {
    return obj;
  }
  obj[key] = obj[key] ? [obj[key], value].join(",") : value;
  return obj;
}
__name(merge, "merge");
var defaultSerializer = /* @__PURE__ */ __name((c) => {
  switch (typeof c) {
    case "string":
    case "number":
    case "boolean": {
      return c;
    }
    default: {
      return JSON.stringify(c);
    }
  }
}, "defaultSerializer");
var Command = /* @__PURE__ */ __name(class {
  command;
  serialize;
  deserialize;
  headers;
  path;
  onMessage;
  isStreaming;
  signal;
  /**
   * Create a new command instance.
   *
   * You can define a custom `deserialize` function. By default we try to deserialize as json.
   */
  constructor(command, opts) {
    this.serialize = defaultSerializer;
    this.deserialize = opts?.automaticDeserialization === void 0 || opts.automaticDeserialization ? opts?.deserialize ?? parseResponse : (x) => x;
    this.command = command.map((c) => this.serialize(c));
    this.headers = opts?.headers;
    this.path = opts?.path;
    this.onMessage = opts?.streamOptions?.onMessage;
    this.isStreaming = opts?.streamOptions?.isStreaming ?? false;
    this.signal = opts?.streamOptions?.signal;
    if (opts?.latencyLogging) {
      const originalExec = this.exec.bind(this);
      this.exec = async (client) => {
        const start = performance.now();
        const result = await originalExec(client);
        const end = performance.now();
        const loggerResult = (end - start).toFixed(2);
        console.log(
          `Latency for \x1B[38;2;19;185;39m${this.command[0].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`
        );
        return result;
      };
    }
  }
  /**
   * Execute the command using a client.
   */
  async exec(client) {
    const { result, error: error4 } = await client.request({
      body: this.command,
      path: this.path,
      upstashSyncToken: client.upstashSyncToken,
      headers: this.headers,
      onMessage: this.onMessage,
      isStreaming: this.isStreaming,
      signal: this.signal
    });
    if (error4) {
      throw new UpstashError(error4);
    }
    if (result === void 0) {
      throw new TypeError("Request did not return a result");
    }
    return this.deserialize(result);
  }
}, "Command");
var ExecCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const normalizedCmd = cmd.map((arg) => typeof arg === "string" ? arg : String(arg));
    super(normalizedCmd, opts);
  }
}, "ExecCommand");
var FIELD_TYPES = [
  "TEXT",
  "U64",
  "I64",
  "F64",
  "BOOL",
  "DATE",
  "KEYWORD",
  "FACET"
];
function isFieldType(value) {
  return typeof value === "string" && FIELD_TYPES.includes(value);
}
__name(isFieldType, "isFieldType");
function isDetailedField(value) {
  return typeof value === "object" && value !== null && "type" in value && isFieldType(value.type);
}
__name(isDetailedField, "isDetailedField");
function isNestedSchema(value) {
  return typeof value === "object" && value !== null && !isDetailedField(value);
}
__name(isNestedSchema, "isNestedSchema");
function flattenSchema(schema, pathPrefix = []) {
  const fields = [];
  for (const [key, value] of Object.entries(schema)) {
    const currentPath = [...pathPrefix, key];
    const pathString = currentPath.join(".");
    if (isFieldType(value)) {
      fields.push({
        path: pathString,
        type: value
      });
    } else if (isDetailedField(value)) {
      fields.push({
        path: pathString,
        type: value.type,
        fast: "fast" in value ? value.fast : void 0,
        noTokenize: "noTokenize" in value ? value.noTokenize : void 0,
        noStem: "noStem" in value ? value.noStem : void 0,
        from: "from" in value ? value.from : void 0
      });
    } else if (isNestedSchema(value)) {
      const nestedFields = flattenSchema(value, currentPath);
      fields.push(...nestedFields);
    }
  }
  return fields;
}
__name(flattenSchema, "flattenSchema");
function deserializeQueryResponse(rawResponse) {
  return rawResponse.map((itemRaw) => {
    const raw = itemRaw;
    const key = raw[0];
    const score = Number(raw[1]);
    const rawFields = raw[2];
    if (rawFields === void 0) {
      return { key, score };
    }
    if (!Array.isArray(rawFields) || rawFields.length === 0) {
      return { key, score, data: {} };
    }
    let data = {};
    for (const fieldRaw of rawFields) {
      const key2 = fieldRaw[0];
      const value = fieldRaw[1];
      const pathParts = key2.split(".");
      if (pathParts.length === 1) {
        data[key2] = value;
      } else {
        let currentObj = data;
        for (let i = 0; i < pathParts.length - 1; i++) {
          const pathPart = pathParts[i];
          if (!(pathPart in currentObj)) {
            currentObj[pathPart] = {};
          }
          currentObj = currentObj[pathPart];
        }
        currentObj[pathParts.at(-1)] = value;
      }
    }
    if ("$" in data) {
      data = data["$"];
    }
    return { key, score, data };
  });
}
__name(deserializeQueryResponse, "deserializeQueryResponse");
function deserializeDescribeResponse(rawResponse) {
  const description = {};
  for (let i = 0; i < rawResponse.length; i += 2) {
    const descriptor = rawResponse[i];
    switch (descriptor) {
      case "name": {
        description["name"] = rawResponse[i + 1];
        break;
      }
      case "type": {
        description["dataType"] = rawResponse[i + 1].toLowerCase();
        break;
      }
      case "prefixes": {
        description["prefixes"] = rawResponse[i + 1];
        break;
      }
      case "language": {
        description["language"] = rawResponse[i + 1];
        break;
      }
      case "schema": {
        const schema = {};
        for (const fieldDescription of rawResponse[i + 1]) {
          const fieldName = fieldDescription[0];
          const fieldInfo = { type: fieldDescription[1] };
          if (fieldDescription.length > 2) {
            for (let j = 2; j < fieldDescription.length; j++) {
              const fieldOption = fieldDescription[j];
              switch (fieldOption) {
                case "NOSTEM": {
                  fieldInfo.noStem = true;
                  break;
                }
                case "NOTOKENIZE": {
                  fieldInfo.noTokenize = true;
                  break;
                }
                case "FAST": {
                  fieldInfo.fast = true;
                  break;
                }
                case "FROM": {
                  fieldInfo.from = fieldDescription[++j];
                  break;
                }
              }
            }
          }
          schema[fieldName] = fieldInfo;
        }
        description["schema"] = schema;
        break;
      }
    }
  }
  return description;
}
__name(deserializeDescribeResponse, "deserializeDescribeResponse");
function parseCountResponse(rawResponse) {
  return typeof rawResponse === "number" ? rawResponse : Number.parseInt(rawResponse, 10);
}
__name(parseCountResponse, "parseCountResponse");
function deserializeAggregateResponse(rawResponse) {
  return parseAggregationArray(rawResponse);
}
__name(deserializeAggregateResponse, "deserializeAggregateResponse");
function parseAggregationArray(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === "string") {
        result[key] = value[0] === "buckets" ? parseBucketsValue(value) : parseStatsValue(value);
      } else {
        result[key] = parseAggregationArray(value);
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}
__name(parseAggregationArray, "parseAggregationArray");
function coerceNumericString(value) {
  if (typeof value === "string" && value !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return value;
}
__name(coerceNumericString, "coerceNumericString");
function parseStatsValue(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (Array.isArray(value) && value.length > 0) {
      if (typeof value[0] === "string") {
        result[key] = parseStatsValue(value);
      } else if (Array.isArray(value[0]) && typeof value[0][0] === "string") {
        result[key] = value.map((item) => parseStatsValue(item));
      } else {
        result[key] = value;
      }
    } else {
      result[key] = coerceNumericString(value);
    }
  }
  return result;
}
__name(parseStatsValue, "parseStatsValue");
function parseBucketsValue(arr) {
  if (arr[0] === "buckets" && Array.isArray(arr[1])) {
    const result = {
      buckets: arr[1].map((bucket) => {
        const bucketObj = {};
        for (let i = 0; i < bucket.length; i += 2) {
          const key = bucket[i];
          const value = bucket[i + 1];
          bucketObj[key] = Array.isArray(value) && value.length > 0 && typeof value[0] === "string" ? parseStatsValue(value) : value;
        }
        return bucketObj;
      })
    };
    for (let i = 2; i < arr.length; i += 2) {
      result[arr[i]] = arr[i + 1];
    }
    return result;
  }
  return arr;
}
__name(parseBucketsValue, "parseBucketsValue");
function buildQueryCommand(redisCommand, name, options) {
  const query = JSON.stringify(options?.filter ?? {});
  const command = [redisCommand, name, query];
  if (options?.limit !== void 0) {
    command.push("LIMIT", options.limit.toString());
  }
  if (options?.offset !== void 0) {
    command.push("OFFSET", options.offset.toString());
  }
  if (options?.select && Object.keys(options.select).length === 0) {
    command.push("NOCONTENT");
  }
  if (options) {
    if ("orderBy" in options && options.orderBy) {
      command.push("ORDERBY");
      for (const [field, direction] of Object.entries(options.orderBy)) {
        command.push(field, direction);
      }
    } else if ("scoreFunc" in options && options.scoreFunc) {
      command.push("SCOREFUNC", ...buildScoreFunc(options.scoreFunc));
    }
  }
  if (options?.highlight) {
    command.push(
      "HIGHLIGHT",
      "FIELDS",
      options.highlight.fields.length.toString(),
      ...options.highlight.fields
    );
    if (options.highlight.preTag && options.highlight.postTag) {
      command.push("TAGS", options.highlight.preTag, options.highlight.postTag);
    }
  }
  if (options?.select && Object.keys(options.select).length > 0) {
    command.push(
      "SELECT",
      Object.keys(options.select).length.toString(),
      ...Object.keys(options.select)
    );
  }
  return command;
}
__name(buildQueryCommand, "buildQueryCommand");
function buildScoreFunc(scoreBy) {
  const result = [];
  if (typeof scoreBy === "string") {
    result.push("FIELDVALUE", scoreBy);
  } else if ("fields" in scoreBy) {
    if (scoreBy.combineMode) {
      result.push("COMBINEMODE", scoreBy.combineMode.toUpperCase());
    }
    if (scoreBy.scoreMode) {
      result.push("SCOREMODE", scoreBy.scoreMode.toUpperCase());
    }
    for (const field of scoreBy.fields) {
      result.push(...buildScoreFuncField(field));
    }
  } else {
    result.push(...buildScoreFuncField(scoreBy));
  }
  return result;
}
__name(buildScoreFunc, "buildScoreFunc");
function buildScoreFuncField(field) {
  const result = [];
  if (typeof field === "string") {
    result.push("FIELDVALUE", field);
  } else {
    if (field.scoreMode) {
      result.push("SCOREMODE", field.scoreMode.toUpperCase());
    }
    result.push("FIELDVALUE", field.field);
    if (field.modifier) {
      result.push("MODIFIER", field.modifier.toUpperCase());
    }
    if (field.factor !== void 0) {
      result.push("FACTOR", field.factor.toString());
    }
    if (field.missing !== void 0) {
      result.push("MISSING", field.missing.toString());
    }
  }
  return result;
}
__name(buildScoreFuncField, "buildScoreFuncField");
function buildCreateIndexCommand(params) {
  const { name, schema, dataType, prefix, language, skipInitialScan, existsOk } = params;
  const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
  const payload = [
    name,
    ...skipInitialScan ? ["SKIPINITIALSCAN"] : [],
    ...existsOk ? ["EXISTSOK"] : [],
    "ON",
    dataType.toUpperCase(),
    "PREFIX",
    prefixArray.length.toString(),
    ...prefixArray,
    ...language ? ["LANGUAGE", language] : [],
    "SCHEMA"
  ];
  const fields = flattenSchema(schema);
  for (const field of fields) {
    payload.push(field.path, field.type);
    if (field.fast) {
      payload.push("FAST");
    }
    if (field.noTokenize) {
      payload.push("NOTOKENIZE");
    }
    if (field.noStem) {
      payload.push("NOSTEM");
    }
    if (field.from) {
      payload.push("FROM", field.from);
    }
  }
  return ["SEARCH.CREATE", ...payload];
}
__name(buildCreateIndexCommand, "buildCreateIndexCommand");
function buildAggregateCommand(name, options) {
  const query = JSON.stringify(options?.filter ?? {});
  const aggregations = JSON.stringify(options.aggregations);
  return ["SEARCH.AGGREGATE", name, query, aggregations];
}
__name(buildAggregateCommand, "buildAggregateCommand");
var SearchIndex = /* @__PURE__ */ __name(class {
  name;
  schema;
  client;
  constructor({ name, schema, client }) {
    this.name = name;
    this.schema = schema;
    this.client = client;
  }
  async waitIndexing() {
    const command = ["SEARCH.WAITINDEXING", this.name];
    return await new ExecCommand(command).exec(this.client);
  }
  async describe() {
    const command = ["SEARCH.DESCRIBE", this.name];
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    if (!rawResult)
      return null;
    return deserializeDescribeResponse(rawResult);
  }
  async query(options) {
    const command = buildQueryCommand("SEARCH.QUERY", this.name, options);
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    if (!rawResult)
      return rawResult;
    return deserializeQueryResponse(rawResult);
  }
  async aggregate(options) {
    const command = buildAggregateCommand(this.name, options);
    const rawResult = await new ExecCommand(
      command
    ).exec(this.client);
    return deserializeAggregateResponse(rawResult);
  }
  async count({ filter }) {
    const command = buildQueryCommand("SEARCH.COUNT", this.name, { filter });
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    return { count: parseCountResponse(rawResult) };
  }
  async drop() {
    const command = ["SEARCH.DROP", this.name];
    const result = await new ExecCommand(command).exec(this.client);
    return result;
  }
  async addAlias({ alias }) {
    const command = ["SEARCH.ALIASADD", alias, this.name];
    const result = await new ExecCommand(command).exec(this.client);
    return result;
  }
}, "SearchIndex");
async function createIndex(client, params) {
  const { name, schema } = params;
  const createIndexCommand = buildCreateIndexCommand(params);
  await new ExecCommand(createIndexCommand).exec(client);
  return initIndex(client, { name, schema });
}
__name(createIndex, "createIndex");
function initIndex(client, params) {
  const { name, schema } = params;
  return new SearchIndex({ name, schema, client });
}
__name(initIndex, "initIndex");
async function listAliases(client) {
  const command = ["SEARCH.LISTALIASES"];
  const rawResult = await new ExecCommand(command).exec(client);
  if (rawResult === 0 || Array.isArray(rawResult) && rawResult.length === 0) {
    return {};
  }
  if (!Array.isArray(rawResult)) {
    return {};
  }
  const aliases = {};
  for (const pair of rawResult) {
    if (Array.isArray(pair) && pair.length === 2) {
      const [alias, index] = pair;
      aliases[alias] = index;
    }
  }
  return aliases;
}
__name(listAliases, "listAliases");
async function addAlias(client, { indexName, alias }) {
  const command = ["SEARCH.ALIASADD", alias, indexName];
  const result = await new ExecCommand(command).exec(client);
  return result;
}
__name(addAlias, "addAlias");
async function delAlias(client, { alias }) {
  const command = ["SEARCH.ALIASDEL", alias];
  const result = await new ExecCommand(command).exec(client);
  return result;
}
__name(delAlias, "delAlias");
function deserialize(result) {
  if (result.length === 0) {
    return null;
  }
  const obj = {};
  for (let i = 0; i < result.length; i += 2) {
    const key = result[i];
    const value = result[i + 1];
    try {
      obj[key] = JSON.parse(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}
__name(deserialize, "deserialize");
var HRandFieldCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const command = ["hrandfield", cmd[0]];
    if (typeof cmd[1] === "number") {
      command.push(cmd[1]);
    }
    if (cmd[2]) {
      command.push("WITHVALUES");
    }
    super(command, {
      // @ts-expect-error to silence compiler
      deserialize: cmd[2] ? (result) => deserialize(result) : opts?.deserialize,
      ...opts
    });
  }
}, "HRandFieldCommand");
var AppendCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["append", ...cmd], opts);
  }
}, "AppendCommand");
var BitCountCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, start, end], opts) {
    const command = ["bitcount", key];
    if (typeof start === "number") {
      command.push(start);
    }
    if (typeof end === "number") {
      command.push(end);
    }
    super(command, opts);
  }
}, "BitCountCommand");
var BitFieldCommand = /* @__PURE__ */ __name(class {
  constructor(args, client, opts, execOperation = (command) => command.exec(this.client)) {
    this.client = client;
    this.opts = opts;
    this.execOperation = execOperation;
    this.command = ["bitfield", ...args];
  }
  command;
  chain(...args) {
    this.command.push(...args);
    return this;
  }
  get(...args) {
    return this.chain("get", ...args);
  }
  set(...args) {
    return this.chain("set", ...args);
  }
  incrby(...args) {
    return this.chain("incrby", ...args);
  }
  overflow(overflow) {
    return this.chain("overflow", overflow);
  }
  exec() {
    const command = new Command(this.command, this.opts);
    return this.execOperation(command);
  }
}, "BitFieldCommand");
var BitOpCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["bitop", ...cmd], opts);
  }
}, "BitOpCommand");
var BitPosCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["bitpos", ...cmd], opts);
  }
}, "BitPosCommand");
var ClientSetInfoCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([attribute, value], opts) {
    super(["CLIENT", "SETINFO", attribute.toUpperCase(), value], opts);
  }
}, "ClientSetInfoCommand");
var CopyCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, destinationKey, opts], commandOptions) {
    super(["COPY", key, destinationKey, ...opts?.replace ? ["REPLACE"] : []], {
      ...commandOptions,
      deserialize(result) {
        if (result > 0) {
          return "COPIED";
        }
        return "NOT_COPIED";
      }
    });
  }
}, "CopyCommand");
var DBSizeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(opts) {
    super(["dbsize"], opts);
  }
}, "DBSizeCommand");
var DecrCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["decr", ...cmd], opts);
  }
}, "DecrCommand");
var DecrByCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["decrby", ...cmd], opts);
  }
}, "DecrByCommand");
var DelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["del", ...cmd], opts);
  }
}, "DelCommand");
var EchoCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["echo", ...cmd], opts);
  }
}, "EchoCommand");
var EvalROCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([script, keys, args], opts) {
    super(["eval_ro", script, keys.length, ...keys, ...args ?? []], opts);
  }
}, "EvalROCommand");
var EvalCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([script, keys, args], opts) {
    super(["eval", script, keys.length, ...keys, ...args ?? []], opts);
  }
}, "EvalCommand");
var EvalshaROCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([sha, keys, args], opts) {
    super(["evalsha_ro", sha, keys.length, ...keys, ...args ?? []], opts);
  }
}, "EvalshaROCommand");
var EvalshaCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([sha, keys, args], opts) {
    super(["evalsha", sha, keys.length, ...keys, ...args ?? []], opts);
  }
}, "EvalshaCommand");
var ExistsCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["exists", ...cmd], opts);
  }
}, "ExistsCommand");
var ExpireCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["expire", ...cmd.filter(Boolean)], opts);
  }
}, "ExpireCommand");
var ExpireAtCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["expireat", ...cmd], opts);
  }
}, "ExpireAtCommand");
var FCallCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([functionName, keys, args], opts) {
    super(["fcall", functionName, ...keys ? [keys.length, ...keys] : [0], ...args ?? []], opts);
  }
}, "FCallCommand");
var FCallRoCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([functionName, keys, args], opts) {
    super(
      ["fcall_ro", functionName, ...keys ? [keys.length, ...keys] : [0], ...args ?? []],
      opts
    );
  }
}, "FCallRoCommand");
var FlushAllCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(args, opts) {
    const command = ["flushall"];
    if (args && args.length > 0 && args[0].async) {
      command.push("async");
    }
    super(command, opts);
  }
}, "FlushAllCommand");
var FlushDBCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([opts], cmdOpts) {
    const command = ["flushdb"];
    if (opts?.async) {
      command.push("async");
    }
    super(command, cmdOpts);
  }
}, "FlushDBCommand");
var FunctionDeleteCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([libraryName], opts) {
    super(["function", "delete", libraryName], opts);
  }
}, "FunctionDeleteCommand");
var FunctionFlushCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(opts) {
    super(["function", "flush"], opts);
  }
}, "FunctionFlushCommand");
var FunctionListCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([args], opts) {
    const command = ["function", "list"];
    if (args?.libraryName) {
      command.push("libraryname", args.libraryName);
    }
    if (args?.withCode) {
      command.push("withcode");
    }
    super(command, { deserialize: deserialize2, ...opts });
  }
}, "FunctionListCommand");
function deserialize2(result) {
  if (!Array.isArray(result))
    return [];
  return result.map((libRaw) => {
    const lib = kvArrayToObject(libRaw);
    const functionsParsed = lib.functions.map(
      (fnRaw) => kvArrayToObject(fnRaw)
    );
    return {
      libraryName: lib.library_name,
      engine: lib.engine,
      functions: functionsParsed.map((fn) => ({
        name: fn.name,
        description: fn.description ?? void 0,
        flags: fn.flags
      })),
      libraryCode: lib.library_code
    };
  });
}
__name(deserialize2, "deserialize2");
var FunctionLoadCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([args], opts) {
    super(["function", "load", ...args.replace ? ["replace"] : [], args.code], opts);
  }
}, "FunctionLoadCommand");
var FunctionStatsCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(opts) {
    super(["function", "stats"], { deserialize: deserialize3, ...opts });
  }
}, "FunctionStatsCommand");
function deserialize3(result) {
  const rawEngines = kvArrayToObject(kvArrayToObject(result).engines);
  const parsedEngines = Object.fromEntries(
    Object.entries(rawEngines).map(([key, value]) => [key, kvArrayToObject(value)])
  );
  const final = {
    engines: Object.fromEntries(
      Object.entries(parsedEngines).map(([key, value]) => [
        key,
        {
          librariesCount: value.libraries_count,
          functionsCount: value.functions_count
        }
      ])
    )
  };
  return final;
}
__name(deserialize3, "deserialize3");
var GeoAddCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, arg1, ...arg2], opts) {
    const command = ["geoadd", key];
    if ("nx" in arg1 && arg1.nx) {
      command.push("nx");
    } else if ("xx" in arg1 && arg1.xx) {
      command.push("xx");
    }
    if ("ch" in arg1 && arg1.ch) {
      command.push("ch");
    }
    if ("latitude" in arg1 && arg1.latitude) {
      command.push(arg1.longitude, arg1.latitude, arg1.member);
    }
    command.push(
      ...arg2.flatMap(({ latitude, longitude, member }) => [longitude, latitude, member])
    );
    super(command, opts);
  }
}, "GeoAddCommand");
var GeoDistCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, member1, member2, unit = "M"], opts) {
    super(["GEODIST", key, member1, member2, unit], opts);
  }
}, "GeoDistCommand");
var GeoHashCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key] = cmd;
    const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
    super(["GEOHASH", key, ...members], opts);
  }
}, "GeoHashCommand");
var GeoPosCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key] = cmd;
    const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
    super(["GEOPOS", key, ...members], {
      deserialize: (result) => transform(result),
      ...opts
    });
  }
}, "GeoPosCommand");
function transform(result) {
  const final = [];
  for (const pos of result) {
    if (!pos?.[0] || !pos?.[1]) {
      continue;
    }
    final.push({ lng: Number.parseFloat(pos[0]), lat: Number.parseFloat(pos[1]) });
  }
  return final;
}
__name(transform, "transform");
var GeoSearchCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, centerPoint, shape, order, opts], commandOptions) {
    const command = ["GEOSEARCH", key];
    if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
      command.push(centerPoint.type, centerPoint.member);
    }
    if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
      command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
    }
    if (shape.type === "BYRADIUS" || shape.type === "byradius") {
      command.push(shape.type, shape.radius, shape.radiusType);
    }
    if (shape.type === "BYBOX" || shape.type === "bybox") {
      command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
    }
    command.push(order);
    if (opts?.count) {
      command.push("COUNT", opts.count.limit, ...opts.count.any ? ["ANY"] : []);
    }
    const transform2 = /* @__PURE__ */ __name((result) => {
      if (!opts?.withCoord && !opts?.withDist && !opts?.withHash) {
        return result.map((member) => {
          try {
            return { member: JSON.parse(member) };
          } catch {
            return { member };
          }
        });
      }
      return result.map((members) => {
        let counter = 1;
        const obj = {};
        try {
          obj.member = JSON.parse(members[0]);
        } catch {
          obj.member = members[0];
        }
        if (opts.withDist) {
          obj.dist = Number.parseFloat(members[counter++]);
        }
        if (opts.withHash) {
          obj.hash = members[counter++].toString();
        }
        if (opts.withCoord) {
          obj.coord = {
            long: Number.parseFloat(members[counter][0]),
            lat: Number.parseFloat(members[counter][1])
          };
        }
        return obj;
      });
    }, "transform2");
    super(
      [
        ...command,
        ...opts?.withCoord ? ["WITHCOORD"] : [],
        ...opts?.withDist ? ["WITHDIST"] : [],
        ...opts?.withHash ? ["WITHHASH"] : []
      ],
      {
        deserialize: transform2,
        ...commandOptions
      }
    );
  }
}, "GeoSearchCommand");
var GeoSearchStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([destination, key, centerPoint, shape, order, opts], commandOptions) {
    const command = ["GEOSEARCHSTORE", destination, key];
    if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
      command.push(centerPoint.type, centerPoint.member);
    }
    if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
      command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
    }
    if (shape.type === "BYRADIUS" || shape.type === "byradius") {
      command.push(shape.type, shape.radius, shape.radiusType);
    }
    if (shape.type === "BYBOX" || shape.type === "bybox") {
      command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
    }
    command.push(order);
    if (opts?.count) {
      command.push("COUNT", opts.count.limit, ...opts.count.any ? ["ANY"] : []);
    }
    super([...command, ...opts?.storeDist ? ["STOREDIST"] : []], commandOptions);
  }
}, "GeoSearchStoreCommand");
var GetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["get", ...cmd], opts);
  }
}, "GetCommand");
var GetBitCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["getbit", ...cmd], opts);
  }
}, "GetBitCommand");
var GetDelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["getdel", ...cmd], opts);
  }
}, "GetDelCommand");
var GetExCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, opts], cmdOpts) {
    const command = ["getex", key];
    if (opts) {
      if ("ex" in opts && typeof opts.ex === "number") {
        command.push("ex", opts.ex);
      } else if ("px" in opts && typeof opts.px === "number") {
        command.push("px", opts.px);
      } else if ("exat" in opts && typeof opts.exat === "number") {
        command.push("exat", opts.exat);
      } else if ("pxat" in opts && typeof opts.pxat === "number") {
        command.push("pxat", opts.pxat);
      } else if ("persist" in opts && opts.persist) {
        command.push("persist");
      }
    }
    super(command, cmdOpts);
  }
}, "GetExCommand");
var GetRangeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["getrange", ...cmd], opts);
  }
}, "GetRangeCommand");
var GetSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["getset", ...cmd], opts);
  }
}, "GetSetCommand");
var HDelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hdel", ...cmd], opts);
  }
}, "HDelCommand");
var HExistsCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hexists", ...cmd], opts);
  }
}, "HExistsCommand");
var HExpireCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields, seconds, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hexpire",
        key,
        seconds,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
}, "HExpireCommand");
var HExpireAtCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields, timestamp, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hexpireat",
        key,
        timestamp,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
}, "HExpireAtCommand");
var HExpireTimeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hexpiretime", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
}, "HExpireTimeCommand");
var HPersistCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpersist", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
}, "HPersistCommand");
var HPExpireCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields, milliseconds, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hpexpire",
        key,
        milliseconds,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
}, "HPExpireCommand");
var HPExpireAtCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields, timestamp, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hpexpireat",
        key,
        timestamp,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
}, "HPExpireAtCommand");
var HPExpireTimeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpexpiretime", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
}, "HPExpireTimeCommand");
var HPTtlCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpttl", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
}, "HPTtlCommand");
var HGetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hget", ...cmd], opts);
  }
}, "HGetCommand");
function deserialize4(result) {
  if (result.length === 0) {
    return null;
  }
  const obj = {};
  for (let i = 0; i < result.length; i += 2) {
    const key = result[i];
    const value = result[i + 1];
    try {
      const valueIsNumberAndNotSafeInteger = !Number.isNaN(Number(value)) && !Number.isSafeInteger(Number(value));
      obj[key] = valueIsNumberAndNotSafeInteger ? value : JSON.parse(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}
__name(deserialize4, "deserialize4");
var HGetAllCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hgetall", ...cmd], {
      deserialize: (result) => deserialize4(result),
      ...opts
    });
  }
}, "HGetAllCommand");
function deserialize5(fields, result) {
  if (result.every((field) => field === null)) {
    return null;
  }
  const obj = {};
  for (const [i, field] of fields.entries()) {
    try {
      obj[field] = JSON.parse(result[i]);
    } catch {
      obj[field] = result[i];
    }
  }
  return obj;
}
__name(deserialize5, "deserialize5");
var HMGetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, ...fields], opts) {
    super(["hmget", key, ...fields], {
      deserialize: (result) => deserialize5(fields, result),
      ...opts
    });
  }
}, "HMGetCommand");
var HGetDelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, ...fields], opts) {
    super(["hgetdel", key, "FIELDS", fields.length, ...fields], {
      deserialize: (result) => deserialize5(fields.map(String), result),
      ...opts
    });
  }
}, "HGetDelCommand");
var HGetExCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, opts, ...fields], cmdOpts) {
    const command = ["hgetex", key];
    if ("ex" in opts && typeof opts.ex === "number") {
      command.push("EX", opts.ex);
    } else if ("px" in opts && typeof opts.px === "number") {
      command.push("PX", opts.px);
    } else if ("exat" in opts && typeof opts.exat === "number") {
      command.push("EXAT", opts.exat);
    } else if ("pxat" in opts && typeof opts.pxat === "number") {
      command.push("PXAT", opts.pxat);
    } else if ("persist" in opts && opts.persist) {
      command.push("PERSIST");
    }
    command.push("FIELDS", fields.length, ...fields);
    super(command, {
      deserialize: (result) => deserialize5(fields.map(String), result),
      ...cmdOpts
    });
  }
}, "HGetExCommand");
var HIncrByCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hincrby", ...cmd], opts);
  }
}, "HIncrByCommand");
var HIncrByFloatCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hincrbyfloat", ...cmd], opts);
  }
}, "HIncrByFloatCommand");
var HKeysCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key], opts) {
    super(["hkeys", key], opts);
  }
}, "HKeysCommand");
var HLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hlen", ...cmd], opts);
  }
}, "HLenCommand");
var HMSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, kv], opts) {
    super(["hmset", key, ...Object.entries(kv).flatMap(([field, value]) => [field, value])], opts);
  }
}, "HMSetCommand");
var HScanCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, cursor, cmdOpts], opts) {
    const command = ["hscan", key, cursor];
    if (cmdOpts?.match) {
      command.push("match", cmdOpts.match);
    }
    if (typeof cmdOpts?.count === "number") {
      command.push("count", cmdOpts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...opts
    });
  }
}, "HScanCommand");
var HSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, kv], opts) {
    super(["hset", key, ...Object.entries(kv).flatMap(([field, value]) => [field, value])], opts);
  }
}, "HSetCommand");
var HSetExCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, opts, kv], cmdOpts) {
    const command = ["hsetex", key];
    if (opts.conditional) {
      command.push(opts.conditional.toUpperCase());
    }
    if (opts.expiration) {
      if ("ex" in opts.expiration && typeof opts.expiration.ex === "number") {
        command.push("EX", opts.expiration.ex);
      } else if ("px" in opts.expiration && typeof opts.expiration.px === "number") {
        command.push("PX", opts.expiration.px);
      } else if ("exat" in opts.expiration && typeof opts.expiration.exat === "number") {
        command.push("EXAT", opts.expiration.exat);
      } else if ("pxat" in opts.expiration && typeof opts.expiration.pxat === "number") {
        command.push("PXAT", opts.expiration.pxat);
      } else if ("keepttl" in opts.expiration && opts.expiration.keepttl) {
        command.push("KEEPTTL");
      }
    }
    const entries = Object.entries(kv);
    command.push("FIELDS", entries.length);
    for (const [field, value] of entries) {
      command.push(field, value);
    }
    super(command, cmdOpts);
  }
}, "HSetExCommand");
var HSetNXCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hsetnx", ...cmd], opts);
  }
}, "HSetNXCommand");
var HStrLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hstrlen", ...cmd], opts);
  }
}, "HStrLenCommand");
var HTtlCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["httl", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
}, "HTtlCommand");
var HValsCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["hvals", ...cmd], opts);
  }
}, "HValsCommand");
var IncrCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["incr", ...cmd], opts);
  }
}, "IncrCommand");
var IncrByCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["incrby", ...cmd], opts);
  }
}, "IncrByCommand");
var IncrByFloatCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["incrbyfloat", ...cmd], opts);
  }
}, "IncrByFloatCommand");
var JsonArrAppendCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.ARRAPPEND", ...cmd], opts);
  }
}, "JsonArrAppendCommand");
var JsonArrIndexCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.ARRINDEX", ...cmd], opts);
  }
}, "JsonArrIndexCommand");
var JsonArrInsertCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.ARRINSERT", ...cmd], opts);
  }
}, "JsonArrInsertCommand");
var JsonArrLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.ARRLEN", cmd[0], cmd[1] ?? "$"], opts);
  }
}, "JsonArrLenCommand");
var JsonArrPopCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.ARRPOP", ...cmd], opts);
  }
}, "JsonArrPopCommand");
var JsonArrTrimCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const path = cmd[1] ?? "$";
    const start = cmd[2] ?? 0;
    const stop = cmd[3] ?? 0;
    super(["JSON.ARRTRIM", cmd[0], path, start, stop], opts);
  }
}, "JsonArrTrimCommand");
var JsonClearCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.CLEAR", ...cmd], opts);
  }
}, "JsonClearCommand");
var JsonDelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.DEL", ...cmd], opts);
  }
}, "JsonDelCommand");
var JsonForgetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.FORGET", ...cmd], opts);
  }
}, "JsonForgetCommand");
var JsonGetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const command = ["JSON.GET"];
    if (typeof cmd[1] === "string") {
      command.push(...cmd);
    } else {
      command.push(cmd[0]);
      if (cmd[1]) {
        if (cmd[1].indent) {
          command.push("INDENT", cmd[1].indent);
        }
        if (cmd[1].newline) {
          command.push("NEWLINE", cmd[1].newline);
        }
        if (cmd[1].space) {
          command.push("SPACE", cmd[1].space);
        }
      }
      command.push(...cmd.slice(2));
    }
    super(command, opts);
  }
}, "JsonGetCommand");
var JsonMergeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const command = ["JSON.MERGE", ...cmd];
    super(command, opts);
  }
}, "JsonMergeCommand");
var JsonMGetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.MGET", ...cmd[0], cmd[1]], opts);
  }
}, "JsonMGetCommand");
var JsonMSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const command = ["JSON.MSET"];
    for (const c of cmd) {
      command.push(c.key, c.path, c.value);
    }
    super(command, opts);
  }
}, "JsonMSetCommand");
var JsonNumIncrByCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.NUMINCRBY", ...cmd], opts);
  }
}, "JsonNumIncrByCommand");
var JsonNumMultByCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.NUMMULTBY", ...cmd], opts);
  }
}, "JsonNumMultByCommand");
var JsonObjKeysCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.OBJKEYS", ...cmd], opts);
  }
}, "JsonObjKeysCommand");
var JsonObjLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.OBJLEN", ...cmd], opts);
  }
}, "JsonObjLenCommand");
var JsonRespCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.RESP", ...cmd], opts);
  }
}, "JsonRespCommand");
var JsonSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const command = ["JSON.SET", cmd[0], cmd[1], cmd[2]];
    if (cmd[3]) {
      if (cmd[3].nx) {
        command.push("NX");
      } else if (cmd[3].xx) {
        command.push("XX");
      }
    }
    super(command, opts);
  }
}, "JsonSetCommand");
var JsonStrAppendCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.STRAPPEND", ...cmd], opts);
  }
}, "JsonStrAppendCommand");
var JsonStrLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.STRLEN", ...cmd], opts);
  }
}, "JsonStrLenCommand");
var JsonToggleCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.TOGGLE", ...cmd], opts);
  }
}, "JsonToggleCommand");
var JsonTypeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["JSON.TYPE", ...cmd], opts);
  }
}, "JsonTypeCommand");
var KeysCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["keys", ...cmd], opts);
  }
}, "KeysCommand");
var LIndexCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lindex", ...cmd], opts);
  }
}, "LIndexCommand");
var LInsertCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["linsert", ...cmd], opts);
  }
}, "LInsertCommand");
var LLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["llen", ...cmd], opts);
  }
}, "LLenCommand");
var LMoveCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lmove", ...cmd], opts);
  }
}, "LMoveCommand");
var LmPopCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [numkeys, keys, direction, count3] = cmd;
    super(["LMPOP", numkeys, ...keys, direction, ...count3 ? ["COUNT", count3] : []], opts);
  }
}, "LmPopCommand");
var LPopCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lpop", ...cmd], opts);
  }
}, "LPopCommand");
var LPosCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const args = ["lpos", cmd[0], cmd[1]];
    if (typeof cmd[2]?.rank === "number") {
      args.push("rank", cmd[2].rank);
    }
    if (typeof cmd[2]?.count === "number") {
      args.push("count", cmd[2].count);
    }
    if (typeof cmd[2]?.maxLen === "number") {
      args.push("maxLen", cmd[2].maxLen);
    }
    super(args, opts);
  }
}, "LPosCommand");
var LPushCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lpush", ...cmd], opts);
  }
}, "LPushCommand");
var LPushXCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lpushx", ...cmd], opts);
  }
}, "LPushXCommand");
var LRangeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lrange", ...cmd], opts);
  }
}, "LRangeCommand");
var LRemCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lrem", ...cmd], opts);
  }
}, "LRemCommand");
var LSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["lset", ...cmd], opts);
  }
}, "LSetCommand");
var LTrimCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["ltrim", ...cmd], opts);
  }
}, "LTrimCommand");
var MGetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const keys = Array.isArray(cmd[0]) ? cmd[0] : cmd;
    super(["mget", ...keys], opts);
  }
}, "MGetCommand");
var MSetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([kv], opts) {
    super(["mset", ...Object.entries(kv).flatMap(([key, value]) => [key, value])], opts);
  }
}, "MSetCommand");
var MSetNXCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([kv], opts) {
    super(["msetnx", ...Object.entries(kv).flat()], opts);
  }
}, "MSetNXCommand");
var PersistCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["persist", ...cmd], opts);
  }
}, "PersistCommand");
var PExpireCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["pexpire", ...cmd], opts);
  }
}, "PExpireCommand");
var PExpireAtCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["pexpireat", ...cmd], opts);
  }
}, "PExpireAtCommand");
var PfAddCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["pfadd", ...cmd], opts);
  }
}, "PfAddCommand");
var PfCountCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["pfcount", ...cmd], opts);
  }
}, "PfCountCommand");
var PfMergeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["pfmerge", ...cmd], opts);
  }
}, "PfMergeCommand");
var PingCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const command = ["ping"];
    if (cmd?.[0] !== void 0) {
      command.push(cmd[0]);
    }
    super(command, opts);
  }
}, "PingCommand");
var PSetEXCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["psetex", ...cmd], opts);
  }
}, "PSetEXCommand");
var PTtlCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["pttl", ...cmd], opts);
  }
}, "PTtlCommand");
var PublishCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["publish", ...cmd], opts);
  }
}, "PublishCommand");
var RandomKeyCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(opts) {
    super(["randomkey"], opts);
  }
}, "RandomKeyCommand");
var RenameCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["rename", ...cmd], opts);
  }
}, "RenameCommand");
var RenameNXCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["renamenx", ...cmd], opts);
  }
}, "RenameNXCommand");
var RPopCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["rpop", ...cmd], opts);
  }
}, "RPopCommand");
var RPushCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["rpush", ...cmd], opts);
  }
}, "RPushCommand");
var RPushXCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["rpushx", ...cmd], opts);
  }
}, "RPushXCommand");
var SAddCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sadd", ...cmd], opts);
  }
}, "SAddCommand");
var ScanCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([cursor, opts], cmdOpts) {
    const command = ["scan", cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    if (opts && "withType" in opts && opts.withType === true) {
      command.push("withtype");
    } else if (opts && "type" in opts && opts.type && opts.type.length > 0) {
      command.push("type", opts.type);
    }
    super(command, {
      // @ts-expect-error ignore types here
      deserialize: opts?.withType ? deserializeScanWithTypesResponse : deserializeScanResponse,
      ...cmdOpts
    });
  }
}, "ScanCommand");
var SCardCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["scard", ...cmd], opts);
  }
}, "SCardCommand");
var ScriptExistsCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(hashes, opts) {
    super(["script", "exists", ...hashes], {
      deserialize: (result) => result,
      ...opts
    });
  }
}, "ScriptExistsCommand");
var ScriptFlushCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([opts], cmdOpts) {
    const cmd = ["script", "flush"];
    if (opts?.sync) {
      cmd.push("sync");
    } else if (opts?.async) {
      cmd.push("async");
    }
    super(cmd, cmdOpts);
  }
}, "ScriptFlushCommand");
var ScriptLoadCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(args, opts) {
    super(["script", "load", ...args], opts);
  }
}, "ScriptLoadCommand");
var SDiffCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sdiff", ...cmd], opts);
  }
}, "SDiffCommand");
var SDiffStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sdiffstore", ...cmd], opts);
  }
}, "SDiffStoreCommand");
var SetCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, value, opts], cmdOpts) {
    const command = ["set", key, value];
    if (opts) {
      if ("nx" in opts && opts.nx) {
        command.push("nx");
      } else if ("xx" in opts && opts.xx) {
        command.push("xx");
      }
      if ("get" in opts && opts.get) {
        command.push("get");
      }
      if ("ex" in opts && typeof opts.ex === "number") {
        command.push("ex", opts.ex);
      } else if ("px" in opts && typeof opts.px === "number") {
        command.push("px", opts.px);
      } else if ("exat" in opts && typeof opts.exat === "number") {
        command.push("exat", opts.exat);
      } else if ("pxat" in opts && typeof opts.pxat === "number") {
        command.push("pxat", opts.pxat);
      } else if ("keepTtl" in opts && opts.keepTtl) {
        command.push("keepTtl");
      }
    }
    super(command, cmdOpts);
  }
}, "SetCommand");
var SetBitCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["setbit", ...cmd], opts);
  }
}, "SetBitCommand");
var SetExCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["setex", ...cmd], opts);
  }
}, "SetExCommand");
var SetNxCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["setnx", ...cmd], opts);
  }
}, "SetNxCommand");
var SetRangeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["setrange", ...cmd], opts);
  }
}, "SetRangeCommand");
var SInterCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sinter", ...cmd], opts);
  }
}, "SInterCommand");
var SInterCardCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, cmdOpts) {
    const [keys, opts] = cmd;
    const command = ["sintercard", keys.length, ...keys];
    if (opts?.limit !== void 0) {
      command.push("LIMIT", opts.limit);
    }
    super(command, cmdOpts);
  }
}, "SInterCardCommand");
var SInterStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sinterstore", ...cmd], opts);
  }
}, "SInterStoreCommand");
var SIsMemberCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sismember", ...cmd], opts);
  }
}, "SIsMemberCommand");
var SMembersCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["smembers", ...cmd], opts);
  }
}, "SMembersCommand");
var SMIsMemberCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["smismember", cmd[0], ...cmd[1]], opts);
  }
}, "SMIsMemberCommand");
var SMoveCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["smove", ...cmd], opts);
  }
}, "SMoveCommand");
var SPopCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, count3], opts) {
    const command = ["spop", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
}, "SPopCommand");
var SRandMemberCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, count3], opts) {
    const command = ["srandmember", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
}, "SRandMemberCommand");
var SRemCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["srem", ...cmd], opts);
  }
}, "SRemCommand");
var SScanCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, cursor, opts], cmdOpts) {
    const command = ["sscan", key, cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...cmdOpts
    });
  }
}, "SScanCommand");
var StrLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["strlen", ...cmd], opts);
  }
}, "StrLenCommand");
var SUnionCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sunion", ...cmd], opts);
  }
}, "SUnionCommand");
var SUnionStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["sunionstore", ...cmd], opts);
  }
}, "SUnionStoreCommand");
var TimeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(opts) {
    super(["time"], opts);
  }
}, "TimeCommand");
var TouchCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["touch", ...cmd], opts);
  }
}, "TouchCommand");
var TtlCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["ttl", ...cmd], opts);
  }
}, "TtlCommand");
var TypeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["type", ...cmd], opts);
  }
}, "TypeCommand");
var UnlinkCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["unlink", ...cmd], opts);
  }
}, "UnlinkCommand");
var XAckCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, group3, id], opts) {
    const ids = Array.isArray(id) ? [...id] : [id];
    super(["XACK", key, group3, ...ids], opts);
  }
}, "XAckCommand");
var XAckDelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, group3, opts, ...ids], cmdOpts) {
    const command = ["XACKDEL", key, group3];
    command.push(opts.toUpperCase(), "IDS", ids.length, ...ids);
    super(command, cmdOpts);
  }
}, "XAckDelCommand");
var XAddCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, id, entries, opts], commandOptions) {
    const command = ["XADD", key];
    if (opts) {
      if (opts.nomkStream) {
        command.push("NOMKSTREAM");
      }
      if (opts.trim) {
        command.push(opts.trim.type, opts.trim.comparison, opts.trim.threshold);
        if (opts.trim.limit !== void 0) {
          command.push("LIMIT", opts.trim.limit);
        }
      }
    }
    command.push(id);
    for (const [k, v] of Object.entries(entries)) {
      command.push(k, v);
    }
    super(command, commandOptions);
  }
}, "XAddCommand");
var XAutoClaim = /* @__PURE__ */ __name(class extends Command {
  constructor([key, group3, consumer, minIdleTime, start, options], opts) {
    const commands = [];
    if (options?.count) {
      commands.push("COUNT", options.count);
    }
    if (options?.justId) {
      commands.push("JUSTID");
    }
    super(["XAUTOCLAIM", key, group3, consumer, minIdleTime, start, ...commands], opts);
  }
}, "XAutoClaim");
var XClaimCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, group3, consumer, minIdleTime, id, options], opts) {
    const ids = Array.isArray(id) ? [...id] : [id];
    const commands = [];
    if (options?.idleMS) {
      commands.push("IDLE", options.idleMS);
    }
    if (options?.idleMS) {
      commands.push("TIME", options.timeMS);
    }
    if (options?.retryCount) {
      commands.push("RETRYCOUNT", options.retryCount);
    }
    if (options?.force) {
      commands.push("FORCE");
    }
    if (options?.justId) {
      commands.push("JUSTID");
    }
    if (options?.lastId) {
      commands.push("LASTID", options.lastId);
    }
    super(["XCLAIM", key, group3, consumer, minIdleTime, ...ids, ...commands], opts);
  }
}, "XClaimCommand");
var XDelCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, ids], opts) {
    const cmds = Array.isArray(ids) ? [...ids] : [ids];
    super(["XDEL", key, ...cmds], opts);
  }
}, "XDelCommand");
var XDelExCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, opts, ...ids], cmdOpts) {
    const command = ["XDELEX", key];
    if (opts) {
      command.push(opts.toUpperCase());
    }
    command.push("IDS", ids.length, ...ids);
    super(command, cmdOpts);
  }
}, "XDelExCommand");
var XGroupCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, opts], commandOptions) {
    const command = ["XGROUP"];
    switch (opts.type) {
      case "CREATE": {
        command.push("CREATE", key, opts.group, opts.id);
        if (opts.options) {
          if (opts.options.MKSTREAM) {
            command.push("MKSTREAM");
          }
          if (opts.options.ENTRIESREAD !== void 0) {
            command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
          }
        }
        break;
      }
      case "CREATECONSUMER": {
        command.push("CREATECONSUMER", key, opts.group, opts.consumer);
        break;
      }
      case "DELCONSUMER": {
        command.push("DELCONSUMER", key, opts.group, opts.consumer);
        break;
      }
      case "DESTROY": {
        command.push("DESTROY", key, opts.group);
        break;
      }
      case "SETID": {
        command.push("SETID", key, opts.group, opts.id);
        if (opts.options?.ENTRIESREAD !== void 0) {
          command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
        }
        break;
      }
      default: {
        throw new Error("Invalid XGROUP");
      }
    }
    super(command, commandOptions);
  }
}, "XGroupCommand");
var XInfoCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, options], opts) {
    const cmds = [];
    if (options.type === "CONSUMERS") {
      cmds.push("CONSUMERS", key, options.group);
    } else {
      cmds.push("GROUPS", key);
    }
    super(["XINFO", ...cmds], opts);
  }
}, "XInfoCommand");
var XLenCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["XLEN", ...cmd], opts);
  }
}, "XLenCommand");
var XPendingCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, group3, start, end, count3, options], opts) {
    const consumers = options?.consumer === void 0 ? [] : Array.isArray(options.consumer) ? [...options.consumer] : [options.consumer];
    super(
      [
        "XPENDING",
        key,
        group3,
        ...options?.idleTime ? ["IDLE", options.idleTime] : [],
        start,
        end,
        count3,
        ...consumers
      ],
      opts
    );
  }
}, "XPendingCommand");
function deserialize6(result) {
  const obj = {};
  for (const e of result) {
    for (let i = 0; i < e.length; i += 2) {
      const streamId = e[i];
      const entries = e[i + 1];
      if (!(streamId in obj)) {
        obj[streamId] = {};
      }
      for (let j = 0; j < entries.length; j += 2) {
        const field = entries[j];
        const value = entries[j + 1];
        try {
          obj[streamId][field] = JSON.parse(value);
        } catch {
          obj[streamId][field] = value;
        }
      }
    }
  }
  return obj;
}
__name(deserialize6, "deserialize6");
var XRangeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, start, end, count3], opts) {
    const command = ["XRANGE", key, start, end];
    if (typeof count3 === "number") {
      command.push("COUNT", count3);
    }
    super(command, {
      deserialize: (result) => deserialize6(result),
      ...opts
    });
  }
}, "XRangeCommand");
var UNBALANCED_XREAD_ERR = "ERR Unbalanced XREAD list of streams: for each stream key an ID or '$' must be specified";
var XReadCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, id, options], opts) {
    if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
      throw new Error(UNBALANCED_XREAD_ERR);
    }
    const commands = [];
    if (typeof options?.count === "number") {
      commands.push("COUNT", options.count);
    }
    if (typeof options?.blockMS === "number") {
      commands.push("BLOCK", options.blockMS);
    }
    commands.push(
      "STREAMS",
      ...Array.isArray(key) ? [...key] : [key],
      ...Array.isArray(id) ? [...id] : [id]
    );
    super(["XREAD", ...commands], opts);
  }
}, "XReadCommand");
var UNBALANCED_XREADGROUP_ERR = "ERR Unbalanced XREADGROUP list of streams: for each stream key an ID or '$' must be specified";
var XReadGroupCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([group3, consumer, key, id, options], opts) {
    if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
      throw new Error(UNBALANCED_XREADGROUP_ERR);
    }
    const commands = [];
    if (typeof options?.count === "number") {
      commands.push("COUNT", options.count);
    }
    if (typeof options?.blockMS === "number") {
      commands.push("BLOCK", options.blockMS);
    }
    if (typeof options?.NOACK === "boolean" && options.NOACK) {
      commands.push("NOACK");
    }
    commands.push(
      "STREAMS",
      ...Array.isArray(key) ? [...key] : [key],
      ...Array.isArray(id) ? [...id] : [id]
    );
    super(["XREADGROUP", "GROUP", group3, consumer, ...commands], opts);
  }
}, "XReadGroupCommand");
var XRevRangeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, end, start, count3], opts) {
    const command = ["XREVRANGE", key, end, start];
    if (typeof count3 === "number") {
      command.push("COUNT", count3);
    }
    super(command, {
      deserialize: (result) => deserialize7(result),
      ...opts
    });
  }
}, "XRevRangeCommand");
function deserialize7(result) {
  const obj = {};
  for (const e of result) {
    for (let i = 0; i < e.length; i += 2) {
      const streamId = e[i];
      const entries = e[i + 1];
      if (!(streamId in obj)) {
        obj[streamId] = {};
      }
      for (let j = 0; j < entries.length; j += 2) {
        const field = entries[j];
        const value = entries[j + 1];
        try {
          obj[streamId][field] = JSON.parse(value);
        } catch {
          obj[streamId][field] = value;
        }
      }
    }
  }
  return obj;
}
__name(deserialize7, "deserialize7");
var XTrimCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, options], opts) {
    const { limit, strategy, threshold, exactness = "~" } = options;
    super(["XTRIM", key, strategy, exactness, threshold, ...limit ? ["LIMIT", limit] : []], opts);
  }
}, "XTrimCommand");
var ZAddCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, arg1, ...arg2], opts) {
    const command = ["zadd", key];
    if ("nx" in arg1 && arg1.nx) {
      command.push("nx");
    } else if ("xx" in arg1 && arg1.xx) {
      command.push("xx");
    }
    if ("ch" in arg1 && arg1.ch) {
      command.push("ch");
    }
    if ("incr" in arg1 && arg1.incr) {
      command.push("incr");
    }
    if ("lt" in arg1 && arg1.lt) {
      command.push("lt");
    } else if ("gt" in arg1 && arg1.gt) {
      command.push("gt");
    }
    if ("score" in arg1 && "member" in arg1) {
      command.push(arg1.score, arg1.member);
    }
    command.push(...arg2.flatMap(({ score, member }) => [score, member]));
    super(command, opts);
  }
}, "ZAddCommand");
var ZCardCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zcard", ...cmd], opts);
  }
}, "ZCardCommand");
var ZCountCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zcount", ...cmd], opts);
  }
}, "ZCountCommand");
var ZIncrByCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zincrby", ...cmd], opts);
  }
}, "ZIncrByCommand");
var ZInterStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([destination, numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zinterstore", destination, numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
    }
    super(command, cmdOpts);
  }
}, "ZInterStoreCommand");
var ZLexCountCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zlexcount", ...cmd], opts);
  }
}, "ZLexCountCommand");
var ZPopMaxCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, count3], opts) {
    const command = ["zpopmax", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
}, "ZPopMaxCommand");
var ZPopMinCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, count3], opts) {
    const command = ["zpopmin", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
}, "ZPopMinCommand");
var ZRangeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, min, max, opts], cmdOpts) {
    const command = ["zrange", key, min, max];
    if (opts?.byScore) {
      command.push("byscore");
    }
    if (opts?.byLex) {
      command.push("bylex");
    }
    if (opts?.rev) {
      command.push("rev");
    }
    if (opts?.count !== void 0 && opts.offset !== void 0) {
      command.push("limit", opts.offset, opts.count);
    }
    if (opts?.withScores) {
      command.push("withscores");
    }
    super(command, cmdOpts);
  }
}, "ZRangeCommand");
var ZRankCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zrank", ...cmd], opts);
  }
}, "ZRankCommand");
var ZRemCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zrem", ...cmd], opts);
  }
}, "ZRemCommand");
var ZRemRangeByLexCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zremrangebylex", ...cmd], opts);
  }
}, "ZRemRangeByLexCommand");
var ZRemRangeByRankCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zremrangebyrank", ...cmd], opts);
  }
}, "ZRemRangeByRankCommand");
var ZRemRangeByScoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zremrangebyscore", ...cmd], opts);
  }
}, "ZRemRangeByScoreCommand");
var ZRevRankCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zrevrank", ...cmd], opts);
  }
}, "ZRevRankCommand");
var ZScanCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([key, cursor, opts], cmdOpts) {
    const command = ["zscan", key, cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...cmdOpts
    });
  }
}, "ZScanCommand");
var ZScoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zscore", ...cmd], opts);
  }
}, "ZScoreCommand");
var ZUnionCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zunion", numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
      if (opts.withScores) {
        command.push("withscores");
      }
    }
    super(command, cmdOpts);
  }
}, "ZUnionCommand");
var ZUnionStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor([destination, numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zunionstore", destination, numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
    }
    super(command, cmdOpts);
  }
}, "ZUnionStoreCommand");
var ZDiffStoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    super(["zdiffstore", ...cmd], opts);
  }
}, "ZDiffStoreCommand");
var ZMScoreCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const [key, members] = cmd;
    super(["zmscore", key, ...members], opts);
  }
}, "ZMScoreCommand");
var Pipeline = /* @__PURE__ */ __name(class {
  client;
  commands;
  commandOptions;
  multiExec;
  constructor(opts) {
    this.client = opts.client;
    this.commands = [];
    this.commandOptions = opts.commandOptions;
    this.multiExec = opts.multiExec ?? false;
    if (this.commandOptions?.latencyLogging) {
      const originalExec = this.exec.bind(this);
      this.exec = async (options) => {
        const start = performance.now();
        const result = await (options ? originalExec(options) : originalExec());
        const end = performance.now();
        const loggerResult = (end - start).toFixed(2);
        console.log(
          `Latency for \x1B[38;2;19;185;39m${this.multiExec ? ["MULTI-EXEC"] : ["PIPELINE"].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`
        );
        return result;
      };
    }
  }
  exec = async (options) => {
    if (this.commands.length === 0) {
      throw new Error("Pipeline is empty");
    }
    const path = this.multiExec ? ["multi-exec"] : ["pipeline"];
    const res = await this.client.request({
      path,
      body: Object.values(this.commands).map((c) => c.command)
    });
    return options?.keepErrors ? res.map(({ error: error4, result }, i) => {
      return {
        error: error4,
        result: this.commands[i].deserialize(result)
      };
    }) : res.map(({ error: error4, result }, i) => {
      if (error4) {
        throw new UpstashError(
          `Command ${i + 1} [ ${this.commands[i].command[0]} ] failed: ${error4}`
        );
      }
      return this.commands[i].deserialize(result);
    });
  };
  /**
   * Returns the length of pipeline before the execution
   */
  length() {
    return this.commands.length;
  }
  /**
   * Pushes a command into the pipeline and returns a chainable instance of the
   * pipeline
   */
  chain(command) {
    this.commands.push(command);
    return this;
  }
  /**
   * @see https://redis.io/commands/append
   */
  append = (...args) => this.chain(new AppendCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/bitcount
   */
  bitcount = (...args) => this.chain(new BitCountCommand(args, this.commandOptions));
  /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.pipeline()
   *   .bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [[0, 1]]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */
  bitfield = (...args) => new BitFieldCommand(args, this.client, this.commandOptions, this.chain.bind(this));
  /**
   * @see https://redis.io/commands/bitop
   */
  bitop = (op, destinationKey, sourceKey, ...sourceKeys) => this.chain(
    new BitOpCommand([op, destinationKey, sourceKey, ...sourceKeys], this.commandOptions)
  );
  /**
   * @see https://redis.io/commands/bitpos
   */
  bitpos = (...args) => this.chain(new BitPosCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/client-setinfo
   */
  clientSetinfo = (...args) => this.chain(new ClientSetInfoCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/copy
   */
  copy = (...args) => this.chain(new CopyCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zdiffstore
   */
  zdiffstore = (...args) => this.chain(new ZDiffStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/dbsize
   */
  dbsize = () => this.chain(new DBSizeCommand(this.commandOptions));
  /**
   * @see https://redis.io/commands/decr
   */
  decr = (...args) => this.chain(new DecrCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/decrby
   */
  decrby = (...args) => this.chain(new DecrByCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/del
   */
  del = (...args) => this.chain(new DelCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/echo
   */
  echo = (...args) => this.chain(new EchoCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/eval_ro
   */
  evalRo = (...args) => this.chain(new EvalROCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/eval
   */
  eval = (...args) => this.chain(new EvalCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/evalsha_ro
   */
  evalshaRo = (...args) => this.chain(new EvalshaROCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/evalsha
   */
  evalsha = (...args) => this.chain(new EvalshaCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/exists
   */
  exists = (...args) => this.chain(new ExistsCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/expire
   */
  expire = (...args) => this.chain(new ExpireCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/expireat
   */
  expireat = (...args) => this.chain(new ExpireAtCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/flushall
   */
  flushall = (args) => this.chain(new FlushAllCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/flushdb
   */
  flushdb = (...args) => this.chain(new FlushDBCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/geoadd
   */
  geoadd = (...args) => this.chain(new GeoAddCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/geodist
   */
  geodist = (...args) => this.chain(new GeoDistCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/geopos
   */
  geopos = (...args) => this.chain(new GeoPosCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/geohash
   */
  geohash = (...args) => this.chain(new GeoHashCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/geosearch
   */
  geosearch = (...args) => this.chain(new GeoSearchCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/geosearchstore
   */
  geosearchstore = (...args) => this.chain(new GeoSearchStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/get
   */
  get = (...args) => this.chain(new GetCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/getbit
   */
  getbit = (...args) => this.chain(new GetBitCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/getdel
   */
  getdel = (...args) => this.chain(new GetDelCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/getex
   */
  getex = (...args) => this.chain(new GetExCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/getrange
   */
  getrange = (...args) => this.chain(new GetRangeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/getset
   */
  getset = (key, value) => this.chain(new GetSetCommand([key, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/hdel
   */
  hdel = (...args) => this.chain(new HDelCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hexists
   */
  hexists = (...args) => this.chain(new HExistsCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hexpire
   */
  hexpire = (...args) => this.chain(new HExpireCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hexpireat
   */
  hexpireat = (...args) => this.chain(new HExpireAtCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hexpiretime
   */
  hexpiretime = (...args) => this.chain(new HExpireTimeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/httl
   */
  httl = (...args) => this.chain(new HTtlCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hpexpire
   */
  hpexpire = (...args) => this.chain(new HPExpireCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hpexpireat
   */
  hpexpireat = (...args) => this.chain(new HPExpireAtCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hpexpiretime
   */
  hpexpiretime = (...args) => this.chain(new HPExpireTimeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hpttl
   */
  hpttl = (...args) => this.chain(new HPTtlCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hpersist
   */
  hpersist = (...args) => this.chain(new HPersistCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hget
   */
  hget = (...args) => this.chain(new HGetCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hgetall
   */
  hgetall = (...args) => this.chain(new HGetAllCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hgetdel
   */
  hgetdel = (...args) => this.chain(new HGetDelCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hgetex
   */
  hgetex = (...args) => this.chain(new HGetExCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hincrby
   */
  hincrby = (...args) => this.chain(new HIncrByCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hincrbyfloat
   */
  hincrbyfloat = (...args) => this.chain(new HIncrByFloatCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hkeys
   */
  hkeys = (...args) => this.chain(new HKeysCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hlen
   */
  hlen = (...args) => this.chain(new HLenCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hmget
   */
  hmget = (...args) => this.chain(new HMGetCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hmset
   */
  hmset = (key, kv) => this.chain(new HMSetCommand([key, kv], this.commandOptions));
  /**
   * @see https://redis.io/commands/hrandfield
   */
  hrandfield = (key, count3, withValues) => this.chain(new HRandFieldCommand([key, count3, withValues], this.commandOptions));
  /**
   * @see https://redis.io/commands/hscan
   */
  hscan = (...args) => this.chain(new HScanCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hset
   */
  hset = (key, kv) => this.chain(new HSetCommand([key, kv], this.commandOptions));
  /**
   * @see https://redis.io/commands/hsetex
   */
  hsetex = (...args) => this.chain(new HSetExCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hsetnx
   */
  hsetnx = (key, field, value) => this.chain(new HSetNXCommand([key, field, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/hstrlen
   */
  hstrlen = (...args) => this.chain(new HStrLenCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/hvals
   */
  hvals = (...args) => this.chain(new HValsCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/incr
   */
  incr = (...args) => this.chain(new IncrCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/incrby
   */
  incrby = (...args) => this.chain(new IncrByCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/incrbyfloat
   */
  incrbyfloat = (...args) => this.chain(new IncrByFloatCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/keys
   */
  keys = (...args) => this.chain(new KeysCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lindex
   */
  lindex = (...args) => this.chain(new LIndexCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/linsert
   */
  linsert = (key, direction, pivot, value) => this.chain(new LInsertCommand([key, direction, pivot, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/llen
   */
  llen = (...args) => this.chain(new LLenCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lmove
   */
  lmove = (...args) => this.chain(new LMoveCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lpop
   */
  lpop = (...args) => this.chain(new LPopCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lmpop
   */
  lmpop = (...args) => this.chain(new LmPopCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lpos
   */
  lpos = (...args) => this.chain(new LPosCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lpush
   */
  lpush = (key, ...elements) => this.chain(new LPushCommand([key, ...elements], this.commandOptions));
  /**
   * @see https://redis.io/commands/lpushx
   */
  lpushx = (key, ...elements) => this.chain(new LPushXCommand([key, ...elements], this.commandOptions));
  /**
   * @see https://redis.io/commands/lrange
   */
  lrange = (...args) => this.chain(new LRangeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/lrem
   */
  lrem = (key, count3, value) => this.chain(new LRemCommand([key, count3, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/lset
   */
  lset = (key, index, value) => this.chain(new LSetCommand([key, index, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/ltrim
   */
  ltrim = (...args) => this.chain(new LTrimCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/mget
   */
  mget = (...args) => this.chain(new MGetCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/mset
   */
  mset = (kv) => this.chain(new MSetCommand([kv], this.commandOptions));
  /**
   * @see https://redis.io/commands/msetnx
   */
  msetnx = (kv) => this.chain(new MSetNXCommand([kv], this.commandOptions));
  /**
   * @see https://redis.io/commands/persist
   */
  persist = (...args) => this.chain(new PersistCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/pexpire
   */
  pexpire = (...args) => this.chain(new PExpireCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/pexpireat
   */
  pexpireat = (...args) => this.chain(new PExpireAtCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/pfadd
   */
  pfadd = (...args) => this.chain(new PfAddCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/pfcount
   */
  pfcount = (...args) => this.chain(new PfCountCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/pfmerge
   */
  pfmerge = (...args) => this.chain(new PfMergeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/ping
   */
  ping = (args) => this.chain(new PingCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/psetex
   */
  psetex = (key, ttl, value) => this.chain(new PSetEXCommand([key, ttl, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/pttl
   */
  pttl = (...args) => this.chain(new PTtlCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/publish
   */
  publish = (...args) => this.chain(new PublishCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/randomkey
   */
  randomkey = () => this.chain(new RandomKeyCommand(this.commandOptions));
  /**
   * @see https://redis.io/commands/rename
   */
  rename = (...args) => this.chain(new RenameCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/renamenx
   */
  renamenx = (...args) => this.chain(new RenameNXCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/rpop
   */
  rpop = (...args) => this.chain(new RPopCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/rpush
   */
  rpush = (key, ...elements) => this.chain(new RPushCommand([key, ...elements], this.commandOptions));
  /**
   * @see https://redis.io/commands/rpushx
   */
  rpushx = (key, ...elements) => this.chain(new RPushXCommand([key, ...elements], this.commandOptions));
  /**
   * @see https://redis.io/commands/sadd
   */
  sadd = (key, member, ...members) => this.chain(new SAddCommand([key, member, ...members], this.commandOptions));
  /**
   * @see https://redis.io/commands/scan
   */
  scan = (...args) => this.chain(new ScanCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/scard
   */
  scard = (...args) => this.chain(new SCardCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/script-exists
   */
  scriptExists = (...args) => this.chain(new ScriptExistsCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/script-flush
   */
  scriptFlush = (...args) => this.chain(new ScriptFlushCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/script-load
   */
  scriptLoad = (...args) => this.chain(new ScriptLoadCommand(args, this.commandOptions));
  /*)*
   * @see https://redis.io/commands/sdiff
   */
  sdiff = (...args) => this.chain(new SDiffCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sdiffstore
   */
  sdiffstore = (...args) => this.chain(new SDiffStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/set
   */
  set = (key, value, opts) => this.chain(new SetCommand([key, value, opts], this.commandOptions));
  /**
   * @see https://redis.io/commands/setbit
   */
  setbit = (...args) => this.chain(new SetBitCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/setex
   */
  setex = (key, ttl, value) => this.chain(new SetExCommand([key, ttl, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/setnx
   */
  setnx = (key, value) => this.chain(new SetNxCommand([key, value], this.commandOptions));
  /**
   * @see https://redis.io/commands/setrange
   */
  setrange = (...args) => this.chain(new SetRangeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sinter
   */
  sinter = (...args) => this.chain(new SInterCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sintercard
   */
  sintercard = (...args) => this.chain(new SInterCardCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sinterstore
   */
  sinterstore = (...args) => this.chain(new SInterStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sismember
   */
  sismember = (key, member) => this.chain(new SIsMemberCommand([key, member], this.commandOptions));
  /**
   * @see https://redis.io/commands/smembers
   */
  smembers = (...args) => this.chain(new SMembersCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/smismember
   */
  smismember = (key, members) => this.chain(new SMIsMemberCommand([key, members], this.commandOptions));
  /**
   * @see https://redis.io/commands/smove
   */
  smove = (source, destination, member) => this.chain(new SMoveCommand([source, destination, member], this.commandOptions));
  /**
   * @see https://redis.io/commands/spop
   */
  spop = (...args) => this.chain(new SPopCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/srandmember
   */
  srandmember = (...args) => this.chain(new SRandMemberCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/srem
   */
  srem = (key, ...members) => this.chain(new SRemCommand([key, ...members], this.commandOptions));
  /**
   * @see https://redis.io/commands/sscan
   */
  sscan = (...args) => this.chain(new SScanCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/strlen
   */
  strlen = (...args) => this.chain(new StrLenCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sunion
   */
  sunion = (...args) => this.chain(new SUnionCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/sunionstore
   */
  sunionstore = (...args) => this.chain(new SUnionStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/time
   */
  time = () => this.chain(new TimeCommand(this.commandOptions));
  /**
   * @see https://redis.io/commands/touch
   */
  touch = (...args) => this.chain(new TouchCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/ttl
   */
  ttl = (...args) => this.chain(new TtlCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/type
   */
  type = (...args) => this.chain(new TypeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/unlink
   */
  unlink = (...args) => this.chain(new UnlinkCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zadd
   */
  zadd = (...args) => {
    if ("score" in args[1]) {
      return this.chain(
        new ZAddCommand([args[0], args[1], ...args.slice(2)], this.commandOptions)
      );
    }
    return this.chain(
      new ZAddCommand(
        [args[0], args[1], ...args.slice(2)],
        this.commandOptions
      )
    );
  };
  /**
   * @see https://redis.io/commands/xadd
   */
  xadd = (...args) => this.chain(new XAddCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xack
   */
  xack = (...args) => this.chain(new XAckCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xackdel
   */
  xackdel = (...args) => this.chain(new XAckDelCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xdel
   */
  xdel = (...args) => this.chain(new XDelCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xdelex
   */
  xdelex = (...args) => this.chain(new XDelExCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xgroup
   */
  xgroup = (...args) => this.chain(new XGroupCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xread
   */
  xread = (...args) => this.chain(new XReadCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xreadgroup
   */
  xreadgroup = (...args) => this.chain(new XReadGroupCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xinfo
   */
  xinfo = (...args) => this.chain(new XInfoCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xlen
   */
  xlen = (...args) => this.chain(new XLenCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xpending
   */
  xpending = (...args) => this.chain(new XPendingCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xclaim
   */
  xclaim = (...args) => this.chain(new XClaimCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xautoclaim
   */
  xautoclaim = (...args) => this.chain(new XAutoClaim(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xtrim
   */
  xtrim = (...args) => this.chain(new XTrimCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xrange
   */
  xrange = (...args) => this.chain(new XRangeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/xrevrange
   */
  xrevrange = (...args) => this.chain(new XRevRangeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zcard
   */
  zcard = (...args) => this.chain(new ZCardCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zcount
   */
  zcount = (...args) => this.chain(new ZCountCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zincrby
   */
  zincrby = (key, increment, member) => this.chain(new ZIncrByCommand([key, increment, member], this.commandOptions));
  /**
   * @see https://redis.io/commands/zinterstore
   */
  zinterstore = (...args) => this.chain(new ZInterStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zlexcount
   */
  zlexcount = (...args) => this.chain(new ZLexCountCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zmscore
   */
  zmscore = (...args) => this.chain(new ZMScoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zpopmax
   */
  zpopmax = (...args) => this.chain(new ZPopMaxCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zpopmin
   */
  zpopmin = (...args) => this.chain(new ZPopMinCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zrange
   */
  zrange = (...args) => this.chain(new ZRangeCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zrank
   */
  zrank = (key, member) => this.chain(new ZRankCommand([key, member], this.commandOptions));
  /**
   * @see https://redis.io/commands/zrem
   */
  zrem = (key, ...members) => this.chain(new ZRemCommand([key, ...members], this.commandOptions));
  /**
   * @see https://redis.io/commands/zremrangebylex
   */
  zremrangebylex = (...args) => this.chain(new ZRemRangeByLexCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zremrangebyrank
   */
  zremrangebyrank = (...args) => this.chain(new ZRemRangeByRankCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zremrangebyscore
   */
  zremrangebyscore = (...args) => this.chain(new ZRemRangeByScoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zrevrank
   */
  zrevrank = (key, member) => this.chain(new ZRevRankCommand([key, member], this.commandOptions));
  /**
   * @see https://redis.io/commands/zscan
   */
  zscan = (...args) => this.chain(new ZScanCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zscore
   */
  zscore = (key, member) => this.chain(new ZScoreCommand([key, member], this.commandOptions));
  /**
   * @see https://redis.io/commands/zunionstore
   */
  zunionstore = (...args) => this.chain(new ZUnionStoreCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/zunion
   */
  zunion = (...args) => this.chain(new ZUnionCommand(args, this.commandOptions));
  /**
   * @see https://redis.io/commands/?group=json
   */
  get json() {
    return {
      /**
       * @see https://redis.io/commands/json.arrappend
       */
      arrappend: (...args) => this.chain(new JsonArrAppendCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.arrindex
       */
      arrindex: (...args) => this.chain(new JsonArrIndexCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.arrinsert
       */
      arrinsert: (...args) => this.chain(new JsonArrInsertCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.arrlen
       */
      arrlen: (...args) => this.chain(new JsonArrLenCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.arrpop
       */
      arrpop: (...args) => this.chain(new JsonArrPopCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.arrtrim
       */
      arrtrim: (...args) => this.chain(new JsonArrTrimCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.clear
       */
      clear: (...args) => this.chain(new JsonClearCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.del
       */
      del: (...args) => this.chain(new JsonDelCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.forget
       */
      forget: (...args) => this.chain(new JsonForgetCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.get
       */
      get: (...args) => this.chain(new JsonGetCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.merge
       */
      merge: (...args) => this.chain(new JsonMergeCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.mget
       */
      mget: (...args) => this.chain(new JsonMGetCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.mset
       */
      mset: (...args) => this.chain(new JsonMSetCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.numincrby
       */
      numincrby: (...args) => this.chain(new JsonNumIncrByCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.nummultby
       */
      nummultby: (...args) => this.chain(new JsonNumMultByCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.objkeys
       */
      objkeys: (...args) => this.chain(new JsonObjKeysCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.objlen
       */
      objlen: (...args) => this.chain(new JsonObjLenCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.resp
       */
      resp: (...args) => this.chain(new JsonRespCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.set
       */
      set: (...args) => this.chain(new JsonSetCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.strappend
       */
      strappend: (...args) => this.chain(new JsonStrAppendCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.strlen
       */
      strlen: (...args) => this.chain(new JsonStrLenCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.toggle
       */
      toggle: (...args) => this.chain(new JsonToggleCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/commands/json.type
       */
      type: (...args) => this.chain(new JsonTypeCommand(args, this.commandOptions))
    };
  }
  get functions() {
    return {
      /**
       * @see https://redis.io/docs/latest/commands/function-load/
       */
      load: (...args) => this.chain(new FunctionLoadCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/docs/latest/commands/function-list/
       */
      list: (...args) => this.chain(new FunctionListCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/docs/latest/commands/function-delete/
       */
      delete: (...args) => this.chain(new FunctionDeleteCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/docs/latest/commands/function-flush/
       */
      flush: () => this.chain(new FunctionFlushCommand(this.commandOptions)),
      /**
       * @see https://redis.io/docs/latest/commands/function-stats/
       */
      stats: () => this.chain(new FunctionStatsCommand(this.commandOptions)),
      /**
       * @see https://redis.io/docs/latest/commands/fcall/
       */
      call: (...args) => this.chain(new FCallCommand(args, this.commandOptions)),
      /**
       * @see https://redis.io/docs/latest/commands/fcall_ro/
       */
      callRo: (...args) => this.chain(new FCallRoCommand(args, this.commandOptions))
    };
  }
}, "Pipeline");
var MAX_PIPELINE_SIZE = 1e3;
var READ_COMMANDS = /* @__PURE__ */ new Set([
  // String
  "get",
  "getrange",
  "mget",
  "strlen",
  // Bit
  "bitcount",
  "bitpos",
  "getbit",
  // Hash
  "hexists",
  "hget",
  "hgetall",
  "hkeys",
  "hlen",
  "hmget",
  "hrandfield",
  "hscan",
  "hstrlen",
  "httl",
  "hvals",
  "hexpiretime",
  "hpexpiretime",
  "hpttl",
  // List
  "lindex",
  "llen",
  "lpos",
  "lrange",
  // Set
  "scard",
  "sdiff",
  "sinter",
  "sintercard",
  "sismember",
  "smembers",
  "smismember",
  "srandmember",
  "sscan",
  "sunion",
  // Sorted set
  "zcard",
  "zcount",
  "zlexcount",
  "zmscore",
  "zrange",
  "zrank",
  "zrevrank",
  "zscan",
  "zscore",
  "zunion",
  // Key metadata
  "exists",
  "type",
  "ttl",
  "pttl",
  "randomkey",
  "touch",
  // HyperLogLog
  "pfcount",
  // Stream
  "xinfo",
  "xlen",
  "xpending",
  "xrange",
  "xread",
  "xrevrange",
  // Geo
  "geodist",
  "geohash",
  "geopos",
  "geosearch",
  // Script / eval
  "scriptExists",
  "evalRo",
  "evalshaRo",
  // Utility
  "dbsize",
  "echo",
  "ping",
  "time",
  "scan",
  "keys",
  // JSON namespace
  "arrindex",
  "arrlen",
  "objkeys",
  "objlen",
  "resp",
  // Functions namespace
  "list",
  "stats",
  "callRo"
]);
var EXCLUDE_COMMANDS = /* @__PURE__ */ new Set([
  "scan",
  "keys",
  "flushdb",
  "flushall",
  "dbsize",
  "hscan",
  "hgetall",
  "hkeys",
  "lrange",
  "sscan",
  "smembers",
  "xrange",
  "xrevrange",
  "zscan",
  "zrange",
  "exec"
]);
function createAutoPipelineProxy(_redis, namespace = "root") {
  const redis = _redis;
  if (!redis.autoPipelineExecutor) {
    redis.autoPipelineExecutor = new AutoPipelineExecutor(redis);
  }
  return new Proxy(redis, {
    get: (redis2, command) => {
      if (command === "pipelineCounter") {
        return redis2.autoPipelineExecutor.pipelineCounter;
      }
      if (namespace === "root" && command === "json") {
        return createAutoPipelineProxy(redis2, "json");
      }
      if (namespace === "root" && command === "functions") {
        return createAutoPipelineProxy(redis2, "functions");
      }
      if (namespace === "root") {
        const commandInRedisButNotPipeline = command in redis2 && !(command in redis2.autoPipelineExecutor.pipeline);
        const isCommandExcluded = EXCLUDE_COMMANDS.has(command);
        if (commandInRedisButNotPipeline || isCommandExcluded) {
          return redis2[command];
        }
      }
      const pipeline = redis2.autoPipelineExecutor.pipeline;
      const targetFunction = namespace === "json" ? pipeline.json[command] : namespace === "functions" ? pipeline.functions[command] : pipeline[command];
      const isFunction = typeof targetFunction === "function";
      if (isFunction) {
        return (...args) => {
          const commandMode = READ_COMMANDS.has(command) ? "read" : "write";
          return redis2.autoPipelineExecutor.withAutoPipeline(commandMode, (pipeline2) => {
            const targetFunction2 = namespace === "json" ? pipeline2.json[command] : namespace === "functions" ? pipeline2.functions[command] : pipeline2[command];
            targetFunction2(...args);
          });
        };
      }
      return targetFunction;
    }
  });
}
__name(createAutoPipelineProxy, "createAutoPipelineProxy");
var AutoPipelineExecutor = /* @__PURE__ */ __name(class {
  pipelinePromises = /* @__PURE__ */ new WeakMap();
  activeReadPipeline = null;
  activeWritePipeline = null;
  readIndex = 0;
  writeIndex = 0;
  redis;
  pipeline;
  // only to make sure that proxy can work
  pipelineCounter = 0;
  // to keep track of how many times a pipeline was executed
  constructor(redis) {
    this.redis = redis;
    this.pipeline = redis.pipeline();
  }
  async withAutoPipeline(commandMode, executeWithPipeline) {
    const isRead = commandMode === "read";
    const activePipeline = isRead ? this.activeReadPipeline : this.activeWritePipeline;
    const pipeline = activePipeline ?? this.redis.pipeline();
    if (!activePipeline) {
      if (isRead) {
        this.activeReadPipeline = pipeline;
        this.readIndex = 0;
      } else {
        this.activeWritePipeline = pipeline;
        this.writeIndex = 0;
      }
    }
    const index = isRead ? this.readIndex++ : this.writeIndex++;
    executeWithPipeline(pipeline);
    if (isRead && this.readIndex >= MAX_PIPELINE_SIZE) {
      this.activeReadPipeline = null;
    } else if (!isRead && this.writeIndex >= MAX_PIPELINE_SIZE) {
      this.activeWritePipeline = null;
    }
    const pipelineDone = this.deferExecution().then(() => {
      if (!this.pipelinePromises.has(pipeline)) {
        const pipelinePromise = pipeline.exec({ keepErrors: true });
        this.pipelineCounter += 1;
        this.pipelinePromises.set(pipeline, pipelinePromise);
        if (this.activeReadPipeline === pipeline) {
          this.activeReadPipeline = null;
        }
        if (this.activeWritePipeline === pipeline) {
          this.activeWritePipeline = null;
        }
      }
      return this.pipelinePromises.get(pipeline);
    });
    const results = await pipelineDone;
    const commandResult = results[index];
    if (commandResult.error) {
      throw new UpstashError(`Command failed: ${commandResult.error}`);
    }
    return commandResult.result;
  }
  async deferExecution() {
    await Promise.resolve();
    await Promise.resolve();
  }
}, "AutoPipelineExecutor");
var PSubscribeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const sseHeaders = {
      Accept: "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    };
    super([], {
      ...opts,
      headers: sseHeaders,
      path: ["psubscribe", ...cmd],
      streamOptions: {
        isStreaming: true,
        onMessage: opts?.streamOptions?.onMessage,
        signal: opts?.streamOptions?.signal
      }
    });
  }
}, "PSubscribeCommand");
var Subscriber = /* @__PURE__ */ __name(class extends EventTarget {
  subscriptions;
  client;
  listeners;
  opts;
  constructor(client, channels, isPattern = false, opts) {
    super();
    this.client = client;
    this.subscriptions = /* @__PURE__ */ new Map();
    this.listeners = /* @__PURE__ */ new Map();
    this.opts = opts;
    for (const channel2 of channels) {
      if (isPattern) {
        this.subscribeToPattern(channel2);
      } else {
        this.subscribeToChannel(channel2);
      }
    }
  }
  subscribeToChannel(channel2) {
    const controller = new AbortController();
    const command = new SubscribeCommand([channel2], {
      streamOptions: {
        signal: controller.signal,
        onMessage: (data) => this.handleMessage(data, false)
      }
    });
    command.exec(this.client).catch((error4) => {
      if (error4.name !== "AbortError") {
        this.dispatchToListeners("error", error4);
      }
    });
    this.subscriptions.set(channel2, {
      command,
      controller,
      isPattern: false
    });
  }
  subscribeToPattern(pattern) {
    const controller = new AbortController();
    const command = new PSubscribeCommand([pattern], {
      streamOptions: {
        signal: controller.signal,
        onMessage: (data) => this.handleMessage(data, true)
      }
    });
    command.exec(this.client).catch((error4) => {
      if (error4.name !== "AbortError") {
        this.dispatchToListeners("error", error4);
      }
    });
    this.subscriptions.set(pattern, {
      command,
      controller,
      isPattern: true
    });
  }
  handleMessage(data, isPattern) {
    const messageData = data.replace(/^data:\s*/, "");
    const firstCommaIndex = messageData.indexOf(",");
    const secondCommaIndex = messageData.indexOf(",", firstCommaIndex + 1);
    const thirdCommaIndex = isPattern ? messageData.indexOf(",", secondCommaIndex + 1) : -1;
    if (firstCommaIndex !== -1 && secondCommaIndex !== -1) {
      const type = messageData.slice(0, firstCommaIndex);
      if (isPattern && type === "pmessage" && thirdCommaIndex !== -1) {
        const pattern = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
        const channel2 = messageData.slice(secondCommaIndex + 1, thirdCommaIndex);
        const messageStr = messageData.slice(thirdCommaIndex + 1);
        try {
          const message = this.opts?.automaticDeserialization === false ? messageStr : JSON.parse(messageStr);
          this.dispatchToListeners("pmessage", { pattern, channel: channel2, message });
          this.dispatchToListeners(`pmessage:${pattern}`, { pattern, channel: channel2, message });
        } catch (error4) {
          this.dispatchToListeners("error", new Error(`Failed to parse message: ${error4}`));
        }
      } else {
        const channel2 = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
        const messageStr = messageData.slice(secondCommaIndex + 1);
        try {
          if (type === "subscribe" || type === "psubscribe" || type === "unsubscribe" || type === "punsubscribe") {
            const count3 = Number.parseInt(messageStr);
            this.dispatchToListeners(type, count3);
          } else {
            const message = this.opts?.automaticDeserialization === false ? messageStr : parseWithTryCatch(messageStr);
            this.dispatchToListeners(type, { channel: channel2, message });
            this.dispatchToListeners(`${type}:${channel2}`, { channel: channel2, message });
          }
        } catch (error4) {
          this.dispatchToListeners("error", new Error(`Failed to parse message: ${error4}`));
        }
      }
    }
  }
  dispatchToListeners(type, data) {
    const listeners2 = this.listeners.get(type);
    if (listeners2) {
      for (const listener of listeners2) {
        listener(data);
      }
    }
  }
  on(type, listener) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, /* @__PURE__ */ new Set());
    }
    this.listeners.get(type)?.add(listener);
  }
  removeAllListeners() {
    this.listeners.clear();
  }
  async unsubscribe(channels) {
    if (channels) {
      for (const channel2 of channels) {
        const subscription = this.subscriptions.get(channel2);
        if (subscription) {
          try {
            subscription.controller.abort();
          } catch {
          }
          this.subscriptions.delete(channel2);
        }
      }
    } else {
      for (const subscription of this.subscriptions.values()) {
        try {
          subscription.controller.abort();
        } catch {
        }
      }
      this.subscriptions.clear();
      this.removeAllListeners();
    }
  }
  getSubscribedChannels() {
    return [...this.subscriptions.keys()];
  }
}, "Subscriber");
var SubscribeCommand = /* @__PURE__ */ __name(class extends Command {
  constructor(cmd, opts) {
    const sseHeaders = {
      Accept: "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    };
    super([], {
      ...opts,
      headers: sseHeaders,
      path: ["subscribe", ...cmd],
      streamOptions: {
        isStreaming: true,
        onMessage: opts?.streamOptions?.onMessage,
        signal: opts?.streamOptions?.signal
      }
    });
  }
}, "SubscribeCommand");
var parseWithTryCatch = /* @__PURE__ */ __name((str) => {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}, "parseWithTryCatch");
var Script = /* @__PURE__ */ __name(class {
  script;
  /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */
  sha1;
  initPromise;
  redis;
  constructor(redis, script) {
    this.redis = redis;
    this.script = script;
    this.sha1 = "";
    void this.init(script);
  }
  /**
   * Initialize the script by computing its SHA-1 hash.
   */
  init(script) {
    if (!this.initPromise) {
      this.initPromise = this.digest(script).then((sha1) => {
        this.sha1 = sha1;
      });
    }
    return this.initPromise;
  }
  /**
   * Send an `EVAL` command to redis.
   */
  async eval(keys, args) {
    await this.init(this.script);
    return await this.redis.eval(this.script, keys, args);
  }
  /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA`.
   */
  async evalsha(keys, args) {
    await this.init(this.script);
    return await this.redis.evalsha(this.sha1, keys, args);
  }
  /**
   * Optimistically try to run `EVALSHA` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL`.
   *
   * Following calls will be able to use the cached script
   */
  async exec(keys, args) {
    await this.init(this.script);
    const res = await this.redis.evalsha(this.sha1, keys, args).catch(async (error4) => {
      if (error4 instanceof Error && error4.message.toLowerCase().includes("noscript")) {
        return await this.redis.eval(this.script, keys, args);
      }
      throw error4;
    });
    return res;
  }
  /**
   * Compute the sha1 hash of the script and return its hex representation.
   */
  async digest(s) {
    const data = new TextEncoder().encode(s);
    const hashBuffer = await subtle.digest("SHA-1", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
}, "Script");
var ScriptRO = /* @__PURE__ */ __name(class {
  script;
  /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */
  sha1;
  initPromise;
  redis;
  constructor(redis, script) {
    this.redis = redis;
    this.sha1 = "";
    this.script = script;
    void this.init(script);
  }
  init(script) {
    if (!this.initPromise) {
      this.initPromise = this.digest(script).then((sha1) => {
        this.sha1 = sha1;
      });
    }
    return this.initPromise;
  }
  /**
   * Send an `EVAL_RO` command to redis.
   */
  async evalRo(keys, args) {
    await this.init(this.script);
    return await this.redis.evalRo(this.script, keys, args);
  }
  /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA_RO`.
   */
  async evalshaRo(keys, args) {
    await this.init(this.script);
    return await this.redis.evalshaRo(this.sha1, keys, args);
  }
  /**
   * Optimistically try to run `EVALSHA_RO` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL_RO`.
   *
   * Following calls will be able to use the cached script
   */
  async exec(keys, args) {
    await this.init(this.script);
    const res = await this.redis.evalshaRo(this.sha1, keys, args).catch(async (error4) => {
      if (error4 instanceof Error && error4.message.toLowerCase().includes("noscript")) {
        return await this.redis.evalRo(this.script, keys, args);
      }
      throw error4;
    });
    return res;
  }
  /**
   * Compute the sha1 hash of the script and return its hex representation.
   */
  async digest(s) {
    const data = new TextEncoder().encode(s);
    const hashBuffer = await subtle.digest("SHA-1", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
}, "ScriptRO");
var Redis = /* @__PURE__ */ __name(class {
  client;
  opts;
  enableTelemetry;
  enableAutoPipelining;
  /**
   * Create a new redis client
   *
   * @example
   * ```typescript
   * const redis = new Redis({
   *  url: "<UPSTASH_REDIS_REST_URL>",
   *  token: "<UPSTASH_REDIS_REST_TOKEN>",
   * });
   * ```
   */
  constructor(client, opts) {
    this.client = client;
    this.opts = opts;
    this.enableTelemetry = opts?.enableTelemetry ?? true;
    if (opts?.readYourWrites === false) {
      this.client.readYourWrites = false;
    }
    this.enableAutoPipelining = opts?.enableAutoPipelining ?? true;
  }
  get readYourWritesSyncToken() {
    return this.client.upstashSyncToken;
  }
  set readYourWritesSyncToken(session) {
    this.client.upstashSyncToken = session;
  }
  get json() {
    return {
      /**
       * @see https://redis.io/commands/json.arrappend
       */
      arrappend: (...args) => new JsonArrAppendCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.arrindex
       */
      arrindex: (...args) => new JsonArrIndexCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.arrinsert
       */
      arrinsert: (...args) => new JsonArrInsertCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.arrlen
       */
      arrlen: (...args) => new JsonArrLenCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.arrpop
       */
      arrpop: (...args) => new JsonArrPopCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.arrtrim
       */
      arrtrim: (...args) => new JsonArrTrimCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.clear
       */
      clear: (...args) => new JsonClearCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.del
       */
      del: (...args) => new JsonDelCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.forget
       */
      forget: (...args) => new JsonForgetCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.get
       */
      get: (...args) => new JsonGetCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.merge
       */
      merge: (...args) => new JsonMergeCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.mget
       */
      mget: (...args) => new JsonMGetCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.mset
       */
      mset: (...args) => new JsonMSetCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.numincrby
       */
      numincrby: (...args) => new JsonNumIncrByCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.nummultby
       */
      nummultby: (...args) => new JsonNumMultByCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.objkeys
       */
      objkeys: (...args) => new JsonObjKeysCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.objlen
       */
      objlen: (...args) => new JsonObjLenCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.resp
       */
      resp: (...args) => new JsonRespCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.set
       */
      set: (...args) => new JsonSetCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.strappend
       */
      strappend: (...args) => new JsonStrAppendCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.strlen
       */
      strlen: (...args) => new JsonStrLenCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.toggle
       */
      toggle: (...args) => new JsonToggleCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/commands/json.type
       */
      type: (...args) => new JsonTypeCommand(args, this.opts).exec(this.client)
    };
  }
  get functions() {
    return {
      /**
       * @see https://redis.io/docs/latest/commands/function-load/
       */
      load: (...args) => new FunctionLoadCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/docs/latest/commands/function-list/
       */
      list: (...args) => new FunctionListCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/docs/latest/commands/function-delete/
       */
      delete: (...args) => new FunctionDeleteCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/docs/latest/commands/function-flush/
       */
      flush: () => new FunctionFlushCommand(this.opts).exec(this.client),
      /**
       * @see https://redis.io/docs/latest/commands/function-stats/
       *
       * Note: `running_script` field is not supported and therefore not included in the type.
       */
      stats: () => new FunctionStatsCommand(this.opts).exec(this.client),
      /**
       * @see https://redis.io/docs/latest/commands/fcall/
       */
      call: (...args) => new FCallCommand(args, this.opts).exec(this.client),
      /**
       * @see https://redis.io/docs/latest/commands/fcall_ro/
       */
      callRo: (...args) => new FCallRoCommand(args, this.opts).exec(this.client)
    };
  }
  /**
   * Wrap a new middleware around the HTTP client.
   */
  use = (middleware) => {
    const makeRequest = this.client.request.bind(this.client);
    this.client.request = (req) => middleware(req, makeRequest);
  };
  /**
   * Technically this is not private, we can hide it from intellisense by doing this
   */
  addTelemetry = (telemetry) => {
    if (!this.enableTelemetry) {
      return;
    }
    try {
      this.client.mergeTelemetry(telemetry);
    } catch {
    }
  };
  /**
   * Creates a new script.
   *
   * Scripts offer the ability to optimistically try to execute a script without having to send the
   * entire script to the server. If the script is loaded on the server, it tries again by sending
   * the entire script. Afterwards, the script is cached on the server.
   *
   * @param script - The script to create
   * @param opts - Optional options to pass to the script `{ readonly?: boolean }`
   * @returns A new script
   *
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];")
   * const arg1 = await script.eval([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];", { readonly: true })
   * const arg1 = await script.evalRo([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   */
  createScript(script, opts) {
    return opts?.readonly ? new ScriptRO(this, script) : new Script(this, script);
  }
  get search() {
    return {
      createIndex: (params) => {
        return createIndex(this.client, params);
      },
      index: (params) => {
        return initIndex(this.client, params);
      },
      alias: {
        list: () => {
          return listAliases(this.client);
        },
        add: ({ indexName, alias }) => {
          return addAlias(this.client, { indexName, alias });
        },
        delete: ({ alias }) => {
          return delAlias(this.client, { alias });
        }
      }
    };
  }
  /**
   * Create a new pipeline that allows you to send requests in bulk.
   *
   * @see {@link Pipeline}
   */
  pipeline = () => new Pipeline({
    client: this.client,
    commandOptions: this.opts,
    multiExec: false
  });
  autoPipeline = () => {
    return createAutoPipelineProxy(this);
  };
  /**
   * Create a new transaction to allow executing multiple steps atomically.
   *
   * All the commands in a transaction are serialized and executed sequentially. A request sent by
   * another client will never be served in the middle of the execution of a Redis Transaction. This
   * guarantees that the commands are executed as a single isolated operation.
   *
   * @see {@link Pipeline}
   */
  multi = () => new Pipeline({
    client: this.client,
    commandOptions: this.opts,
    multiExec: true
  });
  /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [0, 1]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */
  bitfield = (...args) => new BitFieldCommand(args, this.client, this.opts);
  /**
   * @see https://redis.io/commands/append
   */
  append = (...args) => new AppendCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/bitcount
   */
  bitcount = (...args) => new BitCountCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/bitop
   */
  bitop = (op, destinationKey, sourceKey, ...sourceKeys) => new BitOpCommand([op, destinationKey, sourceKey, ...sourceKeys], this.opts).exec(
    this.client
  );
  /**
   * @see https://redis.io/commands/bitpos
   */
  bitpos = (...args) => new BitPosCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/client-setinfo
   */
  clientSetinfo = (...args) => new ClientSetInfoCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/copy
   */
  copy = (...args) => new CopyCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/dbsize
   */
  dbsize = () => new DBSizeCommand(this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/decr
   */
  decr = (...args) => new DecrCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/decrby
   */
  decrby = (...args) => new DecrByCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/del
   */
  del = (...args) => new DelCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/echo
   */
  echo = (...args) => new EchoCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/eval_ro
   */
  evalRo = (...args) => new EvalROCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/eval
   */
  eval = (...args) => new EvalCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/evalsha_ro
   */
  evalshaRo = (...args) => new EvalshaROCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/evalsha
   */
  evalsha = (...args) => new EvalshaCommand(args, this.opts).exec(this.client);
  /**
   * Generic method to execute any Redis command.
   */
  exec = (args) => new ExecCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/exists
   */
  exists = (...args) => new ExistsCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/expire
   */
  expire = (...args) => new ExpireCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/expireat
   */
  expireat = (...args) => new ExpireAtCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/flushall
   */
  flushall = (args) => new FlushAllCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/flushdb
   */
  flushdb = (...args) => new FlushDBCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/geoadd
   */
  geoadd = (...args) => new GeoAddCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/geopos
   */
  geopos = (...args) => new GeoPosCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/geodist
   */
  geodist = (...args) => new GeoDistCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/geohash
   */
  geohash = (...args) => new GeoHashCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/geosearch
   */
  geosearch = (...args) => new GeoSearchCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/geosearchstore
   */
  geosearchstore = (...args) => new GeoSearchStoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/get
   */
  get = (...args) => new GetCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/getbit
   */
  getbit = (...args) => new GetBitCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/getdel
   */
  getdel = (...args) => new GetDelCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/getex
   */
  getex = (...args) => new GetExCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/getrange
   */
  getrange = (...args) => new GetRangeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/getset
   */
  getset = (key, value) => new GetSetCommand([key, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hdel
   */
  hdel = (...args) => new HDelCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hexists
   */
  hexists = (...args) => new HExistsCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hexpire
   */
  hexpire = (...args) => new HExpireCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hexpireat
   */
  hexpireat = (...args) => new HExpireAtCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hexpiretime
   */
  hexpiretime = (...args) => new HExpireTimeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/httl
   */
  httl = (...args) => new HTtlCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hpexpire
   */
  hpexpire = (...args) => new HPExpireCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hpexpireat
   */
  hpexpireat = (...args) => new HPExpireAtCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hpexpiretime
   */
  hpexpiretime = (...args) => new HPExpireTimeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hpttl
   */
  hpttl = (...args) => new HPTtlCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hpersist
   */
  hpersist = (...args) => new HPersistCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hget
   */
  hget = (...args) => new HGetCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hgetall
   */
  hgetall = (...args) => new HGetAllCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hgetdel
   */
  hgetdel = (...args) => new HGetDelCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hgetex
   */
  hgetex = (...args) => new HGetExCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hincrby
   */
  hincrby = (...args) => new HIncrByCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hincrbyfloat
   */
  hincrbyfloat = (...args) => new HIncrByFloatCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hkeys
   */
  hkeys = (...args) => new HKeysCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hlen
   */
  hlen = (...args) => new HLenCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hmget
   */
  hmget = (...args) => new HMGetCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hmset
   */
  hmset = (key, kv) => new HMSetCommand([key, kv], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hrandfield
   */
  hrandfield = (key, count3, withValues) => new HRandFieldCommand([key, count3, withValues], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hscan
   */
  hscan = (...args) => new HScanCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hset
   */
  hset = (key, kv) => new HSetCommand([key, kv], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hsetex
   */
  hsetex = (...args) => new HSetExCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hsetnx
   */
  hsetnx = (key, field, value) => new HSetNXCommand([key, field, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hstrlen
   */
  hstrlen = (...args) => new HStrLenCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/hvals
   */
  hvals = (...args) => new HValsCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/incr
   */
  incr = (...args) => new IncrCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/incrby
   */
  incrby = (...args) => new IncrByCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/incrbyfloat
   */
  incrbyfloat = (...args) => new IncrByFloatCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/keys
   */
  keys = (...args) => new KeysCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lindex
   */
  lindex = (...args) => new LIndexCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/linsert
   */
  linsert = (key, direction, pivot, value) => new LInsertCommand([key, direction, pivot, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/llen
   */
  llen = (...args) => new LLenCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lmove
   */
  lmove = (...args) => new LMoveCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lpop
   */
  lpop = (...args) => new LPopCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lmpop
   */
  lmpop = (...args) => new LmPopCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lpos
   */
  lpos = (...args) => new LPosCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lpush
   */
  lpush = (key, ...elements) => new LPushCommand([key, ...elements], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lpushx
   */
  lpushx = (key, ...elements) => new LPushXCommand([key, ...elements], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lrange
   */
  lrange = (...args) => new LRangeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lrem
   */
  lrem = (key, count3, value) => new LRemCommand([key, count3, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/lset
   */
  lset = (key, index, value) => new LSetCommand([key, index, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/ltrim
   */
  ltrim = (...args) => new LTrimCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/mget
   */
  mget = (...args) => new MGetCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/mset
   */
  mset = (kv) => new MSetCommand([kv], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/msetnx
   */
  msetnx = (kv) => new MSetNXCommand([kv], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/persist
   */
  persist = (...args) => new PersistCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/pexpire
   */
  pexpire = (...args) => new PExpireCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/pexpireat
   */
  pexpireat = (...args) => new PExpireAtCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/pfadd
   */
  pfadd = (...args) => new PfAddCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/pfcount
   */
  pfcount = (...args) => new PfCountCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/pfmerge
   */
  pfmerge = (...args) => new PfMergeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/ping
   */
  ping = (args) => new PingCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/psetex
   */
  psetex = (key, ttl, value) => new PSetEXCommand([key, ttl, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/psubscribe
   */
  psubscribe = (patterns) => {
    const patternArray = Array.isArray(patterns) ? patterns : [patterns];
    return new Subscriber(this.client, patternArray, true, this.opts);
  };
  /**
   * @see https://redis.io/commands/pttl
   */
  pttl = (...args) => new PTtlCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/publish
   */
  publish = (...args) => new PublishCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/randomkey
   */
  randomkey = () => new RandomKeyCommand().exec(this.client);
  /**
   * @see https://redis.io/commands/rename
   */
  rename = (...args) => new RenameCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/renamenx
   */
  renamenx = (...args) => new RenameNXCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/rpop
   */
  rpop = (...args) => new RPopCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/rpush
   */
  rpush = (key, ...elements) => new RPushCommand([key, ...elements], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/rpushx
   */
  rpushx = (key, ...elements) => new RPushXCommand([key, ...elements], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sadd
   */
  sadd = (key, member, ...members) => new SAddCommand([key, member, ...members], this.opts).exec(this.client);
  scan(cursor, opts) {
    return new ScanCommand([cursor, opts], this.opts).exec(this.client);
  }
  /**
   * @see https://redis.io/commands/scard
   */
  scard = (...args) => new SCardCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/script-exists
   */
  scriptExists = (...args) => new ScriptExistsCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/script-flush
   */
  scriptFlush = (...args) => new ScriptFlushCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/script-load
   */
  scriptLoad = (...args) => new ScriptLoadCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sdiff
   */
  sdiff = (...args) => new SDiffCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sdiffstore
   */
  sdiffstore = (...args) => new SDiffStoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/set
   */
  set = (key, value, opts) => new SetCommand([key, value, opts], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/setbit
   */
  setbit = (...args) => new SetBitCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/setex
   */
  setex = (key, ttl, value) => new SetExCommand([key, ttl, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/setnx
   */
  setnx = (key, value) => new SetNxCommand([key, value], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/setrange
   */
  setrange = (...args) => new SetRangeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sinter
   */
  sinter = (...args) => new SInterCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sintercard
   */
  sintercard = (...args) => new SInterCardCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sinterstore
   */
  sinterstore = (...args) => new SInterStoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sismember
   */
  sismember = (key, member) => new SIsMemberCommand([key, member], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/smismember
   */
  smismember = (key, members) => new SMIsMemberCommand([key, members], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/smembers
   */
  smembers = (...args) => new SMembersCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/smove
   */
  smove = (source, destination, member) => new SMoveCommand([source, destination, member], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/spop
   */
  spop = (...args) => new SPopCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/srandmember
   */
  srandmember = (...args) => new SRandMemberCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/srem
   */
  srem = (key, ...members) => new SRemCommand([key, ...members], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sscan
   */
  sscan = (...args) => new SScanCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/strlen
   */
  strlen = (...args) => new StrLenCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/subscribe
   */
  subscribe = (channels) => {
    const channelArray = Array.isArray(channels) ? channels : [channels];
    return new Subscriber(this.client, channelArray, false, this.opts);
  };
  /**
   * @see https://redis.io/commands/sunion
   */
  sunion = (...args) => new SUnionCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/sunionstore
   */
  sunionstore = (...args) => new SUnionStoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/time
   */
  time = () => new TimeCommand().exec(this.client);
  /**
   * @see https://redis.io/commands/touch
   */
  touch = (...args) => new TouchCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/ttl
   */
  ttl = (...args) => new TtlCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/type
   */
  type = (...args) => new TypeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/unlink
   */
  unlink = (...args) => new UnlinkCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xadd
   */
  xadd = (...args) => new XAddCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xack
   */
  xack = (...args) => new XAckCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xackdel
   */
  xackdel = (...args) => new XAckDelCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xdel
   */
  xdel = (...args) => new XDelCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xdelex
   */
  xdelex = (...args) => new XDelExCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xgroup
   */
  xgroup = (...args) => new XGroupCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xread
   */
  xread = (...args) => new XReadCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xreadgroup
   */
  xreadgroup = (...args) => new XReadGroupCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xinfo
   */
  xinfo = (...args) => new XInfoCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xlen
   */
  xlen = (...args) => new XLenCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xpending
   */
  xpending = (...args) => new XPendingCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xclaim
   */
  xclaim = (...args) => new XClaimCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xautoclaim
   */
  xautoclaim = (...args) => new XAutoClaim(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xtrim
   */
  xtrim = (...args) => new XTrimCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xrange
   */
  xrange = (...args) => new XRangeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/xrevrange
   */
  xrevrange = (...args) => new XRevRangeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zadd
   */
  zadd = (...args) => {
    if ("score" in args[1]) {
      return new ZAddCommand([args[0], args[1], ...args.slice(2)], this.opts).exec(
        this.client
      );
    }
    return new ZAddCommand(
      [args[0], args[1], ...args.slice(2)],
      this.opts
    ).exec(this.client);
  };
  /**
   * @see https://redis.io/commands/zcard
   */
  zcard = (...args) => new ZCardCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zcount
   */
  zcount = (...args) => new ZCountCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zdiffstore
   */
  zdiffstore = (...args) => new ZDiffStoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zincrby
   */
  zincrby = (key, increment, member) => new ZIncrByCommand([key, increment, member], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zinterstore
   */
  zinterstore = (...args) => new ZInterStoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zlexcount
   */
  zlexcount = (...args) => new ZLexCountCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zmscore
   */
  zmscore = (...args) => new ZMScoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zpopmax
   */
  zpopmax = (...args) => new ZPopMaxCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zpopmin
   */
  zpopmin = (...args) => new ZPopMinCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zrange
   */
  zrange = (...args) => new ZRangeCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zrank
   */
  zrank = (key, member) => new ZRankCommand([key, member], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zrem
   */
  zrem = (key, ...members) => new ZRemCommand([key, ...members], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zremrangebylex
   */
  zremrangebylex = (...args) => new ZRemRangeByLexCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zremrangebyrank
   */
  zremrangebyrank = (...args) => new ZRemRangeByRankCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zremrangebyscore
   */
  zremrangebyscore = (...args) => new ZRemRangeByScoreCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zrevrank
   */
  zrevrank = (key, member) => new ZRevRankCommand([key, member], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zscan
   */
  zscan = (...args) => new ZScanCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zscore
   */
  zscore = (key, member) => new ZScoreCommand([key, member], this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zunion
   */
  zunion = (...args) => new ZUnionCommand(args, this.opts).exec(this.client);
  /**
   * @see https://redis.io/commands/zunionstore
   */
  zunionstore = (...args) => new ZUnionStoreCommand(args, this.opts).exec(this.client);
}, "Redis");
var VERSION = "v1.38.0";

// ../../node_modules/.pnpm/@upstash+redis@1.38.0/node_modules/@upstash/redis/cloudflare.mjs
var Redis2 = /* @__PURE__ */ __name(class _Redis extends Redis {
  /**
   * Create a new redis client
   *
   * @example
   * ```typescript
   * const redis = new Redis({
   *  url: "<UPSTASH_REDIS_REST_URL>",
   *  token: "<UPSTASH_REDIS_REST_TOKEN>",
   * });
   * ```
   */
  constructor(config2, env2) {
    if (!config2.url) {
      console.warn(
        `[Upstash Redis] The 'url' property is missing or undefined in your Redis config.`
      );
    } else if (config2.url.startsWith(" ") || config2.url.endsWith(" ") || /\r|\n/.test(config2.url)) {
      console.warn(
        "[Upstash Redis] The redis url contains whitespace or newline, which can cause errors!"
      );
    }
    if (!config2.token) {
      console.warn(
        `[Upstash Redis] The 'token' property is missing or undefined in your Redis config.`
      );
    } else if (config2.token.startsWith(" ") || config2.token.endsWith(" ") || /\r|\n/.test(config2.token)) {
      console.warn(
        "[Upstash Redis] The redis token contains whitespace or newline, which can cause errors!"
      );
    }
    const client = new HttpClient({
      retry: config2.retry,
      baseUrl: config2.url,
      headers: { authorization: `Bearer ${config2.token}` },
      responseEncoding: config2.responseEncoding,
      signal: config2.signal,
      keepAlive: config2.keepAlive,
      readYourWrites: config2.readYourWrites
    });
    super(client, {
      enableTelemetry: config2.enableTelemetry ?? !env2?.UPSTASH_DISABLE_TELEMETRY,
      automaticDeserialization: config2.automaticDeserialization,
      latencyLogging: config2.latencyLogging,
      enableAutoPipelining: config2.enableAutoPipelining
    });
    this.addTelemetry({
      platform: "cloudflare",
      sdk: `@upstash/redis@${VERSION}`
    });
    if (this.enableAutoPipelining) {
      return this.autoPipeline();
    }
  }
  /*
   * Create a new Upstash Redis instance from environment variables on cloudflare.
   *
   * This tries to load `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` from
   * the global namespace
   *
   * If you are using a module worker, please pass in the `env` object.
   * ```ts
   * const redis = Redis.fromEnv(env)
   * ```
   */
  static fromEnv(env2, opts) {
    const url = env2?.UPSTASH_REDIS_REST_URL ?? // @ts-expect-error These will be defined by cloudflare
    (typeof UPSTASH_REDIS_REST_URL === "string" ? (
      // @ts-expect-error These will be defined by cloudflare
      UPSTASH_REDIS_REST_URL
    ) : void 0);
    const token = env2?.UPSTASH_REDIS_REST_TOKEN ?? // @ts-expect-error These will be defined by cloudflare
    (typeof UPSTASH_REDIS_REST_TOKEN === "string" ? (
      // @ts-expect-error These will be defined by cloudflare
      UPSTASH_REDIS_REST_TOKEN
    ) : void 0);
    const messageInfo = !url && !token ? "Unable to find environment variables: `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`" : url ? token ? void 0 : "Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`" : "Unable to find environment variable: `UPSTASH_REDIS_REST_URL`";
    if (messageInfo) {
      console.warn(
        `[Upstash Redis] ${messageInfo}. Please add it via \`wrangler secret put ${url ? "UPSTASH_REDIS_REST_TOKEN" : "UPSTASH_REDIS_REST_URL"}\` and provide it as an argument to the \`Redis.fromEnv\` function`
      );
    }
    return new _Redis({ ...opts, url, token }, env2);
  }
}, "_Redis");

// src/index.ts
var import_ua_parser_js = __toESM(require_ua_parser());

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/debug-build.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/worldwide.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GLOBAL_OBJ = globalThis;

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/instrument/handlers.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/carrier.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/version.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SDK_VERSION = "10.65.0";

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/carrier.js
function getMainCarrier() {
  getSentryCarrier(GLOBAL_OBJ);
  return GLOBAL_OBJ;
}
__name(getMainCarrier, "getMainCarrier");
function getSentryCarrier(carrier) {
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.version = __SENTRY__.version || SDK_VERSION;
  return __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
}
__name(getSentryCarrier, "getSentryCarrier");
function getGlobalSingleton(name, creator, obj = GLOBAL_OBJ) {
  const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
  const carrier = __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
  return carrier[name] || (carrier[name] = creator());
}
__name(getGlobalSingleton, "getGlobalSingleton");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js
var CONSOLE_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
];
var PREFIX = "Sentry Logger ";
var originalConsoleMethods = {};
function consoleSandbox(callback) {
  if (!("console" in GLOBAL_OBJ)) {
    return callback();
  }
  const console2 = GLOBAL_OBJ.console;
  const wrappedFuncs = {};
  const wrappedLevels = Object.keys(originalConsoleMethods);
  wrappedLevels.forEach((level) => {
    const originalConsoleMethod = originalConsoleMethods[level];
    wrappedFuncs[level] = console2[level];
    console2[level] = originalConsoleMethod;
  });
  try {
    return callback();
  } finally {
    wrappedLevels.forEach((level) => {
      console2[level] = wrappedFuncs[level];
    });
  }
}
__name(consoleSandbox, "consoleSandbox");
function enable() {
  _getLoggerSettings().enabled = true;
}
__name(enable, "enable");
function disable() {
  _getLoggerSettings().enabled = false;
}
__name(disable, "disable");
function isEnabled() {
  return _getLoggerSettings().enabled;
}
__name(isEnabled, "isEnabled");
function log3(...args) {
  _maybeLog("log", ...args);
}
__name(log3, "log");
function warn3(...args) {
  _maybeLog("warn", ...args);
}
__name(warn3, "warn");
function error3(...args) {
  _maybeLog("error", ...args);
}
__name(error3, "error");
function _maybeLog(level, ...args) {
  if (!DEBUG_BUILD) {
    return;
  }
  if (isEnabled()) {
    consoleSandbox(() => {
      GLOBAL_OBJ.console[level](`${PREFIX}[${level}]:`, ...args);
    });
  }
}
__name(_maybeLog, "_maybeLog");
function _getLoggerSettings() {
  if (!DEBUG_BUILD) {
    return { enabled: false };
  }
  return getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
}
__name(_getLoggerSettings, "_getLoggerSettings");
var debug3 = {
  /** Enable logging. */
  enable,
  /** Disable logging. */
  disable,
  /** Check if logging is enabled. */
  isEnabled,
  /** Log a message. */
  log: log3,
  /** Log a warning. */
  warn: warn3,
  /** Log an error. */
  error: error3
};

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/stacktrace.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var STACKTRACE_FRAME_LIMIT = 50;
var UNKNOWN_FUNCTION = "?";
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i = skipFirstLines; i < lines.length; i++) {
      let line = lines[i];
      if (line.length > 1024) {
        line = line.slice(0, 1024);
      }
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (cleanedLine.includes("Error: ")) {
        continue;
      }
      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);
        if (frame) {
          frames.push(frame);
          break;
        }
      }
      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }
    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}
__name(createStackParser, "createStackParser");
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}
__name(stackParserFromStackParserOptions, "stackParserFromStackParserOptions");
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  const localStack = Array.from(stack);
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
  }
  localStack.reverse();
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
      localStack.pop();
    }
  }
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
__name(stripSentryFramesAndReverse, "stripSentryFramesAndReverse");
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
__name(getLastStackFrame, "getLastStackFrame");
var defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch {
    return defaultFunctionName;
  }
}
__name(getFunctionName, "getFunctionName");
function getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    const frames = [];
    try {
      exception.values.forEach((value) => {
        if (value.stacktrace.frames) {
          frames.push(...value.stacktrace.frames);
        }
      });
      return frames;
    } catch {
      return void 0;
    }
  }
  return void 0;
}
__name(getFramesFromEvent, "getFramesFromEvent");
function normalizeStackTracePath(path) {
  let filename = path?.startsWith("file://") ? path.slice(7) : path;
  if (filename?.match(/\/[A-Z]:/)) {
    filename = filename.slice(1);
  }
  return filename;
}
__name(normalizeStackTracePath, "normalizeStackTracePath");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/instrument/handlers.js
var handlers = {};
var instrumented = {};
function addHandler(type, handler) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(handler);
  return () => {
    const typeHandlers = handlers[type];
    if (typeHandlers) {
      const index = typeHandlers.indexOf(handler);
      if (index !== -1) {
        typeHandlers.splice(index, 1);
      }
    }
  };
}
__name(addHandler, "addHandler");
function maybeInstrument(type, instrumentFn) {
  if (!instrumented[type]) {
    instrumented[type] = true;
    try {
      instrumentFn();
    } catch (e) {
      DEBUG_BUILD && debug3.error(`Error while instrumenting ${type}`, e);
    }
  }
}
__name(maybeInstrument, "maybeInstrument");
function triggerHandlers(type, data) {
  const typeHandlers = type && handlers[type];
  if (!typeHandlers) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e) {
      DEBUG_BUILD && debug3.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
        e
      );
    }
  }
}
__name(triggerHandlers, "triggerHandlers");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/spanUtils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/asyncContext/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/defaultScopes.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/scope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/session.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/misc.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/object.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/is.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var objectToString = Object.prototype.toString;
function isError(wat) {
  switch (objectToString.call(wat)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
__name(isError, "isError");
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}
__name(isBuiltin, "isBuiltin");
function isErrorEvent(wat) {
  return isBuiltin(wat, "ErrorEvent");
}
__name(isErrorEvent, "isErrorEvent");
function isString(wat) {
  return isBuiltin(wat, "String");
}
__name(isString, "isString");
function isParameterizedString(wat) {
  return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
__name(isParameterizedString, "isParameterizedString");
function isPrimitive(wat) {
  return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
__name(isPrimitive, "isPrimitive");
function isPlainObject(wat) {
  return isBuiltin(wat, "Object");
}
__name(isPlainObject, "isPlainObject");
function isObjectLike(wat) {
  return typeof wat === "object" && wat !== null;
}
__name(isObjectLike, "isObjectLike");
function isEvent(wat) {
  return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
__name(isEvent, "isEvent");
function isRegExp(wat) {
  return isBuiltin(wat, "RegExp");
}
__name(isRegExp, "isRegExp");
function isThenable(wat) {
  return Boolean(wat?.then && typeof wat.then === "function");
}
__name(isThenable, "isThenable");
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch {
    return false;
  }
}
__name(isInstanceOf, "isInstanceOf");
function isRequest(request) {
  return typeof Request !== "undefined" && isInstanceOf(request, Request);
}
__name(isRequest, "isRequest");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/object.js
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  if (typeof original !== "function") {
    return;
  }
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    markFunctionWrapped(wrapped, original);
  }
  try {
    source[name] = wrapped;
  } catch {
    DEBUG_BUILD && debug3.log(`Failed to replace method "${name}" in object`, source);
  }
}
__name(fill, "fill");
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value,
      writable: true,
      configurable: true
    });
  } catch {
    DEBUG_BUILD && debug3.log(`Failed to add non-enumerable property "${String(name)}" to object`, obj);
  }
}
__name(addNonEnumerableProperty, "addNonEnumerableProperty");
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  } catch {
  }
}
__name(markFunctionWrapped, "markFunctionWrapped");
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
__name(getOriginalFunction, "getOriginalFunction");
function convertToPlainObject(value) {
  if (isError(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value)
    };
  }
  if (isEvent(value)) {
    const { type, target, currentTarget, detail } = value;
    return {
      type,
      target,
      currentTarget,
      ...detail ? { detail } : {},
      ...getOwnProperties(value)
    };
  }
  return value;
}
__name(convertToPlainObject, "convertToPlainObject");
function getOwnProperties(obj) {
  if (isObjectLike(obj)) {
    return Object.fromEntries(Object.entries(obj));
  }
  return {};
}
__name(getOwnProperties, "getOwnProperties");
function extractExceptionKeysForMessage(exception) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  return !keys[0] ? "[object has no keys]" : keys.join(", ");
}
__name(extractExceptionKeysForMessage, "extractExceptionKeysForMessage");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RESOLVED_RUNNER;
function withRandomSafeContext(cb) {
  if (RESOLVED_RUNNER !== void 0) {
    return RESOLVED_RUNNER ? RESOLVED_RUNNER(cb) : cb();
  }
  const sym = /* @__PURE__ */ Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const globalWithSymbol = GLOBAL_OBJ;
  if (sym in globalWithSymbol && typeof globalWithSymbol[sym] === "function") {
    RESOLVED_RUNNER = globalWithSymbol[sym];
    return RESOLVED_RUNNER(cb);
  }
  RESOLVED_RUNNER = null;
  return cb();
}
__name(withRandomSafeContext, "withRandomSafeContext");
function safeMathRandom() {
  return withRandomSafeContext(() => Math.random());
}
__name(safeMathRandom, "safeMathRandom");
function safeDateNow() {
  return withRandomSafeContext(() => Date.now());
}
__name(safeDateNow, "safeDateNow");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/string.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/normalize.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/normalizationHints.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SENTRY_SKIP_NORMALIZATION = /* @__PURE__ */ Symbol.for("sentry.skipNormalization");
var SENTRY_OVERRIDE_NORMALIZATION_DEPTH = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
function hasSkipNormalizationHint(value) {
  return Boolean(value[SENTRY_SKIP_NORMALIZATION]);
}
__name(hasSkipNormalizationHint, "hasSkipNormalizationHint");
function getNormalizationDepthOverrideHint(value) {
  const v = value[SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
  return typeof v === "number" ? v : void 0;
}
__name(getNormalizationDepthOverrideHint, "getNormalizationDepthOverrideHint");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/normalize.js
var stringifier;
function normalize(input, depth = 100, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}
__name(normalize, "normalize");
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}
__name(normalizeToSize, "normalizeToSize");
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value == null || // this matches null and undefined -> eqeq not eqeqeq
  ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (hasSkipNormalizationHint(value)) {
    return value;
  }
  const overrideDepth = getNormalizationDepthOverrideHint(value);
  const remainingDepth = overrideDepth !== void 0 ? overrideDepth : depth;
  if (remainingDepth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
__name(visit, "visit");
function stringifyValue(key, value) {
  try {
    if (stringifier) {
      const stringified = stringifier(value);
      if (stringified) {
        return stringified;
      }
    }
    if (typeof global !== "undefined" && value === global) {
      return "[Global]";
    }
    if (typeof value === "number" && !Number.isFinite(value)) {
      return `[${value}]`;
    }
    if (typeof value === "function") {
      return `[Function: ${getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    const objName = getConstructorName(value);
    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
__name(stringifyValue, "stringifyValue");
function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);
  return prototype?.constructor ? prototype.constructor.name : "null prototype";
}
__name(getConstructorName, "getConstructorName");
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
__name(utf8Length, "utf8Length");
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
__name(jsonSize, "jsonSize");
function memoBuilder() {
  const inner = /* @__PURE__ */ new WeakSet();
  function memoize(obj) {
    if (inner.has(obj)) {
      return true;
    }
    inner.add(obj);
    return false;
  }
  __name(memoize, "memoize");
  function unmemoize(obj) {
    inner.delete(obj);
  }
  __name(unmemoize, "unmemoize");
  return [memoize, unmemoize];
}
__name(memoBuilder, "memoBuilder");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/string.js
function truncate(str, max = 0) {
  if (typeof str !== "string" || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}
__name(truncate, "truncate");
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return "";
  }
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    if (isPrimitive(value)) {
      output.push(String(value));
    } else if (value instanceof Error) {
      output.push(value.message ? `${value.name}: ${value.message}` : value.name);
    } else {
      output.push(stringifyValue(void 0, value));
    }
  }
  return output.join(delimiter);
}
__name(safeJoin, "safeJoin");
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!isString(value)) {
    return false;
  }
  if (isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  if (typeof pattern === "function") {
    return pattern(value);
  }
  return false;
}
__name(isMatchingPattern, "isMatchingPattern");
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  for (const pattern of patterns) {
    if (isMatchingPattern(testString, pattern, requireExactStringMatch)) {
      return true;
    }
  }
  return false;
}
__name(stringMatchesSomePattern, "stringMatchesSomePattern");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/misc.js
function getCrypto() {
  const gbl = GLOBAL_OBJ;
  return gbl.crypto || gbl.msCrypto;
}
__name(getCrypto, "getCrypto");
var emptyUuid;
function getRandomByte() {
  return safeMathRandom() * 16;
}
__name(getRandomByte, "getRandomByte");
function uuid4(crypto = getCrypto()) {
  try {
    if (crypto?.randomUUID) {
      return withRandomSafeContext(() => crypto.randomUUID()).replace(/-/g, "");
    }
  } catch {
  }
  if (!emptyUuid) {
    emptyUuid = "10000000100040008000" + 1e11;
  }
  return emptyUuid.replace(
    /[018]/g,
    (c) => (
      // eslint-disable-next-line no-bitwise
      (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
    )
  );
}
__name(uuid4, "uuid4");
function getFirstException(event) {
  return event.exception?.values?.[0];
}
__name(getFirstException, "getFirstException");
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || "<unknown>";
  }
  return eventId || "<unknown>";
}
__name(getEventDescription, "getEventDescription");
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = value || "";
  }
  if (!firstException.type) {
    firstException.type = type || "Error";
  }
}
__name(addExceptionTypeValue, "addExceptionTypeValue");
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  const defaultMechanism = { type: "generic", handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
  if (newMechanism && "data" in newMechanism) {
    const mergedData = { ...currentMechanism?.data, ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}
__name(addExceptionMechanism, "addExceptionMechanism");
function checkOrSetAlreadyCaught(exception) {
  if (isAlreadyCaptured(exception)) {
    return true;
  }
  try {
    addNonEnumerableProperty(exception, "__sentry_captured__", true);
  } catch {
  }
  return false;
}
__name(checkOrSetAlreadyCaught, "checkOrSetAlreadyCaught");
function isAlreadyCaptured(exception) {
  try {
    return exception.__sentry_captured__;
  } catch {
  }
}
__name(isAlreadyCaptured, "isAlreadyCaptured");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/time.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
  return safeDateNow() / ONE_SECOND_IN_MS;
}
__name(dateTimestampInSeconds, "dateTimestampInSeconds");
function createUnixTimestampInSecondsFunc() {
  const { performance: performance3 } = GLOBAL_OBJ;
  if (!performance3?.now || !performance3.timeOrigin) {
    return dateTimestampInSeconds;
  }
  const timeOrigin = performance3.timeOrigin;
  return () => {
    return (timeOrigin + withRandomSafeContext(() => performance3.now())) / ONE_SECOND_IN_MS;
  };
}
__name(createUnixTimestampInSecondsFunc, "createUnixTimestampInSecondsFunc");
var _cachedTimestampInSeconds;
function timestampInSeconds() {
  const func = _cachedTimestampInSeconds ?? (_cachedTimestampInSeconds = createUnixTimestampInSecondsFunc());
  return func();
}
__name(timestampInSeconds, "timestampInSeconds");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/session.js
function updateSession(session, context2 = {}) {
  if (context2.user) {
    if (!session.ipAddress && context2.user.ip_address) {
      session.ipAddress = context2.user.ip_address;
    }
    if (!session.did && !context2.did) {
      session.did = context2.user.id || context2.user.email || context2.user.username;
    }
  }
  session.timestamp = context2.timestamp || timestampInSeconds();
  if (context2.abnormal_mechanism) {
    session.abnormal_mechanism = context2.abnormal_mechanism;
  }
  if (context2.ignoreDuration) {
    session.ignoreDuration = context2.ignoreDuration;
  }
  if (context2.sid) {
    session.sid = context2.sid.length === 32 ? context2.sid : uuid4();
  }
  if (context2.init !== void 0) {
    session.init = context2.init;
  }
  if (!session.did && context2.did) {
    session.did = `${context2.did}`;
  }
  if (typeof context2.started === "number") {
    session.started = context2.started;
  }
  if (session.ignoreDuration) {
    session.duration = void 0;
  } else if (typeof context2.duration === "number") {
    session.duration = context2.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context2.release) {
    session.release = context2.release;
  }
  if (context2.environment) {
    session.environment = context2.environment;
  }
  if (!session.ipAddress && context2.ipAddress) {
    session.ipAddress = context2.ipAddress;
  }
  if (!session.userAgent && context2.userAgent) {
    session.userAgent = context2.userAgent;
  }
  if (typeof context2.errors === "number") {
    session.errors = context2.errors;
  }
  if (context2.status) {
    session.status = context2.status;
  }
}
__name(updateSession, "updateSession");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/merge.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function merge2(initialObj, mergeObj, levels = 2) {
  if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) {
    return mergeObj;
  }
  if (initialObj && Object.keys(mergeObj).length === 0) {
    return initialObj;
  }
  const output = { ...initialObj };
  for (const key in mergeObj) {
    if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
      output[key] = merge2(output[key], mergeObj[key], levels - 1);
    }
  }
  return output;
}
__name(merge2, "merge");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/propagationContext.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function generateTraceId() {
  return uuid4();
}
__name(generateTraceId, "generateTraceId");
function generateSpanId() {
  return uuid4().substring(16);
}
__name(generateSpanId, "generateSpanId");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/spanOnScope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/weakRef.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function makeWeakRef(value) {
  try {
    const WeakRefImpl = GLOBAL_OBJ.WeakRef;
    if (typeof WeakRefImpl === "function") {
      return new WeakRefImpl(value);
    }
  } catch {
  }
  return value;
}
__name(makeWeakRef, "makeWeakRef");
function derefWeakRef(ref) {
  if (!ref) {
    return void 0;
  }
  if (typeof ref === "object" && "deref" in ref && typeof ref.deref === "function") {
    try {
      return ref.deref();
    } catch {
      return void 0;
    }
  }
  return ref;
}
__name(derefWeakRef, "derefWeakRef");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope, span) {
  if (span) {
    addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, makeWeakRef(span));
  } else {
    delete scope[SCOPE_SPAN_FIELD];
  }
}
__name(_setSpanForScope, "_setSpanForScope");
function _getSpanForScope(scope) {
  return derefWeakRef(scope[SCOPE_SPAN_FIELD]);
}
__name(_getSpanForScope, "_getSpanForScope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/scope.js
var DEFAULT_MAX_BREADCRUMBS = 100;
var Scope = class {
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    };
  }
  /**
   * Clone all data from this scope into a new scope.
   */
  clone() {
    const newScope = new Scope();
    newScope._breadcrumbs = [...this._breadcrumbs];
    newScope._tags = { ...this._tags };
    newScope._attributes = { ...this._attributes };
    newScope._extra = { ...this._extra };
    newScope._contexts = { ...this._contexts };
    if (this._contexts.flags) {
      newScope._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    newScope._user = this._user;
    newScope._level = this._level;
    newScope._session = this._session;
    newScope._transactionName = this._transactionName;
    newScope._fingerprint = this._fingerprint;
    newScope._eventProcessors = [...this._eventProcessors];
    newScope._attachments = [...this._attachments];
    newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
    newScope._propagationContext = { ...this._propagationContext };
    newScope._client = this._client;
    newScope._lastEventId = this._lastEventId;
    newScope._conversationId = this._conversationId;
    _setSpanForScope(newScope, _getSpanForScope(this));
    return newScope;
  }
  /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */
  setClient(client) {
    this._client = client;
  }
  /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */
  setLastEventId(lastEventId2) {
    this._lastEventId = lastEventId2;
  }
  /**
   * Get the client assigned to this scope.
   */
  getClient() {
    return this._client;
  }
  /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }
  /**
   * Add an event processor that will be called before an event is sent.
   */
  addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }
  /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */
  setUser(user) {
    this._user = user || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    };
    if (this._session) {
      updateSession(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the user from this scope.
   */
  getUser() {
    return this._user;
  }
  /**
   * Set the conversation ID for this scope.
   * Set to `null` to unset the conversation ID.
   */
  setConversationId(conversationId) {
    this._conversationId = conversationId || void 0;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */
  setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags
    };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set a single tag that will be sent as tags data with the event.
   */
  setTag(key, value) {
    return this.setTags({ [key]: value });
  }
  /**
   * Sets attributes onto the scope.
   *
   * These attributes are applied to logs, metrics and streamed spans.
   *
   * Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
   *
   * @param newAttributes - The attributes to set on the scope, as key-value pairs.
   *
   * @example
   * ```typescript
   * scope.setAttributes({
   *   is_admin: true,
   *   payment_selection: 'credit_card',
   *   render_duration: 150,
   * });
   * ```
   */
  setAttributes(newAttributes) {
    this._attributes = {
      ...this._attributes,
      ...newAttributes
    };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets an attribute onto the scope.
   *
   * These attributes are applied to logs, metrics and streamed spans.
   *
   * Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
   *
   * @param key - The attribute key.
   * @param value - The attribute value.
   *
   * @example
   * ```typescript
   * scope.setAttribute('is_admin', true);
   * scope.setAttribute('render_duration', 150);
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAttribute(key, value) {
    return this.setAttributes({ [key]: value });
  }
  /**
   * Removes the attribute with the given key from the scope.
   *
   * @param key - The attribute key.
   *
   * @example
   * ```typescript
   * scope.removeAttribute('is_admin');
   * ```
   */
  removeAttribute(key) {
    if (key in this._attributes) {
      delete this._attributes[key];
      this._notifyScopeListeners();
    }
    return this;
  }
  /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */
  setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras
    };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */
  setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */
  setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the level on the scope for future events.
   */
  setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
  setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */
  setContext(key, context2) {
    if (context2 === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context2;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set the session for the scope.
   */
  setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the session from the scope.
   */
  getSession() {
    return this._session;
  }
  /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */
  update(captureContext) {
    if (!captureContext) {
      return this;
    }
    const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
    const scopeInstance = scopeToMerge instanceof Scope ? scopeToMerge.getScopeData() : isPlainObject(scopeToMerge) ? captureContext : void 0;
    const {
      tags,
      attributes,
      extra,
      user,
      contexts,
      level,
      fingerprint = [],
      propagationContext,
      conversationId
    } = scopeInstance || {};
    this._tags = { ...this._tags, ...tags };
    this._attributes = { ...this._attributes, ...attributes };
    this._extra = { ...this._extra, ...extra };
    this._contexts = { ...this._contexts, ...contexts };
    if (user && Object.keys(user).length) {
      this._user = user;
    }
    if (level) {
      this._level = level;
    }
    if (fingerprint.length) {
      this._fingerprint = fingerprint;
    }
    if (propagationContext) {
      this._propagationContext = propagationContext;
    }
    if (conversationId) {
      this._conversationId = conversationId;
    }
    return this;
  }
  /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._session = void 0;
    this._conversationId = void 0;
    _setSpanForScope(this, void 0);
    this._attachments = [];
    this.setPropagationContext({
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    });
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
  addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
    if (maxCrumbs <= 0) {
      return this;
    }
    const mergedBreadcrumb = {
      timestamp: dateTimestampInSeconds(),
      ...breadcrumb,
      // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
      message: breadcrumb.message ? truncate(breadcrumb.message, 2048) : breadcrumb.message
    };
    this._breadcrumbs.push(mergedBreadcrumb);
    if (this._breadcrumbs.length > maxCrumbs) {
      this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
      this._client?.recordDroppedEvent("buffer_overflow", "log_item");
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the last breadcrumb of the scope.
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * Clear all breadcrumbs from the scope.
   */
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Add an attachment to the scope.
   */
  addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }
  /**
   * Clear all attachments from the scope.
   */
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  /**
   * Get the data of this scope, which should be applied to an event during processing.
   */
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: _getSpanForScope(this),
      conversationId: this._conversationId
    };
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
  setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = merge2(this._sdkProcessingMetadata, newData, 2);
    return this;
  }
  /**
   * Add propagation context to the scope, used for distributed tracing
   */
  setPropagationContext(context2) {
    this._propagationContext = context2;
    return this;
  }
  /**
   * Get propagation context from the scope, used for distributed tracing
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */
  captureException(exception, hint) {
    const eventId = hint?.event_id || uuid4();
    if (!this._client) {
      DEBUG_BUILD && debug3.warn("No client configured on scope - will not capture exception!");
      return eventId;
    }
    const syntheticException = new Error("Sentry syntheticException");
    this._client.captureException(
      exception,
      {
        originalException: exception,
        syntheticException,
        ...hint,
        event_id: eventId
      },
      this
    );
    return eventId;
  }
  /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */
  captureMessage(message, level, hint) {
    const eventId = hint?.event_id || uuid4();
    if (!this._client) {
      DEBUG_BUILD && debug3.warn("No client configured on scope - will not capture message!");
      return eventId;
    }
    const syntheticException = hint?.syntheticException ?? new Error(message);
    this._client.captureMessage(
      message,
      level,
      {
        originalException: message,
        syntheticException,
        ...hint,
        event_id: eventId
      },
      this
    );
    return eventId;
  }
  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
  captureEvent(event, hint) {
    const eventId = event.event_id || hint?.event_id || uuid4();
    if (!this._client) {
      DEBUG_BUILD && debug3.warn("No client configured on scope - will not capture event!");
      return eventId;
    }
    this._client.captureEvent(event, { ...hint, event_id: eventId }, this);
    return eventId;
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((callback) => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
};
__name(Scope, "Scope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/defaultScopes.js
function getDefaultCurrentScope() {
  return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
__name(getDefaultCurrentScope, "getDefaultCurrentScope");
function getDefaultIsolationScope() {
  return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}
__name(getDefaultIsolationScope, "getDefaultIsolationScope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/chain-and-copy-promiselike.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isActualPromise = /* @__PURE__ */ __name((p) => p instanceof Promise && !p[kChainedCopy], "isActualPromise");
var kChainedCopy = /* @__PURE__ */ Symbol("chained PromiseLike");
var chainAndCopyPromiseLike = /* @__PURE__ */ __name((original, onSuccess, onError) => {
  const chained = original.then(
    (value) => {
      onSuccess(value);
      return value;
    },
    (err) => {
      onError(err);
      throw err;
    }
  );
  return isActualPromise(chained) && isActualPromise(original) ? chained : copyProps(original, chained);
}, "chainAndCopyPromiseLike");
var copyProps = /* @__PURE__ */ __name((original, chained) => {
  if (!chained)
    return original;
  let mutated = false;
  for (const key in original) {
    if (key in chained)
      continue;
    mutated = true;
    const value = original[key];
    if (typeof value === "function") {
      Object.defineProperty(chained, key, {
        value: (...args) => value.apply(original, args),
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      chained[key] = value;
    }
  }
  if (mutated)
    Object.assign(chained, { [kChainedCopy]: true });
  return chained;
}, "copyProps");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
var AsyncContextStack = class {
  constructor(scope, isolationScope) {
    let assignedScope;
    if (!scope) {
      assignedScope = new Scope();
    } else {
      assignedScope = scope;
    }
    let assignedIsolationScope;
    if (!isolationScope) {
      assignedIsolationScope = new Scope();
    } else {
      assignedIsolationScope = isolationScope;
    }
    this._stack = [{ scope: assignedScope }];
    this._isolationScope = assignedIsolationScope;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(callback) {
    const scope = this._pushScope();
    let maybePromiseResult;
    try {
      maybePromiseResult = callback(scope);
    } catch (e) {
      this._popScope();
      throw e;
    }
    if (isThenable(maybePromiseResult)) {
      return chainAndCopyPromiseLike(
        maybePromiseResult,
        () => this._popScope(),
        () => this._popScope()
      );
    }
    this._popScope();
    return maybePromiseResult;
  }
  /**
   * Get the client of the stack.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * Get the isolation scope for the stack.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * Push a scope to the stack.
   */
  _pushScope() {
    const scope = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope
    });
    return scope;
  }
  /**
   * Pop a scope from the stack.
   */
  _popScope() {
    if (this._stack.length <= 1)
      return false;
    return !!this._stack.pop();
  }
};
__name(AsyncContextStack, "AsyncContextStack");
function getAsyncContextStack() {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
__name(getAsyncContextStack, "getAsyncContextStack");
function withScope(callback) {
  return getAsyncContextStack().withScope(callback);
}
__name(withScope, "withScope");
function withSetScope(scope, callback) {
  const stack = getAsyncContextStack();
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return callback(scope);
  });
}
__name(withSetScope, "withSetScope");
function withIsolationScope(callback) {
  return getAsyncContextStack().withScope(() => {
    return callback(getAsyncContextStack().getIsolationScope());
  });
}
__name(withIsolationScope, "withIsolationScope");
function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope: (_isolationScope, callback) => {
      return withIsolationScope(callback);
    },
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope()
  };
}
__name(getStackAsyncContextStrategy, "getStackAsyncContextStrategy");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/asyncContext/index.js
function setAsyncContextStrategy(strategy) {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  sentry.acs = strategy;
}
__name(setAsyncContextStrategy, "setAsyncContextStrategy");
function getAsyncContextStrategy(carrier) {
  const sentry = getSentryCarrier(carrier);
  if (sentry.acs) {
    return sentry.acs;
  }
  return getStackAsyncContextStrategy();
}
__name(getAsyncContextStrategy, "getAsyncContextStrategy");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/attributes.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isAttributeObject(maybeObj) {
  return typeof maybeObj === "object" && maybeObj != null && !Array.isArray(maybeObj) && Object.keys(maybeObj).includes("value");
}
__name(isAttributeObject, "isAttributeObject");
function attributeValueToTypedAttributeValue(rawValue, useFallback) {
  const { value, unit } = isAttributeObject(rawValue) ? rawValue : { value: rawValue, unit: void 0 };
  const attributeValue = getTypedAttributeValue(value);
  const checkedUnit = unit && typeof unit === "string" ? { unit } : {};
  if (attributeValue) {
    return { ...attributeValue, ...checkedUnit };
  }
  if (!useFallback || useFallback === "skip-undefined" && value === void 0) {
    return;
  }
  let stringValue = "";
  try {
    stringValue = JSON.stringify(value) ?? "";
  } catch {
  }
  return {
    value: stringValue,
    type: "string",
    ...checkedUnit
  };
}
__name(attributeValueToTypedAttributeValue, "attributeValueToTypedAttributeValue");
function serializeAttributes(attributes, fallback = false) {
  const serializedAttributes = {};
  for (const [key, value] of Object.entries(attributes ?? {})) {
    const typedValue = attributeValueToTypedAttributeValue(value, fallback);
    if (typedValue) {
      serializedAttributes[key] = typedValue;
    }
  }
  return serializedAttributes;
}
__name(serializeAttributes, "serializeAttributes");
function estimateTypedAttributesSizeInBytes(attributes) {
  if (!attributes) {
    return 0;
  }
  let weight = 0;
  for (const [key, attr] of Object.entries(attributes)) {
    weight += key.length * 2;
    weight += attr.type.length * 2;
    weight += (attr.unit?.length ?? 0) * 2;
    const val = attr.value;
    if (Array.isArray(val)) {
      weight += estimatePrimitiveSizeInBytes(val[0]) * val.length;
    } else if (isPrimitive(val)) {
      weight += estimatePrimitiveSizeInBytes(val);
    } else {
      weight += 100;
    }
  }
  return weight;
}
__name(estimateTypedAttributesSizeInBytes, "estimateTypedAttributesSizeInBytes");
function estimatePrimitiveSizeInBytes(value) {
  if (typeof value === "string") {
    return value.length * 2;
  } else if (typeof value === "boolean") {
    return 4;
  } else if (typeof value === "number") {
    return 8;
  }
  return 0;
}
__name(estimatePrimitiveSizeInBytes, "estimatePrimitiveSizeInBytes");
function getTypedAttributeValue(value) {
  if (Array.isArray(value)) {
    return { value, type: "array" };
  }
  const primitiveType = typeof value === "string" ? "string" : typeof value === "boolean" ? "boolean" : typeof value === "number" && !Number.isNaN(value) ? Number.isInteger(value) ? "integer" : "double" : null;
  if (primitiveType) {
    return { value, type: primitiveType };
  }
}
__name(getTypedAttributeValue, "getTypedAttributeValue");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/currentScopes.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _externalPropagationContextProvider;
function getExternalPropagationContext() {
  return _externalPropagationContextProvider?.();
}
__name(getExternalPropagationContext, "getExternalPropagationContext");
function hasExternalPropagationContext() {
  return _externalPropagationContextProvider !== void 0;
}
__name(hasExternalPropagationContext, "hasExternalPropagationContext");
function getCurrentScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getCurrentScope();
}
__name(getCurrentScope, "getCurrentScope");
function getIsolationScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getIsolationScope();
}
__name(getIsolationScope, "getIsolationScope");
function getGlobalScope() {
  return getGlobalSingleton("globalScope", () => new Scope());
}
__name(getGlobalScope, "getGlobalScope");
function withScope2(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [scope, callback] = rest;
    if (!scope) {
      return acs.withScope(callback);
    }
    return acs.withSetScope(scope, callback);
  }
  return acs.withScope(rest[0]);
}
__name(withScope2, "withScope");
function withIsolationScope2(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [isolationScope, callback] = rest;
    if (!isolationScope) {
      return acs.withIsolationScope(callback);
    }
    return acs.withSetIsolationScope(isolationScope, callback);
  }
  return acs.withIsolationScope(rest[0]);
}
__name(withIsolationScope2, "withIsolationScope");
function getClient() {
  return getCurrentScope().getClient();
}
__name(getClient, "getClient");
function getTraceContextFromScope(scope) {
  const externalContext = getExternalPropagationContext();
  if (externalContext) {
    return { trace_id: externalContext.traceId, span_id: externalContext.spanId };
  }
  const propagationContext = scope.getPropagationContext();
  const { traceId, parentSpanId, propagationSpanId } = propagationContext;
  const traceContext = {
    trace_id: traceId,
    span_id: propagationSpanId || generateSpanId()
  };
  if (parentSpanId) {
    traceContext.parent_span_id = parentSpanId;
  }
  return traceContext;
}
__name(getTraceContextFromScope, "getTraceContextFromScope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/semanticAttributes.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
var SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = "sentry.previous_trace_sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
var SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
var SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE = "sentry.status.message";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
var SEMANTIC_ATTRIBUTE_SENTRY_RELEASE = "sentry.release";
var SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT = "sentry.environment";
var SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS = "sentry.sdk.integrations";
var SEMANTIC_ATTRIBUTE_USER_ID = "user.id";
var SEMANTIC_ATTRIBUTE_USER_EMAIL = "user.email";
var SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS = "user.ip_address";
var SEMANTIC_ATTRIBUTE_USER_USERNAME = "user.name";
var SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
var SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
var SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
var SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = "http.request.method";
var SEMANTIC_ATTRIBUTE_URL_FULL = "url.full";
var GEN_AI_CONVERSATION_ID_ATTRIBUTE = "gen_ai.conversation.id";

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spanstatus.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SPAN_STATUS_UNSET = 0;
var SPAN_STATUS_OK = 1;
var SPAN_STATUS_ERROR = 2;
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return { code: SPAN_STATUS_OK };
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return { code: SPAN_STATUS_ERROR, message: "unauthenticated" };
      case 403:
        return { code: SPAN_STATUS_ERROR, message: "permission_denied" };
      case 404:
        return { code: SPAN_STATUS_ERROR, message: "not_found" };
      case 409:
        return { code: SPAN_STATUS_ERROR, message: "already_exists" };
      case 413:
        return { code: SPAN_STATUS_ERROR, message: "failed_precondition" };
      case 429:
        return { code: SPAN_STATUS_ERROR, message: "resource_exhausted" };
      case 499:
        return { code: SPAN_STATUS_ERROR, message: "cancelled" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "invalid_argument" };
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return { code: SPAN_STATUS_ERROR, message: "unimplemented" };
      case 503:
        return { code: SPAN_STATUS_ERROR, message: "unavailable" };
      case 504:
        return { code: SPAN_STATUS_ERROR, message: "deadline_exceeded" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "internal_error" };
    }
  }
  return { code: SPAN_STATUS_ERROR, message: "internal_error" };
}
__name(getSpanStatusFromHttpCode, "getSpanStatusFromHttpCode");
function setHttpStatus(span, httpStatus) {
  span.setAttribute("http.response.status_code", httpStatus);
  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== "unknown_error") {
    span.setStatus(spanStatus);
  }
}
__name(setHttpStatus, "setHttpStatus");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/utils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
var ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
var OTEL_SOURCE_INFERENCE_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.otelSourceInference");
var OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.otelSourceExplicitlySet");
var TRACER_PROVIDER_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.tracerProviderSpan");
function setCapturedScopesOnSpan(span, scope, isolationScope) {
  if (span) {
    addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, makeWeakRef(isolationScope));
    addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
  }
}
__name(setCapturedScopesOnSpan, "setCapturedScopesOnSpan");
function getCapturedScopesOnSpan(span) {
  const spanWithScopes = span;
  return {
    scope: spanWithScopes[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: derefWeakRef(spanWithScopes[ISOLATION_SCOPE_ON_START_SPAN_FIELD])
  };
}
__name(getCapturedScopesOnSpan, "getCapturedScopesOnSpan");
function spanShouldInferOtelSource(span) {
  return span[OTEL_SOURCE_INFERENCE_SPAN_FIELD] === true;
}
__name(spanShouldInferOtelSource, "spanShouldInferOtelSource");
function markSpanSourceAsExplicit(span) {
  addNonEnumerableProperty(span, OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD, true);
}
__name(markSpanSourceAsExplicit, "markSpanSourceAsExplicit");
function spanIsTracerProviderSpan(span) {
  return span[TRACER_PROVIDER_SPAN_FIELD] === true;
}
__name(spanIsTracerProviderSpan, "spanIsTracerProviderSpan");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/tracing.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/baggage.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
var MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
  const baggageObject = parseBaggageHeader(baggageHeader);
  if (!baggageObject) {
    return void 0;
  }
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.startsWith(SENTRY_BAGGAGE_KEY_PREFIX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext;
  } else {
    return void 0;
  }
}
__name(baggageHeaderToDynamicSamplingContext, "baggageHeaderToDynamicSamplingContext");
function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
  if (!dynamicSamplingContext) {
    return void 0;
  }
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {}
  );
  return objectToBaggageHeader(sentryPrefixedDSC);
}
__name(dynamicSamplingContextToSentryBaggageHeader, "dynamicSamplingContextToSentryBaggageHeader");
function parseBaggageHeader(baggageHeader) {
  if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) {
    return void 0;
  }
  if (Array.isArray(baggageHeader)) {
    return baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      Object.entries(currBaggageObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    }, {});
  }
  return baggageHeaderToObject(baggageHeader);
}
__name(parseBaggageHeader, "parseBaggageHeader");
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader.split(",").map((baggageEntry) => {
    const eqIdx = baggageEntry.indexOf("=");
    if (eqIdx === -1) {
      return [];
    }
    const key = baggageEntry.slice(0, eqIdx);
    const value = baggageEntry.slice(eqIdx + 1);
    return [key, value].map((keyOrValue) => {
      try {
        return decodeURIComponent(keyOrValue.trim());
      } catch {
        return;
      }
    });
  }).reduce((acc, [key, value]) => {
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
__name(baggageHeaderToObject, "baggageHeaderToObject");
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    return void 0;
  }
  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      DEBUG_BUILD && debug3.warn(
        `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`
      );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, "");
}
__name(objectToBaggageHeader, "objectToBaggageHeader");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/dsn.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ORG_ID_REGEX = /^o(\d+)\./;
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === "http" || protocol === "https";
}
__name(isValidProtocol, "isValidProtocol");
function dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
__name(dsnToString, "dsnToString");
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    consoleSandbox(() => {
      console.error(`Invalid Sentry Dsn: ${str}`);
    });
    return void 0;
  }
  const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
  let path = "";
  let projectId = lastPath;
  const split = projectId.split("/");
  if (split.length > 1) {
    path = split.slice(0, -1).join("/");
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
}
__name(dsnFromString, "dsnFromString");
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || "",
    pass: components.pass || "",
    host: components.host,
    port: components.port || "",
    path: components.path || "",
    projectId: components.projectId
  };
}
__name(dsnFromComponents, "dsnFromComponents");
function validateDsn(dsn) {
  if (!DEBUG_BUILD) {
    return true;
  }
  const { port, projectId, protocol } = dsn;
  const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
  const hasMissingRequiredComponent = requiredComponents.find((component) => {
    if (!dsn[component]) {
      debug3.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });
  if (hasMissingRequiredComponent) {
    return false;
  }
  if (!projectId.match(/^\d+$/)) {
    debug3.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }
  if (!isValidProtocol(protocol)) {
    debug3.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }
  if (port && isNaN(parseInt(port, 10))) {
    debug3.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }
  return true;
}
__name(validateDsn, "validateDsn");
function extractOrgIdFromDsnHost(host) {
  const match = host.match(ORG_ID_REGEX);
  return match?.[1];
}
__name(extractOrgIdFromDsnHost, "extractOrgIdFromDsnHost");
function extractOrgIdFromClient(client) {
  const options = client.getOptions();
  const { host } = client.getDsn() || {};
  let org_id;
  if (options.orgId) {
    org_id = String(options.orgId);
  } else if (host) {
    org_id = extractOrgIdFromDsnHost(host);
  }
  return org_id;
}
__name(extractOrgIdFromClient, "extractOrgIdFromClient");
function makeDsn(from) {
  const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
  if (!components || !validateDsn(components)) {
    return void 0;
  }
  return components;
}
__name(makeDsn, "makeDsn");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function parseSampleRate(sampleRate) {
  if (typeof sampleRate === "boolean") {
    return Number(sampleRate);
  }
  const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
  if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
    return void 0;
  }
  return rate;
}
__name(parseSampleRate, "parseSampleRate");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/tracing.js
var TRACEPARENT_REGEXP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  // whitespace
);
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return void 0;
  }
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return void 0;
  }
  let parentSampled;
  if (matches[3] === "1") {
    parentSampled = true;
  } else if (matches[3] === "0") {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}
__name(extractTraceparentData, "extractTraceparentData");
function propagationContextFromHeaders(sentryTrace, baggage) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = baggageHeaderToDynamicSamplingContext(baggage);
  if (!traceparentData?.traceId) {
    return {
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    };
  }
  const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);
  if (dynamicSamplingContext) {
    dynamicSamplingContext.sample_rand = sampleRand.toString();
  }
  const { traceId, parentSpanId, parentSampled } = traceparentData;
  return {
    traceId,
    parentSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {},
    // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
    sampleRand
  };
}
__name(propagationContextFromHeaders, "propagationContextFromHeaders");
function generateSentryTraceHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  let sampledString = "";
  if (sampled !== void 0) {
    sampledString = sampled ? "-1" : "-0";
  }
  return `${traceId}-${spanId}${sampledString}`;
}
__name(generateSentryTraceHeader, "generateSentryTraceHeader");
function generateTraceparentHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  return `00-${traceId}-${spanId}-${sampled ? "01" : "00"}`;
}
__name(generateTraceparentHeader, "generateTraceparentHeader");
function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
  const parsedSampleRand = parseSampleRate(dsc?.sample_rand);
  if (parsedSampleRand !== void 0) {
    return parsedSampleRand;
  }
  const parsedSampleRate = parseSampleRate(dsc?.sample_rate);
  if (parsedSampleRate && traceparentData?.parentSampled !== void 0) {
    return traceparentData.parentSampled ? (
      // Returns a sample rand with positive sampling decision [0, sampleRate)
      safeMathRandom() * parsedSampleRate
    ) : (
      // Returns a sample rand with negative sampling decision [sampleRate, 1)
      parsedSampleRate + safeMathRandom() * (1 - parsedSampleRate)
    );
  } else {
    return safeMathRandom();
  }
}
__name(getSampleRandFromTraceparentAndDsc, "getSampleRandFromTraceparentAndDsc");
function shouldContinueTrace(client, baggageOrgId) {
  const clientOrgId = extractOrgIdFromClient(client);
  if (baggageOrgId && clientOrgId && baggageOrgId !== clientOrgId) {
    debug3.log(
      `Won't continue trace because org IDs don't match (incoming baggage: ${baggageOrgId}, SDK options: ${clientOrgId})`
    );
    return false;
  }
  const strictTraceContinuation = client.getOptions().strictTraceContinuation || false;
  if (strictTraceContinuation) {
    if (baggageOrgId && !clientOrgId || !baggageOrgId && clientOrgId) {
      debug3.log(
        `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${baggageOrgId}, Sentry client: ${clientOrgId})`
      );
      return false;
    }
  }
  return true;
}
__name(shouldContinueTrace, "shouldContinueTrace");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/spanUtils.js
var TRACE_FLAG_NONE = 0;
var TRACE_FLAG_SAMPLED = 1;
var hasShownSpanDropWarning = false;
function spanToTransactionTraceContext(span) {
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);
  return {
    parent_span_id,
    span_id,
    trace_id,
    data,
    op,
    status,
    origin,
    links
  };
}
__name(spanToTransactionTraceContext, "spanToTransactionTraceContext");
function spanToTraceContext(span) {
  const { spanId, traceId: trace_id, isRemote } = span.spanContext();
  const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
  const scope = getCapturedScopesOnSpan(span).scope;
  const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || generateSpanId() : spanId;
  return {
    parent_span_id,
    span_id,
    trace_id
  };
}
__name(spanToTraceContext, "spanToTraceContext");
function spanToTraceHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateSentryTraceHeader(traceId, spanId, sampled);
}
__name(spanToTraceHeader, "spanToTraceHeader");
function spanToTraceparentHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateTraceparentHeader(traceId, spanId, sampled);
}
__name(spanToTraceparentHeader, "spanToTraceparentHeader");
function convertSpanLinksForEnvelope(links) {
  if (links && links.length > 0) {
    return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes }) => ({
      span_id: spanId,
      trace_id: traceId,
      sampled: traceFlags === TRACE_FLAG_SAMPLED,
      attributes,
      ...restContext
    }));
  } else {
    return void 0;
  }
}
__name(convertSpanLinksForEnvelope, "convertSpanLinksForEnvelope");
function getStreamedSpanLinks(links) {
  if (links?.length) {
    return links.map(({ context: { spanId, traceId, traceFlags }, attributes }) => ({
      span_id: spanId,
      trace_id: traceId,
      sampled: traceFlags === TRACE_FLAG_SAMPLED,
      attributes
    }));
  } else {
    return void 0;
  }
}
__name(getStreamedSpanLinks, "getStreamedSpanLinks");
function spanTimeInputToSeconds(input) {
  if (typeof input === "number") {
    return ensureTimestampInSeconds(input);
  }
  if (Array.isArray(input)) {
    return input[0] + input[1] / 1e9;
  }
  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }
  return timestampInSeconds();
}
__name(spanTimeInputToSeconds, "spanTimeInputToSeconds");
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
__name(ensureTimestampInSeconds, "ensureTimestampInSeconds");
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, status, links } = span;
    return {
      span_id,
      trace_id,
      data: attributes,
      description: name,
      parent_span_id: getOtelParentSpanId(span),
      start_timestamp: spanTimeInputToSeconds(startTime),
      // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
      timestamp: spanTimeInputToSeconds(endTime) || void 0,
      status: getStatusMessage(status),
      op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      links: convertSpanLinksForEnvelope(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    data: {}
  };
}
__name(spanToJSON, "spanToJSON");
function spanToStreamedSpanJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getStreamedSpanJSON();
  }
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, status, links } = span;
    return {
      name,
      span_id,
      trace_id,
      parent_span_id: getOtelParentSpanId(span),
      start_timestamp: spanTimeInputToSeconds(startTime),
      end_timestamp: spanTimeInputToSeconds(endTime),
      is_segment: span === INTERNAL_getSegmentSpan(span),
      status: getSimpleStatus(status),
      attributes: addStatusMessageAttribute(attributes, status),
      links: getStreamedSpanLinks(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    name: "",
    end_timestamp: 0,
    status: "ok",
    is_segment: span === INTERNAL_getSegmentSpan(span)
  };
}
__name(spanToStreamedSpanJSON, "spanToStreamedSpanJSON");
function getOtelParentSpanId(span) {
  return "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0;
}
__name(getOtelParentSpanId, "getOtelParentSpanId");
function streamedSpanJsonToSerializedSpan(spanJson) {
  return {
    ...spanJson,
    attributes: serializeAttributes(spanJson.attributes),
    links: spanJson.links?.map((link) => ({
      ...link,
      attributes: serializeAttributes(link.attributes)
    }))
  };
}
__name(streamedSpanJsonToSerializedSpan, "streamedSpanJsonToSerializedSpan");
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
__name(spanIsOpenTelemetrySdkTraceBaseSpan, "spanIsOpenTelemetrySdkTraceBaseSpan");
function spanIsSentrySpan(span) {
  return typeof span.getSpanJSON === "function";
}
__name(spanIsSentrySpan, "spanIsSentrySpan");
function spanIsSampled(span) {
  const { traceFlags } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}
__name(spanIsSampled, "spanIsSampled");
function getStatusMessage(status) {
  if (!status || status.code === SPAN_STATUS_UNSET) {
    return void 0;
  }
  if (status.code === SPAN_STATUS_OK) {
    return "ok";
  }
  return status.message || "internal_error";
}
__name(getStatusMessage, "getStatusMessage");
function getSimpleStatus(status) {
  return !status || status.code === SPAN_STATUS_OK || status.code === SPAN_STATUS_UNSET || status.message === "cancelled" ? "ok" : "error";
}
__name(getSimpleStatus, "getSimpleStatus");
function addStatusMessageAttribute(attributes, status) {
  const statusMessage = getSimpleStatus(status) === "error" ? status?.message : void 0;
  return {
    ...statusMessage && { [SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE]: statusMessage },
    ...attributes
  };
}
__name(addStatusMessageAttribute, "addStatusMessageAttribute");
var CHILD_SPANS_FIELD = "_sentryChildSpans";
var ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, rootSpan);
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    addNonEnumerableProperty(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([childSpan]));
  }
}
__name(addChildSpanToSpan, "addChildSpanToSpan");
function getSpanDescendants(span) {
  const resultSet = /* @__PURE__ */ new Set();
  function addSpanChildren(span2) {
    if (resultSet.has(span2)) {
      return;
    } else if (spanIsSampled(span2)) {
      resultSet.add(span2);
      const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }
  __name(addSpanChildren, "addSpanChildren");
  addSpanChildren(span);
  return Array.from(resultSet);
}
__name(getSpanDescendants, "getSpanDescendants");
var getRootSpan = INTERNAL_getSegmentSpan;
function INTERNAL_getSegmentSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}
__name(INTERNAL_getSegmentSpan, "INTERNAL_getSegmentSpan");
function getActiveSpan() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan();
  }
  return _getSpanForScope(getCurrentScope());
}
__name(getActiveSpan, "getActiveSpan");
function showSpanDropWarning() {
  if (!hasShownSpanDropWarning) {
    consoleSandbox(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
      );
    });
    hasShownSpanDropWarning = true;
  }
}
__name(showSpanDropWarning, "showSpanDropWarning");
function updateSpanName(span, name) {
  span.updateName(name);
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
    [SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: name
  });
}
__name(updateSpanName, "updateSpanName");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function hasSpansEnabled(maybeOptions) {
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const options = maybeOptions || getClient()?.getOptions();
  return !!options && // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
  (options.tracesSampleRate != null || !!options.tracesSampler);
}
__name(hasSpansEnabled, "hasSpansEnabled");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/should-ignore-span.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function logIgnoredSpan(droppedSpan) {
  debug3.log(`Ignoring span ${droppedSpan.op} - ${droppedSpan.description} because it matches \`ignoreSpans\`.`);
}
__name(logIgnoredSpan, "logIgnoredSpan");
function shouldIgnoreSpan(span, ignoreSpans) {
  if (!ignoreSpans?.length) {
    return false;
  }
  for (const pattern of ignoreSpans) {
    if (isStringOrRegExp(pattern)) {
      if (span.description && isMatchingPattern(span.description, pattern)) {
        DEBUG_BUILD && logIgnoredSpan(span);
        return true;
      }
      continue;
    }
    const hasAttributes = !!pattern.attributes && Object.keys(pattern.attributes).length > 0;
    if (!pattern.name && !pattern.op && !hasAttributes) {
      continue;
    }
    const nameMatches = pattern.name ? span.description && isMatchingPattern(span.description, pattern.name) : true;
    const opMatches = pattern.op ? span.op && isMatchingPattern(span.op, pattern.op) : true;
    const attrsMatch = pattern.attributes ? Object.entries(pattern.attributes).every(
      ([key, valuePattern]) => _matchesAttributeValue(span.attributes?.[key], valuePattern)
    ) : true;
    if (nameMatches && opMatches && attrsMatch) {
      DEBUG_BUILD && logIgnoredSpan(span);
      return true;
    }
  }
  return false;
}
__name(shouldIgnoreSpan, "shouldIgnoreSpan");
function _matchesAttributeValue(actual, pat) {
  if (typeof actual === "string" && (typeof pat === "string" || pat instanceof RegExp)) {
    return isMatchingPattern(actual, pat);
  }
  if (Array.isArray(actual) && Array.isArray(pat)) {
    return actual.length === pat.length && actual.every((v, i) => v === pat[i]);
  }
  return actual === pat;
}
__name(_matchesAttributeValue, "_matchesAttributeValue");
function reparentChildSpans(spans, dropSpan) {
  const droppedSpanParentId = dropSpan.parent_span_id;
  const droppedSpanId = dropSpan.span_id;
  if (!droppedSpanParentId) {
    return;
  }
  for (const span of spans) {
    if (span.parent_span_id === droppedSpanId) {
      span.parent_span_id = droppedSpanParentId;
    }
  }
}
__name(reparentChildSpans, "reparentChildSpans");
function isStringOrRegExp(value) {
  return typeof value === "string" || value instanceof RegExp;
}
__name(isStringOrRegExp, "isStringOrRegExp");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NON_RECORDING_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.nonRecordingSpan");
var SentryNonRecordingSpan = class {
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    this.dropReason = spanContext.dropReason;
    addNonEnumerableProperty(this, NON_RECORDING_SPAN_FIELD, true);
  }
  /** @inheritdoc */
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  end(_timestamp) {
  }
  /** @inheritdoc */
  setAttribute(_key, _value) {
    return this;
  }
  /** @inheritdoc */
  setAttributes(_values) {
    return this;
  }
  /** @inheritdoc */
  setStatus(_status) {
    return this;
  }
  /** @inheritdoc */
  updateName(_name) {
    return this;
  }
  /** @inheritdoc */
  isRecording() {
    return false;
  }
  /** @inheritdoc */
  addEvent(_name, _attributesOrStartTime, _startTime) {
    return this;
  }
  /** @inheritDoc */
  addLink(_link) {
    return this;
  }
  /** @inheritDoc */
  addLinks(_links) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
};
__name(SentryNonRecordingSpan, "SentryNonRecordingSpan");
function spanIsNonRecordingSpan(span) {
  return !!span && span[NON_RECORDING_SPAN_FIELD] === true;
}
__name(spanIsNonRecordingSpan, "spanIsNonRecordingSpan");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/sentrySpan.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/envelope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+conventions@0.15.1/node_modules/@sentry/conventions/dist/attributes.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var yp = "sentry.sdk.name";
var _p = "sentry.sdk.version";
var hp = "sentry.segment.id";
var fp = "sentry.segment.name";
var Sp = "sentry.span.source";
var Rp = "sentry.trace_lifecycle";

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_ENVIRONMENT = "production";

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
var FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span;
  addNonEnumerableProperty(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
__name(freezeDscOnSpan, "freezeDscOnSpan");
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();
  const { publicKey: public_key } = client.getDsn() || {};
  const dsc = {
    environment: options.environment || DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key,
    trace_id,
    org_id: extractOrgIdFromClient(client)
  };
  client.emit("createDsc", dsc);
  return dsc;
}
__name(getDynamicSamplingContextFromClient, "getDynamicSamplingContextFromClient");
function getDynamicSamplingContextFromScope(client, scope) {
  const propagationContext = scope.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
__name(getDynamicSamplingContextFromScope, "getDynamicSamplingContextFromScope");
function getDynamicSamplingContextFromSpan(span) {
  const client = getClient();
  if (!client) {
    return {};
  }
  const rootSpan = getRootSpan(span);
  const rootSpanJson = spanToJSON(rootSpan);
  const rootSpanAttributes = rootSpanJson.data;
  const traceState = rootSpan.spanContext().traceState;
  const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
  function applyLocalSampleRateToDsc(dsc2) {
    if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") {
      dsc2.sample_rate = `${rootSpanSampleRate}`;
    }
    return dsc2;
  }
  __name(applyLocalSampleRateToDsc, "applyLocalSampleRateToDsc");
  const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return applyLocalSampleRateToDsc(frozenDsc);
  }
  if (spanIsNonRecordingSpan(rootSpan) && !hasSpansEnabled(client.getOptions())) {
    const capturedScope = getCapturedScopesOnSpan(rootSpan).scope;
    if (capturedScope) {
      return applyLocalSampleRateToDsc({ ...getDynamicSamplingContextFromScope(client, capturedScope) });
    }
  }
  const traceStateDsc = traceState?.get("sentry.dsc");
  const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
  if (dscOnTraceState) {
    return applyLocalSampleRateToDsc(dscOnTraceState);
  }
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
  const source = rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ?? rootSpanAttributes[Sp];
  const name = rootSpanJson.description;
  if (source !== "url" && name) {
    dsc.transaction = name;
  }
  if (hasSpansEnabled()) {
    dsc.sampled = String(spanIsSampled(rootSpan));
    dsc.sample_rand = // In OTEL we store the sample rand on the trace state because we cannot access scopes for NonRecordingSpans
    // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
    traceState?.get("sentry.sample_rand") ?? // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
    getCapturedScopesOnSpan(rootSpan).scope?.getPropagationContext().sampleRand.toString();
  }
  applyLocalSampleRateToDsc(dsc);
  client.emit("createDsc", dsc, rootSpan);
  return dsc;
}
__name(getDynamicSamplingContextFromSpan, "getDynamicSamplingContextFromSpan");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/beforeSendSpan.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isStreamedBeforeSendSpanCallback(callback) {
  return !!callback && typeof callback === "function" && "_streamed" in callback && !!callback._streamed;
}
__name(isStreamedBeforeSendSpanCallback, "isStreamedBeforeSendSpanCallback");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/envelope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createEnvelope(headers, items = []) {
  return [headers, items];
}
__name(createEnvelope, "createEnvelope");
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]];
}
__name(addItemToEnvelope, "addItemToEnvelope");
function forEachEnvelopeItem(envelope, callback) {
  const envelopeItems = envelope[1];
  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);
    if (result) {
      return true;
    }
  }
  return false;
}
__name(forEachEnvelopeItem, "forEachEnvelopeItem");
function envelopeContainsItemType(envelope, types) {
  return forEachEnvelopeItem(envelope, (_, type) => types.includes(type));
}
__name(envelopeContainsItemType, "envelopeContainsItemType");
function encodeUTF8(input) {
  const carrier = getSentryCarrier(GLOBAL_OBJ);
  return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
__name(encodeUTF8, "encodeUTF8");
function serializeEnvelope(envelope) {
  const [envHeaders, items] = envelope;
  let parts = JSON.stringify(envHeaders);
  function append(next) {
    if (typeof parts === "string") {
      parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
    } else {
      parts.push(typeof next === "string" ? encodeUTF8(next) : next);
    }
  }
  __name(append, "append");
  for (const item of items) {
    const [itemHeaders, payload] = item;
    append(`
${JSON.stringify(itemHeaders)}
`);
    if (typeof payload === "string" || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch {
        stringifiedPayload = JSON.stringify(normalize(payload));
      }
      append(stringifiedPayload);
    }
  }
  return typeof parts === "string" ? parts : concatBuffers(parts);
}
__name(serializeEnvelope, "serializeEnvelope");
function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }
  return merged;
}
__name(concatBuffers, "concatBuffers");
function createSpanEnvelopeItem(spanJson) {
  const spanHeaders = {
    type: "span"
  };
  return [spanHeaders, spanJson];
}
__name(createSpanEnvelopeItem, "createSpanEnvelopeItem");
function createAttachmentEnvelopeItem(attachment) {
  const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
  return [
    {
      type: "attachment",
      length: buffer.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType
    },
    buffer
  ];
}
__name(createAttachmentEnvelopeItem, "createAttachmentEnvelopeItem");
var DATA_CATEGORY_OVERRIDES = {
  sessions: "session",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  raw_security: "security",
  log: "log_item",
  trace_metric: "metric"
};
function _isOverriddenType(type) {
  return type in DATA_CATEGORY_OVERRIDES;
}
__name(_isOverriddenType, "_isOverriddenType");
function envelopeItemTypeToDataCategory(type) {
  return _isOverriddenType(type) ? DATA_CATEGORY_OVERRIDES[type] : type;
}
__name(envelopeItemTypeToDataCategory, "envelopeItemTypeToDataCategory");
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent?.sdk) {
    return;
  }
  const { name, version: version2 } = metadataOrEvent.sdk;
  return { name, version: version2 };
}
__name(getSdkMetadataForEnvelopeHeader, "getSdkMetadataForEnvelopeHeader");
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
  const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: event.event_id,
    sent_at: new Date(safeDateNow()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) },
    ...dynamicSamplingContext && {
      trace: dynamicSamplingContext
    }
  };
}
__name(createEventEnvelopeHeaders, "createEventEnvelopeHeaders");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/envelope.js
function _enhanceEventWithSdkInfo(event, newSdkInfo) {
  if (!newSdkInfo) {
    return event;
  }
  const eventSdkInfo = event.sdk || {};
  event.sdk = {
    ...eventSdkInfo,
    name: eventSdkInfo.name || newSdkInfo.name,
    version: eventSdkInfo.version || newSdkInfo.version,
    integrations: [...event.sdk?.integrations || [], ...newSdkInfo.integrations || []],
    packages: [...event.sdk?.packages || [], ...newSdkInfo.packages || []],
    settings: event.sdk?.settings || newSdkInfo.settings ? {
      ...event.sdk?.settings,
      ...newSdkInfo.settings
    } : void 0
  };
  return event;
}
__name(_enhanceEventWithSdkInfo, "_enhanceEventWithSdkInfo");
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: new Date(safeDateNow()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
  return createEnvelope(envelopeHeaders, [envelopeItem]);
}
__name(createSessionEnvelope, "createSessionEnvelope");
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  _enhanceEventWithSdkInfo(event, metadata?.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}
__name(createEventEnvelope, "createEventEnvelope");
function createSpanEnvelope(spans, client) {
  function dscHasRequiredProps2(dsc2) {
    return !!dsc2.trace_id && !!dsc2.public_key;
  }
  __name(dscHasRequiredProps2, "dscHasRequiredProps");
  const dsc = getDynamicSamplingContextFromSpan(spans[0]);
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  const headers = {
    sent_at: new Date(safeDateNow()).toISOString(),
    ...dscHasRequiredProps2(dsc) && { trace: dsc },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const { beforeSendSpan, ignoreSpans } = client?.getOptions() || {};
  const filteredSpans = ignoreSpans?.length ? spans.filter((span) => {
    const json = spanToJSON(span);
    return !shouldIgnoreSpan({ description: json.description, op: json.op, attributes: json.data }, ignoreSpans);
  }) : spans;
  const droppedSpans = spans.length - filteredSpans.length;
  if (droppedSpans) {
    client?.recordDroppedEvent("before_send", "span", droppedSpans);
  }
  const convertToSpanJSON = beforeSendSpan ? (span) => {
    const spanJson = spanToJSON(span);
    const processedSpan = !isStreamedBeforeSendSpanCallback(beforeSendSpan) ? beforeSendSpan(spanJson) : spanJson;
    if (!processedSpan) {
      showSpanDropWarning();
      return spanJson;
    }
    return processedSpan;
  } : spanToJSON;
  const items = [];
  for (const span of filteredSpans) {
    const spanJson = convertToSpanJSON(span);
    if (spanJson) {
      items.push(createSpanEnvelopeItem(spanJson));
    }
  }
  return createEnvelope(headers, items);
}
__name(createSpanEnvelope, "createSpanEnvelope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/logSpans.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function logSpanStart(span) {
  if (!DEBUG_BUILD)
    return;
  const { description = "< unknown name >", op = "< unknown op >", parent_span_id: parentSpanId } = spanToJSON(span);
  const { spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
  const infoParts = [`op: ${op}`, `name: ${description}`, `ID: ${spanId}`];
  if (parentSpanId) {
    infoParts.push(`parent ID: ${parentSpanId}`);
  }
  if (!isRootSpan) {
    const { op: op2, description: description2 } = spanToJSON(rootSpan);
    infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
    if (op2) {
      infoParts.push(`root op: ${op2}`);
    }
    if (description2) {
      infoParts.push(`root description: ${description2}`);
    }
  }
  debug3.log(`${header}
  ${infoParts.join("\n  ")}`);
}
__name(logSpanStart, "logSpanStart");
function logSpanEnd(span) {
  if (!DEBUG_BUILD)
    return;
  const { description = "< unknown name >", op = "< unknown op >" } = spanToJSON(span);
  const { spanId } = span.spanContext();
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? "root " : ""}span "${description}" with ID ${spanId}`;
  debug3.log(msg);
}
__name(logSpanEnd, "logSpanEnd");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/measurement.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function timedEventsToMeasurements(events) {
  if (!events || events.length === 0) {
    return void 0;
  }
  const measurements = {};
  events.forEach((event) => {
    const attributes = event.attributes || {};
    const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
    const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
    if (typeof unit === "string" && typeof value === "number") {
      measurements[event.name] = { value, unit };
    }
  });
  return measurements;
}
__name(timedEventsToMeasurements, "timedEventsToMeasurements");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/segmentSpanCaptureStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function getSegmentSpanCaptureStrategy() {
  return getSentryCarrier(getMainCarrier()).segmentSpanCaptureStrategy;
}
__name(getSegmentSpanCaptureStrategy, "getSegmentSpanCaptureStrategy");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/hasSpanStreamingEnabled.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function hasSpanStreamingEnabled(client) {
  return client.getOptions().traceLifecycle === "stream";
}
__name(hasSpanStreamingEnabled, "hasSpanStreamingEnabled");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/sentrySpan.js
var MAX_SPAN_COUNT = 1e3;
var SentrySpan = class {
  /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    this._startTime = spanContext.startTimestamp || timestampInSeconds();
    this._links = spanContext.links;
    this._attributes = {};
    this.setAttributes({
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op,
      ...spanContext.attributes
    });
    this._name = spanContext.name;
    if (spanContext.parentSpanId) {
      this._parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this._sampled = spanContext.sampled;
    }
    if (spanContext.endTimestamp) {
      this._endTime = spanContext.endTimestamp;
    }
    this._events = [];
    this._isStandaloneSpan = spanContext.isStandalone;
    if (this._endTime) {
      this._onSpanEnded();
    }
  }
  /** @inheritDoc */
  addLink(link) {
    if (this._frozen) {
      return this;
    }
    if (this._links) {
      this._links.push(link);
    } else {
      this._links = [link];
    }
    return this;
  }
  /** @inheritDoc */
  addLinks(links) {
    if (this._frozen) {
      return this;
    }
    if (this._links) {
      this._links.push(...links);
    } else {
      this._links = links;
    }
    return this;
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
  /** @inheritdoc */
  spanContext() {
    const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
    return {
      spanId,
      traceId,
      traceFlags: sampled ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  setAttribute(key, value) {
    if (this._frozen) {
      return this;
    }
    if (value === void 0) {
      delete this._attributes[key];
    } else {
      this._attributes[key] = value;
    }
    if (key === SEMANTIC_ATTRIBUTE_SENTRY_SOURCE && value !== void 0 && spanShouldInferOtelSource(this)) {
      markSpanSourceAsExplicit(this);
    }
    return this;
  }
  /** @inheritdoc */
  setAttributes(attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */
  updateStartTime(timeInput) {
    if (this._frozen) {
      return;
    }
    this._startTime = spanTimeInputToSeconds(timeInput);
  }
  /**
   * @inheritDoc
   */
  setStatus(value) {
    if (this._frozen) {
      return this;
    }
    this._status = value;
    return this;
  }
  /**
   * @inheritDoc
   */
  updateName(name) {
    if (this._frozen) {
      return this;
    }
    this._name = name;
    if (!spanShouldInferOtelSource(this)) {
      this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
    }
    return this;
  }
  /** @inheritdoc */
  end(endTimestamp) {
    if (this._endTime) {
      this._frozen = spanIsTracerProviderSpan(this);
      return;
    }
    this._endTime = spanTimeInputToSeconds(endTimestamp);
    logSpanEnd(this);
    this._onSpanEnded();
    this._frozen = spanIsTracerProviderSpan(this);
  }
  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: timedEventsToMeasurements(this._events),
      is_segment: this._isStandaloneSpan && getRootSpan(this) === this || void 0,
      segment_id: this._isStandaloneSpan ? getRootSpan(this).spanContext().spanId : void 0,
      links: convertSpanLinksForEnvelope(this._links)
    };
  }
  /**
   * Get {@link StreamedSpanJSON} representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToStreamedSpanJSON(span)` instead.
   */
  getStreamedSpanJSON() {
    return {
      name: this._name ?? "",
      span_id: this._spanId,
      trace_id: this._traceId,
      parent_span_id: this._parentSpanId,
      start_timestamp: this._startTime,
      // just in case _endTime is not set, we use the start time (i.e. duration 0)
      end_timestamp: this._endTime ?? this._startTime,
      is_segment: this._isStandaloneSpan || this === getRootSpan(this),
      status: getSimpleStatus(this._status),
      attributes: addStatusMessageAttribute(this._attributes, this._status),
      links: getStreamedSpanLinks(this._links)
    };
  }
  /** @inheritdoc */
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  /**
   * @inheritdoc
   */
  addEvent(name, attributesOrStartTime, startTime) {
    if (this._frozen) {
      return this;
    }
    DEBUG_BUILD && debug3.log("[Tracing] Adding an event to span:", name);
    const time3 = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
    const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
    const event = {
      name,
      time: spanTimeInputToSeconds(time3),
      attributes
    };
    this._events.push(event);
    return this;
  }
  /**
   * This method should generally not be used,
   * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
   * USE THIS WITH CAUTION!
   * @internal
   * @hidden
   * @experimental
   */
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  /** Emit `spanEnd` when the span is ended. */
  _onSpanEnded() {
    const client = getClient();
    if (client) {
      client.emit("spanEnd", this);
      if (!this._isStandaloneSpan) {
        client.emit("afterSpanEnd", this);
      }
    }
    const rootSpan = getRootSpan(this);
    const isSegmentSpan = this._isStandaloneSpan || this === rootSpan;
    if (this._isStandaloneSpan) {
      if (this._sampled) {
        sendSpanEnvelope(createSpanEnvelope([this], client));
      } else {
        DEBUG_BUILD && debug3.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
        if (client) {
          client.recordDroppedEvent("sample_rate", "span");
        }
      }
      return;
    }
    if (!isSegmentSpan) {
      const strategy2 = getSegmentSpanCaptureStrategy();
      if (strategy2) {
        const scope2 = getCapturedScopesOnSpan(this).scope || getCurrentScope();
        strategy2.onChildSpanEnded(this, rootSpan, (options) => this._convertSpanToTransaction(options), scope2);
      }
      return;
    }
    if (client && hasSpanStreamingEnabled(client)) {
      client.emit("afterSegmentSpanEnd", this);
      return;
    }
    const scope = getCapturedScopesOnSpan(this).scope || getCurrentScope();
    const strategy = getSegmentSpanCaptureStrategy();
    if (strategy) {
      strategy.onSegmentSpanEnded((options) => this._convertSpanToTransaction(options), scope);
    } else {
      const transactionEvent = this._convertSpanToTransaction();
      if (transactionEvent) {
        scope.captureEvent(transactionEvent);
      }
    }
  }
  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
  _convertSpanToTransaction(options = {}) {
    if (!isFullFinishedSpan(spanToJSON(this))) {
      return void 0;
    }
    if (!this._name) {
      DEBUG_BUILD && debug3.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this._name = "<unlabeled transaction>";
    }
    const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = getCapturedScopesOnSpan(this);
    const normalizedRequest = capturedSpanScope?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if (this._sampled !== true) {
      return void 0;
    }
    options.onSpanCaptured?.(this);
    const spans = [];
    for (const descendant of getSpanDescendants(this)) {
      if (descendant === this || isStandaloneSpan(descendant) || options.isSpanAlreadyCaptured?.(descendant)) {
        continue;
      }
      const spanJSON = spanToJSON(descendant);
      if (!isFullFinishedSpan(spanJSON)) {
        continue;
      }
      options.onSpanCaptured?.(descendant);
      spans.push(spanJSON);
    }
    const source = this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    let hasGenAiSpans = false;
    spans.forEach((span) => {
      delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
      if (span.op?.startsWith("gen_ai.")) {
        hasGenAiSpans = true;
      }
    });
    const transaction = {
      contexts: {
        trace: spanToTransactionTraceContext(this)
      },
      spans: (
        // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
        // we do not use spans anymore after this point
        spans.length > MAX_SPAN_COUNT ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans
      ),
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope,
        capturedSpanIsolationScope,
        dynamicSamplingContext: getDynamicSamplingContextFromSpan(this),
        hasGenAiSpans
      },
      request: normalizedRequest,
      ...source && {
        transaction_info: {
          source
        }
      }
    };
    const measurements = timedEventsToMeasurements(this._events);
    const hasMeasurements = measurements && Object.keys(measurements).length;
    if (hasMeasurements) {
      DEBUG_BUILD && debug3.log(
        "[Measurements] Adding measurements to transaction event",
        JSON.stringify(measurements, void 0, 2)
      );
      transaction.measurements = measurements;
    }
    return transaction;
  }
};
__name(SentrySpan, "SentrySpan");
function isSpanTimeInput(value) {
  return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
__name(isSpanTimeInput, "isSpanTimeInput");
function isFullFinishedSpan(input) {
  return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
__name(isFullFinishedSpan, "isFullFinishedSpan");
function isStandaloneSpan(span) {
  return span instanceof SentrySpan && span.isStandaloneSpan();
}
__name(isStandaloneSpan, "isStandaloneSpan");
function sendSpanEnvelope(envelope) {
  const client = getClient();
  if (!client) {
    return;
  }
  const spanItems = envelope[1];
  if (!spanItems || spanItems.length === 0) {
    client.recordDroppedEvent("before_send", "span");
    return;
  }
  client.sendEnvelope(envelope);
}
__name(sendSpanEnvelope, "sendSpanEnvelope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/trace.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/handleCallbackErrors.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function handleCallbackErrors(fn, onError, onFinally = () => {
}, onSuccess = () => {
}) {
  let maybePromiseResult;
  try {
    maybePromiseResult = fn();
  } catch (e) {
    onError(e);
    onFinally();
    throw e;
  }
  return maybeHandlePromiseRejection(maybePromiseResult, onError, onFinally, onSuccess);
}
__name(handleCallbackErrors, "handleCallbackErrors");
function maybeHandlePromiseRejection(value, onError, onFinally, onSuccess) {
  if (isThenable(value)) {
    return chainAndCopyPromiseLike(
      value,
      (result) => {
        onFinally();
        onSuccess(result);
      },
      (err) => {
        onError(err);
        onFinally();
      }
    );
  }
  onFinally();
  onSuccess(value);
  return value;
}
__name(maybeHandlePromiseRejection, "maybeHandlePromiseRejection");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/sampling.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function sampleSpan(options, samplingContext, sampleRand) {
  if (!hasSpansEnabled(options)) {
    return [false];
  }
  let localSampleRateWasApplied = void 0;
  let sampleRate;
  if (typeof options.tracesSampler === "function") {
    sampleRate = options.tracesSampler({
      ...samplingContext,
      inheritOrSampleWith: (fallbackSampleRate) => {
        if (typeof samplingContext.parentSampleRate === "number") {
          return samplingContext.parentSampleRate;
        }
        if (typeof samplingContext.parentSampled === "boolean") {
          return Number(samplingContext.parentSampled);
        }
        return fallbackSampleRate;
      }
    });
    localSampleRateWasApplied = true;
  } else if (samplingContext.parentSampled !== void 0) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== "undefined") {
    sampleRate = options.tracesSampleRate;
    localSampleRateWasApplied = true;
  }
  const parsedSampleRate = parseSampleRate(sampleRate);
  if (parsedSampleRate === void 0) {
    DEBUG_BUILD && debug3.warn(
      `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        sampleRate
      )} of type ${JSON.stringify(typeof sampleRate)}.`
    );
    return [false];
  }
  if (!parsedSampleRate) {
    DEBUG_BUILD && debug3.log(
      `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
    );
    return [false, parsedSampleRate, localSampleRateWasApplied];
  }
  const shouldSample = sampleRand < parsedSampleRate;
  if (!shouldSample) {
    DEBUG_BUILD && debug3.log(
      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
        sampleRate
      )})`
    );
  }
  return [shouldSample, parsedSampleRate, localSampleRateWasApplied];
}
__name(sampleSpan, "sampleSpan");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/trace.js
var SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";
function startSpan(options, callback) {
  const acs = getAcs();
  if (acs.startSpan) {
    return acs.startSpan(options, callback);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
  const customForkedScope = customScope?.clone();
  return withScope2(customForkedScope, () => {
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(() => {
      const scope = getCurrentScope();
      const parentSpan = getParentSpan(scope, customParentSpan);
      const client = getClient();
      const missingRequiredParent = options.onlyIfParent && !parentSpan;
      const activeSpan = missingRequiredParent ? startMissingRequiredParentSpan(scope, client) : createChildOrRootSpan({
        parentSpan,
        spanArguments,
        forceTransaction,
        scope
      });
      if (!spanIsIgnored(activeSpan) || !parentSpan) {
        _setSpanForScope(scope, activeSpan);
      }
      return handleCallbackErrors(
        () => callback(activeSpan),
        () => {
          const { status } = spanToJSON(activeSpan);
          if (activeSpan.isRecording() && (!status || status === "ok")) {
            activeSpan.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
          }
        },
        () => {
          activeSpan.end();
        }
      );
    });
  });
}
__name(startSpan, "startSpan");
function startSpanManual(options, callback) {
  const acs = getAcs();
  if (acs.startSpanManual) {
    return acs.startSpanManual(options, callback);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;
  const customForkedScope = customScope?.clone();
  return withScope2(customForkedScope, () => {
    const wrapper = getActiveSpanWrapper(customParentSpan);
    return wrapper(() => {
      const scope = getCurrentScope();
      const parentSpan = getParentSpan(scope, customParentSpan);
      const missingRequiredParent = options.onlyIfParent && !parentSpan;
      const activeSpan = missingRequiredParent ? startMissingRequiredParentSpan(scope, getClient()) : createChildOrRootSpan({
        parentSpan,
        spanArguments,
        forceTransaction,
        scope
      });
      if (!spanIsIgnored(activeSpan) || !parentSpan) {
        _setSpanForScope(scope, activeSpan);
      }
      return handleCallbackErrors(
        // We pass the `finish` function to the callback, so the user can finish the span manually
        // this is mainly here for historic purposes because previously, we instructed users to call
        // `finish` instead of `span.end()` to also clean up the scope. Nowadays, calling `span.end()`
        // or `finish` has the same effect and we simply leave it here to avoid breaking user code.
        () => callback(activeSpan, () => activeSpan.end()),
        () => {
          const { status } = spanToJSON(activeSpan);
          if (activeSpan.isRecording() && (!status || status === "ok")) {
            activeSpan.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
          }
        }
      );
    });
  });
}
__name(startSpanManual, "startSpanManual");
function startInactiveSpan(options) {
  const acs = getAcs();
  if (acs.startInactiveSpan) {
    return acs.startInactiveSpan(options);
  }
  return _startInactiveSpanImpl(options);
}
__name(startInactiveSpan, "startInactiveSpan");
function _startInactiveSpanImpl(options) {
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan } = options;
  const wrapper = options.scope ? (callback) => withScope2(options.scope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan(customParentSpan, callback) : (callback) => callback();
  return wrapper(() => {
    const scope = getCurrentScope();
    const parentSpan = getParentSpan(scope, customParentSpan);
    const client = getClient();
    const missingRequiredParent = options.onlyIfParent && !parentSpan;
    if (missingRequiredParent) {
      return startMissingRequiredParentSpan(scope, client);
    }
    return createChildOrRootSpan({
      parentSpan,
      spanArguments,
      forceTransaction,
      scope
    });
  });
}
__name(_startInactiveSpanImpl, "_startInactiveSpanImpl");
var continueTrace = /* @__PURE__ */ __name((options, callback) => {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.continueTrace) {
    return acs.continueTrace(options, callback);
  }
  const { sentryTrace, baggage } = options;
  const client = getClient();
  const incomingDsc = baggageHeaderToDynamicSamplingContext(baggage);
  if (client && !shouldContinueTrace(client, incomingDsc?.org_id)) {
    return startNewTrace(callback);
  }
  return withScope2((scope) => {
    const propagationContext = propagationContextFromHeaders(sentryTrace, baggage);
    scope.setPropagationContext(propagationContext);
    _setSpanForScope(scope, void 0);
    return callback();
  });
}, "continueTrace");
function withActiveSpan(span, callback) {
  const acs = getAcs();
  if (acs.withActiveSpan) {
    return acs.withActiveSpan(span, callback);
  }
  return withScope2((scope) => {
    _setSpanForScope(scope, span || void 0);
    return callback(scope);
  });
}
__name(withActiveSpan, "withActiveSpan");
function suppressTracing(callback) {
  const acs = getAcs();
  if (acs.suppressTracing) {
    return acs.suppressTracing(callback);
  }
  return withScope2((scope) => {
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: true });
    const res = callback();
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: void 0 });
    return res;
  });
}
__name(suppressTracing, "suppressTracing");
function isTracingSuppressed(scope = getCurrentScope()) {
  const acs = getAcs();
  if (acs.isTracingSuppressed) {
    return acs.isTracingSuppressed(scope);
  }
  return scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] === true;
}
__name(isTracingSuppressed, "isTracingSuppressed");
function startNewTrace(callback) {
  const acs = getAcs();
  if (acs.startNewTrace) {
    return acs.startNewTrace(callback);
  }
  return withScope2((scope) => {
    scope.setPropagationContext({
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    });
    DEBUG_BUILD && debug3.log(`Starting a new trace with id ${scope.getPropagationContext().traceId}`);
    return withActiveSpan(null, callback);
  });
}
__name(startNewTrace, "startNewTrace");
function startMissingRequiredParentSpan(scope, client) {
  client?.recordDroppedEvent("no_parent_span", "span");
  const span = new SentryNonRecordingSpan({ traceId: scope.getPropagationContext().traceId });
  setCapturedScopesOnSpan(span, scope, getIsolationScope());
  return span;
}
__name(startMissingRequiredParentSpan, "startMissingRequiredParentSpan");
function createChildOrRootSpan({
  parentSpan,
  spanArguments,
  forceTransaction,
  scope
}) {
  const isolationScope = getIsolationScope();
  if (!hasSpansEnabled()) {
    const scopePropagationContext = { ...isolationScope.getPropagationContext(), ...scope.getPropagationContext() };
    const traceId = parentSpan ? parentSpan.spanContext().traceId : scopePropagationContext.traceId;
    const span2 = new SentryNonRecordingSpan({ traceId });
    if (parentSpan && !forceTransaction) {
      addChildSpanToSpan(parentSpan, span2);
    }
    setCapturedScopesOnSpan(span2, scope, isolationScope);
    return span2;
  }
  const client = getClient();
  if (_shouldIgnoreStreamedSpan(client, spanArguments)) {
    if (!isTracingSuppressed(scope)) {
      client?.recordDroppedEvent("ignored", "span");
    }
    const ignoredSpan = new SentryNonRecordingSpan({
      dropReason: "ignored",
      traceId: parentSpan?.spanContext().traceId ?? scope.getPropagationContext().traceId
    });
    setCapturedScopesOnSpan(ignoredSpan, scope, isolationScope);
    return ignoredSpan;
  }
  let span;
  if (parentSpan && !forceTransaction) {
    span = _startChildSpan(parentSpan, scope, spanArguments, isolationScope);
    addChildSpanToSpan(parentSpan, span);
  } else if (parentSpan) {
    const dsc = getDynamicSamplingContextFromSpan(parentSpan);
    const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
    const parentSampled = spanIsSampled(parentSpan);
    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments
      },
      scope,
      isolationScope,
      parentSampled
    );
    freezeDscOnSpan(span, dsc);
  } else {
    const {
      traceId,
      dsc,
      parentSpanId,
      sampled: parentSampled
    } = {
      ...isolationScope.getPropagationContext(),
      ...scope.getPropagationContext()
    };
    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments
      },
      scope,
      isolationScope,
      parentSampled
    );
    if (dsc) {
      freezeDscOnSpan(span, dsc);
    }
  }
  logSpanStart(span);
  return span;
}
__name(createChildOrRootSpan, "createChildOrRootSpan");
function parseSentrySpanArguments(options) {
  const exp = options.experimental || {};
  const initialCtx = {
    isStandalone: exp.standalone,
    ...options
  };
  if (options.startTime) {
    const ctx = { ...initialCtx };
    ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
    delete ctx.startTime;
    return ctx;
  }
  return initialCtx;
}
__name(parseSentrySpanArguments, "parseSentrySpanArguments");
function getAcs() {
  const carrier = getMainCarrier();
  return getAsyncContextStrategy(carrier);
}
__name(getAcs, "getAcs");
function _startRootSpan(spanArguments, scope, isolationScope, parentSampled) {
  const client = getClient();
  const options = client?.getOptions() || {};
  const { name = "" } = spanArguments;
  const mutableSpanSamplingData = { spanAttributes: { ...spanArguments.attributes }, spanName: name, parentSampled };
  client?.emit("beforeSampling", mutableSpanSamplingData, { decision: false });
  const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
  const finalAttributes = mutableSpanSamplingData.spanAttributes;
  const currentPropagationContext = scope.getPropagationContext();
  const _isTracingSuppressed = isTracingSuppressed(scope);
  const [sampled, sampleRate, localSampleRateWasApplied] = _isTracingSuppressed ? [false] : sampleSpan(
    options,
    {
      name,
      parentSampled: finalParentSampled,
      attributes: finalAttributes,
      normalizedRequest: isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest,
      parentSampleRate: parseSampleRate(currentPropagationContext.dsc?.sample_rate)
    },
    currentPropagationContext.sampleRand
  );
  const rootSpan = new SentrySpan({
    ...spanArguments,
    attributes: {
      [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
      [SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate !== void 0 && localSampleRateWasApplied ? sampleRate : void 0,
      ...finalAttributes
    },
    sampled
  });
  if (!sampled && client && !_isTracingSuppressed) {
    DEBUG_BUILD && debug3.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    client.recordDroppedEvent("sample_rate", hasSpanStreamingEnabled(client) ? "span" : "transaction");
  }
  setCapturedScopesOnSpan(rootSpan, scope, isolationScope);
  if (client) {
    client.emit("spanStart", rootSpan);
  }
  return rootSpan;
}
__name(_startRootSpan, "_startRootSpan");
function _startChildSpan(parentSpan, scope, spanArguments, isolationScope) {
  const { spanId, traceId } = parentSpan.spanContext();
  const _isTracingSuppressed = isTracingSuppressed(scope);
  const sampled = _isTracingSuppressed ? false : spanIsSampled(parentSpan);
  const childSpan = sampled ? new SentrySpan({
    ...spanArguments,
    parentSpanId: spanId,
    traceId,
    sampled
  }) : new SentryNonRecordingSpan({ traceId });
  addChildSpanToSpan(parentSpan, childSpan);
  setCapturedScopesOnSpan(childSpan, scope, isolationScope);
  const client = getClient();
  if (!client) {
    return childSpan;
  }
  if (hasSpanStreamingEnabled(client) && spanIsNonRecordingSpan(childSpan)) {
    if (spanIsNonRecordingSpan(parentSpan) && parentSpan.dropReason) {
      childSpan.dropReason = parentSpan.dropReason;
      client.recordDroppedEvent(parentSpan.dropReason, "span");
    } else if (!_isTracingSuppressed) {
      childSpan.dropReason = "sample_rate";
      client.recordDroppedEvent("sample_rate", "span");
    }
  }
  client.emit("spanStart", childSpan);
  if (spanArguments.endTimestamp) {
    client.emit("spanEnd", childSpan);
    client.emit("afterSpanEnd", childSpan);
  }
  return childSpan;
}
__name(_startChildSpan, "_startChildSpan");
function getParentSpan(scope, customParentSpan) {
  if (customParentSpan) {
    return customParentSpan;
  }
  if (customParentSpan === null) {
    return void 0;
  }
  const span = _getSpanForScope(scope);
  if (!span) {
    return void 0;
  }
  const client = getClient();
  const options = client ? client.getOptions() : {};
  if (options.parentSpanIsAlwaysRootSpan) {
    return getRootSpan(span);
  }
  return span;
}
__name(getParentSpan, "getParentSpan");
function getActiveSpanWrapper(parentSpan) {
  return parentSpan !== void 0 ? (callback) => {
    return withActiveSpan(parentSpan, callback);
  } : (callback) => callback();
}
__name(getActiveSpanWrapper, "getActiveSpanWrapper");
function _shouldIgnoreStreamedSpan(client, spanArguments) {
  const ignoreSpans = client?.getOptions().ignoreSpans;
  if (!client || !hasSpanStreamingEnabled(client) || !ignoreSpans?.length) {
    return false;
  }
  return shouldIgnoreSpan(
    {
      description: spanArguments.name || "",
      op: spanArguments.attributes?.[SEMANTIC_ATTRIBUTE_SENTRY_OP] || spanArguments.op,
      attributes: spanArguments.attributes
    },
    ignoreSpans
  );
}
__name(_shouldIgnoreStreamedSpan, "_shouldIgnoreStreamedSpan");
function spanIsIgnored(span) {
  return spanIsNonRecordingSpan(span) && span.dropReason === "ignored";
}
__name(spanIsIgnored, "spanIsIgnored");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/captureSpan.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/scopeData.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function applyScopeDataToEvent(event, data) {
  const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
  applyDataToEvent(event, data);
  if (span) {
    applySpanToEvent(event, span);
  }
  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
__name(applyScopeDataToEvent, "applyScopeDataToEvent");
function mergeScopeData(data, mergeData) {
  const {
    extra,
    tags,
    attributes,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span
  } = mergeData;
  mergeAndOverwriteScopeData(data, "extra", extra);
  mergeAndOverwriteScopeData(data, "tags", tags);
  mergeAndOverwriteScopeData(data, "attributes", attributes);
  mergeAndOverwriteScopeData(data, "user", user);
  mergeAndOverwriteScopeData(data, "contexts", contexts);
  data.sdkProcessingMetadata = merge2(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    data.level = level;
  }
  if (transactionName) {
    data.transactionName = transactionName;
  }
  if (span) {
    data.span = span;
  }
  if (breadcrumbs.length) {
    data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
  }
  if (fingerprint.length) {
    data.fingerprint = [...data.fingerprint, ...fingerprint];
  }
  if (eventProcessors.length) {
    data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
  }
  if (attachments.length) {
    data.attachments = [...data.attachments, ...attachments];
  }
  data.propagationContext = { ...data.propagationContext, ...propagationContext };
}
__name(mergeScopeData, "mergeScopeData");
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
  data[prop] = merge2(data[prop], mergeVal, 1);
}
__name(mergeAndOverwriteScopeData, "mergeAndOverwriteScopeData");
function getCombinedScopeData(isolationScope, currentScope) {
  const scopeData = getGlobalScope().getScopeData();
  isolationScope && mergeScopeData(scopeData, isolationScope.getScopeData());
  currentScope && mergeScopeData(scopeData, currentScope.getScopeData());
  return scopeData;
}
__name(getCombinedScopeData, "getCombinedScopeData");
function applyDataToEvent(event, data) {
  const { extra, tags, user, contexts, level, transactionName } = data;
  if (Object.keys(extra).length) {
    event.extra = { ...extra, ...event.extra };
  }
  if (Object.keys(tags).length) {
    event.tags = { ...tags, ...event.tags };
  }
  if (Object.keys(user).length) {
    event.user = { ...user, ...event.user };
  }
  if (Object.keys(contexts).length) {
    event.contexts = { ...contexts, ...event.contexts };
  }
  if (level) {
    event.level = level;
  }
  if (transactionName && event.type !== "transaction") {
    event.transaction = transactionName;
  }
}
__name(applyDataToEvent, "applyDataToEvent");
function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
__name(applyBreadcrumbsToEvent, "applyBreadcrumbsToEvent");
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = {
    ...event.sdkProcessingMetadata,
    ...sdkProcessingMetadata
  };
}
__name(applySdkMetadataToEvent, "applySdkMetadataToEvent");
function applySpanToEvent(event, span) {
  event.contexts = {
    trace: spanToTraceContext(span),
    ...event.contexts
  };
  event.sdkProcessingMetadata = {
    dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
    ...event.sdkProcessingMetadata
  };
  const rootSpan = getRootSpan(span);
  const transactionName = spanToJSON(rootSpan).description;
  if (transactionName && !event.transaction && event.type === "transaction") {
    event.transaction = transactionName;
  }
}
__name(applySpanToEvent, "applySpanToEvent");
function applyFingerprintToEvent(event, fingerprint) {
  event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }
  if (!event.fingerprint.length) {
    delete event.fingerprint;
  }
}
__name(applyFingerprintToEvent, "applyFingerprintToEvent");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/scopeContextAttributes.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function scopeContextsToSpanAttributes(contexts) {
  const attrs = {};
  const { response, profile: profile3, cloud_resource, culture, state } = contexts;
  if (response) {
    if (response.status_code != null) {
      attrs["http.response.status_code"] = response.status_code;
    }
    if (response.body_size != null) {
      attrs["http.response.body.size"] = response.body_size;
    }
  }
  if (profile3) {
    if (profile3.profile_id) {
      attrs["sentry.profile_id"] = profile3.profile_id;
    }
    if (profile3.profiler_id) {
      attrs["sentry.profiler_id"] = profile3.profiler_id;
    }
  }
  if (cloud_resource) {
    for (const [key, value] of Object.entries(cloud_resource)) {
      if (value != null) {
        attrs[key] = value;
      }
    }
  }
  if (culture) {
    if (culture.locale) {
      attrs["culture.locale"] = culture.locale;
    }
    if (culture.timezone) {
      attrs["culture.timezone"] = culture.timezone;
    }
  }
  if (state?.state && typeof state.state.type === "string") {
    attrs["state.type"] = state.state.type;
  }
  const angular = contexts["angular"];
  if (angular) {
    const version2 = angular["version"];
    if (typeof version2 === "string" || typeof version2 === "number") {
      attrs["angular.version"] = version2;
    }
  }
  const react = contexts["react"];
  if (react) {
    const version2 = react["version"];
    if (typeof version2 === "string" || typeof version2 === "number") {
      attrs["react.version"] = version2;
    }
  }
  return attrs;
}
__name(scopeContextsToSpanAttributes, "scopeContextsToSpanAttributes");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/captureSpan.js
function captureSpan(span, client) {
  const spanJSON = spanToStreamedSpanJSON(span);
  const segmentSpan = INTERNAL_getSegmentSpan(span);
  const serializedSegmentSpan = spanToStreamedSpanJSON(segmentSpan);
  const { isolationScope: spanIsolationScope, scope: spanScope } = getCapturedScopesOnSpan(span);
  const finalScopeData = getCombinedScopeData(spanIsolationScope, spanScope);
  applyCommonSpanAttributes(spanJSON, serializedSegmentSpan, client, finalScopeData);
  const spanKind = span.kind;
  client.emit("preprocessSpan", spanJSON, { spanKind });
  if (spanJSON.is_segment) {
    applyScopeToSegmentSpan(spanJSON, finalScopeData);
    applySdkMetadataToSegmentSpan(spanJSON, client);
    client.emit("processSegmentSpan", spanJSON);
  }
  client.emit("processSpan", spanJSON);
  const { beforeSendSpan } = client.getOptions();
  const processedSpan = beforeSendSpan && isStreamedBeforeSendSpanCallback(beforeSendSpan) ? applyBeforeSendSpanCallback(spanJSON, beforeSendSpan) : spanJSON;
  const spanNameSource = processedSpan.attributes?.[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  if (spanNameSource) {
    safeSetSpanJSONAttributes(processedSpan, {
      [Sp]: spanNameSource
    });
  }
  return {
    ...streamedSpanJsonToSerializedSpan(processedSpan),
    _segmentSpan: segmentSpan
  };
}
__name(captureSpan, "captureSpan");
function applyScopeToSegmentSpan(segmentSpanJSON, scopeData) {
  const contextAttributes = scopeContextsToSpanAttributes(scopeData.contexts);
  safeSetSpanJSONAttributes(segmentSpanJSON, contextAttributes);
}
__name(applyScopeToSegmentSpan, "applyScopeToSegmentSpan");
function safeSetSpanJSONAttributes(spanJSON, newAttributes) {
  const originalAttributes = spanJSON.attributes ?? (spanJSON.attributes = {});
  Object.entries(newAttributes).forEach(([key, value]) => {
    if (value != null && !(key in originalAttributes)) {
      originalAttributes[key] = value;
    }
  });
}
__name(safeSetSpanJSONAttributes, "safeSetSpanJSONAttributes");
function applySdkMetadataToSegmentSpan(segmentSpanJSON, client) {
  const integrationNames = client.getIntegrationNames();
  if (!integrationNames.length)
    return;
  safeSetSpanJSONAttributes(segmentSpanJSON, {
    [SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS]: integrationNames
  });
}
__name(applySdkMetadataToSegmentSpan, "applySdkMetadataToSegmentSpan");
function applyCommonSpanAttributes(spanJSON, serializedSegmentSpan, client, scopeData) {
  const sdk = client.getSdkMetadata();
  const { release: release2, environment } = client.getOptions();
  safeSetSpanJSONAttributes(spanJSON, {
    [Rp]: "stream",
    [fp]: serializedSegmentSpan.name,
    [hp]: serializedSegmentSpan.span_id,
    [yp]: sdk?.sdk?.name,
    [_p]: sdk?.sdk?.version,
    [SEMANTIC_ATTRIBUTE_SENTRY_RELEASE]: release2,
    [SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT]: environment || DEFAULT_ENVIRONMENT,
    [SEMANTIC_ATTRIBUTE_USER_ID]: scopeData.user?.id,
    [SEMANTIC_ATTRIBUTE_USER_EMAIL]: scopeData.user?.email,
    [SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: scopeData.user?.ip_address,
    [SEMANTIC_ATTRIBUTE_USER_USERNAME]: scopeData.user?.username,
    ...scopeData.attributes
  });
}
__name(applyCommonSpanAttributes, "applyCommonSpanAttributes");
function applyBeforeSendSpanCallback(span, beforeSendSpan) {
  const modifedSpan = beforeSendSpan(span);
  if (!modifedSpan) {
    showSpanDropWarning();
    return span;
  }
  return modifedSpan;
}
__name(applyBeforeSendSpanCallback, "applyBeforeSendSpanCallback");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/exports.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/prepareEvent.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/eventProcessors.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/syncpromise.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var STATE_PENDING = 0;
var STATE_RESOLVED = 1;
var STATE_REJECTED = 2;
function resolvedSyncPromise(value) {
  return new SyncPromise((resolve2) => {
    resolve2(value);
  });
}
__name(resolvedSyncPromise, "resolvedSyncPromise");
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}
__name(rejectedSyncPromise, "rejectedSyncPromise");
var SyncPromise = class {
  constructor(executor) {
    this._state = STATE_PENDING;
    this._handlers = [];
    this._runExecutor(executor);
  }
  /** @inheritdoc */
  then(onfulfilled, onrejected) {
    return new SyncPromise((resolve2, reject) => {
      this._handlers.push([
        false,
        (result) => {
          if (!onfulfilled) {
            resolve2(result);
          } else {
            try {
              resolve2(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        (reason) => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve2(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        }
      ]);
      this._executeHandlers();
    });
  }
  /** @inheritdoc */
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  /** @inheritdoc */
  finally(onfinally) {
    return new SyncPromise((resolve2, reject) => {
      let val;
      let isRejected;
      return this.then(
        (value) => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        (reason) => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve2(val);
      });
    });
  }
  /** Excute the resolve/reject handlers. */
  _executeHandlers() {
    if (this._state === STATE_PENDING) {
      return;
    }
    const cachedHandlers = this._handlers.slice();
    this._handlers = [];
    cachedHandlers.forEach((handler) => {
      if (handler[0]) {
        return;
      }
      if (this._state === STATE_RESOLVED) {
        handler[1](this._value);
      }
      if (this._state === STATE_REJECTED) {
        handler[2](this._value);
      }
      handler[0] = true;
    });
  }
  /** Run the executor for the SyncPromise. */
  _runExecutor(executor) {
    const setResult = /* @__PURE__ */ __name((state, value) => {
      if (this._state !== STATE_PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(resolve2, reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    }, "setResult");
    const resolve2 = /* @__PURE__ */ __name((value) => {
      setResult(STATE_RESOLVED, value);
    }, "resolve");
    const reject = /* @__PURE__ */ __name((reason) => {
      setResult(STATE_REJECTED, reason);
    }, "reject");
    try {
      executor(resolve2, reject);
    } catch (e) {
      reject(e);
    }
  }
};
__name(SyncPromise, "SyncPromise");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/eventProcessors.js
function notifyEventProcessors(processors, event, hint, index = 0) {
  try {
    const result = _notifyEventProcessors(event, hint, processors, index);
    return isThenable(result) ? result : resolvedSyncPromise(result);
  } catch (error4) {
    return rejectedSyncPromise(error4);
  }
}
__name(notifyEventProcessors, "notifyEventProcessors");
function _notifyEventProcessors(event, hint, processors, index) {
  const processor = processors[index];
  if (!event || !processor) {
    return event;
  }
  const result = processor({ ...event }, hint);
  DEBUG_BUILD && result === null && debug3.log(`Event processor "${processor.id || "?"}" dropped event`);
  if (isThenable(result)) {
    return result.then((final) => _notifyEventProcessors(final, hint, processors, index + 1));
  }
  return _notifyEventProcessors(result, hint, processors, index + 1);
}
__name(_notifyEventProcessors, "_notifyEventProcessors");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/debug-ids.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parsedStackResults;
var lastSentryKeysCount;
var lastNativeKeysCount;
var cachedFilenameDebugIds;
function getFilenameToDebugIdMap(stackParser) {
  const sentryDebugIdMap = GLOBAL_OBJ._sentryDebugIds;
  const nativeDebugIdMap = GLOBAL_OBJ._debugIds;
  if (!sentryDebugIdMap && !nativeDebugIdMap) {
    return {};
  }
  const sentryDebugIdKeys = sentryDebugIdMap ? Object.keys(sentryDebugIdMap) : [];
  const nativeDebugIdKeys = nativeDebugIdMap ? Object.keys(nativeDebugIdMap) : [];
  if (cachedFilenameDebugIds && sentryDebugIdKeys.length === lastSentryKeysCount && nativeDebugIdKeys.length === lastNativeKeysCount) {
    return cachedFilenameDebugIds;
  }
  lastSentryKeysCount = sentryDebugIdKeys.length;
  lastNativeKeysCount = nativeDebugIdKeys.length;
  cachedFilenameDebugIds = {};
  if (!parsedStackResults) {
    parsedStackResults = {};
  }
  const processDebugIds = /* @__PURE__ */ __name((debugIdKeys, debugIdMap) => {
    for (const key of debugIdKeys) {
      const debugId = debugIdMap[key];
      const result = parsedStackResults?.[key];
      if (result && cachedFilenameDebugIds && debugId) {
        cachedFilenameDebugIds[result[0]] = debugId;
        if (parsedStackResults) {
          parsedStackResults[key] = [result[0], debugId];
        }
      } else if (debugId) {
        const parsedStack = stackParser(key);
        for (let i = parsedStack.length - 1; i >= 0; i--) {
          const stackFrame = parsedStack[i];
          const filename = stackFrame?.filename;
          if (filename && cachedFilenameDebugIds && parsedStackResults) {
            cachedFilenameDebugIds[filename] = debugId;
            parsedStackResults[key] = [filename, debugId];
            break;
          }
        }
      }
    }
  }, "processDebugIds");
  if (sentryDebugIdMap) {
    processDebugIds(sentryDebugIdKeys, sentryDebugIdMap);
  }
  if (nativeDebugIdMap) {
    processDebugIds(nativeDebugIdKeys, nativeDebugIdMap);
  }
  return cachedFilenameDebugIds;
}
__name(getFilenameToDebugIdMap, "getFilenameToDebugIdMap");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/prepareEvent.js
function prepareEvent(options, event, hint, scope, client, isolationScope) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || uuid4(),
    timestamp: event.timestamp || dateTimestampInSeconds()
  };
  const integrations = hint.integrations || options.integrations.map((i) => i.name);
  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);
  if (client) {
    client.emit("applyFrameMetadata", event);
  }
  if (event.type === void 0) {
    applyDebugIds(prepared, options.stackParser);
  }
  const finalScope = getFinalScope(scope, hint.captureContext);
  if (hint.mechanism) {
    addExceptionMechanism(prepared, hint.mechanism);
  }
  const clientEventProcessors = client ? client.getEventProcessors() : [];
  const data = getCombinedScopeData(isolationScope, finalScope);
  const attachments = [...hint.attachments || [], ...data.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }
  applyScopeDataToEvent(prepared, data);
  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data.eventProcessors
  ];
  const isInternalException = hint.data && hint.data.__sentry__ === true;
  const result = isInternalException ? resolvedSyncPromise(prepared) : notifyEventProcessors(eventProcessors, prepared, hint);
  return result.then((evt) => {
    if (evt) {
      applyDebugMeta(evt);
    }
    if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}
__name(prepareEvent, "prepareEvent");
function applyClientOptions(event, options) {
  const { environment, release: release2, dist, maxValueLength } = options;
  event.environment = event.environment || environment || DEFAULT_ENVIRONMENT;
  if (!event.release && release2) {
    event.release = release2;
  }
  if (!event.dist && dist) {
    event.dist = dist;
  }
  const request = event.request;
  if (request?.url && maxValueLength) {
    request.url = truncate(request.url, maxValueLength);
  }
  if (maxValueLength) {
    event.exception?.values?.forEach((exception) => {
      if (exception.value) {
        exception.value = truncate(exception.value, maxValueLength);
      }
    });
  }
}
__name(applyClientOptions, "applyClientOptions");
function applyDebugIds(event, stackParser) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (frame.filename) {
        frame.debug_id = filenameDebugIdMap[frame.filename];
      }
    });
  });
}
__name(applyDebugIds, "applyDebugIds");
function applyDebugMeta(event) {
  const filenameDebugIdMap = {};
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (frame.debug_id) {
        if (frame.abs_path) {
          filenameDebugIdMap[frame.abs_path] = frame.debug_id;
        } else if (frame.filename) {
          filenameDebugIdMap[frame.filename] = frame.debug_id;
        }
        delete frame.debug_id;
      }
    });
  });
  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: "sourcemap",
      code_file: filename,
      debug_id
    });
  });
}
__name(applyDebugMeta, "applyDebugMeta");
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
  }
}
__name(applyIntegrationsMetadata, "applyIntegrationsMetadata");
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }
  const normalized = {
    ...event,
    ...event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map((b) => ({
        ...b,
        ...b.data && {
          data: normalize(b.data, depth, maxBreadth)
        }
      }))
    },
    ...event.user && {
      user: normalize(event.user, depth, maxBreadth)
    },
    ...event.contexts && {
      contexts: normalize(event.contexts, depth, maxBreadth)
    },
    ...event.extra && {
      extra: normalize(event.extra, depth, maxBreadth)
    }
  };
  if (event.contexts?.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }
  if (event.spans) {
    normalized.spans = event.spans.map((span) => {
      return {
        ...span,
        ...span.data && {
          data: normalize(span.data, depth, maxBreadth)
        }
      };
    });
  }
  if (event.contexts?.flags && normalized.contexts) {
    normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
  }
  return normalized;
}
__name(normalizeEvent, "normalizeEvent");
function getFinalScope(scope, captureContext) {
  if (!captureContext) {
    return scope;
  }
  const finalScope = scope ? scope.clone() : new Scope();
  finalScope.update(captureContext);
  return finalScope;
}
__name(getFinalScope, "getFinalScope");
function parseEventHintOrCaptureContext(hint) {
  if (!hint) {
    return void 0;
  }
  if (hintIsScopeOrFunction(hint)) {
    return { captureContext: hint };
  }
  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint
    };
  }
  return hint;
}
__name(parseEventHintOrCaptureContext, "parseEventHintOrCaptureContext");
function hintIsScopeOrFunction(hint) {
  return hint instanceof Scope || typeof hint === "function";
}
__name(hintIsScopeOrFunction, "hintIsScopeOrFunction");
var captureContextKeys = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext"
];
function hintIsScopeContext(hint) {
  return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}
__name(hintIsScopeContext, "hintIsScopeContext");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/exports.js
function captureException(exception, hint) {
  return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
__name(captureException, "captureException");
async function flush(timeout) {
  const client = getClient();
  if (client) {
    return client.flush(timeout);
  }
  DEBUG_BUILD && debug3.warn("Cannot flush events. No client defined.");
  return Promise.resolve(false);
}
__name(flush, "flush");
function isEnabled2() {
  const client = getClient();
  return client?.getOptions().enabled !== false && !!client?.getTransport();
}
__name(isEnabled2, "isEnabled");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/asyncContext/tracing-channel-binding.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/timer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function safeUnref(timer) {
  if (typeof timer === "object" && typeof timer.unref === "function") {
    timer.unref();
  }
  return timer;
}
__name(safeUnref, "safeUnref");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/asyncContext/tracing-channel-binding.js
function _INTERNAL_createTracingChannelBinding(asyncLocalStorage, getScopes) {
  return {
    asyncLocalStorage,
    getStoreWithActiveSpan: (span) => {
      const { scope, isolationScope } = getScopes();
      const activeScope = scope.clone();
      _setSpanForScope(activeScope, span);
      return { scope: activeScope, isolationScope };
    }
  };
}
__name(_INTERNAL_createTracingChannelBinding, "_INTERNAL_createTracingChannelBinding");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/api.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
__name(getBaseApiEndpoint, "getBaseApiEndpoint");
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
__name(_getIngestEndpoint, "_getIngestEndpoint");
function _encodedAuth(dsn, sdkInfo) {
  const params = {
    sentry_version: SENTRY_API_VERSION
  };
  if (dsn.publicKey) {
    params.sentry_key = dsn.publicKey;
  }
  if (sdkInfo) {
    params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
  }
  return new URLSearchParams(params).toString();
}
__name(_encodedAuth, "_encodedAuth");
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
__name(getEnvelopeEndpointWithUrlEncodedAuth, "getEnvelopeEndpointWithUrlEncodedAuth");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var installedIntegrations = [];
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach((currentInstance) => {
    const { name } = currentInstance;
    const existingInstance = integrationsByName[name];
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name] = currentInstance;
  });
  return Object.values(integrationsByName);
}
__name(filterDuplicates, "filterDuplicates");
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;
  defaultIntegrations.forEach((integration) => {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === "function") {
    const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
  } else {
    integrations = defaultIntegrations;
  }
  return filterDuplicates(integrations);
}
__name(getIntegrationsToSetup, "getIntegrationsToSetup");
function setupIntegrations(client, integrations) {
  const integrationIndex = {};
  integrations.forEach((integration) => {
    if (integration?.beforeSetup) {
      integration.beforeSetup(client);
    }
  });
  integrations.forEach((integration) => {
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });
  return integrationIndex;
}
__name(setupIntegrations, "setupIntegrations");
function afterSetupIntegrations(client, integrations) {
  for (const integration of integrations) {
    if (integration?.afterAllSetup) {
      integration.afterAllSetup(client);
    }
  }
}
__name(afterSetupIntegrations, "afterSetupIntegrations");
function setupIntegration(client, integration, integrationIndex) {
  if (integrationIndex[integration.name]) {
    DEBUG_BUILD && debug3.log(`Integration skipped because it was already installed: ${integration.name}`);
    return;
  }
  integrationIndex[integration.name] = integration;
  if (!installedIntegrations.includes(integration.name) && typeof integration.setupOnce === "function") {
    integration.setupOnce();
    installedIntegrations.push(integration.name);
  }
  if (integration.setup && typeof integration.setup === "function") {
    integration.setup(client);
  }
  if (typeof integration.preprocessEvent === "function") {
    const callback = integration.preprocessEvent.bind(integration);
    client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
  }
  if (typeof integration.processEvent === "function") {
    const callback = integration.processEvent.bind(integration);
    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name
    });
    client.addEventProcessor(processor);
  }
  ["processSpan", "processSegmentSpan"].forEach((hook) => {
    const callback = integration[hook];
    if (typeof callback === "function") {
      client.on(hook, (span) => callback.call(integration, span, client));
    }
  });
  DEBUG_BUILD && debug3.log(`Integration installed: ${integration.name}`);
}
__name(setupIntegration, "setupIntegration");
function defineIntegration(fn) {
  return fn;
}
__name(defineIntegration, "defineIntegration");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/logs/internal.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/trace-info.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function _getTraceInfoFromScope(client, scope) {
  if (!scope) {
    return [void 0, void 0];
  }
  return withScope2(scope, () => {
    const span = getActiveSpan();
    const traceContext = span ? spanToTraceContext(span) : getTraceContextFromScope(scope);
    const dynamicSamplingContext = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope);
    return [dynamicSamplingContext, traceContext];
  });
}
__name(_getTraceInfoFromScope, "_getTraceInfoFromScope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/logs/envelope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/isBrowser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/env.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
__name(isBrowserBundle, "isBrowserBundle");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/node.js
function isNodeEnv() {
  return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}
__name(isNodeEnv, "isNodeEnv");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/isBrowser.js
function isBrowser() {
  return typeof window !== "undefined" && (!isNodeEnv() || isElectronNodeRenderer());
}
__name(isBrowser, "isBrowser");
function isElectronNodeRenderer() {
  const process2 = GLOBAL_OBJ.process;
  return process2?.type === "renderer";
}
__name(isElectronNodeRenderer, "isElectronNodeRenderer");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/logs/envelope.js
function createLogContainerEnvelopeItem(items, inferUserData) {
  const inferSetting = inferUserData ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: items.length,
      content_type: "application/vnd.sentry.items.log+json"
    },
    {
      version: 2,
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items
    }
  ];
}
__name(createLogContainerEnvelopeItem, "createLogContainerEnvelopeItem");
function createLogEnvelope(logs, metadata, tunnel, dsn, inferUserData) {
  const headers = {};
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  return createEnvelope(headers, [createLogContainerEnvelopeItem(logs, inferUserData)]);
}
__name(createLogEnvelope, "createLogEnvelope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/logs/internal.js
function _INTERNAL_flushLogsBuffer(client, maybeLogBuffer) {
  const logBuffer = maybeLogBuffer ?? _INTERNAL_getLogBuffer(client) ?? [];
  if (logBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope = createLogEnvelope(
    logBuffer,
    clientOptions._metadata,
    clientOptions.tunnel,
    client.getDsn(),
    client.getDataCollectionOptions().userInfo
  );
  _getBufferMap().set(client, []);
  client.emit("flushLogs");
  client.sendEnvelope(envelope);
}
__name(_INTERNAL_flushLogsBuffer, "_INTERNAL_flushLogsBuffer");
function _INTERNAL_getLogBuffer(client) {
  return _getBufferMap().get(client);
}
__name(_INTERNAL_getLogBuffer, "_INTERNAL_getLogBuffer");
function _getBufferMap() {
  return getGlobalSingleton("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
}
__name(_getBufferMap, "_getBufferMap");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/metrics/internal.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/metrics/envelope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createMetricContainerEnvelopeItem(items, inferUserData) {
  const inferSetting = inferUserData ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: items.length,
      content_type: "application/vnd.sentry.items.trace-metric+json"
    },
    {
      version: 2,
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items
    }
  ];
}
__name(createMetricContainerEnvelopeItem, "createMetricContainerEnvelopeItem");
function createMetricEnvelope(metrics, metadata, tunnel, dsn, inferUserData) {
  const headers = {};
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  return createEnvelope(headers, [createMetricContainerEnvelopeItem(metrics, inferUserData)]);
}
__name(createMetricEnvelope, "createMetricEnvelope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/metrics/internal.js
function _INTERNAL_flushMetricsBuffer(client, maybeMetricBuffer) {
  const metricBuffer = maybeMetricBuffer ?? _INTERNAL_getMetricBuffer(client) ?? [];
  if (metricBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope = createMetricEnvelope(
    metricBuffer,
    clientOptions._metadata,
    clientOptions.tunnel,
    client.getDsn(),
    client.getDataCollectionOptions().userInfo
  );
  _getBufferMap2().set(client, []);
  client.emit("flushMetrics");
  client.sendEnvelope(envelope);
}
__name(_INTERNAL_flushMetricsBuffer, "_INTERNAL_flushMetricsBuffer");
function _INTERNAL_getMetricBuffer(client) {
  return _getBufferMap2().get(client);
}
__name(_INTERNAL_getMetricBuffer, "_INTERNAL_getMetricBuffer");
function _getBufferMap2() {
  return getGlobalSingleton("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
}
__name(_getBufferMap2, "_getBufferMap");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/extractGenAiSpans.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/spanJsonToStreamedSpan.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function spanJsonToSerializedStreamedSpan(span) {
  const streamedSpan = {
    trace_id: span.trace_id,
    span_id: span.span_id,
    parent_span_id: span.parent_span_id,
    name: span.description || "",
    start_timestamp: span.start_timestamp,
    end_timestamp: span.timestamp || span.start_timestamp,
    status: !span.status || span.status === "ok" || span.status === "cancelled" ? "ok" : "error",
    is_segment: false,
    attributes: { ...span.data },
    links: span.links
  };
  return streamedSpanJsonToSerializedSpan(streamedSpan);
}
__name(spanJsonToSerializedStreamedSpan, "spanJsonToSerializedStreamedSpan");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/extractGenAiSpans.js
function extractGenAiSpansFromEvent(event, client) {
  if (event.type !== "transaction" || !event.spans?.length || !event.sdkProcessingMetadata?.hasGenAiSpans || client.getOptions().streamGenAiSpans === false || hasSpanStreamingEnabled(client)) {
    return void 0;
  }
  const genAiSpans = [];
  const remainingSpans = [];
  for (const span of event.spans) {
    if (span.op?.startsWith("gen_ai.")) {
      genAiSpans.push(spanJsonToSerializedStreamedSpan(span));
    } else {
      remainingSpans.push(span);
    }
  }
  if (genAiSpans.length === 0) {
    return void 0;
  }
  event.spans = remainingSpans;
  const inferSetting = client.getDataCollectionOptions().userInfo ? "auto" : "never";
  return [
    { type: "span", item_count: genAiSpans.length, content_type: "application/vnd.sentry.items.span.v2+json" },
    {
      version: 2,
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items: genAiSpans
    }
  ];
}
__name(extractGenAiSpansFromEvent, "extractGenAiSpansFromEvent");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/transports/base.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/promisebuffer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SENTRY_BUFFER_FULL_ERROR = /* @__PURE__ */ Symbol.for("SentryBufferFullError");
function makePromiseBuffer(limit = 100) {
  const buffer = /* @__PURE__ */ new Set();
  function isReady() {
    return buffer.size < limit;
  }
  __name(isReady, "isReady");
  function remove(task) {
    buffer.delete(task);
  }
  __name(remove, "remove");
  function add(taskProducer) {
    if (!isReady()) {
      return rejectedSyncPromise(SENTRY_BUFFER_FULL_ERROR);
    }
    const task = taskProducer();
    buffer.add(task);
    void task.then(
      () => remove(task),
      () => remove(task)
    );
    return task;
  }
  __name(add, "add");
  function drain(timeout) {
    if (!buffer.size) {
      return resolvedSyncPromise(true);
    }
    const drainPromise = Promise.allSettled(Array.from(buffer)).then(() => true);
    if (!timeout) {
      return drainPromise;
    }
    const promises = [
      drainPromise,
      new Promise((resolve2) => safeUnref(setTimeout(() => resolve2(false), timeout)))
    ];
    return Promise.race(promises);
  }
  __name(drain, "drain");
  return {
    get $() {
      return Array.from(buffer);
    },
    add,
    drain
  };
}
__name(makePromiseBuffer, "makePromiseBuffer");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/ratelimit.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_RETRY_AFTER = 60 * 1e3;
function parseRetryAfterHeader(header, now = safeDateNow()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1e3;
  }
  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }
  return DEFAULT_RETRY_AFTER;
}
__name(parseRetryAfterHeader, "parseRetryAfterHeader");
function disabledUntil(limits, dataCategory) {
  return limits[dataCategory] || limits.all || 0;
}
__name(disabledUntil, "disabledUntil");
function isRateLimited(limits, dataCategory, now = safeDateNow()) {
  return disabledUntil(limits, dataCategory) > now;
}
__name(isRateLimited, "isRateLimited");
function updateRateLimits(limits, { statusCode, headers }, now = safeDateNow()) {
  const updatedRateLimits = {
    ...limits
  };
  const rateLimitHeader = headers?.["x-sentry-rate-limits"];
  const retryAfterHeader = headers?.["retry-after"];
  if (rateLimitHeader) {
    for (const limit of rateLimitHeader.trim().split(",")) {
      const [retryAfter, categories, , , namespaces] = limit.split(":", 5);
      const headerDelay = parseInt(retryAfter, 10);
      const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
      if (!categories) {
        updatedRateLimits.all = now + delay;
      } else {
        for (const category of categories.split(";")) {
          if (category === "metric_bucket") {
            if (!namespaces || namespaces.split(";").includes("custom")) {
              updatedRateLimits[category] = now + delay;
            }
          } else {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1e3;
  }
  return updatedRateLimits;
}
__name(updateRateLimits, "updateRateLimits");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/transports/base.js
var DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
function createTransport(options, makeRequest, buffer = makePromiseBuffer(
  options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
)) {
  let rateLimits = {};
  const flush2 = /* @__PURE__ */ __name((timeout) => buffer.drain(timeout), "flush");
  function send2(envelope) {
    const filteredEnvelopeItems = [];
    forEachEnvelopeItem(envelope, (item, type) => {
      const dataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, dataCategory)) {
        options.recordDroppedEvent("ratelimit_backoff", dataCategory);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });
    if (filteredEnvelopeItems.length === 0) {
      return Promise.resolve({});
    }
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
    const recordEnvelopeLoss = /* @__PURE__ */ __name((reason) => {
      if (envelopeContainsItemType(filteredEnvelope, ["client_report"])) {
        DEBUG_BUILD && debug3.warn(`Dropping client report. Will not send outcomes (reason: ${reason}).`);
        return;
      }
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type));
      });
    }, "recordEnvelopeLoss");
    const requestTask = /* @__PURE__ */ __name(() => makeRequest({ body: serializeEnvelope(filteredEnvelope) }).then(
      (response) => {
        if (response.statusCode === 413) {
          DEBUG_BUILD && debug3.error(
            "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
          );
          recordEnvelopeLoss("send_error");
          return response;
        }
        if (DEBUG_BUILD && response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
          debug3.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
        }
        rateLimits = updateRateLimits(rateLimits, response);
        return response;
      },
      (error4) => {
        recordEnvelopeLoss("network_error");
        DEBUG_BUILD && debug3.error("Encountered error running transport request:", error4);
        throw error4;
      }
    ), "requestTask");
    return buffer.add(requestTask).then(
      (result) => result,
      (error4) => {
        if (error4 === SENTRY_BUFFER_FULL_ERROR) {
          DEBUG_BUILD && debug3.error("Skipped sending event because buffer is full.");
          recordEnvelopeLoss("queue_overflow");
          return Promise.resolve({});
        } else {
          throw error4;
        }
      }
    );
  }
  __name(send2, "send");
  return {
    send: send2,
    flush: flush2
  };
}
__name(createTransport, "createTransport");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/clientreport.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [
    { type: "client_report" },
    {
      timestamp: timestamp || dateTimestampInSeconds(),
      discarded_events
    }
  ];
  return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}
__name(createClientReportEnvelope, "createClientReportEnvelope");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/eventUtils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function getPossibleEventMessages(event) {
  const possibleMessages = [];
  if (event.message) {
    possibleMessages.push(event.message);
  }
  try {
    const lastException = event.exception.values[event.exception.values.length - 1];
    if (lastException?.value) {
      possibleMessages.push(lastException.value);
      if (lastException.type) {
        possibleMessages.push(`${lastException.type}: ${lastException.value}`);
      }
    }
  } catch {
  }
  return possibleMessages;
}
__name(getPossibleEventMessages, "getPossibleEventMessages");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/transactionEvent.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function convertTransactionEventToSpanJson(event) {
  const { trace_id, parent_span_id, span_id, status, origin, data, op } = event.contexts?.trace ?? {};
  return {
    data: data ?? {},
    description: event.transaction,
    op,
    parent_span_id,
    span_id: span_id ?? "",
    start_timestamp: event.start_timestamp ?? 0,
    status,
    timestamp: event.timestamp,
    trace_id: trace_id ?? "",
    origin,
    profile_id: data?.[SEMANTIC_ATTRIBUTE_PROFILE_ID],
    exclusive_time: data?.[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
    measurements: event.measurements,
    is_segment: true
  };
}
__name(convertTransactionEventToSpanJson, "convertTransactionEventToSpanJson");
function convertSpanJsonToTransactionEvent(span) {
  return {
    type: "transaction",
    timestamp: span.timestamp,
    start_timestamp: span.start_timestamp,
    transaction: span.description,
    contexts: {
      trace: {
        trace_id: span.trace_id,
        span_id: span.span_id,
        parent_span_id: span.parent_span_id,
        op: span.op,
        status: span.status,
        origin: span.origin,
        data: {
          ...span.data,
          ...span.profile_id && { [SEMANTIC_ATTRIBUTE_PROFILE_ID]: span.profile_id },
          ...span.exclusive_time && { [SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: span.exclusive_time }
        }
      }
    },
    measurements: span.measurements
  };
}
__name(convertSpanJsonToTransactionEvent, "convertSpanJsonToTransactionEvent");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/data-collection/resolveDataCollectionOptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/data-collection/defaultPiiToCollectionOptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/data-collection/filtering-snippets.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FILTERED_VALUE = "[Filtered]";
var PII_HEADER_SNIPPETS = ["forwarded", "-ip", "remote-", "via", "-user"];
var SENSITIVE_KEY_SNIPPETS = [
  "auth",
  "token",
  "secret",
  "session",
  // for the user_session cookie
  "password",
  "passwd",
  "pwd",
  "key",
  "jwt",
  "bearer",
  "sso",
  "saml",
  "csrf",
  "xsrf",
  "credentials",
  "sid",
  "identity",
  // Always treat cookie headers as sensitive in case individual key-value cookie pairs cannot properly be extracted
  "set-cookie",
  "cookie"
];
var SENSITIVE_COOKIE_NAME_SNIPPETS = [
  // Express / Connect default session cookie
  ".sid",
  // Opaque session ids (PHPSESSID, ASPSESSIONID*, BIGipServer*, *sessid*, …)
  "sessid",
  // Laravel etc. "remember me" tokens
  "remember",
  // OIDC / OAuth auxiliary (`oauth*` covered by header snippet `auth`)
  "oidc",
  "pkce",
  "nonce",
  // RFC 6265bis high-security cookie name prefixes
  "__secure-",
  "__host-",
  // Load balancer / CDN sticky-session cookies (opaque routing tokens)
  "awsalb",
  "awselb",
  "akamai",
  // BaaS / IdP session cookies (names often omit "session")
  "__stripe",
  "cognito",
  "firebase",
  "supabase",
  "sb-",
  // Step-up / MFA cookies
  "mfa",
  "2fa"
];

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/data-collection/defaultPiiToCollectionOptions.js
function defaultPiiToCollectionOptions(sendDefaultPii) {
  return sendDefaultPii === true ? {
    userInfo: true,
    cookies: true,
    httpHeaders: { request: true, response: true },
    httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
    queryParams: true,
    genAI: { inputs: true, outputs: true },
    stackFrameVariables: true,
    frameContextLines: 7
    // default should be 5, but ContextLines integration uses 7
  } : {
    userInfo: false,
    cookies: { deny: PII_HEADER_SNIPPETS },
    httpHeaders: { request: { deny: PII_HEADER_SNIPPETS }, response: { deny: PII_HEADER_SNIPPETS } },
    httpBodies: [],
    queryParams: { deny: PII_HEADER_SNIPPETS },
    genAI: { inputs: false, outputs: false },
    stackFrameVariables: true,
    frameContextLines: 7
    // default should be 5, but ContextLines integration uses 7
  };
}
__name(defaultPiiToCollectionOptions, "defaultPiiToCollectionOptions");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/data-collection/resolveDataCollectionOptions.js
var DEFAULTS = {
  userInfo: true,
  cookies: true,
  httpHeaders: { request: true, response: true },
  httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
  queryParams: true,
  genAI: { inputs: true, outputs: true },
  stackFrameVariables: true,
  frameContextLines: 5
};
function resolveDataCollectionOptions(options) {
  const base = options.dataCollection != null ? DEFAULTS : defaultPiiToCollectionOptions(options.sendDefaultPii);
  const dc = options.dataCollection ?? {};
  return {
    userInfo: dc.userInfo ?? base.userInfo,
    cookies: dc.cookies ?? base.cookies,
    httpHeaders: {
      request: dc.httpHeaders?.request ?? base.httpHeaders.request,
      response: dc.httpHeaders?.response ?? base.httpHeaders.response
    },
    httpBodies: dc.httpBodies ?? base.httpBodies,
    queryParams: dc.queryParams ?? base.queryParams,
    genAI: {
      inputs: dc.genAI?.inputs ?? base.genAI.inputs,
      outputs: dc.genAI?.outputs ?? base.genAI.outputs
    },
    stackFrameVariables: dc.stackFrameVariables ?? base.stackFrameVariables,
    frameContextLines: dc.frameContextLines ?? base.frameContextLines
  };
}
__name(resolveDataCollectionOptions, "resolveDataCollectionOptions");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/client.js
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
var MISSING_RELEASE_FOR_SESSION_ERROR = "Discarded session because of missing or non-string release";
var INTERNAL_ERROR_SYMBOL = /* @__PURE__ */ Symbol.for("SentryInternalError");
var DO_NOT_SEND_EVENT_SYMBOL = /* @__PURE__ */ Symbol.for("SentryDoNotSendEventError");
var DEFAULT_FLUSH_INTERVAL = 5e3;
function _makeInternalError(message) {
  return {
    message,
    [INTERNAL_ERROR_SYMBOL]: true
  };
}
__name(_makeInternalError, "_makeInternalError");
function _makeDoNotSendEventError(message) {
  return {
    message,
    [DO_NOT_SEND_EVENT_SYMBOL]: true
  };
}
__name(_makeDoNotSendEventError, "_makeDoNotSendEventError");
function _isInternalError(error4) {
  return isObjectLike(error4) && INTERNAL_ERROR_SYMBOL in error4;
}
__name(_isInternalError, "_isInternalError");
function _isDoNotSendEventError(error4) {
  return isObjectLike(error4) && DO_NOT_SEND_EVENT_SYMBOL in error4;
}
__name(_isDoNotSendEventError, "_isDoNotSendEventError");
function setupWeightBasedFlushing(client, afterCaptureHook, flushHook, estimateSizeFn, flushFn) {
  let weight = 0;
  let flushTimeout;
  let isTimerActive = false;
  client.on(flushHook, () => {
    weight = 0;
    clearTimeout(flushTimeout);
    isTimerActive = false;
  });
  client.on(afterCaptureHook, (item) => {
    weight += estimateSizeFn(item);
    if (weight >= 8e5) {
      flushFn(client);
    } else if (!isTimerActive) {
      const flushInterval = client.getOptions()._flushInterval ?? DEFAULT_FLUSH_INTERVAL;
      if (flushInterval > 0) {
        isTimerActive = true;
        flushTimeout = safeUnref(
          setTimeout(() => {
            flushFn(client);
          }, flushInterval)
        );
      }
    }
  });
  client.on("flush", () => {
    flushFn(client);
  });
}
__name(setupWeightBasedFlushing, "setupWeightBasedFlushing");
var Client = class {
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(options) {
    this._options = options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = makePromiseBuffer(options.transportOptions?.bufferSize ?? DEFAULT_TRANSPORT_BUFFER_SIZE);
    this._dataCollection = resolveDataCollectionOptions(options);
    if (options.dsn) {
      this._dsn = makeDsn(options.dsn);
    } else {
      DEBUG_BUILD && debug3.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const url = getEnvelopeEndpointWithUrlEncodedAuth(
        this._dsn,
        options.tunnel,
        options._metadata ? options._metadata.sdk : void 0
      );
      this._transport = options.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs;
    if (this._options.enableLogs) {
      setupWeightBasedFlushing(this, "afterCaptureLog", "flushLogs", estimateLogSizeInBytes, _INTERNAL_flushLogsBuffer);
    }
    const enableMetrics = this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true;
    if (enableMetrics) {
      setupWeightBasedFlushing(
        this,
        "afterCaptureMetric",
        "flushMetrics",
        estimateMetricSizeInBytes,
        _INTERNAL_flushMetricsBuffer
      );
    }
  }
  /**
   * Captures an exception event and sends it to Sentry.
   *
   * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureException(exception, hint, scope) {
    const eventId = uuid4();
    if (checkOrSetAlreadyCaught(exception)) {
      DEBUG_BUILD && debug3.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = {
      event_id: eventId,
      ...hint
    };
    this._process(
      () => this.eventFromException(exception, hintWithEventId).then((event) => this._captureEvent(event, hintWithEventId, scope)).then((res) => res),
      "error"
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a message event and sends it to Sentry.
   *
   * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureMessage(message, level, hint, currentScope) {
    const hintWithEventId = {
      event_id: uuid4(),
      ...hint
    };
    const eventMessage = isParameterizedString(message) ? message : String(message);
    const isMessage = isPrimitive(message);
    const promisedEvent = isMessage ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
    this._process(
      () => promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)),
      isMessage ? "unknown" : "error"
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a manually created event and sends it to Sentry.
   *
   * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureEvent(event, hint, currentScope) {
    const eventId = uuid4();
    if (hint?.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
      DEBUG_BUILD && debug3.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = {
      event_id: eventId,
      ...hint
    };
    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
    const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
    const dataCategory = getDataCategoryByType(event.type);
    this._process(
      () => this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope),
      dataCategory
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a session.
   */
  captureSession(session) {
    this.sendSession(session);
    updateSession(session, { init: false });
  }
  /**
   * Get the current Dsn.
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * Get the current options.
   */
  getOptions() {
    return this._options;
  }
  /**
   * Get the resolved data collection configuration.
   */
  getDataCollectionOptions() {
    return this._dataCollection;
  }
  /**
   * Get the SDK metadata.
   * @see SdkMetadata
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * Returns the transport that is used by the client.
   * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
   */
  getTransport() {
    return this._transport;
  }
  /**
   * Wait for all events to be sent or the timeout to expire, whichever comes first.
   *
   * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
   *   cause the client to wait until all events are sent before resolving the promise.
   * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
   * still events in the queue when the timeout is reached.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async flush(timeout) {
    const transport = this._transport;
    this.emit("flush");
    if (!transport) {
      return true;
    }
    const clientFinished = await this._isClientDoneProcessing(timeout);
    const transportFlushed = await transport.flush(timeout);
    return clientFinished && transportFlushed;
  }
  /**
   * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
   *
   * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
   *   the client to wait until all events are sent before disabling itself.
   * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
   * it doesn't.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async close(timeout) {
    _INTERNAL_flushLogsBuffer(this);
    const result = await this.flush(timeout);
    this.getOptions().enabled = false;
    this.emit("close");
    return result;
  }
  /**
   * Get all installed event processors.
   */
  getEventProcessors() {
    return this._eventProcessors;
  }
  /**
   * Adds an event processor that applies to any event processed by this client.
   */
  addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }
  /**
   * Initialize this client.
   * Call this after the client was set on a scope.
   */
  init() {
    if (this._isEnabled() || // Force integrations to be setup even if no DSN was set when we have
    // Spotlight enabled. This is particularly important for browser as we
    // don't support the `spotlight` option there and rely on the users
    // adding the `spotlightBrowserIntegration()` to their integrations which
    // wouldn't get initialized with the check below when there's no DSN set.
    this._options.integrations.some(({ name }) => name.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  /**
   * Gets an installed integration by its name.
   *
   * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
   */
  getIntegrationByName(integrationName) {
    return this._integrations[integrationName];
  }
  /**
   * Returns the names of all installed integrations.
   */
  getIntegrationNames() {
    return Object.keys(this._integrations);
  }
  /**
   * Add an integration to the client.
   * This can be used to e.g. lazy load integrations.
   * In most cases, this should not be necessary,
   * and you're better off just passing the integrations via `integrations: []` at initialization time.
   * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
   */
  addIntegration(integration) {
    const isAlreadyInstalled = this._integrations[integration.name];
    if (!isAlreadyInstalled && integration.beforeSetup) {
      integration.beforeSetup(this);
    }
    setupIntegration(this, integration, this._integrations);
    if (!isAlreadyInstalled) {
      afterSetupIntegrations(this, [integration]);
    }
  }
  /**
   * Send a fully prepared event to Sentry.
   */
  sendEvent(event, hint = {}) {
    this.emit("beforeSendEvent", event, hint);
    const genAiSpanItem = extractGenAiSpansFromEvent(event, this);
    let env2 = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
    for (const attachment of hint.attachments || []) {
      env2 = addItemToEnvelope(env2, createAttachmentEnvelopeItem(attachment));
    }
    if (genAiSpanItem) {
      env2 = addItemToEnvelope(env2, genAiSpanItem);
    }
    this.sendEnvelope(env2).then((sendResponse) => this.emit("afterSendEvent", event, sendResponse));
  }
  /**
   * Send a session or session aggregrates to Sentry.
   */
  sendSession(session) {
    const { release: clientReleaseOption, environment: clientEnvironmentOption = DEFAULT_ENVIRONMENT } = this._options;
    if ("aggregates" in session) {
      const sessionAttrs = session.attrs || {};
      if (!sessionAttrs.release && !clientReleaseOption) {
        DEBUG_BUILD && debug3.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
      sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
      session.attrs = sessionAttrs;
    } else {
      if (!session.release && !clientReleaseOption) {
        DEBUG_BUILD && debug3.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      session.release = session.release || clientReleaseOption;
      session.environment = session.environment || clientEnvironmentOption;
    }
    this.emit("beforeSendSession", session);
    const env2 = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(env2);
  }
  /**
   * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
   */
  recordDroppedEvent(reason, category, count3 = 1) {
    if (this._options.sendClientReports) {
      const key = `${reason}:${category}`;
      DEBUG_BUILD && debug3.log(`Recording outcome: "${key}"${count3 > 1 ? ` (${count3} times)` : ""}`);
      this._outcomes[key] = (this._outcomes[key] || 0) + count3;
    }
  }
  /**
   * Register a hook on this client.
   */
  on(hook, callback) {
    const hookCallbacks = this._hooks[hook] = this._hooks[hook] || /* @__PURE__ */ new Set();
    const uniqueCallback = /* @__PURE__ */ __name((...args) => callback(...args), "uniqueCallback");
    hookCallbacks.add(uniqueCallback);
    return () => {
      hookCallbacks.delete(uniqueCallback);
    };
  }
  /**
   * Emit a hook that was previously registered via `on()`.
   */
  emit(hook, ...rest) {
    const callbacks = this._hooks[hook];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...rest));
    }
  }
  /**
   * Send an envelope to Sentry.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async sendEnvelope(envelope) {
    this.emit("beforeEnvelope", envelope);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(envelope);
      } catch (reason) {
        DEBUG_BUILD && debug3.error("Error while sending envelope:", reason);
        return {};
      }
    }
    DEBUG_BUILD && debug3.error("Transport disabled");
    return {};
  }
  /**
   * Register a cleanup function to be called when the client is disposed.
   * This is useful for integrations that need to clean up global state.
   *
   * NOTE: This is a no-op in the base `Client` class. Subclasses like `ServerRuntimeClient`
   * override this method to actually register and execute cleanup callbacks.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerCleanup(callback) {
  }
  /**
   * Disposes of the client and releases all resources.
   *
   * Subclasses should override this method to clean up their own resources, including invoking
   * any callbacks registered via {@link Client.registerCleanup}. The base implementation is a
   * no-op and does NOT execute registered cleanup callbacks.
   *
   * After calling dispose(), the client should not be used anymore.
   */
  dispose() {
  }
  /* eslint-enable @typescript-eslint/unified-signatures */
  /** Setup integrations for this client. */
  _setupIntegrations() {
    const { integrations } = this._options;
    this._integrations = setupIntegrations(this, integrations);
    afterSetupIntegrations(this, integrations);
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(session, event) {
    let crashed = event.level === "fatal";
    let errored = false;
    const exceptions = event.exception?.values;
    if (exceptions) {
      errored = true;
      crashed = false;
      for (const ex of exceptions) {
        if (ex.mechanism?.handled === false) {
          crashed = true;
          break;
        }
      }
    }
    const sessionNonTerminal = session.status === "ok";
    const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
    if (shouldUpdateAndSend) {
      updateSession(session, {
        ...crashed && { status: "crashed" },
        errors: session.errors || Number(errored || crashed)
      });
      this.captureSession(session);
    }
  }
  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
  async _isClientDoneProcessing(timeout) {
    let ticked = 0;
    while (!timeout || ticked < timeout) {
      await new Promise((resolve2) => setTimeout(resolve2, 1));
      if (!this._numProcessing) {
        return true;
      }
      ticked++;
    }
    return false;
  }
  /** Determines whether this SDK is enabled and a transport is present. */
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== void 0;
  }
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A new event with more information.
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const integrations = this.getIntegrationNames();
    if (!hint.integrations && integrations.length) {
      hint.integrations = integrations;
    }
    this.emit("preprocessEvent", event, hint);
    if (!event.type) {
      isolationScope.setLastEventId(event.event_id || hint.event_id);
    }
    return prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
      if (evt === null) {
        return evt;
      }
      this.emit("postprocessEvent", evt, hint);
      evt.contexts = {
        trace: { ...evt.contexts?.trace, ...getTraceContextFromScope(currentScope) },
        ...evt.contexts
      };
      const dynamicSamplingContext = getDynamicSamplingContextFromScope(this, currentScope);
      evt.sdkProcessingMetadata = {
        dynamicSamplingContext,
        ...evt.sdkProcessingMetadata
      };
      return evt;
    });
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(event, hint = {}, currentScope = getCurrentScope(), isolationScope = getIsolationScope()) {
    if (DEBUG_BUILD && isErrorEvent2(event)) {
      debug3.log(`Captured error event \`${getPossibleEventMessages(event)[0] || "<unknown>"}\``);
    }
    return this._processEvent(event, hint, currentScope, isolationScope).then(
      (finalEvent) => {
        return finalEvent.event_id;
      },
      (reason) => {
        if (DEBUG_BUILD) {
          if (_isDoNotSendEventError(reason)) {
            debug3.log(reason.message);
          } else if (_isInternalError(reason)) {
            debug3.warn(reason.message);
          } else {
            debug3.warn(reason);
          }
        }
        return void 0;
      }
    );
  }
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
  _processEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const { sampleRate } = options;
    const isTransaction = isTransactionEvent(event);
    const isError2 = isErrorEvent2(event);
    const eventType = event.type || "error";
    const beforeSendLabel = `before send for type \`${eventType}\``;
    const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate(sampleRate);
    if (isError2 && typeof parsedSampleRate === "number" && safeMathRandom() > parsedSampleRate) {
      this.recordDroppedEvent("sample_rate", "error");
      return rejectedSyncPromise(
        _makeDoNotSendEventError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const dataCategory = getDataCategoryByType(event.type);
    return this._prepareEvent(event, hint, currentScope, isolationScope).then((prepared) => {
      if (prepared === null) {
        this.recordDroppedEvent("event_processor", dataCategory);
        throw _makeDoNotSendEventError("An event processor returned `null`, will not send event.");
      }
      const isInternalException = hint.data?.__sentry__ === true;
      if (isInternalException) {
        return prepared;
      }
      const result = processBeforeSend(this, options, prepared, hint);
      return _validateBeforeSendResult(result, beforeSendLabel);
    }).then((processedEvent) => {
      if (processedEvent === null) {
        this.recordDroppedEvent("before_send", dataCategory);
        if (isTransaction) {
          const spans = event.spans || [];
          const spanCount = 1 + spans.length;
          this.recordDroppedEvent("before_send", "span", spanCount);
        }
        throw _makeDoNotSendEventError(`${beforeSendLabel} returned \`null\`, will not send event.`);
      }
      const session = currentScope.getSession() || isolationScope.getSession();
      if (isError2 && session) {
        this._updateSessionFromEvent(session, processedEvent);
      }
      if (isTransaction) {
        const spanCountBefore = processedEvent.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const spanCountAfter = processedEvent.spans ? processedEvent.spans.length : 0;
        const droppedSpanCount = spanCountBefore - spanCountAfter;
        if (droppedSpanCount > 0) {
          this.recordDroppedEvent("before_send", "span", droppedSpanCount);
        }
      }
      const transactionInfo = processedEvent.transaction_info;
      if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
        const source = "custom";
        processedEvent.transaction_info = {
          ...transactionInfo,
          source
        };
      }
      this.sendEvent(processedEvent, hint);
      return processedEvent;
    }).then(null, (reason) => {
      if (_isDoNotSendEventError(reason) || _isInternalError(reason)) {
        throw reason;
      }
      this.captureException(reason, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: reason
      });
      throw _makeInternalError(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
      );
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(taskProducer, dataCategory) {
    this._numProcessing++;
    void this._promiseBuffer.add(taskProducer).then(
      (value) => {
        this._numProcessing--;
        return value;
      },
      (reason) => {
        this._numProcessing--;
        if (reason === SENTRY_BUFFER_FULL_ERROR) {
          this.recordDroppedEvent("queue_overflow", dataCategory);
        }
        return reason;
      }
    );
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.entries(outcomes).map(([key, quantity]) => {
      const [reason, category] = key.split(":");
      return {
        reason,
        category,
        quantity
      };
    });
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    DEBUG_BUILD && debug3.log("Flushing outcomes...");
    const outcomes = this._clearOutcomes();
    if (outcomes.length === 0) {
      DEBUG_BUILD && debug3.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      DEBUG_BUILD && debug3.log("No dsn provided, will not send outcomes");
      return;
    }
    DEBUG_BUILD && debug3.log("Sending outcomes:", outcomes);
    const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
    this.sendEnvelope(envelope);
  }
};
__name(Client, "Client");
function getDataCategoryByType(type) {
  return type === "replay_event" ? "replay" : type || "error";
}
__name(getDataCategoryByType, "getDataCategoryByType");
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if (isThenable(beforeSendResult)) {
    return beforeSendResult.then(
      (event) => {
        if (!isPlainObject(event) && event !== null) {
          throw _makeInternalError(invalidValueError);
        }
        return event;
      },
      (e) => {
        throw _makeInternalError(`${beforeSendLabel} rejected with ${e}`);
      }
    );
  } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
    throw _makeInternalError(invalidValueError);
  }
  return beforeSendResult;
}
__name(_validateBeforeSendResult, "_validateBeforeSendResult");
function processBeforeSend(client, options, event, hint) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = options;
  const beforeSendSpan = !isStreamedBeforeSendSpanCallback(options.beforeSendSpan) && options.beforeSendSpan;
  let processedEvent = event;
  if (isErrorEvent2(processedEvent) && beforeSend) {
    return beforeSend(processedEvent, hint);
  }
  if (isTransactionEvent(processedEvent)) {
    if (beforeSendSpan || ignoreSpans) {
      const rootSpanJson = convertTransactionEventToSpanJson(processedEvent);
      if (ignoreSpans?.length && shouldIgnoreSpan(
        { description: rootSpanJson.description, op: rootSpanJson.op, attributes: rootSpanJson.data },
        ignoreSpans
      )) {
        return null;
      }
      if (beforeSendSpan) {
        const processedRootSpanJson = beforeSendSpan(rootSpanJson);
        if (!processedRootSpanJson) {
          showSpanDropWarning();
        } else {
          processedEvent = merge2(event, convertSpanJsonToTransactionEvent(processedRootSpanJson));
        }
      }
      if (processedEvent.spans) {
        const processedSpans = [];
        const initialSpans = processedEvent.spans;
        for (const span of initialSpans) {
          if (ignoreSpans?.length && shouldIgnoreSpan({ description: span.description, op: span.op, attributes: span.data }, ignoreSpans)) {
            reparentChildSpans(initialSpans, span);
            continue;
          }
          if (beforeSendSpan) {
            const processedSpan = beforeSendSpan(span);
            if (!processedSpan) {
              showSpanDropWarning();
              processedSpans.push(span);
            } else {
              processedSpans.push(processedSpan);
            }
          } else {
            processedSpans.push(span);
          }
        }
        const droppedSpans = processedEvent.spans.length - processedSpans.length;
        if (droppedSpans) {
          client.recordDroppedEvent("before_send", "span", droppedSpans);
        }
        processedEvent.spans = processedSpans;
      }
    }
    if (beforeSendTransaction) {
      if (processedEvent.spans) {
        const spanCountBefore = processedEvent.spans.length;
        processedEvent.sdkProcessingMetadata = {
          ...event.sdkProcessingMetadata,
          spanCountBeforeProcessing: spanCountBefore
        };
      }
      return beforeSendTransaction(processedEvent, hint);
    }
  }
  return processedEvent;
}
__name(processBeforeSend, "processBeforeSend");
function isErrorEvent2(event) {
  return event.type === void 0;
}
__name(isErrorEvent2, "isErrorEvent");
function isTransactionEvent(event) {
  return event.type === "transaction";
}
__name(isTransactionEvent, "isTransactionEvent");
function estimateMetricSizeInBytes(metric) {
  let weight = 0;
  if (metric.name) {
    weight += metric.name.length * 2;
  }
  weight += 8;
  return weight + estimateAttributesSizeInBytes(metric.attributes);
}
__name(estimateMetricSizeInBytes, "estimateMetricSizeInBytes");
function estimateLogSizeInBytes(log4) {
  let weight = 0;
  if (log4.message) {
    weight += log4.message.length * 2;
  }
  return weight + estimateAttributesSizeInBytes(log4.attributes);
}
__name(estimateLogSizeInBytes, "estimateLogSizeInBytes");
function estimateAttributesSizeInBytes(attributes) {
  if (!attributes) {
    return 0;
  }
  let weight = 0;
  Object.values(attributes).forEach((value) => {
    if (Array.isArray(value)) {
      weight += value.length * estimatePrimitiveSizeInBytes2(value[0]);
    } else if (isPrimitive(value)) {
      weight += estimatePrimitiveSizeInBytes2(value);
    } else {
      weight += 100;
    }
  });
  return weight;
}
__name(estimateAttributesSizeInBytes, "estimateAttributesSizeInBytes");
function estimatePrimitiveSizeInBytes2(value) {
  if (typeof value === "string") {
    return value.length * 2;
  } else if (typeof value === "number") {
    return 8;
  } else if (typeof value === "boolean") {
    return 4;
  }
  return 0;
}
__name(estimatePrimitiveSizeInBytes2, "estimatePrimitiveSizeInBytes");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/sdk.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (DEBUG_BUILD) {
      debug3.enable();
    } else {
      consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const scope = getCurrentScope();
  scope.update(options.initialScope);
  const client = new clientClass(options);
  setCurrentClient(client);
  client.init();
  return client;
}
__name(initAndBind, "initAndBind");
function setCurrentClient(client) {
  getCurrentScope().setClient(client);
}
__name(setCurrentClient, "setCurrentClient");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/data-collection/filterKeyValueData.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isSensitiveKey(lower, denySnippets) {
  return denySnippets.some((snippet) => lower.includes(snippet));
}
__name(isSensitiveKey, "isSensitiveKey");
function filterKeyValueData(data, behavior, additionalDenyTerms) {
  if (behavior === false) {
    return {};
  }
  const denySnippets = additionalDenyTerms != null ? [...SENSITIVE_KEY_SNIPPETS, ...additionalDenyTerms] : SENSITIVE_KEY_SNIPPETS;
  const result = {};
  if (behavior === true) {
    for (const key of Object.keys(data)) {
      result[key] = isSensitiveKey(key.toLowerCase(), denySnippets) ? FILTERED_VALUE : data[key];
    }
    return result;
  }
  if ("deny" in behavior) {
    const lowerTerms2 = behavior.deny.map((t) => t.toLowerCase());
    for (const key of Object.keys(data)) {
      const lower = key.toLowerCase();
      const isDenied = isSensitiveKey(lower, denySnippets) || lowerTerms2.some((term) => lower.includes(term));
      result[key] = isDenied ? FILTERED_VALUE : data[key];
    }
    return result;
  }
  const lowerTerms = behavior.allow.map((t) => t.toLowerCase());
  for (const key of Object.keys(data)) {
    const lower = key.toLowerCase();
    if (isSensitiveKey(lower, denySnippets)) {
      result[key] = FILTERED_VALUE;
    } else {
      const isAllowed = lowerTerms.some((term) => lower.includes(term));
      result[key] = isAllowed ? data[key] : FILTERED_VALUE;
    }
  }
  return result;
}
__name(filterKeyValueData, "filterKeyValueData");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/cookie.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function parseCookie(str) {
  const obj = {};
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      try {
        obj[key] = val.indexOf("%") !== -1 ? decodeURIComponent(val) : val;
      } catch {
        obj[key] = val;
      }
    }
    index = endIdx + 1;
  }
  return obj;
}
__name(parseCookie, "parseCookie");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/envToBool.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FALSY_ENV_VALUES = /* @__PURE__ */ new Set(["false", "f", "n", "no", "off", "0"]);
var TRUTHY_ENV_VALUES = /* @__PURE__ */ new Set(["true", "t", "y", "yes", "on", "1"]);
function envToBool(value, options) {
  const normalized = String(value).toLowerCase();
  if (FALSY_ENV_VALUES.has(normalized)) {
    return false;
  }
  if (TRUTHY_ENV_VALUES.has(normalized)) {
    return true;
  }
  return options?.strict ? null : Boolean(value);
}
__name(envToBool, "envToBool");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/checkin.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createCheckInEnvelope(checkIn, dynamicSamplingContext, metadata, tunnel, dsn) {
  const headers = {
    sent_at: new Date(safeDateNow()).toISOString()
  };
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  if (dynamicSamplingContext) {
    headers.trace = dynamicSamplingContext;
  }
  const item = createCheckInEnvelopeItem(checkIn);
  return createEnvelope(headers, [item]);
}
__name(createCheckInEnvelope, "createCheckInEnvelope");
function createCheckInEnvelopeItem(checkIn) {
  const checkInHeaders = {
    type: "check_in"
  };
  return [checkInHeaders, checkIn];
}
__name(createCheckInEnvelopeItem, "createCheckInEnvelopeItem");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/isSentryRequestUrl.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/url.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_BASE_URL = "thismessage:/";
function isURLObjectRelative(url) {
  return "isRelative" in url;
}
__name(isURLObjectRelative, "isURLObjectRelative");
function parseStringToURLObject(url, urlBase) {
  const isRelative = url.indexOf("://") <= 0 && url.indexOf("//") !== 0;
  const base = urlBase ?? (isRelative ? DEFAULT_BASE_URL : void 0);
  try {
    if ("canParse" in URL && !URL.canParse(url, base)) {
      return void 0;
    }
    const fullUrlObject = new URL(url, base);
    if (isRelative) {
      return {
        isRelative,
        pathname: fullUrlObject.pathname,
        search: fullUrlObject.search,
        hash: fullUrlObject.hash
      };
    }
    return fullUrlObject;
  } catch {
  }
  return void 0;
}
__name(parseStringToURLObject, "parseStringToURLObject");
function getSanitizedUrlStringFromUrlObject(url) {
  if (isURLObjectRelative(url)) {
    return url.pathname;
  }
  const newUrl = new URL(url);
  newUrl.search = "";
  newUrl.hash = "";
  if (["80", "443"].includes(newUrl.port)) {
    newUrl.port = "";
  }
  if (newUrl.password) {
    newUrl.password = "%filtered%";
  }
  if (newUrl.username) {
    newUrl.username = "%filtered%";
  }
  return newUrl.toString();
}
__name(getSanitizedUrlStringFromUrlObject, "getSanitizedUrlStringFromUrlObject");
function getHttpSpanNameFromUrlObject(urlObject, kind, request, routeName) {
  const method = request?.method?.toUpperCase() ?? "GET";
  const route = routeName ? routeName : urlObject ? kind === "client" ? getSanitizedUrlStringFromUrlObject(urlObject) : urlObject.pathname : "/";
  return `${method} ${route}`;
}
__name(getHttpSpanNameFromUrlObject, "getHttpSpanNameFromUrlObject");
function getHttpSpanDetailsFromUrlObject(urlObject, kind, spanOrigin, request, routeName) {
  const attributes = {
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: spanOrigin,
    [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
  };
  if (routeName) {
    attributes[kind === "server" ? "http.route" : "url.template"] = routeName;
    attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
  }
  if (request?.method) {
    attributes[SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] = request.method.toUpperCase();
  }
  if (urlObject) {
    if (urlObject.search) {
      attributes["url.query"] = urlObject.search;
    }
    if (urlObject.hash) {
      attributes["url.fragment"] = urlObject.hash;
    }
    if (urlObject.pathname) {
      attributes["url.path"] = urlObject.pathname;
      if (urlObject.pathname === "/") {
        attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
      }
    }
    if (!isURLObjectRelative(urlObject)) {
      attributes[SEMANTIC_ATTRIBUTE_URL_FULL] = urlObject.href;
      if (urlObject.port) {
        attributes["url.port"] = urlObject.port;
      }
      if (urlObject.protocol) {
        attributes["url.scheme"] = urlObject.protocol;
      }
      if (urlObject.hostname) {
        attributes[kind === "server" ? "server.address" : "url.domain"] = urlObject.hostname;
      }
    }
  }
  return [getHttpSpanNameFromUrlObject(urlObject, kind, request, routeName), attributes];
}
__name(getHttpSpanDetailsFromUrlObject, "getHttpSpanDetailsFromUrlObject");
function stripDataUrlContent(url, includeDataPrefix = true) {
  if (url.startsWith("data:")) {
    const match = url.match(/^data:([^;,]+)/);
    const mimeType = match ? match[1] : "text/plain";
    const isBase64 = url.includes(";base64,");
    const dataStart = url.indexOf(",");
    let dataPrefix = "";
    if (includeDataPrefix && dataStart !== -1) {
      const data = url.slice(dataStart + 1);
      dataPrefix = data.length > 10 ? `${data.slice(0, 10)}... [truncated]` : data;
    }
    return `data:${mimeType}${isBase64 ? ",base64" : ""}${dataPrefix ? `,${dataPrefix}` : ""}`;
  }
  return url;
}
__name(stripDataUrlContent, "stripDataUrlContent");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/isSentryRequestUrl.js
function isSentryRequestUrl(url, client) {
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}
__name(isSentryRequestUrl, "isSentryRequestUrl");
function checkTunnel(url, tunnel) {
  if (!tunnel) {
    return false;
  }
  return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}
__name(checkTunnel, "checkTunnel");
function checkDsn(url, dsn) {
  const urlParts = parseStringToURLObject(url);
  if (!urlParts || isURLObjectRelative(urlParts)) {
    return false;
  }
  if (!dsn) {
    return false;
  }
  return hostnameMatchesDsnHost(urlParts.hostname, dsn.host) && /(^|&|\?)sentry_key=/.test(urlParts.search);
}
__name(checkDsn, "checkDsn");
function hostnameMatchesDsnHost(hostname, dsnHost) {
  return hostname === dsnHost || dsnHost.length > 0 && hostname.endsWith(`.${dsnHost}`);
}
__name(hostnameMatchesDsnHost, "hostnameMatchesDsnHost");
function removeTrailingSlash(str) {
  return str[str.length - 1] === "/" ? str.slice(0, -1) : str;
}
__name(removeTrailingSlash, "removeTrailingSlash");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function applySdkMetadata(options, name, names = [name], source = "npm") {
  const sdk = (options._metadata = options._metadata || {}).sdk = options._metadata.sdk || {};
  if (!sdk.name) {
    sdk.name = `sentry.javascript.${name}`;
    sdk.packages = names.map((name2) => ({
      name: `${source}:@sentry/${name2}`,
      version: SDK_VERSION
    }));
    sdk.version = SDK_VERSION;
  }
}
__name(applySdkMetadata, "applySdkMetadata");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/traceData.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function getTraceData(options = {}) {
  const client = options.client || getClient();
  if (!isEnabled2() || !client) {
    return {};
  }
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }
  const scope = options.scope || getCurrentScope();
  const span = options.span || getActiveSpan();
  const isTwpPlaceholder = spanIsNonRecordingSpan(span) && !hasSpansEnabled(client.getOptions());
  if (!span && hasExternalPropagationContext()) {
    return {};
  }
  const sentryTrace = span && !isTwpPlaceholder ? spanToTraceHeader(span) : scopeToTraceHeader(scope);
  const dsc = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope);
  const baggage = dynamicSamplingContextToSentryBaggageHeader(dsc);
  const isValidSentryTraceHeader = TRACEPARENT_REGEXP.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    debug3.warn("Invalid sentry-trace data. Cannot generate trace data");
    return {};
  }
  const traceData = {
    "sentry-trace": sentryTrace,
    baggage
  };
  if (options.propagateTraceparent) {
    traceData.traceparent = span && !isTwpPlaceholder ? spanToTraceparentHeader(span) : scopeToTraceparentHeader(scope);
  }
  return traceData;
}
__name(getTraceData, "getTraceData");
function scopeToTraceHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return generateSentryTraceHeader(traceId, propagationSpanId, sampled);
}
__name(scopeToTraceHeader, "scopeToTraceHeader");
function scopeToTraceparentHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return generateTraceparentHeader(traceId, propagationSpanId, sampled);
}
__name(scopeToTraceparentHeader, "scopeToTraceparentHeader");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/request.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MAX_BODY_BYTE_LENGTH = 1024 * 1024;
var TEXT_CONTENT_TYPES = [
  "text/",
  "application/json",
  "application/x-www-form-urlencoded",
  "application/xml",
  "application/graphql"
];
function getMaxBodyByteLength(maxRequestBodySize) {
  if (maxRequestBodySize === "small")
    return 1e3;
  if (maxRequestBodySize === "medium")
    return 1e4;
  return MAX_BODY_BYTE_LENGTH;
}
__name(getMaxBodyByteLength, "getMaxBodyByteLength");
function winterCGHeadersToDict(winterCGHeaders) {
  const headers = {};
  try {
    winterCGHeaders.forEach((value, key) => {
      if (typeof value === "string") {
        headers[key] = value;
      }
    });
  } catch {
  }
  return headers;
}
__name(winterCGHeadersToDict, "winterCGHeadersToDict");
function winterCGRequestToRequestData(req) {
  const headers = winterCGHeadersToDict(req.headers);
  return {
    method: req.method,
    url: req.url,
    query_string: extractQueryParamsFromUrl(req.url),
    headers
    // TODO: Can we extract body data from the request?
  };
}
__name(winterCGRequestToRequestData, "winterCGRequestToRequestData");
function isTextualContentType(contentType) {
  if (!contentType) {
    return false;
  }
  const lowerContentType = contentType.toLowerCase();
  return TEXT_CONTENT_TYPES.some((type) => lowerContentType.includes(type));
}
__name(isTextualContentType, "isTextualContentType");
async function captureBodyFromWinterCGRequest(request, isolationScope, maxRequestBodySize) {
  try {
    const contentType = request.headers.get("content-type");
    if (!isTextualContentType(contentType)) {
      DEBUG_BUILD && debug3.log("Skipping body capture for non-textual content type:", contentType);
      return;
    }
    if (!request.body) {
      return;
    }
    const contentLength = request.headers.get("content-length");
    const maxBodySize = getMaxBodyByteLength(maxRequestBodySize);
    if (contentLength) {
      const length = parseInt(contentLength, 10);
      if (!isNaN(length) && length > MAX_BODY_BYTE_LENGTH) {
        DEBUG_BUILD && debug3.log("Skipping body capture: body too large", length);
        return;
      }
    }
    const clonedRequest = request.clone();
    const bodyPromise = clonedRequest.text();
    const timeoutPromise = new Promise((resolve2) => {
      safeUnref(setTimeout(() => resolve2(null), 2e3));
    });
    const body = await Promise.race([bodyPromise, timeoutPromise]);
    if (body === null) {
      DEBUG_BUILD && debug3.log("Timeout reading request body");
      return;
    }
    if (!body) {
      return;
    }
    const encoder = new TextEncoder();
    const bytes = encoder.encode(body);
    const bodyByteLength = bytes.length;
    let truncatedBody;
    if (bodyByteLength > maxBodySize) {
      const decoder = new TextDecoder();
      truncatedBody = `${decoder.decode(bytes.slice(0, maxBodySize - 3))}...`;
    } else {
      truncatedBody = body;
    }
    isolationScope.setSDKProcessingMetadata({ normalizedRequest: { data: truncatedBody } });
    DEBUG_BUILD && debug3.log("Captured request body:", bodyByteLength, "bytes");
  } catch (error4) {
    DEBUG_BUILD && debug3.error("Error capturing request body:", error4);
  }
}
__name(captureBodyFromWinterCGRequest, "captureBodyFromWinterCGRequest");
function httpHeadersToSpanAttributes(headers, dataCollection = false, lifecycle = "request") {
  const resolvedDataCollection = typeof dataCollection === "boolean" ? defaultPiiToCollectionOptions(dataCollection) : dataCollection;
  const headerBehavior = lifecycle === "request" ? resolvedDataCollection.httpHeaders.request : resolvedDataCollection.httpHeaders.response;
  const cookieBehavior = resolvedDataCollection.cookies;
  const prefix = `http.${lifecycle}.header.`;
  const spanAttributes = {};
  try {
    const regularHeaders = {};
    for (const [key, value] of Object.entries(headers)) {
      if (value == null) {
        continue;
      }
      const lowerKey = key.toLowerCase();
      const isCookieHeader = lowerKey === "cookie" || lowerKey === "set-cookie";
      if (isCookieHeader) {
        if (cookieBehavior === false) {
          continue;
        }
        if (typeof value === "string" && value !== "") {
          const parsed = parseCookieHeader(value, lowerKey === "set-cookie");
          const filtered = filterKeyValueData(parsed, cookieBehavior, SENSITIVE_COOKIE_NAME_SNIPPETS);
          for (const [cookieKey, cookieValue] of Object.entries(filtered)) {
            spanAttributes[`${prefix}${normalizeAttributeKey(lowerKey)}.${normalizeAttributeKey(cookieKey)}`] = cookieValue;
          }
        } else {
          spanAttributes[`${prefix}${normalizeAttributeKey(lowerKey)}`] = FILTERED_VALUE;
        }
      } else {
        if (headerBehavior === false) {
          continue;
        }
        if (Array.isArray(value)) {
          regularHeaders[lowerKey] = value.map((v) => v != null ? String(v) : v).join(";");
        } else if (typeof value === "string") {
          regularHeaders[lowerKey] = value;
        }
      }
    }
    if (headerBehavior !== false) {
      const filtered = filterKeyValueData(regularHeaders, headerBehavior);
      for (const [headerKey, headerValue] of Object.entries(filtered)) {
        spanAttributes[`${prefix}${normalizeAttributeKey(headerKey)}`] = headerValue;
      }
    }
  } catch {
  }
  return spanAttributes;
}
__name(httpHeadersToSpanAttributes, "httpHeadersToSpanAttributes");
function normalizeAttributeKey(key) {
  return key.replace(/-/g, "_");
}
__name(normalizeAttributeKey, "normalizeAttributeKey");
function parseCookieHeader(value, isSetCookie) {
  const semicolonIndex = value.indexOf(";");
  const cookieString = isSetCookie && semicolonIndex !== -1 ? value.substring(0, semicolonIndex) : value;
  const cookies = isSetCookie ? [cookieString] : cookieString.split("; ");
  const result = {};
  for (const cookie of cookies) {
    const equalSignIndex = cookie.indexOf("=");
    const cookieKey = (equalSignIndex !== -1 ? cookie.substring(0, equalSignIndex) : cookie).toLowerCase();
    const cookieValue = equalSignIndex !== -1 ? cookie.substring(equalSignIndex + 1) : "";
    result[cookieKey] = cookieValue;
  }
  return result;
}
__name(parseCookieHeader, "parseCookieHeader");
function extractQueryParamsFromUrl(url) {
  if (!url) {
    return;
  }
  try {
    const queryParams = new URL(url, "http://s.io").search.slice(1);
    return queryParams.length ? queryParams : void 0;
  } catch {
    return void 0;
  }
}
__name(extractQueryParamsFromUrl, "extractQueryParamsFromUrl");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/breadcrumbs.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_BREADCRUMBS = 100;
function addBreadcrumb(breadcrumb, hint) {
  const client = getClient();
  const isolationScope = getIsolationScope();
  if (!client)
    return;
  const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();
  if (maxBreadcrumbs <= 0)
    return;
  const timestamp = dateTimestampInSeconds();
  const mergedBreadcrumb = { timestamp, ...breadcrumb };
  const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
  if (finalBreadcrumb === null)
    return;
  if (client.emit) {
    client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
  }
  isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}
__name(addBreadcrumb, "addBreadcrumb");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/functiontostring.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var originalFunctionToString;
var INTEGRATION_NAME = "FunctionToString";
var SETUP_CLIENTS = /* @__PURE__ */ new WeakMap();
var _functionToStringIntegration = /* @__PURE__ */ __name(() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...args) {
          const originalFunction = getOriginalFunction(this);
          const context2 = SETUP_CLIENTS.has(getClient()) && originalFunction !== void 0 ? originalFunction : this;
          return originalFunctionToString.apply(context2, args);
        };
      } catch {
      }
    },
    setup(client) {
      SETUP_CLIENTS.set(client, true);
    }
  };
}, "_functionToStringIntegration");
var functionToStringIntegration = defineIntegration(_functionToStringIntegration);

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/eventFilters.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  // The browser logs this when a ResizeObserver handler takes a bit longer. Usually this is not an actual issue though. It indicates slowness.
  /^Cannot redefine property: googletag$/,
  // This is thrown when google tag manager is used in combination with an ad blocker
  /^Can't find variable: gmo$/,
  // Error from Google Search App https://issuetracker.google.com/issues/396043331
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
  // Random error that happens but not actionable or noticeable to end-users.
  /can't redefine non-configurable property "solana"/,
  // Probably a browser extension or custom browser (Brave) throwing this error
  /vv\(\)\.getRestrictions is not a function/,
  // Error thrown by GTM, seemingly not affecting end-users
  /Can't find variable: _AutofillCallbackHandler/,
  // Unactionable error in instagram webview https://developers.facebook.com/community/threads/320013549791141/
  /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
  // unactionable error from CEFSharp, a .NET library that embeds chromium in .NET apps
  /^Java exception was raised during method invocation$/
  // error from Facebook Mobile browser (https://github.com/getsentry/sentry-javascript/issues/15065)
];
var INTEGRATION_NAME2 = "EventFilters";
var eventFiltersIntegration = defineIntegration((options = {}) => {
  let mergedOptions;
  return {
    name: INTEGRATION_NAME2,
    setup(client) {
      const clientOptions = client.getOptions();
      mergedOptions = _mergeOptions(options, clientOptions);
    },
    processEvent(event, _hint, client) {
      if (!mergedOptions) {
        const clientOptions = client.getOptions();
        mergedOptions = _mergeOptions(options, clientOptions);
      }
      return _shouldDropEvent(event, mergedOptions) ? null : event;
    }
  };
});
var inboundFiltersIntegration = defineIntegration((options = {}) => {
  return {
    ...eventFiltersIntegration(options),
    name: "InboundFilters"
  };
});
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [
      ...internalOptions.ignoreErrors || [],
      ...clientOptions.ignoreErrors || [],
      ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
    ],
    ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []]
  };
}
__name(_mergeOptions, "_mergeOptions");
function _shouldDropEvent(event, options) {
  if (!event.type) {
    if (_isIgnoredError(event, options.ignoreErrors)) {
      DEBUG_BUILD && debug3.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isUselessError(event)) {
      DEBUG_BUILD && debug3.warn(
        `Event dropped due to not having an error message, error type or stacktrace.
Event: ${getEventDescription(
          event
        )}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      DEBUG_BUILD && debug3.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      DEBUG_BUILD && debug3.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
  } else if (event.type === "transaction") {
    if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
      DEBUG_BUILD && debug3.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
  }
  return false;
}
__name(_shouldDropEvent, "_shouldDropEvent");
function _isIgnoredError(event, ignoreErrors) {
  if (!ignoreErrors?.length) {
    return false;
  }
  return getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
__name(_isIgnoredError, "_isIgnoredError");
function _isIgnoredTransaction(event, ignoreTransactions) {
  if (!ignoreTransactions?.length) {
    return false;
  }
  const name = event.transaction;
  return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
}
__name(_isIgnoredTransaction, "_isIgnoredTransaction");
function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls?.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
__name(_isDeniedUrl, "_isDeniedUrl");
function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls?.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
__name(_isAllowedUrl, "_isAllowedUrl");
function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
__name(_getLastValidUrl, "_getLastValidUrl");
function _getEventFilterUrl(event) {
  try {
    const rootException = [...event.exception?.values ?? []].reverse().find((value) => value.mechanism?.parent_id === void 0 && value.stacktrace?.frames?.length);
    const frames = rootException?.stacktrace?.frames;
    return frames ? _getLastValidUrl(frames) : null;
  } catch {
    DEBUG_BUILD && debug3.error(`Cannot extract url for event ${getEventDescription(event)}`);
    return null;
  }
}
__name(_getEventFilterUrl, "_getEventFilterUrl");
function _isUselessError(event) {
  if (!event.exception?.values?.length) {
    return false;
  }
  return (
    // No top-level message
    !event.message && // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value)
  );
}
__name(_isUselessError, "_isUselessError");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/linkederrors.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/aggregate-errors.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, key, limit, event, hint) {
  if (!event.exception?.values || !hint || !isInstanceOf(hint.originalException, Error)) {
    return;
  }
  const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
  if (originalException) {
    event.exception.values = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      hint.originalException,
      key,
      event.exception.values,
      originalException,
      0
    );
  }
}
__name(applyAggregateErrorsToEvent, "applyAggregateErrorsToEvent");
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error4, key, prevExceptions, exception, exceptionId) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }
  let newExceptions = [...prevExceptions];
  if (isInstanceOf(error4[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId, error4);
    const newException = exceptionFromErrorImplementation(parser, error4[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error4[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId
    );
  }
  if (isExceptionGroup(error4)) {
    error4.errors.forEach((childError, i) => {
      if (isInstanceOf(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId, error4);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId
        );
      }
    });
  }
  return newExceptions;
}
__name(aggregateExceptionsFromError, "aggregateExceptionsFromError");
function isExceptionGroup(error4) {
  return Array.isArray(error4.errors);
}
__name(isExceptionGroup, "isExceptionGroup");
function applyExceptionGroupFieldsForParentException(exception, exceptionId, error4) {
  exception.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...isExceptionGroup(error4) && { is_exception_group: true },
    ...exception.mechanism,
    exception_id: exceptionId
  };
}
__name(applyExceptionGroupFieldsForParentException, "applyExceptionGroupFieldsForParentException");
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
  exception.mechanism = {
    handled: true,
    ...exception.mechanism,
    type: "chained",
    source,
    exception_id: exceptionId,
    parent_id: parentId
  };
}
__name(applyExceptionGroupFieldsForChildException, "applyExceptionGroupFieldsForChildException");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/eventbuilder.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function parseStackFrames(stackParser, error4) {
  return stackParser(error4.stack || "", 1);
}
__name(parseStackFrames, "parseStackFrames");
function hasSentryFetchUrlHost(error4) {
  return isError(error4) && "__sentry_fetch_url_host__" in error4 && typeof error4.__sentry_fetch_url_host__ === "string";
}
__name(hasSentryFetchUrlHost, "hasSentryFetchUrlHost");
function _enhanceErrorWithSentryInfo(error4) {
  if (hasSentryFetchUrlHost(error4)) {
    return `${error4.message} (${error4.__sentry_fetch_url_host__})`;
  }
  return error4.message;
}
__name(_enhanceErrorWithSentryInfo, "_enhanceErrorWithSentryInfo");
function exceptionFromError(stackParser, error4) {
  const exception = {
    type: error4.name || error4.constructor.name,
    value: _enhanceErrorWithSentryInfo(error4)
  };
  const frames = parseStackFrames(stackParser, error4);
  if (frames.length) {
    exception.stacktrace = { frames };
  }
  return exception;
}
__name(exceptionFromError, "exceptionFromError");
function getErrorPropertyFromObject(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const value = obj[prop];
      if (value instanceof Error) {
        return value;
      }
    }
  }
  return void 0;
}
__name(getErrorPropertyFromObject, "getErrorPropertyFromObject");
function getMessageForObject(exception) {
  if ("name" in exception && typeof exception.name === "string") {
    let message = `'${exception.name}' captured as exception`;
    if ("message" in exception && typeof exception.message === "string") {
      message += ` with message '${exception.message}'`;
    }
    return message;
  } else if ("message" in exception && typeof exception.message === "string") {
    return exception.message;
  }
  const keys = extractExceptionKeysForMessage(exception);
  if (isErrorEvent(exception)) {
    return `Event \`ErrorEvent\` captured as exception with message \`${exception.message}\``;
  }
  const className = getObjectClassName(exception);
  return `${className && className !== "Object" ? `'${className}'` : "Object"} captured as exception with keys: ${keys}`;
}
__name(getMessageForObject, "getMessageForObject");
function getObjectClassName(obj) {
  try {
    const prototype = Object.getPrototypeOf(obj);
    return prototype ? prototype.constructor.name : void 0;
  } catch {
  }
}
__name(getObjectClassName, "getObjectClassName");
function getException(client, mechanism, exception, hint) {
  if (isError(exception)) {
    return [exception, void 0];
  }
  mechanism.synthetic = true;
  if (isPlainObject(exception)) {
    const normalizeDepth = client?.getOptions().normalizeDepth;
    const extras = { ["__serialized__"]: normalizeToSize(exception, normalizeDepth) };
    const errorFromProp = getErrorPropertyFromObject(exception);
    if (errorFromProp) {
      return [errorFromProp, extras];
    }
    const message = getMessageForObject(exception);
    const ex2 = hint?.syntheticException || new Error(message);
    ex2.message = message;
    return [ex2, extras];
  }
  const ex = hint?.syntheticException || new Error(exception);
  ex.message = `${exception}`;
  return [ex, void 0];
}
__name(getException, "getException");
function eventFromUnknownInput(client, stackParser, exception, hint) {
  const providedMechanism = hint?.data && hint.data.mechanism;
  const mechanism = providedMechanism || {
    handled: true,
    type: "generic"
  };
  const [ex, extras] = getException(client, mechanism, exception, hint);
  const event = {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
  if (extras) {
    event.extra = extras;
  }
  addExceptionTypeValue(event, void 0, void 0);
  addExceptionMechanism(event, mechanism);
  return {
    ...event,
    event_id: hint?.event_id
  };
}
__name(eventFromUnknownInput, "eventFromUnknownInput");
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
  const event = {
    event_id: hint?.event_id,
    level
  };
  if (attachStacktrace && hint?.syntheticException) {
    const frames = parseStackFrames(stackParser, hint.syntheticException);
    if (frames.length) {
      event.exception = {
        values: [
          {
            value: message,
            stacktrace: { frames }
          }
        ]
      };
      addExceptionMechanism(event, { synthetic: true });
    }
  }
  if (isParameterizedString(message)) {
    const { __sentry_template_string__, __sentry_template_values__ } = message;
    event.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__
    };
    return event;
  }
  event.message = message;
  return event;
}
__name(eventFromMessage, "eventFromMessage");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/linkederrors.js
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
var INTEGRATION_NAME3 = "LinkedErrors";
var _linkedErrorsIntegration = /* @__PURE__ */ __name((options = {}) => {
  const limit = options.limit || DEFAULT_LIMIT;
  const key = options.key || DEFAULT_KEY;
  return {
    name: INTEGRATION_NAME3,
    preprocessEvent(event, hint, client) {
      const options2 = client.getOptions();
      applyAggregateErrorsToEvent(exceptionFromError, options2.stackParser, key, limit, event, hint);
    }
  };
}, "_linkedErrorsIntegration");
var linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/requestdata.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/vendor/getIpAddress.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ipHeaderNames = [
  "X-Client-IP",
  "X-Forwarded-For",
  "Fly-Client-IP",
  "CF-Connecting-IP",
  "Fastly-Client-Ip",
  "True-Client-Ip",
  "X-Real-IP",
  "X-Cluster-Client-IP",
  "X-Forwarded",
  "Forwarded-For",
  "Forwarded",
  "X-Vercel-Forwarded-For"
];
function getClientIPAddress(headers) {
  const lowerCaseHeaders = {};
  for (const key of Object.keys(headers)) {
    lowerCaseHeaders[key.toLowerCase()] = headers[key];
  }
  const headerValues = ipHeaderNames.map((headerName) => {
    const rawValue = lowerCaseHeaders[headerName.toLowerCase()];
    const value = Array.isArray(rawValue) ? rawValue.join(";") : rawValue;
    if (headerName === "Forwarded") {
      return parseForwardedHeader(value);
    }
    return value?.split(",").map((v) => v.trim());
  });
  const flattenedHeaderValues = headerValues.reduce((acc, val) => {
    if (!val) {
      return acc;
    }
    return acc.concat(val);
  }, []);
  const ipAddress = flattenedHeaderValues.find((ip) => ip !== null && isIP(ip));
  return ipAddress || null;
}
__name(getClientIPAddress, "getClientIPAddress");
function parseForwardedHeader(value) {
  if (!value) {
    return null;
  }
  for (const part of value.split(";")) {
    if (part.startsWith("for=")) {
      return part.slice(4);
    }
  }
  return null;
}
__name(parseForwardedHeader, "parseForwardedHeader");
function isIP(str) {
  const regex = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/;
  return regex.test(str);
}
__name(isIP, "isIP");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/requestdata.js
var INTEGRATION_NAME4 = "RequestData";
var _requestDataIntegration = /* @__PURE__ */ __name((options = {}) => {
  function resolveIncludeAndDataCollection(client) {
    const dc = client.getDataCollectionOptions();
    const dataCollection = {
      ...dc,
      ...options.include?.cookies === true && dc.cookies === false && { cookies: true },
      ...options.include?.headers === true && dc.httpHeaders.request === false && {
        httpHeaders: { ...dc.httpHeaders, request: true }
      }
    };
    return {
      dataCollection,
      include: {
        cookies: dataCollection.cookies !== false,
        // Always attach body data that's already on the scope — dataCollection.httpBodies gates write-time, not read-time
        data: true,
        headers: dataCollection.httpHeaders.request !== false,
        ip: dataCollection.userInfo,
        query_string: dataCollection.queryParams !== false,
        // No dataCollection equivalent — URL is always included
        url: true,
        ...options.include
      }
    };
  }
  __name(resolveIncludeAndDataCollection, "resolveIncludeAndDataCollection");
  return {
    name: INTEGRATION_NAME4,
    processEvent(event, _hint, client) {
      const { sdkProcessingMetadata = {} } = event;
      const { normalizedRequest, ipAddress } = sdkProcessingMetadata;
      const { include } = resolveIncludeAndDataCollection(client);
      if (normalizedRequest) {
        addNormalizedRequestDataToEvent(event, normalizedRequest, { ipAddress }, include);
      }
      return event;
    },
    processSegmentSpan(span, client) {
      const { sdkProcessingMetadata = {} } = getIsolationScope().getScopeData();
      const { normalizedRequest, ipAddress } = sdkProcessingMetadata;
      if (!normalizedRequest) {
        return;
      }
      const { include, dataCollection } = resolveIncludeAndDataCollection(client);
      addNormalizedRequestDataToSpan(span, normalizedRequest, ipAddress, include, dataCollection);
    }
  };
}, "_requestDataIntegration");
var requestDataIntegration = defineIntegration(_requestDataIntegration);
function addNormalizedRequestDataToEvent(event, req, additionalData, include) {
  event.request = {
    ...event.request,
    ...extractNormalizedRequestData(req, include)
  };
  if (include.ip) {
    const ip = req.headers && getClientIPAddress(req.headers) || additionalData.ipAddress;
    if (ip) {
      event.user = {
        ...event.user,
        ip_address: ip
      };
    }
  }
}
__name(addNormalizedRequestDataToEvent, "addNormalizedRequestDataToEvent");
function addNormalizedRequestDataToSpan(span, normalizedRequest, ipAddress, include, dataCollection) {
  const requestData = extractNormalizedRequestData(normalizedRequest, include);
  const attributes = {};
  if (requestData.url) {
    attributes["url.full"] = requestData.url;
  }
  if (requestData.method) {
    attributes["http.request.method"] = requestData.method;
  }
  if (requestData.query_string) {
    attributes["url.query"] = normalizeQueryString(requestData.query_string);
  }
  safeSetSpanJSONAttributes(span, attributes);
  if (requestData.cookies && Object.keys(requestData.cookies).length > 0) {
    const cookieString = Object.entries(requestData.cookies).map(([name, value]) => `${name}=${value}`).join("; ");
    const cookieAttributes = httpHeadersToSpanAttributes({ cookie: cookieString }, dataCollection, "request");
    safeSetSpanJSONAttributes(span, cookieAttributes);
  }
  if (requestData.headers) {
    const headerAttributes = httpHeadersToSpanAttributes(requestData.headers, dataCollection, "request");
    safeSetSpanJSONAttributes(span, headerAttributes);
  }
  if (requestData.data != null) {
    const serialized = typeof requestData.data === "string" ? requestData.data : JSON.stringify(requestData.data);
    if (serialized) {
      safeSetSpanJSONAttributes(span, { "http.request.body.data": serialized });
    }
  }
  if (include.ip) {
    const ip = normalizedRequest.headers && getClientIPAddress(normalizedRequest.headers) || ipAddress || void 0;
    if (ip) {
      safeSetSpanJSONAttributes(span, { [SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: ip });
    }
  }
}
__name(addNormalizedRequestDataToSpan, "addNormalizedRequestDataToSpan");
function extractNormalizedRequestData(normalizedRequest, include) {
  const requestData = {};
  const headers = { ...normalizedRequest.headers };
  if (include.headers) {
    requestData.headers = headers;
    if (!include.cookies) {
      delete headers.cookie;
    }
    if (!include.ip) {
      const ipHeaderNamesLower = new Set(ipHeaderNames.map((name) => name.toLowerCase()));
      for (const key of Object.keys(headers)) {
        if (ipHeaderNamesLower.has(key.toLowerCase())) {
          delete headers[key];
        }
      }
    }
  }
  requestData.method = normalizedRequest.method;
  if (include.url) {
    requestData.url = normalizedRequest.url;
  }
  if (include.cookies) {
    const cookies = normalizedRequest.cookies || (headers?.cookie ? parseCookie(headers.cookie) : void 0);
    requestData.cookies = cookies || {};
  }
  if (include.query_string) {
    requestData.query_string = normalizedRequest.query_string;
  }
  if (include.data) {
    requestData.data = normalizedRequest.data;
  }
  return requestData;
}
__name(extractNormalizedRequestData, "extractNormalizedRequestData");
function normalizeQueryString(queryString) {
  if (typeof queryString === "string") {
    return queryString || void 0;
  }
  const pairs = Array.isArray(queryString) ? queryString : Object.entries(queryString);
  const result = pairs.map(([key, value]) => `${key}=${value}`).join("&");
  return result || void 0;
}
__name(normalizeQueryString, "normalizeQueryString");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/instrument/console.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _filter = /* @__PURE__ */ new Set([]);
function addConsoleInstrumentationHandler(handler) {
  const type = "console";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, instrumentConsole);
  return removeHandler;
}
__name(addConsoleInstrumentationHandler, "addConsoleInstrumentationHandler");
function addConsoleInstrumentationFilter(filter) {
  for (const f of filter) {
    _filter.add(f);
  }
  return () => {
    for (const f of filter) {
      _filter.delete(f);
    }
  };
}
__name(addConsoleInstrumentationFilter, "addConsoleInstrumentationFilter");
function instrumentConsole() {
  if (!("console" in GLOBAL_OBJ)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in GLOBAL_OBJ.console)) {
      return;
    }
    fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
      originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        const firstArg = args[0];
        const log4 = originalConsoleMethods[level];
        const isFiltered = _filter.size && typeof firstArg === "string" && stringMatchesSomePattern(firstArg, _filter);
        if (!isFiltered) {
          triggerHandlers("console", { args, level });
        }
        if (!isFiltered || DEBUG_BUILD && debug3.isEnabled()) {
          log4?.apply(GLOBAL_OBJ.console, args);
        }
      };
    });
  });
}
__name(instrumentConsole, "instrumentConsole");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/severity.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function severityLevelFromString(level) {
  return level === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(level) ? level : "log";
}
__name(severityLevelFromString, "severityLevelFromString");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/dedupe.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var INTEGRATION_NAME5 = "Dedupe";
var _dedupeIntegration = /* @__PURE__ */ __name(() => {
  let previousEvent;
  return {
    name: INTEGRATION_NAME5,
    processEvent(currentEvent) {
      if (currentEvent.type) {
        return currentEvent;
      }
      try {
        if (_shouldDropEvent2(currentEvent, previousEvent)) {
          DEBUG_BUILD && debug3.warn("Event dropped due to being a duplicate of previously captured event.");
          return null;
        }
      } catch {
      }
      return previousEvent = currentEvent;
    }
  };
}, "_dedupeIntegration");
var dedupeIntegration = defineIntegration(_dedupeIntegration);
function _shouldDropEvent2(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}
__name(_shouldDropEvent2, "_shouldDropEvent");
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;
  if (!currentMessage && !previousMessage) {
    return false;
  }
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
__name(_isSameMessageEvent, "_isSameMessageEvent");
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
__name(_isSameExceptionEvent, "_isSameExceptionEvent");
function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = getFramesFromEvent(currentEvent);
  let previousFrames = getFramesFromEvent(previousEvent);
  if (!currentFrames && !previousFrames) {
    return true;
  }
  if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
    return false;
  }
  currentFrames = currentFrames;
  previousFrames = previousFrames;
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }
  for (let i = 0; i < previousFrames.length; i++) {
    const frameA = previousFrames[i];
    const frameB = currentFrames[i];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}
__name(_isSameStacktrace, "_isSameStacktrace");
function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }
  if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
    return false;
  }
  currentFingerprint = currentFingerprint;
  previousFingerprint = previousFingerprint;
  try {
    return !!(currentFingerprint.join("") === previousFingerprint.join(""));
  } catch {
    return false;
  }
}
__name(_isSameFingerprint, "_isSameFingerprint");
function _getExceptionFromEvent(event) {
  return event.exception?.values?.[0];
}
__name(_getExceptionFromEvent, "_getExceptionFromEvent");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/path.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPathRe = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function splitPath(filename) {
  const truncated = filename.length > 1024 ? `<truncated>${filename.slice(-1024)}` : filename;
  const parts = splitPathRe.exec(truncated);
  return parts ? parts.slice(1) : [];
}
__name(splitPath, "splitPath");
function basename(path, ext) {
  let f = splitPath(path)[2] || "";
  if (ext && f.slice(ext.length * -1) === ext) {
    f = f.slice(0, f.length - ext.length);
  }
  return f;
}
__name(basename, "basename");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/console.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var INTEGRATION_NAME6 = "Console";
var consoleIntegration = defineIntegration((options = {}) => {
  const levels = new Set(options.levels || CONSOLE_LEVELS);
  return {
    name: INTEGRATION_NAME6,
    setup(client) {
      const unsubscribe = addConsoleInstrumentationHandler(({ args, level }) => {
        if (getClient() !== client || !levels.has(level)) {
          return;
        }
        addConsoleBreadcrumb(level, args);
      });
      client.registerCleanup(unsubscribe);
      if (options.filter) {
        const unsubscribe2 = addConsoleInstrumentationFilter(options.filter);
        client.registerCleanup(unsubscribe2);
      }
    }
  };
});
function addConsoleBreadcrumb(level, args) {
  const breadcrumb = {
    category: "console",
    data: {
      arguments: args,
      logger: "console"
    },
    level: severityLevelFromString(level),
    message: formatConsoleArgs(args)
  };
  if (level === "assert") {
    if (args[0] === false) {
      const assertionArgs = args.slice(1);
      breadcrumb.message = assertionArgs.length > 0 ? `Assertion failed: ${formatConsoleArgs(assertionArgs)}` : "Assertion failed";
      breadcrumb.data.arguments = assertionArgs;
    } else {
      return;
    }
  }
  addBreadcrumb(breadcrumb, {
    input: args,
    level
  });
}
__name(addConsoleBreadcrumb, "addConsoleBreadcrumb");
function formatConsoleArgs(values) {
  return "util" in GLOBAL_OBJ && typeof GLOBAL_OBJ.util.format === "function" ? GLOBAL_OBJ.util.format(...values) : safeJoin(values, " ");
}
__name(formatConsoleArgs, "formatConsoleArgs");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/conversationId.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var INTEGRATION_NAME7 = "ConversationId";
var _conversationIdIntegration = /* @__PURE__ */ __name(() => {
  return {
    name: INTEGRATION_NAME7,
    setup(client) {
      client.on("spanStart", (span) => {
        const scopeData = getCurrentScope().getScopeData();
        const isolationScopeData = getIsolationScope().getScopeData();
        const conversationId = scopeData.conversationId || isolationScopeData.conversationId;
        if (conversationId) {
          const { op, data: attributes, description: name } = spanToJSON(span);
          if (!op?.startsWith("gen_ai.") && !attributes["ai.operationId"] && !name?.startsWith("ai.")) {
            return;
          }
          span.setAttribute(GEN_AI_CONVERSATION_ID_ATTRIBUTE, conversationId);
        }
      });
    }
  };
}, "_conversationIdIntegration");
var conversationIdIntegration = defineIntegration(_conversationIdIntegration);

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/fetch.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeaders, spans, spanOriginOrOptions) {
  if (!handlerData.fetchData) {
    return void 0;
  }
  const { method, url } = handlerData.fetchData;
  const shouldCreateSpanResult = hasSpansEnabled() && shouldCreateSpan(url);
  if (handlerData.endTimestamp) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId)
      return;
    const span2 = spans[spanId];
    if (span2) {
      if (shouldCreateSpanResult) {
        endSpan(span2, handlerData);
        _callOnRequestSpanEnd(span2, handlerData, spanOriginOrOptions);
      }
      delete spans[spanId];
    }
    return void 0;
  }
  const { spanOrigin = "auto.http.browser", propagateTraceparent = false } = typeof spanOriginOrOptions === "object" ? spanOriginOrOptions : { spanOrigin: spanOriginOrOptions };
  const client = getClient();
  const hasParent = !!getActiveSpan();
  const shouldEmitSpan = hasParent || !!client && hasSpanStreamingEnabled(client);
  const span = shouldCreateSpanResult && shouldEmitSpan ? startInactiveSpan(getSpanStartOptions(url, method, spanOrigin)) : new SentryNonRecordingSpan();
  if (shouldCreateSpanResult && !shouldEmitSpan) {
    client?.recordDroppedEvent("no_parent_span", "span");
  }
  handlerData.fetchData.__span = span.spanContext().spanId;
  spans[span.spanContext().spanId] = span;
  if (shouldAttachHeaders(handlerData.fetchData.url)) {
    const request = handlerData.args[0];
    const options = { ...handlerData.args[1] || {} };
    const headers = _INTERNAL_getTracingHeadersForFetchRequest(
      request,
      options,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      hasSpansEnabled() && shouldEmitSpan ? span : void 0,
      propagateTraceparent
    );
    if (headers) {
      handlerData.args[1] = options;
      options.headers = headers;
    }
  }
  if (client) {
    const fetchHint = {
      input: handlerData.args,
      response: handlerData.response,
      startTimestamp: handlerData.startTimestamp,
      endTimestamp: handlerData.endTimestamp
    };
    client.emit("beforeOutgoingRequestSpan", span, fetchHint);
  }
  return span;
}
__name(instrumentFetchRequest, "instrumentFetchRequest");
function _callOnRequestSpanEnd(span, handlerData, spanOriginOrOptions) {
  const onRequestSpanEnd = typeof spanOriginOrOptions === "object" && spanOriginOrOptions !== null ? spanOriginOrOptions.onRequestSpanEnd : void 0;
  onRequestSpanEnd?.(span, {
    headers: handlerData.response?.headers,
    error: handlerData.error
  });
}
__name(_callOnRequestSpanEnd, "_callOnRequestSpanEnd");
function _INTERNAL_getTracingHeadersForFetchRequest(request, fetchOptionsObj, span, propagateTraceparent) {
  const traceHeaders = getTraceData({ span, propagateTraceparent });
  const sentryTrace = traceHeaders["sentry-trace"];
  const baggage = traceHeaders.baggage;
  const traceparent = traceHeaders.traceparent;
  if (!sentryTrace) {
    return void 0;
  }
  const originalHeaders = fetchOptionsObj.headers || (isRequest(request) ? request.headers : void 0);
  if (!originalHeaders) {
    return { ...traceHeaders };
  } else if (isHeaders(originalHeaders)) {
    const newHeaders = new Headers(originalHeaders);
    if (!newHeaders.get("sentry-trace")) {
      newHeaders.set("sentry-trace", sentryTrace);
    }
    if (propagateTraceparent && traceparent && !newHeaders.get("traceparent")) {
      newHeaders.set("traceparent", traceparent);
    }
    if (baggage) {
      const prevBaggageHeader = newHeaders.get("baggage");
      if (!prevBaggageHeader) {
        newHeaders.set("baggage", baggage);
      } else if (!baggageHeaderHasSentryBaggageValues(prevBaggageHeader)) {
        newHeaders.set("baggage", `${prevBaggageHeader},${baggage}`);
      }
    }
    return newHeaders;
  } else if (isHeadersInitTupleArray(originalHeaders)) {
    const newHeaders = [...originalHeaders];
    if (!newHeaders.find((header) => header[0] === "sentry-trace")) {
      newHeaders.push(["sentry-trace", sentryTrace]);
    }
    if (propagateTraceparent && traceparent && !newHeaders.find((header) => header[0] === "traceparent")) {
      newHeaders.push(["traceparent", traceparent]);
    }
    const prevBaggageHeaderWithSentryValues = originalHeaders.find(
      (header) => header[0] === "baggage" && typeof header[1] === "string" && baggageHeaderHasSentryBaggageValues(header[1])
    );
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newHeaders.push(["baggage", baggage]);
    }
    return newHeaders;
  } else {
    const existingSentryTraceHeader = "sentry-trace" in originalHeaders ? originalHeaders["sentry-trace"] : void 0;
    const existingTraceparentHeader = "traceparent" in originalHeaders ? originalHeaders.traceparent : void 0;
    const existingBaggageHeader = "baggage" in originalHeaders ? originalHeaders.baggage : void 0;
    const newBaggageHeaders = existingBaggageHeader ? Array.isArray(existingBaggageHeader) ? [...existingBaggageHeader] : [existingBaggageHeader] : [];
    const prevBaggageHeaderWithSentryValues = existingBaggageHeader && (Array.isArray(existingBaggageHeader) ? existingBaggageHeader.find((headerItem) => baggageHeaderHasSentryBaggageValues(headerItem)) : baggageHeaderHasSentryBaggageValues(existingBaggageHeader));
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newBaggageHeaders.push(baggage);
    }
    const newHeaders = Object.assign({}, originalHeaders, {
      "sentry-trace": existingSentryTraceHeader ?? sentryTrace,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(",") : void 0
    });
    if (propagateTraceparent && traceparent && !existingTraceparentHeader) {
      newHeaders.traceparent = traceparent;
    }
    return newHeaders;
  }
}
__name(_INTERNAL_getTracingHeadersForFetchRequest, "_INTERNAL_getTracingHeadersForFetchRequest");
function endSpan(span, handlerData) {
  if (handlerData.response) {
    setHttpStatus(span, handlerData.response.status);
    const contentLength = handlerData.response?.headers?.get("content-length");
    if (contentLength) {
      const contentLengthNum = parseInt(contentLength);
      if (contentLengthNum > 0) {
        span.setAttribute("http.response_content_length", contentLengthNum);
      }
    }
  } else if (handlerData.error) {
    span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
  }
  span.end();
}
__name(endSpan, "endSpan");
function baggageHeaderHasSentryBaggageValues(baggageHeader) {
  if (typeof baggageHeader !== "string") {
    return false;
  }
  return baggageHeader.split(",").some((baggageEntry) => baggageEntry.trim().startsWith(SENTRY_BAGGAGE_KEY_PREFIX));
}
__name(baggageHeaderHasSentryBaggageValues, "baggageHeaderHasSentryBaggageValues");
function isHeaders(headers) {
  return typeof Headers !== "undefined" && isInstanceOf(headers, Headers);
}
__name(isHeaders, "isHeaders");
function isHeadersInitTupleArray(headers) {
  if (!Array.isArray(headers)) {
    return false;
  }
  return headers.every(
    (item) => Array.isArray(item) && item.length === 2 && typeof item[0] === "string"
  );
}
__name(isHeadersInitTupleArray, "isHeadersInitTupleArray");
function getSpanStartOptions(url, method, spanOrigin) {
  if (url.startsWith("data:")) {
    const sanitizedUrl2 = stripDataUrlContent(url);
    return {
      name: `${method} ${sanitizedUrl2}`,
      attributes: getFetchSpanAttributes(url, void 0, method, spanOrigin)
    };
  }
  const parsedUrl = parseStringToURLObject(url);
  const sanitizedUrl = parsedUrl ? getSanitizedUrlStringFromUrlObject(parsedUrl) : url;
  return {
    name: `${method} ${sanitizedUrl}`,
    attributes: getFetchSpanAttributes(url, parsedUrl, method, spanOrigin)
  };
}
__name(getSpanStartOptions, "getSpanStartOptions");
function getFetchSpanAttributes(url, parsedUrl, method, spanOrigin) {
  const attributes = {
    url: stripDataUrlContent(url),
    type: "fetch",
    "http.method": method,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: spanOrigin,
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
  };
  if (parsedUrl) {
    if (!isURLObjectRelative(parsedUrl)) {
      attributes["http.url"] = stripDataUrlContent(parsedUrl.href);
      attributes["server.address"] = parsedUrl.host;
    }
    if (parsedUrl.search) {
      attributes["http.query"] = parsedUrl.search;
    }
    if (parsedUrl.hash) {
      attributes["http.fragment"] = parsedUrl.hash;
    }
  }
  return attributes;
}
__name(getFetchSpanAttributes, "getFetchSpanAttributes");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/spanBuffer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/envelope.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createStreamedSpanEnvelope(serializedSpans, dsc, client) {
  const options = client.getOptions();
  const dsn = client.getDsn();
  const tunnel = options.tunnel;
  const sdk = getSdkMetadataForEnvelopeHeader(options._metadata);
  const headers = {
    sent_at: new Date(safeDateNow()).toISOString(),
    ...dscHasRequiredProps(dsc) && { trace: dsc },
    ...sdk && { sdk },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const inferSetting = client.getDataCollectionOptions().userInfo ? "auto" : "never";
  const spanContainer = [
    { type: "span", item_count: serializedSpans.length, content_type: "application/vnd.sentry.items.span.v2+json" },
    {
      version: 2,
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items: serializedSpans
    }
  ];
  return createEnvelope(headers, [spanContainer]);
}
__name(createStreamedSpanEnvelope, "createStreamedSpanEnvelope");
function dscHasRequiredProps(dsc) {
  return !!dsc.trace_id && !!dsc.public_key;
}
__name(dscHasRequiredProps, "dscHasRequiredProps");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/estimateSize.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function estimateSerializedSpanSizeInBytes(span) {
  let weight = 156;
  weight += span.name.length * 2;
  weight += estimateTypedAttributesSizeInBytes(span.attributes);
  if (span.links && span.links.length > 0) {
    const firstLink = span.links[0];
    const attributes = firstLink?.attributes;
    const linkWeight = 100 + (attributes ? estimateTypedAttributesSizeInBytes(attributes) : 0);
    weight += linkWeight * span.links.length;
  }
  return weight;
}
__name(estimateSerializedSpanSizeInBytes, "estimateSerializedSpanSizeInBytes");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/tracing/spans/spanBuffer.js
var MAX_SPANS_PER_ENVELOPE = 1e3;
var MAX_TRACE_WEIGHT_IN_BYTES = 5e6;
var SpanBuffer = class {
  constructor(client, options) {
    this._traceBuckets = /* @__PURE__ */ new Map();
    this._client = client;
    const { maxSpanLimit, flushInterval, maxTraceWeightInBytes } = options ?? {};
    this._maxSpanLimit = maxSpanLimit && maxSpanLimit > 0 && maxSpanLimit <= MAX_SPANS_PER_ENVELOPE ? maxSpanLimit : MAX_SPANS_PER_ENVELOPE;
    this._flushInterval = flushInterval && flushInterval > 0 ? flushInterval : 5e3;
    this._maxTraceWeight = maxTraceWeightInBytes && maxTraceWeightInBytes > 0 ? maxTraceWeightInBytes : MAX_TRACE_WEIGHT_IN_BYTES;
    this._client.on("flush", () => {
      this.drain();
    });
    this._client.on("close", () => {
      this._traceBuckets.forEach((bucket) => {
        clearTimeout(bucket.timeout);
      });
      this._traceBuckets.clear();
    });
  }
  /**
   * Add a span to the buffer.
   */
  add(spanJSON) {
    const traceId = spanJSON.trace_id;
    let bucket = this._traceBuckets.get(traceId);
    if (!bucket) {
      bucket = {
        spans: /* @__PURE__ */ new Set(),
        size: 0,
        timeout: safeUnref(
          setTimeout(() => {
            this.flush(traceId);
          }, this._flushInterval)
        )
      };
      this._traceBuckets.set(traceId, bucket);
    }
    bucket.spans.add(spanJSON);
    bucket.size += estimateSerializedSpanSizeInBytes(spanJSON);
    if (bucket.spans.size >= this._maxSpanLimit || bucket.size >= this._maxTraceWeight) {
      this.flush(traceId);
    }
  }
  /**
   * Drain and flush all buffered traces.
   */
  drain() {
    if (!this._traceBuckets.size) {
      return;
    }
    DEBUG_BUILD && debug3.log(`Flushing span tree map with ${this._traceBuckets.size} traces`);
    this._traceBuckets.forEach((_, traceId) => {
      this.flush(traceId);
    });
  }
  /**
   * Flush spans of a specific trace.
   * In contrast to {@link SpanBuffer.drain}, this method does not flush all traces, but only the one with the given traceId.
   */
  flush(traceId) {
    const bucket = this._traceBuckets.get(traceId);
    if (!bucket) {
      return;
    }
    if (!bucket.spans.size) {
      this._removeTrace(traceId);
      return;
    }
    const spans = Array.from(bucket.spans);
    const segmentSpan = spans[0]?._segmentSpan;
    if (!segmentSpan) {
      DEBUG_BUILD && debug3.warn("No segment span reference found on span JSON, cannot compute DSC");
      this._removeTrace(traceId);
      return;
    }
    const dsc = getDynamicSamplingContextFromSpan(segmentSpan);
    const cleanedSpans = spans.map((spanJSON) => {
      const { _segmentSpan, ...cleanSpanJSON } = spanJSON;
      return cleanSpanJSON;
    });
    const envelope = createStreamedSpanEnvelope(cleanedSpans, dsc, this._client);
    DEBUG_BUILD && debug3.log(`Sending span envelope for trace ${traceId} with ${cleanedSpans.length} spans`);
    this._client.sendEnvelope(envelope).then(null, (reason) => {
      DEBUG_BUILD && debug3.error("Error while sending streamed span envelope:", reason);
    });
    this._removeTrace(traceId);
  }
  _removeTrace(traceId) {
    const bucket = this._traceBuckets.get(traceId);
    if (bucket) {
      clearTimeout(bucket.timeout);
    }
    this._traceBuckets.delete(traceId);
  }
};
__name(SpanBuffer, "SpanBuffer");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/spanStreaming.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var spanStreamingIntegration = defineIntegration(() => {
  return {
    name: "SpanStreaming",
    setup(client) {
      const initialMessage = "SpanStreaming integration requires";
      const fallbackMsg = "Falling back to static trace lifecycle.";
      const clientOptions = client.getOptions();
      if (!hasSpanStreamingEnabled(client)) {
        clientOptions.traceLifecycle = "static";
        DEBUG_BUILD && debug3.warn(`${initialMessage} \`traceLifecycle\` to be set to "stream"! ${fallbackMsg}`);
        return;
      }
      const beforeSendSpan = clientOptions.beforeSendSpan;
      if (beforeSendSpan && !isStreamedBeforeSendSpanCallback(beforeSendSpan)) {
        clientOptions.traceLifecycle = "static";
        DEBUG_BUILD && debug3.warn(`${initialMessage} a beforeSendSpan callback using \`withStreamedSpan\`! ${fallbackMsg}`);
        return;
      }
      const buffer = new SpanBuffer(client);
      client.on("afterSpanEnd", (span) => {
        if (!spanIsSampled(span)) {
          return;
        }
        buffer.add(captureSpan(span, client));
      });
    }
  };
});

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/breadcrumb-log-level.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
  if (statusCode === void 0) {
    return void 0;
  } else if (statusCode >= 400 && statusCode < 500) {
    return "warning";
  } else if (statusCode >= 500) {
    return "error";
  } else {
    return void 0;
  }
}
__name(getBreadcrumbLogLevelFromHttpStatusCode, "getBreadcrumbLogLevelFromHttpStatusCode");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/instrument/fetch.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/supports.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var WINDOW = GLOBAL_OBJ;
function _isFetchSupported() {
  if (!("fetch" in WINDOW)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
__name(_isFetchSupported, "_isFetchSupported");
function isNativeFunction(func) {
  return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
__name(isNativeFunction, "isNativeFunction");
function supportsNativeFetch() {
  if (typeof EdgeRuntime === "string") {
    return true;
  }
  if (!_isFetchSupported()) {
    return false;
  }
  if (isNativeFunction(WINDOW.fetch)) {
    return true;
  }
  let result = false;
  const doc = WINDOW.document;
  if (doc && typeof doc.createElement === "function") {
    try {
      const sandbox = doc.createElement("iframe");
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow?.fetch) {
        result = isNativeFunction(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      DEBUG_BUILD && debug3.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
  }
  return result;
}
__name(supportsNativeFetch, "supportsNativeFetch");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/instrument/fetch.js
function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
  const type = "fetch";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(void 0, skipNativeFetchCheck));
  return removeHandler;
}
__name(addFetchInstrumentationHandler, "addFetchInstrumentationHandler");
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
  if (skipNativeFetchCheck && !supportsNativeFetch()) {
    return;
  }
  fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
    return function(...args) {
      const virtualError = new Error();
      const { method, url } = parseFetchArgs(args);
      const handlerData = {
        args,
        fetchData: {
          method,
          url
        },
        startTimestamp: timestampInSeconds() * 1e3,
        // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
        virtualError,
        headers: getHeadersFromFetchArgs(args)
      };
      if (!onFetchResolved) {
        triggerHandlers("fetch", {
          ...handlerData
        });
      }
      return originalFetch.apply(GLOBAL_OBJ, args).then(
        async (response) => {
          if (onFetchResolved) {
            onFetchResolved(response);
          } else {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: timestampInSeconds() * 1e3,
              response
            });
          }
          return response;
        },
        (error4) => {
          triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: timestampInSeconds() * 1e3,
            error: error4
          });
          if (isError(error4) && error4.stack === void 0) {
            error4.stack = virtualError.stack;
            addNonEnumerableProperty(error4, "framesToPop", 1);
          }
          const client = getClient();
          const enhanceOption = client?.getOptions().enhanceFetchErrorMessages ?? "always";
          const shouldEnhance = enhanceOption !== false;
          if (shouldEnhance && error4 instanceof TypeError && (error4.message === "Failed to fetch" || error4.message === "Load failed" || error4.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const url2 = new URL(handlerData.fetchData.url);
              const hostname = url2.host;
              if (enhanceOption === "always") {
                error4.message = `${error4.message} (${hostname})`;
              } else {
                addNonEnumerableProperty(error4, "__sentry_fetch_url_host__", hostname);
              }
            } catch {
            }
          }
          throw error4;
        }
      );
    };
  });
}
__name(instrumentFetch, "instrumentFetch");
function hasProp(obj, prop) {
  return isObjectLike(obj) && !!obj[prop];
}
__name(hasProp, "hasProp");
function getUrlFromResource(resource) {
  if (typeof resource === "string") {
    return resource;
  }
  if (!resource) {
    return "";
  }
  if (hasProp(resource, "url")) {
    return resource.url;
  }
  if (resource.toString) {
    return resource.toString();
  }
  return "";
}
__name(getUrlFromResource, "getUrlFromResource");
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return { method: "GET", url: "" };
  }
  if (fetchArgs.length === 2) {
    const [resource, options] = fetchArgs;
    return {
      url: getUrlFromResource(resource),
      method: hasProp(options, "method") ? String(options.method).toUpperCase() : (
        // Request object as first argument
        isRequest(resource) && hasProp(resource, "method") ? String(resource.method).toUpperCase() : "GET"
      )
    };
  }
  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg),
    method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
  };
}
__name(parseFetchArgs, "parseFetchArgs");
function getHeadersFromFetchArgs(fetchArgs) {
  const [requestArgument, optionsArgument] = fetchArgs;
  try {
    if (typeof optionsArgument === "object" && optionsArgument !== null && "headers" in optionsArgument && optionsArgument.headers) {
      return new Headers(optionsArgument.headers);
    }
    if (isRequest(requestArgument)) {
      return new Headers(requestArgument.headers);
    }
  } catch {
  }
  return;
}
__name(getHeadersFromFetchArgs, "getHeadersFromFetchArgs");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/lru.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LRUMap = class {
  constructor(_maxSize) {
    this._maxSize = _maxSize;
    this._cache = /* @__PURE__ */ new Map();
  }
  /** Get the current size of the cache */
  get size() {
    return this._cache.size;
  }
  /** Get an entry or undefined if it was not in the cache. Re-inserts to update the recently used order */
  get(key) {
    const value = this._cache.get(key);
    if (value === void 0) {
      return void 0;
    }
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  }
  /** Insert an entry and evict an older entry if we've reached maxSize */
  set(key, value) {
    if (this._cache.size >= this._maxSize) {
      const nextKey = this._cache.keys().next().value;
      this._cache.delete(nextKey);
    }
    this._cache.set(key, value);
  }
  /** Remove an entry and return the entry if it was in the cache */
  remove(key) {
    const value = this._cache.get(key);
    if (value) {
      this._cache.delete(key);
    }
    return value;
  }
  /** Clear all entries */
  clear() {
    this._cache.clear();
  }
  /** Get all the keys */
  keys() {
    return Array.from(this._cache.keys());
  }
  /** Get all the values */
  values() {
    const values = [];
    this._cache.forEach((value) => values.push(value));
    return values;
  }
};
__name(LRUMap, "LRUMap");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/server-runtime-client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/transports/userAgent.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function addUserAgentToTransportHeaders(options) {
  const sdkMetadata = options._metadata?.sdk;
  const sdkUserAgent = sdkMetadata?.name && sdkMetadata?.version ? `${sdkMetadata?.name}/${sdkMetadata?.version}` : void 0;
  options.transportOptions = {
    ...options.transportOptions,
    headers: {
      ...sdkUserAgent && { "user-agent": sdkUserAgent },
      ...options.transportOptions?.headers
    }
  };
}
__name(addUserAgentToTransportHeaders, "addUserAgentToTransportHeaders");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/server-runtime-client.js
var ServerRuntimeClient = class extends Client {
  /**
   * Creates a new Edge SDK instance.
   * @param options Configuration options for this SDK.
   */
  constructor(options) {
    addUserAgentToTransportHeaders(options);
    if (options.traceLifecycle === "stream" && !options.integrations.some((i) => i.name === "SpanStreaming")) {
      options.integrations.push(spanStreamingIntegration());
    }
    super(options);
    this._disposeCallbacks = [];
    this._setUpMetricsProcessing();
  }
  /**
   * @inheritDoc
   */
  eventFromException(exception, hint) {
    const event = eventFromUnknownInput(this, this._options.stackParser, exception, hint);
    event.level = "error";
    return resolvedSyncPromise(event);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(message, level = "info", hint) {
    return resolvedSyncPromise(
      eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace)
    );
  }
  /**
   * @inheritDoc
   */
  captureException(exception, hint, scope) {
    setCurrentRequestSessionErroredOrCrashed(hint);
    return super.captureException(exception, hint, scope);
  }
  /**
   * @inheritDoc
   */
  captureEvent(event, hint, scope) {
    const isException = !event.type && event.exception?.values && event.exception.values.length > 0;
    if (isException) {
      setCurrentRequestSessionErroredOrCrashed(hint);
    }
    return super.captureEvent(event, hint, scope);
  }
  /**
   * Create a cron monitor check in and send it to Sentry.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   */
  captureCheckIn(checkIn, monitorConfig, scope) {
    const id = "checkInId" in checkIn && checkIn.checkInId ? checkIn.checkInId : uuid4();
    if (!this._isEnabled()) {
      DEBUG_BUILD && debug3.warn("SDK not enabled, will not capture check-in.");
      return id;
    }
    const options = this.getOptions();
    const { release: release2, environment, tunnel } = options;
    const serializedCheckIn = {
      check_in_id: id,
      monitor_slug: checkIn.monitorSlug,
      status: checkIn.status,
      release: release2,
      environment
    };
    if ("duration" in checkIn) {
      serializedCheckIn.duration = checkIn.duration;
    }
    if (monitorConfig) {
      serializedCheckIn.monitor_config = {
        schedule: monitorConfig.schedule,
        checkin_margin: monitorConfig.checkinMargin,
        max_runtime: monitorConfig.maxRuntime,
        timezone: monitorConfig.timezone,
        failure_issue_threshold: monitorConfig.failureIssueThreshold,
        recovery_threshold: monitorConfig.recoveryThreshold
      };
    }
    const [dynamicSamplingContext, traceContext] = _getTraceInfoFromScope(this, scope);
    if (traceContext) {
      serializedCheckIn.contexts = {
        trace: traceContext
      };
    }
    const envelope = createCheckInEnvelope(
      serializedCheckIn,
      dynamicSamplingContext,
      this.getSdkMetadata(),
      tunnel,
      this.getDsn()
    );
    DEBUG_BUILD && debug3.log("Sending checkin:", checkIn.monitorSlug, checkIn.status);
    this.sendEnvelope(envelope);
    return id;
  }
  /**
   * @inheritDoc
   */
  registerCleanup(callback) {
    this._disposeCallbacks.push(callback);
  }
  /**
   * Disposes of the client and releases all resources.
   *
   * This method clears all internal state to allow the client to be garbage collected.
   * It clears hooks, event processors, integrations, transport, and other internal references.
   *
   * Call this method after flushing to allow the client to be garbage collected.
   * After calling dispose(), the client should not be used anymore.
   *
   * Subclasses should override this method to clean up their own resources and call `super.dispose()`.
   */
  dispose() {
    DEBUG_BUILD && debug3.log("Disposing client...");
    for (const callback of this._disposeCallbacks) {
      try {
        callback();
      } catch {
      }
    }
    this._disposeCallbacks.length = 0;
    for (const hookName of Object.keys(this._hooks)) {
      this._hooks[hookName]?.clear();
    }
    this._hooks = {};
    this._eventProcessors.length = 0;
    this._integrations = {};
    this._outcomes = {};
    this._transport = void 0;
    this._promiseBuffer = makePromiseBuffer(DEFAULT_TRANSPORT_BUFFER_SIZE);
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    if (this._options.platform) {
      event.platform = event.platform || this._options.platform;
    }
    if (this._options.runtime) {
      event.contexts = {
        ...event.contexts,
        runtime: event.contexts?.runtime || this._options.runtime
      };
    }
    if (this._options.serverName) {
      event.server_name = event.server_name || this._options.serverName;
    }
    return super._prepareEvent(event, hint, currentScope, isolationScope);
  }
  /**
   * Process a server-side metric before it is captured.
   */
  _setUpMetricsProcessing() {
    this.on("processMetric", (metric) => {
      if (this._options.serverName) {
        metric.attributes = {
          "server.address": this._options.serverName,
          ...metric.attributes
        };
      }
    });
  }
};
__name(ServerRuntimeClient, "ServerRuntimeClient");
function setCurrentRequestSessionErroredOrCrashed(eventHint) {
  const requestSession = getIsolationScope().getScopeData().sdkProcessingMetadata.requestSession;
  if (requestSession) {
    const isHandledException = eventHint?.mechanism?.handled ?? true;
    if (isHandledException && requestSession.status !== "crashed") {
      requestSession.status = "errored";
    } else if (!isHandledException) {
      requestSession.status = "crashed";
    }
  }
}
__name(setCurrentRequestSessionErroredOrCrashed, "setCurrentRequestSessionErroredOrCrashed");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/node-stack-trace.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function filenameIsInApp(filename, isNative = false) {
  const isInternal = isNative || filename && // It's not internal if it's an absolute linux path
  !filename.startsWith("/") && // It's not internal if it's an absolute windows path
  !filename.match(/^[A-Z]:/) && // It's not internal if the path is starting with a dot
  !filename.startsWith(".") && // It's not internal if the frame has a protocol. In node, this is usually the case if the file got pre-processed with a bundler like webpack
  !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  return !isInternal && filename !== void 0 && !filename.includes("node_modules/");
}
__name(filenameIsInApp, "filenameIsInApp");
function node(getModule2) {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const DATA_URI_MATCH = /at (?:async )?(.+?) \(data:(.*?),/;
  return (line) => {
    const dataUriMatch = line.match(DATA_URI_MATCH);
    if (dataUriMatch) {
      return {
        filename: `<data:${dataUriMatch[2]}>`,
        function: dataUriMatch[1]
      };
    }
    const lineMatch = line.match(FULL_MATCH);
    if (lineMatch) {
      let object;
      let method;
      let functionName;
      let typeName;
      let methodName;
      if (lineMatch[1]) {
        functionName = lineMatch[1];
        let methodStart = functionName.lastIndexOf(".");
        if (functionName[methodStart - 1] === ".") {
          methodStart--;
        }
        if (methodStart > 0) {
          object = functionName.slice(0, methodStart);
          method = functionName.slice(methodStart + 1);
          const objectEnd = object.indexOf(".Module");
          if (objectEnd > 0) {
            functionName = functionName.slice(objectEnd + 1);
            object = object.slice(0, objectEnd);
          }
        }
        typeName = void 0;
      }
      if (method) {
        typeName = object;
        methodName = method;
      }
      if (method === "<anonymous>") {
        methodName = void 0;
        functionName = void 0;
      }
      if (functionName === void 0) {
        methodName = methodName || UNKNOWN_FUNCTION;
        functionName = typeName ? `${typeName}.${methodName}` : methodName;
      }
      let filename = normalizeStackTracePath(lineMatch[2]);
      const isNative = lineMatch[5] === "native";
      if (!filename && lineMatch[5] && !isNative) {
        filename = lineMatch[5];
      }
      const maybeDecodedFilename = filename ? _safeDecodeURI(filename) : void 0;
      return {
        filename: maybeDecodedFilename ?? filename,
        module: maybeDecodedFilename && getModule2?.(maybeDecodedFilename),
        function: functionName,
        lineno: _parseIntOrUndefined(lineMatch[3]),
        colno: _parseIntOrUndefined(lineMatch[4]),
        in_app: filenameIsInApp(filename || "", isNative)
      };
    }
    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line
      };
    }
    return void 0;
  };
}
__name(node, "node");
function nodeStackLineParser(getModule2) {
  return [90, node(getModule2)];
}
__name(nodeStackLineParser, "nodeStackLineParser");
function _parseIntOrUndefined(input) {
  return parseInt(input || "", 10) || void 0;
}
__name(_parseIntOrUndefined, "_parseIntOrUndefined");
function _safeDecodeURI(filename) {
  try {
    return decodeURI(filename);
  } catch {
    return void 0;
  }
}
__name(_safeDecodeURI, "_safeDecodeURI");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/integrations/postgresjs.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var integerLiteralRE;
function _sanitizeSqlQuery(sqlQuery) {
  if (!sqlQuery) {
    return "Unknown SQL Query";
  }
  if (!integerLiteralRE) {
    integerLiteralRE = new RegExp("(?<!\\$)-?\\b\\d+\\b", "g");
  }
  return sqlQuery.replace(/--.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/;\s*$/, "").replace(/\s+/g, " ").trim().replace(/\bX'[0-9A-Fa-f]*'/gi, "?").replace(/\bB'[01]*'/gi, "?").replace(/'(?:[^']|'')*'/g, "?").replace(/\b0x[0-9A-Fa-f]+/gi, "?").replace(/\b(?:TRUE|FALSE)\b/gi, "?").replace(/-?\b\d+\.?\d*[eE][+-]?\d+\b/g, "?").replace(/-?\b\d+\.\d+\b/g, "?").replace(/-?\.\d+\b/g, "?").replace(integerLiteralRE, "?").replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)").replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)");
}
__name(_sanitizeSqlQuery, "_sanitizeSqlQuery");

// ../../node_modules/.pnpm/@sentry+core@10.65.0/node_modules/@sentry/core/build/esm/utils/sql.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MAX_SUMMARY_LENGTH = 255;
var TABLE_NAME_CHARS = /[^\s(,;)]+/;
var TABLE_NAME = TABLE_NAME_CHARS.source;
var DDL_RE = new RegExp(
  `^\\s*(?<operation>(?:CREATE|DROP)\\s+(?:TABLE|INDEX)|ALTER\\s+TABLE)(?:\\s+IF\\s+(?:NOT\\s+)?EXISTS)?\\s+(?<table>${TABLE_NAME})`,
  "i"
);
var INSERT_RE = new RegExp(`^\\s*(?<operation>INSERT)\\s+INTO\\s+(?<table>${TABLE_NAME})`, "i");
var UPDATE_RE = new RegExp(`^\\s*(?<operation>UPDATE)\\s+(?<table>${TABLE_NAME})`, "i");
var DELETE_RE = new RegExp(`^\\s*(?<operation>DELETE)\\s+FROM\\s+(?<table>${TABLE_NAME})`, "i");
var SELECT_RE = /^\s*\(?\s*(?<operation>SELECT)\b/i;
var PRAGMA_RE = /^\s*(?<operation>PRAGMA)\s+(?<command>\S+)/i;
var TOKEN_RE = /\b(?:FROM|JOIN)\s+|\(\s*(SELECT)\b|\b(?:UNION|INTERSECT|EXCEPT|MINUS)\s+(?:ALL\s+)?(SELECT)\b/gi;
var QUOTED_OR_PLAIN_TABLE_RE = /^(?:"[^"]*"|'[^']*'|[^\s(,;)]+)/;
var COMMA_TABLE_RE = /^\s*,\s*((?:"[^"]*"|'[^']*'|[^\s(,;)]+))/;
var SUBQUERY_SELECT_RE = /^\(\s*(SELECT)\b/i;
function getSqlQuerySummary(query) {
  if (!query) {
    return void 0;
  }
  const pragmaMatch = PRAGMA_RE.exec(query);
  if (pragmaMatch?.groups?.["operation"] && pragmaMatch.groups["command"]) {
    const operation = pragmaMatch.groups["operation"];
    const command = pragmaMatch.groups["command"];
    const parenIdx = command.indexOf("(");
    return truncate2(`${operation} ${parenIdx >= 0 ? command.substring(0, parenIdx) : command}`);
  }
  const ddlMatch = DDL_RE.exec(query);
  if (ddlMatch?.groups?.["operation"] && ddlMatch.groups["table"]) {
    return truncate2(`${ddlMatch.groups["operation"]} ${ddlMatch.groups["table"]}`);
  }
  const insertMatch = INSERT_RE.exec(query);
  if (insertMatch?.groups?.["operation"] && insertMatch.groups["table"]) {
    const parts = [insertMatch.groups["operation"], insertMatch.groups["table"]];
    const rest = query.slice(insertMatch[0].length);
    const subSelect = /\b(SELECT)\b/i.exec(rest);
    if (subSelect?.[1]) {
      parts.push(subSelect[1]);
      const selectTables = extractTableNames(rest.slice(subSelect.index));
      parts.push(...selectTables);
    }
    return truncate2(parts.join(" "));
  }
  const updateMatch = UPDATE_RE.exec(query);
  if (updateMatch?.groups?.["operation"] && updateMatch.groups["table"]) {
    return truncate2(`${updateMatch.groups["operation"]} ${updateMatch.groups["table"]}`);
  }
  const deleteMatch = DELETE_RE.exec(query);
  if (deleteMatch?.groups?.["operation"] && deleteMatch.groups["table"]) {
    return truncate2(`${deleteMatch.groups["operation"]} ${deleteMatch.groups["table"]}`);
  }
  const selectMatch = SELECT_RE.exec(query);
  if (selectMatch?.groups?.["operation"]) {
    const tables = extractTableNames(query.slice(selectMatch[0].length));
    if (tables.length > 0) {
      return truncate2(`${selectMatch.groups["operation"]} ${tables.join(" ")}`);
    }
    return selectMatch.groups["operation"];
  }
  return truncate2(query.trim().split(/\s+/)[0] ?? query);
}
__name(getSqlQuerySummary, "getSqlQuerySummary");
function extractTableNames(sql) {
  const tables = [];
  TOKEN_RE.lastIndex = 0;
  let match;
  while ((match = TOKEN_RE.exec(sql)) !== null) {
    if (match[1] || match[2]) {
      tables.push(match[1] || match[2]);
      continue;
    }
    const rest = sql.slice(match.index + match[0].length);
    const subqueryMatch = SUBQUERY_SELECT_RE.exec(rest);
    if (subqueryMatch?.[1]) {
      tables.push(subqueryMatch[1]);
      TOKEN_RE.lastIndex = match.index + match[0].length + subqueryMatch[0].length;
      continue;
    }
    const tableMatch = QUOTED_OR_PLAIN_TABLE_RE.exec(rest);
    if (!tableMatch)
      continue;
    tables.push(tableMatch[0]);
    let afterTable = rest.slice(tableMatch[0].length);
    let commaMatch;
    while ((commaMatch = COMMA_TABLE_RE.exec(afterTable)) !== null) {
      if (!commaMatch[1])
        break;
      tables.push(commaMatch[1]);
      afterTable = afterTable.slice(commaMatch[0].length);
    }
  }
  return tables;
}
__name(extractTableNames, "extractTableNames");
function truncate2(summary) {
  if (summary.length <= MAX_SUMMARY_LENGTH) {
    return summary;
  }
  const truncated = summary.substring(0, MAX_SUMMARY_LENGTH);
  const lastSpace = truncated.lastIndexOf(" ");
  return lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated;
}
__name(truncate2, "truncate");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/withSentry.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/async.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@cloudflare+unenv-preset@2._2c4214a3e65f1ca7ba28eec8e1e8cbc6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/async_hooks.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var workerdAsyncHooks = process.getBuiltinModule("node:async_hooks");
var { AsyncLocalStorage, AsyncResource } = workerdAsyncHooks;

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/async.js
function setAsyncLocalStorageAsyncContextStrategy() {
  const asyncStorage = new AsyncLocalStorage();
  function getScopes() {
    const scopes = asyncStorage.getStore();
    if (scopes) {
      return scopes;
    }
    return {
      scope: getDefaultCurrentScope(),
      isolationScope: getDefaultIsolationScope()
    };
  }
  __name(getScopes, "getScopes");
  function withScope3(callback) {
    const scope = getScopes().scope.clone();
    const isolationScope = getScopes().isolationScope;
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(scope);
    });
  }
  __name(withScope3, "withScope");
  function withSetScope2(scope, callback) {
    const isolationScope = getScopes().isolationScope.clone();
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(scope);
    });
  }
  __name(withSetScope2, "withSetScope");
  function withIsolationScope3(callback) {
    const scope = getScopes().scope;
    const isolationScope = getScopes().isolationScope.clone();
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(isolationScope);
    });
  }
  __name(withIsolationScope3, "withIsolationScope");
  function withSetIsolationScope(isolationScope, callback) {
    const scope = getScopes().scope;
    return asyncStorage.run({ scope, isolationScope }, () => {
      return callback(isolationScope);
    });
  }
  __name(withSetIsolationScope, "withSetIsolationScope");
  function suppressTracing2(callback) {
    return withScope3((scope) => {
      scope.setSDKProcessingMetadata({ __SENTRY_SUPPRESS_TRACING__: true });
      return callback();
    });
  }
  __name(suppressTracing2, "suppressTracing");
  setAsyncContextStrategy({
    suppressTracing: suppressTracing2,
    withScope: withScope3,
    withSetScope: withSetScope2,
    withIsolationScope: withIsolationScope3,
    withSetIsolationScope,
    getCurrentScope: () => getScopes().scope,
    getIsolationScope: () => getScopes().isolationScope,
    getTracingChannelBinding: () => _INTERNAL_createTracingChannelBinding(asyncStorage, getScopes)
  });
}
__name(setAsyncLocalStorageAsyncContextStrategy, "setAsyncLocalStorageAsyncContextStrategy");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrument.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GLOBAL_KEY = "__SENTRY_INSTRUMENTED_MAP__";
function getInstrumentedMap() {
  const globalObj = globalThis;
  if (!globalObj[GLOBAL_KEY]) {
    globalObj[GLOBAL_KEY] = /* @__PURE__ */ new WeakMap();
  }
  return globalObj[GLOBAL_KEY];
}
__name(getInstrumentedMap, "getInstrumentedMap");
function isWeakMapKey(value) {
  return isObjectLike(value) || typeof value === "function";
}
__name(isWeakMapKey, "isWeakMapKey");
function markAsInstrumented(original, instrumented2) {
  try {
    if (isWeakMapKey(original)) {
      getInstrumentedMap().set(original, instrumented2 ?? original);
    }
    if (isWeakMapKey(instrumented2) && instrumented2 !== original) {
      getInstrumentedMap().set(instrumented2, instrumented2);
    }
  } catch {
  }
}
__name(markAsInstrumented, "markAsInstrumented");
function getInstrumented(obj) {
  try {
    if (isWeakMapKey(obj)) {
      return getInstrumentedMap().get(obj);
    }
    return void 0;
  } catch {
    return void 0;
  }
}
__name(getInstrumented, "getInstrumented");
function ensureInstrumented(original, instrumentFn, noMark) {
  const existing = getInstrumented(original);
  if (existing) {
    return existing;
  }
  const instrumented2 = instrumentFn(original);
  if (!noMark) {
    markAsInstrumented(original, instrumented2);
  }
  return instrumented2;
}
__name(ensureInstrumented, "ensureInstrumented");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentEmail.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/flush.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/debug-build.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEBUG_BUILD2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/flush.js
var flushLockRegistries = /* @__PURE__ */ new WeakMap();
function getOriginalWaitUntil(context2) {
  const currentWaitUntil = context2.waitUntil;
  const original = flushLockRegistries.get(currentWaitUntil)?.originalWaitUntil;
  return original ?? currentWaitUntil;
}
__name(getOriginalWaitUntil, "getOriginalWaitUntil");
function makeFlushLock(context2) {
  const registry = getOrCreateFlushLockRegistry(context2);
  let resolveAllDone = /* @__PURE__ */ __name(() => void 0, "resolveAllDone");
  const allDone = new Promise((res) => {
    resolveAllDone = res;
  });
  let pending = 0;
  const lock = {
    ready: allDone,
    acquire: () => {
      pending++;
    },
    release: () => {
      if (--pending === 0) {
        registry.locks.delete(lock);
        resolveAllDone();
      }
    },
    finalize: () => {
      if (pending === 0) {
        registry.locks.delete(lock);
        resolveAllDone();
      }
      return allDone;
    }
  };
  registry.locks.add(lock);
  return Object.freeze(lock);
}
__name(makeFlushLock, "makeFlushLock");
function getOrCreateFlushLockRegistry(context2) {
  const waitUntil = context2.waitUntil;
  const existingRegistry = flushLockRegistries.get(waitUntil);
  if (existingRegistry) {
    return existingRegistry;
  }
  const originalWaitUntil = context2.waitUntil.bind(context2);
  const registry = { locks: /* @__PURE__ */ new Set(), originalWaitUntil };
  const instrumentedWaitUntil = /* @__PURE__ */ __name((promise) => {
    const locks = [...registry.locks];
    for (const lock of locks) {
      lock.acquire();
    }
    return originalWaitUntil(
      promise.finally(() => {
        for (const lock of locks) {
          lock.release();
        }
      })
    );
  }, "instrumentedWaitUntil");
  flushLockRegistries.set(instrumentedWaitUntil, registry);
  context2.waitUntil = instrumentedWaitUntil;
  return registry;
}
__name(getOrCreateFlushLockRegistry, "getOrCreateFlushLockRegistry");
async function flushAndDispose(client, timeout = 2e3) {
  try {
    if (!client) {
      await flush(timeout);
      return;
    }
    await client.flush(timeout);
  } catch (e) {
    DEBUG_BUILD2 && debug3.warn("Failed to flush client", e);
  } finally {
    try {
      client?.dispose();
    } catch (e) {
      DEBUG_BUILD2 && debug3.warn("Failed to dispose client", e);
    }
  }
}
__name(flushAndDispose, "flushAndDispose");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/options.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isVersionMetadata(value) {
  return isObjectLike(value) && "id" in value && typeof value.id === "string";
}
__name(isVersionMetadata, "isVersionMetadata");
function getEnvVar(env2, varName) {
  return isObjectLike(env2) && varName in env2 && typeof env2[varName] === "string" ? env2[varName] : void 0;
}
__name(getEnvVar, "getEnvVar");
function getFinalOptions(userOptions = {}, env2) {
  if (typeof env2 !== "object" || env2 === null) {
    return userOptions;
  }
  const release2 = "SENTRY_RELEASE" in env2 && typeof env2.SENTRY_RELEASE === "string" ? env2.SENTRY_RELEASE : "CF_VERSION_METADATA" in env2 && isVersionMetadata(env2.CF_VERSION_METADATA) ? env2.CF_VERSION_METADATA.id : void 0;
  const tracesSampleRate = userOptions.tracesSampleRate ?? parseFloat(getEnvVar(env2, "SENTRY_TRACES_SAMPLE_RATE") ?? "");
  return {
    release: release2,
    ...userOptions,
    dsn: userOptions.dsn ?? getEnvVar(env2, "SENTRY_DSN"),
    environment: userOptions.environment ?? getEnvVar(env2, "SENTRY_ENVIRONMENT"),
    tracesSampleRate: isFinite(tracesSampleRate) ? tracesSampleRate : void 0,
    debug: userOptions.debug ?? envToBool(getEnvVar(env2, "SENTRY_DEBUG")),
    tunnel: userOptions.tunnel ?? getEnvVar(env2, "SENTRY_TUNNEL")
  };
}
__name(getFinalOptions, "getFinalOptions");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/scope-utils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function addCloudResourceContext(scope) {
  scope.setContext("cloud_resource", {
    "cloud.provider": "cloudflare"
  });
}
__name(addCloudResourceContext, "addCloudResourceContext");
function addCultureContext(scope, cf) {
  scope.setContext("culture", {
    timezone: cf.timezone
  });
}
__name(addCultureContext, "addCultureContext");
function addRequest(scope, request) {
  scope.setSDKProcessingMetadata({ normalizedRequest: winterCGRequestToRequestData(request) });
}
__name(addRequest, "addRequest");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/sdk.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CloudflareClient = class extends ServerRuntimeClient {
  /**
   * Creates a new Cloudflare SDK instance.
   * @param options Configuration options for this SDK.
   */
  constructor(options) {
    applySdkMetadata(options, "cloudflare");
    options._metadata = options._metadata || {};
    const { flushLock, ...serverOptions } = options;
    const clientOptions = {
      ...serverOptions,
      platform: "javascript",
      // TODO: Grab version information
      runtime: { name: "cloudflare" },
      // TODO: Add server name
      _flushInterval: 0
    };
    super(clientOptions);
    this._pendingSpans = /* @__PURE__ */ new Set();
    this._spanCompletionPromise = null;
    this._resolveSpanCompletion = null;
    this._unsubscribeSpanStart = null;
    this._unsubscribeSpanEnd = null;
    this._flushLock = flushLock;
    this._unsubscribeSpanStart = this.on("spanStart", (span) => {
      const spanId = span.spanContext().spanId;
      DEBUG_BUILD2 && debug3.log("[CloudflareClient] Span started:", spanId);
      if (!spanIsSampled(span)) {
        return;
      }
      this._pendingSpans.add(spanId);
      if (!this._spanCompletionPromise) {
        this._spanCompletionPromise = new Promise((resolve2) => {
          this._resolveSpanCompletion = resolve2;
        });
      }
    });
    this._unsubscribeSpanEnd = this.on("spanEnd", (span) => {
      const spanId = span.spanContext().spanId;
      DEBUG_BUILD2 && debug3.log("[CloudflareClient] Span ended:", spanId);
      this._pendingSpans.delete(spanId);
      if (this._pendingSpans.size === 0 && this._resolveSpanCompletion) {
        DEBUG_BUILD2 && debug3.log("[CloudflareClient] All spans completed, resolving promise");
        this._resolveSpanCompletion();
        this._resetSpanCompletionPromise();
      }
    });
  }
  /**
   * Flushes pending operations and ensures all data is processed.
   * If a timeout is provided, the operation will be completed within the specified time limit.
   *
   * It will wait for all pending spans to complete before flushing.
   *
   * @param {number} [timeout] - Optional timeout in milliseconds to force the completion of the flush operation.
   * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether the flush operation was successful.
   */
  async flush(timeout) {
    if (this._flushLock) {
      await this._flushLock.finalize();
    }
    if (this._pendingSpans.size > 0 && this._spanCompletionPromise) {
      DEBUG_BUILD2 && debug3.log("[CloudflareClient] Waiting for", this._pendingSpans.size, "pending spans to complete...");
      const timeoutMs = timeout ?? 5e3;
      const spanCompletionRace = Promise.race([
        this._spanCompletionPromise,
        new Promise(
          (resolve2) => setTimeout(() => {
            DEBUG_BUILD2 && debug3.log("[CloudflareClient] Span completion timeout after", timeoutMs, "ms, flushing anyway");
            resolve2(void 0);
          }, timeoutMs)
        )
      ]);
      await spanCompletionRace;
    }
    return super.flush(timeout);
  }
  /**
   * Disposes of the client and releases all resources.
   *
   * This method clears all Cloudflare-specific state in addition to the base client cleanup.
   * It unsubscribes from span lifecycle events and clears pending span tracking.
   *
   * Call this method after flushing to allow the client to be garbage collected.
   * After calling dispose(), the client should not be used anymore.
   */
  dispose() {
    DEBUG_BUILD2 && debug3.log("[CloudflareClient] Disposing client...");
    super.dispose();
    if (this._unsubscribeSpanStart) {
      this._unsubscribeSpanStart();
      this._unsubscribeSpanStart = null;
    }
    if (this._unsubscribeSpanEnd) {
      this._unsubscribeSpanEnd();
      this._unsubscribeSpanEnd = null;
    }
    this._resetSpanCompletionPromise();
    this._flushLock = void 0;
  }
  /**
   * Resets the span completion promise and resolve function.
   */
  _resetSpanCompletionPromise() {
    this._pendingSpans.clear();
    this._spanCompletionPromise = null;
    this._resolveSpanCompletion = null;
  }
};
__name(CloudflareClient, "CloudflareClient");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/integrations/httpServer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var INTEGRATION_NAME8 = "HttpServer";
var _httpServerIntegration = /* @__PURE__ */ __name((options = {}) => {
  return {
    name: INTEGRATION_NAME8,
    maxRequestBodySize: options.maxRequestBodySize ?? "medium",
    ignoreRequestBody: options.ignoreRequestBody
  };
}, "_httpServerIntegration");
var httpServerIntegration = defineIntegration(_httpServerIntegration);
async function captureIncomingRequestBody(client, request) {
  const integration = client.getIntegrationByName(INTEGRATION_NAME8);
  if (!integration) {
    return;
  }
  const maxRequestBodySize = integration.maxRequestBodySize;
  if (maxRequestBodySize === "none") {
    return;
  }
  if (request.method === "GET" || request.method === "HEAD" || request.method === "OPTIONS") {
    return;
  }
  if (integration.ignoreRequestBody?.(request.url, request)) {
    return;
  }
  const isolationScope = getIsolationScope();
  await captureBodyFromWinterCGRequest(request, isolationScope, maxRequestBodySize);
}
__name(captureIncomingRequestBody, "captureIncomingRequestBody");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/integrations/fetch.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var INTEGRATION_NAME9 = "Fetch";
var HAS_CLIENT_MAP = /* @__PURE__ */ new WeakMap();
var _fetchIntegration = /* @__PURE__ */ __name((options = {}) => {
  const breadcrumbs = options.breadcrumbs === void 0 ? true : options.breadcrumbs;
  const shouldCreateSpanForRequest = options.shouldCreateSpanForRequest;
  const _createSpanUrlMap = new LRUMap(100);
  const _headersUrlMap = new LRUMap(100);
  const spans = {};
  function _shouldAttachTraceData(url) {
    const client = getClient();
    if (!client) {
      return false;
    }
    const clientOptions = client.getOptions();
    if (clientOptions.tracePropagationTargets === void 0) {
      return true;
    }
    const cachedDecision = _headersUrlMap.get(url);
    if (cachedDecision !== void 0) {
      return cachedDecision;
    }
    const decision = stringMatchesSomePattern(url, clientOptions.tracePropagationTargets);
    _headersUrlMap.set(url, decision);
    return decision;
  }
  __name(_shouldAttachTraceData, "_shouldAttachTraceData");
  function _shouldCreateSpan(url) {
    if (shouldCreateSpanForRequest === void 0) {
      return true;
    }
    const cachedDecision = _createSpanUrlMap.get(url);
    if (cachedDecision !== void 0) {
      return cachedDecision;
    }
    const decision = shouldCreateSpanForRequest(url);
    _createSpanUrlMap.set(url, decision);
    return decision;
  }
  __name(_shouldCreateSpan, "_shouldCreateSpan");
  return {
    name: INTEGRATION_NAME9,
    setupOnce() {
      addFetchInstrumentationHandler((handlerData) => {
        const client = getClient();
        const { propagateTraceparent } = client?.getOptions() || {};
        if (!client || !HAS_CLIENT_MAP.get(client)) {
          return;
        }
        if (isSentryRequestUrl(handlerData.fetchData.url, client)) {
          return;
        }
        instrumentFetchRequest(handlerData, _shouldCreateSpan, _shouldAttachTraceData, spans, {
          spanOrigin: "auto.http.fetch",
          propagateTraceparent
        });
        if (breadcrumbs) {
          createBreadcrumb(handlerData);
        }
      }, true);
    },
    setup(client) {
      HAS_CLIENT_MAP.set(client, true);
    }
  };
}, "_fetchIntegration");
var fetchIntegration = defineIntegration(_fetchIntegration);
function createBreadcrumb(handlerData) {
  const { startTimestamp, endTimestamp } = handlerData;
  if (!endTimestamp) {
    return;
  }
  const breadcrumbData = {
    method: handlerData.fetchData.method,
    url: handlerData.fetchData.url
  };
  if (handlerData.error) {
    const hint = {
      data: handlerData.error,
      input: handlerData.args,
      startTimestamp,
      endTimestamp
    };
    addBreadcrumb(
      {
        category: "fetch",
        data: breadcrumbData,
        level: "error",
        type: "http"
      },
      hint
    );
  } else {
    const response = handlerData.response;
    breadcrumbData.request_body_size = handlerData.fetchData.request_body_size;
    breadcrumbData.response_body_size = handlerData.fetchData.response_body_size;
    breadcrumbData.status_code = response?.status;
    const hint = {
      input: handlerData.args,
      response,
      startTimestamp,
      endTimestamp
    };
    const level = getBreadcrumbLogLevelFromHttpStatusCode(breadcrumbData.status_code);
    addBreadcrumb(
      {
        category: "fetch",
        data: breadcrumbData,
        type: "http",
        level
      },
      hint
    );
  }
}
__name(createBreadcrumb, "createBreadcrumb");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/integrations/hono.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var INTEGRATION_NAME10 = "Hono";
function getHonoIntegration() {
  return getClient()?.getIntegrationByName(INTEGRATION_NAME10);
}
__name(getHonoIntegration, "getHonoIntegration");
function isHonoError(err) {
  if (err instanceof Error) {
    return true;
  }
  return isObjectLike(err) && "status" in err;
}
__name(isHonoError, "isHonoError");
var routePath = /* @__PURE__ */ __name((c) => c.req?.path ?? "", "routePath");
var _honoIntegration = /* @__PURE__ */ __name((options = {}) => {
  return {
    name: INTEGRATION_NAME10,
    // Hono error handler: https://github.com/honojs/hono/blob/d3abeb1f801aaa1b334285c73da5f5f022dbcadb/src/hono-base.ts#L35
    handleHonoException(err, context2) {
      const shouldHandleError = options.shouldHandleError || defaultShouldHandleError;
      if (!isHonoError(err)) {
        DEBUG_BUILD2 && debug3.log("[Hono] Won't capture exception in `onError` because it's not a Hono error.", err);
        return;
      }
      if (shouldHandleError(err)) {
        if (context2) {
          const activeSpan = getActiveSpan();
          const spanName = `${context2.req.method} ${routePath(context2)}`;
          if (activeSpan) {
            activeSpan.updateName(spanName);
            updateSpanName(getRootSpan(activeSpan), spanName);
          }
          getIsolationScope().setTransactionName(spanName);
        }
        captureException(err, { mechanism: { handled: false, type: "auto.faas.hono.error_handler" } });
      } else {
        DEBUG_BUILD2 && debug3.log("[Hono] Not capturing exception because `shouldHandleError` returned `false`.", err);
      }
    }
  };
}, "_honoIntegration");
var honoIntegration = defineIntegration(_honoIntegration);
function defaultShouldHandleError(error4) {
  const statusCode = error4?.status;
  return statusCode ? statusCode >= 500 || statusCode <= 299 : true;
}
__name(defaultShouldHandleError, "defaultShouldHandleError");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/opentelemetry/tracer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_api2 = __toESM(require_src(), 1);
function setupOpenTelemetryTracer() {
  import_api2.trace.setGlobalTracerProvider(new SentryCloudflareTraceProvider());
}
__name(setupOpenTelemetryTracer, "setupOpenTelemetryTracer");
var SentryCloudflareTraceProvider = class {
  constructor() {
    this._tracers = /* @__PURE__ */ new Map();
  }
  getTracer(name, version2, options) {
    const key = `${name}@${version2 || ""}:${options?.schemaUrl || ""}`;
    if (!this._tracers.has(key)) {
      this._tracers.set(key, new SentryCloudflareTracer());
    }
    return this._tracers.get(key);
  }
};
__name(SentryCloudflareTraceProvider, "SentryCloudflareTraceProvider");
var SentryCloudflareTracer = class {
  startSpan(name, options) {
    return startInactiveSpan({
      ...options,
      name,
      attributes: {
        ...options?.attributes,
        "sentry.cloudflare_tracer": true
      }
    });
  }
  startActiveSpan(name, options, context2, fn) {
    const opts = typeof options === "object" && options !== null ? options : {};
    const spanOpts = {
      ...opts,
      name,
      attributes: {
        ...opts.attributes,
        "sentry.cloudflare_tracer": true
      }
    };
    const callback = typeof options === "function" ? options : typeof context2 === "function" ? context2 : typeof fn === "function" ? fn : () => {
    };
    return startSpanManual(spanOpts, callback);
  }
};
__name(SentryCloudflareTracer, "SentryCloudflareTracer");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/transport.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_TRANSPORT_BUFFER_SIZE2 = 30;
var IsolatedPromiseBuffer = class {
  constructor(_bufferSize = DEFAULT_TRANSPORT_BUFFER_SIZE2) {
    this.$ = [];
    this._taskProducers = [];
    this._bufferSize = _bufferSize;
  }
  /**
   * @inheritdoc
   */
  add(taskProducer) {
    if (this._taskProducers.length >= this._bufferSize) {
      return Promise.reject(SENTRY_BUFFER_FULL_ERROR);
    }
    this._taskProducers.push(taskProducer);
    return Promise.resolve({});
  }
  /**
   * @inheritdoc
   */
  drain(timeout) {
    const oldTaskProducers = [...this._taskProducers];
    this._taskProducers = [];
    return new Promise((resolve2) => {
      const timer = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve2(false);
        }
      }, timeout);
      Promise.all(
        oldTaskProducers.map(
          (taskProducer) => taskProducer().then(null, () => {
          })
        )
      ).then(() => {
        clearTimeout(timer);
        resolve2(true);
      });
    });
  }
};
__name(IsolatedPromiseBuffer, "IsolatedPromiseBuffer");
function makeCloudflareTransport(options) {
  function makeRequest(request) {
    const requestOptions = {
      body: request.body,
      method: "POST",
      headers: options.headers,
      ...options.fetchOptions
    };
    return suppressTracing(() => {
      return (options.fetch ?? fetch)(options.url, requestOptions).then(async (response) => {
        try {
          await response.text();
        } catch {
        }
        return {
          statusCode: response.status,
          headers: {
            "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": response.headers.get("Retry-After")
          }
        };
      });
    });
  }
  __name(makeRequest, "makeRequest");
  return createTransport(options, makeRequest, new IsolatedPromiseBuffer(options.bufferSize));
}
__name(makeCloudflareTransport, "makeCloudflareTransport");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/vendor/stacktrace.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function workersStackLineParser(getModule2) {
  const [arg1, arg2] = nodeStackLineParser(getModule2);
  const fn = /* @__PURE__ */ __name((line) => {
    const result = arg2(line);
    if (result) {
      const filename = result.filename;
      result.abs_path = filename !== void 0 && !filename.startsWith("/") ? `/${filename}` : filename;
      result.in_app = filename !== void 0;
    }
    return result;
  }, "fn");
  return [arg1, fn];
}
__name(workersStackLineParser, "workersStackLineParser");
function getModule(filename) {
  if (!filename) {
    return;
  }
  return basename(filename, ".js");
}
__name(getModule, "getModule");
var defaultStackParser = createStackParser(workersStackLineParser(getModule));

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/sdk.js
function getDefaultIntegrations(options) {
  const cookiesEnabled = options.sendDefaultPii || options.dataCollection?.cookies != null;
  return [
    // The Dedupe integration should not be used in workflows because we want to
    // capture all step failures, even if they are the same error.
    ...options.enableDedupe === false ? [] : [dedupeIntegration()],
    // TODO(v11): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
    // eslint-disable-next-line typescript/no-deprecated
    inboundFiltersIntegration(),
    functionToStringIntegration(),
    conversationIdIntegration(),
    linkedErrorsIntegration(),
    fetchIntegration(),
    // eslint-disable-next-line typescript/no-deprecated
    honoIntegration(),
    httpServerIntegration(),
    requestDataIntegration(cookiesEnabled ? void 0 : { include: { cookies: false } }),
    consoleIntegration()
  ];
}
__name(getDefaultIntegrations, "getDefaultIntegrations");
function init(options) {
  if (options.defaultIntegrations === void 0) {
    options.defaultIntegrations = getDefaultIntegrations(options);
  }
  const flushLock = options.ctx ? makeFlushLock(options.ctx) : void 0;
  delete options.ctx;
  const clientOptions = {
    ...options,
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(options),
    transport: options.transport || makeCloudflareTransport,
    flushLock
  };
  if (!options.skipOpenTelemetrySetup) {
    setupOpenTelemetryTracer();
  }
  return initAndBind(CloudflareClient, clientOptions);
}
__name(init, "init");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/instrumentContext.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentDurableObjectStorage.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/traceLinks.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SENTRY_TRACE_LINK_KEY_PREFIX = "__SENTRY_TRACE_LINK__";
function getTraceLinkKey(methodName) {
  return `${SENTRY_TRACE_LINK_KEY_PREFIX}${methodName}`;
}
__name(getTraceLinkKey, "getTraceLinkKey");
function storeSpanContext(originalStorage, methodName) {
  try {
    const activeSpan = getActiveSpan();
    if (activeSpan) {
      const spanContext = activeSpan.spanContext();
      const storedContext = {
        traceId: spanContext.traceId,
        spanId: spanContext.spanId,
        sampled: spanIsSampled(activeSpan)
      };
      originalStorage.kv.put(getTraceLinkKey(methodName), storedContext);
    }
  } catch (error4) {
    DEBUG_BUILD2 && debug3.log(`[CloudflareClient] Error storing span context for method ${methodName}`, error4);
  }
}
__name(storeSpanContext, "storeSpanContext");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentDurableObjectSyncKvStorage.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SYNC_KV_METHODS_TO_INSTRUMENT = ["get", "put", "delete", "list"];
function instrumentDurableObjectSyncKvStorage(syncKv) {
  return new Proxy(syncKv, {
    get(target, prop, _receiver) {
      const original = Reflect.get(target, prop, target);
      if (typeof original !== "function") {
        return original;
      }
      const methodName = prop;
      if (!SYNC_KV_METHODS_TO_INSTRUMENT.includes(methodName)) {
        return original.bind(target);
      }
      return function(...args) {
        return startSpan(
          {
            name: `durable_object_storage_kv_${methodName}`,
            op: "db",
            attributes: {
              [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.cloudflare.durable_object",
              // keeping the value as close as possible to the Cloudflare Worker KV instrumentation
              // https://github.com/cloudflare/workerd/blob/6b8b11787e2b2a800ab0edd0690bfab3857b0529/src/workerd/api/sync-kv.c%2B%2B#L19
              "db.system.name": "cloudflare-durable-object-sql",
              "db.operation.name": methodName
            }
          },
          () => {
            return original.apply(target, args);
          }
        );
      };
    }
  });
}
__name(instrumentDurableObjectSyncKvStorage, "instrumentDurableObjectSyncKvStorage");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentSqlStorage.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function instrumentSqlStorage(sql) {
  return new Proxy(sql, {
    get(target, prop, _receiver) {
      const original = Reflect.get(target, prop, target);
      if (prop !== "exec" || typeof original !== "function") {
        return original;
      }
      return function(...args) {
        const [query, ...bindings2] = args;
        const sanitizedQuery = _sanitizeSqlQuery(query);
        const querySummary = getSqlQuerySummary(sanitizedQuery);
        return startSpan(
          {
            op: "db.query",
            name: querySummary || sanitizedQuery,
            attributes: {
              [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.cloudflare.durable_object.sql",
              "db.system.name": "cloudflare-durable-object-sql",
              "db.operation.name": "exec",
              "db.query.text": sanitizedQuery,
              "db.query.summary": querySummary,
              "cloudflare.durable_object.query.bindings": bindings2.length
            }
          },
          () => original.apply(target, args)
        );
      };
    }
  });
}
__name(instrumentSqlStorage, "instrumentSqlStorage");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentDurableObjectStorage.js
var STORAGE_METHODS_TO_INSTRUMENT = ["get", "put", "delete", "list", "setAlarm", "getAlarm", "deleteAlarm"];
function instrumentDurableObjectStorage(storage, waitUntil) {
  return new Proxy(storage, {
    get(target, prop, _receiver) {
      const original = Reflect.get(target, prop, target);
      if (prop === "kv" && original != null && "get" in original && "put" in original) {
        return instrumentDurableObjectSyncKvStorage(original);
      }
      if (prop === "sql" && original != null && "databaseSize" in original && "exec" in original) {
        return instrumentSqlStorage(original);
      }
      if (typeof original !== "function") {
        return original;
      }
      const methodName = prop;
      if (!STORAGE_METHODS_TO_INSTRUMENT.includes(methodName)) {
        return original.bind(target);
      }
      return function(...args) {
        return startSpan(
          {
            // Use underscore naming to match Cloudflare's native instrumentation (e.g., "durable_object_storage_get")
            name: `durable_object_storage_${methodName}`,
            op: "db",
            attributes: {
              [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.cloudflare.durable_object",
              "db.system.name": "cloudflare.durable_object.storage",
              "db.operation.name": methodName
            }
          },
          () => {
            const teardown = /* @__PURE__ */ __name(async () => {
              if (methodName === "setAlarm") {
                storeSpanContext(target, "alarm");
              }
            }, "teardown");
            const result = original.apply(target, args);
            if (!isThenable(result)) {
              waitUntil?.(teardown());
              return result;
            }
            return result.then(
              (res) => {
                waitUntil?.(teardown());
                return res;
              },
              (e) => {
                throw e;
              }
            );
          }
        );
      };
    }
  });
}
__name(instrumentDurableObjectStorage, "instrumentDurableObjectStorage");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/instrumentContext.js
function instrumentContext(ctx) {
  if (!ctx)
    return ctx;
  const overrides = /* @__PURE__ */ new Map();
  const contextPrototype = Object.getPrototypeOf(ctx);
  const prototypeMethodNames = Object.getOwnPropertyNames(contextPrototype);
  const ownPropertyNames = Object.getOwnPropertyNames(ctx);
  const instrumented2 = /* @__PURE__ */ new Set(["constructor"]);
  const descriptors = [...ownPropertyNames, ...prototypeMethodNames].reduce(
    (prevDescriptors, methodName) => {
      if (instrumented2.has(methodName))
        return prevDescriptors;
      if (typeof ctx[methodName] !== "function")
        return prevDescriptors;
      instrumented2.add(methodName);
      const overridableDescriptor = makeOverridableDescriptor(overrides, ctx, methodName);
      return {
        ...prevDescriptors,
        [methodName]: overridableDescriptor
      };
    },
    {}
  );
  if ("storage" in ctx && ctx.storage) {
    const originalStorage = ctx.storage;
    const waitUntil = "waitUntil" in ctx && typeof ctx.waitUntil === "function" ? ctx.waitUntil.bind(ctx) : void 0;
    let instrumentedStorage;
    descriptors.storage = {
      configurable: true,
      enumerable: true,
      get: () => {
        if (!instrumentedStorage) {
          instrumentedStorage = instrumentDurableObjectStorage(originalStorage, waitUntil);
        }
        return instrumentedStorage;
      }
    };
    descriptors.originalStorage = {
      configurable: true,
      enumerable: false,
      get: () => originalStorage
    };
  }
  return Object.create(ctx, descriptors);
}
__name(instrumentContext, "instrumentContext");
function makeOverridableDescriptor(store, ctx, method) {
  return {
    configurable: true,
    enumerable: true,
    set: (newValue) => {
      if (typeof newValue == "function") {
        store.set(method, newValue);
        return;
      }
      Reflect.set(ctx, method, newValue);
    },
    get: () => {
      if (store.has(method))
        return store.get(method);
      const methodFunction = Reflect.get(ctx, method);
      if (typeof methodFunction !== "function")
        return methodFunction;
      return methodFunction.bind(ctx);
    }
  };
}
__name(makeOverridableDescriptor, "makeOverridableDescriptor");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentEnv.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/isBinding.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isJSRPC(item) {
  try {
    return !!item[`__some_property_that_will_never_exist__${Math.random()}`];
  } catch {
    return false;
  }
}
__name(isJSRPC, "isJSRPC");
var isNotJSRPC = /* @__PURE__ */ __name((item) => !isJSRPC(item), "isNotJSRPC");
function isDurableObjectNamespace(item) {
  return item != null && isNotJSRPC(item) && typeof item.idFromName === "function";
}
__name(isDurableObjectNamespace, "isDurableObjectNamespace");
function isQueue(item) {
  return item != null && isNotJSRPC(item) && typeof item.send === "function" && typeof item.sendBatch === "function";
}
__name(isQueue, "isQueue");
function isD1Database(item) {
  return item != null && isNotJSRPC(item) && typeof item.prepare === "function" && typeof item.batch === "function" && typeof item.exec === "function";
}
__name(isD1Database, "isD1Database");
function isR2Bucket(item) {
  return item != null && isNotJSRPC(item) && typeof item.head === "function" && typeof item.put === "function" && typeof item.createMultipartUpload === "function";
}
__name(isR2Bucket, "isR2Bucket");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentD1.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var patchedStatement = /* @__PURE__ */ new WeakSet();
function instrumentD1PreparedStatementQueries(statement, query) {
  if (patchedStatement.has(statement)) {
    return statement;
  }
  statement.first = new Proxy(statement.first, {
    apply(target, thisArg, args) {
      return startSpan(createStartSpanOptions(query, "first"), async () => {
        const res = await Reflect.apply(target, thisArg, args);
        createD1Breadcrumb(query, "first");
        return res;
      });
    }
  });
  statement.run = new Proxy(statement.run, {
    apply(target, thisArg, args) {
      return startSpan(createStartSpanOptions(query, "run"), async (span) => {
        const d1Response = await Reflect.apply(target, thisArg, args);
        applyD1ReturnObjectToSpan(span, d1Response);
        createD1Breadcrumb(query, "run", d1Response);
        return d1Response;
      });
    }
  });
  statement.all = new Proxy(statement.all, {
    apply(target, thisArg, args) {
      return startSpan(createStartSpanOptions(query, "all"), async (span) => {
        const d1Result = await Reflect.apply(target, thisArg, args);
        applyD1ReturnObjectToSpan(span, d1Result);
        createD1Breadcrumb(query, "all", d1Result);
        return d1Result;
      });
    }
  });
  statement.raw = new Proxy(statement.raw, {
    apply(target, thisArg, args) {
      return startSpan(createStartSpanOptions(query, "raw"), async () => {
        const res = await Reflect.apply(target, thisArg, args);
        createD1Breadcrumb(query, "raw");
        return res;
      });
    }
  });
  patchedStatement.add(statement);
  return statement;
}
__name(instrumentD1PreparedStatementQueries, "instrumentD1PreparedStatementQueries");
function instrumentD1PreparedStatement(statement, query) {
  statement.bind = new Proxy(statement.bind, {
    apply(target, thisArg, args) {
      return instrumentD1PreparedStatementQueries(Reflect.apply(target, thisArg, args), query);
    }
  });
  return instrumentD1PreparedStatementQueries(statement, query);
}
__name(instrumentD1PreparedStatement, "instrumentD1PreparedStatement");
function applyD1ReturnObjectToSpan(span, d1Result) {
  if (!d1Result.success) {
    span.setStatus({ code: SPAN_STATUS_ERROR });
  }
  span.setAttributes(getAttributesFromD1Response(d1Result));
}
__name(applyD1ReturnObjectToSpan, "applyD1ReturnObjectToSpan");
function getAttributesFromD1Response(d1Result) {
  return {
    "cloudflare.d1.duration": d1Result.meta.duration,
    "cloudflare.d1.rows_read": d1Result.meta.rows_read,
    "cloudflare.d1.rows_written": d1Result.meta.rows_written
  };
}
__name(getAttributesFromD1Response, "getAttributesFromD1Response");
function createD1Breadcrumb(query, type, d1Result) {
  addBreadcrumb({
    category: "query",
    message: query,
    data: {
      ...d1Result ? getAttributesFromD1Response(d1Result) : {},
      "db.operation.name": type
    }
  });
}
__name(createD1Breadcrumb, "createD1Breadcrumb");
function createStartSpanOptions(query, type) {
  return {
    op: "db.query",
    name: query,
    attributes: {
      "db.system.name": "cloudflare-d1",
      "db.operation.name": type,
      "db.query.text": query,
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.cloudflare.d1"
    }
  };
}
__name(createStartSpanOptions, "createStartSpanOptions");
function instrumentPrepare(prepare) {
  return new Proxy(prepare, {
    apply(target, thisArg, args) {
      const [query] = args;
      return instrumentD1PreparedStatement(Reflect.apply(target, thisArg, args), query);
    }
  });
}
__name(instrumentPrepare, "instrumentPrepare");
function instrumentBatch(batch) {
  return new Proxy(batch, {
    apply(target, thisArg, args) {
      const statements = args[0];
      const queryText = statements.map((statement) => statement.statement ?? "").filter(Boolean).join("\n");
      return startSpan(
        {
          op: "db.query",
          name: "D1 batch",
          attributes: {
            "db.system.name": "cloudflare-d1",
            "db.operation.name": "batch",
            "db.query.text": queryText || void 0,
            "db.operation.batch.size": statements.length,
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.cloudflare.d1"
          }
        },
        async () => {
          const res = await Reflect.apply(target, thisArg, args);
          createD1Breadcrumb("D1 batch", "batch");
          return res;
        }
      );
    }
  });
}
__name(instrumentBatch, "instrumentBatch");
function instrumentD1Session(session) {
  session.prepare = instrumentPrepare(session.prepare);
  session.batch = instrumentBatch(session.batch);
  return session;
}
__name(instrumentD1Session, "instrumentD1Session");
function _instrumentD1(db) {
  db.prepare = instrumentPrepare(db.prepare);
  db.batch = instrumentBatch(db.batch);
  db.exec = new Proxy(db.exec, {
    apply(target, thisArg, args) {
      const [query] = args;
      return startSpan(createStartSpanOptions(query, "exec"), async () => {
        const res = await Reflect.apply(target, thisArg, args);
        createD1Breadcrumb(query, "exec");
        return res;
      });
    }
  });
  if ("withSession" in db && typeof db.withSession === "function") {
    db.withSession = new Proxy(db.withSession, {
      apply(target, thisArg, args) {
        return instrumentD1Session(Reflect.apply(target, thisArg, args));
      }
    });
  }
  return db;
}
__name(_instrumentD1, "_instrumentD1");
function instrumentD1(db) {
  return ensureInstrumented(db, _instrumentD1);
}
__name(instrumentD1, "instrumentD1");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/rpcMeta.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SENTRY_RPC_META_KEY = "__sentry_rpc_meta__";
function appendRpcMeta(args) {
  const traceData = getTraceData();
  if (!traceData["sentry-trace"]) {
    return args;
  }
  return [...args, { [SENTRY_RPC_META_KEY]: traceData }];
}
__name(appendRpcMeta, "appendRpcMeta");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/rpcOptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function getEffectiveRpcPropagation(options) {
  const { enableRpcTracePropagation, instrumentPrototypeMethods } = options;
  if (enableRpcTracePropagation !== void 0) {
    if (instrumentPrototypeMethods !== void 0) {
      DEBUG_BUILD2 && debug3.warn(
        "[Sentry] Both `enableRpcTracePropagation` and `instrumentPrototypeMethods` are set. Using `enableRpcTracePropagation` and ignoring `instrumentPrototypeMethods`."
      );
    }
    return enableRpcTracePropagation;
  }
  if (instrumentPrototypeMethods !== void 0) {
    DEBUG_BUILD2 && debug3.warn(
      "[Sentry] `instrumentPrototypeMethods` is deprecated and will be removed in a future major version. Please use `enableRpcTracePropagation` instead."
    );
    return instrumentPrototypeMethods === true || Array.isArray(instrumentPrototypeMethods) && instrumentPrototypeMethods.length > 0;
  }
  return false;
}
__name(getEffectiveRpcPropagation, "getEffectiveRpcPropagation");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentDurableObjectNamespace.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentFetcher.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function instrumentFetcher(fetchFn) {
  return function(input, init2) {
    const headers = _INTERNAL_getTracingHeadersForFetchRequest(input, { headers: init2?.headers });
    if (input instanceof Request && init2 === void 0) {
      if (!headers) {
        return fetchFn(input);
      }
      const requestWithTracing = new Request(input, { headers });
      return fetchFn(requestWithTracing);
    }
    const mergedInit = {
      ...init2,
      ...headers ? { headers } : {}
    };
    return fetchFn(input, mergedInit);
  };
}
__name(instrumentFetcher, "instrumentFetcher");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentDurableObjectNamespace.js
var STUB_NON_RPC_METHODS = /* @__PURE__ */ new Set(["fetch", "connect", "dup"]);
function instrumentDurableObjectNamespace(namespace) {
  return new Proxy(namespace, {
    get(target, prop, _receiver) {
      const value = Reflect.get(target, prop);
      if (typeof value !== "function") {
        return value;
      }
      if (prop === "get" || prop === "getByName") {
        return function(...args) {
          const stub = Reflect.apply(value, target, args);
          return instrumentDurableObjectStub(stub);
        };
      }
      return value.bind(target);
    }
  });
}
__name(instrumentDurableObjectNamespace, "instrumentDurableObjectNamespace");
function instrumentDurableObjectStub(stub) {
  return new Proxy(stub, {
    get(target, prop) {
      const value = Reflect.get(target, prop);
      if (prop === "fetch" && typeof value === "function") {
        return instrumentFetcher((...args) => Reflect.apply(value, target, args));
      }
      if (typeof value === "function" && typeof prop === "string" && !STUB_NON_RPC_METHODS.has(prop)) {
        return (...args) => Reflect.apply(value, target, appendRpcMeta(args));
      }
      return value;
    }
  });
}
__name(instrumentDurableObjectStub, "instrumentDurableObjectStub");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentQueueProducer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ORIGIN = "auto.faas.cloudflare.queue";
function startPublishSpan(options, callback) {
  const { bindingName, bodySize, messageCount } = options;
  return startSpan(
    {
      op: "queue.publish",
      name: `send ${bindingName}`,
      attributes: {
        "messaging.system": "cloudflare",
        "messaging.destination.name": bindingName,
        "messaging.operation.type": "send",
        "messaging.operation.name": "send",
        ...messageCount !== void 0 && { "messaging.batch.message_count": messageCount },
        "messaging.message.body.size": bodySize,
        [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "queue.publish",
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN
      }
    },
    callback
  );
}
__name(startPublishSpan, "startPublishSpan");
function getBodySize(body) {
  if (body == null) {
    return void 0;
  }
  if (typeof body === "string") {
    return new TextEncoder().encode(body).byteLength;
  }
  if (body instanceof ArrayBuffer) {
    return body.byteLength;
  }
  if (ArrayBuffer.isView(body)) {
    return body.byteLength;
  }
  try {
    return new TextEncoder().encode(JSON.stringify(body)).byteLength;
  } catch {
    return void 0;
  }
}
__name(getBodySize, "getBodySize");
function instrumentQueueProducer(queue, bindingName) {
  return new Proxy(queue, {
    get(target, prop, receiver) {
      if (prop === "send") {
        const original = Reflect.get(target, prop, receiver);
        return function(message, options) {
          return startPublishSpan(
            { bindingName, bodySize: getBodySize(message) },
            () => Reflect.apply(original, target, [message, options])
          );
        };
      }
      if (prop === "sendBatch") {
        const original = Reflect.get(target, prop, receiver);
        return function(messages, options) {
          const messageArray = Array.from(messages);
          const totalBodySize = messageArray.reduce((acc, m) => {
            const size = getBodySize(m.body);
            if (size === void 0) {
              return acc;
            }
            return (acc ?? 0) + size;
          }, void 0);
          return startPublishSpan(
            { bindingName, bodySize: totalBodySize, messageCount: messageArray.length },
            () => Reflect.apply(original, target, [messageArray, options])
          );
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
__name(instrumentQueueProducer, "instrumentQueueProducer");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentR2.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ORIGIN2 = "auto.faas.cloudflare.r2";
var R2_OPERATIONS = {
  get: { spanName: "r2_get", op: "object.get", operation: "GetObject" },
  head: { spanName: "r2_head", op: "object.head", operation: "HeadObject" },
  put: { spanName: "r2_put", op: "object.put", operation: "PutObject" },
  delete: { spanName: "r2_delete", op: "object.delete", operation: "DeleteObject" },
  list: { spanName: "r2_list", op: "object.list", operation: "ListObjects" },
  uploadPart: { spanName: "r2_uploadPart", op: "object.upload_part", operation: "UploadPart" },
  abortMultipartUpload: {
    spanName: "r2_abortMultipartUpload",
    op: "object.multipart_upload.abort",
    operation: "AbortMultipartUpload"
  },
  createMultipartUpload: {
    spanName: "r2_createMultipartUpload",
    op: "object.multipart_upload.create",
    operation: "CreateMultipartUpload"
  },
  completeMultipartUpload: {
    spanName: "r2_completeMultipartUpload",
    op: "object.multipart_upload.complete",
    operation: "CompleteMultipartUpload"
  }
};
function isR2ListOptions(key) {
  return isObjectLike(key) && !Array.isArray(key);
}
__name(isR2ListOptions, "isR2ListOptions");
function createSpanOptions(bindingName, r2Op, key) {
  const { spanName, op, operation } = R2_OPERATIONS[r2Op];
  const requestKey = Array.isArray(key) ? key.join(", ") : typeof key === "string" ? key : void 0;
  return {
    op,
    name: spanName,
    attributes: {
      "cloudflare.r2.operation": operation,
      "cloudflare.r2.bucket": bindingName,
      ...requestKey !== void 0 && { "cloudflare.r2.request.key": requestKey },
      ...isR2ListOptions(key) && key.prefix !== void 0 && { "cloudflare.r2.request.prefix": key.prefix },
      ...isR2ListOptions(key) && key.delimiter !== void 0 && { "cloudflare.r2.request.delimiter": key.delimiter },
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: ORIGIN2
    }
  };
}
__name(createSpanOptions, "createSpanOptions");
function instrumentR2MultipartUpload(upload, bindingName) {
  const { key } = upload;
  return new Proxy(upload, {
    get(target, prop, receiver) {
      if (prop === "uploadPart") {
        const original = Reflect.get(target, prop, receiver);
        return function(...args) {
          const [partNumber] = args;
          return startSpan(
            {
              ...createSpanOptions(bindingName, "uploadPart", key),
              attributes: {
                ...createSpanOptions(bindingName, "uploadPart", key).attributes,
                "cloudflare.r2.request.part_number": partNumber
              }
            },
            () => Reflect.apply(original, target, args)
          );
        };
      }
      if (prop === "abort") {
        const original = Reflect.get(target, prop, receiver);
        return function() {
          return startSpan(
            createSpanOptions(bindingName, "abortMultipartUpload", key),
            () => Reflect.apply(original, target, [])
          );
        };
      }
      if (prop === "complete") {
        const original = Reflect.get(target, prop, receiver);
        return function(...args) {
          return startSpan(
            createSpanOptions(bindingName, "completeMultipartUpload", key),
            () => Reflect.apply(original, target, args)
          );
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
__name(instrumentR2MultipartUpload, "instrumentR2MultipartUpload");
function instrumentR2Bucket(bucket, bindingName) {
  return new Proxy(bucket, {
    get(target, prop, receiver) {
      if (prop === "get" || prop === "head" || prop === "put" || prop === "delete" || prop === "list") {
        const original = Reflect.get(target, prop, receiver);
        return function(...args) {
          const [key] = args;
          return startSpan(createSpanOptions(bindingName, prop, key), () => Reflect.apply(original, target, args));
        };
      }
      if (prop === "createMultipartUpload") {
        const original = Reflect.get(target, prop, receiver);
        return function(...args) {
          const [key] = args;
          return startSpan(createSpanOptions(bindingName, "createMultipartUpload", key), async () => {
            const upload = await Reflect.apply(original, target, args);
            return instrumentR2MultipartUpload(upload, bindingName);
          });
        };
      }
      if (prop === "resumeMultipartUpload") {
        const original = Reflect.get(target, prop, receiver);
        return function(...args) {
          const upload = Reflect.apply(original, target, args);
          return instrumentR2MultipartUpload(upload, bindingName);
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
__name(instrumentR2Bucket, "instrumentR2Bucket");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentEnv.js
function isProxyable(item) {
  return isObjectLike(item) || typeof item === "function";
}
__name(isProxyable, "isProxyable");
var instrumentedBindings = /* @__PURE__ */ new WeakMap();
function instrumentEnv(env2, options) {
  if (!env2 || typeof env2 !== "object") {
    return env2;
  }
  const rpcPropagation = options ? getEffectiveRpcPropagation(options) : false;
  return new Proxy(env2, {
    get(target, prop, receiver) {
      const item = Reflect.get(target, prop, receiver);
      if (!isProxyable(item)) {
        return item;
      }
      const cached = instrumentedBindings.get(item);
      if (cached) {
        return cached;
      }
      if (isD1Database(item)) {
        const instrumented2 = instrumentD1(item);
        instrumentedBindings.set(item, instrumented2);
        return instrumented2;
      }
      if (isQueue(item)) {
        const bindingName = typeof prop === "string" ? prop : String(prop);
        const instrumented2 = instrumentQueueProducer(item, bindingName);
        instrumentedBindings.set(item, instrumented2);
        return instrumented2;
      }
      if (isR2Bucket(item)) {
        const bindingName = typeof prop === "string" ? prop : String(prop);
        const instrumented2 = instrumentR2Bucket(item, bindingName);
        instrumentedBindings.set(item, instrumented2);
        return instrumented2;
      }
      if (!rpcPropagation) {
        return item;
      }
      if (isDurableObjectNamespace(item)) {
        const instrumented2 = instrumentDurableObjectNamespace(item);
        instrumentedBindings.set(item, instrumented2);
        return instrumented2;
      }
      if (isJSRPC(item)) {
        const instrumented2 = new Proxy(item, {
          get(target2, p) {
            const value = Reflect.get(target2, p);
            if (p === "fetch" && typeof value === "function") {
              return instrumentFetcher((...args) => Reflect.apply(value, target2, args));
            }
            if (typeof value === "function" && typeof p === "string" && !STUB_NON_RPC_METHODS.has(p)) {
              return (...args) => Reflect.apply(value, target2, appendRpcMeta(args));
            }
            return value;
          }
        });
        instrumentedBindings.set(item, instrumented2);
        return instrumented2;
      }
      return item;
    }
  });
}
__name(instrumentEnv, "instrumentEnv");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentEmail.js
function wrapEmailHandler(emailMessage, options, context2, fn) {
  return withIsolationScope2((isolationScope) => {
    const waitUntil = context2.waitUntil.bind(context2);
    const client = init({ ...options, ctx: context2 });
    isolationScope.setClient(client);
    addCloudResourceContext(isolationScope);
    return startSpan(
      {
        op: "faas.email",
        name: `Handle Email ${emailMessage.to}`,
        attributes: {
          "faas.trigger": "email",
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.faas.cloudflare.email",
          [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "task"
        }
      },
      async () => {
        try {
          return await fn();
        } catch (e) {
          captureException(e, { mechanism: { handled: false, type: "auto.faas.cloudflare.email" } });
          throw e;
        } finally {
          waitUntil(flushAndDispose(client));
        }
      }
    );
  });
}
__name(wrapEmailHandler, "wrapEmailHandler");
function instrumentExportedHandlerEmail(handler, optionsCallback) {
  if (!("email" in handler) || typeof handler.email !== "function") {
    return;
  }
  handler.email = ensureInstrumented(
    handler.email,
    (original) => new Proxy(original, {
      apply(target, thisArg, args) {
        const [emailMessage, env2, ctx] = args;
        const context2 = instrumentContext(ctx);
        const options = getFinalOptions(optionsCallback(env2), env2);
        args[1] = instrumentEnv(env2, options);
        args[2] = context2;
        return wrapEmailHandler(emailMessage, options, context2, () => target.apply(thisArg, args));
      }
    })
  );
}
__name(instrumentExportedHandlerEmail, "instrumentExportedHandlerEmail");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentFetch.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/request.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/streaming.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function classifyResponseStreaming(res) {
  if (!res.body) {
    return { isStreaming: false };
  }
  const contentType = res.headers.get("content-type") ?? "";
  const contentLength = res.headers.get("content-length");
  if (/^text\/event-stream\b/i.test(contentType) || /^application\/(x-)?ndjson\b/i.test(contentType) || /^application\/stream\+json\b/i.test(contentType) || /^text\/plain\b/i.test(contentType) && !contentLength) {
    return { isStreaming: true };
  }
  return { isStreaming: false };
}
__name(classifyResponseStreaming, "classifyResponseStreaming");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/request.js
function getRequestErrorMechanismType(context2) {
  return context2 && "storage" in context2 ? "auto.faas.cloudflare.durable_object" : "auto.http.cloudflare";
}
__name(getRequestErrorMechanismType, "getRequestErrorMechanismType");
function wrapRequestHandler(wrapperOptions, handler) {
  return withIsolationScope2(async (isolationScope) => {
    const { options, request, captureErrors = true } = wrapperOptions;
    const context2 = wrapperOptions.context;
    const waitUntil = context2 ? getOriginalWaitUntil(context2)?.bind(context2) : void 0;
    const errorMechanismType = getRequestErrorMechanismType(context2);
    const client = init({ ...options, ctx: context2 });
    isolationScope.setClient(client);
    const urlObject = parseStringToURLObject(request.url);
    const [name, attributes] = getHttpSpanDetailsFromUrlObject(urlObject, "server", "auto.http.cloudflare", request);
    const contentLength = request.headers.get("content-length");
    if (contentLength) {
      attributes["http.request.body.size"] = parseInt(contentLength, 10);
    }
    const userAgentHeader = request.headers.get("user-agent");
    if (userAgentHeader) {
      attributes["user_agent.original"] = userAgentHeader;
    }
    Object.assign(
      attributes,
      httpHeadersToSpanAttributes(
        winterCGHeadersToDict(request.headers),
        getClient()?.getDataCollectionOptions() ?? false
      )
    );
    attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.server";
    addCloudResourceContext(isolationScope);
    addRequest(isolationScope, request);
    if (request.cf) {
      addCultureContext(isolationScope, request.cf);
      if (typeof request.cf.httpProtocol === "string") {
        attributes["network.protocol.name"] = request.cf.httpProtocol;
      }
    }
    if (request.method === "OPTIONS" || request.method === "HEAD") {
      try {
        return await handler();
      } catch (e) {
        if (captureErrors) {
          captureException(e, { mechanism: { handled: false, type: errorMechanismType } });
        }
        throw e;
      } finally {
        waitUntil?.(flushAndDispose(client));
      }
    }
    if (client) {
      await captureIncomingRequestBody(client, request);
    }
    return continueTrace(
      { sentryTrace: request.headers.get("sentry-trace") || "", baggage: request.headers.get("baggage") },
      () => {
        return startSpanManual({ name, attributes }, async (span) => {
          let res;
          try {
            res = await handler();
            setHttpStatus(span, res.status);
          } catch (e) {
            span.end();
            if (captureErrors) {
              captureException(e, { mechanism: { handled: false, type: errorMechanismType } });
            }
            waitUntil?.(flushAndDispose(client));
            throw e;
          }
          const classification = classifyResponseStreaming(res);
          if (classification.isStreaming && res.body) {
            try {
              let ended = false;
              const endSpanOnce = /* @__PURE__ */ __name(() => {
                if (ended)
                  return;
                ended = true;
                span.end();
                waitUntil?.(flushAndDispose(client));
              }, "endSpanOnce");
              const transform2 = new TransformStream({
                flush() {
                  endSpanOnce();
                },
                cancel() {
                  endSpanOnce();
                }
              });
              return new Response(res.body.pipeThrough(transform2), {
                status: res.status,
                statusText: res.statusText,
                headers: res.headers
              });
            } catch {
              span.end();
              waitUntil?.(flushAndDispose(client));
              return res;
            }
          }
          span.end();
          if (res.status === 101) {
            waitUntil?.(client?.flush(2e3));
          } else {
            waitUntil?.(flushAndDispose(client));
          }
          return res;
        });
      }
    );
  });
}
__name(wrapRequestHandler, "wrapRequestHandler");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentFetch.js
function instrumentExportedHandlerFetch(handler, optionsCallback) {
  if (!("fetch" in handler) || typeof handler.fetch !== "function") {
    return;
  }
  handler.fetch = ensureInstrumented(
    handler.fetch,
    (original) => new Proxy(original, {
      apply(target, thisArg, args) {
        const [request, env2, ctx] = args;
        if (request.method === "OPTIONS" || request.method === "HEAD") {
          return target.apply(thisArg, args);
        }
        const context2 = instrumentContext(ctx);
        const options = getFinalOptions(optionsCallback(env2), env2);
        args[1] = instrumentEnv(env2, options);
        args[2] = context2;
        return wrapRequestHandler({ options, request, context: context2 }, () => target.apply(thisArg, args));
      }
    })
  );
}
__name(instrumentExportedHandlerFetch, "instrumentExportedHandlerFetch");
function instrumentWorkerEntrypointFetch(instance, options, context2) {
  if (!instance.fetch) {
    return;
  }
  const original = instance.fetch.bind(instance);
  instance.fetch = new Proxy(original, {
    apply(target, thisArg, args) {
      const [request] = args;
      if (request.method === "OPTIONS" || request.method === "HEAD") {
        return Reflect.apply(target, thisArg, args);
      }
      return wrapRequestHandler({ options, request, context: context2 }, () => Reflect.apply(target, thisArg, args));
    }
  });
}
__name(instrumentWorkerEntrypointFetch, "instrumentWorkerEntrypointFetch");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentQueue.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function wrapQueueHandler(batch, options, context2, fn) {
  return withIsolationScope2((isolationScope) => {
    const waitUntil = context2.waitUntil.bind(context2);
    const client = init({ ...options, ctx: context2 });
    isolationScope.setClient(client);
    addCloudResourceContext(isolationScope);
    return startSpan(
      {
        op: "faas.queue",
        name: `process ${batch.queue}`,
        attributes: {
          "faas.trigger": "pubsub",
          "messaging.destination.name": batch.queue,
          "messaging.system": "cloudflare",
          "messaging.operation.type": "process",
          "messaging.operation.name": "process",
          "messaging.batch.message_count": batch.messages.length,
          "messaging.message.retry.count": batch.messages.reduce((acc, message) => acc + message.attempts - 1, 0),
          [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "queue.process",
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.faas.cloudflare.queue",
          [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "task"
        }
      },
      async () => {
        try {
          return await fn();
        } catch (e) {
          captureException(e, { mechanism: { handled: false, type: "auto.faas.cloudflare.queue" } });
          throw e;
        } finally {
          waitUntil(flushAndDispose(client));
        }
      }
    );
  });
}
__name(wrapQueueHandler, "wrapQueueHandler");
function instrumentExportedHandlerQueue(handler, optionsCallback) {
  if (!("queue" in handler) || typeof handler.queue !== "function") {
    return;
  }
  handler.queue = ensureInstrumented(
    handler.queue,
    (original) => new Proxy(original, {
      apply(target, thisArg, args) {
        const [batch, env2, ctx] = args;
        const context2 = instrumentContext(ctx);
        const options = getFinalOptions(optionsCallback(env2), env2);
        args[1] = instrumentEnv(env2, options);
        args[2] = context2;
        return wrapQueueHandler(batch, options, context2, () => target.apply(thisArg, args));
      }
    })
  );
}
__name(instrumentExportedHandlerQueue, "instrumentExportedHandlerQueue");
function instrumentWorkerEntrypointQueue(instance, options, context2) {
  if (!instance.queue) {
    return;
  }
  const original = instance.queue.bind(instance);
  instance.queue = new Proxy(original, {
    apply(target, thisArg, args) {
      const [batch] = args;
      return wrapQueueHandler(batch, options, context2, () => Reflect.apply(target, thisArg, args));
    }
  });
}
__name(instrumentWorkerEntrypointQueue, "instrumentWorkerEntrypointQueue");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentScheduled.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function wrapScheduledHandler(controller, options, context2, fn) {
  return withIsolationScope2((isolationScope) => {
    const waitUntil = context2.waitUntil.bind(context2);
    const client = init({ ...options, ctx: context2 });
    isolationScope.setClient(client);
    addCloudResourceContext(isolationScope);
    return startSpan(
      {
        op: "faas.cron",
        name: `Scheduled Cron ${controller.cron}`,
        attributes: {
          "faas.cron": controller.cron,
          "faas.time": new Date(controller.scheduledTime).toISOString(),
          "faas.trigger": "timer",
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.faas.cloudflare.scheduled",
          [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "task"
        }
      },
      async () => {
        try {
          return await fn();
        } catch (e) {
          captureException(e, { mechanism: { handled: false, type: "auto.faas.cloudflare.scheduled" } });
          throw e;
        } finally {
          waitUntil(flushAndDispose(client));
        }
      }
    );
  });
}
__name(wrapScheduledHandler, "wrapScheduledHandler");
function instrumentExportedHandlerScheduled(handler, optionsCallback) {
  if (!("scheduled" in handler) || typeof handler.scheduled !== "function") {
    return;
  }
  handler.scheduled = ensureInstrumented(
    handler.scheduled,
    (original) => new Proxy(original, {
      apply(target, thisArg, args) {
        const [controller, env2, ctx] = args;
        const context2 = instrumentContext(ctx);
        const options = getFinalOptions(optionsCallback(env2), env2);
        args[1] = instrumentEnv(env2, options);
        args[2] = context2;
        return wrapScheduledHandler(controller, options, context2, () => target.apply(thisArg, args));
      }
    })
  );
}
__name(instrumentExportedHandlerScheduled, "instrumentExportedHandlerScheduled");
function instrumentWorkerEntrypointScheduled(instance, options, context2) {
  if (!instance.scheduled) {
    return;
  }
  const original = instance.scheduled.bind(instance);
  instance.scheduled = new Proxy(original, {
    apply(target, thisArg, args) {
      const [controller] = args;
      return wrapScheduledHandler(controller, options, context2, () => Reflect.apply(target, thisArg, args));
    }
  });
}
__name(instrumentWorkerEntrypointScheduled, "instrumentWorkerEntrypointScheduled");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/worker/instrumentTail.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function wrapTailHandler(options, context2, fn) {
  return withIsolationScope2(async (isolationScope) => {
    const waitUntil = context2.waitUntil.bind(context2);
    const client = init({ ...options, ctx: context2 });
    isolationScope.setClient(client);
    addCloudResourceContext(isolationScope);
    try {
      return await fn();
    } catch (e) {
      captureException(e, { mechanism: { handled: false, type: "auto.faas.cloudflare.tail" } });
      throw e;
    } finally {
      waitUntil(flushAndDispose(client));
    }
  });
}
__name(wrapTailHandler, "wrapTailHandler");
function instrumentExportedHandlerTail(handler, optionsCallback) {
  if (!("tail" in handler) || typeof handler.tail !== "function") {
    return;
  }
  handler.tail = ensureInstrumented(
    handler.tail,
    (original) => new Proxy(original, {
      apply(target, thisArg, args) {
        const [, env2, ctx] = args;
        const context2 = instrumentContext(ctx);
        const options = getFinalOptions(optionsCallback(env2), env2);
        args[1] = instrumentEnv(env2, options);
        args[2] = context2;
        return wrapTailHandler(options, context2, () => target.apply(thisArg, args));
      }
    })
  );
}
__name(instrumentExportedHandlerTail, "instrumentExportedHandlerTail");
function instrumentWorkerEntrypointTail(instance, options, context2) {
  if (!instance.tail) {
    return;
  }
  const original = instance.tail.bind(instance);
  instance.tail = new Proxy(original, {
    apply(target, thisArg, args) {
      return wrapTailHandler(options, context2, () => Reflect.apply(target, thisArg, args));
    }
  });
}
__name(instrumentWorkerEntrypointTail, "instrumentWorkerEntrypointTail");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/utils/isCloudflareClass.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isCloudflareClass(value, className) {
  if (!value || typeof value !== "function") {
    return false;
  }
  if (value.name === className) {
    return false;
  }
  let proto = value.prototype;
  while (proto) {
    const ctor = proto.constructor;
    const constructorName = ctor?.name;
    if (constructorName === className) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
__name(isCloudflareClass, "isCloudflareClass");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/instrumentations/instrumentWorkerEntrypoint.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function instrumentWorkerEntrypoint(optionsCallback, WorkerEntrypointClass) {
  setAsyncLocalStorageAsyncContextStrategy();
  return new Proxy(WorkerEntrypointClass, {
    construct(target, [ctx, env2]) {
      const context2 = instrumentContext(ctx);
      const options = getFinalOptions(optionsCallback(env2), env2);
      const instrumentedEnv = instrumentEnv(env2, options);
      const obj = new target(context2, instrumentedEnv);
      if ("ctx" in obj) {
        Object.defineProperty(obj, "ctx", {
          value: context2,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      if ("env" in obj) {
        Object.defineProperty(obj, "env", {
          value: instrumentedEnv,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      Object.defineProperty(obj, "__SENTRY_CONTEXT__", {
        value: context2,
        enumerable: false,
        writable: false,
        configurable: false
      });
      Object.defineProperty(obj, "__SENTRY_OPTIONS__", {
        value: options,
        enumerable: false,
        writable: false,
        configurable: false
      });
      instrumentWorkerEntrypointFetch(obj, options, context2);
      instrumentWorkerEntrypointScheduled(obj, options, context2);
      instrumentWorkerEntrypointQueue(obj, options, context2);
      instrumentWorkerEntrypointTail(obj, options, context2);
      return obj;
    }
  });
}
__name(instrumentWorkerEntrypoint, "instrumentWorkerEntrypoint");

// ../../node_modules/.pnpm/@sentry+cloudflare@10.65.0__7726029b3380381d46e024526e10a8d2/node_modules/@sentry/cloudflare/build/esm/withSentry.js
function withSentry(optionsCallback, handler) {
  if (isCloudflareClass(handler, "WorkerEntrypoint")) {
    return instrumentWorkerEntrypoint(optionsCallback, handler);
  }
  setAsyncLocalStorageAsyncContextStrategy();
  try {
    instrumentExportedHandlerFetch(handler, optionsCallback);
    instrumentHonoErrorHandler(handler);
    instrumentExportedHandlerScheduled(handler, optionsCallback);
    instrumentExportedHandlerEmail(handler, optionsCallback);
    instrumentExportedHandlerQueue(handler, optionsCallback);
    instrumentExportedHandlerTail(handler, optionsCallback);
  } catch {
  }
  return handler;
}
__name(withSentry, "withSentry");
function instrumentHonoErrorHandler(handler) {
  if ("onError" in handler && "errorHandler" in handler && typeof handler.errorHandler === "function") {
    handler.errorHandler = ensureInstrumented(
      handler.errorHandler,
      (original) => new Proxy(original, {
        apply(target, thisArg, args) {
          const [err, context2] = args;
          getHonoIntegration()?.handleHonoException(err, context2);
          return Reflect.apply(target, thisArg, args);
        }
      })
    );
  }
}
__name(instrumentHonoErrorHandler, "instrumentHonoErrorHandler");

// src/index.ts
async function publishClickEvent(env2, request, shortCode) {
  try {
    const redis = new Redis2({
      url: env2.UPSTASH_REDIS_REST_URL,
      token: env2.UPSTASH_REDIS_REST_TOKEN
    });
    const cf = request.cf;
    const country = cf?.country || "Unknown";
    const referrer = request.headers.get("referer") || "";
    const userAgent = request.headers.get("user-agent") || "";
    await redis.xadd("click-events", "*", {
      short_code: shortCode,
      clicked_at: (/* @__PURE__ */ new Date()).toISOString(),
      country,
      referrer,
      user_agent: userAgent
    });
  } catch (err) {
    console.error("Analytics write failed", err);
  }
}
__name(publishClickEvent, "publishClickEvent");
function errorPage(title2, message, status, appUrl) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title2}</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #fafafa; color: #111; }
        .container { text-align: center; max-width: 400px; padding: 2.5rem 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); border: 1px solid #eaeaea; }
        h1 { margin-top: 0; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.025em; margin-bottom: 0.5rem; }
        p { color: #555; margin-bottom: 2rem; line-height: 1.5; font-size: 0.95rem; }
        a { display: inline-flex; align-items: center; justify-content: center; background-color: #000; color: #fff; text-decoration: none; padding: 0.625rem 1.25rem; border-radius: 6px; font-weight: 500; font-size: 0.875rem; transition: background-color 0.2s; }
        a:hover { background-color: #333; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${title2}</h1>
        <p>${message}</p>
        <a href="${appUrl}">Return to Snip</a>
      </div>
    </body>
    </html>
  `;
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}
__name(errorPage, "errorPage");
var workerConfig = {
  async fetch(request, env2, ctx) {
    const url = new URL(request.url);
    const shortCode = url.pathname.slice(1);
    const appUrl = env2.APP_URL || "http://localhost:5173";
    if (!shortCode || shortCode === "") {
      return errorPage("Not Found", "The link you are looking for does not exist.", 404, appUrl);
    }
    const cached = await env2.URL_CACHE.get(shortCode);
    if (cached) {
      const data2 = JSON.parse(cached);
      if (data2.expires_at && new Date(data2.expires_at) <= /* @__PURE__ */ new Date()) {
        return errorPage("Link Expired", "This link has expired and is no longer available.", 410, appUrl);
      }
      ctx.waitUntil(publishClickEvent(env2, request, shortCode));
      return Response.redirect(data2.long_url, 302);
    }
    const apiUrl = `${env2.API_ORIGIN_URL}/resolve/${shortCode}`;
    let apiRes;
    try {
      apiRes = await fetch(apiUrl);
    } catch {
      return errorPage("Service Unavailable", "The URL resolution service is currently unavailable.", 502, appUrl);
    }
    if (apiRes.status === 404)
      return errorPage("Not Found", "The link you are looking for does not exist.", 404, appUrl);
    if (apiRes.status === 410)
      return errorPage("Link Expired", "This link has expired and is no longer available.", 410, appUrl);
    if (!apiRes.ok)
      return errorPage("Service Error", "An unexpected error occurred while resolving the link.", 502, appUrl);
    const data = await apiRes.json();
    const ttlSeconds = data.expires_at ? Math.max(60, Math.floor((new Date(data.expires_at).getTime() - Date.now()) / 1e3)) : 86400;
    await env2.URL_CACHE.put(shortCode, JSON.stringify(data), { expirationTtl: ttlSeconds });
    ctx.waitUntil(publishClickEvent(env2, request, shortCode));
    return Response.redirect(data.long_url, 302);
  },
  async scheduled(_event, env2, _ctx) {
    const BATCH_SIZE = 50;
    const STREAM_NAME = "click-events";
    const GROUP_NAME = "snap-consumer-group";
    const CONSUMER_NAME = "edge-cron-consumer";
    try {
      const redis = new Redis2({
        url: env2.UPSTASH_REDIS_REST_URL,
        token: env2.UPSTASH_REDIS_REST_TOKEN
      });
      try {
        await redis.xgroup(STREAM_NAME, { type: "CREATE", group: GROUP_NAME, id: "0", options: { MKSTREAM: true } });
      } catch (error4) {
        if (!error4.message?.includes("BUSYGROUP")) {
          console.error("Error creating group:", error4);
        }
      }
      const res = await fetch(env2.UPSTASH_REDIS_REST_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env2.UPSTASH_REDIS_REST_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(["XREADGROUP", "GROUP", GROUP_NAME, CONSUMER_NAME, "COUNT", BATCH_SIZE, "STREAMS", STREAM_NAME, ">"])
      });
      const data = await res.json();
      if (data.error)
        throw new Error(data.error);
      const result = data.result;
      if (result && result.length > 0) {
        const stream = result[0];
        const messages = stream[1];
        if (messages.length > 0) {
          const parsedEvents = messages.map((msg) => {
            const id = msg[0];
            const fields = msg[1];
            const eventObj = { _id: id };
            if (!Array.isArray(fields) && typeof fields === "object") {
              Object.assign(eventObj, fields);
            } else if (Array.isArray(fields)) {
              for (let i = 0; i < fields.length; i += 2) {
                eventObj[fields[i]] = fields[i + 1];
              }
            }
            return eventObj;
          });
          let success = true;
          try {
            for (const e of parsedEvents) {
              if (env2.ANALYTICS_ENGINE) {
                const ua = new import_ua_parser_js.UAParser(e.user_agent || "").getResult();
                env2.ANALYTICS_ENGINE.writeDataPoint({
                  blobs: [
                    e.short_code || "",
                    e.country || "Unknown",
                    e.referrer || "",
                    ua.device.type || "desktop",
                    ua.browser.name || "unknown"
                  ],
                  doubles: [1],
                  indexes: [e.short_code || ""]
                });
              }
            }
          } catch (writeErr) {
            console.error("Error writing to analytics engine", writeErr);
            success = false;
          }
          if (success) {
            const ids = parsedEvents.map((e) => e._id);
            await redis.xack(STREAM_NAME, GROUP_NAME, ...ids);
          }
        }
      }
      try {
        const cleanupUrl = `${env2.API_ORIGIN_URL}/internal/cleanup-expired`;
        const cleanupRes = await fetch(cleanupUrl, {
          method: "POST",
          headers: {
            "x-internal-secret": env2.INTERNAL_SECRET || ""
          }
        });
        if (!cleanupRes.ok) {
          console.error("API Cleanup failed:", await cleanupRes.text());
        }
      } catch (cleanupErr) {
        console.error("API Cleanup request failed:", cleanupErr);
      }
    } catch (err) {
      console.error("Scheduled error:", err);
      throw err;
    }
  }
};
var src_default = withSentry(
  (env2) => env2.SENTRY_DSN,
  workerConfig
);

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/middleware/middleware-mock-analytics-engine.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// wrangler-config:config:middleware/mock-analytics-engine
var bindings = ["ANALYTICS_ENGINE"];

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/middleware/middleware-mock-analytics-engine.ts
var bindingsEnv = Object.fromEntries(
  bindings.map((binding2) => [
    binding2,
    {
      writeDataPoint() {
      }
    }
  ])
);
var analyticsEngine = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  for (const binding2 of bindings) {
    env2[binding2] ??= bindingsEnv[binding2];
  }
  return await middlewareCtx.next(request, env2);
}, "analyticsEngine");
var middleware_mock_analytics_engine_default = analyticsEngine;

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error4 = reduceError(e);
    return Response.json(error4, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-qjirnv/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_mock_analytics_engine_default,
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../node_modules/.pnpm/wrangler@3.114.17_@cloudflare+workers-types@4.20260702.1/node_modules/wrangler/templates/middleware/common.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-qjirnv/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
