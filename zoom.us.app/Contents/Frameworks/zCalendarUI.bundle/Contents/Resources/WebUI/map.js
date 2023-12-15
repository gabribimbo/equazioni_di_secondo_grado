;(function(){
  var map = {
  "commitId": "a168700eacc798f98a9f19e4d15253a8ca435940",
  "branchName": "release-client-5.15.x",
  "buildTime": "2023-07-24 02:24:03 GMT",
  "buildVersion": "5.1.563",
  "css": [
    "@zoom/client-calendar/static/css/chunk-vendors.dc891ce4.css",
    "@zoom/client-calendar/static/css/app.93082b85.css"
  ],
  "js": [
    "@zoom/client-calendar/static/js/chunk-vendors.17c1fa2e.js",
    "@zoom/client-calendar/static/js/app.90ef6db8.js"
  ],
  "key": "@zoom/client-calendar"
};
  var prefix = 'https://dev-integration.zoomdev.us/fe-static/';
  map.css && map.css.forEach(function (cssItem) {
    var linkTag = document.createElement('link');
    var cssURL = prefix +  cssItem ;
    linkTag.href = cssURL;
    linkTag.setAttribute('rel','stylesheet');
    document.head.appendChild(linkTag);
  });
  map.js && map.js.forEach(function (jsItem) {
    var scriptTag = document.createElement("script");
    var jsURL = prefix +  jsItem;
    scriptTag.setAttribute("src", jsURL);
    document.body.appendChild(scriptTag);
  });
  window.domainFromServer= "https://dev-integration.zoomdev.us/fe-static/";
})();
