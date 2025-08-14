import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_CGwnN-b5.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/danlee/CascadeProjects/met-electrical-website/","cacheDir":"file:///Users/danlee/CascadeProjects/met-electrical-website/node_modules/.astro/","outDir":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/","srcDir":"file:///Users/danlee/CascadeProjects/met-electrical-website/src/","publicDir":"file:///Users/danlee/CascadeProjects/met-electrical-website/public/","buildClientDir":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/client/","buildServerDir":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/server/","adapterName":"","routes":[{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/consumer-units/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/consumer-units","isIndex":false,"type":"page","pattern":"^\\/services\\/consumer-units\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"consumer-units","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/consumer-units.astro","pathname":"/services/consumer-units","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/eicr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/eicr","isIndex":false,"type":"page","pattern":"^\\/services\\/eicr\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"eicr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/eicr.astro","pathname":"/services/eicr","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/fault-finding/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/fault-finding","isIndex":false,"type":"page","pattern":"^\\/services\\/fault-finding\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"fault-finding","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/fault-finding.astro","pathname":"/services/fault-finding","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/thank-you/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/danlee/CascadeProjects/met-electrical-website/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.metelectrical.co.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/services/consumer-units.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/services/eicr.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/services/fault-finding.astro",{"propagation":"none","containsHead":true}],["/Users/danlee/CascadeProjects/met-electrical-website/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/services/consumer-units@_@astro":"pages/services/consumer-units.astro.mjs","\u0000@astro-page:src/pages/services/eicr@_@astro":"pages/services/eicr.astro.mjs","\u0000@astro-page:src/pages/services/fault-finding@_@astro":"pages/services/fault-finding.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_ZZA4CzE5.mjs","/Users/danlee/CascadeProjects/met-electrical-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CPebhIrO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/danlee/CascadeProjects/met-electrical-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\");t&&e&&(t.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")}),document.addEventListener(\"click\",n=>{!t.contains(n.target)&&!e.contains(n.target)&&e.classList.add(\"hidden\")}));"]],"assets":["/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/about/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/contact/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/faq/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/consumer-units/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/eicr/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/fault-finding/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/services/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/thank-you/index.html","/file:///Users/danlee/CascadeProjects/met-electrical-website/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"+E/FXp1zghaTm8WQthJjuvw0n919jw4fJHC+fZUYKSM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
