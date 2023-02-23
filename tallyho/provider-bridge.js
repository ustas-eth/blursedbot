(() => {
  var __webpack_modules__ = {
    7116: function(module, exports) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (function(global, factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ module ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
          __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          var mod;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, (function(module) {
        "use strict";
        if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
          const wrapAPIs = extensionAPIs => {
            const apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: false
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: true
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = undefined) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = value => value && typeof value === "object" && typeof value.then === "function";
            const makeCallback = (promise, metadata) => (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) {
                promise.reject(new Error(extensionAPIs.runtime.lastError.message));
              } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                promise.resolve(callbackArgs[0]);
              } else {
                promise.resolve(callbackArgs);
              }
            };
            const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => function asyncFunctionWrapper(target, ...args) {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise(((resolve, reject) => {
                if (metadata.fallbackToNoCallback) {
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                    target[name](...args);
                    metadata.fallbackToNoCallback = false;
                    metadata.noCallback = true;
                    resolve();
                  }
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                }
              }));
            };
            const wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = Object.create(null);
              let handlers = {
                has(proxyTarget, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return undefined;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value) {
                        target[prop] = value;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = wrapperMap => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            }));
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve => {
                  wrappedSendResponse = function(response) {
                    if (!loggedSendResponseDeprecationWarning) {
                      console.warn(SEND_RESPONSE_DEPRECATION_WARNING, (new Error).stack);
                      loggedSendResponseDeprecationWarning = true;
                    }
                    didCallSendResponse = true;
                    resolve(response);
                  };
                }));
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = promise => {
                  promise.then((msg => {
                    sendResponse(msg);
                  }), (error => {
                    let message;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message = error.message;
                    } else {
                      message = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message
                    });
                  })).catch((err => {
                    console.error("Failed to send onMessage rejected reply", err);
                  }));
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            }));
            const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise(((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              }));
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
            throw new Error("This script should only be loaded in a browser extension.");
          }
          module.exports = wrapAPIs(chrome);
        } else {
          module.exports = browser;
        }
      }));
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var browser_polyfill = __webpack_require__(7116);
    var browser_polyfill_default = __webpack_require__.n(browser_polyfill);
    const WINDOW_PROVIDER_TARGET = "tally-window-provider";
    const PROVIDER_BRIDGE_TARGET = "tally-provider-bridge";
    const EXTERNAL_PORT_NAME = "tally-external";
    const INTERNAL_PORT_NAME = "tally-internal";
    function getType(arg) {
      return Object.prototype.toString.call(arg).slice("[object ".length, -1);
    }
    function runtime_typechecks_isObject(arg) {
      return getType(arg) === "Object";
    }
    function isArray(arg) {
      return Array.isArray(arg);
    }
    function isUndefined(arg) {
      return typeof arg === "undefined";
    }
    function runtime_typechecks_isString(arg) {
      return getType(arg) === "String";
    }
    function runtime_typechecks_isNumber(arg) {
      return getType(arg) === "Number";
    }
    function isMessageEvent(arg) {
      return arg instanceof MessageEvent;
    }
    function isRPCRequestParamsType(arg) {
      return runtime_typechecks_isObject(arg) || isArray(arg);
    }
    function isWindowResponseEvent(arg) {
      return isMessageEvent(arg) && runtime_typechecks_isString(arg.origin) && !isUndefined(arg.source) && runtime_typechecks_isObject(arg.data) && runtime_typechecks_isString(arg.data.id) && runtime_typechecks_isString(arg.data.target) && !isUndefined(arg.data.result);
    }
    function isPortResponseEvent(arg) {
      return runtime_typechecks_isObject(arg) && runtime_typechecks_isString(arg.id) && !isUndefined(arg.result);
    }
    const AllowedQueryParamPage = {
      signTransaction: "/sign-transaction",
      dappPermission: "/dapp-permission",
      signData: "/sign-data",
      personalSignData: "/personal-sign"
    };
    function isAllowedQueryParamPage(url) {
      return Object.values(AllowedQueryParamPage).includes(url);
    }
    function isTallyInternalCommunication(arg) {
      return runtime_typechecks_isObject(arg) && arg.id === "tallyHo";
    }
    function isTallyConfigPayload(arg) {
      return runtime_typechecks_isObject(arg) && arg.method === "tally_getConfig";
    }
    function isTallyAccountPayload(arg) {
      return runtime_typechecks_isObject(arg) && arg.method === "tally_accountChanged" && isArray(arg.address);
    }
    const EIP1193_ERROR_CODES = {
      userRejectedRequest: {
        code: 4001,
        message: "The user rejected the request."
      },
      unauthorized: {
        code: 4100,
        message: "The requested method and/or account has not been authorized by the user."
      },
      unsupportedMethod: {
        code: 4200,
        message: "The Provider does not support the requested method."
      },
      disconnected: {
        code: 4900,
        message: "The Provider is disconnected from all chains."
      },
      chainDisconnected: {
        code: 4901,
        message: "The Provider is not connected to the requested chain."
      }
    };
    class EIP1193Error extends Error {
      constructor(eip1193Error) {
        super(eip1193Error.message);
        this.eip1193Error = eip1193Error;
      }
      toJSON() {
        return this.eip1193Error;
      }
    }
    function isEIP1193ErrorCodeNumber(code) {
      return isNumber(code) && Object.values(EIP1193_ERROR_CODES).map((e => e.code)).includes(code);
    }
    function isEIP1193Error(arg) {
      return isObject(arg) && isNumber(arg.code) && isEIP1193ErrorCodeNumber(arg.code) && isString(arg.message);
    }
    const windowOriginAtLoadTime = window.location.origin;
    const INJECTED_WINDOW_PROVIDER_SOURCE = "(() => {\n  \"use strict\";\n  var __webpack_modules__ = {\n    7187: module => {\n      var R = typeof Reflect === \"object\" ? Reflect : null;\n      var ReflectApply = R && typeof R.apply === \"function\" ? R.apply : function ReflectApply(target, receiver, args) {\n        return Function.prototype.apply.call(target, receiver, args);\n      };\n      var ReflectOwnKeys;\n      if (R && typeof R.ownKeys === \"function\") {\n        ReflectOwnKeys = R.ownKeys;\n      } else if (Object.getOwnPropertySymbols) {\n        ReflectOwnKeys = function ReflectOwnKeys(target) {\n          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n        };\n      } else {\n        ReflectOwnKeys = function ReflectOwnKeys(target) {\n          return Object.getOwnPropertyNames(target);\n        };\n      }\n      function ProcessEmitWarning(warning) {\n        if (console && console.warn) console.warn(warning);\n      }\n      var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n        return value !== value;\n      };\n      function EventEmitter() {\n        EventEmitter.init.call(this);\n      }\n      module.exports = EventEmitter;\n      module.exports.once = once;\n      EventEmitter.EventEmitter = EventEmitter;\n      EventEmitter.prototype._events = undefined;\n      EventEmitter.prototype._eventsCount = 0;\n      EventEmitter.prototype._maxListeners = undefined;\n      var defaultMaxListeners = 10;\n      function checkListener(listener) {\n        if (typeof listener !== \"function\") {\n          throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n        }\n      }\n      Object.defineProperty(EventEmitter, \"defaultMaxListeners\", {\n        enumerable: true,\n        get: function() {\n          return defaultMaxListeners;\n        },\n        set: function(arg) {\n          if (typeof arg !== \"number\" || arg < 0 || NumberIsNaN(arg)) {\n            throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + \".\");\n          }\n          defaultMaxListeners = arg;\n        }\n      });\n      EventEmitter.init = function() {\n        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        }\n        this._maxListeners = this._maxListeners || undefined;\n      };\n      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n        if (typeof n !== \"number\" || n < 0 || NumberIsNaN(n)) {\n          throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + \".\");\n        }\n        this._maxListeners = n;\n        return this;\n      };\n      function _getMaxListeners(that) {\n        if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n        return that._maxListeners;\n      }\n      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n        return _getMaxListeners(this);\n      };\n      EventEmitter.prototype.emit = function emit(type) {\n        var args = [];\n        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n        var doError = type === \"error\";\n        var events = this._events;\n        if (events !== undefined) doError = doError && events.error === undefined; else if (!doError) return false;\n        if (doError) {\n          var er;\n          if (args.length > 0) er = args[0];\n          if (er instanceof Error) {\n            throw er;\n          }\n          var err = new Error(\"Unhandled error.\" + (er ? \" (\" + er.message + \")\" : \"\"));\n          err.context = er;\n          throw err;\n        }\n        var handler = events[type];\n        if (handler === undefined) return false;\n        if (typeof handler === \"function\") {\n          ReflectApply(handler, this, args);\n        } else {\n          var len = handler.length;\n          var listeners = arrayClone(handler, len);\n          for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);\n        }\n        return true;\n      };\n      function _addListener(target, type, listener, prepend) {\n        var m;\n        var events;\n        var existing;\n        checkListener(listener);\n        events = target._events;\n        if (events === undefined) {\n          events = target._events = Object.create(null);\n          target._eventsCount = 0;\n        } else {\n          if (events.newListener !== undefined) {\n            target.emit(\"newListener\", type, listener.listener ? listener.listener : listener);\n            events = target._events;\n          }\n          existing = events[type];\n        }\n        if (existing === undefined) {\n          existing = events[type] = listener;\n          ++target._eventsCount;\n        } else {\n          if (typeof existing === \"function\") {\n            existing = events[type] = prepend ? [ listener, existing ] : [ existing, listener ];\n          } else if (prepend) {\n            existing.unshift(listener);\n          } else {\n            existing.push(listener);\n          }\n          m = _getMaxListeners(target);\n          if (m > 0 && existing.length > m && !existing.warned) {\n            existing.warned = true;\n            var w = new Error(\"Possible EventEmitter memory leak detected. \" + existing.length + \" \" + String(type) + \" listeners \" + \"added. Use emitter.setMaxListeners() to \" + \"increase limit\");\n            w.name = \"MaxListenersExceededWarning\";\n            w.emitter = target;\n            w.type = type;\n            w.count = existing.length;\n            ProcessEmitWarning(w);\n          }\n        }\n        return target;\n      }\n      EventEmitter.prototype.addListener = function addListener(type, listener) {\n        return _addListener(this, type, listener, false);\n      };\n      EventEmitter.prototype.on = EventEmitter.prototype.addListener;\n      EventEmitter.prototype.prependListener = function prependListener(type, listener) {\n        return _addListener(this, type, listener, true);\n      };\n      function onceWrapper() {\n        if (!this.fired) {\n          this.target.removeListener(this.type, this.wrapFn);\n          this.fired = true;\n          if (arguments.length === 0) return this.listener.call(this.target);\n          return this.listener.apply(this.target, arguments);\n        }\n      }\n      function _onceWrap(target, type, listener) {\n        var state = {\n          fired: false,\n          wrapFn: undefined,\n          target,\n          type,\n          listener\n        };\n        var wrapped = onceWrapper.bind(state);\n        wrapped.listener = listener;\n        state.wrapFn = wrapped;\n        return wrapped;\n      }\n      EventEmitter.prototype.once = function once(type, listener) {\n        checkListener(listener);\n        this.on(type, _onceWrap(this, type, listener));\n        return this;\n      };\n      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n        checkListener(listener);\n        this.prependListener(type, _onceWrap(this, type, listener));\n        return this;\n      };\n      EventEmitter.prototype.removeListener = function removeListener(type, listener) {\n        var list, events, position, i, originalListener;\n        checkListener(listener);\n        events = this._events;\n        if (events === undefined) return this;\n        list = events[type];\n        if (list === undefined) return this;\n        if (list === listener || list.listener === listener) {\n          if (--this._eventsCount === 0) this._events = Object.create(null); else {\n            delete events[type];\n            if (events.removeListener) this.emit(\"removeListener\", type, list.listener || listener);\n          }\n        } else if (typeof list !== \"function\") {\n          position = -1;\n          for (i = list.length - 1; i >= 0; i--) {\n            if (list[i] === listener || list[i].listener === listener) {\n              originalListener = list[i].listener;\n              position = i;\n              break;\n            }\n          }\n          if (position < 0) return this;\n          if (position === 0) list.shift(); else {\n            spliceOne(list, position);\n          }\n          if (list.length === 1) events[type] = list[0];\n          if (events.removeListener !== undefined) this.emit(\"removeListener\", type, originalListener || listener);\n        }\n        return this;\n      };\n      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n        var listeners, events, i;\n        events = this._events;\n        if (events === undefined) return this;\n        if (events.removeListener === undefined) {\n          if (arguments.length === 0) {\n            this._events = Object.create(null);\n            this._eventsCount = 0;\n          } else if (events[type] !== undefined) {\n            if (--this._eventsCount === 0) this._events = Object.create(null); else delete events[type];\n          }\n          return this;\n        }\n        if (arguments.length === 0) {\n          var keys = Object.keys(events);\n          var key;\n          for (i = 0; i < keys.length; ++i) {\n            key = keys[i];\n            if (key === \"removeListener\") continue;\n            this.removeAllListeners(key);\n          }\n          this.removeAllListeners(\"removeListener\");\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n          return this;\n        }\n        listeners = events[type];\n        if (typeof listeners === \"function\") {\n          this.removeListener(type, listeners);\n        } else if (listeners !== undefined) {\n          for (i = listeners.length - 1; i >= 0; i--) {\n            this.removeListener(type, listeners[i]);\n          }\n        }\n        return this;\n      };\n      function _listeners(target, type, unwrap) {\n        var events = target._events;\n        if (events === undefined) return [];\n        var evlistener = events[type];\n        if (evlistener === undefined) return [];\n        if (typeof evlistener === \"function\") return unwrap ? [ evlistener.listener || evlistener ] : [ evlistener ];\n        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n      }\n      EventEmitter.prototype.listeners = function listeners(type) {\n        return _listeners(this, type, true);\n      };\n      EventEmitter.prototype.rawListeners = function rawListeners(type) {\n        return _listeners(this, type, false);\n      };\n      EventEmitter.listenerCount = function(emitter, type) {\n        if (typeof emitter.listenerCount === \"function\") {\n          return emitter.listenerCount(type);\n        } else {\n          return listenerCount.call(emitter, type);\n        }\n      };\n      EventEmitter.prototype.listenerCount = listenerCount;\n      function listenerCount(type) {\n        var events = this._events;\n        if (events !== undefined) {\n          var evlistener = events[type];\n          if (typeof evlistener === \"function\") {\n            return 1;\n          } else if (evlistener !== undefined) {\n            return evlistener.length;\n          }\n        }\n        return 0;\n      }\n      EventEmitter.prototype.eventNames = function eventNames() {\n        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n      };\n      function arrayClone(arr, n) {\n        var copy = new Array(n);\n        for (var i = 0; i < n; ++i) copy[i] = arr[i];\n        return copy;\n      }\n      function spliceOne(list, index) {\n        for (;index + 1 < list.length; index++) list[index] = list[index + 1];\n        list.pop();\n      }\n      function unwrapListeners(arr) {\n        var ret = new Array(arr.length);\n        for (var i = 0; i < ret.length; ++i) {\n          ret[i] = arr[i].listener || arr[i];\n        }\n        return ret;\n      }\n      function once(emitter, name) {\n        return new Promise((function(resolve, reject) {\n          function errorListener(err) {\n            emitter.removeListener(name, resolver);\n            reject(err);\n          }\n          function resolver() {\n            if (typeof emitter.removeListener === \"function\") {\n              emitter.removeListener(\"error\", errorListener);\n            }\n            resolve([].slice.call(arguments));\n          }\n          eventTargetAgnosticAddListener(emitter, name, resolver, {\n            once: true\n          });\n          if (name !== \"error\") {\n            addErrorHandlerIfEventEmitter(emitter, errorListener, {\n              once: true\n            });\n          }\n        }));\n      }\n      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n        if (typeof emitter.on === \"function\") {\n          eventTargetAgnosticAddListener(emitter, \"error\", handler, flags);\n        }\n      }\n      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n        if (typeof emitter.on === \"function\") {\n          if (flags.once) {\n            emitter.once(name, listener);\n          } else {\n            emitter.on(name, listener);\n          }\n        } else if (typeof emitter.addEventListener === \"function\") {\n          emitter.addEventListener(name, (function wrapListener(arg) {\n            if (flags.once) {\n              emitter.removeEventListener(name, wrapListener);\n            }\n            listener(arg);\n          }));\n        } else {\n          throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + typeof emitter);\n        }\n      }\n    }\n  };\n  var __webpack_module_cache__ = {};\n  function __webpack_require__(moduleId) {\n    var cachedModule = __webpack_module_cache__[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    var module = __webpack_module_cache__[moduleId] = {\n      exports: {}\n    };\n    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n    return module.exports;\n  }\n  var __webpack_exports__ = {};\n  (() => {\n    const WINDOW_PROVIDER_TARGET = \"tally-window-provider\";\n    const PROVIDER_BRIDGE_TARGET = \"tally-provider-bridge\";\n    const EXTERNAL_PORT_NAME = \"tally-external\";\n    const INTERNAL_PORT_NAME = \"tally-internal\";\n    function getType(arg) {\n      return Object.prototype.toString.call(arg).slice(\"[object \".length, -1);\n    }\n    function isObject(arg) {\n      return getType(arg) === \"Object\";\n    }\n    function isArray(arg) {\n      return Array.isArray(arg);\n    }\n    function isUndefined(arg) {\n      return typeof arg === \"undefined\";\n    }\n    function isString(arg) {\n      return getType(arg) === \"String\";\n    }\n    function isNumber(arg) {\n      return getType(arg) === \"Number\";\n    }\n    function isMessageEvent(arg) {\n      return arg instanceof MessageEvent;\n    }\n    function isRPCRequestParamsType(arg) {\n      return isObject(arg) || isArray(arg);\n    }\n    function isWindowResponseEvent(arg) {\n      return isMessageEvent(arg) && isString(arg.origin) && !isUndefined(arg.source) && isObject(arg.data) && isString(arg.data.id) && isString(arg.data.target) && !isUndefined(arg.data.result);\n    }\n    function isPortResponseEvent(arg) {\n      return isObject(arg) && isString(arg.id) && !isUndefined(arg.result);\n    }\n    const AllowedQueryParamPage = {\n      signTransaction: \"/sign-transaction\",\n      dappPermission: \"/dapp-permission\",\n      signData: \"/sign-data\",\n      personalSignData: \"/personal-sign\"\n    };\n    function isAllowedQueryParamPage(url) {\n      return Object.values(AllowedQueryParamPage).includes(url);\n    }\n    function isTallyInternalCommunication(arg) {\n      return isObject(arg) && arg.id === \"tallyHo\";\n    }\n    function isTallyConfigPayload(arg) {\n      return isObject(arg) && arg.method === \"tally_getConfig\";\n    }\n    function isTallyAccountPayload(arg) {\n      return isObject(arg) && arg.method === \"tally_accountChanged\" && isArray(arg.address);\n    }\n    const EIP1193_ERROR_CODES = {\n      userRejectedRequest: {\n        code: 4001,\n        message: \"The user rejected the request.\"\n      },\n      unauthorized: {\n        code: 4100,\n        message: \"The requested method and/or account has not been authorized by the user.\"\n      },\n      unsupportedMethod: {\n        code: 4200,\n        message: \"The Provider does not support the requested method.\"\n      },\n      disconnected: {\n        code: 4900,\n        message: \"The Provider is disconnected from all chains.\"\n      },\n      chainDisconnected: {\n        code: 4901,\n        message: \"The Provider is not connected to the requested chain.\"\n      }\n    };\n    class EIP1193Error extends Error {\n      constructor(eip1193Error) {\n        super(eip1193Error.message);\n        this.eip1193Error = eip1193Error;\n      }\n      toJSON() {\n        return this.eip1193Error;\n      }\n    }\n    function isEIP1193ErrorCodeNumber(code) {\n      return isNumber(code) && Object.values(EIP1193_ERROR_CODES).map((e => e.code)).includes(code);\n    }\n    function isEIP1193Error(arg) {\n      return isObject(arg) && isNumber(arg.code) && isEIP1193ErrorCodeNumber(arg.code) && isString(arg.message);\n    }\n    var events = __webpack_require__(7187);\n    const segmentB64 = `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`;\n    const TALLY_LOGO_SVG = `\\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"38\" height=\"38\" fill=\"none\">\\n    <path\\n      fill=\"#002825\"\\n      fill-rule=\"evenodd\"\\n      d=\"M33.501 17.822c.33.268.552.645.627 1.062.015.122.017.244.005.366-.032.096-.032.174-.032.261a3.739 3.739 0 0 1-.114.5c-.101.34-.256.663-.458.956-.038.055-.086.118-.12.161l-.027.036.008.028c.01.039.029.104.029.187.054.334.07.673.046 1.011a5.839 5.839 0 0 1-.458 1.895 4.27 4.27 0 0 1-1.176 1.63l-.06.05-.082.032c-.638.237-1.293.427-1.96.568-.684.16-1.388.229-2.091.206h-.119a20.868 20.868 0 0 0-4.476-.916 8.647 8.647 0 0 1-1.232-.174 9.54 9.54 0 0 1-1.208-.407c-.614-.22-1.24-.4-1.877-.54-.299.418-.437.93-.389 1.442.046.563.553 1.532.917 2.227l.205.395a5.365 5.365 0 0 1-.728 5.59c-.99-2.072-2.848-3.055-4.512-3.936-2.394-1.267-4.386-2.321-2.812-6.103.446-1.105.721-2.321.947-3.317.192-.846.348-1.533.541-1.86v.028a6.836 6.836 0 0 0 0 2.289c.06.355.194.693.394.993.207.273.486.484.805.609.69.273 1.42.437 2.16.485.38.055.76.055 1.145.055.203-.002.406.007.609.027.201.018.407.041.608.073.799.13 1.586.322 2.353.577.69.274 1.42.428 2.16.458 1.575.123 3.13.43 4.633.915a8.135 8.135 0 0 0 1.794-.137c.148-.028.294-.061.44-.094.066-.014.13-.03.196-.043 1.03-.302 2.206-1.9.86-1.749a7.404 7.404 0 0 0-1.112.137c-.332.068-.593.13-.813.183-.671.16-.964.23-1.75.092a7.134 7.134 0 0 0-1.716-.366 2.604 2.604 0 0 1 1.652-.403c.429.054.864.036 1.286-.055.214-.06.431-.178.666-.305.189-.101.389-.21.607-.299a5.56 5.56 0 0 1 1.922-.252 1.5 1.5 0 0 0 .39-1.3.98.98 0 0 0-.564-.407 14.32 14.32 0 0 0-.34-.068c-.678-.132-1.793-.348-2.237-.77-.306-.293-.471-1.185.609-1.432.571-.1 1.153-.12 1.73-.06.247.028.92.092 1.076-.036-.105-.364-1.291-1.013-2.472-1.66-1.035-.566-2.067-1.13-2.362-1.499a18.544 18.544 0 0 1-3.272-4.54 3.058 3.058 0 0 0-1.474-1.607c.798-.058 1.59.18 2.224.669.092.075.208.284.358.55.418.746 1.093 1.952 2.196 2a.646.646 0 0 0 .339-.06c-.546-.515-.914-1.136-1.26-1.718-.523-.882-.992-1.673-1.944-1.866l-.043-.017a6.87 6.87 0 0 1-.648-.28l-.646-.321-1.281-.623a21.62 21.62 0 0 0-2.61-1.057 13.488 13.488 0 0 0-2.713-.59 6.692 6.692 0 0 0-.66-.05c-.176 0-.35.042-.508.123-.109.045-.234.11-.359.174-.1.052-.201.103-.295.146l-.122.056c-.171.077-.343.156-.51.237-.836.405-1.625.9-2.352 1.478a6.144 6.144 0 0 0-1.42 1.396c.689-.05 1.38.04 2.033.261a7.323 7.323 0 0 0-5.195 2.532c-1.176 1.258-2.092 7.68-.76 9.378.65-.304 1.53-1.792 2.529-3.482 1.54-2.605 3.364-5.692 5.074-5.672-1.03.92-1.826 3.391-2.623 6.16-.64 2.248-2.815 7.375-4.188 7.498-.536.032-.732-.224-1.094-.746l-.302-.412a8.147 8.147 0 0 1-1.19-2.417c-.24-.848-.384-1.72-.43-2.6a16.936 16.936 0 0 1 .06-2.595c.092-.854.236-1.703.43-2.54.192-.838.441-1.663.745-2.467.083-.206.165-.408.27-.614.054-.115.115-.226.184-.334.078-.107.166-.208.26-.302a4.836 4.836 0 0 1 1.122-.796 7.56 7.56 0 0 1 1.9-.687c.208-.468.495-.898.846-1.272a8.83 8.83 0 0 1 1.13-.998 13.521 13.521 0 0 1 2.509-1.575c.21-.11.485-.233.668-.31.097-.042.199-.094.311-.152.1-.052.21-.108.33-.165.273-.13.572-.198.874-.201.26 0 .518.02.774.055.985.107 1.956.318 2.897.627.927.309 1.834.676 2.714 1.099l1.3.631.646.32c.157.086.359.163.578.247l.049.019c.238.092.457.188.695.307.13.066.253.14.371.224.113.091.22.189.32.293a6.987 6.987 0 0 1 1.001 1.398c.452.791.871 1.526 1.526 1.957l.458.302a.356.356 0 0 1-.032.073l-.096.179-.458.233a.394.394 0 0 0-.197.215.378.378 0 0 0-.027.133v.293c.002.155-.018.309-.06.458-.018.06-.04.113-.06.16a.503.503 0 0 0-.05.165.261.261 0 0 0 0 .142c.13.58 1.817 1.555 3.211 2.36.883.51 1.647.952 1.824 1.182ZM22.21 13.8c.05.636-.723 1.135-1.638 1.24-1.177.115-1.772-.53-1.639-1.345s-.44-.815-.824-.357a.064.064 0 0 1-.114-.046c.192-1.36.989-1.419 1.346-1.419 1.073.076 2.137.257 3.176.54a.161.161 0 0 1 .114.207.159.159 0 0 1-.05.072 1.153 1.153 0 0 0-.37 1.108Z\"\\n      clip-rule=\"evenodd\"\\n    />\\n  </svg>\\n`.trim();\n    const wallet_connect_WALLET_CONNECT_INJECTED_UI = `\\n<div class=\"tally-ho-injected-wc-ui\">\\n  <button>${TALLY_LOGO_SVG}Tally&nbsp;Ho!</button>\\n  <span>You are seeing this because you have Tally Ho! installed.</span>\\n  <style>\\n    @font-face {\\n      font-family: \"Segment\";\\n      font-weight: 100 400 500 900;\\n      font-style: normal italic;\\n      src: url(data:application/octet-stream;base64,${segmentB64});\\n    }\\n\\n    .tally-ho-injected-wc-ui {\\n      all: unset;\\n      max-width: 400px;\\n      margin: 16px auto 0px;\\n      background: #f4f4f4;\\n      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05),\\n        0px 8px 18px rgba(0, 0, 0, 0.05);\\n      border-radius: 12px;\\n      display: flex;\\n      justify-content: center;\\n      padding: 6px;\\n      gap: 16px;\\n      align-items: center;\\n    }\\n\\n    .tally-ho-injected-wc-ui button {\\n      all: unset;\\n      font-family: \"Segment\", \"Open Sans\", sans-serif;\\n      font-style: normal;\\n      font-weight: 500;\\n      font-size: 20px;\\n      line-height: 24px;\\n      display: flex;\\n      align-items: center;\\n      color: #0d2321;\\n      background: #ed9a26;\\n      border-radius: 8px;\\n      padding: 5px 16px 5px 8px;\\n      gap: 4px;\\n      cursor: pointer;\\n    }\\n\\n    .tally-ho-injected-wc-ui button:hover {\\n      background-color: #f0ac55;\\n      color: #013834;\\n    }\\n\\n    .tally-ho-injected-wc-ui span {\\n      all: unset;\\n      font-family: \"Segment\", \"Open Sans\", sans-serif;\\n      font-style: normal;\\n      font-weight: 500;\\n      font-size: 14px;\\n      line-height: 18px;\\n\\n      text-align: left;\\n      color: #588382;\\n    }\\n  </style>\\n</div>`.trim();\n    const wallet_connect = {};\n    const TALLY_ICON_URL = \"https://tally.cash/icons/icon-144x144.png?v=41306c4d4e6795cdeaecc31bd794f68e\";\n    const TALLY_NAME = \"Tally Ho\";\n    const METAMASK = \"MetaMask\";\n    const INJECTED = \"Injected\";\n    const observeMutations = handler => {\n      document.addEventListener(\"DOMContentLoaded\", (() => {\n        const observer = new MutationObserver((function monitorMutations(mutations) {\n          mutations.forEach((mutation => {\n            mutation.addedNodes.forEach(handler);\n          }));\n        }));\n        observer.observe(document.body, {\n          subtree: true,\n          childList: true\n        });\n      }));\n    };\n    const moreThanOneWalletInstalledAndTallyIsNotDefault = () => {\n      if (window.ethereum && Array.isArray(window.ethereum.providers) && window.ethereum.providers.length > 1) {\n        if (!window.ethereum.tallySetAsDefault) {\n          return true;\n        }\n      }\n      return false;\n    };\n    const findAndReplaceUniswapInjectedOption = () => {\n      var _maybeButton$parentEl;\n      const maybeButton = document.getElementById(\"injected\");\n      if (!!maybeButton && ((_maybeButton$parentEl = maybeButton.parentElement) === null || _maybeButton$parentEl === void 0 ? void 0 : _maybeButton$parentEl.getAttribute(\"data-testid\")) === \"option-grid\") {\n        var _maybeButton$children, _maybeButton$children2, _maybeButton$children3;\n        const iconAndTextDiv = maybeButton === null || maybeButton === void 0 ? void 0 : (_maybeButton$children = maybeButton.children) === null || _maybeButton$children === void 0 ? void 0 : (_maybeButton$children2 = _maybeButton$children[0]) === null || _maybeButton$children2 === void 0 ? void 0 : (_maybeButton$children3 = _maybeButton$children2.children) === null || _maybeButton$children3 === void 0 ? void 0 : _maybeButton$children3[0];\n        if (iconAndTextDiv && iconAndTextDiv.innerHTML.includes(\"Injected\")) {\n          iconAndTextDiv.innerHTML = iconAndTextDiv.innerHTML.replace(/\\ssrc=\"(.+)\"\\s/, ` src=\"${TALLY_ICON_URL}\" `);\n          iconAndTextDiv.innerHTML = iconAndTextDiv.innerHTML.replace(\"Injected\", TALLY_NAME);\n        }\n      }\n    };\n    const findAndReplaceJoeMetamaskOption = addedNode => {\n      var _maybeButton$children4, _maybeButton$children5, _maybeButton$children6;\n      let maybeButton = document.getElementById(\"connect-INJECTED\");\n      if (!maybeButton && !(addedNode instanceof HTMLElement)) {\n        return;\n      }\n      if (!maybeButton && addedNode instanceof HTMLElement) {\n        for (const btn of addedNode.getElementsByTagName(\"button\")) {\n          if (btn.innerText === METAMASK) {\n            maybeButton = btn;\n          }\n        }\n      }\n      if (!maybeButton) {\n        return;\n      }\n      const textNode = (_maybeButton$children4 = maybeButton.children) === null || _maybeButton$children4 === void 0 ? void 0 : (_maybeButton$children5 = _maybeButton$children4[0]) === null || _maybeButton$children5 === void 0 ? void 0 : (_maybeButton$children6 = _maybeButton$children5.children) === null || _maybeButton$children6 === void 0 ? void 0 : _maybeButton$children6[0];\n      const img = maybeButton.querySelector(\"img\");\n      if (textNode && img) {\n        textNode.textContent = TALLY_NAME;\n        img.src = TALLY_ICON_URL;\n      }\n    };\n    function findAndReplaceGMXMetamaskOption(addedNode) {\n      var _addedNode$textConten;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if ((_addedNode$textConten = addedNode.textContent) !== null && _addedNode$textConten !== void 0 && _addedNode$textConten.includes(METAMASK) && addedNode.classList.contains(\"Connect-wallet-modal\")) {\n        var _children, _children$, _children$children, _children$children$;\n        const connectionOptions = addedNode === null || addedNode === void 0 ? void 0 : (_children = addedNode.children) === null || _children === void 0 ? void 0 : (_children$ = _children[1]) === null || _children$ === void 0 ? void 0 : (_children$children = _children$.children) === null || _children$children === void 0 ? void 0 : (_children$children$ = _children$children[2]) === null || _children$children$ === void 0 ? void 0 : _children$children$.children;\n        if (!connectionOptions) {\n          return;\n        }\n        for (const option of connectionOptions) {\n          if (option.classList.contains(\"MetaMask-btn\")) {\n            option.innerHTML = option.innerHTML.replaceAll(METAMASK, TALLY_NAME);\n            option.innerHTML = option.innerHTML.replace(/\\ssrc=\"(.+)\"\\s/, ` src=\"${TALLY_ICON_URL}\" `);\n          }\n        }\n      }\n    }\n    const findYieldProtocolMetamaskContainer = node => {\n      var _children2, _children2$, _children2$children, _children2$children$, _children2$children$2, _children2$children$3, _children2$children$4, _children2$children$5, _children2$children$6, _children2$children$7, _children2$children$8, _children3, _children3$, _children3$children, _children3$children$, _children3$children$2, _children3$children$3, _children3$children$4, _children3$children$5, _children3$children$6, _children3$children$7, _children3$children$8, _children4, _children4$, _children4$children, _children4$children$, _children4$children$2;\n      return (node === null || node === void 0 ? void 0 : (_children2 = node.children) === null || _children2 === void 0 ? void 0 : (_children2$ = _children2[0]) === null || _children2$ === void 0 ? void 0 : (_children2$children = _children2$.children) === null || _children2$children === void 0 ? void 0 : (_children2$children$ = _children2$children[1]) === null || _children2$children$ === void 0 ? void 0 : (_children2$children$2 = _children2$children$.children) === null || _children2$children$2 === void 0 ? void 0 : (_children2$children$3 = _children2$children$2[4]) === null || _children2$children$3 === void 0 ? void 0 : (_children2$children$4 = _children2$children$3.children) === null || _children2$children$4 === void 0 ? void 0 : (_children2$children$5 = _children2$children$4[0]) === null || _children2$children$5 === void 0 ? void 0 : (_children2$children$6 = _children2$children$5.children) === null || _children2$children$6 === void 0 ? void 0 : (_children2$children$7 = _children2$children$6[0]) === null || _children2$children$7 === void 0 ? void 0 : (_children2$children$8 = _children2$children$7.children) === null || _children2$children$8 === void 0 ? void 0 : _children2$children$8[0]) || (node === null || node === void 0 ? void 0 : (_children3 = node.children) === null || _children3 === void 0 ? void 0 : (_children3$ = _children3[0]) === null || _children3$ === void 0 ? void 0 : (_children3$children = _children3$.children) === null || _children3$children === void 0 ? void 0 : (_children3$children$ = _children3$children[1]) === null || _children3$children$ === void 0 ? void 0 : (_children3$children$2 = _children3$children$.children) === null || _children3$children$2 === void 0 ? void 0 : (_children3$children$3 = _children3$children$2[2]) === null || _children3$children$3 === void 0 ? void 0 : (_children3$children$4 = _children3$children$3.children) === null || _children3$children$4 === void 0 ? void 0 : (_children3$children$5 = _children3$children$4[0]) === null || _children3$children$5 === void 0 ? void 0 : (_children3$children$6 = _children3$children$5.children) === null || _children3$children$6 === void 0 ? void 0 : (_children3$children$7 = _children3$children$6[0]) === null || _children3$children$7 === void 0 ? void 0 : (_children3$children$8 = _children3$children$7.children) === null || _children3$children$8 === void 0 ? void 0 : _children3$children$8[0]) || (node === null || node === void 0 ? void 0 : (_children4 = node.children) === null || _children4 === void 0 ? void 0 : (_children4$ = _children4[0]) === null || _children4$ === void 0 ? void 0 : (_children4$children = _children4$.children) === null || _children4$children === void 0 ? void 0 : (_children4$children$ = _children4$children[0]) === null || _children4$children$ === void 0 ? void 0 : (_children4$children$2 = _children4$children$.children) === null || _children4$children$2 === void 0 ? void 0 : _children4$children$2[0]);\n    };\n    function findAndReplaceYieldProtocolMetamaskOption(addedNode) {\n      var _addedNode$textConten2;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if ((_addedNode$textConten2 = addedNode.textContent) !== null && _addedNode$textConten2 !== void 0 && _addedNode$textConten2.includes(\"Metamask\")) {\n        var _container$children, _container$children2;\n        const container = findYieldProtocolMetamaskContainer(addedNode);\n        if (!container) {\n          return;\n        }\n        const metamaskText = container === null || container === void 0 ? void 0 : (_container$children = container.children) === null || _container$children === void 0 ? void 0 : _container$children[0];\n        if (!metamaskText || metamaskText.innerText !== \"Metamask\") {\n          return;\n        }\n        metamaskText.innerHTML = metamaskText.innerHTML.replace(\"Metamask\", TALLY_NAME);\n        const metamaskIcon = container === null || container === void 0 ? void 0 : (_container$children2 = container.children) === null || _container$children2 === void 0 ? void 0 : _container$children2[2];\n        if (!metamaskIcon) {\n          return;\n        }\n        metamaskIcon.removeChild(metamaskIcon.children[0]);\n        const tallyIcon = document.createElement(\"img\");\n        tallyIcon.src = TALLY_ICON_URL;\n        metamaskIcon.appendChild(tallyIcon);\n      }\n    }\n    function findAndReplaceTofuNftMetamaskOption(addedNode) {\n      var _addedNode$textConten3;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if ((_addedNode$textConten3 = addedNode.textContent) !== null && _addedNode$textConten3 !== void 0 && _addedNode$textConten3.includes(METAMASK)) {\n        var _children5, _children5$, _children5$children, _children5$children$, _children5$children$2, _children5$children$3, _children5$children$4, _children5$children$5, _children5$children$6, _children5$children$7, _children5$children$8, _children5$children$9, _children5$children$10;\n        const metaMaskContainer = addedNode === null || addedNode === void 0 ? void 0 : (_children5 = addedNode.children) === null || _children5 === void 0 ? void 0 : (_children5$ = _children5[0]) === null || _children5$ === void 0 ? void 0 : (_children5$children = _children5$.children) === null || _children5$children === void 0 ? void 0 : (_children5$children$ = _children5$children[0]) === null || _children5$children$ === void 0 ? void 0 : (_children5$children$2 = _children5$children$.children) === null || _children5$children$2 === void 0 ? void 0 : (_children5$children$3 = _children5$children$2[0]) === null || _children5$children$3 === void 0 ? void 0 : (_children5$children$4 = _children5$children$3.children) === null || _children5$children$4 === void 0 ? void 0 : (_children5$children$5 = _children5$children$4[0]) === null || _children5$children$5 === void 0 ? void 0 : (_children5$children$6 = _children5$children$5.children) === null || _children5$children$6 === void 0 ? void 0 : (_children5$children$7 = _children5$children$6[1]) === null || _children5$children$7 === void 0 ? void 0 : (_children5$children$8 = _children5$children$7.children) === null || _children5$children$8 === void 0 ? void 0 : (_children5$children$9 = _children5$children$8[0]) === null || _children5$children$9 === void 0 ? void 0 : (_children5$children$10 = _children5$children$9.children) === null || _children5$children$10 === void 0 ? void 0 : _children5$children$10[0];\n        if (!metaMaskContainer) {\n          return;\n        }\n        const textNode = metaMaskContainer.children[1];\n        if (!textNode || textNode.textContent !== METAMASK) {\n          return;\n        }\n        textNode.innerHTML = textNode.innerHTML.replace(METAMASK, TALLY_NAME);\n        metaMaskContainer.removeChild(metaMaskContainer.children[0]);\n        const tallyIcon = document.createElement(\"img\");\n        tallyIcon.src = TALLY_ICON_URL;\n        tallyIcon.setAttribute(\"height\", \"45px\");\n        tallyIcon.setAttribute(\"width\", \"45px\");\n        metaMaskContainer.appendChild(tallyIcon);\n        metaMaskContainer.appendChild(metaMaskContainer.children[0]);\n      }\n    }\n    function findAndReplaceAboardMetamaskOption(addedNode) {\n      var _children6, _children6$, _children6$children, _children6$children$, _children6$children$2, _children6$children$3, _children6$children$4, _children6$children$5, _children6$children$6;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      const maybeIconsContainer = addedNode === null || addedNode === void 0 ? void 0 : (_children6 = addedNode.children) === null || _children6 === void 0 ? void 0 : (_children6$ = _children6[0]) === null || _children6$ === void 0 ? void 0 : (_children6$children = _children6$.children) === null || _children6$children === void 0 ? void 0 : (_children6$children$ = _children6$children[0]) === null || _children6$children$ === void 0 ? void 0 : (_children6$children$2 = _children6$children$.children) === null || _children6$children$2 === void 0 ? void 0 : (_children6$children$3 = _children6$children$2[0]) === null || _children6$children$3 === void 0 ? void 0 : (_children6$children$4 = _children6$children$3.children) === null || _children6$children$4 === void 0 ? void 0 : (_children6$children$5 = _children6$children$4[1]) === null || _children6$children$5 === void 0 ? void 0 : (_children6$children$6 = _children6$children$5.children) === null || _children6$children$6 === void 0 ? void 0 : _children6$children$6[1];\n      if (!maybeIconsContainer || !maybeIconsContainer.classList.contains(\"wallets-wrapper\")) {\n        return;\n      }\n      for (const child of (_maybeIconsContainer$ = maybeIconsContainer.children) === null || _maybeIconsContainer$ === void 0 ? void 0 : (_maybeIconsContainer$2 = _maybeIconsContainer$[0]) === null || _maybeIconsContainer$2 === void 0 ? void 0 : _maybeIconsContainer$2.children) {\n        var _maybeIconsContainer$, _maybeIconsContainer$2;\n        if (child.innerHTML.includes(\"img/metamask\")) {\n          child.innerHTML = child.innerHTML.replace(/\\ssrc=\"(.+)\"\\s/, ` src=\"${TALLY_ICON_URL}\" `);\n        }\n      }\n    }\n    const createTallyImg = () => {\n      const tallyIcon = document.createElement(\"img\");\n      tallyIcon.src = TALLY_ICON_URL;\n      tallyIcon.setAttribute(\"height\", \"48px\");\n      tallyIcon.setAttribute(\"width\", \"48px\");\n      return tallyIcon;\n    };\n    function findAndReplacePancakeSwapInjectedOption(addedNode) {\n      var _addedNode$innerText;\n      if (addedNode instanceof HTMLElement && (_addedNode$innerText = addedNode.innerText) !== null && _addedNode$innerText !== void 0 && _addedNode$innerText.includes(INJECTED)) {\n        var _addedNode$children, _addedNode$children$, _addedNode$children$, _addedNode$children$2, _addedNode$children$3, _addedNode$children$4;\n        const parentElement = (_addedNode$children = addedNode.children) === null || _addedNode$children === void 0 ? void 0 : (_addedNode$children$ = _addedNode$children[1].children) === null || _addedNode$children$ === void 0 ? void 0 : (_addedNode$children$ = _addedNode$children$[0].children) === null || _addedNode$children$ === void 0 ? void 0 : (_addedNode$children$2 = _addedNode$children$[0].children) === null || _addedNode$children$2 === void 0 ? void 0 : (_addedNode$children$3 = _addedNode$children$2[1].children) === null || _addedNode$children$3 === void 0 ? void 0 : (_addedNode$children$4 = _addedNode$children$3[0].children) === null || _addedNode$children$4 === void 0 ? void 0 : _addedNode$children$4[1].children;\n        for (const element of parentElement) {\n          var _element$children;\n          const textContainer = (_element$children = element.children) === null || _element$children === void 0 ? void 0 : _element$children[1];\n          if ((textContainer === null || textContainer === void 0 ? void 0 : textContainer.innerHTML) === INJECTED) {\n            var _element$children2, _element$children2$0$;\n            const iconContainer = (_element$children2 = element.children) === null || _element$children2 === void 0 ? void 0 : (_element$children2$0$ = _element$children2[0].children) === null || _element$children2$0$ === void 0 ? void 0 : _element$children2$0$[0];\n            if (textContainer && iconContainer) {\n              textContainer.textContent = TALLY_NAME;\n              iconContainer.removeChild(iconContainer.children[0]);\n              iconContainer.appendChild(createTallyImg());\n              iconContainer.appendChild(iconContainer.children[0]);\n            }\n          }\n        }\n      }\n    }\n    function findAndReplaceStargateFinanceMetamaskOption(addedNode) {\n      var _addedNode$innerText2;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      const text = \"Metamask\";\n      if (addedNode instanceof HTMLElement && (_addedNode$innerText2 = addedNode.innerText) !== null && _addedNode$innerText2 !== void 0 && _addedNode$innerText2.includes(text)) {\n        for (const li of addedNode.getElementsByTagName(\"li\")) {\n          if (li.innerText === text) {\n            var _li$children, _li$children2, _li$children2$1$child;\n            const textContainer = (_li$children = li.children) === null || _li$children === void 0 ? void 0 : _li$children[0];\n            const iconContainer = (_li$children2 = li.children) === null || _li$children2 === void 0 ? void 0 : (_li$children2$1$child = _li$children2[1].children) === null || _li$children2$1$child === void 0 ? void 0 : _li$children2$1$child[0];\n            if (textContainer && iconContainer) {\n              textContainer.textContent = TALLY_NAME;\n              const tallyIcon = document.createElement(\"img\");\n              tallyIcon.src = TALLY_ICON_URL;\n              tallyIcon.setAttribute(\"height\", \"24px\");\n              tallyIcon.setAttribute(\"width\", \"24px\");\n              iconContainer.removeChild(iconContainer.children[0]);\n              iconContainer.appendChild(tallyIcon);\n              iconContainer.appendChild(iconContainer.children[0]);\n            }\n          }\n        }\n      }\n    }\n    function findAndReplaceCelerMetamaskOption(addedNode) {\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if (addedNode instanceof HTMLElement) {\n        var _addedNode$innerText3, _addedNode$innerText4;\n        if ((_addedNode$innerText3 = addedNode.innerText) !== null && _addedNode$innerText3 !== void 0 && _addedNode$innerText3.includes(METAMASK)) {\n          const modal = addedNode.querySelector(\".ant-spin-container\");\n          if (modal instanceof HTMLElement) {\n            for (const element of (_modal$children = modal.children) === null || _modal$children === void 0 ? void 0 : _modal$children[0].children) {\n              var _modal$children, _element$children3, _element$children3$, _element$children3$c, _element$children3$c2;\n              const textContainer = (_element$children3 = element.children) === null || _element$children3 === void 0 ? void 0 : (_element$children3$ = _element$children3[0]) === null || _element$children3$ === void 0 ? void 0 : (_element$children3$c = _element$children3$.children) === null || _element$children3$c === void 0 ? void 0 : (_element$children3$c2 = _element$children3$c[1].children) === null || _element$children3$c2 === void 0 ? void 0 : _element$children3$c2[0];\n              if (textContainer.innerHTML === METAMASK) {\n                const img = element.querySelector(\"img\");\n                if (textContainer && img) {\n                  textContainer.textContent = TALLY_NAME;\n                  img.src = TALLY_ICON_URL;\n                }\n              }\n            }\n          }\n        }\n        if (addedNode.querySelector(\"img\") && (_addedNode$innerText4 = addedNode.innerText) !== null && _addedNode$innerText4 !== void 0 && _addedNode$innerText4.includes(\"...\")) {\n          const img = addedNode.querySelector(\"img\");\n          if (img) {\n            img.src = TALLY_ICON_URL;\n          }\n        }\n      }\n    }\n    function findAndReplaceMultchainMetamaskAndInjectedOption(addedNode) {\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if (addedNode instanceof HTMLElement) {\n        const getOptionName = () => {\n          var _addedNode$innerText5, _addedNode$innerText6;\n          switch (true) {\n           case (_addedNode$innerText5 = addedNode.innerText) === null || _addedNode$innerText5 === void 0 ? void 0 : _addedNode$innerText5.includes(INJECTED):\n            return INJECTED;\n\n           case (_addedNode$innerText6 = addedNode.innerText) === null || _addedNode$innerText6 === void 0 ? void 0 : _addedNode$innerText6.includes(METAMASK):\n            return METAMASK;\n\n           default:\n            return \"\";\n          }\n        };\n        const option = getOptionName();\n        if (option) {\n          for (const btn of addedNode.getElementsByTagName(\"button\")) {\n            if (btn.innerText === option) {\n              var _btn$children, _btn$children$, _btn$children$childr;\n              const textContainer = (_btn$children = btn.children) === null || _btn$children === void 0 ? void 0 : (_btn$children$ = _btn$children[0]) === null || _btn$children$ === void 0 ? void 0 : (_btn$children$childr = _btn$children$.children) === null || _btn$children$childr === void 0 ? void 0 : _btn$children$childr[0];\n              const img = btn.querySelector(\"img\");\n              if (textContainer && img) {\n                textContainer.textContent = TALLY_NAME;\n                img.src = TALLY_ICON_URL;\n              }\n            }\n          }\n        }\n      }\n    }\n    function findAndReplaceVenusMetamaskOption(addedNode) {\n      var _addedNode$innerText7;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if (addedNode instanceof HTMLElement && (_addedNode$innerText7 = addedNode.innerText) !== null && _addedNode$innerText7 !== void 0 && _addedNode$innerText7.includes(METAMASK)) {\n        var _addedNode$innerText8;\n        if ((_addedNode$innerText8 = addedNode.innerText) !== null && _addedNode$innerText8 !== void 0 && _addedNode$innerText8.includes(\"Log out\")) {\n          const modal = addedNode.querySelector(\".venus-modal\");\n          if (modal instanceof HTMLElement) {\n            var _modal$children2, _modal$children2$1$ch, _modal$children2$1$ch2, _container$children3, _container$children3$;\n            const container = (_modal$children2 = modal.children) === null || _modal$children2 === void 0 ? void 0 : (_modal$children2$1$ch = _modal$children2[1].children) === null || _modal$children2$1$ch === void 0 ? void 0 : (_modal$children2$1$ch2 = _modal$children2$1$ch[0].children) === null || _modal$children2$1$ch2 === void 0 ? void 0 : _modal$children2$1$ch2[0];\n            const textContainer = (_container$children3 = container.children) === null || _container$children3 === void 0 ? void 0 : (_container$children3$ = _container$children3[1].children) === null || _container$children3$ === void 0 ? void 0 : _container$children3$[0];\n            if (container && textContainer) {\n              textContainer.textContent = TALLY_NAME;\n              container.removeChild(container.children[0]);\n              const img = createTallyImg();\n              img.style.marginRight = \"16px\";\n              container.appendChild(img);\n              container.appendChild(container.children[0]);\n            }\n          }\n        } else {\n          for (const btn of addedNode.getElementsByTagName(\"button\")) {\n            if (btn.innerText === METAMASK) {\n              var _btn$children2, _btn$children3;\n              const textContainer = (_btn$children2 = btn.children) === null || _btn$children2 === void 0 ? void 0 : _btn$children2[1];\n              const img = (_btn$children3 = btn.children) === null || _btn$children3 === void 0 ? void 0 : _btn$children3[0];\n              if (textContainer && img) {\n                textContainer.textContent = TALLY_NAME;\n                btn.removeChild(btn.children[0]);\n                btn.appendChild(createTallyImg());\n                btn.appendChild(btn.children[0]);\n              }\n            }\n          }\n        }\n      }\n    }\n    function findAndReplaceAlpacaFinanceMetamaskOption(addedNode) {\n      var _addedNode$innerText9;\n      if (moreThanOneWalletInstalledAndTallyIsNotDefault()) {\n        return;\n      }\n      if (addedNode instanceof HTMLElement && (_addedNode$innerText9 = addedNode.innerText) !== null && _addedNode$innerText9 !== void 0 && _addedNode$innerText9.includes(METAMASK)) {\n        for (const btn of addedNode.getElementsByTagName(\"button\")) {\n          if (btn.innerText === METAMASK) {\n            var _btn$children4, _btn$children4$, _btn$children4$child, _btn$children4$child2;\n            const textNode = (_btn$children4 = btn.children) === null || _btn$children4 === void 0 ? void 0 : (_btn$children4$ = _btn$children4[0]) === null || _btn$children4$ === void 0 ? void 0 : (_btn$children4$child = _btn$children4$.children) === null || _btn$children4$child === void 0 ? void 0 : (_btn$children4$child2 = _btn$children4$child[0].children) === null || _btn$children4$child2 === void 0 ? void 0 : _btn$children4$child2[0];\n            const img = btn.querySelector(\"img\");\n            if (textNode && img) {\n              textNode.textContent = TALLY_NAME;\n              img.src = TALLY_ICON_URL;\n            }\n          }\n        }\n      }\n    }\n    function addTallyButtonForWalletConnectModal(addedNode) {\n      var _addedNode$children2, _addedNode$children2$, _container;\n      if (!(addedNode instanceof HTMLElement)) {\n        return;\n      }\n      let container;\n      if (((_addedNode$children2 = addedNode.children) === null || _addedNode$children2 === void 0 ? void 0 : (_addedNode$children2$ = _addedNode$children2[1]) === null || _addedNode$children2$ === void 0 ? void 0 : _addedNode$children2$.className) === \"walletconnect-search__input\") {\n        container = addedNode;\n      } else if (addedNode.className === \"walletconnect-connect__button__icon_anchor\") {\n        var _addedNode$parentElem;\n        container = (_addedNode$parentElem = addedNode.parentElement) === null || _addedNode$parentElem === void 0 ? void 0 : _addedNode$parentElem.parentElement;\n      }\n      const walletButtonsWrapper = (_container = container) === null || _container === void 0 ? void 0 : _container.children[2];\n      const aWalletButton = walletButtonsWrapper === null || walletButtonsWrapper === void 0 ? void 0 : walletButtonsWrapper.children[2];\n      if (!walletButtonsWrapper || !aWalletButton) {\n        return;\n      }\n      const aUrl = new URL(aWalletButton.href);\n      const wcUri = aUrl.searchParams.get(\"uri\");\n      const injectedUI = document.createElement(\"div\");\n      injectedUI.innerHTML = WALLET_CONNECT_INJECTED_UI;\n      const tallyButton = injectedUI.querySelector(\"button\");\n      if (tallyButton) {\n        tallyButton.onclick = () => {\n          var _window, _window$tally;\n          (_window = window) === null || _window === void 0 ? void 0 : (_window$tally = _window.tally) === null || _window$tally === void 0 ? void 0 : _window$tally.send(\"tally_walletConnectInit\", [ wcUri ]);\n        };\n        walletButtonsWrapper.before(injectedUI);\n      }\n    }\n    const hostnameToHandler = {\n      \"uniswap.org\": findAndReplaceUniswapInjectedOption,\n      \"gmx.io\": findAndReplaceGMXMetamaskOption,\n      \"app.yieldprotocol.com\": findAndReplaceYieldProtocolMetamaskOption,\n      \"tofunft.com\": findAndReplaceTofuNftMetamaskOption,\n      \"aboard.exchange\": findAndReplaceAboardMetamaskOption,\n      \"traderjoexyz.com\": findAndReplaceJoeMetamaskOption,\n      \"pancakeswap.finance\": findAndReplacePancakeSwapInjectedOption,\n      \"cbridge.celer.network\": findAndReplaceCelerMetamaskOption,\n      \"stargate.finance\": findAndReplaceStargateFinanceMetamaskOption,\n      \"app.multchain.cn.com\": findAndReplaceMultchainMetamaskAndInjectedOption,\n      \"app.venus.io\": findAndReplaceVenusMetamaskOption,\n      \"app.alpacafinance.org\": findAndReplaceAlpacaFinanceMetamaskOption\n    };\n    function monitorForWalletConnectionPrompts() {\n      Object.keys(hostnameToHandler).forEach((hostname => {\n        if (window.location.hostname.includes(hostname)) {\n          observeMutations(hostnameToHandler[hostname]);\n        }\n      }));\n      if (false) {}\n    }\n    function _defineProperty(obj, key, value) {\n      if (key in obj) {\n        Object.defineProperty(obj, key, {\n          value,\n          enumerable: true,\n          configurable: true,\n          writable: true\n        });\n      } else {\n        obj[key] = value;\n      }\n      return obj;\n    }\n    const impersonateMetamaskWhitelist = [ \"traderjoexyz.com\", \"transferto.xyz\", \"opensea.io\", \"staking.polygon.technology\", \"gmx.io\", \"app.lyra.finance\", \"matcha.xyz\", \"bridge.umbria.network\", \"galaxy.eco\", \"galxe.com\", \"dydx.exchange\", \"app.euler.finance\", \"kwenta.io\", \"stargate.finance\", \"etherscan.io\", \"swapr.eth.link\", \"apex.exchange\", \"app.yieldprotocol.com\", \"tofunft.com\", \"aboard.exchange\", \"portal.zksync.io\", \"blur.io\", \"app.benqi.fi\", \"snowtrace.io\", \"core.app\", \"cbridge.celer.network\", \"stargate.finance\", \"app.multchain.cn\", \"app.venus.io\", \"app.alpacafinance.org\", \"pancakeswap.finance\", \"liquidifty.io\", \"ankr.com\", \"mint.xencrypto.io\", \"bscscan.com\", \"alchemy.com\", \"cow.fi\" ];\n    const METAMASK_STATE_MOCK = {\n      accounts: null,\n      isConnected: false,\n      isUnlocked: false,\n      initialized: false,\n      isPermanentlyDisconnected: false\n    };\n    class TallyWindowProvider extends events.EventEmitter {\n      constructor(transport) {\n        super();\n        _defineProperty(this, \"chainId\", \"0x1\");\n        _defineProperty(this, \"connected\", false);\n        _defineProperty(this, \"isTally\", true);\n        _defineProperty(this, \"isMetaMask\", false);\n        _defineProperty(this, \"tallySetAsDefault\", false);\n        _defineProperty(this, \"isWeb3\", true);\n        _defineProperty(this, \"requestResolvers\", new Map);\n        _defineProperty(this, \"providerInfo\", {\n          label: \"Tally Ho!\",\n          injectedNamespace: \"tally\",\n          iconURL: \"TODO\",\n          identityFlag: \"isTally\",\n          checkIdentity: provider => !!provider && !!provider.isTally\n        });\n        _defineProperty(this, \"requestID\", 0n);\n        this.transport = transport;\n        const internalListener = event => {\n          let result;\n          if (isWindowResponseEvent(event) && isTallyInternalCommunication(event.data)) {\n            if (event.origin !== this.transport.origin || event.source !== window || event.data.target !== WINDOW_PROVIDER_TARGET) {\n              return;\n            }\n            ({result} = event.data);\n          } else if (isPortResponseEvent(event) && isTallyInternalCommunication(event)) {\n            ({result} = event);\n          } else {\n            return;\n          }\n          if (isTallyConfigPayload(result)) {\n            var _window$walletRouter;\n            (_window$walletRouter = window.walletRouter) === null || _window$walletRouter === void 0 ? void 0 : _window$walletRouter.shouldSetTallyForCurrentProvider(result.defaultWallet, result.shouldReload);\n            const currentHost = window.location.host;\n            if (impersonateMetamaskWhitelist.some((host => currentHost.includes(host)))) {\n              this.isMetaMask = result.defaultWallet;\n              if (this.isMetaMask && currentHost.includes(\"core.app\")) {\n                this._state = METAMASK_STATE_MOCK;\n              }\n              this.tallySetAsDefault = result.defaultWallet;\n            }\n            if (result.chainId && result.chainId !== this.chainId) {\n              this.handleChainIdChange(result.chainId);\n            }\n          } else if (isTallyAccountPayload(result)) {\n            this.handleAddressChange(result.address);\n          }\n        };\n        this.request = this.request.bind(this);\n        monitorForWalletConnectionPrompts();\n        this.transport.addEventListener(internalListener);\n        this.transport.addEventListener(this.internalBridgeListener.bind(this));\n      }\n      internalBridgeListener(event) {\n        let id;\n        let result;\n        if (isWindowResponseEvent(event)) {\n          if (event.origin !== this.transport.origin || event.source !== window || event.data.target !== WINDOW_PROVIDER_TARGET) {\n            return;\n          }\n          ({id, result} = event.data);\n        } else if (isPortResponseEvent(event)) {\n          ({id, result} = event);\n        } else {\n          return;\n        }\n        const requestResolver = this.requestResolvers.get(id);\n        if (!requestResolver) return;\n        const {sendData, reject, resolve} = requestResolver;\n        this.requestResolvers.delete(sendData.id);\n        const {method: sentMethod} = sendData.request;\n        if (isEIP1193Error(result)) {\n          reject(result);\n        }\n        if (!this.connected) {\n          this.connected = true;\n          this.emit(\"connect\", {\n            chainId: this.chainId\n          });\n        }\n        switch (sentMethod) {\n         case \"wallet_switchEthereumChain\":\n         case \"wallet_addEthereumChain\":\n          if (result === null) {\n            this.handleChainIdChange(sendData.request.params[0].chainId);\n          }\n          break;\n\n         case \"eth_chainId\":\n         case \"net_version\":\n          if (typeof result === \"string\" && Number(this.chainId) !== Number(result)) {\n            this.handleChainIdChange(result);\n          }\n          break;\n\n         case \"eth_accounts\":\n         case \"eth_requestAccounts\":\n          if (Array.isArray(result) && result.length !== 0) {\n            this.handleAddressChange(result);\n          }\n          break;\n\n         default:\n          break;\n        }\n        resolve(result);\n      }\n      async enable() {\n        return this.request({\n          method: \"eth_requestAccounts\"\n        });\n      }\n      isConnected() {\n        return this.connected;\n      }\n      send(methodOrRequest, paramsOrCallback) {\n        if (typeof methodOrRequest === \"string\" && typeof paramsOrCallback !== \"function\") {\n          return this.request({\n            method: methodOrRequest,\n            params: paramsOrCallback\n          });\n        }\n        if (isObject(methodOrRequest) && typeof paramsOrCallback === \"function\") {\n          return this.sendAsync(methodOrRequest, paramsOrCallback);\n        }\n        return Promise.reject(new Error(\"Unsupported function parameters\"));\n      }\n      sendAsync(request, callback) {\n        return this.request(request).then((response => callback(null, {\n          result: response,\n          id: request.id,\n          jsonrpc: request.jsonrpc\n        })), (error => callback(error, null)));\n      }\n      request(arg) {\n        const {method, params = []} = arg;\n        if (typeof method !== \"string\") {\n          return Promise.reject(new Error(`unsupported method type: ${method}`));\n        }\n        const sendData = {\n          id: this.requestID.toString(),\n          target: PROVIDER_BRIDGE_TARGET,\n          request: {\n            method,\n            params\n          }\n        };\n        this.requestID += 1n;\n        this.transport.postMessage(sendData);\n        return new Promise(((resolve, reject) => {\n          this.requestResolvers.set(sendData.id, {\n            resolve,\n            reject,\n            sendData\n          });\n        }));\n      }\n      handleChainIdChange(chainId) {\n        this.chainId = chainId;\n        this.emit(\"chainChanged\", chainId);\n        this.emit(\"networkChanged\", Number(chainId).toString());\n      }\n      handleAddressChange(address) {\n        if (this.selectedAddress !== address[0]) {\n          this.selectedAddress = address[0];\n          this.emit(\"accountsChanged\", address);\n        }\n      }\n    }\n    Object.defineProperty(window, \"tally\", {\n      value: new TallyWindowProvider({\n        postMessage: data => window.postMessage(data, window.location.origin),\n        addEventListener: fn => window.addEventListener(\"message\", fn, false),\n        removeEventListener: fn => window.removeEventListener(\"message\", fn, false),\n        origin: window.location.origin\n      }),\n      writable: false,\n      configurable: false\n    });\n    if (!window.walletRouter) {\n      Object.defineProperty(window, \"walletRouter\", {\n        value: {\n          currentProvider: window.tally,\n          lastInjectedProvider: window.ethereum,\n          tallyProvider: window.tally,\n          providers: [ ...new Set([ window.tally, ...window.ethereum ? Array.isArray(window.ethereum.providers) ? [ ...window.ethereum.providers, window.ethereum ] : [ window.ethereum ] : [], window.tally ]) ],\n          shouldSetTallyForCurrentProvider(shouldSetTally, shouldReload = false) {\n            if (shouldSetTally && this.currentProvider !== this.tallyProvider) {\n              this.currentProvider = this.tallyProvider;\n            } else if (!shouldSetTally && this.currentProvider === this.tallyProvider) {\n              this.currentProvider = this.lastInjectedProvider ?? this.tallyProvider;\n            }\n            if (shouldReload && (window.location.href.includes(\"app.uniswap.org\") || window.location.href.includes(\"galxe.com\"))) {\n              setTimeout((() => {\n                window.location.reload();\n              }), 1e3);\n            }\n          },\n          getProviderInfo(provider) {\n            return provider.providerInfo || {\n              label: \"Injected Provider\",\n              injectedNamespace: \"ethereum\",\n              iconURL: \"TODO\"\n            };\n          },\n          setSelectedProvider() {},\n          addProvider(newProvider) {\n            if (!this.providers.includes(newProvider)) {\n              this.providers.push(newProvider);\n            }\n            this.lastInjectedProvider = newProvider;\n          }\n        },\n        writable: false,\n        configurable: false\n      });\n    }\n    let cachedWindowEthereumProxy;\n    let cachedCurrentProvider;\n    Object.defineProperty(window, \"ethereum\", {\n      get() {\n        if (!window.walletRouter) {\n          throw new Error(\"window.walletRouter is expected to be set to change the injected provider on window.ethereum.\");\n        }\n        if (cachedWindowEthereumProxy && cachedCurrentProvider === window.walletRouter.currentProvider) {\n          return cachedWindowEthereumProxy;\n        }\n        cachedWindowEthereumProxy = new Proxy(window.walletRouter.currentProvider, {\n          get(target, prop, receiver) {\n            if (window.walletRouter && !(prop in window.walletRouter.currentProvider) && prop in window.walletRouter) {\n              if ((window.location.href.includes(\"app.uniswap.org\") || window.location.href.includes(\"kwenta.io\") || window.location.href.includes(\"galxe.com\")) && prop === \"providers\") {\n                return null;\n              }\n              return window.walletRouter[prop];\n            }\n            return Reflect.get(target, prop, receiver);\n          }\n        });\n        cachedCurrentProvider = window.walletRouter.currentProvider;\n        return cachedWindowEthereumProxy;\n      },\n      set(newProvider) {\n        var _window$walletRouter;\n        (_window$walletRouter = window.walletRouter) === null || _window$walletRouter === void 0 ? void 0 : _window$walletRouter.addProvider(newProvider);\n      },\n      configurable: false\n    });\n  })();\n})();\n//# sourceMappingURL=window-provider.js.map";
    function connectProviderBridge() {
      const port = browser_polyfill_default().runtime.connect({
        name: EXTERNAL_PORT_NAME
      });
      window.addEventListener("message", (event => {
        if (event.origin === windowOriginAtLoadTime && event.source === window && event.data.target === PROVIDER_BRIDGE_TARGET) {
          if (event.data.request.method === "eth_requestAccounts" || event.data.request.method === "eth_accounts") {
            const faviconElements = window.document.querySelectorAll("link[rel*='icon']");
            const largestFavicon = [ ...faviconElements ].sort((el => {
              var _el$sizes;
              return parseInt((_el$sizes = el.sizes) === null || _el$sizes === void 0 ? void 0 : _el$sizes.toString().split("x")[0], 10);
            }))[0];
            const faviconUrl = (largestFavicon === null || largestFavicon === void 0 ? void 0 : largestFavicon.href) ?? "";
            const {title} = window.document ?? "";
            event.data.request.params.push(title, faviconUrl);
          }
          console.log(`%c content: inpage > background: ${JSON.stringify(event.data)}`, "background: #bada55; color: #222");
          port.postMessage(event.data);
        }
      }));
      port.onMessage.addListener((data => {
        console.log(`%c content: background > inpage: ${JSON.stringify(data)}`, "background: #222; color: #bada55");
        window.postMessage({
          ...data,
          target: WINDOW_PROVIDER_TARGET
        }, windowOriginAtLoadTime);
      }));
      port.postMessage({
        request: {
          method: "tally_getConfig",
          origin: windowOriginAtLoadTime
        }
      });
    }
    function injectTallyWindowProvider() {
      if (document.contentType !== "text/html") return;
      try {
        const container = document.head || document.documentElement;
        const scriptTag = document.createElement("script");
        scriptTag.setAttribute("async", "false");
        scriptTag.textContent = INJECTED_WINDOW_PROVIDER_SOURCE;
        container.insertBefore(scriptTag, container.children[0]);
      } catch (e) {
        throw new Error(`Tally: oh nos the content-script failed to initilaize the Tally window provider.\n        ${e}\n        It's time for a seppuku...🗡`);
      }
    }
    injectTallyWindowProvider();
    connectProviderBridge();
  })();
})();
//# sourceMappingURL=provider-bridge.js.map