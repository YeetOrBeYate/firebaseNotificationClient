/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/firebase-messaging-sw.js":
/*!*****************************************!*\
  !*** ./public/firebase-messaging-sw.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');\nimportScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');\nvar config = {\n  apiKey: \"AIzaSyDOinX_SwCqiZdYOxwhVUNdO0G6jAloy1s\",\n  authDomain: \"notificationkyletest.firebaseapp.com\",\n  databaseURL: \"https://notificationkyletest.firebaseio.com\",\n  projectId: \"notificationkyletest\",\n  storageBucket: \"notificationkyletest.appspot.com\",\n  messagingSenderId: \"1053566752764\",\n  appId: \"1:1053566752764:web:c5359dfb2ec19827d78479\"\n};\nfirebase.initializeApp(config);\nvar messaging = firebase.messaging();\nmessaging.setBackgroundMessageHandler(function (payload) {\n  console.log('[firebase-messaging-sw.js] Received background message ', payload);\n  var notificationTitle = payload.data.title;\n  var notificationOptions = {\n    body: payload.data.body,\n    icon: '/firebase-logo.png'\n  };\n  return self.registration.showNotification(notificationTitle, notificationOptions);\n});\n\nself.onnotificationclick = function (event) {\n  console.log('On notification click: ', event.notification.tag); // event.notification.close();\n  // This looks to see if the current is already open and\n  // focuses if it is\n\n  event.waitUntil(clients.matchAll({\n    type: \"window\"\n  }).then(function (clientList) {\n    for (var i = 0; i < clientList.length; i++) {\n      var client = clientList[i];\n      if (client.url == '/' && 'focus' in client) return client.focus();\n    }\n\n    if (clients.openWindow) return clients.openWindow('/');\n  }));\n};\n\n//# sourceURL=webpack:///./public/firebase-messaging-sw.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./public/firebase-messaging-sw.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./public/firebase-messaging-sw.js */\"./public/firebase-messaging-sw.js\");\n\n\n//# sourceURL=webpack:///multi_./public/firebase-messaging-sw.js?");

/***/ })

/******/ });