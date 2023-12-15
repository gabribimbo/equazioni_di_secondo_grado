;(function(){
  var map = {
  "commitId": "264b6ea61eb0cc5f148da820e40509cb89aea075",
  "branchName": "release-client-5.15.x",
  "buildTime": "Fri, 21 Jul 2023 09:14:22 GMT",
  "buildVersion": "5.1.333",
  "css": [
    "@zoom/client-scheduler/static/css/chunk-vendors.af34567c.css",
    "@zoom/client-scheduler/static/css/index.f31cf0bd.css"
  ],
  "js": [
    "@zoom/client-scheduler/static/js/chunk-vendors.c685a8ed.js",
    "@zoom/client-scheduler/static/js/index.7adefedc.js"
  ]
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
