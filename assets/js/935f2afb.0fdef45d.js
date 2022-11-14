"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"v2.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\udc4b Welcome","href":"/docs/","docId":"welcome"},{"type":"category","label":"API","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\ud83d\udce6 Fiber","href":"/docs/api/fiber","docId":"api/fiber"},{"type":"link","label":"\ud83d\ude80 App","href":"/docs/api/app","docId":"api/app"},{"type":"link","label":"\ud83e\udde0 Ctx","href":"/docs/api/ctx","docId":"api/ctx"},{"type":"link","label":"\ud83d\udccb Constants","href":"/docs/api/constants","docId":"api/constants"},{"type":"link","label":"\ud83c\udf0e Client","href":"/docs/api/client","docId":"api/client"},{"type":"category","label":"\ud83e\uddec Middleware","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"BasicAuth","href":"/docs/api/middleware/basicauth","docId":"api/middleware/basicauth"},{"type":"link","label":"Cache","href":"/docs/api/middleware/cache","docId":"api/middleware/cache"},{"type":"link","label":"Compress","href":"/docs/api/middleware/compress","docId":"api/middleware/compress"},{"type":"link","label":"CORS","href":"/docs/api/middleware/cors","docId":"api/middleware/cors"},{"type":"link","label":"CSRF","href":"/docs/api/middleware/csrf","docId":"api/middleware/csrf"},{"type":"link","label":"Encrypt Cookie","href":"/docs/api/middleware/encryptcookie","docId":"api/middleware/encryptcookie"},{"type":"link","label":"EnvVar","href":"/docs/api/middleware/envvar","docId":"api/middleware/envvar"},{"type":"link","label":"ETag","href":"/docs/api/middleware/etag","docId":"api/middleware/etag"},{"type":"link","label":"ExpVar","href":"/docs/api/middleware/expvar","docId":"api/middleware/expvar"},{"type":"link","label":"Favicon","href":"/docs/api/middleware/favicon","docId":"api/middleware/favicon"},{"type":"link","label":"FileSystem","href":"/docs/api/middleware/filesystem","docId":"api/middleware/filesystem"},{"type":"link","label":"Limiter","href":"/docs/api/middleware/limiter","docId":"api/middleware/limiter"},{"type":"link","label":"Logger","href":"/docs/api/middleware/logger","docId":"api/middleware/logger"},{"type":"link","label":"Monitor","href":"/docs/api/middleware/monitor","docId":"api/middleware/monitor"},{"type":"link","label":"Pprof","href":"/docs/api/middleware/pprof","docId":"api/middleware/pprof"},{"type":"link","label":"Proxy","href":"/docs/api/middleware/proxy","docId":"api/middleware/proxy"},{"type":"link","label":"Recover","href":"/docs/api/middleware/recover","docId":"api/middleware/recover"},{"type":"link","label":"RequestID","href":"/docs/api/middleware/requestid","docId":"api/middleware/requestid"},{"type":"link","label":"Session","href":"/docs/api/middleware/session","docId":"api/middleware/session"},{"type":"link","label":"Skip","href":"/docs/api/middleware/skip","docId":"api/middleware/skip"},{"type":"link","label":"Timeout","href":"/docs/api/middleware/timeout","docId":"api/middleware/timeout"}],"href":"/docs/category/-middleware"}],"href":"/docs/category/api"},{"type":"category","label":"Guide","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\ud83d\udd0c Routing","href":"/docs/guide/routing","docId":"guide/routing"},{"type":"link","label":"\ud83c\udfad Grouping","href":"/docs/guide/grouping","docId":"guide/grouping"},{"type":"link","label":"\ud83d\udcdd Templates","href":"/docs/guide/templates","docId":"guide/templates"},{"type":"link","label":"\ud83d\udc1b Error Handling","href":"/docs/guide/error-handling","docId":"guide/error-handling"},{"type":"link","label":"\ud83d\udd0e Validation","href":"/docs/guide/validation","docId":"guide/validation"},{"type":"link","label":"\ud83e\ude9d Hooks","href":"/docs/guide/hooks","docId":"guide/hooks"},{"type":"link","label":"\u26a1 Make Fiber Faster","href":"/docs/guide/faster-fiber","docId":"guide/faster-fiber"}],"href":"/docs/category/guide"},{"type":"category","label":"Extra","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\ud83e\udd14 FAQ","href":"/docs/extra/faq","docId":"extra/faq"},{"type":"link","label":"\ud83d\udcca Benchmarks","href":"/docs/extra/benchmarks","docId":"extra/benchmarks"}],"href":"/docs/category/extra"}]},"docs":{"api/app":{"id":"api/app","title":"\ud83d\ude80 App","description":"The app instance conventionally denotes the Fiber application.","sidebar":"tutorialSidebar"},"api/client":{"id":"api/client","title":"\ud83c\udf0e Client","description":"The Client struct represents the Fiber HTTP Client.","sidebar":"tutorialSidebar"},"api/constants":{"id":"api/constants","title":"\ud83d\udccb Constants","description":"Some constants for Fiber.","sidebar":"tutorialSidebar"},"api/ctx":{"id":"api/ctx","title":"\ud83e\udde0 Ctx","description":"The Ctx struct represents the Context which hold the HTTP request and response. It has methods for the request query string, parameters, body, HTTP headers, and so on.","sidebar":"tutorialSidebar"},"api/fiber":{"id":"api/fiber","title":"\ud83d\udce6 Fiber","description":"Fiber represents the fiber package where you start to create an instance.","sidebar":"tutorialSidebar"},"api/middleware/basicauth":{"id":"api/middleware/basicauth","title":"BasicAuth","description":"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.","sidebar":"tutorialSidebar"},"api/middleware/cache":{"id":"api/middleware/cache","title":"Cache","description":"Cache middleware for Fiber designed to intercept responses and cache them. This middleware will cache the Body, Content-Type and StatusCode using the c.Path() as unique identifier. Special thanks to @codemicro for creating this middleware for Fiber core!","sidebar":"tutorialSidebar"},"api/middleware/compress":{"id":"api/middleware/compress","title":"Compress","description":"Compression middleware for Fiber that will compress the response using gzip, deflate and brotli compression depending on the Accept-Encoding header.","sidebar":"tutorialSidebar"},"api/middleware/cors":{"id":"api/middleware/cors","title":"CORS","description":"CORS middleware for Fiber that can be used to enable Cross-Origin Resource Sharing with various options.","sidebar":"tutorialSidebar"},"api/middleware/csrf":{"id":"api/middleware/csrf","title":"CSRF","description":"CSRF middleware for Fiber that provides Cross-site request forgery protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as \\"safe\\" by RFC7231 \\\\(GET, HEAD, OPTIONS, or TRACE\\\\). When the csrf token is invalid, this middleware will return the fiber.ErrForbidden error. When no csrf cookie is set, or the token has expired, a new token will be generated and csrf cookie set.","sidebar":"tutorialSidebar"},"api/middleware/encryptcookie":{"id":"api/middleware/encryptcookie","title":"Encrypt Cookie","description":"Encrypt middleware for Fiber which encrypts cookie values. Note: this middleware does not encrypt cookie names.","sidebar":"tutorialSidebar"},"api/middleware/envvar":{"id":"api/middleware/envvar","title":"EnvVar","description":"EnvVar middleware for Fiber that can be used to expose environment variables with various options.","sidebar":"tutorialSidebar"},"api/middleware/etag":{"id":"api/middleware/etag","title":"ETag","description":"ETag middleware for Fiber that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.","sidebar":"tutorialSidebar"},"api/middleware/expvar":{"id":"api/middleware/expvar","title":"ExpVar","description":"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.","sidebar":"tutorialSidebar"},"api/middleware/favicon":{"id":"api/middleware/favicon","title":"Favicon","description":"Favicon middleware for Fiber that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.","sidebar":"tutorialSidebar"},"api/middleware/filesystem":{"id":"api/middleware/filesystem","title":"FileSystem","description":"optionals? within the prefix path are not supported!","sidebar":"tutorialSidebar"},"api/middleware/limiter":{"id":"api/middleware/limiter","title":"Limiter","description":"Limiter middleware for Fiber used to limit repeated requests to public APIs and/or endpoints such as password reset etc. Also useful for API clients, web crawling, or other tasks that need to be throttled.","sidebar":"tutorialSidebar"},"api/middleware/logger":{"id":"api/middleware/logger","title":"Logger","description":"Logger middleware for Fiber that logs HTTP request/response details.","sidebar":"tutorialSidebar"},"api/middleware/monitor":{"id":"api/middleware/monitor","title":"Monitor","description":"Monitor middleware for Fiber that reports server metrics, inspired by express-status-monitor","sidebar":"tutorialSidebar"},"api/middleware/pprof":{"id":"api/middleware/pprof","title":"Pprof","description":"Pprof middleware for Fiber that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/.","sidebar":"tutorialSidebar"},"api/middleware/proxy":{"id":"api/middleware/proxy","title":"Proxy","description":"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.","sidebar":"tutorialSidebar"},"api/middleware/recover":{"id":"api/middleware/recover","title":"Recover","description":"Recover middleware for Fiber that recovers from panics anywhere in the stack chain and handles the control to the centralized ErrorHandler.","sidebar":"tutorialSidebar"},"api/middleware/requestid":{"id":"api/middleware/requestid","title":"RequestID","description":"RequestID middleware for Fiber that adds an indentifier to the response.","sidebar":"tutorialSidebar"},"api/middleware/session":{"id":"api/middleware/session","title":"Session","description":"Session middleware for Fiber.","sidebar":"tutorialSidebar"},"api/middleware/skip":{"id":"api/middleware/skip","title":"Skip","description":"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.","sidebar":"tutorialSidebar"},"api/middleware/timeout":{"id":"api/middleware/timeout","title":"Timeout","description":"Timeout middleware for Fiber. As a fiber.Handler wrapper, it creates a context with context.WithTimeout and pass it in UserContext. If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ErrorHandler.","sidebar":"tutorialSidebar"},"extra/benchmarks":{"id":"extra/benchmarks","title":"\ud83d\udcca Benchmarks","description":"These benchmarks aim to compare the performance of Fiber and other web frameworks.","sidebar":"tutorialSidebar"},"extra/faq":{"id":"extra/faq","title":"\ud83e\udd14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","sidebar":"tutorialSidebar"},"guide/error-handling":{"id":"guide/error-handling","title":"\ud83d\udc1b Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","sidebar":"tutorialSidebar"},"guide/faster-fiber":{"id":"guide/faster-fiber","title":"\u26a1 Make Fiber Faster","description":"Custom JSON Encoder/Decoder","sidebar":"tutorialSidebar"},"guide/grouping":{"id":"guide/grouping","title":"\ud83c\udfad Grouping","description":"Paths","sidebar":"tutorialSidebar"},"guide/hooks":{"id":"guide/hooks","title":"\ud83e\ude9d Hooks","description":"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:","sidebar":"tutorialSidebar"},"guide/routing":{"id":"guide/routing","title":"\ud83d\udd0c Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","sidebar":"tutorialSidebar"},"guide/templates":{"id":"guide/templates","title":"\ud83d\udcdd Templates","description":"Fiber supports server-side template engines.","sidebar":"tutorialSidebar"},"guide/validation":{"id":"guide/validation","title":"\ud83d\udd0e Validation","description":"Validator package","sidebar":"tutorialSidebar"},"welcome":{"id":"welcome","title":"\ud83d\udc4b Welcome","description":"An online API documentation with examples so you can start building web apps with Fiber right away!","sidebar":"tutorialSidebar"}}}')}}]);