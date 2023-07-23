var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var keycloak_cjs_exports = {};
__export(keycloak_cjs_exports, {
  Keycloak: () => lib_default
});
module.exports = __toCommonJS(keycloak_cjs_exports);

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/_isPrototype.js
var objectProto5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty7.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty8.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto11 = Object.prototype;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty9.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map = getNative_default(root_default, "Map");
var Map_default = Map;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;

// node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
}
var flatRest_default = flatRest;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag2 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto12 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty10 = objectProto12.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty10.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default = baseAssign;

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default = baseAssignIn;

// node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer3 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto13 = Object.prototype;
var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default = copySymbols;

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
  var result = [];
  while (object) {
    arrayPush_default(result, getSymbols_default(object));
    object = getPrototype_default(object);
  }
  return result;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default = copySymbolsIn;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set = getNative_default(root_default, "Set");
var Set_default = Set;

// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag3 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_initCloneArray.js
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var initCloneArray_default = initCloneArray;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default = cloneDataView;

// node_modules/lodash-es/_cloneRegExp.js
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var cloneRegExp_default = cloneRegExp;

// node_modules/lodash-es/_cloneSymbol.js
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var cloneSymbol_default = cloneSymbol;

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneByTag.js
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object);
    case dataViewTag3:
      return cloneDataView_default(object, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object);
    case regexpTag2:
      return cloneRegExp_default(object);
    case setTag3:
      return new Ctor();
    case symbolTag2:
      return cloneSymbol_default(object);
  }
}
var initCloneByTag_default = initCloneByTag;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/_baseIsMap.js
var mapTag4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var baseIsMap_default = baseIsMap;

// node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
var isMap_default = isMap;

// node_modules/lodash-es/_baseIsSet.js
var setTag4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var baseIsSet_default = baseIsSet;

// node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
var isSet_default = isSet;

// node_modules/lodash-es/_baseClone.js
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag3 = "[object Boolean]";
var dateTag3 = "[object Date]";
var errorTag2 = "[object Error]";
var funcTag3 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag5 = "[object Map]";
var numberTag3 = "[object Number]";
var objectTag4 = "[object Object]";
var regexpTag3 = "[object RegExp]";
var setTag5 = "[object Set]";
var stringTag3 = "[object String]";
var symbolTag3 = "[object Symbol]";
var weakMapTag3 = "[object WeakMap]";
var arrayBufferTag3 = "[object ArrayBuffer]";
var dataViewTag4 = "[object DataView]";
var float32Tag3 = "[object Float32Array]";
var float64Tag3 = "[object Float64Array]";
var int8Tag3 = "[object Int8Array]";
var int16Tag3 = "[object Int16Array]";
var int32Tag3 = "[object Int32Array]";
var uint8Tag3 = "[object Uint8Array]";
var uint8ClampedTag3 = "[object Uint8ClampedArray]";
var uint16Tag3 = "[object Uint16Array]";
var uint32Tag3 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var baseClone_default = baseClone;

// node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
}
var parent_default = parent;

// node_modules/lodash-es/isUndefined.js
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_default = isUndefined;

// node_modules/lodash-es/_baseUnset.js
function baseUnset(object, path) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  return object == null || delete object[toKey_default(last_default(path))];
}
var baseUnset_default = baseUnset;

// node_modules/lodash-es/_customOmitClone.js
function customOmitClone(value) {
  return isPlainObject_default(value) ? void 0 : value;
}
var customOmitClone_default = customOmitClone;

// node_modules/lodash-es/omit.js
var CLONE_DEEP_FLAG2 = 1;
var CLONE_FLAT_FLAG2 = 2;
var CLONE_SYMBOLS_FLAG2 = 4;
var omit = flatRest_default(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap_default(paths, function(path) {
    path = castPath_default(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject_default(object, getAllKeysIn_default(object), result);
  if (isDeep) {
    result = baseClone_default(result, CLONE_DEEP_FLAG2 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG2, customOmitClone_default);
  }
  var length = paths.length;
  while (length--) {
    baseUnset_default(result, paths[length]);
  }
  return result;
});
var omit_default = omit;

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result, castPath_default(path, object), value);
    }
  }
  return result;
}
var basePickBy_default = basePickBy;

// node_modules/lodash-es/_basePick.js
function basePick(object, paths) {
  return basePickBy_default(object, paths, function(value, path) {
    return hasIn_default(object, path);
  });
}
var basePick_default = basePick;

// node_modules/lodash-es/pick.js
var pick = flatRest_default(function(object, paths) {
  return object == null ? {} : basePick_default(object, paths);
});
var pick_default = pick;

// node_modules/url-join/lib/url-join.js
function normalize(strArray) {
  var resultArray = [];
  if (strArray.length === 0) {
    return "";
  }
  if (typeof strArray[0] !== "string") {
    throw new TypeError("Url must be a string. Received " + strArray[0]);
  }
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    var first = strArray.shift();
    strArray[0] = first + strArray[0];
  }
  if (strArray[0].match(/^file:\/\/\//)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1:///");
  } else {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1://");
  }
  for (var i = 0; i < strArray.length; i++) {
    var component = strArray[i];
    if (typeof component !== "string") {
      throw new TypeError("Url must be a string. Received " + component);
    }
    if (component === "") {
      continue;
    }
    if (i > 0) {
      component = component.replace(/^[\/]+/, "");
    }
    if (i < strArray.length - 1) {
      component = component.replace(/[\/]+$/, "");
    } else {
      component = component.replace(/[\/]+$/, "/");
    }
    resultArray.push(component);
  }
  var str = resultArray.join("/");
  str = str.replace(/\/(\?|&|#[^!])/g, "$1");
  var parts = str.split("?");
  str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&");
  return str;
}
function urlJoin() {
  var input;
  if (typeof arguments[0] === "object") {
    input = arguments[0];
  } else {
    input = [].slice.call(arguments);
  }
  return normalize(input);
}

// node_modules/url-template/lib/url-template.js
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(encodeValue(operator, value2, isKeyOperator(operator) ? key : null));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        var tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
function parseTemplate(template) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return {
    expand: function(context) {
      return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
        if (expression) {
          var operator = null, values = [];
          if (operators.indexOf(expression.charAt(0)) !== -1) {
            operator = expression.charAt(0);
            expression = expression.substr(1);
          }
          expression.split(/,/g).forEach(function(variable) {
            var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
            values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
          });
          if (operator && operator !== "+") {
            var separator = ",";
            if (operator === "?") {
              separator = "&";
            } else if (operator !== "#") {
              separator = operator;
            }
            return (values.length !== 0 ? operator : "") + values.join(separator);
          } else {
            return values.join(",");
          }
        } else {
          return encodeReserved(literal);
        }
      });
    }
  };
}

// node_modules/@keycloak/keycloak-admin-client/lib/utils/fetchWithError.js
var NetworkError = class extends Error {
  response;
  responseData;
  constructor(message, options) {
    super(message);
    this.response = options.response;
    this.responseData = options.responseData;
  }
};
async function fetchWithError(input, init) {
  const response = await fetch(input, init);
  if (!response.ok) {
    const responseData = await parseResponse(response);
    throw new NetworkError("Network response was not OK.", {
      response,
      responseData
    });
  }
  return response;
}
async function parseResponse(response) {
  if (!response.body) {
    return "";
  }
  const data = await response.text();
  try {
    return JSON.parse(data);
  } catch (error) {
  }
  return data;
}

// node_modules/@keycloak/keycloak-admin-client/lib/utils/stringifyQueryParams.js
function stringifyQueryParams(params) {
  return new URLSearchParams(Object.entries(params).filter((param) => {
    const [, value] = param;
    if (typeof value === "undefined" || value === null) {
      return false;
    }
    if (typeof value === "string" && value.length === 0) {
      return false;
    }
    if (Array.isArray(value) && value.length === 0) {
      return false;
    }
    return true;
  })).toString();
}

