var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tinyduration/dist/index.js
var require_dist = __commonJS({
  "node_modules/tinyduration/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.serialize = exports2.parse = exports2.MultipleFractionsError = exports2.InvalidDurationError = void 0;
    var DEFAULT_PARSE_CONFIG = {
      allowMultipleFractions: true
    };
    var units = [
      { unit: "years", symbol: "Y" },
      { unit: "months", symbol: "M" },
      { unit: "weeks", symbol: "W" },
      { unit: "days", symbol: "D" },
      { unit: "hours", symbol: "H" },
      { unit: "minutes", symbol: "M" },
      { unit: "seconds", symbol: "S" }
    ];
    var r = (name, unit) => `((?<${name}>-?\\d*[\\.,]?\\d+)${unit})?`;
    var durationRegex = new RegExp([
      "(?<negative>-)?P",
      r("years", "Y"),
      r("months", "M"),
      r("weeks", "W"),
      r("days", "D"),
      "(T",
      r("hours", "H"),
      r("minutes", "M"),
      r("seconds", "S"),
      ")?"
      // end optional time
    ].join(""));
    function parseNum(s2) {
      if (s2 === "" || s2 === void 0 || s2 === null) {
        return void 0;
      }
      return parseFloat(s2.replace(",", "."));
    }
    exports2.InvalidDurationError = new Error("Invalid duration");
    exports2.MultipleFractionsError = new Error("Multiple fractions specified");
    function parse(durationStr, config = DEFAULT_PARSE_CONFIG) {
      const match = durationRegex.exec(durationStr);
      if (!match || !match.groups) {
        throw exports2.InvalidDurationError;
      }
      let empty = true;
      let decimalFractionCount = 0;
      const values = {};
      for (const { unit } of units) {
        if (match.groups[unit]) {
          empty = false;
          values[unit] = parseNum(match.groups[unit]);
          if (!config.allowMultipleFractions && !Number.isInteger(values[unit])) {
            decimalFractionCount++;
            if (decimalFractionCount > 1) {
              throw exports2.MultipleFractionsError;
            }
          }
        }
      }
      if (empty) {
        throw exports2.InvalidDurationError;
      }
      const duration = values;
      if (match.groups.negative) {
        duration.negative = true;
      }
      return duration;
    }
    exports2.parse = parse;
    var s = (number, component) => {
      if (!number) {
        return void 0;
      }
      let numberAsString = number.toString();
      const exponentIndex = numberAsString.indexOf("e");
      if (exponentIndex > -1) {
        const magnitude = parseInt(numberAsString.slice(exponentIndex + 2), 10);
        numberAsString = number.toFixed(magnitude + exponentIndex - 2);
      }
      return numberAsString + component;
    };
    function serialize(duration) {
      if (!duration.years && !duration.months && !duration.weeks && !duration.days && !duration.hours && !duration.minutes && !duration.seconds) {
        return "PT0S";
      }
      return [
        duration.negative && "-",
        "P",
        s(duration.years, "Y"),
        s(duration.months, "M"),
        s(duration.weeks, "W"),
        s(duration.days, "D"),
        (duration.hours || duration.minutes || duration.seconds) && "T",
        s(duration.hours, "H"),
        s(duration.minutes, "M"),
        s(duration.seconds, "S")
      ].filter(Boolean).join("");
    }
    exports2.serialize = serialize;
  }
});

// index.ts
var index_exports = {};
__export(index_exports, {
  Keycloak: () => lib_default
});
module.exports = __toCommonJS(index_exports);

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
var ERROR_FIELDS = ["error", "errorMessage"];
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
    const message = getErrorMessage(responseData);
    throw new NetworkError(message, {
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
  } catch {
    return data;
  }
}
function getErrorMessage(data) {
  if (typeof data !== "object" || data === null) {
    return "Unable to determine error message.";
  }
  for (const key of ERROR_FIELDS) {
    const value = data[key];
    if (typeof value === "string") {
      return value;
    }
  }
  return "Network response was not OK.";
}

// node_modules/@keycloak/keycloak-admin-client/lib/utils/joinPath.js
var PATH_SEPARATOR = "/";
function joinPath(...paths) {
  const normalizedPaths = paths.map((path, index) => {
    const isFirst = index === 0;
    const isLast = index === paths.length - 1;
    if (!isFirst && path.startsWith(PATH_SEPARATOR)) {
      path = path.slice(1);
    }
    if (!isLast && path.endsWith(PATH_SEPARATOR)) {
      path = path.slice(0, -1);
    }
    return path;
  }, []);
  return normalizedPaths.join(PATH_SEPARATOR);
}

// node_modules/@keycloak/keycloak-admin-client/lib/utils/stringifyQueryParams.js
function stringifyQueryParams(params) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === void 0 || value === null) {
      continue;
    }
    if (typeof value === "string" && value.length === 0) {
      continue;
    }
    if (Array.isArray(value) && value.length === 0) {
      continue;
    }
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item.toString()));
    } else {
      searchParams.append(key, value.toString());
    }
  }
  return searchParams.toString();
}

