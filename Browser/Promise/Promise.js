!function () {
    delete Promise;
    let promiseCallbackLog = rsvm.log;
    Object.defineProperty(window, "Promise", {
        value: rsvm.RsCreateConstructor("Promise", 1, function Promise() {
            return rsvm.prototype.Promise.new.apply(null, arguments);
        }),
        writable: true, enumerable: false, configurable: true
    });

    rsvm.prototype.Promise = {
        memory: {},
        malloc(target) {
            rsvm.mallocBaseMemory("Promise", target);
        },
        new(executor) {
            let obj = rsvm.RsCreate(Promise.prototype);
            // 调试时打开,可以更好的看到结果
            // Object.defineProperty(obj, "promiseState", {
            //     get: rsvm.RsCreateGetter("promiseState", function () {
            //         return rsvm.get(this, "promiseState");
            //     }), set: undefined, enumerable: true, configurable: false
            // });
            // Object.defineProperty(obj, "promiseResult", {
            //     get: rsvm.RsCreateGetter("promiseResult", function () {
            //         return rsvm.get(this, "promiseResult");
            //     }), set: undefined, enumerable: true, configurable: false
            // });
            rsvm.set(obj, "promiseState", "pending");
            rsvm.set(obj, "promiseResult", undefined);
            rsvm.set(obj, "promiseFulfillReactions", []);
            rsvm.set(obj, "promiseRejectReactions", []);

            const resolve = (data) => {
                if (rsvm.get(obj, "promiseState") === 'pending') {
                    rsvm.set(obj, "promiseState", "fulfilled");
                    rsvm.set(obj, "promiseResult", data);
                    rsvm.get(obj, "promiseFulfillReactions").forEach(fn => fn());
                }
            };

            const reject = (data) => {
                if (rsvm.get(obj, "promiseState") === 'pending') {
                    rsvm.set(obj, "promiseState", "rejected");
                    rsvm.set(obj, "promiseResult", data);
                    rsvm.get(obj, "promiseRejectReactions").forEach(fn => fn());
                }
            };
            try {
                // 回调执行,日志需要打开
                rsvm.log = promiseCallbackLog;
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
            return obj;
        }
    }

    Object.defineProperties(Promise, {
        prototype: { value: Promise.prototype, writable: false, enumerable: false, configurable: false },
        all: {
            value: rsvm.RsCreateStaticFunction("all", 1, function all(promises) {
                // 成功返回所有的结果,失败则返回第一个被拒绝的
                return new Promise((resolve, reject) => {
                    if (!Array.isArray(promises)) {
                        return reject(new TypeError('The first argument must be an array'));
                    }
                    if (promises.length === 0) {
                        return resolve([]);
                    }
                    const results = [];
                    let completed = 0;
                    for (let i = 0; i < promises.length; i++) {
                        Promise.resolve(promises[i])
                            .then((value) => {
                                results[i] = value;
                                completed++;
                                if (completed === promises.length) {
                                    resolve(results);
                                }
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    }
                });
            }), writable: true, enumerable: false, configurable: true
        },
        allSettled: {
            value: rsvm.RsCreateStaticFunction("allSettled", 1, function allSettled(promises) {
                // 返回所有结果
                return new Promise((resolve) => {
                    if (!Array.isArray(promises)) {
                        return resolve([{ status: 'rejected', reason: new TypeError('The first argument must be an array') }]);
                    }
                    if (promises.length === 0) {
                        return resolve([]);
                    }
                    const results = [];
                    let completed = 0;
                    for (let i = 0; i < promises.length; i++) {
                        Promise.resolve(promises[i])
                            .then((value) => {
                                results[i] = { status: 'resolved', value };
                                completed++;
                                if (completed === promises.length) {
                                    resolve(results);
                                }
                            })
                            .catch((error) => {
                                results[i] = { status: 'rejected', reason: error };
                                completed++;
                                if (completed === promises.length) {
                                    resolve(results);
                                }
                            });
                    }
                });
            }), writable: true, enumerable: false, configurable: true
        },
        any: {
            value: rsvm.RsCreateStaticFunction("any", 1, function any(promises) {
                // 返回第一个执行完的,所有决绝它会以一个包含拒绝原因数组的
                return new Promise((resolve, reject) => {
                    if (!Array.isArray(promises)) {
                        return reject(new TypeError('The first argument must be an array'));
                    }
                    if (promises.length === 0) {
                        return reject(new TypeError('Promise.any requires at least one promise'));
                    }
                    let errorCount = 0;
                    for (let i = 0; i < promises.length; i++) {
                        Promise.resolve(promises[i])
                            .then((value) => {
                                resolve(value);
                            })
                            .catch((error) => {
                                errorCount++;
                                if (errorCount === promises.length) {
                                    reject(new AggregateError('All promises were rejected', promises.map(p => p.catch(() => { }))));
                                }
                            });
                    }
                });
            }), writable: true, enumerable: false, configurable: true
        },
        race: {
            value: rsvm.RsCreateStaticFunction("race", 1, function race(promises) {
                // 谁先执行完就返回谁
                return new Promise((resolve, reject) => {
                    if (!Array.isArray(promises)) {
                        return reject(new TypeError('The first argument must be an array'));
                    }
                    if (promises.length === 0) {
                        return reject(new TypeError('Promise.race requires at least one promise'));
                    }
                    for (let i = 0; i < promises.length; i++) {
                        Promise.resolve(promises[i])
                            .then((value) => {
                                resolve(value);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    }
                });
            }), writable: true, enumerable: false, configurable: true
        },
        resolve: {
            value: rsvm.RsCreateStaticFunction("resolve", 1, function resolve(value) {
                // 返回一个成功的promise
                if (value instanceof Promise) return value;
                return new Promise(resolve => resolve(value));
            }), writable: true, enumerable: false, configurable: true
        },
        reject: {
            value: rsvm.RsCreateStaticFunction("reject", 1, function reject(reason) {
                // 返回一个失败的promise
                return new Promise((_, reject) => reject(reason));
            }), writable: true, enumerable: false, configurable: true
        },
        withResolvers: {
            value: rsvm.RsCreateStaticFunction("withResolvers", 0, function withResolvers() {
                // 返回一个普通对象
                let resolve;
                let reject;
                const promise = new Promise((_resolve, _reject) => {
                    resolve = _resolve;
                    reject = _reject;
                });

                return {
                    promise,
                    resolve,
                    reject
                };
            }), writable: true, enumerable: false, configurable: true
        },
        try: {
            value: rsvm.RsCreateStaticFunction("try", 1, function tryAction() {
                let fn = arguments[0];
                let args = arguments.shift();
                return new Promise((resolve, reject) => {
                    try {
                        const result = fn(args);
                        if (result && typeof result.then === 'function') {
                            result.then(resolve).catch(reject);
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            }), writable: true, enumerable: false, configurable: true
        },
    });
    
    
    Object.defineProperties(Promise.prototype, {
        constructor: { writable: true, enumerable: false, configurable: true, value: Promise },
        then: {
            value: rsvm.RsCreateAction("then", 2, function then(onFulfilled, onRejected) {
                // 值传递
                onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
                // 异常穿透
                onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
                let self = this;
                return new Promise((resolve, reject) => {
                    function handle(callback) {
                        try {
                            // 获取执行结果
                            const x = callback(rsvm.get(self, "promiseResult"));
                            // 改变状态
                            if (x instanceof Promise) {
                                x.then(v => {
                                    resolve(v);
                                }, r => {
                                    reject(r);
                                });
                            } else {
                                resolve(x);
                            }
                        } catch (e) {
                            reject(e);
                        }
                    }
                    if (rsvm.get(self, "promiseState") === 'fulfilled') {
                        handle(onFulfilled);
                    }

                    if (rsvm.get(self, "promiseState") === 'rejected') {
                        handle(onRejected);
                    }

                    if (rsvm.get(self, "promiseState") === 'pending') {
                        rsvm.get(self, "promiseFulfillReactions").push(() => {
                            handle(onFulfilled);
                        });
                        rsvm.get(self, "promiseRejectReactions").push(() => {
                            handle(onRejected);
                        });
                    }
                });
            }), writable: true, enumerable: false, configurable: true,
        },
        catch: {
            value: rsvm.RsCreateAction("catch", 1, function catchAction(onRejected) {
                return this.then(undefined, onRejected);
            }), writable: true, enumerable: false, configurable: true,
        },
        finally: {
            value: rsvm.RsCreateAction("finally", 1, function finallyAction(onFinally) {
                return this.then(
                    value => Promise.resolve(onFinally()).then(() => value),
                    reason => Promise.resolve(onFinally()).then(() => { throw reason })
                );
            }), writable: true, enumerable: false, configurable: true,
        },
        [Symbol.toStringTag]: { value: "Promise", writable: false, enumerable: false, configurable: true, },
    });
}();