// node_modules/@keycloak/keycloak-admin-client/lib/resources/agent.js
var SLASH = "/";
var Agent = class {
  client;
  basePath;
  getBaseParams;
  getBaseUrl;
  constructor({ client, path = "/", getUrlParams = () => ({}), getBaseUrl = () => client.baseUrl }) {
    this.client = client;
    this.getBaseParams = getUrlParams;
    this.getBaseUrl = getBaseUrl;
    this.basePath = path;
  }
  request({ method, path = "", urlParamKeys = [], queryParamKeys = [], catchNotFound = false, keyTransform, payloadKey, returnResourceIdInLocationHeader, ignoredKeys, headers }) {
    return async (payload = {}, options) => {
      const baseParams = this.getBaseParams?.() ?? {};
      const queryParams = queryParamKeys.length > 0 ? pick_default(payload, queryParamKeys) : void 0;
      const allUrlParamKeys = [...Object.keys(baseParams), ...urlParamKeys];
      const urlParams = { ...baseParams, ...pick_default(payload, allUrlParamKeys) };
      if (!(payload instanceof FormData)) {
        const omittedKeys = ignoredKeys ? [...allUrlParamKeys, ...queryParamKeys].filter((key) => !ignoredKeys.includes(key)) : [...allUrlParamKeys, ...queryParamKeys];
        payload = omit_default(payload, omittedKeys);
      }
      if (keyTransform) {
        this.transformKey(payload, keyTransform);
        this.transformKey(queryParams, keyTransform);
      }
      return this.requestWithParams({
        method,
        path,
        payload,
        urlParams,
        queryParams,
        // catchNotFound precedence: global > local > default
        catchNotFound,
        ...this.client.getGlobalRequestArgOptions() ?? options ?? {},
        payloadKey,
        returnResourceIdInLocationHeader,
        headers
      });
    };
  }
  updateRequest({ method, path = "", urlParamKeys = [], queryParamKeys = [], catchNotFound = false, keyTransform, payloadKey, returnResourceIdInLocationHeader, headers }) {
    return async (query = {}, payload = {}) => {
      const baseParams = this.getBaseParams?.() ?? {};
      const queryParams = queryParamKeys ? pick_default(query, queryParamKeys) : void 0;
      const allUrlParamKeys = [...Object.keys(baseParams), ...urlParamKeys];
      const urlParams = {
        ...baseParams,
        ...pick_default(query, allUrlParamKeys)
      };
      if (keyTransform) {
        this.transformKey(queryParams, keyTransform);
      }
      return this.requestWithParams({
        method,
        path,
        payload,
        urlParams,
        queryParams,
        catchNotFound,
        payloadKey,
        returnResourceIdInLocationHeader,
        headers
      });
    };
  }
  async requestWithParams({ method, path, payload, urlParams, queryParams, catchNotFound, payloadKey, returnResourceIdInLocationHeader, headers }) {
    const newPath = urlJoin(this.basePath, path);
    const pathTemplate = parseTemplate(newPath);
    const parsedPath = pathTemplate.expand(urlParams);
    const url = new URL(`${this.getBaseUrl?.() ?? ""}${parsedPath}`);
    const requestOptions = { ...this.client.getRequestOptions() };
    const requestHeaders = new Headers([
      ...new Headers(requestOptions.headers).entries(),
      ["authorization", `Bearer ${await this.client.getAccessToken()}`],
      ["accept", "application/json, text/plain, */*"],
      ...new Headers(headers).entries()
    ]);
    const searchParams = {};
    if (method === "GET") {
      Object.assign(searchParams, payload);
    } else if (requestHeaders.get("content-type") === "text/plain") {
      requestOptions.body = payload;
    } else if (payload instanceof FormData) {
      requestOptions.body = payload;
    } else {
      requestOptions.body = JSON.stringify(payloadKey ? payload[payloadKey] : payload);
    }
    if (!requestHeaders.has("content-type") && !(payload instanceof FormData)) {
      requestHeaders.set("content-type", "application/json");
    }
    if (queryParams) {
      Object.assign(searchParams, queryParams);
    }
    url.search = stringifyQueryParams(searchParams);
    try {
      const res = await fetchWithError(url, {
        ...requestOptions,
        headers: requestHeaders,
        method
      });
      if (returnResourceIdInLocationHeader) {
        const locationHeader = res.headers.get("location");
        if (typeof locationHeader !== "string") {
          throw new Error(`location header is not found in request: ${res.url}`);
        }
        const resourceId = last_default(locationHeader.split(SLASH));
        if (!resourceId) {
          throw new Error(`resourceId is not found in Location header from request: ${res.url}`);
        }
        const { field } = returnResourceIdInLocationHeader;
        return { [field]: resourceId };
      }
      if (Object.entries(headers || []).find(([key, value]) => key.toLowerCase() === "accept" && value === "application/octet-stream")) {
        return res.arrayBuffer();
      }
      return parseResponse(res);
    } catch (err) {
      if (err instanceof NetworkError && err.response.status === 404 && catchNotFound) {
        return null;
      }
      throw err;
    }
  }
  transformKey(payload, keyMapping) {
    if (!payload) {
      return;
    }
    Object.keys(keyMapping).some((key) => {
      if (isUndefined_default(payload[key])) {
        return false;
      }
      const newKey = keyMapping[key];
      payload[newKey] = payload[key];
      delete payload[key];
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/resource.js
var Resource = class {
  agent;
  constructor(client, settings = {}) {
    this.agent = new Agent({
      client,
      ...settings
    });
  }
  makeRequest = (args) => {
    return this.agent.request(args);
  };
  // update request will take three types: query, payload and response
  makeUpdateRequest = (args) => {
    return this.agent.updateRequest(args);
  };
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/attackDetection.js
var AttackDetection = class extends Resource {
  findOne = this.makeRequest({
    method: "GET",
    path: "/users/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/users/{id}",
    urlParamKeys: ["id"]
  });
  delAll = this.makeRequest({
    method: "DELETE",
    path: "/users"
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/attack-detection/brute-force",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/authenticationManagement.js
var AuthenticationManagement = class extends Resource {
  /**
   * Authentication Management
   * https://www.keycloak.org/docs-api/8.0/rest-api/index.html#_authentication_management_resource
   */
  //   Register a new required action
  registerRequiredAction = this.makeRequest({
    method: "POST",
    path: "/register-required-action"
  });
  // Get required actions. Returns a list of required actions.
  getRequiredActions = this.makeRequest({
    method: "GET",
    path: "/required-actions"
  });
  // Get required action for alias
  getRequiredActionForAlias = this.makeRequest({
    method: "GET",
    path: "/required-actions/{alias}",
    urlParamKeys: ["alias"],
    catchNotFound: true
  });
  getClientAuthenticatorProviders = this.makeRequest({
    method: "GET",
    path: "/client-authenticator-providers"
  });
  getAuthenticatorProviders = this.makeRequest({
    method: "GET",
    path: "/authenticator-providers"
  });
  getFormActionProviders = this.makeRequest({
    method: "GET",
    path: "/form-action-providers"
  });
  // Update required action
  updateRequiredAction = this.makeUpdateRequest({
    method: "PUT",
    path: "/required-actions/{alias}",
    urlParamKeys: ["alias"]
  });
  // Delete required action
  deleteRequiredAction = this.makeRequest({
    method: "DELETE",
    path: "/required-actions/{alias}",
    urlParamKeys: ["alias"]
  });
  // Lower required action’s priority
  lowerRequiredActionPriority = this.makeRequest({
    method: "POST",
    path: "/required-actions/{alias}/lower-priority",
    urlParamKeys: ["alias"]
  });
  // Raise required action’s priority
  raiseRequiredActionPriority = this.makeRequest({
    method: "POST",
    path: "/required-actions/{alias}/raise-priority",
    urlParamKeys: ["alias"]
  });
  // Get unregistered required actions Returns a list of unregistered required actions.
  getUnregisteredRequiredActions = this.makeRequest({
    method: "GET",
    path: "/unregistered-required-actions"
  });
  getFlows = this.makeRequest({
    method: "GET",
    path: "/flows"
  });
  getFlow = this.makeRequest({
    method: "GET",
    path: "/flows/{flowId}",
    urlParamKeys: ["flowId"]
  });
  getFormProviders = this.makeRequest({
    method: "GET",
    path: "/form-providers"
  });
  createFlow = this.makeRequest({
    method: "POST",
    path: "/flows",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  copyFlow = this.makeRequest({
    method: "POST",
    path: "/flows/{flow}/copy",
    urlParamKeys: ["flow"]
  });
  deleteFlow = this.makeRequest({
    method: "DELETE",
    path: "/flows/{flowId}",
    urlParamKeys: ["flowId"]
  });
  updateFlow = this.makeUpdateRequest({
    method: "PUT",
    path: "/flows/{flowId}",
    urlParamKeys: ["flowId"]
  });
  getExecutions = this.makeRequest({
    method: "GET",
    path: "/flows/{flow}/executions",
    urlParamKeys: ["flow"]
  });
  addExecution = this.makeUpdateRequest({
    method: "POST",
    path: "/flows/{flow}/executions",
    urlParamKeys: ["flow"]
  });
  addExecutionToFlow = this.makeRequest({
    method: "POST",
    path: "/flows/{flow}/executions/execution",
    urlParamKeys: ["flow"],
    returnResourceIdInLocationHeader: { field: "id" }
  });
  addFlowToFlow = this.makeRequest({
    method: "POST",
    path: "/flows/{flow}/executions/flow",
    urlParamKeys: ["flow"],
    returnResourceIdInLocationHeader: { field: "id" }
  });
  updateExecution = this.makeUpdateRequest({
    method: "PUT",
    path: "/flows/{flow}/executions",
    urlParamKeys: ["flow"]
  });
  delExecution = this.makeRequest({
    method: "DELETE",
    path: "/executions/{id}",
    urlParamKeys: ["id"]
  });
  lowerPriorityExecution = this.makeRequest({
    method: "POST",
    path: "/executions/{id}/lower-priority",
    urlParamKeys: ["id"]
  });
  raisePriorityExecution = this.makeRequest({
    method: "POST",
    path: "/executions/{id}/raise-priority",
    urlParamKeys: ["id"]
  });
  getConfigDescription = this.makeRequest({
    method: "GET",
    path: "config-description/{providerId}",
    urlParamKeys: ["providerId"]
  });
  createConfig = this.makeRequest({
    method: "POST",
    path: "/executions/{id}/config",
    urlParamKeys: ["id"],
    returnResourceIdInLocationHeader: { field: "id" }
  });
  updateConfig = this.makeRequest({
    method: "PUT",
    path: "/config/{id}",
    urlParamKeys: ["id"]
  });
  getConfig = this.makeRequest({
    method: "GET",
    path: "/config/{id}",
    urlParamKeys: ["id"]
  });
  delConfig = this.makeRequest({
    method: "DELETE",
    path: "/config/{id}",
    urlParamKeys: ["id"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/authentication",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/cache.js
var Cache = class extends Resource {
  clearUserCache = this.makeRequest({
    method: "POST",
    path: "/clear-user-cache"
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/clientPolicies.js
var ClientPolicies = class extends Resource {
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/client-policies",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
  /* Client Profiles */
  listProfiles = this.makeRequest({
    method: "GET",
    path: "/profiles",
    queryParamKeys: ["include-global-profiles"],
    keyTransform: {
      includeGlobalProfiles: "include-global-profiles"
    }
  });
  createProfiles = this.makeRequest({
    method: "PUT",
    path: "/profiles"
  });
  /* Client Policies */
  listPolicies = this.makeRequest({
    method: "GET",
    path: "/policies"
  });
  updatePolicy = this.makeRequest({
    method: "PUT",
    path: "/policies"
  });
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/clients.js
var Clients = class extends Resource {
  find = this.makeRequest({
    method: "GET"
  });
  create = this.makeRequest({
    method: "POST",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  /**
   * Single client
   */
  findOne = this.makeRequest({
    method: "GET",
    path: "/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  /**
   * Client roles
   */
  createRole = this.makeRequest({
    method: "POST",
    path: "/{id}/roles",
    urlParamKeys: ["id"],
    returnResourceIdInLocationHeader: { field: "roleName" }
  });
  listRoles = this.makeRequest({
    method: "GET",
    path: "/{id}/roles",
    urlParamKeys: ["id"]
  });
  findRole = this.makeRequest({
    method: "GET",
    path: "/{id}/roles/{roleName}",
    urlParamKeys: ["id", "roleName"],
    catchNotFound: true
  });
  updateRole = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/roles/{roleName}",
    urlParamKeys: ["id", "roleName"]
  });
  delRole = this.makeRequest({
    method: "DELETE",
    path: "/{id}/roles/{roleName}",
    urlParamKeys: ["id", "roleName"]
  });
  findUsersWithRole = this.makeRequest({
    method: "GET",
    path: "/{id}/roles/{roleName}/users",
    urlParamKeys: ["id", "roleName"]
  });
  /**
   * Service account user
   */
  getServiceAccountUser = this.makeRequest({
    method: "GET",
    path: "/{id}/service-account-user",
    urlParamKeys: ["id"]
  });
  /**
   * Client secret
   */
  generateNewClientSecret = this.makeRequest({
    method: "POST",
    path: "/{id}/client-secret",
    urlParamKeys: ["id"]
  });
  invalidateSecret = this.makeRequest({
    method: "DELETE",
    path: "/{id}/client-secret/rotated",
    urlParamKeys: ["id"]
  });
  generateRegistrationAccessToken = this.makeRequest({
    method: "POST",
    path: "/{id}/registration-access-token",
    urlParamKeys: ["id"]
  });
  getClientSecret = this.makeRequest({
    method: "GET",
    path: "/{id}/client-secret",
    urlParamKeys: ["id"]
  });
  /**
   * Client Scopes
   */
  listDefaultClientScopes = this.makeRequest({
    method: "GET",
    path: "/{id}/default-client-scopes",
    urlParamKeys: ["id"]
  });
  addDefaultClientScope = this.makeRequest({
    method: "PUT",
    path: "/{id}/default-client-scopes/{clientScopeId}",
    urlParamKeys: ["id", "clientScopeId"]
  });
  delDefaultClientScope = this.makeRequest({
    method: "DELETE",
    path: "/{id}/default-client-scopes/{clientScopeId}",
    urlParamKeys: ["id", "clientScopeId"]
  });
  listOptionalClientScopes = this.makeRequest({
    method: "GET",
    path: "/{id}/optional-client-scopes",
    urlParamKeys: ["id"]
  });
  addOptionalClientScope = this.makeRequest({
    method: "PUT",
    path: "/{id}/optional-client-scopes/{clientScopeId}",
    urlParamKeys: ["id", "clientScopeId"]
  });
  delOptionalClientScope = this.makeRequest({
    method: "DELETE",
    path: "/{id}/optional-client-scopes/{clientScopeId}",
    urlParamKeys: ["id", "clientScopeId"]
  });
  /**
   * Protocol Mappers
   */
  addMultipleProtocolMappers = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/protocol-mappers/add-models",
    urlParamKeys: ["id"]
  });
  addProtocolMapper = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/protocol-mappers/models",
    urlParamKeys: ["id"]
  });
  listProtocolMappers = this.makeRequest({
    method: "GET",
    path: "/{id}/protocol-mappers/models",
    urlParamKeys: ["id"]
  });
  findProtocolMapperById = this.makeRequest({
    method: "GET",
    path: "/{id}/protocol-mappers/models/{mapperId}",
    urlParamKeys: ["id", "mapperId"],
    catchNotFound: true
  });
  findProtocolMappersByProtocol = this.makeRequest({
    method: "GET",
    path: "/{id}/protocol-mappers/protocol/{protocol}",
    urlParamKeys: ["id", "protocol"],
    catchNotFound: true
  });
  updateProtocolMapper = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/protocol-mappers/models/{mapperId}",
    urlParamKeys: ["id", "mapperId"]
  });
  delProtocolMapper = this.makeRequest({
    method: "DELETE",
    path: "/{id}/protocol-mappers/models/{mapperId}",
    urlParamKeys: ["id", "mapperId"]
  });
  /**
   * Scope Mappings
   */
  listScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings",
    urlParamKeys: ["id"]
  });
  addClientScopeMappings = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/scope-mappings/clients/{client}",
    urlParamKeys: ["id", "client"]
  });
  listClientScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings/clients/{client}",
    urlParamKeys: ["id", "client"]
  });
  listAvailableClientScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings/clients/{client}/available",
    urlParamKeys: ["id", "client"]
  });
  listCompositeClientScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings/clients/{client}/composite",
    urlParamKeys: ["id", "client"]
  });
  delClientScopeMappings = this.makeUpdateRequest({
    method: "DELETE",
    path: "/{id}/scope-mappings/clients/{client}",
    urlParamKeys: ["id", "client"]
  });
  evaluatePermission = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/scope-mappings/{roleContainer}/{type}",
    urlParamKeys: ["id", "roleContainer", "type"],
    queryParamKeys: ["scope"]
  });
  evaluateListProtocolMapper = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/protocol-mappers",
    urlParamKeys: ["id"],
    queryParamKeys: ["scope"]
  });
  evaluateGenerateAccessToken = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/generate-example-access-token",
    urlParamKeys: ["id"],
    queryParamKeys: ["scope", "userId"]
  });
  evaluateGenerateUserInfo = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/generate-example-userinfo",
    urlParamKeys: ["id"],
    queryParamKeys: ["scope", "userId"]
  });
  evaluateGenerateIdToken = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/generate-example-id-token",
    urlParamKeys: ["id"],
    queryParamKeys: ["scope", "userId"]
  });
  addRealmScopeMappings = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/scope-mappings/realm",
    urlParamKeys: ["id", "client"]
  });
  listRealmScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings/realm",
    urlParamKeys: ["id"]
  });
  listAvailableRealmScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings/realm/available",
    urlParamKeys: ["id"]
  });
  listCompositeRealmScopeMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/scope-mappings/realm/composite",
    urlParamKeys: ["id"]
  });
  delRealmScopeMappings = this.makeUpdateRequest({
    method: "DELETE",
    path: "/{id}/scope-mappings/realm",
    urlParamKeys: ["id"]
  });
  /**
   * Sessions
   */
  listSessions = this.makeRequest({
    method: "GET",
    path: "/{id}/user-sessions",
    urlParamKeys: ["id"]
  });
  listOfflineSessions = this.makeRequest({
    method: "GET",
    path: "/{id}/offline-sessions",
    urlParamKeys: ["id"]
  });
  getSessionCount = this.makeRequest({
    method: "GET",
    path: "/{id}/session-count",
    urlParamKeys: ["id"]
  });
  /**
   * Resource
   */
  getResourceServer = this.makeRequest({
    method: "GET",
    path: "{id}/authz/resource-server",
    urlParamKeys: ["id"]
  });
  updateResourceServer = this.makeUpdateRequest({
    method: "PUT",
    path: "{id}/authz/resource-server",
    urlParamKeys: ["id"]
  });
  listResources = this.makeRequest({
    method: "GET",
    path: "{id}/authz/resource-server/resource",
    urlParamKeys: ["id"]
  });
  createResource = this.makeUpdateRequest({
    method: "POST",
    path: "{id}/authz/resource-server/resource",
    urlParamKeys: ["id"]
  });
  getResource = this.makeRequest({
    method: "GET",
    path: "{id}/authz/resource-server/resource/{resourceId}",
    urlParamKeys: ["id", "resourceId"]
  });
  updateResource = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/authz/resource-server/resource/{resourceId}",
    urlParamKeys: ["id", "resourceId"]
  });
  delResource = this.makeRequest({
    method: "DELETE",
    path: "/{id}/authz/resource-server/resource/{resourceId}",
    urlParamKeys: ["id", "resourceId"]
  });
  importResource = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/authz/resource-server/import",
    urlParamKeys: ["id"]
  });
  exportResource = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/settings",
    urlParamKeys: ["id"]
  });
  evaluateResource = this.makeUpdateRequest({
    method: "POST",
    path: "{id}/authz/resource-server/policy/evaluate",
    urlParamKeys: ["id"]
  });
  /**
   * Policy
   */
  listPolicies = this.makeRequest({
    method: "GET",
    path: "{id}/authz/resource-server/policy",
    urlParamKeys: ["id"]
  });
  findPolicyByName = this.makeRequest({
    method: "GET",
    path: "{id}/authz/resource-server/policy/search",
    urlParamKeys: ["id"]
  });
  updatePolicy = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/authz/resource-server/policy/{type}/{policyId}",
    urlParamKeys: ["id", "type", "policyId"]
  });
  createPolicy = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/authz/resource-server/policy/{type}",
    urlParamKeys: ["id", "type"]
  });
  findOnePolicy = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{type}/{policyId}",
    urlParamKeys: ["id", "type", "policyId"],
    catchNotFound: true
  });
  listDependentPolicies = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{policyId}/dependentPolicies",
    urlParamKeys: ["id", "policyId"]
  });
  delPolicy = this.makeRequest({
    method: "DELETE",
    path: "{id}/authz/resource-server/policy/{policyId}",
    urlParamKeys: ["id", "policyId"]
  });
  listPolicyProviders = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/providers",
    urlParamKeys: ["id"]
  });
  async createOrUpdatePolicy(payload) {
    const policyFound = await this.findPolicyByName({
      id: payload.id,
      name: payload.policyName
    });
    if (policyFound) {
      await this.updatePolicy({
        id: payload.id,
        policyId: policyFound.id,
        type: payload.policy.type
      }, payload.policy);
      return this.findPolicyByName({
        id: payload.id,
        name: payload.policyName
      });
    } else {
      return this.createPolicy({ id: payload.id, type: payload.policy.type }, payload.policy);
    }
  }
  /**
   * Scopes
   */
  listAllScopes = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/scope",
    urlParamKeys: ["id"]
  });
  listAllResourcesByScope = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/scope/{scopeId}/resources",
    urlParamKeys: ["id", "scopeId"]
  });
  listAllPermissionsByScope = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/scope/{scopeId}/permissions",
    urlParamKeys: ["id", "scopeId"]
  });
  listPermissionsByResource = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/resource/{resourceId}/permissions",
    urlParamKeys: ["id", "resourceId"]
  });
  listScopesByResource = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/resource/{resourceName}/scopes",
    urlParamKeys: ["id", "resourceName"]
  });
  createAuthorizationScope = this.makeUpdateRequest({
    method: "POST",
    path: "{id}/authz/resource-server/scope",
    urlParamKeys: ["id"]
  });
  updateAuthorizationScope = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/authz/resource-server/scope/{scopeId}",
    urlParamKeys: ["id", "scopeId"]
  });
  getAuthorizationScope = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/scope/{scopeId}",
    urlParamKeys: ["id", "scopeId"]
  });
  delAuthorizationScope = this.makeRequest({
    method: "DELETE",
    path: "/{id}/authz/resource-server/scope/{scopeId}",
    urlParamKeys: ["id", "scopeId"]
  });
  /**
   * Permissions
   */
  findPermissions = this.makeRequest({
    method: "GET",
    path: "{id}/authz/resource-server/permission",
    urlParamKeys: ["id"]
  });
  createPermission = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/authz/resource-server/permission/{type}",
    urlParamKeys: ["id", "type"]
  });
  updatePermission = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/authz/resource-server/permission/{type}/{permissionId}",
    urlParamKeys: ["id", "type", "permissionId"]
  });
  delPermission = this.makeRequest({
    method: "DELETE",
    path: "/{id}/authz/resource-server/permission/{type}/{permissionId}",
    urlParamKeys: ["id", "type", "permissionId"]
  });
  findOnePermission = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/permission/{type}/{permissionId}",
    urlParamKeys: ["id", "type", "permissionId"]
  });
  getAssociatedScopes = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{permissionId}/scopes",
    urlParamKeys: ["id", "permissionId"]
  });
  getAssociatedResources = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{permissionId}/resources",
    urlParamKeys: ["id", "permissionId"]
  });
  getAssociatedPolicies = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{permissionId}/associatedPolicies",
    urlParamKeys: ["id", "permissionId"]
  });
  getOfflineSessionCount = this.makeRequest({
    method: "GET",
    path: "/{id}/offline-session-count",
    urlParamKeys: ["id"]
  });
  getInstallationProviders = this.makeRequest({
    method: "GET",
    path: "/{id}/installation/providers/{providerId}",
    urlParamKeys: ["id", "providerId"]
  });
  pushRevocation = this.makeRequest({
    method: "POST",
    path: "/{id}/push-revocation",
    urlParamKeys: ["id"]
  });
  addClusterNode = this.makeRequest({
    method: "POST",
    path: "/{id}/nodes",
    urlParamKeys: ["id"]
  });
  deleteClusterNode = this.makeRequest({
    method: "DELETE",
    path: "/{id}/nodes/{node}",
    urlParamKeys: ["id", "node"]
  });
  testNodesAvailable = this.makeRequest({
    method: "GET",
    path: "/{id}/test-nodes-available",
    urlParamKeys: ["id"]
  });
  getKeyInfo = this.makeRequest({
    method: "GET",
    path: "/{id}/certificates/{attr}",
    urlParamKeys: ["id", "attr"]
  });
  generateKey = this.makeRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/generate",
    urlParamKeys: ["id", "attr"]
  });
  downloadKey = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/download",
    urlParamKeys: ["id", "attr"],
    headers: {
      accept: "application/octet-stream"
    }
  });
  generateAndDownloadKey = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/generate-and-download",
    urlParamKeys: ["id", "attr"],
    headers: {
      accept: "application/octet-stream"
    }
  });
  uploadKey = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/upload",
    urlParamKeys: ["id", "attr"]
  });
  uploadCertificate = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/upload-certificate",
    urlParamKeys: ["id", "attr"]
  });
  updateFineGrainPermission = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/management/permissions",
    urlParamKeys: ["id"]
  });
  listFineGrainPermissions = this.makeRequest({
    method: "GET",
    path: "/{id}/management/permissions",
    urlParamKeys: ["id"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/clients",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
  /**
   * Find single protocol mapper by name.
   */
  async findProtocolMapperByName(payload) {
    const allProtocolMappers = await this.listProtocolMappers({
      id: payload.id,
      ...payload.realm ? { realm: payload.realm } : {}
    });
    return allProtocolMappers.find((mapper) => mapper.name === payload.name);
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/clientScopes.js
var ClientScopes = class extends Resource {
  find = this.makeRequest({
    method: "GET",
    path: "/client-scopes"
  });
  create = this.makeRequest({
    method: "POST",
    path: "/client-scopes",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  /**
   * Client-Scopes by id
   */
  findOne = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/client-scopes/{id}",
    urlParamKeys: ["id"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/client-scopes/{id}",
    urlParamKeys: ["id"]
  });
  /**
   * Default Client-Scopes
   */
  listDefaultClientScopes = this.makeRequest({
    method: "GET",
    path: "/default-default-client-scopes"
  });
  addDefaultClientScope = this.makeRequest({
    method: "PUT",
    path: "/default-default-client-scopes/{id}",
    urlParamKeys: ["id"]
  });
  delDefaultClientScope = this.makeRequest({
    method: "DELETE",
    path: "/default-default-client-scopes/{id}",
    urlParamKeys: ["id"]
  });
  /**
   * Default Optional Client-Scopes
   */
  listDefaultOptionalClientScopes = this.makeRequest({
    method: "GET",
    path: "/default-optional-client-scopes"
  });
  addDefaultOptionalClientScope = this.makeRequest({
    method: "PUT",
    path: "/default-optional-client-scopes/{id}",
    urlParamKeys: ["id"]
  });
  delDefaultOptionalClientScope = this.makeRequest({
    method: "DELETE",
    path: "/default-optional-client-scopes/{id}",
    urlParamKeys: ["id"]
  });
  /**
   * Protocol Mappers
   */
  addMultipleProtocolMappers = this.makeUpdateRequest({
    method: "POST",
    path: "/client-scopes/{id}/protocol-mappers/add-models",
    urlParamKeys: ["id"]
  });
  addProtocolMapper = this.makeUpdateRequest({
    method: "POST",
    path: "/client-scopes/{id}/protocol-mappers/models",
    urlParamKeys: ["id"]
  });
  listProtocolMappers = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/protocol-mappers/models",
    urlParamKeys: ["id"]
  });
  findProtocolMapper = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/protocol-mappers/models/{mapperId}",
    urlParamKeys: ["id", "mapperId"],
    catchNotFound: true
  });
  findProtocolMappersByProtocol = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/protocol-mappers/protocol/{protocol}",
    urlParamKeys: ["id", "protocol"],
    catchNotFound: true
  });
  updateProtocolMapper = this.makeUpdateRequest({
    method: "PUT",
    path: "/client-scopes/{id}/protocol-mappers/models/{mapperId}",
    urlParamKeys: ["id", "mapperId"]
  });
  delProtocolMapper = this.makeRequest({
    method: "DELETE",
    path: "/client-scopes/{id}/protocol-mappers/models/{mapperId}",
    urlParamKeys: ["id", "mapperId"]
  });
  /**
   * Scope Mappings
   */
  listScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings",
    urlParamKeys: ["id"]
  });
  addClientScopeMappings = this.makeUpdateRequest({
    method: "POST",
    path: "/client-scopes/{id}/scope-mappings/clients/{client}",
    urlParamKeys: ["id", "client"]
  });
  listClientScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings/clients/{client}",
    urlParamKeys: ["id", "client"]
  });
  listAvailableClientScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings/clients/{client}/available",
    urlParamKeys: ["id", "client"]
  });
  listCompositeClientScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings/clients/{client}/composite",
    urlParamKeys: ["id", "client"]
  });
  delClientScopeMappings = this.makeUpdateRequest({
    method: "DELETE",
    path: "/client-scopes/{id}/scope-mappings/clients/{client}",
    urlParamKeys: ["id", "client"]
  });
  addRealmScopeMappings = this.makeUpdateRequest({
    method: "POST",
    path: "/client-scopes/{id}/scope-mappings/realm",
    urlParamKeys: ["id"]
  });
  listRealmScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings/realm",
    urlParamKeys: ["id"]
  });
  listAvailableRealmScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings/realm/available",
    urlParamKeys: ["id"]
  });
  listCompositeRealmScopeMappings = this.makeRequest({
    method: "GET",
    path: "/client-scopes/{id}/scope-mappings/realm/composite",
    urlParamKeys: ["id"]
  });
  delRealmScopeMappings = this.makeUpdateRequest({
    method: "DELETE",
    path: "/client-scopes/{id}/scope-mappings/realm",
    urlParamKeys: ["id"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
  /**
   * Find client scope by name.
   */
  async findOneByName(payload) {
    const allScopes = await this.find({
      ...payload.realm ? { realm: payload.realm } : {}
    });
    return allScopes.find((item) => item.name === payload.name);
  }
  /**
   * Delete client scope by name.
   */
  async delByName(payload) {
    const scope = await this.findOneByName(payload);
    if (!scope) {
      throw new Error("Scope not found.");
    }
    await this.del({
      ...payload.realm ? { realm: payload.realm } : {},
      id: scope.id
    });
  }
  /**
   * Find single protocol mapper by name.
   */
  async findProtocolMapperByName(payload) {
    const allProtocolMappers = await this.listProtocolMappers({
      id: payload.id,
      ...payload.realm ? { realm: payload.realm } : {}
    });
    return allProtocolMappers.find((mapper) => mapper.name === payload.name);
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/components.js
var Components = class extends Resource {
  /**
   * components
   * https://www.keycloak.org/docs-api/11.0/rest-api/#_component_resource
   */
  find = this.makeRequest({
    method: "GET"
  });
  create = this.makeRequest({
    method: "POST",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  findOne = this.makeRequest({
    method: "GET",
    path: "/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  listSubComponents = this.makeRequest({
    method: "GET",
    path: "/{id}/sub-component-types",
    urlParamKeys: ["id"],
    queryParamKeys: ["type"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/components",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/groups.js
var Groups = class extends Resource {
  find = this.makeRequest({
    method: "GET"
  });
  create = this.makeRequest({
    method: "POST",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  updateRoot = this.makeRequest({
    method: "POST"
  });
  /**
   * Single user
   */
  findOne = this.makeRequest({
    method: "GET",
    path: "/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  count = this.makeRequest({
    method: "GET",
    path: "/count"
  });
  /**
   * Set or create child.
   * This will just set the parent if it exists. Create it and set the parent if the group doesn’t exist.
   * @deprecated Use `createChildGroup` or `updateChildGroup` instead.
   */
  setOrCreateChild = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/children",
    urlParamKeys: ["id"],
    returnResourceIdInLocationHeader: { field: "id" }
  });
  /**
   * Creates a child group on the specified parent group. If the group already exists, then an error is returned.
   */
  createChildGroup = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/children",
    urlParamKeys: ["id"],
    returnResourceIdInLocationHeader: { field: "id" }
  });
  /**
   * Updates a child group on the specified parent group. If the group doesn’t exist, then an error is returned.
   * Can be used to move a group from one parent to another.
   */
  updateChildGroup = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/children",
    urlParamKeys: ["id"]
  });
  /**
   * Members
   */
  listMembers = this.makeRequest({
    method: "GET",
    path: "/{id}/members",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  /**
   * Role mappings
   * https://www.keycloak.org/docs-api/11.0/rest-api/#_role_mapper_resource
   */
  listRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings",
    urlParamKeys: ["id"]
  });
  addRealmRoleMappings = this.makeRequest({
    method: "POST",
    path: "/{id}/role-mappings/realm",
    urlParamKeys: ["id"],
    payloadKey: "roles"
  });
  listRealmRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/realm",
    urlParamKeys: ["id"]
  });
  delRealmRoleMappings = this.makeRequest({
    method: "DELETE",
    path: "/{id}/role-mappings/realm",
    urlParamKeys: ["id"],
    payloadKey: "roles"
  });
  listAvailableRealmRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/realm/available",
    urlParamKeys: ["id"]
  });
  // Get effective realm-level role mappings This will recurse all composite roles to get the result.
  listCompositeRealmRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/realm/composite",
    urlParamKeys: ["id"]
  });
  /**
   * Client role mappings
   * https://www.keycloak.org/docs-api/11.0/rest-api/#_client_role_mappings_resource
   */
  listClientRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/clients/{clientUniqueId}",
    urlParamKeys: ["id", "clientUniqueId"]
  });
  addClientRoleMappings = this.makeRequest({
    method: "POST",
    path: "/{id}/role-mappings/clients/{clientUniqueId}",
    urlParamKeys: ["id", "clientUniqueId"],
    payloadKey: "roles"
  });
  delClientRoleMappings = this.makeRequest({
    method: "DELETE",
    path: "/{id}/role-mappings/clients/{clientUniqueId}",
    urlParamKeys: ["id", "clientUniqueId"],
    payloadKey: "roles"
  });
  listAvailableClientRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/clients/{clientUniqueId}/available",
    urlParamKeys: ["id", "clientUniqueId"]
  });
  listCompositeClientRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/clients/{clientUniqueId}/composite",
    urlParamKeys: ["id", "clientUniqueId"]
  });
  /**
   * Authorization permissions
   */
  updatePermission = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/management/permissions",
    urlParamKeys: ["id"]
  });
  listPermissions = this.makeRequest({
    method: "GET",
    path: "/{id}/management/permissions",
    urlParamKeys: ["id"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/groups",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/identityProviders.js
var IdentityProviders = class extends Resource {
  /**
   * Identity provider
   * https://www.keycloak.org/docs-api/11.0/rest-api/#_identity_providers_resource
   */
  find = this.makeRequest({
    method: "GET",
    path: "/instances"
  });
  create = this.makeRequest({
    method: "POST",
    path: "/instances",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  findOne = this.makeRequest({
    method: "GET",
    path: "/instances/{alias}",
    urlParamKeys: ["alias"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/instances/{alias}",
    urlParamKeys: ["alias"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/instances/{alias}",
    urlParamKeys: ["alias"]
  });
  findFactory = this.makeRequest({
    method: "GET",
    path: "/providers/{providerId}",
    urlParamKeys: ["providerId"]
  });
  findMappers = this.makeRequest({
    method: "GET",
    path: "/instances/{alias}/mappers",
    urlParamKeys: ["alias"]
  });
  findOneMapper = this.makeRequest({
    method: "GET",
    path: "/instances/{alias}/mappers/{id}",
    urlParamKeys: ["alias", "id"],
    catchNotFound: true
  });
  createMapper = this.makeRequest({
    method: "POST",
    path: "/instances/{alias}/mappers",
    urlParamKeys: ["alias"],
    payloadKey: "identityProviderMapper",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  updateMapper = this.makeUpdateRequest({
    method: "PUT",
    path: "/instances/{alias}/mappers/{id}",
    urlParamKeys: ["alias", "id"]
  });
  delMapper = this.makeRequest({
    method: "DELETE",
    path: "/instances/{alias}/mappers/{id}",
    urlParamKeys: ["alias", "id"]
  });
  findMapperTypes = this.makeRequest({
    method: "GET",
    path: "/instances/{alias}/mapper-types",
    urlParamKeys: ["alias"]
  });
  importFromUrl = this.makeRequest({
    method: "POST",
    path: "/import-config"
  });
  updatePermission = this.makeUpdateRequest({
    method: "PUT",
    path: "/instances/{alias}/management/permissions",
    urlParamKeys: ["alias"]
  });
  listPermissions = this.makeRequest({
    method: "GET",
    path: "/instances/{alias}/management/permissions",
    urlParamKeys: ["alias"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/identity-provider",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/realms.js
var Realms = class extends Resource {
  /**
   * Realm
   * https://www.keycloak.org/docs-api/11.0/rest-api/#_realms_admin_resource
   */
  find = this.makeRequest({
    method: "GET"
  });
  create = this.makeRequest({
    method: "POST",
    returnResourceIdInLocationHeader: { field: "realmName" }
  });
  findOne = this.makeRequest({
    method: "GET",
    path: "/{realm}",
    urlParamKeys: ["realm"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/{realm}",
    urlParamKeys: ["realm"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/{realm}",
    urlParamKeys: ["realm"]
  });
  partialImport = this.makeRequest({
    method: "POST",
    path: "/{realm}/partialImport",
    urlParamKeys: ["realm"],
    payloadKey: "rep"
  });
  export = this.makeRequest({
    method: "POST",
    path: "/{realm}/partial-export",
    urlParamKeys: ["realm"],
    queryParamKeys: ["exportClients", "exportGroupsAndRoles"]
  });
  getDefaultGroups = this.makeRequest({
    method: "GET",
    path: "/{realm}/default-groups",
    urlParamKeys: ["realm"]
  });
  addDefaultGroup = this.makeRequest({
    method: "PUT",
    path: "/{realm}/default-groups/{id}",
    urlParamKeys: ["realm", "id"]
  });
  removeDefaultGroup = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/default-groups/{id}",
    urlParamKeys: ["realm", "id"]
  });
  getGroupByPath = this.makeRequest({
    method: "GET",
    path: "/{realm}/group-by-path/{path}",
    urlParamKeys: ["realm", "path"]
  });
  /**
   * Get events Returns all events, or filters them based on URL query parameters listed here
   */
  findEvents = this.makeRequest({
    method: "GET",
    path: "/{realm}/events",
    urlParamKeys: ["realm"],
    queryParamKeys: [
      "client",
      "dateFrom",
      "dateTo",
      "first",
      "ipAddress",
      "max",
      "type",
      "user"
    ]
  });
  getConfigEvents = this.makeRequest({
    method: "GET",
    path: "/{realm}/events/config",
    urlParamKeys: ["realm"]
  });
  updateConfigEvents = this.makeUpdateRequest({
    method: "PUT",
    path: "/{realm}/events/config",
    urlParamKeys: ["realm"]
  });
  clearEvents = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/events",
    urlParamKeys: ["realm"]
  });
  clearAdminEvents = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/admin-events",
    urlParamKeys: ["realm"]
  });
  getClientRegistrationPolicyProviders = this.makeRequest({
    method: "GET",
    path: "/{realm}/client-registration-policy/providers",
    urlParamKeys: ["realm"]
  });
  getClientsInitialAccess = this.makeRequest({
    method: "GET",
    path: "/{realm}/clients-initial-access",
    urlParamKeys: ["realm"]
  });
  createClientsInitialAccess = this.makeUpdateRequest({
    method: "POST",
    path: "/{realm}/clients-initial-access",
    urlParamKeys: ["realm"]
  });
  delClientsInitialAccess = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/clients-initial-access/{id}",
    urlParamKeys: ["realm", "id"]
  });
  /**
   * Remove a specific user session.
   */
  removeSession = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/sessions/{sessionId}",
    urlParamKeys: ["realm", "sessionId"],
    catchNotFound: true
  });
  /**
   * Get admin events Returns all admin events, or filters events based on URL query parameters listed here
   */
  findAdminEvents = this.makeRequest({
    method: "GET",
    path: "/{realm}/admin-events",
    urlParamKeys: ["realm"],
    queryParamKeys: [
      "authClient",
      "authIpAddress",
      "authRealm",
      "authUser",
      "dateFrom",
      "dateTo",
      "max",
      "first",
      "operationTypes",
      "resourcePath",
      "resourceTypes"
    ]
  });
  /**
   * Users management permissions
   */
  getUsersManagementPermissions = this.makeRequest({
    method: "GET",
    path: "/{realm}/users-management-permissions",
    urlParamKeys: ["realm"]
  });
  updateUsersManagementPermissions = this.makeRequest({
    method: "PUT",
    path: "/{realm}/users-management-permissions",
    urlParamKeys: ["realm"]
  });
  /**
   * Sessions
   */
  getClientSessionStats = this.makeRequest({
    method: "GET",
    path: "/{realm}/client-session-stats",
    urlParamKeys: ["realm"]
  });
  logoutAll = this.makeRequest({
    method: "POST",
    path: "/{realm}/logout-all",
    urlParamKeys: ["realm"]
  });
  deleteSession = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/sessions/{session}",
    urlParamKeys: ["realm", "session"]
  });
  pushRevocation = this.makeRequest({
    method: "POST",
    path: "/{realm}/push-revocation",
    urlParamKeys: ["realm"],
    ignoredKeys: ["realm"]
  });
  getKeys = this.makeRequest({
    method: "GET",
    path: "/{realm}/keys",
    urlParamKeys: ["realm"]
  });
  testLDAPConnection = this.makeUpdateRequest({
    method: "POST",
    path: "/{realm}/testLDAPConnection",
    urlParamKeys: ["realm"]
  });
  testSMTPConnection = this.makeUpdateRequest({
    method: "POST",
    path: "/{realm}/testSMTPConnection",
    urlParamKeys: ["realm"]
  });
  ldapServerCapabilities = this.makeUpdateRequest({
    method: "POST",
    path: "/{realm}/ldap-server-capabilities",
    urlParamKeys: ["realm"]
  });
  getRealmSpecificLocales = this.makeRequest({
    method: "GET",
    path: "/{realm}/localization",
    urlParamKeys: ["realm"]
  });
  getRealmLocalizationTexts = this.makeRequest({
    method: "GET",
    path: "/{realm}/localization/{selectedLocale}",
    urlParamKeys: ["realm", "selectedLocale"]
  });
  addLocalization = this.makeUpdateRequest({
    method: "PUT",
    path: "/{realm}/localization/{selectedLocale}/{key}",
    urlParamKeys: ["realm", "selectedLocale", "key"],
    headers: { "content-type": "text/plain" }
  });
  deleteRealmLocalizationTexts = this.makeRequest({
    method: "DELETE",
    path: "/{realm}/localization/{selectedLocale}/{key}",
    urlParamKeys: ["realm", "selectedLocale", "key"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms",
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/roles.js
var Roles = class extends Resource {
  /**
   * Realm roles
   */
  find = this.makeRequest({
    method: "GET",
    path: "/roles"
  });
  create = this.makeRequest({
    method: "POST",
    path: "/roles",
    returnResourceIdInLocationHeader: { field: "roleName" }
  });
  /**
   * Roles by name
   */
  findOneByName = this.makeRequest({
    method: "GET",
    path: "/roles/{name}",
    urlParamKeys: ["name"],
    catchNotFound: true
  });
  updateByName = this.makeUpdateRequest({
    method: "PUT",
    path: "/roles/{name}",
    urlParamKeys: ["name"]
  });
  delByName = this.makeRequest({
    method: "DELETE",
    path: "/roles/{name}",
    urlParamKeys: ["name"]
  });
  findUsersWithRole = this.makeRequest({
    method: "GET",
    path: "/roles/{name}/users",
    urlParamKeys: ["name"],
    catchNotFound: true
  });
  /**
   * Roles by id
   */
  findOneById = this.makeRequest({
    method: "GET",
    path: "/roles-by-id/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  createComposite = this.makeUpdateRequest({
    method: "POST",
    path: "/roles-by-id/{roleId}/composites",
    urlParamKeys: ["roleId"]
  });
  getCompositeRoles = this.makeRequest({
    method: "GET",
    path: "/roles-by-id/{id}/composites",
    urlParamKeys: ["id"]
  });
  getCompositeRolesForRealm = this.makeRequest({
    method: "GET",
    path: "/roles-by-id/{id}/composites/realm",
    urlParamKeys: ["id"]
  });
  getCompositeRolesForClient = this.makeRequest({
    method: "GET",
    path: "/roles-by-id/{id}/composites/clients/{clientId}",
    urlParamKeys: ["id", "clientId"]
  });
  delCompositeRoles = this.makeUpdateRequest({
    method: "DELETE",
    path: "/roles-by-id/{id}/composites",
    urlParamKeys: ["id"]
  });
  updateById = this.makeUpdateRequest({
    method: "PUT",
    path: "/roles-by-id/{id}",
    urlParamKeys: ["id"]
  });
  delById = this.makeRequest({
    method: "DELETE",
    path: "/roles-by-id/{id}",
    urlParamKeys: ["id"]
  });
  /**
   * Authorization permissions
   */
  updatePermission = this.makeUpdateRequest({
    method: "PUT",
    path: "/roles-by-id/{id}/management/permissions",
    urlParamKeys: ["id"]
  });
  listPermissions = this.makeRequest({
    method: "GET",
    path: "/roles-by-id/{id}/management/permissions",
    urlParamKeys: ["id"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/serverInfo.js
var ServerInfo = class extends Resource {
  constructor(client) {
    super(client, {
      path: "/admin/serverinfo",
      getBaseUrl: () => client.baseUrl
    });
  }
  find = this.makeRequest({
    method: "GET",
    path: "/"
  });
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/users.js
var Users = class extends Resource {
  find = this.makeRequest({
    method: "GET"
  });
  create = this.makeRequest({
    method: "POST",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  /**
   * Single user
   */
  findOne = this.makeRequest({
    method: "GET",
    path: "/{id}",
    urlParamKeys: ["id"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  del = this.makeRequest({
    method: "DELETE",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  count = this.makeRequest({
    method: "GET",
    path: "/count"
  });
  getProfile = this.makeRequest({
    method: "GET",
    path: "/profile"
  });
  updateProfile = this.makeRequest({
    method: "PUT",
    path: "/profile"
  });
  /**
   * role mappings
   */
  listRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings",
    urlParamKeys: ["id"]
  });
  addRealmRoleMappings = this.makeRequest({
    method: "POST",
    path: "/{id}/role-mappings/realm",
    urlParamKeys: ["id"],
    payloadKey: "roles"
  });
  listRealmRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/realm",
    urlParamKeys: ["id"]
  });
  delRealmRoleMappings = this.makeRequest({
    method: "DELETE",
    path: "/{id}/role-mappings/realm",
    urlParamKeys: ["id"],
    payloadKey: "roles"
  });
  listAvailableRealmRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/realm/available",
    urlParamKeys: ["id"]
  });
  // Get effective realm-level role mappings This will recurse all composite roles to get the result.
  listCompositeRealmRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/realm/composite",
    urlParamKeys: ["id"]
  });
  /**
   * Client role mappings
   * https://www.keycloak.org/docs-api/11.0/rest-api/#_client_role_mappings_resource
   */
  listClientRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/clients/{clientUniqueId}",
    urlParamKeys: ["id", "clientUniqueId"]
  });
  addClientRoleMappings = this.makeRequest({
    method: "POST",
    path: "/{id}/role-mappings/clients/{clientUniqueId}",
    urlParamKeys: ["id", "clientUniqueId"],
    payloadKey: "roles"
  });
  delClientRoleMappings = this.makeRequest({
    method: "DELETE",
    path: "/{id}/role-mappings/clients/{clientUniqueId}",
    urlParamKeys: ["id", "clientUniqueId"],
    payloadKey: "roles"
  });
  listAvailableClientRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/clients/{clientUniqueId}/available",
    urlParamKeys: ["id", "clientUniqueId"]
  });
  listCompositeClientRoleMappings = this.makeRequest({
    method: "GET",
    path: "/{id}/role-mappings/clients/{clientUniqueId}/composite",
    urlParamKeys: ["id", "clientUniqueId"]
  });
  /**
   * Send a update account email to the user
   * an email contains a link the user can click to perform a set of required actions.
   */
  executeActionsEmail = this.makeRequest({
    method: "PUT",
    path: "/{id}/execute-actions-email",
    urlParamKeys: ["id"],
    payloadKey: "actions",
    queryParamKeys: ["lifespan", "redirectUri", "clientId"],
    keyTransform: {
      clientId: "client_id",
      redirectUri: "redirect_uri"
    }
  });
  /**
   * Group
   */
  listGroups = this.makeRequest({
    method: "GET",
    path: "/{id}/groups",
    urlParamKeys: ["id"]
  });
  addToGroup = this.makeRequest({
    method: "PUT",
    path: "/{id}/groups/{groupId}",
    urlParamKeys: ["id", "groupId"]
  });
  delFromGroup = this.makeRequest({
    method: "DELETE",
    path: "/{id}/groups/{groupId}",
    urlParamKeys: ["id", "groupId"]
  });
  countGroups = this.makeRequest({
    method: "GET",
    path: "/{id}/groups/count",
    urlParamKeys: ["id"]
  });
  /**
   * Federated Identity
   */
  listFederatedIdentities = this.makeRequest({
    method: "GET",
    path: "/{id}/federated-identity",
    urlParamKeys: ["id"]
  });
  addToFederatedIdentity = this.makeRequest({
    method: "POST",
    path: "/{id}/federated-identity/{federatedIdentityId}",
    urlParamKeys: ["id", "federatedIdentityId"],
    payloadKey: "federatedIdentity"
  });
  delFromFederatedIdentity = this.makeRequest({
    method: "DELETE",
    path: "/{id}/federated-identity/{federatedIdentityId}",
    urlParamKeys: ["id", "federatedIdentityId"]
  });
  /**
   * remove totp
   */
  removeTotp = this.makeRequest({
    method: "PUT",
    path: "/{id}/remove-totp",
    urlParamKeys: ["id"]
  });
  /**
   * reset password
   */
  resetPassword = this.makeRequest({
    method: "PUT",
    path: "/{id}/reset-password",
    urlParamKeys: ["id"],
    payloadKey: "credential"
  });
  getUserStorageCredentialTypes = this.makeRequest({
    method: "GET",
    path: "/{id}/configured-user-storage-credential-types",
    urlParamKeys: ["id"]
  });
  /**
   * get user credentials
   */
  getCredentials = this.makeRequest({
    method: "GET",
    path: "/{id}/credentials",
    urlParamKeys: ["id"]
  });
  /**
   * delete user credentials
   */
  deleteCredential = this.makeRequest({
    method: "DELETE",
    path: "/{id}/credentials/{credentialId}",
    urlParamKeys: ["id", "credentialId"]
  });
  /**
   * update a credential label for a user
   */
  updateCredentialLabel = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/credentials/{credentialId}/userLabel",
    urlParamKeys: ["id", "credentialId"],
    headers: { "content-type": "text/plain" }
  });
  // Move a credential to a position behind another credential
  moveCredentialPositionDown = this.makeRequest({
    method: "POST",
    path: "/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}",
    urlParamKeys: ["id", "credentialId", "newPreviousCredentialId"]
  });
  // Move a credential to a first position in the credentials list of the user
  moveCredentialPositionUp = this.makeRequest({
    method: "POST",
    path: "/{id}/credentials/{credentialId}/moveToFirst",
    urlParamKeys: ["id", "credentialId"]
  });
  /**
   * send verify email
   */
  sendVerifyEmail = this.makeRequest({
    method: "PUT",
    path: "/{id}/send-verify-email",
    urlParamKeys: ["id"],
    queryParamKeys: ["clientId", "redirectUri"],
    keyTransform: {
      clientId: "client_id",
      redirectUri: "redirect_uri"
    }
  });
  /**
   * list user sessions
   */
  listSessions = this.makeRequest({
    method: "GET",
    path: "/{id}/sessions",
    urlParamKeys: ["id"]
  });
  /**
   * list offline sessions associated with the user and client
   */
  listOfflineSessions = this.makeRequest({
    method: "GET",
    path: "/{id}/offline-sessions/{clientId}",
    urlParamKeys: ["id", "clientId"]
  });
  /**
   * logout user from all sessions
   */
  logout = this.makeRequest({
    method: "POST",
    path: "/{id}/logout",
    urlParamKeys: ["id"]
  });
  /**
   * list consents granted by the user
   */
  listConsents = this.makeRequest({
    method: "GET",
    path: "/{id}/consents",
    urlParamKeys: ["id"]
  });
  impersonation = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/impersonation",
    urlParamKeys: ["id"]
  });
  /**
   * revoke consent and offline tokens for particular client from user
   */
  revokeConsent = this.makeRequest({
    method: "DELETE",
    path: "/{id}/consents/{clientId}",
    urlParamKeys: ["id", "clientId"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/users",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/userStorageProvider.js
var UserStorageProvider = class extends Resource {
  name = this.makeRequest({
    method: "GET",
    path: "/{id}/name",
    urlParamKeys: ["id"]
  });
  removeImportedUsers = this.makeRequest({
    method: "POST",
    path: "/{id}/remove-imported-users",
    urlParamKeys: ["id"]
  });
  sync = this.makeRequest({
    method: "POST",
    path: "/{id}/sync",
    urlParamKeys: ["id"],
    queryParamKeys: ["action"]
  });
  unlinkUsers = this.makeRequest({
    method: "POST",
    path: "/{id}/unlink-users",
    urlParamKeys: ["id"]
  });
  mappersSync = this.makeRequest({
    method: "POST",
    path: "/{parentId}/mappers/{id}/sync",
    urlParamKeys: ["id", "parentId"],
    queryParamKeys: ["direction"]
  });
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/user-storage",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/whoAmI.js
var WhoAmI = class extends Resource {
  constructor(client) {
    super(client, {
      path: "/admin/{realm}/console",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
  find = this.makeRequest({
    method: "GET",
    path: "/whoami"
  });
};

// node_modules/camelize-ts/dist/index.js
function camelCase(str) {
  return str.replace(/[_.-](\w|$)/g, function(_, x) {
    return x.toUpperCase();
  });
}
function walk(obj, shallow = false) {
  if (!obj || typeof obj !== "object")
    return obj;
  if (obj instanceof Date || obj instanceof RegExp)
    return obj;
  if (Array.isArray(obj))
    return obj.map((v) => {
      if (!shallow) {
        return walk(v);
      }
      if (typeof v === "object")
        return walk(v, shallow);
      return v;
    });
  return Object.keys(obj).reduce((res, key) => {
    const camel = camelCase(key);
    const uncapitalized = camel.charAt(0).toLowerCase() + camel.slice(1);
    res[uncapitalized] = shallow ? obj[key] : walk(obj[key]);
    return res;
  }, {});
}
function camelize(obj, shallow) {
  return typeof obj === "string" ? camelCase(obj) : walk(obj, shallow);
}

// node_modules/@keycloak/keycloak-admin-client/lib/utils/constants.js
var defaultBaseUrl = "http://127.0.0.1:8180";
var defaultRealm = "master";

// node_modules/@keycloak/keycloak-admin-client/lib/utils/auth.js
var bytesToBase64 = (bytes) => btoa(Array.from(bytes, (byte) => String.fromCodePoint(byte)).join(""));
var toBase64 = (input) => bytesToBase64(new TextEncoder().encode(input));
var encodeRFC3986URIComponent = (input) => encodeURIComponent(input).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
var encodeFormURIComponent = (data) => encodeRFC3986URIComponent(data).replaceAll("%20", "+");
var getToken = async (settings) => {
  const baseUrl = settings.baseUrl || defaultBaseUrl;
  const realmName = settings.realmName || defaultRealm;
  const url = `${baseUrl}/realms/${realmName}/protocol/openid-connect/token`;
  const credentials = settings.credentials || {};
  const payload = stringifyQueryParams({
    username: credentials.username,
    password: credentials.password,
    grant_type: credentials.grantType,
    client_id: credentials.clientId,
    totp: credentials.totp,
    ...credentials.offlineToken ? { scope: "offline_access" } : {},
    ...credentials.scopes ? { scope: credentials.scopes.join(" ") } : {},
    ...credentials.refreshToken ? {
      refresh_token: credentials.refreshToken,
      client_secret: credentials.clientSecret
    } : {}
  });
  const options = settings.requestOptions ?? {};
  const headers = new Headers(options.headers);
  if (credentials.clientSecret) {
    const username = encodeFormURIComponent(credentials.clientId);
    const password = encodeFormURIComponent(credentials.clientSecret);
    headers.set("authorization", `Basic ${toBase64(`${username}:${password}`)}`);
  }
  headers.set("content-type", "application/x-www-form-urlencoded");
  const response = await fetchWithError(url, {
    ...options,
    method: "POST",
    headers,
    body: payload
  });
  const data = await response.json();
  return camelize(data);
};

// node_modules/@keycloak/keycloak-admin-client/lib/client.js
var KeycloakAdminClient = class {
  // Resources
  users;
  userStorageProvider;
  groups;
  roles;
  clients;
  realms;
  clientScopes;
  clientPolicies;
  identityProviders;
  components;
  serverInfo;
  whoAmI;
  attackDetection;
  authenticationManagement;
  cache;
  // Members
  baseUrl;
  realmName;
  accessToken;
  refreshToken;
  requestOptions;
  globalRequestArgOptions;
  tokenProvider;
  constructor(connectionConfig) {
    this.baseUrl = connectionConfig?.baseUrl || defaultBaseUrl;
    this.realmName = connectionConfig?.realmName || defaultRealm;
    this.requestOptions = connectionConfig?.requestOptions;
    this.globalRequestArgOptions = connectionConfig?.requestArgOptions;
    this.users = new Users(this);
    this.userStorageProvider = new UserStorageProvider(this);
    this.groups = new Groups(this);
    this.roles = new Roles(this);
    this.clients = new Clients(this);
    this.realms = new Realms(this);
    this.clientScopes = new ClientScopes(this);
    this.clientPolicies = new ClientPolicies(this);
    this.identityProviders = new IdentityProviders(this);
    this.components = new Components(this);
    this.authenticationManagement = new AuthenticationManagement(this);
    this.serverInfo = new ServerInfo(this);
    this.whoAmI = new WhoAmI(this);
    this.attackDetection = new AttackDetection(this);
    this.cache = new Cache(this);
  }
  async auth(credentials) {
    const { accessToken, refreshToken } = await getToken({
      baseUrl: this.baseUrl,
      realmName: this.realmName,
      credentials,
      requestOptions: this.requestOptions
    });
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
  registerTokenProvider(provider) {
    if (this.tokenProvider) {
      throw new Error("An existing token provider was already registered.");
    }
    this.tokenProvider = provider;
  }
  setAccessToken(token) {
    this.accessToken = token;
  }
  async getAccessToken() {
    if (this.tokenProvider) {
      return this.tokenProvider.getAccessToken();
    }
    return this.accessToken;
  }
  getRequestOptions() {
    return this.requestOptions;
  }
  getGlobalRequestArgOptions() {
    return this.globalRequestArgOptions;
  }
  setConfig(connectionConfig) {
    if (typeof connectionConfig.baseUrl === "string" && connectionConfig.baseUrl) {
      this.baseUrl = connectionConfig.baseUrl;
    }
    if (typeof connectionConfig.realmName === "string" && connectionConfig.realmName) {
      this.realmName = connectionConfig.realmName;
    }
    this.requestOptions = connectionConfig.requestOptions;
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/defs/requiredActionProviderRepresentation.js
var RequiredActionAlias;
(function(RequiredActionAlias2) {
  RequiredActionAlias2["VERIFY_EMAIL"] = "VERIFY_EMAIL";
  RequiredActionAlias2["UPDATE_PROFILE"] = "UPDATE_PROFILE";
  RequiredActionAlias2["CONFIGURE_TOTP"] = "CONFIGURE_TOTP";
  RequiredActionAlias2["UPDATE_PASSWORD"] = "UPDATE_PASSWORD";
  RequiredActionAlias2["TERMS_AND_CONDITIONS"] = "TERMS_AND_CONDITIONS";
})(RequiredActionAlias || (RequiredActionAlias = {}));

// node_modules/@keycloak/keycloak-admin-client/lib/index.js
var lib_default = KeycloakAdminClient;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Keycloak
});
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
