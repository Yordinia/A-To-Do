/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable no-unused-vars */\r\n/* eslint func-names: [\"error\", \"never\", { \"generators\": \"always\" }] */\r\nconst myNodelist = document.getElementsByTagName('LI');\r\nlet i;\r\n/* eslint-disable-next-line no-plusplus */\r\nfor (i = 0; i < myNodelist.length; i++) {\r\n  const span = document.createElement('SPAN');\r\n  const txt = document.createTextNode('\\u00D7');\r\n  span.className = 'close';\r\n  span.appendChild(txt);\r\n  myNodelist[i].appendChild(span);\r\n}\r\n\r\nconst close = document.getElementsByClassName('close');\r\n/* eslint-disable-next-line no-plusplus */\r\nfor (i = 0; i < close.length; i++) {\r\n  close[i].onclick = function () {\r\n    const div = this.parentElement;\r\n    div.style.display = 'none';\r\n  };\r\n}\r\n\r\nconst list = document.querySelector('ul');\r\nlist.addEventListener('click', (ev) => {\r\n  if (ev.target.tagName === 'LI') {\r\n    ev.target.classList.toggle('checked');\r\n  }\r\n}, false);\r\n\r\nfunction newElement() {\r\n  const li = document.createElement('li');\r\n  const inputValue = document.getElementById('myInput').value;\r\n  const t = document.createTextNode(inputValue);\r\n  li.appendChild(t);\r\n  if (inputValue === '') {\r\n    alert('You must write something!');\r\n  } else {\r\n    document.getElementById('myUL').appendChild(li);\r\n  }\r\n  document.getElementById('myInput').value = '';\r\n\r\n  const span = document.createElement('SPAN');\r\n  const txt = document.createTextNode('\\u00D7');\r\n  span.className = 'close';\r\n  span.appendChild(txt);\r\n  li.appendChild(span);\r\n  /* eslint-disable-next-line no-plusplus */\r\n  for (i = 0; i < close.length; i++) {\r\n    close[i].onclick = function () {\r\n      const div = this.parentElement;\r\n      div.style.display = 'none';\r\n    };\r\n  }\r\n}\r\n\r\nfunction removeAll() {\r\n  const lst = document.getElementsByTagName('ul');\r\n  lst[0].innerHTML = '';\r\n}\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;