window.onload = function () {
  const closeWebviewObj = {
    closeWebview: function () {
      closeWebviewObj.postMessage({
        functionName: 'calendarui_closecalendarmobile',
        params: {},
      });
    },
    getJsCallId: function () {
      return 'id' + Math.random().toString(16).slice(2);
    },
    postMessage: function (message) {
      try {
        message.jsCallId = closeWebviewObj.getJsCallId();
        const json = JSON.stringify(message);
        if (closeWebviewObj.isAndroid()) {
          window.android.postMessage(json);
        }
        if (closeWebviewObj.isWebView2()) {
          window.chrome.webview.postMessage(json);
        } else if (window.chrome && window.webkit) {
          window.webkit.messageHandlers.jsOCHelper.postMessage(json);
        } else if (closeWebviewObj.isMacOS()) {
          window.webkit.messageHandlers.jsOCHelper.postMessage(message);
        }
      } catch (e) {
        // console.error('upgrade postMessage error', e);
        // todo:
      }
    },
    isAndroid: function () {
      return window.android;
    },
    isWebView2: function () {
      return window.chrome && window.chrome.webview;
    },
    isMacOS () {
      return !window.chrome && window.webkit;
    },
  };

  const backDom = document.getElementById('back');
  backDom.addEventListener('click', closeWebviewObj.closeWebview);
};