// node_modules/@keycloak/keycloak-admin-client/lib/resources/agent.js
var SLASH = "/";
var pick = (value, keys) => Object.fromEntries(Object.entries(value).filter(([key]) => keys.includes(key)));
var omit = (value, keys) => Object.fromEntries(Object.entries(value).filter(([key]) => !keys.includes(key)));
var Agent = class {
  #client;
  #basePath;
  #getBaseParams;
  #getBaseUrl;
  constructor({ client, path = "/", getUrlParams = () => ({}), getBaseUrl = () => client.baseUrl }) {
    this.#client = client;
    this.#getBaseParams = getUrlParams;
    this.#getBaseUrl = getBaseUrl;
    this.#basePath = path;
  }
  request({ method, path = "", urlParamKeys = [], queryParamKeys = [], catchNotFound = false, keyTransform, payloadKey, returnResourceIdInLocationHeader, ignoredKeys, headers }) {
    return async (payload = {}, options) => {
      const baseParams = this.#getBaseParams?.() ?? {};
      const queryParams = queryParamKeys.length > 0 ? pick(payload, queryParamKeys) : void 0;
      const allUrlParamKeys = [...Object.keys(baseParams), ...urlParamKeys];
      const urlParams = { ...baseParams, ...pick(payload, allUrlParamKeys) };
      if (!(payload instanceof FormData)) {
        const omittedKeys = ignoredKeys ? [...allUrlParamKeys, ...queryParamKeys].filter((key) => !ignoredKeys.includes(key)) : [...allUrlParamKeys, ...queryParamKeys];
        payload = omit(payload, omittedKeys);
      }
      if (keyTransform) {
        this.#transformKey(payload, keyTransform);
        this.#transformKey(queryParams, keyTransform);
      }
      return this.#requestWithParams({
        method,
        path,
        payload,
        urlParams,
        queryParams,
        // catchNotFound precedence: global > local > default
        catchNotFound,
        ...this.#client.getGlobalRequestArgOptions() ?? options ?? {},
        payloadKey,
        returnResourceIdInLocationHeader,
        headers
      });
    };
  }
  updateRequest({ method, path = "", urlParamKeys = [], queryParamKeys = [], catchNotFound = false, keyTransform, payloadKey, returnResourceIdInLocationHeader, headers }) {
    return async (query = {}, payload = {}) => {
      const baseParams = this.#getBaseParams?.() ?? {};
      const queryParams = queryParamKeys.length > 0 ? pick(query, queryParamKeys) : void 0;
      const allUrlParamKeys = [...Object.keys(baseParams), ...urlParamKeys];
      const urlParams = {
        ...baseParams,
        ...pick(query, allUrlParamKeys)
      };
      if (keyTransform) {
        this.#transformKey(queryParams, keyTransform);
      }
      return this.#requestWithParams({
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
  async #requestWithParams({ method, path, payload, urlParams, queryParams, catchNotFound, payloadKey, returnResourceIdInLocationHeader, headers }) {
    const requestOptions = { ...this.#client.getRequestOptions() };
    const requestHeaders = new Headers([
      ...new Headers(requestOptions.headers).entries(),
      ["authorization", `Bearer ${await this.#client.getAccessToken()}`],
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
      requestOptions.body = payloadKey && typeof payload[payloadKey] === "string" ? payload[payloadKey] : JSON.stringify(payloadKey ? payload[payloadKey] : payload);
    }
    if (requestOptions.body && !requestHeaders.has("content-type") && !(payload instanceof FormData)) {
      requestHeaders.set("content-type", "application/json");
    }
    if (queryParams) {
      Object.assign(searchParams, queryParams);
    }
    const url = new URL(this.#getBaseUrl());
    const pathTemplate = parseTemplate(joinPath(this.#basePath, path));
    url.pathname = joinPath(url.pathname, pathTemplate.expand(urlParams));
    url.search = stringifyQueryParams(searchParams);
    try {
      const res = await fetchWithError(url, {
        ...requestOptions,
        headers: requestHeaders,
        method,
        ...this.#client.timeout ? { signal: AbortSignal.timeout(this.#client.timeout) } : {}
      });
      if (returnResourceIdInLocationHeader) {
        const locationHeader = res.headers.get("location");
        if (typeof locationHeader !== "string") {
          throw new Error(`location header is not found in request: ${res.url}`);
        }
        const resourceId = locationHeader.split(SLASH).pop();
        if (!resourceId) {
          throw new Error(`resourceId is not found in Location header from request: ${res.url}`);
        }
        const { field } = returnResourceIdInLocationHeader;
        return { [field]: resourceId };
      }
      if (Object.entries(headers || []).find(([key, value]) => key.toLowerCase() === "accept" && value === "application/octet-stream")) {
        return await res.arrayBuffer();
      }
      return await parseResponse(res);
    } catch (err) {
      if (err instanceof NetworkError && err.response.status === 404 && catchNotFound) {
        return null;
      }
      throw err;
    }
  }
  #transformKey(payload, keyMapping) {
    if (!payload) {
      return;
    }
    Object.keys(keyMapping).forEach((key) => {
      if (typeof payload[key] === "undefined") {
        return;
      }
      const newKey = keyMapping[key];
      payload[newKey] = payload[key];
      delete payload[key];
    });
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/resource.js
var Resource = class {
  #agent;
  constructor(client, settings = {}) {
    this.#agent = new Agent({
      client,
      ...settings
    });
  }
  makeRequest = (args) => {
    return this.#agent.request(args);
  };
  // update request will take three types: query, payload and response
  makeUpdateRequest = (args) => {
    return this.#agent.updateRequest(args);
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
  // Get required actions provider's configuration description
  getRequiredActionConfigDescription = this.makeRequest({
    method: "GET",
    path: "/required-actions/{alias}/config-description",
    urlParamKeys: ["alias"]
  });
  // Get the configuration of the RequiredAction provider in the current Realm.
  getRequiredActionConfig = this.makeRequest({
    method: "GET",
    path: "/required-actions/{alias}/config",
    urlParamKeys: ["alias"]
  });
  // Remove the configuration from the RequiredAction provider in the current Realm.
  removeRequiredActionConfig = this.makeRequest({
    method: "DELETE",
    path: "/required-actions/{alias}/config",
    urlParamKeys: ["alias"]
  });
  // Update the configuration from the RequiredAction provider in the current Realm.
  updateRequiredActionConfig = this.makeUpdateRequest({
    method: "PUT",
    path: "/required-actions/{alias}/config",
    urlParamKeys: ["alias"]
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
  clearKeysCache = this.makeRequest({
    method: "POST",
    path: "/clear-keys-cache"
  });
  clearCrlCache = this.makeRequest({
    method: "POST",
    path: "/clear-crl-cache"
  });
  clearRealmCache = this.makeRequest({
    method: "POST",
    path: "/clear-realm-cache"
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
    path: "/policies",
    queryParamKeys: ["include-global-policies"],
    keyTransform: {
      includeGlobalPolicies: "include-global-policies"
    }
  });
  updatePolicy = this.makeRequest({
    method: "PUT",
    path: "/policies"
  });
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/parseNodeFactoryRegistry.js
var ParseNodeFactoryRegistry = class {
  constructor() {
    this.jsonContentType = "application/json";
    this.contentTypeAssociatedFactories = /* @__PURE__ */ new Map();
  }
  getValidContentType() {
    throw new Error("The registry supports multiple content types. Get the registered factory instead.");
  }
  /**
   * Creates a {@link ParseNode} from the given {@link ArrayBuffer} and content type.
   * @param contentType the content type of the {@link ArrayBuffer}.
   * @param content the {@link ArrayBuffer} to read from.
   * @returns a {@link ParseNode} that can deserialize the given {@link ArrayBuffer}.
   */
  getRootParseNode(contentType, content) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    if (!content) {
      throw new Error("content cannot be undefined or empty");
    }
    const vendorSpecificContentType = contentType.split(";")[0];
    let factory = this.contentTypeAssociatedFactories.get(vendorSpecificContentType);
    if (factory) {
      return factory.getRootParseNode(vendorSpecificContentType, content);
    }
    const cleanedContentType = vendorSpecificContentType.replace(/[^/]+\+/gi, "");
    factory = this.contentTypeAssociatedFactories.get(cleanedContentType);
    if (factory) {
      return factory.getRootParseNode(cleanedContentType, content);
    }
    throw new Error(`Content type ${cleanedContentType} does not have a factory registered to be parsed`);
  }
  /**
   * Registers the default deserializer to the registry.
   * @param type the class of the factory to be registered.
   * @param backingStoreFactory The backing store factory to use.
   */
  registerDefaultDeserializer(type, backingStoreFactory) {
    if (!type)
      throw new Error("Type is required");
    const deserializer = new type(backingStoreFactory);
    this.contentTypeAssociatedFactories.set(deserializer.getValidContentType(), deserializer);
  }
  /**
   * Deserializes a buffer into a parsable object
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized parsable object
   */
  deserializeFromJson(bufferOrString, factory) {
    return this.deserialize(this.jsonContentType, bufferOrString, factory);
  }
  /**
   * Deserializes a buffer into a collection of parsable object
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized collection of parsable objects
   */
  deserializeCollectionFromJson(bufferOrString, factory) {
    return this.deserializeCollection(this.jsonContentType, bufferOrString, factory);
  }
  /**
   * Deserializes a buffer into a parsable object
   * @param contentType the content type to serialize to
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized parsable object
   */
  deserialize(contentType, bufferOrString, factory) {
    if (typeof bufferOrString === "string") {
      bufferOrString = this.getBufferFromString(bufferOrString);
    }
    const reader = this.getParseNode(contentType, bufferOrString, factory);
    return reader.getObjectValue(factory);
  }
  /**
   * Deserializes a buffer into a parsable object
   * @param contentType the content type to serialize to
   * @param buffer the value to deserialize
   * @param factory the factory for the model type
   * @returns the deserialized parsable object
   */
  getParseNode(contentType, buffer, factory) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    if (!buffer) {
      throw new Error("buffer cannot be undefined");
    }
    if (!factory) {
      throw new Error("factory cannot be undefined");
    }
    return this.getRootParseNode(contentType, buffer);
  }
  /**
   * Deserializes a buffer into a collection of parsable object
   * @param contentType the content type to serialize to
   * @param bufferOrString the value to serialize
   * @param factory the factory for the model type
   * @returns the deserialized collection of parsable objects
   */
  deserializeCollection(contentType, bufferOrString, factory) {
    if (typeof bufferOrString === "string") {
      bufferOrString = this.getBufferFromString(bufferOrString);
    }
    const reader = this.getParseNode(contentType, bufferOrString, factory);
    return reader.getCollectionOfObjectValues(factory);
  }
  /**
   * Deserializes a buffer into a a collection of parsable object
   * @param value the string to get a buffer from
   * @returns the ArrayBuffer representation of the string
   */
  getBufferFromString(value) {
    const encoder = new TextEncoder();
    return encoder.encode(value).buffer;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/parseNodeProxyFactory.js
var ParseNodeProxyFactory = class {
  getValidContentType() {
    return this._concrete.getValidContentType();
  }
  /**
   * Creates a new proxy factory that wraps the specified concrete factory while composing the before and after callbacks.
   * @param _concrete the concrete factory to wrap
   * @param _onBefore the callback to invoke before the deserialization of any model object.
   * @param _onAfter the callback to invoke after the deserialization of any model object.
   */
  constructor(_concrete, _onBefore, _onAfter) {
    this._concrete = _concrete;
    this._onBefore = _onBefore;
    this._onAfter = _onAfter;
    if (!_concrete) {
      throw new Error("_concrete cannot be undefined");
    }
  }
  getRootParseNode(contentType, content) {
    const node = this._concrete.getRootParseNode(contentType, content);
    const originalBefore = node.onBeforeAssignFieldValues;
    const originalAfter = node.onAfterAssignFieldValues;
    node.onBeforeAssignFieldValues = (value) => {
      if (this._onBefore)
        this._onBefore(value);
      if (originalBefore)
        originalBefore(value);
    };
    node.onAfterAssignFieldValues = (value) => {
      if (this._onAfter)
        this._onAfter(value);
      if (originalAfter)
        originalAfter(value);
    };
    return node;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/serializationWriterFactoryRegistry.js
var SerializationWriterFactoryRegistry = class {
  constructor() {
    this.jsonContentType = "application/json";
    this.contentTypeAssociatedFactories = /* @__PURE__ */ new Map();
  }
  getValidContentType() {
    throw new Error("The registry supports multiple content types. Get the registered factory instead.");
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    const vendorSpecificContentType = contentType.split(";")[0];
    let factory = this.contentTypeAssociatedFactories.get(vendorSpecificContentType);
    if (factory) {
      return factory.getSerializationWriter(vendorSpecificContentType);
    }
    const cleanedContentType = vendorSpecificContentType.replace(/[^/]+\+/gi, "");
    factory = this.contentTypeAssociatedFactories.get(cleanedContentType);
    if (factory) {
      return factory.getSerializationWriter(cleanedContentType);
    }
    throw new Error(`Content type ${cleanedContentType} does not have a factory registered to be serialized`);
  }
  /**
   * Registers the default serializer to the registry.
   * @param type the class of the factory to be registered.
   */
  registerDefaultSerializer(type) {
    if (!type)
      throw new Error("Type is required");
    const serializer = new type();
    this.contentTypeAssociatedFactories.set(serializer.getValidContentType(), serializer);
  }
  /**
   * Serializes a parsable object into a buffer
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a buffer containing the serialized value
   */
  serializeToJson(value, serializationFunction) {
    return this.serialize(this.jsonContentType, value, serializationFunction);
  }
  /**
   * Serializes a parsable object into a string representation
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeToJsonAsString(value, serializationFunction) {
    return this.serializeToString(this.jsonContentType, value, serializationFunction);
  }
  /**
   * Serializes a collection of parsable objects into a buffer
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollectionToJson(values, serializationFunction) {
    return this.serializeCollection(this.jsonContentType, values, serializationFunction);
  }
  /**
   * Serializes a collection of parsable objects into a string representation
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollectionToJsonAsString(values, serializationFunction) {
    return this.serializeCollectionToString(this.jsonContentType, values, serializationFunction);
  }
  /**
   * Serializes a parsable object into a buffer
   * @param contentType the content type to serialize to
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a buffer containing the serialized value
   */
  serialize(contentType, value, serializationFunction) {
    const writer = this.getSerializationFactoryWriter(contentType, value, serializationFunction);
    writer.writeObjectValue(void 0, value, serializationFunction);
    return writer.getSerializedContent();
  }
  /**
   * Serializes a parsable object into a string representation
   * @param contentType the content type to serialize to
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeToString(contentType, value, serializationFunction) {
    const buffer = this.serialize(contentType, value, serializationFunction);
    return this.getStringValueFromBuffer(buffer);
  }
  /**
   * Serializes a collection of parsable objects into a buffer
   * @param contentType the content type to serialize to
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollection(contentType, values, serializationFunction) {
    const writer = this.getSerializationFactoryWriter(contentType, values, serializationFunction);
    writer.writeCollectionOfObjectValues(void 0, values, serializationFunction);
    return writer.getSerializedContent();
  }
  /**
   * Serializes a collection of parsable objects into a string representation
   * @param contentType the content type to serialize to
   * @param values the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns a string representing the serialized value
   */
  serializeCollectionToString(contentType, values, serializationFunction) {
    const buffer = this.serializeCollection(contentType, values, serializationFunction);
    return this.getStringValueFromBuffer(buffer);
  }
  /**
   * Gets a serialization writer for a given content type
   * @param contentType the content type to serialize to
   * @param value the value to serialize
   * @param serializationFunction the serialization function for the model type
   * @returns the serialization writer for the given content type
   */
  getSerializationFactoryWriter(contentType, value, serializationFunction) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    }
    if (!value) {
      throw new Error("value cannot be undefined");
    }
    if (!serializationFunction) {
      throw new Error("serializationFunction cannot be undefined");
    }
    return this.getSerializationWriter(contentType);
  }
  /**
   * Gets a string value from a buffer
   * @param buffer the buffer to get a string from
   * @returns the string representation of the buffer
   */
  getStringValueFromBuffer(buffer) {
    const decoder = new TextDecoder();
    return decoder.decode(buffer);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/serializationWriterProxyFactory.js
var SerializationWriterProxyFactory = class {
  getValidContentType() {
    return this._concrete.getValidContentType();
  }
  /**
   * Creates a new proxy factory that wraps the specified concrete factory while composing the before and after callbacks.
   * @param _concrete the concrete factory to wrap
   * @param _onBefore the callback to invoke before the serialization of any model object.
   * @param _onAfter the callback to invoke after the serialization of any model object.
   * @param _onStart the callback to invoke when the serialization of a model object starts
   */
  constructor(_concrete, _onBefore, _onAfter, _onStart) {
    this._concrete = _concrete;
    this._onBefore = _onBefore;
    this._onAfter = _onAfter;
    this._onStart = _onStart;
    if (!_concrete) {
      throw new Error("_concrete cannot be undefined");
    }
  }
  getSerializationWriter(contentType) {
    const writer = this._concrete.getSerializationWriter(contentType);
    const originalBefore = writer.onBeforeObjectSerialization;
    const originalAfter = writer.onAfterObjectSerialization;
    const originalStart = writer.onStartObjectSerialization;
    writer.onBeforeObjectSerialization = (value) => {
      if (this._onBefore)
        this._onBefore(value);
      if (originalBefore)
        originalBefore(value);
    };
    writer.onAfterObjectSerialization = (value) => {
      if (this._onAfter)
        this._onAfter(value);
      if (originalAfter)
        originalAfter(value);
    };
    writer.onStartObjectSerialization = (value, writer_) => {
      if (this._onStart)
        this._onStart(value, writer_);
      if (originalStart)
        originalStart(value, writer_);
    };
    return writer;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedNode.js
var createUntypedNodeFromDiscriminatorValue = (_parseNode) => {
  return deserializeIntoUntypedNode;
};
var isUntypedNode = (node) => {
  const potentialNode = node;
  return (potentialNode === null || potentialNode === void 0 ? void 0 : potentialNode.getValue) !== void 0;
};
var deserializeIntoUntypedNode = (untypedNode = {}) => {
  return {
    value: (_n) => {
      untypedNode.value = null;
    },
    getValue: (_n) => {
      untypedNode.getValue = () => untypedNode.value;
    }
  };
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedNumber.js
function isUntypedNumber(node) {
  const proposedNode = node;
  return proposedNode && typeof proposedNode.value === "number";
}
function createUntypedNumber(value) {
  return {
    value,
    getValue: () => value
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedArray.js
var isUntypedArray = (node) => {
  const proposedNode = node;
  return proposedNode && proposedNode.value instanceof Array && proposedNode.value.every((item) => isUntypedNode(item));
};
var createUntypedArray = (value) => {
  return {
    value,
    getValue: () => value
  };
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedNull.js
function isUntypedNull(node) {
  return node.value === null;
}
function createUntypedNull() {
  return {
    value: null,
    getValue: () => null
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedObject.js
var isUntypedObject = (node) => {
  const proposedNode = node;
  return proposedNode && proposedNode.value instanceof Object && proposedNode.value instanceof Array === false && Object.values(proposedNode.value).every((item) => isUntypedNode(item));
};
var createUntypedObject = (value) => {
  return {
    value,
    getValue: () => value
  };
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedString.js
function isUntypedString(node) {
  const proposedNode = node;
  return proposedNode && typeof proposedNode.value === "string";
}
function createUntypedString(value) {
  return {
    value,
    getValue: () => value
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/serialization/untypedBoolean.js
function isUntypedBoolean(node) {
  const proposedNode = node;
  return proposedNode && typeof proposedNode.value === "boolean";
}
function createUntypedBoolean(value) {
  return {
    value,
    getValue: () => value
  };
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backingStoreParseNodeFactory.js
var BackingStoreParseNodeFactory = class extends ParseNodeProxyFactory {
  /**
   * Initializes a new instance of the BackingStoreParseNodeFactory class given the concrete implementation.
   * @param concrete the concrete implementation of the ParseNodeFactory
   */
  constructor(concrete) {
    super(concrete, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.initializationCompleted = false;
      }
    }, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.initializationCompleted = true;
      }
    });
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backingStoreSerializationWriterProxyFactory.js
var BackingStoreSerializationWriterProxyFactory = class extends SerializationWriterProxyFactory {
  /**
   * Initializes a new instance of the BackingStoreSerializationWriterProxyFactory class given a concrete implementation of SerializationWriterFactory.
   * @param concrete a concrete implementation of SerializationWriterFactory to wrap.
   */
  constructor(concrete) {
    super(concrete, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.returnOnlyChangedValues = true;
      }
    }, (value) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        backedModel.backingStore.returnOnlyChangedValues = false;
        backedModel.backingStore.initializationCompleted = true;
      }
    }, (value, writer) => {
      const backedModel = value;
      if (backedModel === null || backedModel === void 0 ? void 0 : backedModel.backingStore) {
        const keys = backedModel.backingStore.enumerateKeysForValuesChangedToNull();
        for (const key of keys) {
          writer.writeNullValue(key);
        }
      }
    });
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/utils/enumUtils.js
var reverseRecord = (input) => {
  const entries = Object.entries(input).map(([key, value]) => [value, key]);
  return Object.fromEntries(entries);
};
var getEnumValueFromStringValue = (stringValue, originalType) => {
  const reversed = reverseRecord(originalType);
  return originalType[reversed[stringValue]];
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/utils/guidUtils.js
var guidValidator = /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/i;
var parseGuidString = (source) => {
  if (source && guidValidator.test(source)) {
    return source;
  }
  return void 0;
};
var createGuid = () => [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
var gen = (count) => {
  let out = "";
  for (let i = 0; i < count; i++) {
    out += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return out;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/utils/inNodeEnv.js
var inNodeEnv = () => {
  try {
    return !!Buffer && !!process;
  } catch (err) {
    return !(err instanceof ReferenceError);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/inMemoryBackingStore.js
var InMemoryBackingStore = class {
  constructor() {
    this.subscriptions = /* @__PURE__ */ new Map();
    this.store = /* @__PURE__ */ new Map();
    this.returnOnlyChangedValues = false;
    this._initializationCompleted = true;
  }
  get(key) {
    const wrapper = this.store.get(key);
    if (wrapper && (this.returnOnlyChangedValues && wrapper.changed || !this.returnOnlyChangedValues)) {
      return wrapper.value;
    }
    return void 0;
  }
  set(key, value) {
    const oldValueWrapper = this.store.get(key);
    const oldValue = oldValueWrapper === null || oldValueWrapper === void 0 ? void 0 : oldValueWrapper.value;
    if (oldValueWrapper) {
      oldValueWrapper.value = value;
      oldValueWrapper.changed = this.initializationCompleted;
    } else {
      this.store.set(key, {
        changed: this.initializationCompleted,
        value
      });
    }
    this.subscriptions.forEach((sub) => {
      sub(key, oldValue, value);
    });
  }
  enumerate() {
    let filterableArray = [...this.store.entries()];
    if (this.returnOnlyChangedValues) {
      filterableArray = filterableArray.filter(([_, v]) => v.changed);
    }
    return filterableArray.map(([key, value]) => {
      return { key, value };
    });
  }
  enumerateKeysForValuesChangedToNull() {
    const keys = [];
    for (const [key, entry] of this.store) {
      if (entry.changed && !entry.value) {
        keys.push(key);
      }
    }
    return keys;
  }
  subscribe(callback, subscriptionId) {
    if (!callback) {
      throw new Error("callback cannot be undefined");
    }
    subscriptionId = subscriptionId !== null && subscriptionId !== void 0 ? subscriptionId : createGuid();
    this.subscriptions.set(subscriptionId, callback);
    return subscriptionId;
  }
  unsubscribe(subscriptionId) {
    this.subscriptions.delete(subscriptionId);
  }
  clear() {
    this.store.clear();
  }
  set initializationCompleted(value) {
    this._initializationCompleted = value;
    this.store.forEach((v) => {
      v.changed = !value;
    });
  }
  get initializationCompleted() {
    return this._initializationCompleted;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/inMemoryBackingStoreFactory.js
var InMemoryBackingStoreFactory = class {
  createBackingStore() {
    return new InMemoryBackingStore();
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backedModelProxy.js
var createBackedModelProxyHandler = (backingStoreFactory) => {
  const backingStore = backingStoreFactory.createBackingStore();
  const handler = {
    get: (_target, prop) => {
      if (prop === "backingStore") {
        return backingStore;
      }
      return backingStore.get(prop.toString());
    },
    set: (target, prop, value, receiver) => {
      if (prop === "backingStore") {
        console.warn(`BackingStore - Ignoring attempt to set 'backingStore' property`);
        return true;
      }
      Reflect.set(target, prop, value, receiver);
      backingStore.set(prop.toString(), value);
      return true;
    }
  };
  return handler;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/store/backingStoreUtils.js
var BackingStoreKey = "backingStoreEnabled";
function isBackingStoreEnabled(fields) {
  return Object.keys(fields).includes(BackingStoreKey);
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/apiClientBuilder.js
function enableBackingStoreForSerializationWriterFactory(serializationWriterFactoryRegistry, parseNodeFactoryRegistry, original) {
  if (!original)
    throw new Error("Original must be specified");
  let result = original;
  if (original instanceof SerializationWriterFactoryRegistry) {
    enableBackingStoreForSerializationRegistry(original);
  } else {
    result = new BackingStoreSerializationWriterProxyFactory(original);
  }
  enableBackingStoreForSerializationRegistry(serializationWriterFactoryRegistry);
  enableBackingStoreForParseNodeRegistry(parseNodeFactoryRegistry);
  return result;
}
function enableBackingStoreForParseNodeFactory(parseNodeFactoryRegistry, original) {
  if (!original)
    throw new Error("Original must be specified");
  let result = original;
  if (original instanceof ParseNodeFactoryRegistry) {
    enableBackingStoreForParseNodeRegistry(original);
  } else {
    result = new BackingStoreParseNodeFactory(original);
  }
  enableBackingStoreForParseNodeRegistry(parseNodeFactoryRegistry);
  return result;
}
function enableBackingStoreForParseNodeRegistry(registry) {
  for (const [k, v] of registry.contentTypeAssociatedFactories) {
    if (!(v instanceof BackingStoreParseNodeFactory || v instanceof ParseNodeFactoryRegistry)) {
      registry.contentTypeAssociatedFactories.set(k, new BackingStoreParseNodeFactory(v));
    }
  }
}
function enableBackingStoreForSerializationRegistry(registry) {
  for (const [k, v] of registry.contentTypeAssociatedFactories) {
    if (!(v instanceof BackingStoreSerializationWriterProxyFactory || v instanceof SerializationWriterFactoryRegistry)) {
      registry.contentTypeAssociatedFactories.set(k, new BackingStoreSerializationWriterProxyFactory(v));
    }
  }
}

// node_modules/@opentelemetry/api/dist/version.mjs
var VERSION = "1.10.0";

// node_modules/@opentelemetry/api/dist/internal/semver.mjs
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
  const acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
  const rejectedVersions = /* @__PURE__ */ new Set();
  const myVersionMatch = ownVersion.match(re);
  if (!myVersionMatch) return () => false;
  const ownVersionParsed = {
    major: +myVersionMatch[1],
    minor: +myVersionMatch[2],
    patch: +myVersionMatch[3],
    prerelease: myVersionMatch[4]
  };
  if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
    return globalVersion === ownVersion;
  };
  function _reject(v) {
    rejectedVersions.add(v);
    return false;
  }
  function _accept(v) {
    acceptedVersions.add(v);
    return true;
  }
  return function isCompatible2(globalVersion) {
    if (acceptedVersions.has(globalVersion)) return true;
    if (rejectedVersions.has(globalVersion)) return false;
    const globalVersionMatch = globalVersion.match(re);
    if (!globalVersionMatch) return _reject(globalVersion);
    const globalVersionParsed = {
      major: +globalVersionMatch[1],
      minor: +globalVersionMatch[2],
      patch: +globalVersionMatch[3],
      prerelease: globalVersionMatch[4]
    };
    if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
    if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
    if (ownVersionParsed.major === 0) {
      if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
      return _reject(globalVersion);
    }
    if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
    return _reject(globalVersion);
  };
}
var isCompatible = _makeCompatibilityCheck(VERSION);

// node_modules/@opentelemetry/api/dist/internal/global-utils.mjs
var major = VERSION.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = /* @__PURE__ */ Symbol.for(`opentelemetry.js.api.${major}`);
var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
function _makeGlobalApi() {
  return Object.defineProperty({}, "version", {
    value: VERSION,
    enumerable: true,
    writable: false,
    configurable: false
  });
}
function registerGlobal(type, instance, diag, allowOverride = false) {
  var _global$GLOBAL_OPENTE;
  const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_global$GLOBAL_OPENTE = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _global$GLOBAL_OPENTE !== void 0 ? _global$GLOBAL_OPENTE : _makeGlobalApi();
  if (!allowOverride && api[type]) {
    const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
    diag.error(err.stack || err.message);
    return false;
  }
  if (api.version !== "1.10.0") {
    const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${VERSION}`);
    diag.error(err.stack || err.message);
    return false;
  }
  api[type] = instance;
  diag.debug(`@opentelemetry/api: Registered a global for ${type} v${VERSION}.`);
  return true;
}
var _compatibleGlobalApi;
function getGlobal(type) {
  const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api == null) return;
  if (api !== _compatibleGlobalApi) {
    if (!api.version || !isCompatible(api.version)) return;
    _compatibleGlobalApi = api;
  }
  return api[type];
}
function unregisterGlobal(type, diag) {
  diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${VERSION}.`);
  const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api) delete api[type];
}

// node_modules/@opentelemetry/api/dist/diag/ComponentLogger.mjs
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
function logProxy(funcName, namespace, args) {
  const logger = getGlobal("diag");
  if (!logger) return;
  return logger[funcName](namespace, ...args);
}

// node_modules/@opentelemetry/api/dist/diag/internal/logLevelLogger.mjs
function createLogLevelDiagLogger(maxLevel, logger) {
  if (maxLevel < 0) maxLevel = 0;
  else if (maxLevel > 9999) maxLevel = 9999;
  logger = logger || {};
  function _filterFunc(funcName, theLevel) {
    const theFunc = logger[funcName];
    if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
    return function() {
    };
  }
  return {
    error: _filterFunc("error", 30),
    warn: _filterFunc("warn", 50),
    info: _filterFunc("info", 60),
    debug: _filterFunc("debug", 70),
    verbose: _filterFunc("verbose", 80)
  };
}

// node_modules/@opentelemetry/api/dist/api/diag.mjs
var API_NAME = "diag";
var DiagAPI = class DiagAPI2 {
  /** Get the singleton instance of the DiagAPI API */
  static instance() {
    if (!this._instance) this._instance = new DiagAPI2();
    return this._instance;
  }
  /**
  * Private internal constructor
  * @private
  */
  constructor() {
    function _logProxy(funcName) {
      return function(...args) {
        const logger = getGlobal("diag");
        if (!logger) return;
        return logger[funcName](...args);
      };
    }
    const self2 = this;
    const setLogger = (logger, optionsOrLogLevel = { logLevel: 60 }) => {
      var _optionsOrLogLevel$lo;
      if (logger === self2) {
        var _err$stack;
        const err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
        self2.error((_err$stack = err.stack) !== null && _err$stack !== void 0 ? _err$stack : err.message);
        return false;
      }
      if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = { logLevel: optionsOrLogLevel };
      const oldLogger = getGlobal("diag");
      const newLogger = createLogLevelDiagLogger((_optionsOrLogLevel$lo = optionsOrLogLevel.logLevel) !== null && _optionsOrLogLevel$lo !== void 0 ? _optionsOrLogLevel$lo : 60, logger);
      if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
        var _Error$stack;
        const stack = (_Error$stack = (/* @__PURE__ */ new Error()).stack) !== null && _Error$stack !== void 0 ? _Error$stack : "<failed to generate stacktrace>";
        oldLogger.warn(`Current logger will be overwritten from ${stack}`);
        newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
      }
      return registerGlobal("diag", newLogger, self2, true);
    };
    self2.setLogger = setLogger;
    self2.disable = () => {
      unregisterGlobal(API_NAME, self2);
    };
    self2.createComponentLogger = (options) => {
      return new DiagComponentLogger(options);
    };
    self2.verbose = _logProxy("verbose");
    self2.debug = _logProxy("debug");
    self2.info = _logProxy("info");
    self2.warn = _logProxy("warn");
    self2.error = _logProxy("error");
  }
};

// node_modules/@opentelemetry/api/dist/context/context.mjs
function createContextKey(description) {
  return Symbol.for(description);
}
var ROOT_CONTEXT = new class BaseContext {
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
      const context = new BaseContext(self2._currentContext);
      context._currentContext.set(key, value);
      return context;
    };
    self2.deleteValue = (key) => {
      const context = new BaseContext(self2._currentContext);
      context._currentContext.delete(key);
      return context;
    };
  }
}();

// node_modules/@opentelemetry/api/dist/trace/invalid-span-constants.mjs
var INVALID_SPANID = "0000000000000000";
var INVALID_TRACEID = "00000000000000000000000000000000";
var INVALID_SPAN_CONTEXT = {
  traceId: INVALID_TRACEID,
  spanId: INVALID_SPANID,
  traceFlags: 0
};

// node_modules/@opentelemetry/api/dist/trace/NonRecordingSpan.mjs
var NonRecordingSpan = class {
  constructor(spanContext = INVALID_SPAN_CONTEXT) {
    this._spanContext = spanContext;
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(_key, _value) {
    return this;
  }
  setAttributes(_attributes) {
    return this;
  }
  addEvent(_name, _attributes) {
    return this;
  }
  addLink(_link) {
    return this;
  }
  addLinks(_links) {
    return this;
  }
  setStatus(_status) {
    return this;
  }
  updateName(_name) {
    return this;
  }
  end(_endTime) {
  }
  isRecording() {
    return false;
  }
  recordException(_exception, _time) {
  }
};

// node_modules/@opentelemetry/api/dist/trace/spancontext-utils.mjs
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
  if (typeof id !== "string" || id.length !== length) return false;
  let r = 0;
  for (let i = 0; i < id.length; i += 4) r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
  return r === length;
}
function isValidTraceId(traceId) {
  return isValidHex(traceId, 32) && traceId !== "00000000000000000000000000000000";
}
function isValidSpanId(spanId) {
  return isValidHex(spanId, 16) && spanId !== "0000000000000000";
}
function isSpanContextValid(spanContext) {
  return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
  return new NonRecordingSpan(spanContext);
}

// node_modules/@opentelemetry/api/dist/context/NoopContextManager.mjs
var NoopContextManager = class {
  active() {
    return ROOT_CONTEXT;
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
  /** @experimental This API is experimental and may change in minor releases without prior notice. */
  attach(_context) {
    return { dispose() {
    } };
  }
};

// node_modules/@opentelemetry/api/dist/api/context.mjs
var API_NAME2 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
var NOOP_TOKEN = Object.freeze({ dispose: () => {
} });
var ContextAPI = class ContextAPI2 {
  /** Empty private constructor prevents end users from constructing a new instance of the API */
  constructor() {
    this._attachUnsupportedWarned = false;
  }
  /** Get the singleton instance of the Context API */
  static getInstance() {
    if (!this._instance) this._instance = new ContextAPI2();
    return this._instance;
  }
  /**
  * Set the current context manager.
  *
  * @returns true if the context manager was successfully registered, else false
  */
  setGlobalContextManager(contextManager) {
    return registerGlobal(API_NAME2, contextManager, DiagAPI.instance());
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
  with(context, fn, thisArg, ...args) {
    return this._getContextManager().with(context, fn, thisArg, ...args);
  }
  /**
  * Bind a context to a target function or event emitter
  *
  * @param context context to bind to the event emitter or function. Defaults to the currently active context
  * @param target function or event emitter to bind
  */
  bind(context, target) {
    return this._getContextManager().bind(context, target);
  }
  /**
  * Imperatively sets `context` as active, returning a {@link ContextManagementToken} whose
  * {@link ContextManagementToken.dispose} restores the previous context.
  *
  * This is a delicate, low-level API - prefer {@link with}/{@link bind}, which
  * restore context automatically. Use `attach` only to bridge callback
  * boundaries that `with` cannot wrap. Call `token.dispose()` when the
  * operation is done.
  *
  * **Caveat for async functions:** If called inside an async function before
  * the first `await`, the context change may leak into the caller's context
  * and remain active there. Prefer {@link with} for async code.
  *
  * Support is best-effort and varies by the active ContextManager (see
  * {@link ContextManager.attach}); if it does not implement `attach`, this logs
  * a warning and returns a no-op token.
  *
  * @param context The Context to attach
  * @returns A {@link ContextManagementToken} whose dispose() restores the previous Context
  * @since 1.10.0
  * @experimental This API is experimental and may change in minor releases without prior notice.
  */
  attach(context) {
    const contextManager = this._getContextManager();
    if (contextManager.attach) return contextManager.attach(context);
    if (!this._attachUnsupportedWarned) {
      this._attachUnsupportedWarned = true;
      DiagAPI.instance().warn("The current ContextManager does not implement attach(). The context will not be attached. Use a ContextManager that supports attach() (e.g. AsyncLocalStorageContextManager) or use with()/bind() instead.");
    }
    return NOOP_TOKEN;
  }
  _getContextManager() {
    return getGlobal(API_NAME2) || NOOP_CONTEXT_MANAGER;
  }
  /** Disable and remove the global context manager */
  disable() {
    this._getContextManager().disable();
    unregisterGlobal(API_NAME2, DiagAPI.instance());
  }
};

// node_modules/@opentelemetry/api/dist/trace/context-utils.mjs
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
function getSpan(context) {
  return context.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan() {
  return getSpan(ContextAPI.getInstance().active());
}
function setSpan(context, span) {
  return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
  return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
  return setSpan(context, new NonRecordingSpan(spanContext));
}
function getSpanContext(context) {
  var _getSpan;
  return (_getSpan = getSpan(context)) === null || _getSpan === void 0 ? void 0 : _getSpan.spanContext();
}

// node_modules/@opentelemetry/api/dist/trace/NoopTracer.mjs
var contextApi = ContextAPI.getInstance();
var NoopTracer = class {
  startSpan(name, options, context = contextApi.active()) {
    if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new NonRecordingSpan();
    const parentFromContext = context && getSpanContext(context);
    if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) return new NonRecordingSpan(parentFromContext);
    else return new NonRecordingSpan();
  }
  startActiveSpan(name, arg2, arg3, arg4) {
    var _ctx;
    let opts;
    let ctx;
    let fn;
    if (arguments.length < 2) return;
    else if (arguments.length === 2) fn = arg2;
    else if (arguments.length === 3) {
      opts = arg2;
      fn = arg3;
    } else {
      opts = arg2;
      ctx = arg3;
      fn = arg4;
    }
    const parentContext = (_ctx = ctx) !== null && _ctx !== void 0 ? _ctx : contextApi.active();
    const span = this.startSpan(name, opts, parentContext);
    const contextWithSpanSet = setSpan(parentContext, span);
    return contextApi.with(contextWithSpanSet, fn, void 0, span);
  }
};
function isSpanContext(spanContext) {
  return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
}

// node_modules/@opentelemetry/api/dist/trace/ProxyTracer.mjs
var NOOP_TRACER = new NoopTracer();
var ProxyTracer = class {
  constructor(provider, name, version, options) {
    this._provider = provider;
    this.name = name;
    this.version = version;
    this.options = options;
  }
  startSpan(name, options, context) {
    return this._getTracer().startSpan(name, options, context);
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
    if (this._delegate) return this._delegate;
    const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
    if (!tracer) return NOOP_TRACER;
    this._delegate = tracer;
    return this._delegate;
  }
};

// node_modules/@opentelemetry/api/dist/trace/status.mjs
var SpanStatusCode = /* @__PURE__ */ (function(SpanStatusCode2) {
  SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
  SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
  SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
  return SpanStatusCode2;
})({});

// node_modules/@opentelemetry/api/dist/trace/NoopTracerProvider.mjs
var NoopTracerProvider = class {
  getTracer(_name, _version, _options) {
    return new NoopTracer();
  }
};

// node_modules/@opentelemetry/api/dist/trace/ProxyTracerProvider.mjs
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
var ProxyTracerProvider = class {
  /**
  * Get a {@link ProxyTracer}
  */
  getTracer(name, version, options) {
    var _this$getDelegateTrac;
    return (_this$getDelegateTrac = this.getDelegateTracer(name, version, options)) !== null && _this$getDelegateTrac !== void 0 ? _this$getDelegateTrac : new ProxyTracer(this, name, version, options);
  }
  getDelegate() {
    var _this$_delegate;
    return (_this$_delegate = this._delegate) !== null && _this$_delegate !== void 0 ? _this$_delegate : NOOP_TRACER_PROVIDER;
  }
  /**
  * Set the delegate tracer provider
  */
  setDelegate(delegate) {
    this._delegate = delegate;
  }
  getDelegateTracer(name, version, options) {
    var _this$_delegate2;
    return (_this$_delegate2 = this._delegate) === null || _this$_delegate2 === void 0 ? void 0 : _this$_delegate2.getTracer(name, version, options);
  }
};

// node_modules/@opentelemetry/api/dist/api/trace.mjs
var API_NAME3 = "trace";
var TraceAPI = class TraceAPI2 {
  /** Empty private constructor prevents end users from constructing a new instance of the API */
  constructor() {
    this._proxyTracerProvider = new ProxyTracerProvider();
    this.wrapSpanContext = wrapSpanContext;
    this.isSpanContextValid = isSpanContextValid;
    this.deleteSpan = deleteSpan;
    this.getSpan = getSpan;
    this.getActiveSpan = getActiveSpan;
    this.getSpanContext = getSpanContext;
    this.setSpan = setSpan;
    this.setSpanContext = setSpanContext;
  }
  /** Get the singleton instance of the Trace API */
  static getInstance() {
    if (!this._instance) this._instance = new TraceAPI2();
    return this._instance;
  }
  /**
  * Set the current global tracer.
  *
  * @returns true if the tracer provider was successfully registered, else false
  */
  setGlobalTracerProvider(provider) {
    const success = registerGlobal(API_NAME3, this._proxyTracerProvider, DiagAPI.instance());
    if (success) this._proxyTracerProvider.setDelegate(provider);
    return success;
  }
  /**
  * Returns the global tracer provider.
  */
  getTracerProvider() {
    return getGlobal(API_NAME3) || this._proxyTracerProvider;
  }
  /**
  * Returns a tracer from the global tracer provider.
  */
  getTracer(name, version) {
    return this.getTracerProvider().getTracer(name, version);
  }
  /** Remove the global tracer provider */
  disable() {
    unregisterGlobal(API_NAME3, DiagAPI.instance());
    this._proxyTracerProvider = new ProxyTracerProvider();
  }
};

// node_modules/@opentelemetry/api/dist/trace-api.mjs
var trace = TraceAPI.getInstance();

// node_modules/@std-uritemplate/std-uritemplate/dist/index.mjs
var StdUriTemplate = class _StdUriTemplate {
  static expand(template, substitutions) {
    return _StdUriTemplate.expandImpl(template, substitutions);
  }
  static validateLiteral(c, col) {
    switch (c) {
      case "+":
      case "#":
      case "/":
      case ";":
      case "?":
      case "&":
      case " ":
      case "!":
      case "=":
      case "$":
      case "|":
      case "*":
      case ":":
      case "~":
      case "-":
        throw new Error(`Illegal character identified in the token at col: ${col}`);
      default:
        break;
    }
  }
  static getMaxChar(buffer, col) {
    if (!buffer) {
      return -1;
    } else {
      const value = buffer.join("");
      if (value.length === 0) {
        return -1;
      } else {
        if (value.startsWith("0")) {
          throw new Error(`Cannot parse max chars at col: ${col}`);
        }
        const parsed = parseInt(value, 10);
        if (isNaN(parsed) || parsed < 1 || parsed > 9999) {
          throw new Error(`Cannot parse max chars at col: ${col}`);
        }
        return parsed;
      }
    }
  }
  static getOperator(c, token, col) {
    switch (c) {
      case "+":
        return 1;
      case "#":
        return 2;
      case ".":
        return 3;
      case "/":
        return 4;
      case ";":
        return 5;
      case "?":
        return 6;
      case "&":
        return 7;
      default:
        _StdUriTemplate.validateLiteral(c, col);
        token.push(c);
        return 0;
    }
  }
  static expandImpl(str, substitutions) {
    const result = [];
    let token = null;
    let operator = null;
    let composite = false;
    let maxCharBuffer = null;
    let firstToken = true;
    for (let i = 0; i < str.length; i++) {
      const character = str.charAt(i);
      switch (character) {
        case "{":
          token = [];
          firstToken = true;
          break;
        case "}":
          if (token !== null) {
            if (maxCharBuffer !== null && maxCharBuffer.length === 0) {
              throw new Error(`Found an empty prefix at col: ${i}`);
            }
            const expanded = _StdUriTemplate.expandToken(operator, token.join(""), composite, _StdUriTemplate.getMaxChar(maxCharBuffer, i), firstToken, substitutions, result, i);
            if (expanded && firstToken) {
              firstToken = false;
            }
            token = null;
            operator = null;
            composite = false;
            maxCharBuffer = null;
          } else {
            throw new Error(`Failed to expand token, invalid at col: ${i}`);
          }
          break;
        case ",":
          if (token !== null) {
            if (maxCharBuffer !== null && maxCharBuffer.length === 0) {
              throw new Error(`Found an empty prefix at col: ${i}`);
            }
            const expanded = _StdUriTemplate.expandToken(operator, token.join(""), composite, _StdUriTemplate.getMaxChar(maxCharBuffer, i), firstToken, substitutions, result, i);
            if (expanded && firstToken) {
              firstToken = false;
            }
            token = [];
            composite = false;
            maxCharBuffer = null;
            break;
          }
        // Intentional fall-through for commas outside the {}
        default:
          if (token !== null) {
            if (operator === null) {
              operator = _StdUriTemplate.getOperator(character, token, i);
            } else if (maxCharBuffer !== null) {
              if (character >= "0" && character <= "9") {
                maxCharBuffer.push(character);
              } else {
                throw new Error(`Illegal character identified in the token at col: ${i}`);
              }
            } else {
              if (character === ":") {
                maxCharBuffer = [];
              } else if (character === "*") {
                composite = true;
              } else {
                _StdUriTemplate.validateLiteral(character, i);
                token.push(character);
              }
            }
          } else {
            const cp = character.codePointAt(0);
            if (cp > 127 || cp >= 55296 && cp <= 56319) {
              let toEncode;
              if (cp >= 55296 && cp <= 56319 && i + 1 < str.length) {
                toEncode = character + str.charAt(++i);
              } else {
                toEncode = character;
              }
              result.push(encodeURIComponent(toEncode));
            } else {
              result.push(character);
            }
          }
          break;
      }
    }
    if (token === null) {
      return result.join("");
    } else {
      throw new Error("Unterminated token");
    }
  }
  static addPrefix(op, result) {
    switch (op) {
      case 2:
        result.push("#");
        break;
      case 3:
        result.push(".");
        break;
      case 4:
        result.push("/");
        break;
      case 5:
        result.push(";");
        break;
      case 6:
        result.push("?");
        break;
      case 7:
        result.push("&");
        break;
      default:
        return;
    }
  }
  static addSeparator(op, result) {
    switch (op) {
      case 3:
        result.push(".");
        break;
      case 4:
        result.push("/");
        break;
      case 5:
        result.push(";");
        break;
      case 6:
      case 7:
        result.push("&");
        break;
      default:
        result.push(",");
        return;
    }
  }
  static addValue(op, token, value, result, maxChar) {
    switch (op) {
      case 1:
      case 2:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, false);
        break;
      case 6:
      case 7:
        result.push(`${token}=`);
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, true);
        break;
      case 5:
        result.push(token);
        _StdUriTemplate.addExpandedValue("=", value, result, maxChar, true);
        break;
      case 3:
      case 4:
      case 0:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, true);
        break;
    }
  }
  static addValueElement(op, token, value, result, maxChar) {
    switch (op) {
      case 1:
      case 2:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, false);
        break;
      case 6:
      case 7:
      case 5:
      case 3:
      case 4:
      case 0:
        _StdUriTemplate.addExpandedValue(null, value, result, maxChar, true);
        break;
    }
  }
  static isSurrogate(cp) {
    const codeUnit = cp.charCodeAt(0);
    return codeUnit >= 55296 && codeUnit <= 56319;
  }
  static isIprivate(cp) {
    return 57344 <= cp.charCodeAt(0) && cp.charCodeAt(0) <= 63743;
  }
  static isUcschar(cp) {
    const codePoint = cp.codePointAt(0) || 0;
    return 160 <= codePoint && codePoint <= 55295 || 63744 <= codePoint && codePoint <= 64975 || 65008 <= codePoint && codePoint <= 65519;
  }
  static addExpandedValue(prefix, value, result, maxChar, replaceReserved) {
    const stringValue = _StdUriTemplate.convertNativeTypes(value);
    const codePoints = Array.from(stringValue);
    const max = maxChar !== -1 ? Math.min(maxChar, codePoints.length) : codePoints.length;
    let reservedBuffer = void 0;
    if (max > 0 && prefix != null) {
      result.push(prefix);
    }
    for (let i = 0; i < max; i++) {
      const character = codePoints[i];
      if (character === "%" && !replaceReserved) {
        reservedBuffer = [];
      }
      let toAppend = character;
      const cp = character.codePointAt(0) || 0;
      if (cp > 65535) {
        toAppend = encodeURIComponent(character);
      } else if (replaceReserved || _StdUriTemplate.isUcschar(character) || _StdUriTemplate.isIprivate(character)) {
        if (character === "!") {
          toAppend = "%21";
        } else {
          toAppend = encodeURIComponent(toAppend);
        }
      }
      if (reservedBuffer) {
        reservedBuffer.push(toAppend);
        if (reservedBuffer.length === 3) {
          let isEncoded = false;
          try {
            const reserved = reservedBuffer.join("");
            const decoded = decodeURIComponent(reservedBuffer.join(""));
            isEncoded = reserved !== decoded;
          } catch (e) {
          }
          if (isEncoded) {
            result.push(reservedBuffer.join(""));
          } else {
            result.push("%25");
            result.push(reservedBuffer.slice(1).join(""));
          }
          reservedBuffer = void 0;
        }
      } else {
        if (character === " ") {
          result.push("%20");
        } else if (character === "%") {
          result.push("%25");
        } else {
          result.push(toAppend);
        }
      }
    }
    if (reservedBuffer) {
      result.push("%25");
      result.push(reservedBuffer.slice(1).join(""));
    }
  }
  static isList(value) {
    return Array.isArray(value) || value instanceof Set;
  }
  static isMap(value) {
    return value instanceof Map || typeof value === "object";
  }
  static getSubstitutionType(value, col) {
    if (value === void 0 || value === null) {
      return 0;
    } else if (_StdUriTemplate.isNativeType(value)) {
      return 1;
    } else if (_StdUriTemplate.isList(value)) {
      return 2;
    } else if (_StdUriTemplate.isMap(value)) {
      return 3;
    } else {
      throw new Error(`Illegal class passed as substitution, found ${typeof value} at col: ${col}`);
    }
  }
  static isEmpty(substType, value) {
    if (value === void 0 || value === null) {
      return true;
    } else {
      switch (substType) {
        case 1:
          return false;
        case 2:
          return value.length === 0;
        case 3:
          return Object.keys(value).length === 0;
        default:
          return true;
      }
    }
  }
  static isNativeType(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
  }
  static convertNativeTypes(value) {
    if (typeof value === "string") {
      return value;
    } else if (typeof value === "number" || typeof value === "boolean") {
      return value.toString();
    } else {
      throw new Error(`Illegal class passed as substitution, found ${typeof value}`);
    }
  }
  static isHexDigit(c) {
    return c >= "0" && c <= "9" || c >= "A" && c <= "F" || c >= "a" && c <= "f";
  }
  static checkVarname(token, col) {
    if (token.startsWith(".") || token.endsWith(".")) {
      throw new Error(`Invalid variable name at col: ${col}`);
    }
    if (token.indexOf("..") !== -1) {
      throw new Error(`Invalid variable name at col: ${col}`);
    }
    for (let i = 0; i < token.length; i++) {
      if (token.charAt(i) === "%") {
        if (i + 2 >= token.length || !_StdUriTemplate.isHexDigit(token.charAt(i + 1)) || !_StdUriTemplate.isHexDigit(token.charAt(i + 2))) {
          throw new Error(`Invalid variable name at col: ${col}`);
        }
      }
    }
  }
  static expandToken(operator, token, composite, maxChar, firstToken, substitutions, result, col) {
    if (token.length === 0) {
      throw new Error(`Found an empty token at col: ${col}`);
    }
    _StdUriTemplate.checkVarname(token, col);
    const value = substitutions[token];
    const substType = _StdUriTemplate.getSubstitutionType(value, col);
    if (substType === 0 || _StdUriTemplate.isEmpty(substType, value)) {
      return false;
    }
    if (firstToken) {
      _StdUriTemplate.addPrefix(operator, result);
    } else {
      _StdUriTemplate.addSeparator(operator, result);
    }
    switch (substType) {
      case 1:
        _StdUriTemplate.addStringValue(operator, token, value, result, maxChar);
        break;
      case 2:
        _StdUriTemplate.addListValue(operator, token, value, result, maxChar, composite);
        break;
      case 3:
        _StdUriTemplate.addMapValue(operator, token, value, result, maxChar, composite);
        break;
    }
    return true;
  }
  static addStringValue(operator, token, value, result, maxChar) {
    _StdUriTemplate.addValue(operator, token, value, result, maxChar);
  }
  static addListValue(operator, token, value, result, maxChar, composite) {
    let first = true;
    for (const v of value) {
      if (first) {
        _StdUriTemplate.addValue(operator, token, v, result, maxChar);
        first = false;
      } else {
        if (composite) {
          _StdUriTemplate.addSeparator(operator, result);
          _StdUriTemplate.addValue(operator, token, v, result, maxChar);
        } else {
          result.push(",");
          _StdUriTemplate.addValueElement(operator, token, v, result, maxChar);
        }
      }
    }
  }
  static addMapValue(operator, token, value, result, maxChar, composite) {
    let first = true;
    if (maxChar !== -1) {
      throw new Error("Value trimming is not allowed on Maps");
    }
    for (const key in value) {
      const v = value[key];
      if (composite) {
        if (!first) {
          _StdUriTemplate.addSeparator(operator, result);
        }
        _StdUriTemplate.addValueElement(operator, token, key, result, maxChar);
        result.push("=");
      } else {
        if (first) {
          _StdUriTemplate.addValue(operator, token, key, result, maxChar);
        } else {
          result.push(",");
          _StdUriTemplate.addValueElement(operator, token, key, result, maxChar);
        }
        result.push(",");
      }
      _StdUriTemplate.addValueElement(operator, token, v, result, maxChar);
      first = false;
    }
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/dateOnly.js
var DateOnly = class _DateOnly {
  /**
   * Creates a new DateOnly from the given string.
   * @param root0 The year, month, and day
   * @param root0.year The year
   * @param root0.month The month
   * @param root0.day The day
   * @returns The new DateOnly
   * @throws An error if the year is invalid
   * @throws An error if the month is invalid
   * @throws An error if the day is invalid
   */
  constructor({ year = 0, month = 1, day = 1 }) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  /**
   * Creates a new DateOnly from the given date.
   * @param date The date
   * @returns The new DateOnly
   * @throws An error if the date is invalid
   */
  static fromDate(date) {
    if (!date) {
      throw new Error("Date cannot be undefined");
    }
    const result = new _DateOnly({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    });
    return result;
  }
  /**
   * Parses a string into a DateOnly. The string can be of the ISO 8601 time only format or a number representing the ticks of a Date.
   * @param value The value to parse
   * @returns The parsed DateOnly.
   * @throws An error if the value is invalid
   */
  static parse(value) {
    if (!value || value.length === 0) {
      return void 0;
    }
    const exec = /^(\d{4,})-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/gi.exec(value);
    if (exec) {
      const year = parseInt(exec[1], 10);
      const month = parseInt(exec[2], 10);
      const day = parseInt(exec[3], 10);
      return new _DateOnly({ year, month, day });
    }
    const ticks = Date.parse(value);
    if (!isNaN(ticks)) {
      const date = new Date(ticks);
      return this.fromDate(date);
    }
    throw new Error(`Value is not a valid date-only representation: ${value}`);
  }
  /**
   *  Returns a string representation of the date in the format YYYY-MM-DD
   * @returns The date in the format YYYY-MM-DD ISO 8601
   */
  toString() {
    return `${formatSegment(this.year, 4)}-${formatSegment(this.month)}-${formatSegment(this.day)}`;
  }
};
function formatSegment(segment, digits = 2) {
  return segment.toString().padStart(digits, "0");
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/duration.js
var import_tinyduration = __toESM(require_dist(), 1);
var Duration = class _Duration {
  /**
   * Creates a new Duration value from the given parameters.
   * @param root0 The years, months, weeks, days, hours, minutes, seconds, and negative flag
   * @param root0.years The years
   * @param root0.months The months
   * @param root0.weeks The weeks
   * @param root0.days The days
   * @param root0.hours The hours
   * @param root0.minutes The minutes
   * @param root0.seconds The seconds
   * @param root0.negative The negative flag
   * @returns The new Duration
   * @throws An error if years is invalid
   * @throws An error if months is invalid
   * @throws An error if weeks is invalid
   * @throws An error if days is invalid
   * @throws An error if hours is invalid
   * @throws An error if minutes is invalid
   * @throws An error if seconds is invalid
   * @throws An error if weeks is used in combination with years or months
   */
  constructor({ years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, negative = false }) {
    if (years < 0 || years > 9999) {
      throw new Error("Year must be between 0 and 9999");
    }
    if (months < 0) {
      throw new Error("Month must be greater or equal to 0");
    }
    if (weeks < 0) {
      throw new Error("Week must be greater or equal to 0");
    }
    if (days < 0) {
      throw new Error("Day must be greater or equal to 0");
    }
    if (hours < 0) {
      throw new Error("Hour must be greater or equal to 0");
    }
    if (minutes < 0) {
      throw new Error("Minute must be greater or equal to 0");
    }
    if (seconds < 0) {
      throw new Error("Second must be greater or equal to 0");
    }
    if (weeks > 0 && (days > 0 || hours > 0 || minutes > 0 || seconds > 0)) {
      throw new Error("Cannot have weeks and days or hours or minutes or seconds");
    }
    if ((years > 0 || months > 0) && weeks > 0) {
      throw new Error("Cannot have weeks and months or weeks and years");
    }
    this.years = years;
    this.months = months;
    this.weeks = weeks;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.negative = negative;
  }
  /**
   * Parses a string into a Duration. The string can be of the ISO 8601 duration format.
   * @param value The value to parse
   * @returns The parsed Duration.
   * @throws An error if the value is invalid
   */
  static parse(value) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (!value || value.length === 0) {
      return void 0;
    }
    const duration = (0, import_tinyduration.parse)(value);
    return new _Duration({
      years: (_a2 = duration.years) !== null && _a2 !== void 0 ? _a2 : 0,
      months: (_b = duration.months) !== null && _b !== void 0 ? _b : 0,
      weeks: (_c = duration.weeks) !== null && _c !== void 0 ? _c : 0,
      days: (_d = duration.days) !== null && _d !== void 0 ? _d : 0,
      hours: (_e = duration.hours) !== null && _e !== void 0 ? _e : 0,
      minutes: (_f = duration.minutes) !== null && _f !== void 0 ? _f : 0,
      seconds: (_g = duration.seconds) !== null && _g !== void 0 ? _g : 0,
      negative: (_h = duration.negative) !== null && _h !== void 0 ? _h : false
    });
  }
  /**
   * Serializes the duration to a string in the ISO 8601 duration format.
   * @returns The serialized duration.
   */
  toString() {
    return (0, import_tinyduration.serialize)(this);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/recordWithCaseInsensitiveKeys.js
function dictionaryWithCanonicalKeys(canon) {
  const keysNormalizationMap = /* @__PURE__ */ new Map();
  return new Proxy({}, {
    /**
     * Intercept the get operation on the dictionary object and forward it to the target object using Reflect.get.
     * @param target The target object.
     * @param prop The property to get.
     * @returns The value of the property.
     */
    get(target, prop) {
      const normalKey = canon(prop);
      return Reflect.get(target, normalKey);
    },
    /**
     * Intercept the set operation on the dictionary object and forward it to the target object using Reflect.set.
     * @param target The target object.
     * @param prop The property to set.
     * @param value The value to set.
     * @returns A boolean indicating whether the property was set.
     */
    set(target, prop, value) {
      const nonNormalKey = prop.toString();
      const normalKey = canon(prop);
      keysNormalizationMap.set(normalKey, nonNormalKey);
      return Reflect.set(target, normalKey, value);
    },
    /**
     * Intercept the has operation on the dictionary object and forward it to the target object using Reflect.has.
     * @param _ the target object.
     * @param prop The property to check.
     * @returns A boolean indicating whether the property exists.
     */
    has(_, prop) {
      const normalKey = canon(prop);
      return keysNormalizationMap.has(normalKey);
    },
    /**
     * Intercept the defineProperty operation on the dictionary object and forward it to the target object using Reflect.defineProperty.
     * @param target The target object.
     * @param prop The property to define.
     * @param attribs The attributes of the property.
     * @returns A boolean indicating whether the property was defined.
     */
    defineProperty(target, prop, attribs) {
      const nonNormalKey = prop.toString();
      const normalKey = canon(prop);
      keysNormalizationMap.set(normalKey, nonNormalKey);
      return Reflect.defineProperty(target, normalKey, attribs);
    },
    /**
     * Intercept the deleteProperty operation on the dictionary object and forward it to the target object using Reflect.deleteProperty.
     * @param target The target object.
     * @param prop The property to delete.
     * @returns A boolean indicating whether the property was deleted.
     */
    deleteProperty(target, prop) {
      const normalKey = canon(prop);
      keysNormalizationMap.delete(normalKey);
      return Reflect.deleteProperty(target, normalKey);
    },
    /**
     * Intercept the getOwnPropertyDescriptor operation on the dictionary object and forward it to the target object using Reflect.getOwnPropertyDescriptor.
     * @param target The target object.
     * @param prop The property to gets its descriptor.
     * @returns The property descriptor.
     */
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target, canon(prop));
    },
    ownKeys() {
      return [...keysNormalizationMap.values()];
    }
  });
}
function createRecordWithCaseInsensitiveKeys() {
  const record = dictionaryWithCanonicalKeys((p) => typeof p === "string" ? p.toLowerCase() : p.toString().toLowerCase());
  return record;
}

// node_modules/@microsoft/kiota-abstractions/dist/es/src/headers.js
var Headers2 = class extends Map {
  /**
   * Creates a new Headers object.
   * @param entries An iterable object that contains key-value pairs. Each key-value pair must be an array with two elements: the key of the header, and the value of the header.
   * @example
   * ```typescript
   *  const entries: [string, Set<string>][] = [
   *    ['header1', new Set(['value1'])],
   *    ['header2', new Set(['value2', 'value3'])]
   *  ];
   *  const headers = new Headers(entries);
   * ```
   */
  constructor(entries) {
    super();
    this.headers = createRecordWithCaseInsensitiveKeys();
    this.singleValueHeaders = /* @__PURE__ */ new Set(["Content-Type", "Content-Encoding", "Content-Length"]);
    if (entries) {
      entries.forEach(([key, value]) => {
        this.headers[key] = value;
      });
    }
  }
  /**
   * Sets a header with the specified name and value. If a header with the same name already exists, its value is appended with the specified value.
   * @param headerName the name of the header to set
   * @param headerValue the value of the header to set
   * @returns Headers object
   */
  set(headerName, headerValue) {
    this.add(headerName, ...headerValue);
    return this;
  }
  /**
   * Gets the values for the header with the specified name.
   * @param headerName The name of the header to get the values for.
   * @returns The values for the header with the specified name.
   * @throws Error if headerName is null or empty
   */
  get(headerName) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    return this.headers[headerName];
  }
  /**
   * Checks if a header exists.
   * @param key The name of the header to check for.
   * @returns whether or not a header with the given name/key exists.
   */
  has(key) {
    return !!key && !!this.headers[key];
  }
  /**
   * Delete the header with the specified name.
   * @param headerName The name of the header to delete.
   * @returns Whether or not the header existed and was deleted.
   * @throws Error if headerName is null or empty
   */
  delete(headerName) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    if (this.headers[headerName]) {
      delete this.headers[headerName];
      return true;
    }
    return false;
  }
  /**
   * clear the headers collection
   */
  clear() {
    for (const header in this.headers) {
      if (Object.prototype.hasOwnProperty.call(this.headers, header)) {
        delete this.headers[header];
      }
    }
  }
  /**
   * execute a provided function once per each header
   * @param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each header in the dictionary.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn, thisArg) {
    for (const header in this.headers) {
      if (Object.prototype.hasOwnProperty.call(this.headers, header)) {
        callbackfn.call(thisArg, this.headers[header], header, this);
      }
    }
  }
  /**
   * Adds values to the header with the specified name.
   * @param headerName The name of the header to add values to.
   * @param headerValues The values to add to the header.
   * @returns Whether or not the values were added to the header.
   */
  add(headerName, ...headerValues) {
    if (!headerName) {
      console.error("headerName cannot be null or empty");
      return false;
    }
    if (!headerValues) {
      console.error("headerValues cannot be null");
      return false;
    }
    if (headerValues.length === 0) {
      return false;
    }
    if (this.singleValueHeaders.has(headerName)) {
      this.headers[headerName] = /* @__PURE__ */ new Set([headerValues[0]]);
    } else if (this.headers[headerName]) {
      headerValues.forEach((headerValue) => this.headers[headerName].add(headerValue));
    } else {
      this.headers[headerName] = new Set(headerValues);
    }
    return true;
  }
  /**
   * Adds values to the header with the specified name if it's not already present
   * @param headerName The name of the header to add values to.
   * @param headerValue The values to add to the header.
   * @returns If the headerValue have been added to the Dictionary.
   */
  tryAdd(headerName, headerValue) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    if (!headerValue) {
      throw new Error("headerValue cannot be null");
    }
    if (!this.headers[headerName]) {
      this.headers[headerName] = /* @__PURE__ */ new Set([headerValue]);
      return true;
    }
    return false;
  }
  /**
   * Removes the specified value from the header with the specified name.
   * @param headerName The name of the header to remove the value from.
   * @param headerValue The value to remove from the header.
   * @returns Whether or not the header existed and was removed.
   * @throws Error if headerName is null or empty
   * @throws Error if headerValue is null
   */
  remove(headerName, headerValue) {
    if (!headerName) {
      throw new Error("headerName cannot be null or empty");
    }
    if (!headerValue) {
      throw new Error("headerValue cannot be null");
    }
    if (this.headers[headerName]) {
      const result = this.headers[headerName].delete(headerValue);
      if (this.headers[headerName].size === 0) {
        delete this.headers[headerName];
      }
      return result;
    }
    return false;
  }
  /**
   * Adds all the headers values from the specified headers collection.
   * @param headers The headers to update the current headers with.
   * @throws Error if headers is null
   */
  addAll(headers) {
    if (!headers) {
      throw new Error("headers cannot be null");
    }
    for (const header in headers.headers) {
      if (Object.prototype.hasOwnProperty.call(headers.headers, header)) {
        headers.headers[header].forEach((value) => this.add(header, value));
      }
    }
  }
  /**
   * Adds all headers from the request configuration value to the current headers collection.
   * Replaces any existing headers with the same key.
   * @param headers The headers to update the current headers with.
   * @throws Error if headers is null
   */
  addAllRaw(headers) {
    if (!headers) {
      throw new Error("headers cannot be null");
    }
    for (const header in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, header)) {
        const headerValues = headers[header];
        if (Array.isArray(headerValues)) {
          this.add(header, ...headerValues);
        } else {
          this.add(header, headerValues);
        }
      }
    }
  }
  /**
   * Gets the values for the header with the specified name.
   * @param key The name of the header to get the values for.
   * @returns The values for the header with the specified name.
   * @throws Error if key is null or empty
   */
  tryGetValue(key) {
    if (!key) {
      throw new Error("key cannot be null or empty");
    }
    return this.headers[key] ? Array.from(this.headers[key]) : null;
  }
  /**
   * Override toString method for the headers collection
   * @returns a string representation of the headers collection
   */
  toString() {
    return JSON.stringify(this.headers, (_key, value) => value instanceof Set ? [...value] : value);
  }
  /**
   * check if the headers collection is empty
   * @returns a boolean indicating if the headers collection is empty
   */
  isEmpty() {
    return Object.keys(this.headers).length === 0;
  }
  /**
   * get keys of the headers collection
   * @returns an iterator of keys
   */
  keys() {
    return Object.keys(this.headers)[Symbol.iterator]();
  }
  /**
   * get entries
   * @returns an iterator of entries
   */
  entries() {
    return Object.entries(this.headers)[Symbol.iterator]();
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/multipartBody.js
var MultipartBody = class {
  /**
   * Instantiates a new MultipartBody.
   */
  constructor() {
    this._parts = {};
    this._boundary = createGuid().replace(/-/g, "");
  }
  /**
   * Adds or replaces a part with the given name, content type and content.
   * @param partName the name of the part to add or replace.
   * @param partContentType the content type of the part to add or replace.
   * @param content the content of the part to add or replace.
   * @param serializationCallback the serialization callback to use when serializing the part.
   * @param fileName the name of the file associated with this part.
   */
  addOrReplacePart(partName, partContentType, content, serializationCallback, fileName) {
    if (!partName)
      throw new Error("partName cannot be undefined");
    if (!partContentType) {
      throw new Error("partContentType cannot be undefined");
    }
    if (!content)
      throw new Error("content cannot be undefined");
    const normalizePartName = this.normalizePartName(partName);
    this._parts[normalizePartName] = {
      contentType: partContentType,
      content,
      originalName: partName,
      fileName,
      serializationCallback
    };
  }
  /**
   * Gets the content of the part with the given name.
   * @param partName the name of the part to get the content for.
   * @returns the content of the part with the given name.
   */
  getPartValue(partName) {
    if (!partName)
      throw new Error("partName cannot be undefined");
    const normalizePartName = this.normalizePartName(partName);
    const candidate = this._parts[normalizePartName];
    if (!candidate)
      return void 0;
    return candidate.content;
  }
  /**
   * Removes the part with the given name.
   * @param partName the name of the part to remove.
   * @returns true if the part was removed, false if it did not exist.
   */
  removePart(partName) {
    if (!partName)
      throw new Error("partName cannot be undefined");
    const normalizePartName = this.normalizePartName(partName);
    if (!this._parts[normalizePartName])
      return false;
    delete this._parts[normalizePartName];
    return true;
  }
  /**
   * Gets the boundary used to separate each part.
   * @returns the boundary value.
   */
  getBoundary() {
    return this._boundary;
  }
  normalizePartName(original) {
    return original.toLocaleLowerCase();
  }
  /**
   * Lists all the parts in the multipart body.
   * WARNING: meant for internal use only
   * @returns the list of parts in the multipart body.
   */
  listParts() {
    return this._parts;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/timeOnly.js
var TimeOnly = class _TimeOnly {
  /**
   * Creates a new TimeOnly from the given parameters.
   * @param root0 The hours, minutes, seconds, and milliseconds
   * @param root0.hours The hours
   * @param root0.minutes The minutes
   * @param root0.seconds The seconds
   * @param root0.picoseconds The milliseconds
   * @returns The new TimeOnly
   * @throws An error if the milliseconds are invalid
   * @throws An error if the seconds are invalid
   * @throws An error if the minutes are invalid
   * @throws An error if the hours are invalid
   * @throws An error if the milliseconds are invalid
   */
  constructor({ hours = 0, minutes = 0, seconds = 0, picoseconds = 0 }) {
    if (hours < 0 || hours > 23) {
      throw new Error("Hour must be between 0 and 23");
    }
    if (minutes < 0 || minutes > 59) {
      throw new Error("Minute must be between 0 and 59");
    }
    if (seconds < 0 || seconds > 59) {
      throw new Error("Second must be between 0 and 59");
    }
    if (picoseconds < 0 || picoseconds > 9999999) {
      throw new Error("Millisecond must be between 0 and 9999999");
    }
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.picoseconds = picoseconds;
  }
  /**
   * Creates a new TimeOnly from the given date.
   * @param date The date
   * @returns The new TimeOnly
   * @throws An error if the date is invalid
   */
  static fromDate(date) {
    if (!date) {
      throw new Error("Date cannot be undefined");
    }
    return new _TimeOnly({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      picoseconds: date.getMilliseconds() * 1e4
    });
  }
  /**
   * Parses a string into a TimeOnly. The string can be of the ISO 8601 time only format or a number representing the ticks of a Date.
   * @param value The value to parse
   * @returns The parsed TimeOnly.
   * @throws An error if the value is invalid
   */
  static parse(value) {
    var _a2, _b, _c, _d;
    if (!value || value.length === 0) {
      return void 0;
    }
    const ticks = Date.parse(value);
    if (isNaN(ticks)) {
      const exec = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(?:[.](\d{1,12}))?$/gi.exec(value);
      if (exec) {
        const hours = parseInt((_a2 = exec[1]) !== null && _a2 !== void 0 ? _a2 : "", 10);
        const minutes = parseInt((_b = exec[2]) !== null && _b !== void 0 ? _b : "", 10);
        const seconds = parseInt((_c = exec[3]) !== null && _c !== void 0 ? _c : "", 10);
        const milliseconds = parseInt((_d = exec[4]) !== null && _d !== void 0 ? _d : "0", 10);
        return new _TimeOnly({
          hours,
          minutes,
          seconds,
          picoseconds: milliseconds
        });
      } else {
        throw new Error("Value is not a valid time-only representation");
      }
    } else {
      const date = new Date(ticks);
      return this.fromDate(date);
    }
  }
  /**
   * Returns a string representation of the time in the format HH:MM:SS.SSSSSSS
   * @returns The time in the format HH:MM:SS.SSSSSSS
   * @throws An error if the time is invalid
   */
  toString() {
    return `${formatSegment(this.hours, 2)}:${formatSegment(this.minutes, 2)}:${formatSegment(this.seconds, 2)}.${formatSegment(this.picoseconds, 7)}`;
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/requestInformation.js
var RequestInformation = class _RequestInformation {
  /**
   * Initializes a request information instance with the provided values.
   * @param httpMethod The HTTP method for the request.
   * @param urlTemplate The URL template for the request.
   * @param pathParameters The path parameters for the request.
   */
  constructor(httpMethod, urlTemplate, pathParameters) {
    this.pathParameters = createRecordWithCaseInsensitiveKeys();
    this.queryParameters = createRecordWithCaseInsensitiveKeys();
    this.headers = new Headers2();
    this._requestOptions = createRecordWithCaseInsensitiveKeys();
    this.setContentFromParsable = (requestAdapter, contentType, value, modelSerializerFunction) => {
      trace.getTracer(_RequestInformation.tracerKey).startActiveSpan("setContentFromParsable", (span) => {
        try {
          const writer = this.getSerializationWriter(requestAdapter, contentType, value);
          if (value instanceof MultipartBody) {
            contentType += "; boundary=" + value.getBoundary();
          }
          if (!this.headers) {
            this.headers = new Headers2();
          }
          if (Array.isArray(value)) {
            span.setAttribute(_RequestInformation.requestTypeKey, "object[]");
            writer.writeCollectionOfObjectValues(void 0, value, modelSerializerFunction);
          } else {
            span.setAttribute(_RequestInformation.requestTypeKey, "object");
            writer.writeObjectValue(void 0, value, modelSerializerFunction);
          }
          this.setContentAndContentType(writer, contentType);
        } finally {
          span.end();
        }
      });
    };
    this.setContentAndContentType = (writer, contentType) => {
      if (contentType) {
        this.headers.tryAdd(_RequestInformation.contentTypeHeader, contentType);
      }
      this.content = writer.getSerializedContent();
    };
    this.getSerializationWriter = (requestAdapter, contentType, ...values) => {
      if (!requestAdapter)
        throw new Error("httpCore cannot be undefined");
      if (!contentType)
        throw new Error("contentType cannot be undefined");
      if (!values || values.length === 0) {
        throw new Error("values cannot be undefined or empty");
      }
      return requestAdapter.getSerializationWriterFactory().getSerializationWriter(contentType);
    };
    this.setContentFromScalar = (requestAdapter, contentType, value) => {
      trace.getTracer(_RequestInformation.tracerKey).startActiveSpan("setContentFromScalar", (span) => {
        try {
          const writer = this.getSerializationWriter(requestAdapter, contentType, value);
          if (!this.headers) {
            this.headers = new Headers2();
          }
          if (Array.isArray(value)) {
            span.setAttribute(_RequestInformation.requestTypeKey, "[]");
            writer.writeCollectionOfPrimitiveValues(void 0, value);
          } else {
            const valueType = typeof value;
            span.setAttribute(_RequestInformation.requestTypeKey, valueType);
            if (!value) {
              writer.writeNullValue(void 0);
            } else if (valueType === "boolean") {
              writer.writeBooleanValue(void 0, value);
            } else if (valueType === "string") {
              writer.writeStringValue(void 0, value);
            } else if (value instanceof Date) {
              writer.writeDateValue(void 0, value);
            } else if (value instanceof DateOnly) {
              writer.writeDateOnlyValue(void 0, value);
            } else if (value instanceof TimeOnly) {
              writer.writeTimeOnlyValue(void 0, value);
            } else if (value instanceof Duration) {
              writer.writeDurationValue(void 0, value);
            } else if (valueType === "number") {
              writer.writeNumberValue(void 0, value);
            } else if (Array.isArray(value)) {
              writer.writeCollectionOfPrimitiveValues(void 0, value);
            } else {
              throw new Error(`encountered unknown value type during serialization ${valueType}`);
            }
          }
          this.setContentAndContentType(writer, contentType);
        } finally {
          span.end();
        }
      });
    };
    this.setStreamContent = (value, contentType) => {
      if (!contentType) {
        contentType = _RequestInformation.binaryContentType;
      }
      this.headers.tryAdd(_RequestInformation.contentTypeHeader, contentType);
      this.content = value;
    };
    if (httpMethod) {
      this.httpMethod = httpMethod;
    }
    if (urlTemplate) {
      this.urlTemplate = urlTemplate;
    }
    if (pathParameters) {
      this.pathParameters = pathParameters;
    }
  }
  /**
   * Gets the URL of the request
   * @returns the url string
   */
  get URL() {
    const rawUrl = this.pathParameters[_RequestInformation.raw_url_key];
    if (this.uri) {
      return this.uri;
    } else if (rawUrl) {
      this.URL = rawUrl;
      return rawUrl;
    } else if (!this.queryParameters) {
      throw new Error("queryParameters cannot be undefined");
    } else if (!this.pathParameters) {
      throw new Error("pathParameters cannot be undefined");
    } else if (!this.urlTemplate) {
      throw new Error("urlTemplate cannot be undefined");
    } else {
      const data = {};
      for (const key in this.queryParameters) {
        if (this.queryParameters[key] !== null && this.queryParameters[key] !== void 0) {
          data[key] = this.normalizeValue(this.queryParameters[key]);
        }
      }
      for (const key in this.pathParameters) {
        if (this.pathParameters[key] !== null && this.pathParameters[key] !== void 0) {
          data[key] = this.normalizeValue(this.pathParameters[key]);
        }
      }
      return StdUriTemplate.expand(this.urlTemplate, data);
    }
  }
  /** Sets the URL of the request */
  set URL(url) {
    if (!url)
      throw new Error("URL cannot be undefined");
    this.uri = url;
    this.queryParameters = {};
    this.pathParameters = {};
  }
  /**
   * Gets the request options for the request.
   * @returns the request options.
   */
  getRequestOptions() {
    return this._requestOptions;
  }
  /**
   * Adds the headers for the request.
   * @param source The source collection to add the headers to
   */
  addRequestHeaders(source) {
    if (source) {
      this.headers.addAllRaw(source);
    }
  }
  /**
   * Adds the request options for the request.
   * @param options the options to add.
   */
  addRequestOptions(options) {
    if (!options || options.length === 0)
      return;
    options.forEach((option) => {
      this._requestOptions[option.getKey()] = option;
    });
  }
  /**
   * Removes the request options for the request.
   * @param options the options to remove.
   */
  removeRequestOptions(...options) {
    if (!options || options.length === 0)
      return;
    options.forEach((option) => {
      delete this._requestOptions[option.getKey()];
    });
  }
  normalizeValue(value) {
    if (value instanceof DateOnly || value instanceof TimeOnly || value instanceof Duration) {
      return value.toString();
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (Array.isArray(value)) {
      return value.map((val) => this.normalizeValue(val));
    }
    return value;
  }
  /**
   * Sets the query string parameters from a raw object.
   * @param q parameters the parameters.
   * @param p the mapping from code symbol to URI template parameter name.
   */
  setQueryStringParametersFromRawObject(q, p) {
    if (q === null || q === void 0)
      return;
    Object.entries(q).forEach(([k, v]) => {
      let key = k;
      if (p) {
        const keyCandidate = p[key];
        if (keyCandidate) {
          key = keyCandidate;
        }
      }
      if (typeof v === "boolean" || typeof v === "number" || typeof v === "string" || Array.isArray(v))
        this.queryParameters[key] = v;
      else if (v instanceof DateOnly || v instanceof TimeOnly || v instanceof Duration)
        this.queryParameters[key] = v.toString();
      else if (v instanceof Date)
        this.queryParameters[key] = v.toISOString();
      else if (v === void 0)
        this.queryParameters[key] = void 0;
    });
  }
  /**
   * Configure the current request with headers, query parameters and options.
   * @param config the configuration object to use.
   * @param queryParametersMapper mapping between code symbols and URI template parameter names.
   */
  configure(config, queryParametersMapper) {
    if (!config)
      return;
    this.addRequestHeaders(config.headers);
    this.setQueryStringParametersFromRawObject(config.queryParameters, queryParametersMapper);
    this.addRequestOptions(config.options);
  }
};
RequestInformation.raw_url_key = "request-raw-url";
RequestInformation.binaryContentType = "application/octet-stream";
RequestInformation.contentTypeHeader = "Content-Type";
RequestInformation.tracerKey = "@microsoft/kiota-abstractions";
RequestInformation.requestTypeKey = "com.microsoft.kiota.request.type";

// node_modules/@microsoft/kiota-abstractions/dist/es/src/getPathParameters.js
var getPathParameters = (parameters) => {
  const result = {};
  if (typeof parameters === "string") {
    result[RequestInformation.raw_url_key] = parameters;
  } else if (parameters) {
    for (const key in parameters) {
      if (Object.prototype.hasOwnProperty.call(parameters, key)) {
        result[key] = parameters[key];
      }
    }
  }
  return result;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/httpMethod.js
var HttpMethod;
(function(HttpMethod2) {
  HttpMethod2["GET"] = "GET";
  HttpMethod2["POST"] = "POST";
  HttpMethod2["PATCH"] = "PATCH";
  HttpMethod2["DELETE"] = "DELETE";
  HttpMethod2["OPTIONS"] = "OPTIONS";
  HttpMethod2["CONNECT"] = "CONNECT";
  HttpMethod2["TRACE"] = "TRACE";
  HttpMethod2["HEAD"] = "HEAD";
  HttpMethod2["PUT"] = "PUT";
})(HttpMethod || (HttpMethod = {}));

// node_modules/@microsoft/kiota-abstractions/dist/es/src/apiClientProxifier.js
var sanitizeMethodName = (methodName) => {
  if (methodName.startsWith("to")) {
    return methodName.substring(2).replace("RequestInformation", "").toLowerCase();
  }
  return methodName;
};
var getRequestMethod = (key) => {
  switch (sanitizeMethodName(key)) {
    case "delete":
      return "delete";
    case "get":
      return "get";
    case "head":
      return "head";
    case "options":
      return "options";
    case "patch":
      return "patch";
    case "post":
      return "post";
    case "put":
      return "put";
    default:
      return void 0;
  }
};
var toRequestInformation = (urlTemplate, pathParameters, metadata, requestAdapter, httpMethod, body, bodyMediaType, requestConfiguration) => {
  const requestInfo = new RequestInformation(httpMethod, urlTemplate, pathParameters);
  requestInfo.configure(requestConfiguration, metadata.queryParametersMapper);
  addAcceptHeaderIfPresent(metadata, requestInfo);
  if (metadata.requestBodySerializer) {
    if (!body)
      throw new Error("body cannot be undefined");
    if (typeof metadata.requestBodySerializer === "function") {
      requestInfo.setContentFromParsable(requestAdapter, metadata.requestBodyContentType ? metadata.requestBodyContentType : bodyMediaType, body, metadata.requestBodySerializer);
    } else {
      requestInfo.setContentFromScalar(requestAdapter, metadata.requestBodyContentType ? metadata.requestBodyContentType : bodyMediaType, body);
    }
  } else if (metadata.requestInformationContentSetMethod === "setStreamContent") {
    if (!body)
      throw new Error("body cannot be undefined");
    requestInfo.setStreamContent(body, metadata.requestBodyContentType ? metadata.requestBodyContentType : bodyMediaType);
  }
  return requestInfo;
};
var addAcceptHeaderIfPresent = (metadata, requestInfo) => {
  if (metadata.responseBodyContentType) {
    requestInfo.headers.tryAdd("Accept", metadata.responseBodyContentType);
  }
};
var getRequestMediaTypeUserDefinedValue = (requestMetadata, args) => {
  if (args.length > 2 && !requestMetadata.requestBodySerializer && requestMetadata.requestInformationContentSetMethod === "setStreamContent" && typeof args[1] === "string") {
    return args[1];
  }
  return void 0;
};
var getRequestConfigurationValue = (args) => {
  if (args.length > 0) {
    return args[args.length - 1];
  }
  return void 0;
};
var send = (requestAdapter, requestInfo, metadata) => {
  switch (metadata.adapterMethodName) {
    case "send":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.send(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendCollection":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendCollection(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendEnum":
      if (!metadata.enumObject) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendEnum(requestInfo, metadata.enumObject, metadata.errorMappings);
    case "sendCollectionOfEnum":
      if (!metadata.enumObject) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendCollectionOfEnum(requestInfo, metadata.enumObject, metadata.errorMappings);
    case "sendCollectionOfPrimitive":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendCollectionOfPrimitive(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendPrimitive":
      if (!metadata.responseBodyFactory) {
        throw new Error("couldn't find response body factory");
      }
      return requestAdapter.sendPrimitive(requestInfo, metadata.responseBodyFactory, metadata.errorMappings);
    case "sendNoResponseContent":
      return requestAdapter.sendNoResponseContent(requestInfo, metadata.errorMappings);
    default:
      throw new Error("couldn't find adapter method");
  }
};
var apiClientProxifier = (requestAdapter, pathParameters, navigationMetadata, requestsMetadata) => {
  if (!requestAdapter)
    throw new Error("requestAdapter cannot be undefined");
  if (!pathParameters)
    throw new Error("pathParameters cannot be undefined");
  return new Proxy({}, {
    get: (_, property) => {
      const name = String(property);
      if (name === "withUrl") {
        return (rawUrl) => {
          if (!rawUrl)
            throw new Error("rawUrl cannot be undefined");
          return apiClientProxifier(requestAdapter, getPathParameters(rawUrl), navigationMetadata, requestsMetadata);
        };
      }
      if (requestsMetadata) {
        const metadataKey = getRequestMethod(name);
        if (metadataKey) {
          const metadata = requestsMetadata[metadataKey];
          if (metadata) {
            switch (name) {
              case "get":
                return (requestConfiguration) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.GET, void 0, void 0, requestConfiguration);
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "patch":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PATCH, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "put":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PUT, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "delete":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.DELETE, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "post":
                return (...args) => {
                  const requestInfo = toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.POST, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                  return send(requestAdapter, requestInfo, metadata);
                };
              case "toGetRequestInformation":
                return (requestConfiguration) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.GET, void 0, void 0, requestConfiguration);
                };
              case "toPatchRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PATCH, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              case "toPutRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.PUT, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              case "toDeleteRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.DELETE, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              case "toPostRequestInformation":
                return (...args) => {
                  return toRequestInformation(metadata.uriTemplate, pathParameters, metadata, requestAdapter, HttpMethod.POST, args.length > 0 ? args[0] : void 0, getRequestMediaTypeUserDefinedValue(metadata, args), getRequestConfigurationValue(args));
                };
              default:
                break;
            }
          }
        }
      }
      if (navigationMetadata) {
        const navigationCandidate = navigationMetadata[name];
        if (navigationCandidate) {
          if (!navigationCandidate.pathParametersMappings || navigationCandidate.pathParametersMappings.length === 0) {
            return apiClientProxifier(requestAdapter, getPathParameters(pathParameters), navigationCandidate.navigationMetadata, navigationCandidate.requestsMetadata);
          }
          return (...argArray) => {
            const downWardPathParameters = getPathParameters(pathParameters);
            if (navigationCandidate.pathParametersMappings && navigationCandidate.pathParametersMappings.length > 0) {
              for (let i = 0; i < argArray.length; i++) {
                const element = argArray[i];
                if (element === void 0 || element === null || element === "") {
                  throw new Error(`path parameter ${navigationCandidate.pathParametersMappings[i]} cannot be undefined`);
                } else {
                  downWardPathParameters[navigationCandidate.pathParametersMappings[i]] = element;
                }
              }
            }
            return apiClientProxifier(requestAdapter, downWardPathParameters, navigationCandidate.navigationMetadata, navigationCandidate.requestsMetadata);
          };
        }
        if (name === "then") {
          return void 0;
        }
        throw new Error(`couldn't find navigation property ${name} data: ${JSON.stringify(navigationMetadata)}`);
      }
    }
  });
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/apiError.js
var DefaultApiError = class extends Error {
  constructor(message) {
    super(message);
    this.responseHeaders = {};
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/authentication/apiKeyAuthenticationProvider.js
var ApiKeyLocation;
(function(ApiKeyLocation2) {
  ApiKeyLocation2[ApiKeyLocation2["QueryParameter"] = 0] = "QueryParameter";
  ApiKeyLocation2[ApiKeyLocation2["Header"] = 1] = "Header";
})(ApiKeyLocation || (ApiKeyLocation = {}));

// node_modules/@microsoft/kiota-abstractions/dist/es/src/authentication/baseBearerTokenAuthenticationProvider.js
var BaseBearerTokenAuthenticationProvider = class _BaseBearerTokenAuthenticationProvider {
  /**
   * The constructor for the BaseBearerTokenAuthenticationProvider
   * @param accessTokenProvider The AccessTokenProvider instance that this provider will use to authenticate requests.
   */
  constructor(accessTokenProvider) {
    this.accessTokenProvider = accessTokenProvider;
    this.authenticateRequest = async (request, additionalAuthenticationContext) => {
      var _a2;
      if (!request) {
        throw new Error("request info cannot be null");
      }
      if ((additionalAuthenticationContext === null || additionalAuthenticationContext === void 0 ? void 0 : additionalAuthenticationContext.claims) && request.headers.has(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey)) {
        request.headers.delete(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey);
      }
      if (!((_a2 = request.headers) === null || _a2 === void 0 ? void 0 : _a2.has(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey))) {
        const token = await this.accessTokenProvider.getAuthorizationToken(request.URL, additionalAuthenticationContext);
        if (!request.headers) {
          request.headers = new Headers2();
        }
        if (token) {
          request.headers.add(_BaseBearerTokenAuthenticationProvider.authorizationHeaderKey, `Bearer ${token}`);
        }
      }
    };
  }
};
BaseBearerTokenAuthenticationProvider.authorizationHeaderKey = "Authorization";

// node_modules/@microsoft/kiota-abstractions/dist/es/src/nativeResponseHandler.js
var NativeResponseHandler = class {
  handleResponse(response, errorMappings) {
    this.value = response;
    this.errorMappings = errorMappings;
    return Promise.resolve(void 0);
  }
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/nativeResponseWrapper.js
var _a;
var NativeResponseWrapper = class {
};
_a = NativeResponseWrapper;
NativeResponseWrapper.CallAndGetNative = async (originalCall, q, h, o) => {
  const responseHandler = new NativeResponseHandler();
  await originalCall(q, h, o, responseHandler);
  return responseHandler.value;
};
NativeResponseWrapper.CallAndGetNativeWithBody = async (originalCall, requestBody, q, h, o) => {
  const responseHandler = new NativeResponseHandler();
  await originalCall(requestBody, q, h, o, responseHandler);
  return responseHandler.value;
};

// node_modules/@microsoft/kiota-abstractions/dist/es/src/responseHandlerOptions.js
var ResponseHandlerOptionKey = "ResponseHandlerOptionKey";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/customFetchHandler.js
var CustomFetchHandler = class {
  constructor(customFetch) {
    this.customFetch = customFetch;
  }
  /**
   * @inheritdoc
   */
  async execute(url, requestInit) {
    return await this.customFetch(url, requestInit);
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/httpClient.js
var HttpClient = class {
  /**
   *
   * Creates an instance of a HttpClient which contains the middlewares and fetch implementation for request execution.
   * @param customFetch - custom fetch function - a Fetch API implementation
   * @param middlewares - an array of Middleware handlers
   */
  constructor(customFetch, ...middlewares) {
    this.customFetch = customFetch;
    middlewares = (middlewares === null || middlewares === void 0 ? void 0 : middlewares.length) && middlewares[0] ? middlewares : MiddlewareFactory.getDefaultMiddlewares(customFetch);
    if (this.customFetch) {
      middlewares.push(new CustomFetchHandler(customFetch));
    }
    this.setMiddleware(...middlewares);
  }
  /**
   * Processes the middleware parameter passed to set this.middleware property
   * The calling function should validate if middleware is not undefined or not empty.
   * @param middleware - The middleware passed
   */
  setMiddleware(...middleware) {
    for (let i = 0; i < middleware.length - 1; i++) {
      middleware[i].next = middleware[i + 1];
    }
    this.middleware = middleware[0];
  }
  /**
   * Executes a request and returns a promise resolving the response.
   * @param url the request url.
   * @param requestInit the RequestInit object.
   * @param requestOptions the request options.
   * @returns the promise resolving the response.
   */
  async executeFetch(url, requestInit, requestOptions) {
    if (this.middleware) {
      return await this.middleware.execute(url, requestInit, requestOptions);
    } else if (this.customFetch) {
      return this.customFetch(url, requestInit);
    }
    throw new Error("Please provide middlewares or a custom fetch function to execute the request");
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/observabilityOptions.js
var ObservabilityOptionKey = "ObservabilityOptionKey";
var ObservabilityOptionsImpl = class {
  constructor(originalOptions) {
    this._originalOptions = originalOptions !== null && originalOptions !== void 0 ? originalOptions : {};
  }
  getKey() {
    return ObservabilityOptionKey;
  }
  get includeEUIIAttributes() {
    return this._originalOptions.includeEUIIAttributes;
  }
  set includeEUIIAttributes(value) {
    this._originalOptions.includeEUIIAttributes = value;
  }
  getTracerInstrumentationName() {
    return "@microsoft/kiota-http-fetchlibrary";
  }
};
function getObservabilityOptionsFromRequest(requestOptions) {
  if (requestOptions) {
    const observabilityOptions = requestOptions[ObservabilityOptionKey];
    if (observabilityOptions instanceof ObservabilityOptionsImpl) {
      return observabilityOptions;
    }
  }
  return void 0;
}

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/fetchRequestAdapter.js
var FetchRequestAdapter = class _FetchRequestAdapter {
  getSerializationWriterFactory() {
    return this.serializationWriterFactory;
  }
  getParseNodeFactory() {
    return this.parseNodeFactory;
  }
  getBackingStoreFactory() {
    return this.backingStoreFactory;
  }
  /**
   * Instantiates a new request adapter.
   * @param authenticationProvider the authentication provider to use.
   * @param parseNodeFactory the parse node factory to deserialize responses.
   * @param serializationWriterFactory the serialization writer factory to use to serialize request bodies.
   * @param httpClient the http client to use to execute requests.
   * @param observabilityOptions the observability options to use.
   * @param backingStoreFactory the backing store factory to use.
   */
  constructor(authenticationProvider, parseNodeFactory = new ParseNodeFactoryRegistry(), serializationWriterFactory = new SerializationWriterFactoryRegistry(), httpClient = new HttpClient(), observabilityOptions = new ObservabilityOptionsImpl(), backingStoreFactory = new InMemoryBackingStoreFactory()) {
    this.authenticationProvider = authenticationProvider;
    this.parseNodeFactory = parseNodeFactory;
    this.serializationWriterFactory = serializationWriterFactory;
    this.httpClient = httpClient;
    this.backingStoreFactory = backingStoreFactory;
    this.baseUrl = "";
    this.getResponseContentType = (response) => {
      var _a2;
      const header = (_a2 = response.headers.get("content-type")) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase();
      if (!header)
        return void 0;
      const segments = header.split(";");
      if (segments.length === 0)
        return void 0;
      else
        return segments[0];
    };
    this.getResponseHandler = (response) => {
      const options = response.getRequestOptions();
      const responseHandlerOption = options[ResponseHandlerOptionKey];
      return responseHandlerOption === null || responseHandlerOption === void 0 ? void 0 : responseHandlerOption.responseHandler;
    };
    this.sendCollectionOfPrimitive = (requestInfo, responseType, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendCollectionOfPrimitive", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            await this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            switch (responseType) {
              case "string":
              case "number":
              case "boolean":
              case "Date":
              case "Duration":
              case "DateOnly":
              case "TimeOnly":
                const rootNode = await this.getRootParseNode(response);
                return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan(`getCollectionOf${responseType}Value`, (deserializeSpan) => {
                  try {
                    span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, responseType);
                    if (responseType === "string") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else if (responseType === "number") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else if (responseType === "boolean") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else if (responseType === "Date") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else if (responseType === "Duration") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else if (responseType === "DateOnly") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else if (responseType === "TimeOnly") {
                      return rootNode.getCollectionOfPrimitiveValues(responseType);
                    } else {
                      throw new Error("unexpected type to deserialize");
                    }
                  } finally {
                    deserializeSpan.end();
                  }
                });
            }
          } finally {
            await this.purgeResponseBody(response);
          }
        }
      });
    };
    this.sendCollection = (requestInfo, deserialization, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendCollection", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            await this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = await this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getCollectionOfObjectValues", (deserializeSpan) => {
              try {
                const result = rootNode.getCollectionOfObjectValues(deserialization);
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "object[]");
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            await this.purgeResponseBody(response);
          }
        }
      });
    };
    this.startTracingSpan = (requestInfo, methodName, callback) => {
      var _a2;
      const urlTemplate = decodeURIComponent((_a2 = requestInfo.urlTemplate) !== null && _a2 !== void 0 ? _a2 : "");
      const telemetryPathValue = urlTemplate.replace(/\{\?[^}]+\}/gi, "");
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan(`${methodName} - ${telemetryPathValue}`, async (span) => {
        try {
          span.setAttribute("url.uri_template", urlTemplate);
          return await callback(span);
        } finally {
          span.end();
        }
      });
    };
    this.send = (requestInfo, deserializer, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "send", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            await this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = await this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getObjectValue", (deserializeSpan) => {
              try {
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "object");
                const result = rootNode.getObjectValue(deserializer);
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            await this.purgeResponseBody(response);
          }
        }
      });
    };
    this.sendPrimitive = (requestInfo, responseType, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendPrimitive", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            await this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            switch (responseType) {
              case "ArrayBuffer":
                if (!response.body) {
                  return void 0;
                }
                return await response.arrayBuffer();
              case "string":
              case "number":
              case "boolean":
              case "Date":
                const rootNode = await this.getRootParseNode(response);
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, responseType);
                return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan(`get${responseType}Value`, (deserializeSpan) => {
                  try {
                    if (responseType === "string") {
                      return rootNode.getStringValue();
                    } else if (responseType === "number") {
                      return rootNode.getNumberValue();
                    } else if (responseType === "boolean") {
                      return rootNode.getBooleanValue();
                    } else if (responseType === "Date") {
                      return rootNode.getDateValue();
                    } else if (responseType === "Duration") {
                      return rootNode.getDurationValue();
                    } else if (responseType === "DateOnly") {
                      return rootNode.getDateOnlyValue();
                    } else if (responseType === "TimeOnly") {
                      return rootNode.getTimeOnlyValue();
                    } else {
                      throw new Error("unexpected type to deserialize");
                    }
                  } finally {
                    deserializeSpan.end();
                  }
                });
            }
          } finally {
            await this.purgeResponseBody(response);
          }
        }
      });
    };
    this.sendNoResponseContent = (requestInfo, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendNoResponseContent", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        }
        try {
          await this.throwIfFailedResponse(response, errorMappings, span);
        } finally {
          await this.purgeResponseBody(response);
        }
      });
    };
    this.sendEnum = (requestInfo, enumObject, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendEnum", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            await this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = await this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getEnumValue", (deserializeSpan) => {
              try {
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "enum");
                const result = rootNode.getEnumValue(enumObject);
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            await this.purgeResponseBody(response);
          }
        }
      });
    };
    this.sendCollectionOfEnum = (requestInfo, enumObject, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendCollectionOfEnum", async (span) => {
        const response = await this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return await responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            await this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = await this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getCollectionOfEnumValues", (deserializeSpan) => {
              try {
                const result = rootNode.getCollectionOfEnumValues(enumObject);
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "enum[]");
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            await this.purgeResponseBody(response);
          }
        }
      });
    };
    this.enableBackingStore = (backingStoreFactory2) => {
      if (this.parseNodeFactory instanceof ParseNodeFactoryRegistry) {
        this.parseNodeFactory = enableBackingStoreForParseNodeFactory(this.parseNodeFactory, this.parseNodeFactory);
      } else {
        throw new Error("parseNodeFactory is not a ParseNodeFactoryRegistry");
      }
      if (this.serializationWriterFactory instanceof SerializationWriterFactoryRegistry && this.parseNodeFactory instanceof ParseNodeFactoryRegistry) {
        this.serializationWriterFactory = enableBackingStoreForSerializationWriterFactory(this.serializationWriterFactory, this.parseNodeFactory, this.serializationWriterFactory);
      } else {
        throw new Error("serializationWriterFactory is not a SerializationWriterFactoryRegistry or parseNodeFactory is not a ParseNodeFactoryRegistry");
      }
      if (!this.serializationWriterFactory || !this.parseNodeFactory)
        throw new Error("unable to enable backing store");
      if (backingStoreFactory2) {
        this.backingStoreFactory = backingStoreFactory2;
      }
    };
    this.getRootParseNode = (response) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getRootParseNode", async (span) => {
        try {
          const payload = await response.arrayBuffer();
          const responseContentType = this.getResponseContentType(response);
          if (!responseContentType)
            throw new Error("no response content type found for deserialization");
          return this.parseNodeFactory.getRootParseNode(responseContentType, payload);
        } finally {
          span.end();
        }
      });
    };
    this.shouldReturnUndefined = (response) => {
      return response.status === 204 || response.status === 304 || !response.body;
    };
    this.purgeResponseBody = async (response) => {
      if (!response.bodyUsed && response.body) {
        await response.arrayBuffer();
      }
    };
    this.throwIfFailedResponse = (response, errorMappings, spanForAttributes) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("throwIfFailedResponse", async (span) => {
        var _a2, _b, _c;
        try {
          if (response.ok || response.status >= 300 && response.status < 400 && !response.headers.has(_FetchRequestAdapter.locationHeaderName))
            return;
          spanForAttributes.setStatus({
            code: SpanStatusCode.ERROR,
            message: "received_error_response"
          });
          const statusCode = response.status;
          const responseHeaders = {};
          response.headers.forEach((value, key) => {
            responseHeaders[key] = value.split(",");
          });
          const factory = errorMappings ? (_c = (_b = (_a2 = errorMappings[statusCode]) !== null && _a2 !== void 0 ? _a2 : statusCode >= 400 && statusCode < 500 ? errorMappings._4XX : void 0) !== null && _b !== void 0 ? _b : statusCode >= 500 && statusCode < 600 ? errorMappings._5XX : void 0) !== null && _c !== void 0 ? _c : errorMappings.XXX : void 0;
          if (!factory) {
            spanForAttributes.setAttribute(_FetchRequestAdapter.errorMappingFoundAttributeName, false);
            const error = new DefaultApiError("the server returned an unexpected status code and no error class is registered for this code " + statusCode);
            error.responseStatusCode = statusCode;
            error.responseHeaders = responseHeaders;
            spanForAttributes.recordException(error);
            throw error;
          }
          spanForAttributes.setAttribute(_FetchRequestAdapter.errorMappingFoundAttributeName, true);
          const rootNode = await this.getRootParseNode(response);
          let deserializedError = trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getObjectValue", (deserializeSpan) => {
            try {
              return rootNode.getObjectValue(factory);
            } finally {
              deserializeSpan.end();
            }
          });
          spanForAttributes.setAttribute(_FetchRequestAdapter.errorBodyFoundAttributeName, !!deserializedError);
          if (!deserializedError)
            deserializedError = new DefaultApiError("unexpected error type" + typeof deserializedError);
          const errorObject = deserializedError;
          errorObject.responseStatusCode = statusCode;
          errorObject.responseHeaders = responseHeaders;
          spanForAttributes.recordException(errorObject);
          throw errorObject;
        } finally {
          span.end();
        }
      });
    };
    this.getHttpResponseMessage = (requestInfo, spanForAttributes, claims) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getHttpResponseMessage", async (span) => {
        try {
          if (!requestInfo) {
            throw new Error("requestInfo cannot be null");
          }
          this.setBaseUrlForRequestInformation(requestInfo);
          const additionalContext = {};
          if (claims) {
            additionalContext.claims = claims;
          }
          await this.authenticationProvider.authenticateRequest(requestInfo, additionalContext);
          const request = await this.getRequestFromRequestInformation(requestInfo, spanForAttributes);
          if (this.observabilityOptions) {
            requestInfo.addRequestOptions([this.observabilityOptions]);
          }
          let response = await this.httpClient.executeFetch(requestInfo.URL, request, requestInfo.getRequestOptions());
          response = await this.retryCAEResponseIfRequired(requestInfo, response, spanForAttributes, claims);
          if (response) {
            const responseContentLength = response.headers.get("Content-Length");
            if (responseContentLength) {
              spanForAttributes.setAttribute("http.response.body.size", parseInt(responseContentLength, 10));
            }
            const responseContentType = response.headers.get("Content-Type");
            if (responseContentType) {
              spanForAttributes.setAttribute("http.response.header.content-type", responseContentType);
            }
            spanForAttributes.setAttribute("http.response.status_code", response.status);
          }
          return response;
        } finally {
          span.end();
        }
      });
    };
    this.retryCAEResponseIfRequired = async (requestInfo, response, spanForAttributes, claims) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("retryCAEResponseIfRequired", async (span) => {
        try {
          const responseClaims = this.getClaimsFromResponse(response, claims);
          if (responseClaims) {
            span.addEvent(_FetchRequestAdapter.authenticateChallengedEventKey);
            spanForAttributes.setAttribute("http.request.resend_count", 1);
            await this.purgeResponseBody(response);
            return await this.getHttpResponseMessage(requestInfo, spanForAttributes, responseClaims);
          }
          return response;
        } finally {
          span.end();
        }
      });
    };
    this.getClaimsFromResponse = (response, claims) => {
      if (response.status === 401 && !claims) {
        const rawAuthenticateHeader = response.headers.get("WWW-Authenticate");
        if (rawAuthenticateHeader && /^Bearer /gi.test(rawAuthenticateHeader)) {
          const rawParameters = rawAuthenticateHeader.replace(/^Bearer /gi, "").split(",");
          for (const rawParameter of rawParameters) {
            const trimmedParameter = rawParameter.trim();
            if (/claims="[^"]+"/gi.test(trimmedParameter)) {
              return trimmedParameter.replace(/claims="([^"]+)"/gi, "$1");
            }
          }
        }
      }
      return void 0;
    };
    this.setBaseUrlForRequestInformation = (requestInfo) => {
      requestInfo.pathParameters.baseurl = this.baseUrl;
    };
    this.getRequestFromRequestInformation = (requestInfo, spanForAttributes) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getRequestFromRequestInformation", async (span) => {
        var _a2, _b;
        try {
          const method = (_a2 = requestInfo.httpMethod) === null || _a2 === void 0 ? void 0 : _a2.toString();
          const uri = requestInfo.URL;
          spanForAttributes.setAttribute("http.request.method", method !== null && method !== void 0 ? method : "");
          const uriContainsScheme = uri.includes("://");
          const schemeSplatUri = uri.split("://");
          if (uriContainsScheme) {
            spanForAttributes.setAttribute("server.address", schemeSplatUri[0]);
          }
          const uriWithoutScheme = uriContainsScheme ? schemeSplatUri[1] : uri;
          spanForAttributes.setAttribute("url.scheme", uriWithoutScheme.split("/")[0]);
          if (this.observabilityOptions.includeEUIIAttributes) {
            spanForAttributes.setAttribute("url.full", decodeURIComponent(uri));
          }
          const requestContentLength = requestInfo.headers.tryGetValue("Content-Length");
          if (requestContentLength) {
            spanForAttributes.setAttribute("http.response.body.size", parseInt(requestContentLength[0], 10));
          }
          const requestContentType = requestInfo.headers.tryGetValue("Content-Type");
          if (requestContentType) {
            spanForAttributes.setAttribute("http.request.header.content-type", requestContentType);
          }
          const headers = {};
          (_b = requestInfo.headers) === null || _b === void 0 ? void 0 : _b.forEach((_, key) => {
            headers[key.toString().toLocaleLowerCase()] = this.foldHeaderValue(requestInfo.headers.tryGetValue(key));
          });
          const request = {
            method,
            headers,
            body: requestInfo.content
          };
          return request;
        } finally {
          span.end();
        }
      });
    };
    this.foldHeaderValue = (value) => {
      if (!value || value.length < 1) {
        return "";
      } else if (value.length === 1) {
        return value[0];
      } else {
        return value.reduce((acc, val) => acc + val, ",");
      }
    };
    this.convertToNativeRequest = async (requestInfo) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      await this.authenticationProvider.authenticateRequest(requestInfo, void 0);
      return this.startTracingSpan(requestInfo, "convertToNativeRequest", async (span) => {
        const request = await this.getRequestFromRequestInformation(requestInfo, span);
        return request;
      });
    };
    if (!authenticationProvider) {
      throw new Error("authentication provider cannot be null");
    }
    if (!parseNodeFactory) {
      throw new Error("parse node factory cannot be null");
    }
    if (!serializationWriterFactory) {
      throw new Error("serialization writer factory cannot be null");
    }
    if (!httpClient) {
      throw new Error("http client cannot be null");
    }
    if (!observabilityOptions) {
      throw new Error("observability options cannot be null");
    } else {
      this.observabilityOptions = new ObservabilityOptionsImpl(observabilityOptions);
    }
  }
};
FetchRequestAdapter.responseTypeAttributeKey = "com.microsoft.kiota.response.type";
FetchRequestAdapter.eventResponseHandlerInvokedKey = "com.microsoft.kiota.response_handler_invoked";
FetchRequestAdapter.errorMappingFoundAttributeName = "com.microsoft.kiota.error.mapping_found";
FetchRequestAdapter.errorBodyFoundAttributeName = "com.microsoft.kiota.error.body_found";
FetchRequestAdapter.locationHeaderName = "Location";
FetchRequestAdapter.authenticateChallengedEventKey = "com.microsoft.kiota.authenticate_challenge_received";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/utils/headersUtil.js
var getRequestHeader = (options, key) => {
  if (options && options.headers) {
    return options.headers[key];
  }
  return void 0;
};
var setRequestHeader = (options, key, value) => {
  if (options) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers[key] = value;
  }
};
var deleteRequestHeader = (options, key) => {
  if (options) {
    if (!options.headers) {
      options.headers = {};
    }
    delete options.headers[key];
  }
};
var appendRequestHeader = (options, key, value, separator = ", ") => {
  if (options) {
    if (!options.headers) {
      options.headers = {};
    }
    if (!options.headers[key]) {
      options.headers[key] = value;
    } else {
      options.headers[key] += `${separator}${value}`;
    }
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/authorizationHandler.js
var AuthorizationHandler = class _AuthorizationHandler {
  constructor(authenticationProvider) {
    this.authenticationProvider = authenticationProvider;
    this.getClaimsFromResponse = (response, claims) => {
      if (response.status === 401 && !claims) {
        const rawAuthenticateHeader = response.headers.get("WWW-Authenticate");
        if (rawAuthenticateHeader && /^Bearer /gi.test(rawAuthenticateHeader)) {
          const rawParameters = rawAuthenticateHeader.replace(/^Bearer /gi, "").split(",");
          for (const rawParameter of rawParameters) {
            const trimmedParameter = rawParameter.trim();
            if (/claims="[^"]+"/gi.test(trimmedParameter)) {
              return trimmedParameter.replace(/claims="([^"]+)"/gi, "$1");
            }
          }
        }
      }
      return void 0;
    };
    if (!authenticationProvider) {
      throw new Error("authenticationProvider cannot be undefined");
    }
  }
  execute(url, requestInit, requestOptions) {
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("authorizationHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.authorization.enable", true);
          return this.executeInternal(url, requestInit, requestOptions, span);
        } finally {
          span.end();
        }
      });
    }
    return this.executeInternal(url, requestInit, requestOptions, void 0);
  }
  async executeInternal(url, fetchRequestInit, requestOptions, span) {
    var _a2, _b;
    if (this.authorizationIsPresent(fetchRequestInit)) {
      span === null || span === void 0 ? void 0 : span.setAttribute("com.microsoft.kiota.handler.authorization.token_present", true);
      return await this.next.execute(url, fetchRequestInit, requestOptions);
    }
    const token = await this.authenticateRequest(url);
    setRequestHeader(fetchRequestInit, _AuthorizationHandler.AUTHORIZATION_HEADER, `Bearer ${token}`);
    const response = await ((_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(url, fetchRequestInit, requestOptions));
    if (!response) {
      throw new Error("Response is undefined");
    }
    if (response.status !== 401) {
      return response;
    }
    const claims = this.getClaimsFromResponse(response);
    if (!claims) {
      return response;
    }
    span === null || span === void 0 ? void 0 : span.addEvent("com.microsoft.kiota.handler.authorization.challenge_received");
    const claimsToken = await this.authenticateRequest(url, claims);
    setRequestHeader(fetchRequestInit, _AuthorizationHandler.AUTHORIZATION_HEADER, `Bearer ${claimsToken}`);
    span === null || span === void 0 ? void 0 : span.setAttribute("http.request.resend_count", 1);
    const retryResponse = await ((_b = this.next) === null || _b === void 0 ? void 0 : _b.execute(url, fetchRequestInit, requestOptions));
    if (!retryResponse) {
      throw new Error("Response is undefined");
    }
    return retryResponse;
  }
  authorizationIsPresent(request) {
    if (!request) {
      return false;
    }
    const authorizationHeader = getRequestHeader(request, _AuthorizationHandler.AUTHORIZATION_HEADER);
    return authorizationHeader !== void 0 && authorizationHeader !== null;
  }
  async authenticateRequest(url, claims) {
    const additionalAuthenticationContext = {};
    if (claims) {
      additionalAuthenticationContext.claims = claims;
    }
    return await this.authenticationProvider.accessTokenProvider.getAuthorizationToken(url, additionalAuthenticationContext);
  }
};
AuthorizationHandler.AUTHORIZATION_HEADER = "Authorization";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/ChaosHandlerData.js
var methodStatusCode = {
  GET: [429, 500, 502, 503, 504],
  POST: [429, 500, 502, 503, 504, 507],
  PUT: [429, 500, 502, 503, 504, 507],
  PATCH: [429, 500, 502, 503, 504],
  DELETE: [429, 500, 502, 503, 504, 507]
};
var httpStatusCode = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required"
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/chaosStrategy.js
var ChaosStrategy;
(function(ChaosStrategy2) {
  ChaosStrategy2[ChaosStrategy2["MANUAL"] = 0] = "MANUAL";
  ChaosStrategy2[ChaosStrategy2["RANDOM"] = 1] = "RANDOM";
})(ChaosStrategy || (ChaosStrategy = {}));

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/chaosHandler.js
var ChaosHandler = class _ChaosHandler {
  /**
   *
   * To create an instance of ChaosHandler
   * @param [options] - The chaos handler options instance
   * @param manualMap - The Map passed by user containing url-statusCode info
   */
  constructor(options, manualMap) {
    this.options = {
      chaosStrategy: ChaosStrategy.RANDOM,
      statusMessage: "A random status message",
      chaosPercentage: 10
    };
    const chaosOptions = Object.assign(this.options, options);
    if (chaosOptions.chaosPercentage > 100 || chaosOptions.chaosPercentage < 0) {
      throw new Error("Chaos Percentage must be set to a value between 0 and 100.");
    }
    this.options = chaosOptions;
    this.manualMap = manualMap !== null && manualMap !== void 0 ? manualMap : /* @__PURE__ */ new Map();
  }
  /**
   * Fetches a random status code for the RANDOM mode from the predefined array
   * @param requestMethod - the API method for the request
   * @returns a random status code from a given set of status codes
   */
  generateRandomStatusCode(requestMethod) {
    const statusCodeArray = methodStatusCode[requestMethod];
    return statusCodeArray[Math.floor(Math.random() * statusCodeArray.length)];
  }
  /**
   * Strips out the host url and returns the relative url only
   * @param chaosHandlerOptions - The ChaosHandlerOptions object
   * @param urlMethod - the complete URL
   * @returns the string as relative URL
   */
  getRelativeURL(chaosHandlerOptions, urlMethod) {
    const baseUrl = chaosHandlerOptions.baseUrl;
    if (baseUrl === void 0) {
      return urlMethod;
    }
    return urlMethod.replace(baseUrl, "").trim();
  }
  /**
   * Gets a status code from the options or a randomly generated status code
   * @param chaosHandlerOptions - The ChaosHandlerOptions object
   * @param requestURL - the URL for the request
   * @param requestMethod - the API method for the request
   * @returns generated statusCode
   */
  getStatusCode(chaosHandlerOptions, requestURL, requestMethod) {
    if (chaosHandlerOptions.chaosStrategy === ChaosStrategy.MANUAL) {
      if (chaosHandlerOptions.statusCode !== void 0) {
        return chaosHandlerOptions.statusCode;
      } else {
        const relativeURL = this.getRelativeURL(chaosHandlerOptions, requestURL);
        const definedResponses = this.manualMap.get(relativeURL);
        if (definedResponses !== void 0) {
          const mapCode = definedResponses.get(requestMethod);
          if (mapCode !== void 0) {
            return mapCode;
          }
        } else {
          this.manualMap.forEach((value, key) => {
            var _a2;
            const regexURL = new RegExp(key + "$");
            if (regexURL.test(relativeURL)) {
              const responseCode = (_a2 = this.manualMap.get(key)) === null || _a2 === void 0 ? void 0 : _a2.get(requestMethod);
              if (responseCode !== void 0) {
                return responseCode;
              }
            }
          });
        }
      }
    }
    return this.generateRandomStatusCode(requestMethod);
  }
  /**
   * Generates a respondy for the chaoe response
   * @param chaosHandlerOptions - The ChaosHandlerOptions object
   * @param statusCode - the status code for the response
   * @returns the response body
   */
  createResponseBody(chaosHandlerOptions, statusCode) {
    if (chaosHandlerOptions.responseBody) {
      return chaosHandlerOptions.responseBody;
    }
    let body;
    if (statusCode >= 400) {
      const codeMessage = httpStatusCode[statusCode];
      const errMessage = chaosHandlerOptions.statusMessage;
      body = {
        error: {
          code: codeMessage,
          message: errMessage
        }
      };
    } else {
      body = {};
    }
    return body;
  }
  /**
   * Composes a new chaotic response code with the configured parameters
   * @param url The url of the request
   * @param fetchRequestInit The fetch request init object
   * @returns a response object with the configured parameters
   */
  createChaosResponse(url, fetchRequestInit) {
    var _a2;
    if (fetchRequestInit.method === void 0) {
      throw new Error("Request method must be defined.");
    }
    const requestMethod = fetchRequestInit.method;
    const statusCode = this.getStatusCode(this.options, url, requestMethod);
    const responseBody = this.createResponseBody(this.options, statusCode);
    const stringBody = typeof responseBody === "string" ? responseBody : JSON.stringify(responseBody);
    return {
      url,
      body: stringBody,
      status: statusCode,
      statusText: this.options.statusMessage,
      headers: (_a2 = this.options.headers) !== null && _a2 !== void 0 ? _a2 : {}
    };
  }
  execute(url, requestInit, requestOptions) {
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("chaosHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.chaos.enable", true);
          return this.runChaos(url, requestInit, requestOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.runChaos(url, requestInit, requestOptions);
  }
  runChaos(url, requestInit, requestOptions, span) {
    if (Math.floor(Math.random() * 100) < this.options.chaosPercentage) {
      span === null || span === void 0 ? void 0 : span.addEvent(_ChaosHandler.chaosHandlerTriggeredEventKey);
      return Promise.resolve(this.createChaosResponse(url, requestInit));
    } else {
      if (!this.next) {
        throw new Error("Please set the next middleware to continue the request");
      }
      return this.next.execute(url, requestInit, requestOptions);
    }
  }
};
ChaosHandler.chaosHandlerTriggeredEventKey = "com.microsoft.kiota.chaos_handler_triggered";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/compressionHandlerOptions.js
var CompressionHandlerOptionsKey = "CompressionHandlerOptionsKey";
var CompressionHandlerOptions = class {
  /**
   * Create a new instance of the CompressionHandlerOptions class
   * @param config the configuration to apply to the compression handler options.
   */
  constructor(config) {
    var _a2;
    this._enableCompression = (_a2 = config === null || config === void 0 ? void 0 : config.enableCompression) !== null && _a2 !== void 0 ? _a2 : true;
  }
  /**
   * @inheritdoc
   */
  getKey() {
    return CompressionHandlerOptionsKey;
  }
  /**
   * Returns whether the compression handler is enabled or not.
   * @returns whether the compression handler is enabled or not.
   */
  get ShouldCompress() {
    return this._enableCompression;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/compressionHandler.js
var CompressionHandler = class _CompressionHandler {
  /**
   * Creates a new instance of the CompressionHandler class
   * @param handlerOptions The options for the compression handler.
   * @returns An instance of the CompressionHandler class
   */
  constructor(handlerOptions = new CompressionHandlerOptions()) {
    this.handlerOptions = handlerOptions;
    if (!handlerOptions) {
      throw new Error("handlerOptions cannot be undefined");
    }
  }
  /**
   * @inheritdoc
   */
  execute(url, requestInit, requestOptions) {
    let currentOptions = this.handlerOptions;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[CompressionHandlerOptionsKey]) {
      currentOptions = requestOptions[CompressionHandlerOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("compressionHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.compression.enable", currentOptions.ShouldCompress);
          return this.executeInternal(currentOptions, url, requestInit, requestOptions, span);
        } finally {
          span.end();
        }
      });
    }
    return this.executeInternal(currentOptions, url, requestInit, requestOptions);
  }
  async executeInternal(options, url, requestInit, requestOptions, span) {
    var _a2, _b, _c, _d;
    if (!options.ShouldCompress || this.contentRangeBytesIsPresent(requestInit.headers) || this.contentEncodingIsPresent(requestInit.headers) || requestInit.body === null || requestInit.body === void 0) {
      return (_b = (_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(url, requestInit, requestOptions)) !== null && _b !== void 0 ? _b : Promise.reject(new Error("Response is undefined"));
    }
    span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.compressed", true);
    const unCompressedBody = requestInit.body;
    const unCompressedBodySize = this.getRequestBodySize(unCompressedBody);
    const compressedBody = await this.compressRequestBody(unCompressedBody);
    setRequestHeader(requestInit, _CompressionHandler.CONTENT_ENCODING_HEADER, "gzip");
    requestInit.body = compressedBody.compressedBody;
    span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.size", compressedBody.size);
    let response = await ((_c = this.next) === null || _c === void 0 ? void 0 : _c.execute(url, requestInit, requestOptions));
    if (!response) {
      throw new Error("Response is undefined");
    }
    if (response.status === 415) {
      deleteRequestHeader(requestInit, _CompressionHandler.CONTENT_ENCODING_HEADER);
      requestInit.body = unCompressedBody;
      span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.compressed", false);
      span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.size", unCompressedBodySize);
      response = await ((_d = this.next) === null || _d === void 0 ? void 0 : _d.execute(url, requestInit, requestOptions));
    }
    return response !== void 0 && response !== null ? Promise.resolve(response) : Promise.reject(new Error("Response is undefined"));
  }
  contentRangeBytesIsPresent(header) {
    var _a2;
    if (!header) {
      return false;
    }
    const contentRange = getRequestHeader(header, _CompressionHandler.CONTENT_RANGE_HEADER);
    return (_a2 = contentRange === null || contentRange === void 0 ? void 0 : contentRange.toLowerCase().includes("bytes")) !== null && _a2 !== void 0 ? _a2 : false;
  }
  contentEncodingIsPresent(header) {
    if (!header) {
      return false;
    }
    return getRequestHeader(header, _CompressionHandler.CONTENT_ENCODING_HEADER) !== void 0;
  }
  getRequestBodySize(body) {
    if (!body) {
      return 0;
    }
    if (typeof body === "string") {
      return body.length;
    }
    if (body instanceof Blob) {
      return body.size;
    }
    if (body instanceof ArrayBuffer) {
      return body.byteLength;
    }
    if (ArrayBuffer.isView(body)) {
      return body.byteLength;
    }
    if (inNodeEnv() && Buffer.isBuffer(body)) {
      return body.byteLength;
    }
    throw new Error("Unsupported body type");
  }
  readBodyAsBytes(body) {
    if (!body) {
      return { stream: new ReadableStream(), size: 0 };
    }
    const uint8ArrayToStream = (uint8Array) => {
      return new ReadableStream({
        start(controller) {
          controller.enqueue(uint8Array);
          controller.close();
        }
      });
    };
    if (typeof body === "string") {
      return { stream: uint8ArrayToStream(new TextEncoder().encode(body)), size: body.length };
    }
    if (body instanceof Blob) {
      return { stream: body.stream(), size: body.size };
    }
    if (body instanceof ArrayBuffer) {
      return { stream: uint8ArrayToStream(new Uint8Array(body)), size: body.byteLength };
    }
    if (ArrayBuffer.isView(body)) {
      return { stream: uint8ArrayToStream(new Uint8Array(body.buffer, body.byteOffset, body.byteLength)), size: body.byteLength };
    }
    throw new Error("Unsupported body type");
  }
  async compressRequestBody(body) {
    const compressionData = this.readBodyAsBytes(body);
    const compressedBody = await this.compressUsingCompressionStream(compressionData.stream);
    return {
      compressedBody: compressedBody.body,
      size: compressedBody.size
    };
  }
  async compressUsingCompressionStream(uint8ArrayStream) {
    const compressionStream = new CompressionStream("gzip");
    const compressedStream = uint8ArrayStream.pipeThrough(compressionStream);
    const reader = compressedStream.getReader();
    const compressedChunks = [];
    let totalLength = 0;
    let result = await reader.read();
    while (!result.done) {
      const chunk = result.value;
      compressedChunks.push(chunk);
      totalLength += chunk.length;
      result = await reader.read();
    }
    const compressedArray = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of compressedChunks) {
      compressedArray.set(chunk, offset);
      offset += chunk.length;
    }
    return {
      body: compressedArray.buffer,
      size: compressedArray.length
    };
  }
};
CompressionHandler.CONTENT_RANGE_HEADER = "Content-Range";
CompressionHandler.CONTENT_ENCODING_HEADER = "Content-Encoding";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/headersInspectionOptions.js
var HeadersInspectionOptionsKey = "HeadersInspectionOptionsKey";
var HeadersInspectionOptions = class {
  /**
   * Gets the request headers
   * @returns the request headers
   */
  getRequestHeaders() {
    return this.requestHeaders;
  }
  /**
   * Gets the response headers
   * @returns the response headers
   */
  getResponseHeaders() {
    return this.responseHeaders;
  }
  /**
   *
   * To create an instance of HeadersInspectionOptions
   * @param [options] - The headers inspection options value
   * @returns An instance of HeadersInspectionOptions
   * @example const options = new HeadersInspectionOptions({ inspectRequestHeaders: true, inspectResponseHeaders: true });
   */
  constructor(options = {}) {
    var _a2, _b;
    this.requestHeaders = new Headers2();
    this.responseHeaders = new Headers2();
    this.inspectRequestHeaders = (_a2 = options.inspectRequestHeaders) !== null && _a2 !== void 0 ? _a2 : false;
    this.inspectResponseHeaders = (_b = options.inspectResponseHeaders) !== null && _b !== void 0 ? _b : false;
  }
  getKey() {
    return HeadersInspectionOptionsKey;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/headersInspectionHandler.js
var HeadersInspectionHandler = class {
  /**
   *
   * Creates new instance of HeadersInspectionHandler
   * @param _options The options for inspecting the headers
   */
  constructor(_options = new HeadersInspectionOptions()) {
    this._options = _options;
  }
  execute(url, requestInit, requestOptions) {
    let currentOptions = this._options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[HeadersInspectionOptionsKey]) {
      currentOptions = requestOptions[HeadersInspectionOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("retryHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.headersInspection.enable", true);
          return this.executeInternal(url, requestInit, requestOptions, currentOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.executeInternal(url, requestInit, requestOptions, currentOptions);
  }
  async executeInternal(url, requestInit, requestOptions, currentOptions) {
    if (!this.next) {
      throw new Error("next middleware is undefined.");
    }
    if (currentOptions.inspectRequestHeaders && requestInit.headers) {
      for (const [key, value] of requestInit.headers) {
        currentOptions.getRequestHeaders().add(key, value);
      }
    }
    const response = await this.next.execute(url, requestInit, requestOptions);
    if (currentOptions.inspectResponseHeaders && response.headers) {
      for (const [key, value] of response.headers.entries()) {
        currentOptions.getResponseHeaders().add(key, value);
      }
    }
    return response;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/parametersNameDecodingOptions.js
var ParametersNameDecodingHandlerOptionsKey = "RetryHandlerOptionKey";
var ParametersNameDecodingHandlerOptions = class {
  getKey() {
    return ParametersNameDecodingHandlerOptionsKey;
  }
  /**
   *
   * To create an instance of ParametersNameDecodingHandlerOptions
   * @param [options] - The optional parameters
   * @returns An instance of ParametersNameDecodingHandlerOptions
   * @example ParametersNameDecodingHandlerOptions({ enable: true, charactersToDecode: [".", "-", "~", "$"] });
   */
  constructor(options = {}) {
    var _a2, _b;
    this.enable = (_a2 = options.enable) !== null && _a2 !== void 0 ? _a2 : true;
    this.charactersToDecode = (_b = options.charactersToDecode) !== null && _b !== void 0 ? _b : [".", "-", "~", "$"];
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/parametersNameDecodingHandler.js
var ParametersNameDecodingHandler = class {
  /**
   *
   * To create an instance of ParametersNameDecodingHandler
   * @param [options] - The parameters name decoding handler options value
   */
  constructor(options = new ParametersNameDecodingHandlerOptions()) {
    this.options = options;
    if (!options) {
      throw new Error("The options parameter is required.");
    }
  }
  /**
   * To execute the current middleware
   * @param url - The url to be fetched
   * @param requestInit - The request init object
   * @param requestOptions - The request options
   * @returns A Promise that resolves to nothing
   */
  execute(url, requestInit, requestOptions) {
    let currentOptions = this.options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[ParametersNameDecodingHandlerOptionsKey]) {
      currentOptions = requestOptions[ParametersNameDecodingHandlerOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("parametersNameDecodingHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.parameters_name_decoding.enable", currentOptions.enable);
          return this.decodeParameters(url, requestInit, currentOptions, requestOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.decodeParameters(url, requestInit, currentOptions, requestOptions);
  }
  decodeParameters(url, requestInit, currentOptions, requestOptions) {
    var _a2, _b;
    let updatedUrl = url;
    if (currentOptions && currentOptions.enable && url.includes("%") && currentOptions.charactersToDecode && currentOptions.charactersToDecode.length > 0) {
      currentOptions.charactersToDecode.forEach((character) => {
        updatedUrl = updatedUrl.replace(new RegExp(`%${character.charCodeAt(0).toString(16)}`, "gi"), character);
      });
    }
    return (_b = (_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(updatedUrl, requestInit, requestOptions)) !== null && _b !== void 0 ? _b : Promise.reject(new Error("The next middleware is not set."));
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/redirectHandlerOptions.js
var RedirectHandlerOptionKey = "RedirectHandlerOption";
var RedirectHandlerOptions = class _RedirectHandlerOptions {
  /**
   *
   * To create an instance of RedirectHandlerOptions
   * @param [options] - The redirect handler options instance
   * @returns An instance of RedirectHandlerOptions
   * @throws Error if maxRedirects is more than 20 or less than 0
   * @example	const options = new RedirectHandlerOptions({ maxRedirects: 5 });
   */
  constructor(options = {}) {
    var _a2, _b, _c;
    if (options.maxRedirects && options.maxRedirects > _RedirectHandlerOptions.MAX_MAX_REDIRECTS) {
      const error = new Error(`MaxRedirects should not be more than ${_RedirectHandlerOptions.MAX_MAX_REDIRECTS}`);
      error.name = "MaxLimitExceeded";
      throw error;
    }
    if (options.maxRedirects !== void 0 && options.maxRedirects < 0) {
      const error = new Error(`MaxRedirects should not be negative`);
      error.name = "MinExpectationNotMet";
      throw error;
    }
    this.maxRedirects = (_a2 = options.maxRedirects) !== null && _a2 !== void 0 ? _a2 : _RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS;
    this.shouldRedirect = (_b = options.shouldRedirect) !== null && _b !== void 0 ? _b : _RedirectHandlerOptions.defaultShouldRetry;
    this.scrubSensitiveHeaders = (_c = options.scrubSensitiveHeaders) !== null && _c !== void 0 ? _c : _RedirectHandlerOptions.defaultScrubSensitiveHeaders;
  }
  getKey() {
    return RedirectHandlerOptionKey;
  }
};
RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS = 5;
RedirectHandlerOptions.MAX_MAX_REDIRECTS = 20;
RedirectHandlerOptions.defaultShouldRetry = () => true;
RedirectHandlerOptions.defaultScrubSensitiveHeaders = (headers, originalUrl, newUrl) => {
  if (!headers || !originalUrl || !newUrl) {
    return;
  }
  try {
    const originalUri = new URL(originalUrl);
    const newUri = new URL(newUrl);
    const isDifferentHostOrScheme = originalUri.host.toLowerCase() !== newUri.host.toLowerCase() || originalUri.protocol.toLowerCase() !== newUri.protocol.toLowerCase();
    if (isDifferentHostOrScheme) {
      for (const key of Object.keys(headers)) {
        const lower = key.toLowerCase();
        if (lower === "authorization" || lower === "cookie" || lower === "proxy-authorization") {
          delete headers[key];
        }
      }
    }
  } catch (_a2) {
    return;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/redirectHandler.js
var RedirectHandler = class _RedirectHandler {
  /**
   *
   *
   * To create an instance of RedirectHandler
   * @param [options] - The redirect handler options instance
   * @returns An instance of RedirectHandler
   */
  constructor(options = new RedirectHandlerOptions()) {
    this.options = options;
    if (!options) {
      throw new Error("The options parameter is required.");
    }
  }
  /**
   *
   * To check whether the response has the redirect status code or not
   * @param response - The response object
   * @returns A boolean representing whether the response contains the redirect status code or not
   */
  isRedirect(response) {
    return _RedirectHandler.REDIRECT_STATUS_CODES.has(response.status);
  }
  /**
   *
   * To check whether the response has location header or not
   * @param response - The response object
   * @returns A boolean representing the whether the response has location header or not
   */
  hasLocationHeader(response) {
    return response.headers.has(_RedirectHandler.LOCATION_HEADER);
  }
  /**
   *
   * To get the redirect url from location header in response object
   * @param response - The response object
   * @returns A redirect url from location header
   */
  getLocationHeader(response) {
    return response.headers.get(_RedirectHandler.LOCATION_HEADER);
  }
  /**
   *
   * To check whether the given url is a relative url or not
   * @param url - The url string value
   * @returns A boolean representing whether the given url is a relative url or not
   */
  isRelativeURL(url) {
    return !url.includes("://");
  }
  /**
   * To execute the next middleware and to handle in case of redirect response returned by the server
   * @param url - The url string value
   * @param fetchRequestInit - The Fetch RequestInit object
   * @param redirectCount - The redirect count value
   * @param currentOptions - The redirect handler options instance
   * @param requestOptions - The request options
   * @param tracerName - The name to use for the tracer
   * @returns A promise that resolves to nothing
   */
  async executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions, tracerName) {
    var _a2;
    const response = await ((_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(url, fetchRequestInit, requestOptions));
    if (!response) {
      throw new Error("Response is undefined");
    }
    if (redirectCount < currentOptions.maxRedirects && this.isRedirect(response) && this.hasLocationHeader(response) && currentOptions.shouldRedirect(response)) {
      ++redirectCount;
      const redirectUrl = this.getLocationHeader(response);
      if (!redirectUrl) {
        return response;
      }
      const newUrl = this.isRelativeURL(redirectUrl) ? new URL(redirectUrl, url).toString() : redirectUrl;
      if (fetchRequestInit.headers) {
        currentOptions.scrubSensitiveHeaders(fetchRequestInit.headers, url, newUrl);
      }
      if (response.status === _RedirectHandler.STATUS_CODE_SEE_OTHER) {
        fetchRequestInit.method = HttpMethod.GET;
        delete fetchRequestInit.body;
      }
      url = newUrl;
      if (tracerName) {
        return trace.getTracer(tracerName).startActiveSpan(`redirectHandler - redirect ${redirectCount}`, (span) => {
          try {
            span.setAttribute("com.microsoft.kiota.handler.redirect.count", redirectCount);
            span.setAttribute("http.response.status_code", response.status);
            return this.executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions);
          } finally {
            span.end();
          }
        });
      }
      return await this.executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions);
    } else {
      return response;
    }
  }
  /**
   * Executes the request and returns a promise resolving the response.
   * @param url - The url for the request
   * @param requestInit - The Fetch RequestInit object.
   * @param requestOptions - The request options.
   * @returns A Promise that resolves to the response.
   */
  execute(url, requestInit, requestOptions) {
    const redirectCount = 0;
    let currentOptions = this.options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[RedirectHandlerOptionKey]) {
      currentOptions = requestOptions[RedirectHandlerOptionKey];
    }
    requestInit.redirect = _RedirectHandler.MANUAL_REDIRECT;
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("redirectHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.redirect.enable", true);
          return this.executeWithRedirect(url, requestInit, redirectCount, currentOptions, requestOptions, obsOptions.getTracerInstrumentationName());
        } finally {
          span.end();
        }
      });
    }
    return this.executeWithRedirect(url, requestInit, redirectCount, currentOptions, requestOptions);
  }
};
RedirectHandler.REDIRECT_STATUS_CODES = /* @__PURE__ */ new Set([
  301,
  // Moved Permanently
  302,
  // Found
  303,
  // See Other
  307,
  // Temporary Permanently
  308
  // Moved Permanently
]);
RedirectHandler.STATUS_CODE_SEE_OTHER = 303;
RedirectHandler.LOCATION_HEADER = "Location";
RedirectHandler.MANUAL_REDIRECT = "manual";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/retryHandlerOptions.js
var RetryHandlerOptionKey = "RetryHandlerOptionKey";
var RetryHandlerOptions = class _RetryHandlerOptions {
  /**
   *
   * To create an instance of RetryHandlerOptions
   * @param options - The RetryHandlerOptionsParams object
   * @returns An instance of RetryHandlerOptions
   * @example	const options = new RetryHandlerOptions({ maxRetries: 4 });
   */
  constructor(options = {}) {
    var _a2, _b, _c;
    if (options.delay !== void 0 && options.delay > _RetryHandlerOptions.MAX_DELAY) {
      throw this.createError(`Delay should not be more than ${_RetryHandlerOptions.MAX_DELAY}`, "MaxLimitExceeded");
    }
    if (options.maxRetries !== void 0 && options.maxRetries > _RetryHandlerOptions.MAX_MAX_RETRIES) {
      throw this.createError(`MaxRetries should not be more than ${_RetryHandlerOptions.MAX_MAX_RETRIES}`, "MaxLimitExceeded");
    }
    if (options.delay !== void 0 && options.delay < 0) {
      throw this.createError(`Delay should not be negative`, "MinExpectationNotMet");
    }
    if (options.maxRetries !== void 0 && options.maxRetries < 0) {
      throw this.createError(`MaxRetries should not be negative`, "MinExpectationNotMet");
    }
    this.delay = Math.min((_a2 = options.delay) !== null && _a2 !== void 0 ? _a2 : _RetryHandlerOptions.DEFAULT_DELAY, _RetryHandlerOptions.MAX_DELAY);
    this.maxRetries = Math.min((_b = options.maxRetries) !== null && _b !== void 0 ? _b : _RetryHandlerOptions.DEFAULT_MAX_RETRIES, _RetryHandlerOptions.MAX_MAX_RETRIES);
    this.shouldRetry = (_c = options.shouldRetry) !== null && _c !== void 0 ? _c : _RetryHandlerOptions.defaultShouldRetry;
  }
  /**
   *
   * Creates an error object with a message and name
   * @param message - The error message
   * @param name - The error name
   * @returns An error object
   */
  createError(message, name) {
    const error = new Error(message);
    error.name = name;
    return error;
  }
  /**
   *
   * To get the maximum delay
   * @returns A maximum delay
   */
  getMaxDelay() {
    return _RetryHandlerOptions.MAX_DELAY;
  }
  getKey() {
    return RetryHandlerOptionKey;
  }
};
RetryHandlerOptions.DEFAULT_DELAY = 3;
RetryHandlerOptions.DEFAULT_MAX_RETRIES = 3;
RetryHandlerOptions.MAX_DELAY = 180;
RetryHandlerOptions.MAX_MAX_RETRIES = 10;
RetryHandlerOptions.defaultShouldRetry = () => true;

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/retryHandler.js
var RetryHandler = class _RetryHandler {
  /**
   *
   * To create an instance of RetryHandler
   * @param [options] - The retry handler options value
   * @returns An instance of RetryHandler
   */
  constructor(options = new RetryHandlerOptions()) {
    this.options = options;
    if (!options) {
      throw new Error("The options parameter is required.");
    }
  }
  /**
   *
   *
   * To check whether the response has the retry status code
   * @param response - The response object
   * @returns Whether the response has retry status code or not
   */
  isRetry(response) {
    return _RetryHandler.RETRY_STATUS_CODES.has(response.status);
  }
  /**
   *
   * To check whether the payload is buffered or not
   * @param options - The options of a request
   * @returns Whether the payload is buffered or not
   */
  isBuffered(options) {
    var _a2;
    const method = options.method;
    const isPutPatchOrPost = method === HttpMethod.PUT || method === HttpMethod.PATCH || method === HttpMethod.POST;
    if (isPutPatchOrPost) {
      const isStream = ((_a2 = getRequestHeader(options, "content-type")) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase()) === "application/octet-stream";
      if (isStream) {
        return false;
      }
    }
    return true;
  }
  /**
   *
   * To get the delay for a retry
   * @param response - The response object
   * @param retryAttempts - The current attempt count
   * @param delay - The delay value in seconds
   * @returns A delay for a retry
   */
  getDelay(response, retryAttempts, delay) {
    const getRandomness = () => Number(Math.random().toFixed(3));
    const retryAfter = response.headers !== void 0 ? response.headers.get(_RetryHandler.RETRY_AFTER_HEADER) : null;
    let newDelay;
    if (retryAfter !== null) {
      if (Number.isNaN(Number(retryAfter))) {
        newDelay = Math.round((new Date(retryAfter).getTime() - Date.now()) / 1e3);
      } else {
        newDelay = Number(retryAfter);
      }
    } else {
      newDelay = retryAttempts >= 2 ? this.getExponentialBackOffTime(retryAttempts) + delay + getRandomness() : delay + getRandomness();
    }
    return Math.min(newDelay, this.options.getMaxDelay() + getRandomness());
  }
  /**
   *
   * To get an exponential back off value
   * @param attempts - The current attempt count
   * @returns An exponential back off value
   */
  getExponentialBackOffTime(attempts) {
    return Math.round(1 / 2 * (2 ** attempts - 1));
  }
  /**
   * To add delay for the execution
   * @param delaySeconds - The delay value in seconds
   * @returns A Promise that resolves to nothing
   */
  async sleep(delaySeconds) {
    const delayMilliseconds = delaySeconds * 1e3;
    return new Promise((resolve) => setTimeout(resolve, delayMilliseconds));
  }
  /**
   * To execute the middleware with retries
   * @param url - The request url
   * @param fetchRequestInit - The request options
   * @param retryAttempts - The current attempt count
   * @param currentOptions - The current request options for the retry handler.
   * @param requestOptions - The retry middleware options instance
   * @param tracerName - The name to use for the tracer
   * @returns A Promise that resolves to nothing
   */
  async executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions, tracerName) {
    var _a2;
    const response = await ((_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(url, fetchRequestInit, requestOptions));
    if (!response) {
      throw new Error("Response is undefined");
    }
    if (retryAttempts < currentOptions.maxRetries && this.isRetry(response) && this.isBuffered(fetchRequestInit) && currentOptions.shouldRetry(currentOptions.delay, retryAttempts, url, fetchRequestInit, response)) {
      ++retryAttempts;
      setRequestHeader(fetchRequestInit, _RetryHandler.RETRY_ATTEMPT_HEADER, retryAttempts.toString());
      let delay = null;
      if (response) {
        delay = this.getDelay(response, retryAttempts, currentOptions.delay);
        await this.sleep(delay);
      }
      if (tracerName) {
        return await trace.getTracer(tracerName).startActiveSpan(`retryHandler - attempt ${retryAttempts}`, (span) => {
          try {
            span.setAttribute("http.request.resend_count", retryAttempts);
            if (delay) {
              span.setAttribute("http.request.resend_delay", delay);
            }
            span.setAttribute("http.response.status_code", response.status);
            return this.executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions);
          } finally {
            span.end();
          }
        });
      }
      return await this.executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions);
    } else {
      return response;
    }
  }
  /**
   * To execute the current middleware
   * @param url - The request url
   * @param requestInit - The request options
   * @param requestOptions - The request options
   * @returns A Promise that resolves to nothing
   */
  execute(url, requestInit, requestOptions) {
    const retryAttempts = 0;
    let currentOptions = this.options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[RetryHandlerOptionKey]) {
      currentOptions = requestOptions[RetryHandlerOptionKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("retryHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.retry.enable", true);
          return this.executeWithRetry(url, requestInit, retryAttempts, currentOptions, requestOptions, obsOptions.getTracerInstrumentationName());
        } finally {
          span.end();
        }
      });
    }
    return this.executeWithRetry(url, requestInit, retryAttempts, currentOptions, requestOptions);
  }
};
RetryHandler.RETRY_STATUS_CODES = /* @__PURE__ */ new Set([
  429,
  // Too many requests
  503,
  // Service unavailable
  504
  // Gateway timeout
]);
RetryHandler.RETRY_ATTEMPT_HEADER = "Retry-Attempt";
RetryHandler.RETRY_AFTER_HEADER = "Retry-After";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/version.js
var libraryVersion = "1.0.0-preview.24";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/userAgentHandlerOptions.js
var UserAgentHandlerOptionsKey = "UserAgentHandlerOptionKey";
var UserAgentHandlerOptions = class {
  getKey() {
    return UserAgentHandlerOptionsKey;
  }
  /**
   *
   * To create an instance of UserAgentHandlerOptions
   * @param [options] - The options for the UserAgentHandler
   * @example	const options = new UserAgentHandlerOptions({ enable: false });
   */
  constructor(options = {}) {
    var _a2, _b, _c;
    this.enable = (_a2 = options.enable) !== null && _a2 !== void 0 ? _a2 : true;
    this.productName = (_b = options.productName) !== null && _b !== void 0 ? _b : "kiota-typescript";
    this.productVersion = (_c = options.productVersion) !== null && _c !== void 0 ? _c : libraryVersion;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/userAgentHandler.js
var USER_AGENT_HEADER_KEY = "User-Agent";
var UserAgentHandler = class {
  /**
   * To create an instance of UserAgentHandler
   * @param _options - The options for the middleware
   */
  constructor(_options = new UserAgentHandlerOptions()) {
    this._options = _options;
  }
  /** @inheritdoc */
  execute(url, requestInit, requestOptions) {
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("userAgentHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.useragent.enable", true);
          return this.addValue(url, requestInit, requestOptions);
        } finally {
          span.end();
        }
      });
    } else {
      return this.addValue(url, requestInit, requestOptions);
    }
  }
  async addValue(url, requestInit, requestOptions) {
    var _a2;
    let currentOptions = this._options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[UserAgentHandlerOptionsKey]) {
      currentOptions = requestOptions[UserAgentHandlerOptionsKey];
    }
    if (currentOptions.enable) {
      const additionalValue = `${currentOptions.productName}/${currentOptions.productVersion}`;
      const currentValue = getRequestHeader(requestInit, USER_AGENT_HEADER_KEY);
      if (!(currentValue === null || currentValue === void 0 ? void 0 : currentValue.includes(additionalValue))) {
        appendRequestHeader(requestInit, USER_AGENT_HEADER_KEY, additionalValue, " ");
      }
    }
    const response = await ((_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(url, requestInit, requestOptions));
    if (!response)
      throw new Error("No response returned by the next middleware");
    return response;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/urlReplaceHandlerOptions.js
var UrlReplaceHandlerOptionsKey = "UrlReplaceHandlerOptionsKey";
var UrlReplaceHandlerOptions = class {
  /**
   * Create a new instance of the UrlReplaceHandlerOptions class
   * @param config the configuration to apply to the url replace handler options.
   */
  constructor(config) {
    var _a2, _b;
    if (config) {
      this._urlReplacements = (_a2 = config.urlReplacements) !== null && _a2 !== void 0 ? _a2 : {};
      this._enabled = (_b = config.enabled) !== null && _b !== void 0 ? _b : true;
    } else {
      this._urlReplacements = {};
      this._enabled = true;
    }
  }
  /**
   * @inheritdoc
   */
  getKey() {
    return UrlReplaceHandlerOptionsKey;
  }
  /**
   * Returns whether the url replace handler is enabled or not.
   * @returns whether the url replace handler is enabled or not.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Returns the url replacements combinations.
   * @returns the url replacements combinations.
   */
  get urlReplacements() {
    return this._urlReplacements;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/urlReplaceHandler.js
var UrlReplaceHandler = class {
  /**
   *
   * Creates a new instance of the UrlReplaceHandler class
   * @param handlerOptions The options for the url replace handler.
   * @returns An instance of the UrlReplaceHandler class
   */
  constructor(handlerOptions = new UrlReplaceHandlerOptions()) {
    this.handlerOptions = handlerOptions;
    if (!handlerOptions) {
      throw new Error("handlerOptions cannot be undefined");
    }
  }
  /**
   * @inheritdoc
   */
  execute(url, requestInit, requestOptions) {
    let currentOptions = this.handlerOptions;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[UrlReplaceHandlerOptionsKey]) {
      currentOptions = requestOptions[UrlReplaceHandlerOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("urlReplaceHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.urlReplace.enable", currentOptions.enabled);
          return this.replaceTokensInUrl(currentOptions, url, requestInit, requestOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.replaceTokensInUrl(currentOptions, url, requestInit, requestOptions);
  }
  replaceTokensInUrl(options, url, requestInit, requestOptions) {
    var _a2;
    if (options.enabled) {
      Object.keys(options.urlReplacements).forEach((replacementKey) => {
        url = url.replace(replacementKey, options.urlReplacements[replacementKey]);
      });
    }
    const response = (_a2 = this.next) === null || _a2 === void 0 ? void 0 : _a2.execute(url, requestInit, requestOptions);
    if (!response) {
      throw new Error("Response is undefined");
    }
    return response;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/middlewareFactory.js
var MiddlewareFactory = class _MiddlewareFactory {
  /**
   * @param customFetch - The custom fetch implementation
   * Returns the default middleware chain an array with the  middleware handlers
   * @returns an array of the middleware handlers of the default middleware chain
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  static getDefaultMiddlewares(customFetch = (...args) => fetch(...args)) {
    return [new RetryHandler(), new RedirectHandler(), new ParametersNameDecodingHandler(), new UserAgentHandler(), new HeadersInspectionHandler(), new UrlReplaceHandler(), new CustomFetchHandler(customFetch)];
  }
  /**
   * @param customFetch - The custom fetch implementation
   * Returns the default middleware chain + performance middleware
   * @returns an array of the middleware handlers of the default + performance middleware chain
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  static getPerformanceMiddlewares(customFetch = (...args) => fetch(...args)) {
    const middlewares = _MiddlewareFactory.getDefaultMiddlewares(customFetch);
    middlewares.splice(middlewares.length - 3, 0, new CompressionHandler());
    return middlewares;
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/models/index.js
function createAuthFromDiscriminatorValue(parseNode) {
  return deserializeIntoAuth;
}
function createBaseClientRepresentationFromDiscriminatorValue(parseNode) {
  if (!parseNode)
    throw new Error("parseNode cannot be undefined");
  const mappingValueNode = parseNode?.getChildNode("protocol");
  if (mappingValueNode) {
    const mappingValue = mappingValueNode.getStringValue();
    if (mappingValue) {
      switch (mappingValue) {
        case "openid-connect":
          return deserializeIntoOIDCClientRepresentation;
        case "saml":
          return deserializeIntoSAMLClientRepresentation;
      }
    }
  }
  return deserializeIntoBaseClientRepresentation;
}
function deserializeIntoAuth(auth = {}) {
  return {
    "certificate": (n) => {
      auth.certificate = n.getStringValue();
    },
    "method": (n) => {
      auth.method = n.getStringValue();
    },
    "secret": (n) => {
      auth.secret = n.getStringValue();
    }
  };
}
function deserializeIntoBaseClientRepresentation(baseClientRepresentation = {}) {
  return {
    "appUrl": (n) => {
      baseClientRepresentation.appUrl = n.getStringValue();
    },
    "clientId": (n) => {
      baseClientRepresentation.clientId = n.getStringValue();
    },
    "createdTimestamp": (n) => {
      baseClientRepresentation.createdTimestamp = n.getNumberValue();
    },
    "description": (n) => {
      baseClientRepresentation.description = n.getStringValue();
    },
    "displayName": (n) => {
      baseClientRepresentation.displayName = n.getStringValue();
    },
    "enabled": (n) => {
      baseClientRepresentation.enabled = n.getBooleanValue();
    },
    "protocol": (n) => {
      baseClientRepresentation.protocol = n.getStringValue();
    },
    "redirectUris": (n) => {
      baseClientRepresentation.redirectUris = n.getCollectionOfPrimitiveValues("string");
    },
    "roles": (n) => {
      baseClientRepresentation.roles = n.getCollectionOfPrimitiveValues("string");
    },
    "updatedTimestamp": (n) => {
      baseClientRepresentation.updatedTimestamp = n.getNumberValue();
    },
    "uuid": (n) => {
      baseClientRepresentation.uuid = n.getStringValue();
    }
  };
}
function deserializeIntoOIDCClientRepresentation(oIDCClientRepresentation = {}) {
  return {
    ...deserializeIntoBaseClientRepresentation(oIDCClientRepresentation),
    "auth": (n) => {
      oIDCClientRepresentation.auth = n.getObjectValue(createAuthFromDiscriminatorValue);
    },
    "loginFlows": (n) => {
      oIDCClientRepresentation.loginFlows = n.getCollectionOfEnumValues(FlowObject);
    },
    "serviceAccountRoles": (n) => {
      oIDCClientRepresentation.serviceAccountRoles = n.getCollectionOfPrimitiveValues("string");
    },
    "webOrigins": (n) => {
      oIDCClientRepresentation.webOrigins = n.getCollectionOfPrimitiveValues("string");
    }
  };
}
function deserializeIntoSAMLClientRepresentation(sAMLClientRepresentation = {}) {
  return {
    ...deserializeIntoBaseClientRepresentation(sAMLClientRepresentation),
    "allowEcpFlow": (n) => {
      sAMLClientRepresentation.allowEcpFlow = n.getBooleanValue();
    },
    "clientSignatureRequired": (n) => {
      sAMLClientRepresentation.clientSignatureRequired = n.getBooleanValue();
    },
    "forceNameIdFormat": (n) => {
      sAMLClientRepresentation.forceNameIdFormat = n.getBooleanValue();
    },
    "forcePostBinding": (n) => {
      sAMLClientRepresentation.forcePostBinding = n.getBooleanValue();
    },
    "frontChannelLogout": (n) => {
      sAMLClientRepresentation.frontChannelLogout = n.getBooleanValue();
    },
    "includeAuthnStatement": (n) => {
      sAMLClientRepresentation.includeAuthnStatement = n.getBooleanValue();
    },
    "nameIdFormat": (n) => {
      sAMLClientRepresentation.nameIdFormat = n.getEnumValue(NameIdFormatObject);
    },
    "signAssertions": (n) => {
      sAMLClientRepresentation.signAssertions = n.getBooleanValue();
    },
    "signatureAlgorithm": (n) => {
      sAMLClientRepresentation.signatureAlgorithm = n.getEnumValue(SignatureAlgorithmObject);
    },
    "signatureCanonicalizationMethod": (n) => {
      sAMLClientRepresentation.signatureCanonicalizationMethod = n.getStringValue();
    },
    "signDocuments": (n) => {
      sAMLClientRepresentation.signDocuments = n.getBooleanValue();
    },
    "signingCertificate": (n) => {
      sAMLClientRepresentation.signingCertificate = n.getStringValue();
    }
  };
}
function serializeAuth(writer, auth = {}, isSerializingDerivedType = false) {
  if (!auth || isSerializingDerivedType) {
    return;
  }
  writer.writeStringValue("certificate", auth.certificate);
  writer.writeStringValue("method", auth.method);
  writer.writeStringValue("secret", auth.secret);
  writer.writeAdditionalData(auth.additionalData);
}
function serializeBaseClientRepresentation(writer, baseClientRepresentation = {}, isSerializingDerivedType = false) {
  if (!baseClientRepresentation || isSerializingDerivedType) {
    return;
  }
  writer.writeStringValue("appUrl", baseClientRepresentation.appUrl);
  writer.writeStringValue("clientId", baseClientRepresentation.clientId);
  writer.writeStringValue("description", baseClientRepresentation.description);
  writer.writeStringValue("displayName", baseClientRepresentation.displayName);
  writer.writeBooleanValue("enabled", baseClientRepresentation.enabled);
  writer.writeStringValue("protocol", baseClientRepresentation.protocol);
  writer.writeCollectionOfPrimitiveValues("redirectUris", baseClientRepresentation.redirectUris);
  writer.writeCollectionOfPrimitiveValues("roles", baseClientRepresentation.roles);
  writer.writeAdditionalData(baseClientRepresentation.additionalData);
  switch (baseClientRepresentation.protocol) {
    case "openid-connect":
      serializeOIDCClientRepresentation(writer, baseClientRepresentation, true);
      break;
    case "saml":
      serializeSAMLClientRepresentation(writer, baseClientRepresentation, true);
      break;
  }
}
function serializeOIDCClientRepresentation(writer, oIDCClientRepresentation = {}, isSerializingDerivedType = false) {
  if (!oIDCClientRepresentation || isSerializingDerivedType) {
    return;
  }
  serializeBaseClientRepresentation(writer, oIDCClientRepresentation, isSerializingDerivedType);
  writer.writeObjectValue("auth", oIDCClientRepresentation.auth, serializeAuth);
  if (oIDCClientRepresentation.loginFlows)
    writer.writeCollectionOfEnumValues("loginFlows", oIDCClientRepresentation.loginFlows);
  writer.writeCollectionOfPrimitiveValues("serviceAccountRoles", oIDCClientRepresentation.serviceAccountRoles);
  writer.writeCollectionOfPrimitiveValues("webOrigins", oIDCClientRepresentation.webOrigins);
}
function serializeSAMLClientRepresentation(writer, sAMLClientRepresentation = {}, isSerializingDerivedType = false) {
  if (!sAMLClientRepresentation || isSerializingDerivedType) {
    return;
  }
  serializeBaseClientRepresentation(writer, sAMLClientRepresentation, isSerializingDerivedType);
  writer.writeBooleanValue("allowEcpFlow", sAMLClientRepresentation.allowEcpFlow);
  writer.writeBooleanValue("clientSignatureRequired", sAMLClientRepresentation.clientSignatureRequired);
  writer.writeBooleanValue("forceNameIdFormat", sAMLClientRepresentation.forceNameIdFormat);
  writer.writeBooleanValue("forcePostBinding", sAMLClientRepresentation.forcePostBinding);
  writer.writeBooleanValue("frontChannelLogout", sAMLClientRepresentation.frontChannelLogout);
  writer.writeBooleanValue("includeAuthnStatement", sAMLClientRepresentation.includeAuthnStatement);
  writer.writeEnumValue("nameIdFormat", sAMLClientRepresentation.nameIdFormat);
  writer.writeBooleanValue("signAssertions", sAMLClientRepresentation.signAssertions);
  writer.writeEnumValue("signatureAlgorithm", sAMLClientRepresentation.signatureAlgorithm);
  writer.writeStringValue("signatureCanonicalizationMethod", sAMLClientRepresentation.signatureCanonicalizationMethod);
  writer.writeBooleanValue("signDocuments", sAMLClientRepresentation.signDocuments);
  writer.writeStringValue("signingCertificate", sAMLClientRepresentation.signingCertificate);
}
var FlowObject = {
  STANDARD: "STANDARD",
  IMPLICIT: "IMPLICIT",
  DIRECT_GRANT: "DIRECT_GRANT",
  SERVICE_ACCOUNT: "SERVICE_ACCOUNT",
  TOKEN_EXCHANGE: "TOKEN_EXCHANGE",
  DEVICE: "DEVICE",
  CIBA: "CIBA"
};
var NameIdFormatObject = {
  Username: "username",
  Email: "email",
  Persistent: "persistent",
  Transient: "transient"
};
var SignatureAlgorithmObject = {
  RSA_SHA1: "RSA_SHA1",
  RSA_SHA256: "RSA_SHA256",
  RSA_SHA256_MGF1: "RSA_SHA256_MGF1",
  RSA_SHA512: "RSA_SHA512",
  RSA_SHA512_MGF1: "RSA_SHA512_MGF1",
  DSA_SHA1: "DSA_SHA1"
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/admin/api/item/clients/v2/item/index.js
function serializeV2PatchRequestBody(writer, v2PatchRequestBody = {}, isSerializingDerivedType = false) {
  if (!v2PatchRequestBody || isSerializingDerivedType) {
    return;
  }
  writer.writeAdditionalData(v2PatchRequestBody.additionalData);
}
var V2ItemRequestBuilderUriTemplate = "{+baseurl}/admin/api/{realmName}/clients/v2/{id}";
var V2ItemRequestBuilderRequestsMetadata = {
  delete: {
    uriTemplate: V2ItemRequestBuilderUriTemplate,
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: V2ItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    adapterMethodName: "send",
    responseBodyFactory: createBaseClientRepresentationFromDiscriminatorValue
  },
  patch: {
    uriTemplate: V2ItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    adapterMethodName: "send",
    responseBodyFactory: createBaseClientRepresentationFromDiscriminatorValue,
    requestBodyContentType: "application/merge-patch+json",
    requestBodySerializer: serializeV2PatchRequestBody,
    requestInformationContentSetMethod: "setContentFromParsable"
  },
  put: {
    uriTemplate: V2ItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    adapterMethodName: "send",
    responseBodyFactory: createBaseClientRepresentationFromDiscriminatorValue,
    requestBodyContentType: "application/json",
    requestBodySerializer: serializeBaseClientRepresentation,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/admin/api/item/clients/v2/index.js
var V2RequestBuilderUriTemplate = "{+baseurl}/admin/api/{realmName}/clients/v2{?fields,limit*,offset*,q*,sort*}";
var V2RequestBuilderNavigationMetadata = {
  byId: {
    requestsMetadata: V2ItemRequestBuilderRequestsMetadata,
    pathParametersMappings: ["id"]
  }
};
var V2RequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: V2RequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: createBaseClientRepresentationFromDiscriminatorValue
  },
  post: {
    uriTemplate: V2RequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    adapterMethodName: "send",
    responseBodyFactory: createBaseClientRepresentationFromDiscriminatorValue,
    requestBodyContentType: "application/json",
    requestBodySerializer: serializeBaseClientRepresentation,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/admin/api/item/clients/index.js
var ClientsRequestBuilderNavigationMetadata = {
  v2: {
    requestsMetadata: V2RequestBuilderRequestsMetadata,
    navigationMetadata: V2RequestBuilderNavigationMetadata
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/admin/api/item/index.js
var WithRealmNameItemRequestBuilderNavigationMetadata = {
  clients: {
    navigationMetadata: ClientsRequestBuilderNavigationMetadata
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/admin/api/index.js
var ApiRequestBuilderNavigationMetadata = {
  byRealmName: {
    navigationMetadata: WithRealmNameItemRequestBuilderNavigationMetadata,
    pathParametersMappings: ["realmName"]
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/admin/index.js
var AdminRequestBuilderNavigationMetadata = {
  api: {
    navigationMetadata: ApiRequestBuilderNavigationMetadata
  }
};

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formParseNode.js
var FormParseNode = class _FormParseNode {
  /**
   *  Creates a new instance of FormParseNode
   * @param _rawString the raw string to parse
   * @param backingStoreFactory the factory to create backing stores
   */
  constructor(_rawString, backingStoreFactory) {
    this._rawString = _rawString;
    this.backingStoreFactory = backingStoreFactory;
    this._fields = {};
    this.getStringValue = () => this.getStringValueFromRaw(this._rawString);
    this.getChildNode = (identifier) => {
      if (this._fields[identifier]) {
        return new _FormParseNode(this._fields[identifier], this.backingStoreFactory);
      }
      return void 0;
    };
    this.getBooleanValue = () => this.getBooleanValueFromRaw(this._rawString);
    this.getNumberValue = () => this.getNumberValueFromRaw(this._rawString);
    this.getGuidValue = () => this.getGuidValueFromRaw(this._rawString);
    this.getDateValue = () => this.getDateValueFromRaw(this._rawString);
    this.getDateOnlyValue = () => this.getDateOnlyValueFromRaw(this._rawString);
    this.getTimeOnlyValue = () => this.getTimeOnlyValueFromRaw(this._rawString);
    this.getDurationValue = () => this.getDurationValueFromRaw(this._rawString);
    this.getCollectionOfPrimitiveValues = (primitiveType) => {
      const values = this._rawString.split(",");
      return values.map((x) => {
        switch (primitiveType) {
          case "boolean":
            return this.getBooleanValueFromRaw(x);
          case "number":
            return this.getNumberValueFromRaw(x);
          case "Date":
            return this.getDateValueFromRaw(x);
          case "DateOnly":
            return this.getDateOnlyValueFromRaw(x);
          case "TimeOnly":
            return this.getTimeOnlyValueFromRaw(x);
          case "Duration":
            return this.getDurationValueFromRaw(x);
          case "string":
            return this.getStringValueFromRaw(x);
          default:
            throw new Error(`encountered an unsupported type during deserialization ${primitiveType}`);
        }
      });
    };
    this.getCollectionOfObjectValues = (parsableFactory) => {
      throw new Error(`serialization of collections is not supported with URI encoding`);
    };
    this.getObjectValue = (parsableFactory) => {
      const temp = {};
      const enableBackingStore = isBackingStoreEnabled(parsableFactory(this)(temp));
      const value = enableBackingStore && this.backingStoreFactory ? new Proxy(temp, createBackedModelProxyHandler(this.backingStoreFactory)) : temp;
      if (this.onBeforeAssignFieldValues) {
        this.onBeforeAssignFieldValues(value);
      }
      this.assignFieldValues(value, parsableFactory);
      if (this.onAfterAssignFieldValues) {
        this.onAfterAssignFieldValues(value);
      }
      return value;
    };
    this.getCollectionOfEnumValues = (type) => {
      const rawValues = this.getStringValue();
      if (!rawValues) {
        return [];
      }
      return rawValues.split(",").map((x) => getEnumValueFromStringValue(x, type));
    };
    this.getEnumValue = (type) => {
      const rawValue = this.getStringValue();
      if (!rawValue) {
        return void 0;
      }
      return getEnumValueFromStringValue(rawValue, type);
    };
    if (!_rawString) {
      throw new Error("rawString cannot be undefined");
    }
    _rawString.split("&").map((x) => x.split("=")).filter((x) => x.length === 2).forEach((x) => {
      const key = this.normalizeKey(x[0]);
      if (this._fields[key]) {
        this._fields[key] += "," + x[1];
      } else {
        this._fields[key] = x[1];
      }
    });
  }
  normalizeKey(key) {
    return decodeURIComponent(key).trim();
  }
  getStringValueFromRaw(value) {
    return decodeURIComponent(value);
  }
  getBooleanValueFromRaw(value) {
    const decoded = this.getStringValueFromRaw(value).toLowerCase();
    if (decoded === "true" || decoded === "1") {
      return true;
    } else if (decoded === "false" || decoded === "0") {
      return false;
    }
    return void 0;
  }
  getNumberValueFromRaw(value) {
    return parseFloat(this.getStringValueFromRaw(value));
  }
  getGuidValueFromRaw(value) {
    return parseGuidString(this.getStringValueFromRaw(value));
  }
  getDateValueFromRaw(value) {
    return new Date(Date.parse(this.getStringValueFromRaw(value)));
  }
  getDateOnlyValueFromRaw(value) {
    return DateOnly.parse(this.getStringValueFromRaw(value));
  }
  getTimeOnlyValueFromRaw(value) {
    return TimeOnly.parse(this.getStringValueFromRaw(value));
  }
  getDurationValueFromRaw(value) {
    return Duration.parse(this.getStringValueFromRaw(value));
  }
  getByteArrayValue() {
    throw new Error("serialization of byt arrays is not supported with URI encoding");
  }
  assignFieldValues(model, parsableFactory) {
    const fields = parsableFactory(this)(model);
    Object.entries(this._fields).filter((x) => !/^null$/i.test(x[1])).forEach(([k, v]) => {
      const deserializer = fields[k];
      if (deserializer) {
        deserializer(new _FormParseNode(v, this.backingStoreFactory));
      } else {
        model[k] = v;
      }
    });
  }
};

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formSerializationWriter.js
var FormSerializationWriter = class _FormSerializationWriter {
  constructor() {
    this.writer = [];
    this.depth = -1;
    this.writeStringValue = (key, value) => {
      if (value === null) {
        value = "null";
      }
      if (key && value) {
        this.writePropertyName(key);
        this.writer.push(`=${encodeURIComponent(value)}`);
        this.writer.push(_FormSerializationWriter.propertySeparator);
      }
    };
    this.writePropertyName = (key) => {
      this.writer.push(encodeURIComponent(key));
    };
    this.shouldWriteValueOrNull = (key, value) => {
      if (value === null) {
        this.writeNullValue(key);
        return false;
      }
      return true;
    };
    this.writeBooleanValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value !== void 0 && this.writeStringValue(key, `${value}`);
      }
    };
    this.writeNumberValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, `${value}`);
      }
    };
    this.writeGuidValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeDateValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toISOString());
      }
    };
    this.writeDateOnlyValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeTimeOnlyValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeDurationValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeNullValue = (key) => {
      key && this.writeStringValue(key, null);
    };
    this.writeCollectionOfPrimitiveValues = (_key, _values) => {
      if (_key && _values) {
        _values.forEach((val) => {
          this.writeAnyValue(_key, val);
        });
      }
    };
    this.writeCollectionOfObjectValues = (_key, _values) => {
      throw new Error(`serialization of collections is not supported with URI encoding`);
    };
    this.writeObjectValue = (key, value, serializerMethod) => {
      var _a2, _b, _c;
      if (++this.depth > 0) {
        throw new Error(`serialization of nested objects is not supported with URI encoding`);
      }
      if (!this.shouldWriteValueOrNull(key, value)) {
        return;
      }
      if (value) {
        if (key) {
          this.writePropertyName(key);
        }
        (_a2 = this.onBeforeObjectSerialization) === null || _a2 === void 0 ? void 0 : _a2.call(this, value);
        (_b = this.onStartObjectSerialization) === null || _b === void 0 ? void 0 : _b.call(this, value, this);
        serializerMethod(this, value);
        (_c = this.onAfterObjectSerialization) === null || _c === void 0 ? void 0 : _c.call(this, value);
        if (this.writer.length > 0 && this.writer[this.writer.length - 1] === _FormSerializationWriter.propertySeparator) {
          this.writer.pop();
        }
        key && this.writer.push(_FormSerializationWriter.propertySeparator);
      }
    };
    this.writeEnumValue = (key, ...values) => {
      if (values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeStringValue(key, rawValues.reduce((x, y) => `${x}, ${y}`));
        }
      }
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      if (key && values && values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeCollectionOfPrimitiveValues(key, rawValues);
        }
      }
    };
    this.getSerializedContent = () => {
      return this.convertStringToArrayBuffer(this.writer.join(``));
    };
    this.convertStringToArrayBuffer = (str) => {
      const encoder = new TextEncoder();
      const encodedString = encoder.encode(str);
      return encodedString.buffer;
    };
    this.writeAdditionalData = (additionalData) => {
      if (additionalData === void 0)
        return;
      for (const key in additionalData) {
        this.writeAnyValue(key, additionalData[key]);
      }
    };
    this.writeAnyValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value !== void 0) {
        const valueType = typeof value;
        if (valueType === "boolean") {
          this.writeBooleanValue(key, value);
        } else if (valueType === "string") {
          this.writeStringValue(key, value);
        } else if (value instanceof Date) {
          this.writeDateValue(key, value);
        } else if (value instanceof DateOnly) {
          this.writeDateOnlyValue(key, value);
        } else if (value instanceof TimeOnly) {
          this.writeTimeOnlyValue(key, value);
        } else if (value instanceof Duration) {
          this.writeDurationValue(key, value);
        } else if (valueType === "number") {
          this.writeNumberValue(key, value);
        } else {
          throw new Error(`encountered unknown ${value} value type during serialization ${valueType} for key ${key}`);
        }
      }
    };
  }
  writeByteArrayValue(key, value) {
    throw new Error("serialization of byt arrays is not supported with URI encoding");
  }
};
FormSerializationWriter.propertySeparator = `&`;

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formParseNodeFactory.js
var FormParseNodeFactory = class {
  /**
   * Creates an instance of JsonParseNode.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(backingStoreFactory) {
    this.backingStoreFactory = backingStoreFactory;
  }
  getValidContentType() {
    return "application/x-www-form-urlencoded";
  }
  getRootParseNode(contentType, content) {
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    } else if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new FormParseNode(this.convertArrayBufferToString(content), this.backingStoreFactory);
  }
  convertArrayBufferToString(content) {
    const decoder = new TextDecoder();
    return decoder.decode(content);
  }
};

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formSerializationWriterFactory.js
var FormSerializationWriterFactory = class {
  getValidContentType() {
    return "application/x-www-form-urlencoded";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new FormSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonParseNode.js
var JsonParseNode = class _JsonParseNode {
  /**
   * Creates an instance of JsonParseNode.
   * @param _jsonNode - The JSON node to parse.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(_jsonNode, backingStoreFactory) {
    this._jsonNode = _jsonNode;
    this.backingStoreFactory = backingStoreFactory;
    this.getStringValue = () => this.getStringValueFromRaw(this._jsonNode);
    this.getChildNode = (identifier) => this._jsonNode && typeof this._jsonNode === "object" && this._jsonNode[identifier] !== void 0 ? new _JsonParseNode(this._jsonNode[identifier], this.backingStoreFactory) : void 0;
    this.getBooleanValue = () => typeof this._jsonNode === "boolean" ? this._jsonNode : void 0;
    this.getNumberValue = () => typeof this._jsonNode === "number" ? this._jsonNode : void 0;
    this.getGuidValue = () => this.getGuidValueFromRaw(this._jsonNode);
    this.getDateValue = () => this.getDateValueFromRaw(this._jsonNode);
    this.getDateOnlyValue = () => this.getDateOnlyValueFromRaw(this._jsonNode);
    this.getTimeOnlyValue = () => this.getTimeOnlyValueFromRaw(this._jsonNode);
    this.getDurationValue = () => this.getDurationValueFromRaw(this._jsonNode);
    this.getCollectionOfPrimitiveValues = (primitiveType) => {
      if (!Array.isArray(this._jsonNode)) {
        return void 0;
      }
      return this._jsonNode.map((x) => this.getPrimitiveValue(x, primitiveType));
    };
    this.getPrimitiveValue = (value, primitiveType) => {
      if (value === null) {
        return null;
      }
      switch (primitiveType) {
        case "boolean":
          if (typeof value !== "boolean") {
            throw new Error(`encountered an unsupported type during deserialization ${typeof value}`);
          }
          return value;
        case "number":
          if (typeof value !== "number") {
            throw new Error(`encountered an unsupported type during deserialization ${typeof value}`);
          }
          return value;
        case "Date":
          return this.getDateValueFromRaw(value);
        case "DateOnly":
          return this.getDateOnlyValueFromRaw(value);
        case "TimeOnly":
          return this.getTimeOnlyValueFromRaw(value);
        case "Duration":
          return this.getDurationValueFromRaw(value);
        case "string":
          if (typeof value !== "string") {
            throw new Error(`encountered an unsupported type during deserialization ${typeof value}`);
          }
          return value;
        default:
          throw new Error(`encountered an unsupported type during deserialization ${primitiveType}`);
      }
    };
    this.getCollectionOfObjectValues = (method) => {
      if (!Array.isArray(this._jsonNode)) {
        return void 0;
      }
      return this._jsonNode ? this._jsonNode.map((x) => new _JsonParseNode(x, this.backingStoreFactory)).map((x) => x.getObjectValue(method)) : void 0;
    };
    this.getObjectValue = (parsableFactory) => {
      const temp = {};
      if (isUntypedNode(parsableFactory(this)(temp))) {
        const valueType = typeof this._jsonNode;
        let value = temp;
        if (valueType === "boolean") {
          value = createUntypedBoolean(this._jsonNode);
        } else if (valueType === "string") {
          value = createUntypedString(this._jsonNode);
        } else if (valueType === "number") {
          value = createUntypedNumber(this._jsonNode);
        } else if (Array.isArray(this._jsonNode)) {
          const nodes = [];
          this._jsonNode.forEach((x) => {
            nodes.push(new _JsonParseNode(x, this.backingStoreFactory).getObjectValue(createUntypedNodeFromDiscriminatorValue));
          });
          value = createUntypedArray(nodes);
        } else if (this._jsonNode && valueType === "object") {
          const properties = {};
          Object.entries(this._jsonNode).forEach(([k, v]) => {
            properties[k] = new _JsonParseNode(v, this.backingStoreFactory).getObjectValue(createUntypedNodeFromDiscriminatorValue);
          });
          value = createUntypedObject(properties);
        } else if (!this._jsonNode) {
          value = createUntypedNull();
        }
        return value;
      }
      const enableBackingStore = isBackingStoreEnabled(parsableFactory(this)(temp));
      const objectValue = enableBackingStore && this.backingStoreFactory ? new Proxy(temp, createBackedModelProxyHandler(this.backingStoreFactory)) : temp;
      if (this.onBeforeAssignFieldValues) {
        this.onBeforeAssignFieldValues(objectValue);
      }
      this.assignFieldValues(objectValue, parsableFactory);
      if (this.onAfterAssignFieldValues) {
        this.onAfterAssignFieldValues(objectValue);
      }
      return objectValue;
    };
    this.assignFieldValues = (model, parsableFactory) => {
      const fields = parsableFactory(this)(model);
      if (!this._jsonNode)
        return;
      Object.entries(this._jsonNode).forEach(([k, v]) => {
        var _a2;
        const deserializer = fields[k];
        if (deserializer) {
          deserializer(new _JsonParseNode(v, this.backingStoreFactory));
        } else {
          const modelDataHolder = model;
          (_a2 = modelDataHolder.additionalData) !== null && _a2 !== void 0 ? _a2 : modelDataHolder.additionalData = {};
          modelDataHolder.additionalData[k] = v;
        }
      });
    };
    this.getCollectionOfEnumValues = (type) => {
      if (Array.isArray(this._jsonNode)) {
        return this._jsonNode.map((x) => {
          if (typeof x === "string") {
            return getEnumValueFromStringValue(x, type);
          }
          return void 0;
        }).filter((value) => value !== void 0);
      }
      return [];
    };
    this.getEnumValue = (type) => {
      const rawValue = this.getStringValue();
      if (!rawValue) {
        return void 0;
      }
      return getEnumValueFromStringValue(rawValue, type);
    };
  }
  getStringValueFromRaw(value) {
    return typeof value === "string" ? value : void 0;
  }
  getGuidValueFromRaw(value) {
    return parseGuidString(this.getStringValueFromRaw(value));
  }
  getDateValueFromRaw(value) {
    if (value instanceof Date) {
      return new Date(value.getTime());
    }
    if (typeof value === "number") {
      return new Date(value);
    }
    if (typeof value === "string") {
      return new Date(value);
    }
    return void 0;
  }
  getDateOnlyValueFromRaw(value) {
    return value instanceof DateOnly ? value : DateOnly.parse(this.getStringValueFromRaw(value));
  }
  getTimeOnlyValueFromRaw(value) {
    return value instanceof TimeOnly ? value : TimeOnly.parse(this.getStringValueFromRaw(value));
  }
  getDurationValueFromRaw(value) {
    return value instanceof Duration ? value : Duration.parse(this.getStringValueFromRaw(value));
  }
  getByteArrayValue() {
    const strValue = this.getStringValue();
    if (strValue && strValue.length > 0) {
      return inNodeEnv() ? new Uint8Array(Buffer.from(strValue, "base64")).buffer : new TextEncoder().encode(strValue).buffer;
    }
    return void 0;
  }
};

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonSerializationWriter.js
var JsonSerializationWriter = class _JsonSerializationWriter {
  constructor() {
    this.writer = [];
    this.shouldWriteValueOrNull = (key, value) => {
      if (value === null) {
        this.writeNullValue(key);
        return false;
      }
      return true;
    };
    this.writeStringValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(JSON.stringify(value));
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writePropertyName = (key) => {
      this.writer.push(`"${key}":`);
    };
    this.writeBooleanValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(`${value}`);
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeNumberValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(`${value}`);
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeGuidValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(`"${value}"`);
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeDateValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toISOString());
    this.writeDateOnlyValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toString());
    this.writeTimeOnlyValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toString());
    this.writeDurationValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toString());
    this.writeNullValue = (key) => {
      key && this.writePropertyName(key);
      this.writer.push(`null`);
      key && this.writer.push(_JsonSerializationWriter.propertySeparator);
    };
    this.writeCollectionOfPrimitiveValues = (key, values) => {
      if (!this.shouldWriteValueOrNull(key, values)) {
        return;
      }
      if (values) {
        key && this.writePropertyName(key);
        this.startArray();
        values.forEach((v, idx) => {
          this.writeAnyValue(void 0, v);
          idx + 1 < values.length && this.writer.push(_JsonSerializationWriter.propertySeparator);
        });
        this.endArray();
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeCollectionOfObjectValues = (key, values, serializerMethod) => {
      if (!this.shouldWriteValueOrNull(key, values)) {
        return;
      }
      if (values) {
        key && this.writePropertyName(key);
        this.startArray();
        values.forEach((v) => {
          this.writeObjectValue(void 0, v, serializerMethod);
          this.writer.push(_JsonSerializationWriter.propertySeparator);
        });
        if (values.length > 0) {
          this.writer.pop();
        }
        this.endArray();
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.startObject = () => {
      this.writer.push(`{`);
    };
    this.endObject = () => {
      this.writer.push(`}`);
    };
    this.startArray = () => {
      this.writer.push(`[`);
    };
    this.endArray = () => {
      this.writer.push(`]`);
    };
    this.removeLastSeparator = () => {
      if (this.writer.length > 0 && this.writer[this.writer.length - 1] === _JsonSerializationWriter.propertySeparator) {
        this.writer.pop();
      }
    };
    this.writeEnumValue = (key, ...values) => {
      if (values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeStringValue(key, rawValues.reduce((x, y) => `${x}, ${y}`));
        }
      }
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      if (values && values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length === 0) {
          return;
        }
        key && this.writePropertyName(key);
        this.writer.push(JSON.stringify(rawValues));
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.getSerializedContent = () => {
      return this.convertStringToArrayBuffer(this.writer.join(``));
    };
    this.convertStringToArrayBuffer = (str) => {
      const encoder = new TextEncoder();
      const encodedString = encoder.encode(str);
      return encodedString.buffer;
    };
    this.writeAdditionalData = (additionalData) => {
      if (additionalData === void 0)
        return;
      for (const key in additionalData) {
        if (Object.prototype.hasOwnProperty.call(additionalData, key)) {
          this.writeAnyValue(key, additionalData[key]);
        }
      }
    };
    this.writeNonParsableObjectValue = (key, value) => {
      if (key) {
        this.writePropertyName(key);
      }
      this.writer.push(JSON.stringify(value), _JsonSerializationWriter.propertySeparator);
    };
    this.writeAnyValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (!this.shouldWriteValueOrNull(key, value)) {
        return;
      }
      const valueType = typeof value;
      if (valueType === "boolean") {
        this.writeBooleanValue(key, value);
      } else if (valueType === "string") {
        this.writeStringValue(key, value);
      } else if (value instanceof Date) {
        this.writeDateValue(key, value);
      } else if (value instanceof DateOnly) {
        this.writeDateOnlyValue(key, value);
      } else if (value instanceof TimeOnly) {
        this.writeTimeOnlyValue(key, value);
      } else if (value instanceof Duration) {
        this.writeDurationValue(key, value);
      } else if (valueType === "number") {
        this.writeNumberValue(key, value);
      } else if (Array.isArray(value)) {
        this.writeCollectionOfPrimitiveValues(key, value);
      } else if (valueType === "object") {
        this.writeNonParsableObjectValue(key, value);
      } else {
        throw new Error(`encountered unknown value type during serialization ${valueType}`);
      }
    };
  }
  writeByteArrayValue(key, value) {
    if (!value) {
      return;
    }
    const b64 = inNodeEnv() ? Buffer.from(value).toString("base64") : btoa(new TextDecoder().decode(value));
    this.writeStringValue(key, b64);
  }
  writeObjectValue(key, value, serializerMethod) {
    var _a2, _b, _c;
    if (value === void 0) {
      return;
    }
    if (!this.shouldWriteValueOrNull(key, value)) {
      return;
    }
    if (isUntypedNode(value)) {
      const untypedNode = value;
      if (isUntypedBoolean(untypedNode)) {
        this.writeBooleanValue(key, untypedNode.getValue());
      } else if (isUntypedString(untypedNode)) {
        this.writeStringValue(key, untypedNode.getValue());
      } else if (isUntypedNull(untypedNode)) {
        this.writeNullValue(key);
      } else if (isUntypedNumber(untypedNode)) {
        this.writeNumberValue(key, untypedNode.getValue());
      } else if (isUntypedObject(untypedNode)) {
        const objectValue = untypedNode.getValue();
        if (objectValue === void 0)
          return;
        if (key)
          this.writePropertyName(key);
        this.startObject();
        for (const vKey in objectValue) {
          if (Object.prototype.hasOwnProperty.call(objectValue, vKey)) {
            this.writeObjectValue(vKey, objectValue[vKey], serializerMethod);
          }
        }
        this.removeLastSeparator();
        this.endObject();
        if (key)
          this.writer.push(_JsonSerializationWriter.propertySeparator);
      } else if (isUntypedArray(untypedNode)) {
        if (key) {
          this.writePropertyName(key);
        }
        const arrValue = untypedNode.getValue();
        this.startArray();
        arrValue.forEach((v, idx) => {
          this.writeObjectValue(void 0, v, serializerMethod);
          idx + 1 < arrValue.length && this.writer.push(_JsonSerializationWriter.propertySeparator);
        });
        this.removeLastSeparator();
        this.endArray();
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      } else {
        this.writeAnyValue(key, untypedNode.getValue());
      }
      return;
    }
    if (key)
      this.writePropertyName(key);
    (_a2 = this.onBeforeObjectSerialization) === null || _a2 === void 0 ? void 0 : _a2.call(this, value);
    this.startObject();
    (_b = this.onStartObjectSerialization) === null || _b === void 0 ? void 0 : _b.call(this, value, this);
    serializerMethod === null || serializerMethod === void 0 ? void 0 : serializerMethod(this, value);
    (_c = this.onAfterObjectSerialization) === null || _c === void 0 ? void 0 : _c.call(this, value);
    this.removeLastSeparator();
    this.endObject();
    if (key)
      this.writer.push(_JsonSerializationWriter.propertySeparator);
  }
};
JsonSerializationWriter.propertySeparator = `,`;

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonParseNodeFactory.js
var JsonParseNodeFactory = class {
  /**
   * Creates an instance of JsonParseNode.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(backingStoreFactory) {
    this.backingStoreFactory = backingStoreFactory;
  }
  getValidContentType() {
    return "application/json";
  }
  getRootParseNode(contentType, content) {
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    } else if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new JsonParseNode(this.convertArrayBufferToJson(content), this.backingStoreFactory);
  }
  convertArrayBufferToJson(content) {
    const decoder = new TextDecoder();
    const contentAsStr = decoder.decode(content);
    return JSON.parse(contentAsStr);
  }
};

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonSerializationWriterFactory.js
var JsonSerializationWriterFactory = class {
  getValidContentType() {
    return "application/json";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new JsonSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-serialization-multipart/dist/es/src/multipartSerializationWriter.js
var MultipartSerializationWriter = class {
  constructor() {
    this.writer = new ArrayBuffer(0);
    this.writeStringValue = (key, value) => {
      if (key) {
        this.writeRawStringValue(key);
      }
      if (value) {
        if (key) {
          this.writeRawStringValue(": ");
        }
        this.writeRawStringValue(value);
      }
    };
    this.writeRawStringValue = (value) => {
      if (value) {
        this.writeByteArrayValue(void 0, new TextEncoder().encode(value).buffer);
      }
    };
    this.writeBooleanValue = (key, value) => {
      throw new Error(`serialization of boolean values is not supported with multipart`);
    };
    this.writeNumberValue = (key, value) => {
      throw new Error(`serialization of number values is not supported with multipart`);
    };
    this.writeGuidValue = (key, value) => {
      throw new Error(`serialization of guid values is not supported with multipart`);
    };
    this.writeDateValue = (key, value) => {
      throw new Error(`serialization of date values is not supported with multipart`);
    };
    this.writeDateOnlyValue = (key, value) => {
      throw new Error(`serialization of date only values is not supported with multipart`);
    };
    this.writeTimeOnlyValue = (key, value) => {
      throw new Error(`serialization of time only values is not supported with multipart`);
    };
    this.writeDurationValue = (key, value) => {
      throw new Error(`serialization of duration values is not supported with multipart`);
    };
    this.writeNullValue = (key) => {
      throw new Error(`serialization of null values is not supported with multipart`);
    };
    this.writeCollectionOfPrimitiveValues = (_key, _values) => {
      throw new Error(`serialization of collections is not supported with multipart`);
    };
    this.writeCollectionOfObjectValues = (_key, _values) => {
      throw new Error(`serialization of collections is not supported with multipart`);
    };
    this.writeObjectValue = (key, value, serializerMethod) => {
      var _a2, _b, _c;
      if (!value) {
        throw new Error(`value cannot be undefined`);
      }
      if (!(value instanceof MultipartBody)) {
        throw new Error(`expected MultipartBody instance`);
      }
      if (!serializerMethod) {
        throw new Error(`serializer method cannot be undefined`);
      }
      (_a2 = this.onBeforeObjectSerialization) === null || _a2 === void 0 ? void 0 : _a2.call(this, value);
      (_b = this.onStartObjectSerialization) === null || _b === void 0 ? void 0 : _b.call(this, value, this);
      serializerMethod(this, value);
      (_c = this.onAfterObjectSerialization) === null || _c === void 0 ? void 0 : _c.call(this, value);
    };
    this.writeEnumValue = (key, ...values) => {
      throw new Error(`serialization of enum values is not supported with multipart`);
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      throw new Error(`serialization of collection of enum values is not supported with multipart`);
    };
    this.getSerializedContent = () => {
      return this.writer;
    };
    this.writeAdditionalData = (additionalData) => {
      throw new Error(`serialization of additional data is not supported with multipart`);
    };
  }
  writeByteArrayValue(key, value) {
    if (!value) {
      throw new Error("value cannot be undefined");
    }
    const previousValue = this.writer;
    this.writer = new ArrayBuffer(previousValue.byteLength + value.byteLength);
    const pipe = new Uint8Array(this.writer);
    pipe.set(new Uint8Array(previousValue), 0);
    pipe.set(new Uint8Array(value), previousValue.byteLength);
  }
};

// node_modules/@microsoft/kiota-serialization-multipart/dist/es/src/multipartSerializationWriterFactory.js
var MultipartSerializationWriterFactory = class {
  getValidContentType() {
    return "multipart/form-data";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new MultipartSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textParseNode.js
var TextParseNode = class _TextParseNode {
  constructor(text) {
    this.text = text;
    this.getStringValue = () => this.text;
    this.getChildNode = (identifier) => {
      throw new Error(_TextParseNode.noStructuredDataMessage);
    };
    this.getBooleanValue = () => {
      var _a2;
      const value = (_a2 = this.getStringValue()) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase();
      if (value === "true" || value === "1") {
        return true;
      } else if (value === "false" || value === "0") {
        return false;
      }
      return void 0;
    };
    this.getNumberValue = () => Number(this.text);
    this.getGuidValue = () => parseGuidString(this.text);
    this.getDateValue = () => new Date(Date.parse(this.text));
    this.getDateOnlyValue = () => DateOnly.parse(this.getStringValue());
    this.getTimeOnlyValue = () => TimeOnly.parse(this.getStringValue());
    this.getDurationValue = () => Duration.parse(this.getStringValue());
    this.getCollectionOfPrimitiveValues = (primitiveType) => {
      return this.text.split(",").map((x) => {
        const node = new _TextParseNode(x);
        switch (primitiveType) {
          case "boolean":
            return node.getBooleanValue();
          case "number":
            return node.getNumberValue();
          case "Date":
            return node.getDateValue();
          case "DateOnly":
            return node.getDateOnlyValue();
          case "TimeOnly":
            return node.getTimeOnlyValue();
          case "Duration":
            return node.getDurationValue();
          case "string":
            return node.getStringValue();
          default:
            throw new Error(`encountered an unsupported type during deserialization ${primitiveType}`);
        }
      });
    };
    this.getCollectionOfEnumValues = (type) => {
      throw new Error(_TextParseNode.noStructuredDataMessage);
    };
    this.getEnumValue = (type) => {
      const rawValue = this.getStringValue();
      if (!rawValue) {
        return void 0;
      }
      return getEnumValueFromStringValue(rawValue, type);
    };
    if (this.text && this.text.length > 1 && this.text.startsWith('"') && this.text.endsWith('"')) {
      this.text = this.text.substring(1, this.text.length - 2);
    }
  }
  getByteArrayValue() {
    const strValue = this.getStringValue();
    if (strValue && strValue.length > 0) {
      return inNodeEnv() ? new Uint8Array(Buffer.from(strValue, "base64")).buffer : new TextEncoder().encode(strValue).buffer;
    }
    return void 0;
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  getCollectionOfObjectValues(parsableFactory) {
    throw new Error(_TextParseNode.noStructuredDataMessage);
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  getObjectValue(parsableFactory) {
    throw new Error(_TextParseNode.noStructuredDataMessage);
  }
};
TextParseNode.noStructuredDataMessage = "text does not support structured data";

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textSerializationWriter.js
var TextSerializationWriter = class _TextSerializationWriter {
  constructor() {
    this.writer = [];
    this.writeStringValue = (key, value) => {
      if (key || key !== "") {
        throw new Error(_TextSerializationWriter.noStructuredDataMessage);
      }
      if (value !== void 0) {
        if (this.writer.length > 0) {
          throw new Error("a value was already written for this serialization writer, text content only supports a single value");
        } else {
          const isNullValue = value === null;
          this.writer.push(isNullValue ? "null" : value);
        }
      }
    };
    this.writeBooleanValue = (key, value) => {
      if (value !== void 0) {
        this.writeStringValue(key, `${value}`);
      }
    };
    this.writeNumberValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `${value}`);
      }
    };
    this.writeGuidValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value}"`);
      }
    };
    this.writeDateValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toISOString()}"`);
      }
    };
    this.writeDateOnlyValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toString()}"`);
      }
    };
    this.writeTimeOnlyValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toString()}"`);
      }
    };
    this.writeDurationValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toString()}"`);
      }
    };
    this.writeNullValue = (key) => {
      this.writeStringValue(key, `null`);
    };
    this.writeCollectionOfPrimitiveValues = (key, values) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
    this.writeCollectionOfObjectValues = (key, values, serializerMethod) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
    this.writeObjectValue = (key, value, serializerMethod) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
    this.writeEnumValue = (key, ...values) => {
      if (values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeStringValue(key, rawValues.reduce((x, y) => `${x},${y}`));
        }
      }
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      this.writeEnumValue(key, values);
    };
    this.getSerializedContent = () => {
      return this.convertStringToArrayBuffer(this.writer.join(``));
    };
    this.convertStringToArrayBuffer = (str) => {
      const encoder = new TextEncoder();
      const encodedString = encoder.encode(str);
      return encodedString.buffer;
    };
    this.writeAdditionalData = (value) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
  }
  writeByteArrayValue(key, value) {
    if (!value) {
      return;
    }
    const b64 = inNodeEnv() ? Buffer.from(value).toString("base64") : btoa(new TextDecoder().decode(value));
    this.writeStringValue(key, b64);
  }
};
TextSerializationWriter.noStructuredDataMessage = "text does not support structured data";

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textParseNodeFactory.js
var TextParseNodeFactory = class {
  /**
   * Creates an instance of TextParseNode.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(backingStoreFactory) {
    this.backingStoreFactory = backingStoreFactory;
  }
  getValidContentType() {
    return "text/plain";
  }
  getRootParseNode(contentType, content) {
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    } else if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new TextParseNode(this.convertArrayBufferToText(content));
  }
  convertArrayBufferToText(arrayBuffer) {
    const decoder = new TextDecoder();
    return decoder.decode(arrayBuffer);
  }
};

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textSerializationWriterFactory.js
var TextSerializationWriterFactory = class {
  getValidContentType() {
    return "text/plain";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new TextSerializationWriter();
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/generated/adminClient.js
function createAdminClient(requestAdapter) {
  if (requestAdapter === void 0) {
    throw new Error("requestAdapter cannot be undefined");
  }
  const serializationWriterFactory = requestAdapter.getSerializationWriterFactory();
  const parseNodeFactoryRegistry = requestAdapter.getParseNodeFactory();
  const backingStoreFactory = requestAdapter.getBackingStoreFactory();
  if (parseNodeFactoryRegistry.registerDefaultDeserializer) {
    parseNodeFactoryRegistry.registerDefaultDeserializer(JsonParseNodeFactory, backingStoreFactory);
    parseNodeFactoryRegistry.registerDefaultDeserializer(TextParseNodeFactory, backingStoreFactory);
    parseNodeFactoryRegistry.registerDefaultDeserializer(FormParseNodeFactory, backingStoreFactory);
  }
  if (serializationWriterFactory.registerDefaultSerializer) {
    serializationWriterFactory.registerDefaultSerializer(JsonSerializationWriterFactory);
    serializationWriterFactory.registerDefaultSerializer(TextSerializationWriterFactory);
    serializationWriterFactory.registerDefaultSerializer(FormSerializationWriterFactory);
    serializationWriterFactory.registerDefaultSerializer(MultipartSerializationWriterFactory);
  }
  const pathParameters = {
    "baseurl": requestAdapter.baseUrl
  };
  return apiClientProxifier(requestAdapter, pathParameters, AdminClientNavigationMetadata, void 0);
}
var AdminClientNavigationMetadata = {
  admin: {
    navigationMetadata: AdminRequestBuilderNavigationMetadata
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/clientsV2.js
var KeycloakAuthProvider = class {
  #getAccessToken;
  constructor(getAccessToken) {
    this.#getAccessToken = getAccessToken;
  }
  async authenticateRequest(request) {
    const token = await this.#getAccessToken();
    if (token) {
      request.headers.add("Authorization", `Bearer ${token}`);
    }
  }
};
function createClientsV2Endpoint(client) {
  const authProvider = new KeycloakAuthProvider(() => client.getAccessToken());
  const adapter = new FetchRequestAdapter(authProvider);
  adapter.baseUrl = client.baseUrl;
  const adminClient = createAdminClient(adapter);
  return adminClient.admin.api.byRealmName(client.realmName).clients.v2;
}
var ClientsV2 = class {
  #client;
  constructor(client) {
    this.#client = client;
  }
  /**
   * Get the clients v2 endpoint for the currently configured realm.
   * Returns a fluent API builder for client operations.
   *
   * @returns The clients v2 endpoint
   */
  api() {
    return createClientsV2Endpoint(this.#client);
  }
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/clients.js
var Clients = class extends Resource {
  /**
   * Clients v2 API - New versioned API with OpenAPI-generated client.
   */
  #v2;
  #client;
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
  evaluateGenerateSamlResponse = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/generate-example-saml-response",
    urlParamKeys: ["id"],
    queryParamKeys: ["scope", "userId"]
  });
  evaluateGenerateAccessToken = this.makeRequest({
    method: "GET",
    path: "/{id}/evaluate-scopes/generate-example-access-token",
    urlParamKeys: ["id"],
    queryParamKeys: ["scope", "userId", "audience"]
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
  findOnePolicyWithType = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{type}/{policyId}",
    urlParamKeys: ["id", "type", "policyId"],
    catchNotFound: true
  });
  findOnePolicy = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/policy/{policyId}",
    urlParamKeys: ["id", "policyId"],
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
    try {
      const policyFound = await this.findPolicyByName({
        id: payload.id,
        name: payload.policyName
      });
      await this.updatePolicy({
        id: payload.id,
        policyId: policyFound.id,
        type: payload.policy.type
      }, payload.policy);
      return await this.findPolicyByName({
        id: payload.id,
        name: payload.policyName
      });
    } catch (error) {
      if (error instanceof NetworkError && error.response.status === 404) {
        return this.createPolicy({ id: payload.id, type: payload.policy.type }, payload.policy);
      }
      throw error;
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
  listPermissionScope = this.makeRequest({
    method: "GET",
    path: "/{id}/authz/resource-server/permission/scope",
    urlParamKeys: ["id"]
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
  /**
   * @deprecated Clients should generate their own key pairs and upload only the
   *             public key/certificate. The private key is no longer stored on the server.
   */
  generateKey = this.makeRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/generate",
    urlParamKeys: ["id", "attr"]
  });
  /**
   * @deprecated Private keys are no longer stored on the server. The downloaded
   *             keystore will only contain the certificate.
   */
  downloadKey = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/download",
    urlParamKeys: ["id", "attr"],
    headers: {
      accept: "application/octet-stream"
    }
  });
  /**
   * @deprecated Clients should generate their own key pairs and upload only the
   *             public key/certificate.
   */
  generateAndDownloadKey = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/certificates/{attr}/generate-and-download",
    urlParamKeys: ["id", "attr"],
    headers: {
      accept: "application/octet-stream"
    }
  });
  /**
   * @deprecated Use {@link uploadCertificate} instead.
   */
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
    this.#client = client;
    this.#v2 = new ClientsV2(client);
  }
  /**
   * Get the clients v2 API endpoint for the currently configured realm.
   * Returns a fluent API builder for client operations using the new versioned API.
   *
   * Note: This API is experimental and must be explicitly enabled by setting
   * `enableExperimentalApis: true` in the client configuration.
   *
   * @example
   * ```typescript
   * // Enable experimental APIs in client configuration
   * const kcAdminClient = new KeycloakAdminClient({
   *   baseUrl: "http://localhost:8080",
   *   enableExperimentalApis: true,
   * });
   *
   * // List all clients
   * const clients = await kcAdminClient.clients.v2().get();
   *
   * // Get a single client by clientId
   * const client = await kcAdminClient.clients.v2().byId("my-client").get();
   *
   * // Create a new client
   * await kcAdminClient.clients.v2().post({
   *   clientId: "my-client",
   *   protocol: "openid-connect",
   *   enabled: true,
   * });
   *
   * // Update a client
   * await kcAdminClient.clients.v2().byId("my-client").put({
   *   clientId: "my-client",
   *   protocol: "openid-connect",
   *   description: "Updated description",
   * });
   *
   * // Delete a client
   * await kcAdminClient.clients.v2().byId("my-client").delete();
   * ```
   *
   * @returns A promise that resolves to the clients v2 endpoint
   * @throws Error if experimental APIs are not enabled
   */
  v2() {
    if (!this.#client.enableExperimentalApis) {
      throw new Error("The v2 API is experimental and not enabled. To use it, set `enableExperimentalApis: true` in the KeycloakAdminClient configuration.");
    }
    return this.#v2.api();
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
    method: "GET",
    queryParamKeys: [
      "search",
      "q",
      "exact",
      "briefRepresentation",
      "populateHierarchy",
      "first",
      "max"
    ]
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
   * Finds all subgroups on the specified parent group matching the provided parameters.
   */
  listSubGroups = this.makeRequest({
    method: "GET",
    path: "/{parentId}/children",
    urlParamKeys: ["parentId"],
    queryParamKeys: ["search", "first", "max", "briefRepresentation"]
  });
  /**
   * Members
   */
  listMembers = this.makeRequest({
    method: "GET",
    path: "/{id}/members",
    urlParamKeys: ["id"]
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
  listOrgGroups = this.makeRequest({
    method: "GET",
    path: "/../members/{id}/groups",
    urlParamKeys: ["id"]
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
  addMemberToOrgGroup = this.makeRequest({
    method: "PUT",
    path: "/{groupId}/members/{userId}",
    urlParamKeys: ["groupId", "userId"]
  });
  removeMemberFromOrgGroup = this.makeRequest({
    method: "DELETE",
    path: "/{groupId}/members/{userId}",
    urlParamKeys: ["groupId", "userId"]
  });
  #orgId;
  getOrgId() {
    return this.#orgId;
  }
  isOrgGroups() {
    return !!this.#orgId;
  }
  constructor(client, orgId) {
    super(client, {
      path: `/admin/realms/{realm}/${orgId ? "organizations/{orgId}/" : ""}groups`,
      getUrlParams: () => ({
        realm: client.realmName,
        orgId
      }),
      getBaseUrl: () => client.baseUrl
    });
    this.#orgId = orgId;
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
  uploadCertificate = this.makeUpdateRequest({
    method: "POST",
    path: "/upload-certificate"
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
  reloadKeys = this.makeRequest({
    method: "GET",
    path: "/instances/{alias}/reload-keys",
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
    urlParamKeys: ["realm", "session"],
    queryParamKeys: ["isOffline"]
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

// node_modules/@keycloak/keycloak-admin-client/lib/resources/organizations.js
var Organizations = class extends Resource {
  /**
   * Organizations
   */
  #client;
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/organizations",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
    this.#client = client;
  }
  find = this.makeRequest({
    method: "GET",
    path: "/"
  });
  count = this.makeRequest({
    method: "GET",
    path: "/count"
  });
  findOne = this.makeRequest({
    method: "GET",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  create = this.makeRequest({
    method: "POST",
    returnResourceIdInLocationHeader: { field: "id" }
  });
  delById = this.makeRequest({
    method: "DELETE",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  updateById = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  listMembers = this.makeRequest({
    method: "GET",
    path: "/{orgId}/members",
    urlParamKeys: ["orgId"]
  });
  addMember = this.makeRequest({
    method: "POST",
    path: "/{orgId}/members",
    urlParamKeys: ["orgId"],
    payloadKey: "userId"
  });
  delMember = this.makeRequest({
    method: "DELETE",
    path: "/{orgId}/members/{userId}",
    urlParamKeys: ["orgId", "userId"]
  });
  getMember = this.makeRequest({
    method: "GET",
    path: "/{orgId}/members/{userId}",
    urlParamKeys: ["orgId", "userId"]
  });
  updateMembershipType = this.makeUpdateRequest({
    method: "PUT",
    path: "/{orgId}/members/{userId}/membership-type",
    urlParamKeys: ["orgId", "userId"]
  });
  memberOrganizations = this.makeRequest({
    method: "GET",
    path: "/members/{userId}/organizations",
    urlParamKeys: ["userId"]
  });
  invite = this.makeUpdateRequest({
    method: "POST",
    path: "/{orgId}/members/invite-user",
    urlParamKeys: ["orgId"],
    queryParamKeys: ["clientId"],
    keyTransform: {
      clientId: "client_id"
    }
  });
  inviteExistingUser = this.makeUpdateRequest({
    method: "POST",
    path: "/{orgId}/members/invite-existing-user",
    urlParamKeys: ["orgId"]
  });
  listIdentityProviders = this.makeRequest({
    method: "GET",
    path: "/{orgId}/identity-providers",
    urlParamKeys: ["orgId"]
  });
  linkIdp = this.makeRequest({
    method: "POST",
    path: "/{orgId}/identity-providers",
    urlParamKeys: ["orgId"],
    payloadKey: "alias"
  });
  updateIdentityProviderLink = this.makeUpdateRequest({
    method: "PUT",
    path: "/{orgId}/identity-providers/{alias}",
    urlParamKeys: ["orgId", "alias"]
  });
  unLinkIdp = this.makeRequest({
    method: "DELETE",
    path: "/{orgId}/identity-providers/{alias}",
    urlParamKeys: ["orgId", "alias"]
  });
  // Organization Invitations Management
  listInvitations = this.makeRequest({
    method: "GET",
    path: "/{orgId}/invitations",
    urlParamKeys: ["orgId"]
  });
  findInvitation = this.makeRequest({
    method: "GET",
    path: "/{orgId}/invitations/{invitationId}",
    urlParamKeys: ["orgId", "invitationId"]
  });
  resendInvitation = this.makeRequest({
    method: "POST",
    path: "/{orgId}/invitations/{invitationId}/resend",
    urlParamKeys: ["orgId", "invitationId"]
  });
  deleteInvitation = this.makeRequest({
    method: "DELETE",
    path: "/{orgId}/invitations/{invitationId}",
    urlParamKeys: ["orgId", "invitationId"]
  });
  groups = (orgId) => new Groups(this.#client, orgId);
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/workflows.js
var Workflows = class extends Resource {
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/workflows",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
  find = this.makeRequest({
    method: "GET",
    path: "/"
  });
  findOne = this.makeRequest({
    method: "GET",
    path: "/{id}",
    urlParamKeys: ["id"],
    queryParamKeys: ["includeId"],
    catchNotFound: true
  });
  scheduled = this.makeRequest({
    method: "GET",
    path: "/scheduled/{userId}",
    urlParamKeys: ["userId"],
    catchNotFound: true
  });
  update = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
  create = this.makeRequest({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    returnResourceIdInLocationHeader: { field: "id" }
  });
  createAsYaml = this.makeRequest({
    method: "POST",
    headers: { "Content-Type": "application/yaml", Accept: "application/yaml" },
    returnResourceIdInLocationHeader: { field: "id" },
    payloadKey: "yaml"
  });
  delById = this.makeRequest({
    method: "DELETE",
    path: "/{id}",
    urlParamKeys: ["id"]
  });
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
      path: "/",
      getBaseUrl: () => client.baseUrl
    });
  }
  find = this.makeRequest({
    method: "GET",
    path: "/admin/serverinfo"
  });
  findEffectiveMessageBundles = this.makeRequest({
    method: "GET",
    path: "/resources/{realm}/{themeType}/{locale}",
    urlParamKeys: ["realm", "themeType", "locale"],
    queryParamKeys: ["theme", "source"]
  });
};

// node_modules/@keycloak/keycloak-admin-client/lib/resources/ssf.js
var Ssf = class extends Resource {
  constructor(client) {
    super(client, {
      path: "/admin/realms/{realm}/ssf",
      getUrlParams: () => ({
        realm: client.realmName
      }),
      getBaseUrl: () => client.baseUrl
    });
  }
  getConfig = this.makeRequest({
    method: "GET",
    path: "/config"
  });
  getEventStats = this.makeRequest({
    method: "GET",
    path: "/events/stats"
  });
  deleteEvents = this.makeRequest({
    method: "DELETE",
    path: "/events",
    queryParamKeys: ["status", "olderThan"]
  });
  deleteQueuedEvents = this.makeRequest({
    method: "DELETE",
    path: "/events/queued"
  });
  findClientStream = this.makeRequest({
    method: "GET",
    path: "/clients/{clientId}/stream",
    urlParamKeys: ["clientId"],
    catchNotFound: true
  });
  createClientStream = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/stream",
    urlParamKeys: ["clientId"]
  });
  updateClientStream = this.makeUpdateRequest({
    method: "PATCH",
    path: "/clients/{clientId}/stream",
    urlParamKeys: ["clientId"]
  });
  deleteClientStream = this.makeRequest({
    method: "DELETE",
    path: "/clients/{clientId}/stream",
    urlParamKeys: ["clientId"]
  });
  verifyClientStream = this.makeRequest({
    method: "POST",
    path: "/clients/{clientId}/stream/verify",
    urlParamKeys: ["clientId"]
  });
  updateClientStreamStatus = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/stream/status",
    urlParamKeys: ["clientId"]
  });
  addSubject = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/subjects/add",
    urlParamKeys: ["clientId"]
  });
  removeSubject = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/subjects/remove",
    urlParamKeys: ["clientId"]
  });
  ignoreSubject = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/subjects/ignore",
    urlParamKeys: ["clientId"]
  });
  checkSubject = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/subjects/check",
    urlParamKeys: ["clientId"],
    catchNotFound: true
  });
  emitEvent = this.makeUpdateRequest({
    method: "POST",
    path: "/clients/{clientId}/events/emit",
    urlParamKeys: ["clientId"]
  });
  findPendingEvent = this.makeRequest({
    method: "GET",
    path: "/clients/{clientId}/pending-events/{jti}",
    urlParamKeys: ["clientId", "jti"],
    catchNotFound: true
  });
  getClientEventStats = this.makeRequest({
    method: "GET",
    path: "/clients/{clientId}/events/stats",
    urlParamKeys: ["clientId"]
  });
  deleteClientEvents = this.makeRequest({
    method: "DELETE",
    path: "/clients/{clientId}/events",
    urlParamKeys: ["clientId"],
    queryParamKeys: ["status", "olderThan"]
  });
  deleteClientQueuedEvents = this.makeRequest({
    method: "DELETE",
    path: "/clients/{clientId}/events/queued",
    urlParamKeys: ["clientId"]
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
  getProfileMetadata = this.makeRequest({
    method: "GET",
    path: "/profile/metadata"
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
  /**
   * list verifiable credentials for a user
   */
  listVerifiableCredentials = this.makeRequest({
    method: "GET",
    path: "/{id}/vc/credentials",
    urlParamKeys: ["id"]
  });
  /**
   * create a verifiable credential for a user
   */
  createVerifiableCredential = this.makeUpdateRequest({
    method: "POST",
    path: "/{id}/vc/credentials",
    urlParamKeys: ["id"]
  });
  /**
   * revoke a verifiable credential from a user
   */
  revokeVerifiableCredential = this.makeRequest({
    method: "DELETE",
    path: "/{id}/vc/credentials/{credentialScopeName}",
    urlParamKeys: ["id", "credentialScopeName"]
  });
  /**
   * update a verifiable credential for a user (refreshes user attributes snapshot and increments revision)
   */
  updateVerifiableCredential = this.makeRequest({
    method: "PUT",
    path: "/{id}/vc/credentials/{credentialScopeName}",
    urlParamKeys: ["id", "credentialScopeName"]
  });
  /**
   * Send credential offer of specified verifiable credential to this user by email.
   * An email contains a link the user can click to see the page with credential offer, from which he can obtain verifiable credential to his wallet.
   */
  sendVerifiableCredentialOffer = this.makeUpdateRequest({
    method: "PUT",
    path: "/{id}/vc/credentials/send-credential-offer",
    urlParamKeys: ["id"],
    queryParamKeys: ["lifespan", "redirectUri", "clientId"],
    keyTransform: {
      clientId: "client_id",
      redirectUri: "redirect_uri"
    }
  });
  /**
   * list issued verifiable credentials for a user
   */
  listIssuedVerifiableCredentials = this.makeRequest({
    method: "GET",
    path: "/{id}/vc/issued-credentials",
    urlParamKeys: ["id"]
  });
  /**
   * revoke an issued verifiable credential
   */
  revokeIssuedVerifiableCredential = this.makeRequest({
    method: "DELETE",
    path: "/{id}/vc/issued-credentials/{credentialId}",
    urlParamKeys: ["id", "credentialId"]
  });
  getUnmanagedAttributes = this.makeRequest({
    method: "GET",
    path: "/{id}/unmanagedAttributes",
    urlParamKeys: ["id"]
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
    path: "/whoami",
    queryParamKeys: ["currentRealm"]
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
  const url = new URL(settings.baseUrl ?? defaultBaseUrl);
  const pathTemplate = parseTemplate("/realms/{realmName}/protocol/openid-connect/token");
  url.pathname = joinPath(url.pathname, pathTemplate.expand({
    realmName: settings.realmName ?? defaultRealm
  }));
  const credentials = settings.credentials ?? {};
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

// node_modules/@keycloak/keycloak-admin-client/lib/utils/decode.js
function decodeToken(token) {
  const [, payload] = token?.split(".") || [];
  if (typeof payload !== "string") {
    return {};
  }
  let decoded;
  try {
    decoded = base64UrlDecode(payload);
  } catch (error) {
    throw new Error("Unable to decode token, payload is not a valid Base64URL value.", { cause: error });
  }
  try {
    return JSON.parse(decoded);
  } catch (error) {
    throw new Error("Unable to decode token, payload is not a valid JSON value.", { cause: error });
  }
}
function base64UrlDecode(input) {
  let output = input.replaceAll("-", "+").replaceAll("_", "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("Input is not of the correct length.");
  }
  try {
    return b64DecodeUnicode(output);
  } catch {
    return atob(output);
  }
}
function b64DecodeUnicode(input) {
  return decodeURIComponent(atob(input).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}

// node_modules/@keycloak/keycloak-admin-client/lib/client.js
var MIN_VALIDITY = 5;
var KeycloakAdminClient = class {
  // Resources
  users;
  userStorageProvider;
  groups;
  roles;
  organizations;
  workflows;
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
  ssf;
  // Members
  baseUrl;
  realmName;
  scope;
  accessToken;
  refreshToken;
  timeout;
  enableExperimentalApis;
  #requestOptions;
  #globalRequestArgOptions;
  #tokenProvider;
  #accessTokenDecoded;
  #refreshTokenDecoded;
  #credentials;
  constructor(connectionConfig) {
    this.baseUrl = connectionConfig?.baseUrl || defaultBaseUrl;
    this.realmName = connectionConfig?.realmName || defaultRealm;
    this.timeout = connectionConfig?.timeout;
    this.enableExperimentalApis = connectionConfig?.enableExperimentalApis ?? false;
    this.#requestOptions = connectionConfig?.requestOptions;
    this.#globalRequestArgOptions = connectionConfig?.requestArgOptions;
    this.users = new Users(this);
    this.userStorageProvider = new UserStorageProvider(this);
    this.groups = new Groups(this);
    this.roles = new Roles(this);
    this.organizations = new Organizations(this);
    this.workflows = new Workflows(this);
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
    this.ssf = new Ssf(this);
  }
  async auth(credentials) {
    const { accessToken, refreshToken } = await getToken(this.#getTokenSettings(credentials));
    this.#credentials = credentials;
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
  }
  #getTokenSettings(credentials) {
    return {
      baseUrl: this.baseUrl,
      realmName: this.realmName,
      scope: this.scope,
      credentials,
      requestOptions: {
        ...this.#requestOptions,
        ...this.timeout ? { signal: AbortSignal.timeout(this.timeout) } : {}
      }
    };
  }
  registerTokenProvider(provider) {
    if (this.#tokenProvider) {
      throw new Error("An existing token provider was already registered.");
    }
    this.#tokenProvider = provider;
  }
  setAccessToken(token) {
    this.accessToken = token;
    this.#accessTokenDecoded = decodeToken(token);
  }
  setRefreshToken(token) {
    this.refreshToken = token;
    this.#refreshTokenDecoded = token ? decodeToken(token) : void 0;
  }
  async getAccessToken() {
    if (this.#tokenProvider) {
      return this.#tokenProvider.getAccessToken();
    }
    if (this.isTokenExpired()) {
      await this.#refreshAccessToken();
    }
    return this.accessToken;
  }
  async #refreshAccessToken() {
    if (!this.refreshToken || !this.#credentials) {
      throw new Error("Cannot refresh token: missing refresh token or credentials");
    }
    if (this.isRefreshTokenExpired()) {
      throw new Error("Cannot refresh token: refresh token has expired");
    }
    const { accessToken, refreshToken } = await getToken(this.#getTokenSettings({
      grantType: "refresh_token",
      clientId: this.#credentials.clientId,
      clientSecret: this.#credentials.clientSecret,
      refreshToken: this.refreshToken
    }));
    this.setAccessToken(accessToken);
    if (refreshToken) {
      this.setRefreshToken(refreshToken);
    }
  }
  isTokenExpired() {
    return this.#isExpired(this.#accessTokenDecoded);
  }
  isRefreshTokenExpired() {
    return this.#isExpired(this.#refreshTokenDecoded);
  }
  #isExpired(token) {
    if (typeof token?.exp !== "number") {
      return false;
    }
    const expiresIn = token.exp - Math.ceil((/* @__PURE__ */ new Date()).getTime() / 1e3) - MIN_VALIDITY;
    return expiresIn < 0;
  }
  getRequestOptions() {
    return this.#requestOptions;
  }
  getGlobalRequestArgOptions() {
    return this.#globalRequestArgOptions;
  }
  setConfig(connectionConfig) {
    if (typeof connectionConfig.baseUrl === "string" && connectionConfig.baseUrl) {
      this.baseUrl = connectionConfig.baseUrl;
    }
    if (typeof connectionConfig.realmName === "string" && connectionConfig.realmName) {
      this.realmName = connectionConfig.realmName;
    }
    this.#requestOptions = connectionConfig.requestOptions;
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

// node_modules/@keycloak/keycloak-admin-client/lib/defs/organizationInvitationRepresentation.js
var OrganizationInvitationStatus;
(function(OrganizationInvitationStatus2) {
  OrganizationInvitationStatus2["PENDING"] = "PENDING";
  OrganizationInvitationStatus2["EXPIRED"] = "EXPIRED";
})(OrganizationInvitationStatus || (OrganizationInvitationStatus = {}));

// node_modules/@keycloak/keycloak-admin-client/lib/index.js
var lib_default = KeycloakAdminClient;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Keycloak
});
